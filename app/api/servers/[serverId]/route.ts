import { supabase } from "@/components/client";
import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  try {
    const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    if (!params.serverId)
      return new NextResponse("Server Id missing", { status: 400 });

    const { name, imageUrl } = await req.json();

    const { data, error } = await supabase
      .from("Server")
      .update({ name, imgUrl: imageUrl })
      .eq("id", params.serverId)
      .select();
    if (error) return new NextResponse("Error", { status: 500 });
    return NextResponse.json(data);
  } catch (error) {
    console.log("[SERVER_ID]", error);
    return new NextResponse("Internal Error ", { status: 500 });
  }
}
