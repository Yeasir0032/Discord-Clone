import { supabase } from "@/components/client";
import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    const { serverId, values } = await req.json();
    if (!serverId) return new NextResponse("Missing serverID", { status: 400 });
    if (values.name === "general")
      return new NextResponse("Name cannot be general", { status: 400 });

    const { data: server, error: serverError } = await supabase
      .from("Channel")
      .insert([
        {
          profileId: profile[0].id,
          serverId,
          name: values.name,
          type: values.type,
        },
      ])
      .select();
    if (serverError) return new NextResponse("API error", { status: 400 });
    return NextResponse.json(server);
  } catch (error) {
    console.log("CHANNELS_POST", error);
    return new NextResponse("API error", { status: 500 });
  }
}
