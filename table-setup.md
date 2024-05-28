# PosgreSQl table setup

#### Points to remember:-

- There are `7` tables in **public** schema.
- Make sure your RLS policy is Disabled for all tables.
- You have to create both enums and tables.
- Running the provided codes may create problem in case sensitiveness. Make sure you correct those cases.
- To run the SQL code go to [Supabase Dashboard](https://supabase.com/dashboard/project) -> `YourProject` -> `SQL Editor`
- Make sure you create the ENUM first then the Tables sequentially.
- `If your SQL code does not work then please try to create by seeing the images.`

| Table Name    | No. of Columns |
| ------------- | -------------- |
| Profile       | 7              |
| Server        | 7              |
| Channel       | 7              |
| Member        | 6              |
| Conversation  | 4              |
| Message       | 8              |
| DirectMessage | 8              |

## Enums -->

| Enum name   | Values                      |
| ----------- | --------------------------- |
| ChannelType | [ TEXT, AUDIO, VIDEO ]      |
| MemberRole  | [ ADMIN, MODERATOR, GUEST ] |

Code to create the enums ->

```sql
CREATE TYPE channeltype AS ENUM ('TEXT', 'AUDIO', 'VIDEO');
CREATE TYPE memberrole AS ENUM ('MODERATOR', 'GUEST', 'ADMIN');
```

## 1. Table - 'Profile':

| Column Name | Data Type | Description               |
| ----------- | --------- | ------------------------- |
| id          | text      | Primary key               |
| name        | text      | Username of the user      |
| userId      | text      |                           |
| imgUrl      | text      | profile image of the user |
| email       | text      | Email of the user         |
| createdAt   | timestamp | Time of creation          |
| updatedAt   | timestamp | Last updated time         |

![Screenshot from 2024-05-26 17-47-26](https://github.com/Yeasir0032/GcectHackathon/assets/124646897/164d807f-c3f3-4d6b-90ce-5cd3f7884cb0)

### SQL Code to Create Table

```sql
CREATE TABLE
  public.Profile (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    userId TEXT,
    name TEXT,
    imgUrl TEXT,
    email TEXT,
    createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
```

## 2. Table - 'Server':

| Column Name | Data Type | Description                                            |
| ----------- | --------- | ------------------------------------------------------ |
| id          | text      | Primary key                                            |
| name        | text      | Name of the server                                     |
| imgUrl      | text      | Thumbnail                                              |
| profileId   | text      | Owner of the server- It is a forign key of Profile(id) |
| inviteCode  | text      | Invite link for the server                             |
| createdAt   | timestamp | Time of creation                                       |
| updatedAt   | timestamp | Last updated time                                      |

![Screenshot from 2024-05-26 18-52-08](https://github.com/Yeasir0032/GcectHackathon/assets/124646897/d4834b0a-5b32-4c84-9b0b-316a64d108bb)

### SQL code to create table

```sql
CREATE TABLE
  public.Server (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT,
    imgUrl TEXT,
    inviteCode TEXT,
    profileId TEXT,
    createdAt TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    updatedAt TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY (profileId) REFERENCES public.Profile (id)
  );
```

## 3. Table - 'Channel':

| Column Name | Data Type   | Description                                 |
| ----------- | ----------- | ------------------------------------------- |
| id          | text        | Primary key                                 |
| name        | text        | Name of the channel                         |
| type        | channelType | It is a enum of type channel type           |
| serverId    | text        | Server id- It is a forign key of Server(id) |
| profileId   | text        | Profile id of admin - It is a forign key    |
| createdAt   | timestamp   | Time of creation                            |
| updatedAt   | timestamp   | Last updated time                           |

![Screenshot from 2024-05-27 17-03-59](https://github.com/Yeasir0032/DataAnalystStreamlit/assets/124646897/87412081-3c48-4c68-8993-9b3be0cde22e)

### SQL code to create table

```sql
CREATE TABLE
  Channel (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    name text,
    type channeltype,
    serverId text,
    profileId text,
    createdAt TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    updatedAt TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY (profileId) REFERENCES public.Profile (id),
    FOREIGN KEY (serverId) REFERENCES public.Server (id)
  );
```

## 3. Table - 'Member':

| Column Name | Data Type  | Description                                 |
| ----------- | ---------- | ------------------------------------------- |
| id          | text       | Primary key                                 |
| role        | memberrole | It is a enum of type member role            |
| serverId    | text       | Server id- It is a forign key of Server(id) |
| profileId   | text       | Profile id of admin - It is a forign key    |
| createdAt   | timestamp  | Time of creation                            |
| updatedAt   | timestamp  | Last updated time                           |

![Screenshot from 2024-05-27 18-06-36](https://github.com/Yeasir0032/GcectHackathon/assets/124646897/f1155ed1-fa0d-43ed-bbed-acb224db409a)

### SQL code to create table

```sql
CREATE TABLE
  Member (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    role memberrole,
    serverId text,
    profileId text,
    createdAt TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    updatedAt TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY (profileId) REFERENCES public.Profile (id),
    FOREIGN KEY (serverId) REFERENCES public.Server (id)
  );
```

## 3. Table - 'Message':

| Column Name | Data Type | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| id          | text      | Primary key                                     |
| content     | text      | Content of the message                          |
| fileUrl     | text      | Attachment url (nullable)                       |
| memberId    | text      | Member id - It is a foreign key for Member(id)  |
| channelId   | text      | Channel id - It is a forign key for Channel(id) |
| deleted     | boolean   | A boolean value to check if message is deleted  |
| createdAt   | timestamp | Time of creation                                |
| updatedAt   | timestamp | Last updated time                               |

![Screenshot from 2024-05-28 15-06-30](https://github.com/Yeasir0032/Discord-Clone/assets/124646897/983daf48-0b61-41f1-bcc5-1c8eae0fd9ae)

### SQL code to create table

```sql
CREATE TABLE
  Message (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    CONTENT text,
    fileUrl TEXT,
    memberId TEXT ,
    channelId TEXT,
    deleted BOOLEAN,
    createdAt TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    updatedAt TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY (channelId) REFERENCES public.Channel (id),
    FOREIGN KEY (memberId) REFERENCES public.Member (id)
  );
```

## 4. Table - 'Conversation':

| Column Name | Data Type | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| id          | text      | Primary key                                     |
| memberOneId | text      | Sender Member Id - Foreign key for Member(id)   |
| memberTwoId | text      | Receiver Member Id - Foreign key for Member(id) |
| createdAt   | timestamp | Time of creation                                |

![image](https://github.com/Yeasir0032/Discord-Clone/assets/124646897/8100e53b-e7ff-484e-897e-296d07cfc5fe)

### SQL code to create Table

```sql
CREATE TABLE
  Conversation (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    memberOneId TEXT ,
    memberTwoId TEXT,
    createdAt TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
      FOREIGN KEY (memberTwoId) REFERENCES public.Member (id),
      FOREIGN KEY (memberOneId) REFERENCES public.Member (id)
  );
```

## 5. Table - 'DirectMessage':

| Column Name    | Data Type | Description                                        |
| -------------- | --------- | -------------------------------------------------- |
| id             | text      | Primary key                                        |
| content        | text      | Content of the message                             |
| fileUrl        | text      | Attachment url (nullable)                          |
| memberId       | text      | Sender Id - foreign keys for Member(id)            |
| conversationId | text      | Converastion Id - Foreign key for Conversation(id) |
| deleted        | boolean   | A boolean value to check if message is deleted     |
| createdAt      | timestamp | Time of creation                                   |
| updatedAt      | timestamp | Last updated time                                  |

![image](https://github.com/Yeasir0032/Discord-Clone/assets/124646897/98cdafe1-860d-463b-9afd-f9f03b1a00cb)

```sql
CREATE TABLE
  DirectMessage (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    CONTENT TEXT,
    fileUrl TEXT,
    memberId TEXT,
    conversationId TEXT,
    deleted BOOLEAN,
    createdAt TIMESTAMP WITHOUT TIME ZONE default current_timestamp,
    updatedAt TIMESTAMP WITHOUT TIME ZONE default now(),
    FOREIGN KEY (memberId) REFERENCES Member (id),
    FOREIGN KEY (conversationId) REFERENCES Conversation (id)
  );
```
