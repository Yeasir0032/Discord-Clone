import { supabase } from "@/components/client";
import { currentProfile } from "@/lib/current-profile";
import { profile } from "console";
import { NextResponse } from "next/server";

const messages_Batch = 10;
export async function GET(req: Request) {
  try {
    const profile = await currentProfile();
    const { searchParams } = new URL(req.url);
    const cursor = searchParams.get("cursor");
    const conversationId = searchParams.get("conversationId");
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    // if(!cursor) return new NextResponse("NO cursor I got", {status: 400})
    if (!conversationId)
      return new NextResponse("No conversation I got", { status: 400 });
    const { data, error } = await supabase
      .from("DirectMessage")
      .select("*,Member(*,Profile(name,imgUrl,id))")
      .eq("conversationId", conversationId)
      .range(
        Number.parseInt(cursor || "0"),
        Number.parseInt(cursor || "0") + messages_Batch
      )
      .order("created_at", { ascending: false });
    if (error) return new NextResponse("Server Error", { status: 400 });
    let nextCursor = null;
    if (data.length === 11)
      nextCursor = Number.parseInt(cursor || "0") + data.length;
    return NextResponse.json({
      item: data,
      nextCursor,
    });
  } catch (error) {
    console.log("MEssages get", error);
    return new NextResponse("Message Eror", { status: 500 });
  }
}
