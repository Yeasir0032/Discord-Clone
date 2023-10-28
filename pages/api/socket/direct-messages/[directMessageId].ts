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
    const { directMessageId, conversationId } = req.query;
    const { content } = req.body;

    if (!profile) return res.status(401).json({ error: "Unauthorized" });
    if (!conversationId)
      return res.status(401).json({ error: "conversation Id missing" });

    const { data: conversationData, error: conversationError } = await supabase
      .from("Conversation")
      .select(
        "*,memberOne:memberOneId(*,Profile(*)),memberTwo:memberTwoId(*,Profile(*))"
      )
      .eq("id", conversationId);

    if (!conversationData?.length)
      return res.status(404).json({ error: "Conversation not match" });
    const member =
      conversationData[0].memberOne.profileId === profile?.id
        ? conversationData[0].memberOne
        : conversationData[0].memberTwo;

    const { data: DMData, error: DMError } = await supabase
      .from("DirectMessage")
      .select("id,deleted,memberId")
      .eq("id", directMessageId);
    if (!DMData?.length || DMData[0].deleted)
      return res.status(404).json({ error: "Message not found" });

    const canModify = DMData[0].memberId === member.id;

    let finalMessage = [];

    if (!canModify) return res.status(401).json({ error: "Unauthorized" });
    if (req.method === "DELETE") {
      const { data: updatedMessage, error: updatedMessageError } =
        await supabase
          .from("DirectMessage")
          .update({
            content: "This message has been deleted",
            deleted: true,
            fileUrl: null,
          })
          .eq("id", directMessageId)
          .select("*,Member(*,Profile(*))");
      if (!updatedMessage?.length)
        return res.status(500).json({ error: "Some error occurred" });
      finalMessage = updatedMessage;
    }
    if (req.method === "PATCH") {
      const { data: updatedMessage, error: updatedMessageError } =
        await supabase
          .from("DirectMessage")
          .update({
            content,
          })
          .eq("id", directMessageId)
          .select("*,Member(*,Profile(*))");
      if (!updatedMessage?.length)
        return res.status(500).json({ error: "Some error occurred" });
      finalMessage = updatedMessage;
    }
    const updateKey = `chat:${conversationId}:messages:update`;
    res?.socket?.server?.io?.emit(updateKey, finalMessage[0]);
    return res.status(200).json(finalMessage[0]);
  } catch (error) {
    console.log("Message id", error);
    return res.status(500).json({ error: "Internal Error" });
  }
}
