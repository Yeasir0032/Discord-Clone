import { Hash, Menu } from "lucide-react";
import MobileToggle from "../mobile-toggle";
import UserAvatar from "../user-avatar";
import { SocketIndicator } from "../socket-indicator";
import { ChatVideoButton } from "./chat-video-button";

interface props {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imgUrl?: string;
  profile: any;
  server: any;
}

const ChatHeader = ({
  serverId,
  name,
  type,
  imgUrl,
  profile,
  server,
}: props) => {
  return (
    <div className="font-semibold text-md px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId} profile={profile} server={server} />
      {type === "channel" && (
        <Hash className="h-5 w-5 text-zinc-500 dark:text-zinc-400 mr-2 " />
      )}
      {type === "conversation" && (
        <UserAvatar src={imgUrl} className="h-8 w-8 md:h-8 md:w-8 mr-2" />
      )}

      <p className="font-semibold text-base text-black dark:text-white">
        {name}
      </p>
      <div className="ml-auto flex items-center">
        {type === "conversation" && <ChatVideoButton />}
        <SocketIndicator />
      </div>
    </div>
  );
};

export default ChatHeader;
