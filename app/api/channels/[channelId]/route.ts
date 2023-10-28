import { supabase } from "@/components/client";
import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { channelId: string } }
) {
  try {
    const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthhorized", { status: 401 });
    if (!params.channelId)
      return new NextResponse("Not found server Id", { status: 404 });
    const { error: channelError } = await supabase
      .from("Channel")
      .delete()
      .eq("id", params.channelId)
      .neq("name", "general");
    if (channelError) return new NextResponse("Server Error", { status: 407 });
    return new NextResponse("No error", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    const { channelId, values } = await req.json();
    if (!channelId)
      return new NextResponse("Missing channelID", { status: 400 });
    if (values.name === "general")
      return new NextResponse("Name cannot be general", { status: 400 });

    const { data: server, error: serverError } = await supabase
      .from("Channel")
      .update({ name: values.name, type: values.type })
      .eq("id", channelId)
      .select();
    if (serverError) return new NextResponse("API error", { status: 400 });
    return NextResponse.json(server);
  } catch (error) {
    console.log("CHANNELS_POST", error);
    return new NextResponse("API error", { status: 500 });
  }
}
