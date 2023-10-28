import ChatHeader from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { supabase } from "@/components/client";
import { MediaRoom } from "@/components/media-room";
import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface props {
  params: { serverId: string; channelId: string };
}

const ChannelIdPage = async ({ params }: props) => {
  const profile = await currentProfile();
  if (!profile) return redirectToSignIn();
  const { data: server, error: serverError } = await supabase
    .from("Server")
    .select("*")
    .eq("id", params.serverId);
  const { data: member, error: memberError } = await supabase
    .from("Member")
    .select("*")
    .eq("serverId", params.serverId)
    .eq("profileId", profile[0].id);
  if (!member?.length) return redirect("/");
  const { data: channelData, error: channelError } = await supabase
    .from("Channel")
    .select("*")
    .eq("id", params.channelId);
  if (!channelData?.length) return redirect("/");
  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        type="channel"
        serverId={params.serverId}
        name={channelData[0].name}
        profile={profile}
        server={server}
      />
      {/* <div className="flex-1"></div> */}
      {channelData[0].type === "TEXT" && (
        <>
          <ChatMessages
            member={member}
            name={channelData[0].name}
            chatId={channelData[0].id}
            type="channel"
            apiUrl="/api/messages"
            socketUrl="/api/socket/messages"
            sockerQuery={{
              channelId: channelData[0].id,
              serverId: params.serverId,
            }}
            paramKey="channelId"
            paramValue={channelData[0].id}
          />
          <ChatInput
            name={channelData[0].name}
            type="channel"
            apiUrl="/api/socket/messages"
            query={{ channelId: channelData[0].id, serverId: params.serverId }}
          />
        </>
      )}
      {channelData[0].type === "AUDIO" && (
        <MediaRoom chatId={channelData[0].id} video={false} audio={true} />
      )}
      {channelData[0].type === "VIDEO" && (
        <MediaRoom chatId={channelData[0].id} video={true} audio={true} />
      )}
    </div>
  );
};

export default ChannelIdPage;
