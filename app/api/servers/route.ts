import { v4 as uuidv4 } from "uuid";
import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { supabase } from "@/components/client";

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json();
    const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    // I am making three post request for server, channel and member.
    const { data: server, error: serverError } = await supabase
      .from("Server")
      .insert([
        {
          profileId: profile[0].id,
          name,
          imgUrl: imageUrl,
          inviteCode: uuidv4(),
        },
      ])
      .select();
    const { data: channel, error: channelError } = await supabase
      .from("Channel")
      .insert([
        {
          profileId: profile[0].id,
          serverId: server?.[0].id,
          name: "general",
          type: "TEXT",
        },
      ])
      .select();
    const { data: member, error: memberError } = await supabase
      .from("Member")
      .insert([
        {
          profileId: profile[0].id,
          serverId: server?.[0].id,
          role: "ADMIN",
        },
      ])
      .select();

    if (serverError) console.log(serverError);
    return NextResponse.json(member);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
