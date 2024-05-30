CREATE TYPE "channeltype" AS ENUM ('TEXT', 'AUDIO', 'VIDEO');
CREATE TYPE "memberrole" AS ENUM ('MODERATOR', 'GUEST', 'ADMIN');

CREATE TABLE
  public."Profile" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    "userId" TEXT,
    "name" TEXT,
    "imgUrl" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now()
);


CREATE TABLE
  public."Server" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" TEXT,
    "imgUrl" TEXT,
    "inviteCode" TEXT,
    "profileId" TEXT,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    "updatedAt" TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY ("profileId") REFERENCES public."Profile" (id)
);

CREATE TABLE
  "Channel" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" text,
    "type" "channeltype",
    "serverId" text,
    "profileId" text,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    "updatedAt" TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY ("profileId") REFERENCES public."Profile" (id),
    FOREIGN KEY ("serverId") REFERENCES public."Server" (id)
);

CREATE TABLE
  "Member" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    "role" "memberrole",
    "serverId" text,
    "profileId" text,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    "updatedAt" TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY ("profileId") REFERENCES public."Profile" (id),
    FOREIGN KEY ("serverId") REFERENCES public."Server" (id)
);

CREATE TABLE
  "Message" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    "CONTENT" text,
    "fileUrl" TEXT,
    "memberId" TEXT ,
    "channelId" TEXT,
    "deleted" BOOLEAN,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    "updatedAt" TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY ("channelId") REFERENCES public."Channel" (id),
    FOREIGN KEY ("memberId") REFERENCES public."Member" (id)
);

CREATE TABLE
  "Conversation" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    "memberOneId" TEXT ,
    "memberTwoId" TEXT,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
      FOREIGN KEY ("memberTwoId") REFERENCES public."Member" (id),
      FOREIGN KEY ("memberOneId") REFERENCES public."Member" (id)
);

CREATE TABLE
  "DirectMessage" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    "CONTENT" TEXT,
    "fileUrl" TEXT,
    "memberId" TEXT,
    "conversationId" TEXT,
    "deleted" BOOLEAN,
    "createdAt" TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    "updatedAt" TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY ("memberId") REFERENCES "Member" (id),
    FOREIGN KEY ("conversationId") REFERENCES "Conversation" (id)
);