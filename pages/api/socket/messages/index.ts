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
    // console.log(req.query);

    const { serverId, channelId } = req.query;
    if (!serverId) return res.status(400).json({ error: "ServerId missing" });
    if (!channelId)
      return res.status(400).json({ error: "Channel id Missing" });
    if (!content) return res.status(400).json({ error: "Content missing" });
    //Checking if the profile is in the server or not
    const { data: memberData, error: memberError } = await supabase
      .from("Member")
      .select("profileId,serverId,id")
      .eq("serverId", serverId)
      .eq("profileId", profile.id);
    if (!memberData?.length)
      return res.status(404).json({ error: "Server Not found" });

    //Checking if channel exists or not
    const { data: channelData, error: channelError } = await supabase
      .from("Channel")
      .select("id")
      .eq("id", channelId);
    if (!channelData?.length)
      return res.status(404).json({ error: "Channel Not found" });
    //Creating Message
    const { data: message, error: msgError } = await supabase
      .from("Message")
      .insert([
        {
          content,
          fileUrl,
          channelId,
          memberId: memberData[0].id,
        },
      ])
      .select("*,Member(*,Profile(*))");
    if (msgError) return res.status(400).json({ error: "Server Error" });
    //Making all user updates
    const channelKey = `chat:${channelId}:messages`;
    res.socket.server.io.emit(channelKey, message[0]);
    return res.status(200).json(message[0]);
  } catch (error) {
    console.log("Messages POSt ", error);
    return res.status(500).json({ message: "Internal Error" });
  }
}
