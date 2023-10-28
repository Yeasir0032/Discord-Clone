import { supabase } from "@/components/client";
import ServerSidebar from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();
  if (!profile) return redirectToSignIn();
  const { data: members, error: membersError } = await supabase
    .from("Member")
    .select("*")
    .eq("serverId", params.serverId)
    .eq("profileId", profile[0].id);
  if (members?.length === 0) return redirect("/");
  const { data: server, error: serverError } = await supabase
    .from("Server")
    .select("*")
    .eq("id", params.serverId);
  // console.log(server);
  if (server?.length === 0) return redirect("/");

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col inset-y-0 fixed">
        <ServerSidebar
          serverId={params.serverId}
          profile={profile}
          server={server}
        />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
