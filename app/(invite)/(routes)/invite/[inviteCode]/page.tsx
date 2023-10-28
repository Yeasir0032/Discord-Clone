import { supabase } from "@/components/client";
import { InviteScreenModal } from "@/components/modals/invite-screen-modal";
import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface props {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage = async ({ params }: props) => {
  const profile = await currentProfile();
  if (!profile) return redirectToSignIn();
  if (!params.inviteCode) return redirect("/");

  const { data: memberToGetServerId, error: memberServerError } = await supabase
    .from("Server")
    .select("*")
    .eq("inviteCode", params.inviteCode);
  // console.log(memberServerError);
  if (memberServerError) return <div>Error</div>;
  if (memberToGetServerId?.length === 0) return redirect("/");

  const { data: memberTemp, error: memberError } = await supabase
    .from("Member")
    .select("profileId,serverId,Server(inviteCode)")
    .eq("profileId", profile[0].id);
  if (!memberTemp) return <div></div>;
  if (memberTemp.length !== 0) {
    //@ts-ignore
    if (memberTemp?.[0].Server?.inviteCode === params.inviteCode) {
      return redirect(`/servers/${memberTemp[0].serverId}`);
    }
  }

  const { data: insertMember, error: insertmemberError } = await supabase
    .from("Member")
    .insert([
      {
        profileId: profile[0].id,
        role: "GUEST",
        serverId: memberToGetServerId[0].id,
      },
    ])
    .select();

  if (insertMember) return redirect(`/servers/${memberToGetServerId[0].id}`);
  return <InviteScreenModal server={memberToGetServerId} />;
};

export default InviteCodePage;
