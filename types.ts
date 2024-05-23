import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIoServer } from "socket.io";

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIoServer;
    };
  };
};

export type Server = {
  id: string;
  name: string;
  imgUrl: string;
  inviteCode: string;
  profileId: string;
  createdAt: string;
  updatedAt: string;
};
