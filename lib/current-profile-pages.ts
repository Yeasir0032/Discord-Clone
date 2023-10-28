import { supabase } from "@/components/client";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";

export const currentProfilePages = async (req: NextApiRequest) => {
  const { userId } = getAuth(req);
  if (!userId) return null;
  const { data: Profile, error: profileError } = await supabase
    .from("Profile")
    .select("*")
    .eq("userId", userId);
  if (profileError) console.log(profileError);
  if (Profile?.length !== 0) return Profile?.[0];
  return null;
};
