import { useSocket } from "@/components/providers/socket-provider";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

type chatSocketProps = {
  addKey: string;
  updateKey: string;
  queryKey: string;
};

export const useChatSocket = ({
  addKey,
  updateKey,
  queryKey,
}: chatSocketProps) => {
  const { socket } = useSocket();
  const queryClient = useQueryClient();
  useEffect(() => {
    if (!socket) return;
    socket.on(updateKey, (message: any) => {
      queryClient.setQueryData([queryKey], (oldData: any) => {
        if (!oldData || !oldData.pages || oldData.pages.length === 0)
          return oldData;
        const newData = oldData.pages.map((page: any) => {
          return {
            ...page,
            item: page.item.map((item: any) => {
              if (item.id === message.id) {
                return message;
              }
              return item;
            }),
          };
        });
        return {
          ...oldData,
          pages: newData,
        };
      });
    });
    socket.on(addKey, (message: any) => {
      queryClient.setQueryData([queryKey], (oldData: any) => {
        if (!oldData || !oldData.pages || oldData.pages.length === 0) {
          return {
            pages: [
              {
                item: message,
              },
            ],
          };
        }
        const newData = [...oldData.pages];

        newData[0] = {
          ...newData[0],
          item: [message, ...newData[0].item],
        };
        return {
          ...oldData,
          pages: newData,
        };
      });
    });
    return () => {
      socket.off(addKey);
      socket.off(queryKey);
    };
  }, [queryClient, addKey, queryKey, socket, updateKey]);
};
