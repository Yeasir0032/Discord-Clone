import { createClient } from "@supabase/supabase-js";
require('dotenv').config({ path: `.env.local` })


const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);



async function seedDataBase() {
    try {
        const profile = await supabase
            .from('Profile')
            .insert([{
                userId: `user_1`,
                name: `Dummy User`,
                imgUrl: "https://utfs.io/f/684fd07f-6421-4d5c-8ab4-4bc16c7e3cea-tpuwo3.jpg",
                email: `dummy_user_@example.com`,
            }])
            .select("id");

        const server = await supabase
            .from('Server')
            .insert([
                {
                    name: 'Sample Server',
                    imgUrl: 'https://utfs.io/f/0686af8c-8c20-423d-a273-79e07239dac7-7v9i42.avif',
                    inviteCode: 'invite_1',
                    profileId: profile.data![0].id
                }

            ]).select("id");

        const channel = await supabase
            .from('Channel')
            .insert([
                {
                    name: 'Sample Channel',
                    type: "TEXT",
                    serverId: server.data![0].id,
                    profileId: profile.data![0].id
                }
            ]);

        const memeber = await supabase.from('Member')
            .insert([{
                role: "ADMIN",
                profileId: profile.data![0].id,
                serverId: server.data![0].id
            }]);


        console.log("Database Seeded successfully");
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}
seedDataBase()