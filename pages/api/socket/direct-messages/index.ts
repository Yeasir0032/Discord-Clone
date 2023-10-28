import { supabase } from "@/components/client";
import { currentProfilePages } from "@/lib/current-profile-pages";
import { NextApiResponseServerIo } from "@/types";
import { NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  try {
    const profile = await currentProfilePages(req);
    if (!profile) return res.status(400).json({ error: "Unauthorized" });
    const { content, fileUrl } = req.body;

    const { conversationId } = req.query;
    if (!conversationId)
      return res.status(400).json({ error: "Conversation id Missing" });
    if (!content) return res.status(400).json({ error: "Content missing" });
    //Checking if the conversation exists or not
    const { data: memberData, error: memberError } = await supabase
      .from("Conversation")
      .select(
        "*,memberOne:memberOneId(*,Profile(*)),memberTwo:memberTwoId(*,Profile(*))"
      )
      .eq("id", conversationId);
    // console.log(memberData);
    if (!memberData?.length)
      return res.status(404).json({ error: "Conversation Not found" });
    const member =
      memberData[0]?.memberOne.profileId === profile.id
        ? memberData[0].memberOne
        : memberData[0].memberTwo;

    //Creating Message
    const { data: message, error: msgError } = await supabase
      .from("DirectMessage")
      .insert([
        {
          content,
          fileUrl,
          conversationId,
          memberId: member.id,
        },
      ])
      .select("*,Member(*,Profile(*))");
    if (msgError) return res.status(400).json({ error: "Server Error" });
    //Making all user updates
    const channelKey = `chat:${conversationId}:messages`;
    res.socket.server.io.emit(channelKey, message[0]);
    return res.status(200).json(message[0]);
  } catch (error) {
    console.log("Direct Messages POSt ", error);
    return res.status(500).json({ message: "Internal Error" });
  }
}
