import ChatHeader from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { supabase } from "@/components/client";
import { MediaRoom } from "@/components/media-room";
import { getOrFindConversation } from "@/lib/conversation";
import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface props {
  params: {
    serverId: string;
    memberId: string;
  };
  searchParams: {
    video?: boolean;
  };
}

const MemberConversationPage = async ({ params, searchParams }: props) => {
  const profile = await currentProfile();
  if (!profile) return redirectToSignIn();

  const { data: currentMember, error: memError } = await supabase
    .from("Member")
    .select("id,profileId,serverId")
    .eq("profileId", profile[0].id)
    .eq("serverId", params.serverId);
  if (memError) return redirect("/");

  if (!currentMember.length) return <div>No member found</div>;
  const conversation = await getOrFindConversation(
    params.memberId,
    currentMember[0].id
  );
  if (!conversation) return redirect(`/servers/${params.serverId}`);
  const { memberOneId, memberTwoId } = conversation;
  const otherMemberId =
    memberOneId === currentMember[0].id ? memberTwoId : memberOneId;
  const { data: serverData, error: serError } = await supabase
    .from("Server")
    .select("*")
    .eq("id", params.serverId);
  const { data: otherMemberProfile, error: oMPError } = await supabase
    .from("Member")
    .select("id,Profile(*)")
    .eq("id", otherMemberId)
    .eq("serverId", params.serverId);
  if (oMPError) return <div>Some error occured</div>;
  // console.log(otherMemberProfile);

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        serverId={params.serverId}
        type="conversation"
        server={serverData}
        profile={profile}
        // @ts-ignore
        imgUrl={otherMemberProfile[0].Profile.imgUrl}
        // @ts-ignore
        name={otherMemberProfile[0].Profile.name}
      />
      {!searchParams.video ? (
        <>
          <ChatMessages
            member={currentMember}
            // @ts-ignore
            name={otherMemberProfile[0].Profile?.name}
            chatId={conversation.id}
            type="conversation"
            apiUrl="/api/direct-messages"
            paramKey="conversationId"
            paramValue={conversation.id}
            socketUrl="/api/socket/direct-messages"
            sockerQuery={{
              conversationId: conversation.id,
            }}
          />
          <ChatInput
            // @ts-ignore
            name={otherMemberProfile[0].Profile.name}
            type="conversation"
            apiUrl="/api/socket/direct-messages"
            query={{
              conversationId: conversation.id,
            }}
          />
        </>
      ) : (
        <MediaRoom chatId={conversation.id} video={true} audio={true} />
      )}
    </div>
  );
};

export default MemberConversationPage;
