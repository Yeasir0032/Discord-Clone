<h1 align = "center"> Discord Clone </h1>

<div align="center">
<i> Welcome to the Discord Clone built with Next.js! This project aims to replicate the functionality and design of the popular communication platform Discord using the Next.js framework. </i>

<br>

![Demo photo](https://utfs.io/f/ff27ddb0-dadb-426a-b064-72d8dd3b85df-w4d8p.png)

</div>

<h2 align="center"> -> Key Features <- </h1>

- **Real-time Chatting:** Enjoy seamless real-time messaging with friends and communities. Send text messages instantly and engage in conversations effortlessly.
- **Voice and Video Calls:** Connect with friends through high-quality voice and video calls. Experience crystal-clear audio and video communication, whether you're chatting one-on-one or in a group.
- **Server and Channel Management:** Create and manage servers and channels to organize your communities and conversations efficiently. Customize permissions and roles to maintain control over your server environment.
- **Direct messages**: Conversate with any members of the server directly. You can give a video call or an audio call directly.
- **Rich Media Support:** Share images, videos, GIFs, and other media files within your conversations. Express yourself with a wide range of multimedia options.
- **Emojis and Reactions:** Spruce up your conversations with emojis and reactions. React to messages to express your feelings or simply add some fun to the chat.

<h2 align="center"> 💻 Tech Stacks </h2>

**Frontend:**

<div align="center">

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![ClerkJS](https://img.shields.io/badge/ClerkJS-438BF8?style=for-the-badge&logo=clerk&logoColor=white)
![LiveKit](https://img.shields.io/badge/LiveKit-FF4088?style=for-the-badge&logo=livekit&logoColor=white)
![UploadThing](https://img.shields.io/badge/UploadThing-0088FF?style=for-the-badge&logo=uploadthing&logoColor=white)
![Emoji-mart](https://img.shields.io/badge/Emoji--mart-9B98FF?style=for-the-badge&logo=npm&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-FFB700?style=for-the-badge&logo=npm&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-9B32FF?style=for-the-badge&logo=npm&logoColor=white)
![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)
![Lucide react](https://img.shields.io/badge/Lucide%20react-00D1B2?style=for-the-badge&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-0088FF?style=for-the-badge&logo=axios&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</div>

**Backend :**

<div align="center">

![Node JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3954E1?style=for-the-badge&logo=supabase&logoColor=white)

</div>

## Contribution

We welcome contributions from the community! Before contributing, please review our [Contribution Guidelines](./Contributing.md) to get started.

## Local development

### Fork the repo

>To contribute to this Discord-Clone, you must first fork the [Discord-Clone](https://github.com/Yeasir0032/Discord-Clone) repo.

### Clone the repo

1. Clone your GitHub forked repo:

   ```sh
   git clone https://github.com/<github_username>/Discord-Clone
   ```

2. Go to the Discord-Clone directory:
   ```sh
   cd discord-clone
   ```

### Install dependencies

1. Install the dependencies in the root of the repo:

   ```sh
   npm install # install dependencies
   ```

2. Copy the example `.env.local.example` to `.env.local`

   ```sh
   .env.local.example
   ```

### Setup Environment variables

- Create a .env.local in your root directory
- Visit [Supabase](https://supabase.com/dashboard/) website to create a project, then get its base URL and base anon key.
- Visit [UploadThing](https://uploadthing.com/dashboard) website to create a new app and get its app ID and secret key.
- Visit [ClerkJS](https://clerk.com/docs/references/javascript/overview) website to create a new app and get its public key and secret key.
- Visit [LiveKit](https://livekit.io/) website to create a new app and get its public key, URL, and secret key.
- Paste the credentials in the respective positions.
- Keep the rest as it is.

### Testing

To start a development server

```sh
npm run dev # start all the applications
```

>Visit [http://localhost:3000/](http://localhost:3000/)

### Deployment

>For deployment use services like **Railway** , **Digital Ocean**, **AWS**, **Google Cloud**, **Azure**, etc.

## Documentation

### App Routes

- **auth** -> For authentication using ClerkJs.
- **invite** -> For inviting to existing servers.
- **main** -> contains routes for server, channel, and conversations pages.
  - **/servers/serverId** -> server route
    - **/channels/channelId** -> channel specific route
  - **/conversations/memberId** -> member of server private conversation.
- **setup** -> To create an initial server create a modal.
- **api** -> For api handling

<div>
 
<h2 align = "center">Our Contributors ❤️</h2>
<div align = "center">
 <h3>Thank you for contributing to our repository.😃</h3>

![Contributors](https://contrib.rocks/image?repo=Yeasir0032/Discord-Clone)

### Show some ❤️ by starring this awesome repository!

</div>

