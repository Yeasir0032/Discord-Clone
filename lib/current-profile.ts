import { supabase } from "@/components/client";
import { auth } from "@clerk/nextjs";

export const currentProfile = async () => {
  const { userId } = auth();
  if (!userId) return null;
  const { data: Profile, error: profileError } = await supabase
    .from("Profile")
    .select("*")
    .eq("userId", userId);
  if (profileError) console.log(profileError);
  if (Profile?.length !== 0) return Profile;
  return null;
};
