import { supabase } from "@/components/client";
import ServerExplorerComponent from "@/components/home-layouts/server-explorer";
import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const serverExplorerPage = async () => {
  const profile = await currentProfile();
  if (!profile) return redirectToSignIn();
  const { data: Servers, error } = await supabase.from("Server").select();
  const { data: Server, error: ServerError } = await supabase
    .from("Member")
    .select("serverId")
    .eq("profileId", profile?.[0].id);

  if (Server?.length) return redirect(`/servers/${Server?.[0].serverId}`);
  return (
    <div>
      <ServerExplorerComponent serverData={Servers!} />
    </div>
  );
};
export default serverExplorerPage;
