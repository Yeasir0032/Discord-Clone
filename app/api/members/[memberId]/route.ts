import { supabase } from "@/components/client";
import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { memberId: string } }
) {
  try {
    const profile = await currentProfile();
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });
    const { role, serverId } = await req.json();
    if (!params.memberId)
      return new NextResponse("Member Id missing", { status: 400 });
    const { data, error } = await supabase
      .from("Member")
      .update({ role })
      .eq("id", params.memberId);
    const { data: memberTemp, error: memberError } = await supabase
      .from("Member")
      .select("*,Profile(*)")
      .eq("serverId", serverId);

    return NextResponse.json(memberTemp);
  } catch (error) {
    console.log("[MEMBER_ID_PATCH]", error);
    return new NextResponse("INTERNAL ERROR", { status: 500 });
  }
}
