# Discord Clone
Welcome to the Discord Clone built with Next.js! This project aims to replicate the functionality and design of the popular communication platform Discord using Next.js framework.

![Demo photo](https://utfs.io/f/ff27ddb0-dadb-426a-b064-72d8dd3b85df-w4d8p.png)
## Features

1. **Real-time Chatting:** Enjoy seamless real-time messaging with friends and communities. Send text messages instantly and engage in conversations effortlessly.

2. **Voice and Video Calls:** Connect with friends through high-quality voice and video calls. Experience crystal-clear audio and video communication, whether you're chatting one-on-one or in a group.

3. **Server and Channel Management:** Create and manage servers and channels to organize your communities and conversations efficiently. Customize permissions and roles to maintain control over your server environment.
4. **Direct messages**: Conversate with any members of the server directly. You can give video call or an audio call directly.

5. **Rich Media Support:** Share images, videos, GIFs, and other media files within your conversations. Express yourself with a wide range of multimedia options.

6. **Emojis and Reactions:** Spruce up your conversations with emojis and reactions. React to messages to express your feelings or simply add some fun to the chat.


## Tech Stacks

- **Frontend:**
  - [Next.js 13.5.4](https://nextjs.org/)
  - [React.js 18](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [ClerkJS (For Authentication)](https://clerk.com/docs/references/javascript/overview)
  - [LiveKit (For realtime video calling)](https://livekit.io/)
  - [UploadThing (For photo upload)](https://uploadthing.com/dashboard)
  - [Emoji-mart (Using Emojis)](https://www.npmjs.com/package/emoji-mart)
  - [Zustand (For State management)](https://www.npmjs.com/package/zustand)
  - [Zod (For form handling)](https://www.npmjs.com/package/zod)
  - [Radix UI](https://www.radix-ui.com/)
  - [Lucide react](https://lucide.dev/guide/packages/lucide-react)
  - [Axios](https://www.npmjs.com/package/axios)
  - [React Query](https://www.npmjs.com/package/@tanstack/react-query)
  - Typescript

- **Backend :**
  - Node.js
  - Socket IO
  - [Supabase (Postresql Database)](https://supabase.com/dashboard/)

Thank you for your interest in DiscordClone and your willingness to contribute!
## Local development
### Fork the repo

To contribute code to Discor-Clone, you must fork the [Discord-Clone](https://github.com/Yeasir0032/Discord-Clone) repo.

### Clone the repo

1. Clone your GitHub forked repo:

   ```sh
   git clone https://github.com/<github_username>/Discord-Clone
   ```

2. Go to the Supabase directory:
   ```sh
   cd discord-clone
   ```
   
### Install dependencies

1. Install the dependencies in the root of the repo.

   ```sh
   npm install # install dependencies
   ```

2. Copy the example `.env.local.example` to `.env.local`

   ```sh
   .env.local.example 
   ```
### Setup Environment variables
1. Create a .env.local in your root directory
2. Visit to [Supabase](https://supabase.com/dashboard/) website to create a project,then get its base url and base anon key.
3. Visit to [UploadThing](https://uploadthing.com/dashboard) website to create a new app and get its appid and secret key
4. Visit to [ClerkJS](https://clerk.com/docs/references/javascript/overview) website to create a new app and get its public key and secret key 
5. Visit to [LiveKit](https://livekit.io/) website to create a new app and get its public key,url and secret key
6. Paste the credentials in the respective positions.
### Testing
To start a development server 
   ```sh
   npm run dev # start all the applications
   ```
Visit [http://localhost:3000/](http://localhost:3000/)
 
