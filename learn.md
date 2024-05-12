
## Local development:

---

### Fork the repo:

To contribute to this Discord-Clone, you must first fork the [Discord-Clone](https://github.com/Yeasir0032/Discord-Clone) repo.

### Clone the repo:

1. Clone your GitHub forked repo:

   ```sh
   git clone https://github.com/<github_username>/Discord-Clone
   ```

2. Go to the Discord-Clone directory:

   ```sh
   cd discord-clone
   ```
3. To install the dependencies, run:

   ```sh
   npm install
   ```
4. To start the development server, run in terminal:

   ```sh
   npm run dev
   ```

Note : The project's backend is based on nodejs, so make sure you have node version 20 or above installed in your machine, if not refer to this: https://nodejs.org/en/download.

### Setup environment variables

---

#### 1. Supabase setup:

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/projects) (create your account if you have not).
2. Create a new project.  
   ![Screenshot 2024-05-12 122005](https://github.com/meAyushSharma/file-converter--md-html/assets/146171218/b2332b87-9014-444e-847e-0edddfd41508)
3. Get your project url and anon api key.       
   Note : You should not reveal this api key as this works as a bridge between your database and project.
4. In your forked repo create a `.env.local` file, copy the contents from `.env.local.example` and paste the credentials in it:
   ```sh
   NEXT_PUBLIC_SUPABASE_URL=https(:)//some-string-here.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=anon-api-key-here
   ```


5. Connect to your supabase DB.
   ```sh
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
   const supabase = createClient(supabaseUrl, supabaseKey);
   ```

Supabase is an open source firebase alternative, that provides Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.     
Refer to this [Documentation](https://supabase.com/docs), for more information.
