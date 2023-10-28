"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { io as ClientIo } from "socket.io-client";

type socketContextType = {
  socket: any | null;
  isConnected: boolean;
};

const socketContext = createContext<socketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(socketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const socketInstance = new (ClientIo as any)(
      process.env.NEXT_PUBLIC_SITE_URL!,
      {
        path: "/api/socket/io",
        addTrailingSlash: false,
      }
    );
    socketInstance.on("connect", () => {
      setConnected(true);
    });
    socketInstance.on("disconnect", () => {
      setConnected(false);
    });
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);
  return (
    <socketContext.Provider value={{ socket, isConnected: connected }}>
      {children}
    </socketContext.Provider>
  );
};
