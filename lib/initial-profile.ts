import { supabase } from "@/components/client";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }
  const { data: Profile, error: profileError } = await supabase
    .from("Profile")
    .select("*")
    .eq("userId", user.id);
  if (profileError) console.log(profileError);
  if (Profile?.length !== 0) return Profile;

  // const profile = await db.profile.findUnique({
  //   where: {
  //     userId: user.id,
  //   },
  // });
  // if (profile) {
  //   return profile;
  // }

  const { data: newProfile, error: newProfileError } = await supabase
    .from("Profile")
    .insert([
      {
        userId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imgUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    ])
    .select();

  return newProfile;

  // const newProfile = await db.profile.create({
  //   data: {
  //     userId: user.id,
  //     name: `${user.firstName} ${user.lastName}`,
  //     imgUrl: user.imageUrl,
  //     email: user.emailAddresses[0].emailAddress,
  //   },
  // });
  // return newProfile;
};
