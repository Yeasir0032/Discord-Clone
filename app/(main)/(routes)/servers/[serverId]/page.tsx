import { supabase } from "@/components/client";
import { redirect } from "next/navigation";

interface serverIDProps {
  params: { serverId: string };
}

const ServerIdPage = async ({ params }: serverIDProps) => {
  const { data: server, error: serverError } = await supabase
    .from("Channel")
    .select("id,name,serverId")
    .eq("serverId", params.serverId)
    .eq("name", "general");
  if (serverError) return <div>Oops an error occured</div>;
  if (!server.length) return <div>Oops list error occured</div>;
  return redirect(`/servers/${params.serverId}/channels/${server[0].id}`);
};

export default ServerIdPage;
