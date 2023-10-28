import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import { supabase } from "@/components/client";
import { InitialModal } from "@/components/modals/initial-modal";
import "@uploadthing/react/styles.css";

const SetupPage = async () => {
  const profile = await initialProfile();

  const { data: Server, error: ServerError } = await supabase
    .from("Member")
    .select("serverId")
    .eq("profileId", profile?.[0].id);

  if (Server?.length) return redirect(`/servers/${Server?.[0].serverId}`);
  // const server = await db.server.findFirst({
  //   where: {
  //     members: {
  //       some: {
  //         profileId: profile.id,
  //       },
  //     },
  //   },
  // });
  // if (server) {
  //   return redirect(`/servers/${server.id}`);
  // }
  return <InitialModal />;
};

export default SetupPage;
