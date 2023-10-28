import { supabase } from "@/components/client";
import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthhorized", { status: 401 });
    if (!params.serverId)
      return new NextResponse("Not found server Id", { status: 404 });
    const { error } = await supabase
      .from("Member")
      .delete()
      .eq("serverId", params.serverId)
      .eq("profileId", profile[0].id)
      .neq("role", "ADMIN");
    if (error) return new NextResponse("Some error occured", { status: 400 });

    return new NextResponse("No error", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthhorized", { status: 401 });
    if (!params.serverId)
      return new NextResponse("Not found server Id", { status: 404 });
    const { data: servedData, error: sererror } = await supabase
      .from("Server")
      .select("*")
      .eq("id", params.serverId)
      .eq("profileId", profile[0].id);
    if (servedData?.length === 0)
      return new NextResponse("You're not the admin", { status: 402 });
    // const { error: memberError } = await supabase
    //   .from("Member")
    //   .delete()
    //   .eq("serverId", params.serverId);
    // const { error: channelError } = await supabase
    //   .from("Channel")
    //   .delete()
    //   .eq("serverId", params.serverId);
    // if (channelError)
    //   return new NextResponse("Some error occured", { status: 400 });
    const { error } = await supabase
      .from("Server")
      .delete()
      .eq("id", params.serverId);

    return new NextResponse("No error", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
