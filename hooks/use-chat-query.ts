import { useSocket } from "@/components/providers/socket-provider";
import { useInfiniteQuery } from "@tanstack/react-query";
import queryString from "query-string";

interface props {
  queryKey: string;
  apiUrl: string;
  param: "channelId" | "conversationId";
  paramValue: string;
}
export const useChatQuery = ({
  queryKey,
  apiUrl,
  param,
  paramValue,
}: props) => {
  const { isConnected } = useSocket();
  const fetchMessages = async ({ pageParam = undefined }) => {
    const url = queryString.stringifyUrl(
      {
        url: apiUrl,
        query: {
          cursor: pageParam,
          [param]: paramValue,
        },
      },
      { skipNull: true }
    );
    const res = await fetch(url);
    return res.json();
  };
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    //@ts-ignore
    useInfiniteQuery({
      queryKey: [queryKey],
      queryFn: fetchMessages,
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      refetchInterval: isConnected ? false : 4000,
    });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};
