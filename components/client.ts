import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
// import { cookies } from "next/headers";
// const cookieStore = cookies();
// export const supabase = createServerActionClient({
//   cookies: () => cookieStore,
// });
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);
