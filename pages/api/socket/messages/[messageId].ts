import { supabase } from "@/components/client";
import { currentProfilePages } from "@/lib/current-profile-pages";
import { NextApiResponseServerIo } from "@/types";
import { NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo
) {
  if (req.method !== "DELETE" && req.method !== "PATCH") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const profile = await currentProfilePages(req);
    const { messageId, serverId, channelId } = req.query;
    const { content } = req.body;

    if (!profile) return res.status(401).json({ error: "Unauthorized" });
    if (!serverId) return res.status(401).json({ error: "Server Id missing" });
    if (!channelId)
      return res.status(401).json({ error: "Channel Id missing" });
    const { data: channelData, error: channelError } = await supabase
      .from("Channel")
      .select("id,serverId")
      .eq("id", channelId)
      .eq("serverId", serverId);
    const { data: memberData, error: memberError } = await supabase
      .from("Member")
      .select("profileId,serverId,role,id")
      .eq("profileId", profile.id)
      .eq("serverId", serverId);
    if (!memberData?.length)
      return res.status(404).json({ error: "Member and server not match" });

    const { data: messageData, error: messageError } = await supabase
      .from("Message")
      .select("id,deleted,memberId")
      .eq("id", messageId);
    if (!messageData?.length || messageData[0].deleted)
      return res.status(404).json({ error: "Message not found" });

    const canModify =
      messageData[0].memberId === memberData[0].id ||
      memberData[0].role === "MODERATOR" ||
      memberData[0].role === "ADMIN";

    let finalMessage = [];

    if (!canModify) return res.status(401).json({ error: "Unauthorized" });
    if (req.method === "DELETE") {
      const { data: updatedMessage, error: updatedMessageError } =
        await supabase
          .from("Message")
          .update({
            content: "This message has been deleted",
            deleted: true,
            fileUrl: null,
          })
          .eq("id", messageId)
          .select("*,Member(*,Profile(*))");
      if (!updatedMessage?.length)
        return res.status(500).json({ error: "Some error occurred" });
      finalMessage = updatedMessage;
    }
    if (req.method === "PATCH") {
      if (messageData[0].memberId !== memberData[0].id) {
        return res.status(401).json({ error: "Unauthorized (not owner)" });
      }
      const { data: updatedMessage, error: updatedMessageError } =
        await supabase
          .from("Message")
          .update({
            content,
          })
          .eq("id", messageId)
          .select("*,Member(*,Profile(*))");
      if (!updatedMessage?.length)
        return res.status(500).json({ error: "Some error occurred" });
      finalMessage = updatedMessage;
    }
    const updateKey = `chat:${channelId}:messages:update`;
    res?.socket?.server?.io?.emit(updateKey, finalMessage[0]);
    return res.status(200).json(finalMessage[0]);
  } catch (error) {
    console.log("Message id", error);
    return res.status(500).json({ error: "Internal Error" });
  }
}
