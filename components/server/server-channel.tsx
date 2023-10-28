"use client";

import { cn } from "@/lib/utils";
import { Edit, Hash, Lock, MicIcon, Trash, VideoIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import ActionTooltip from "../action-tooltip";
import { ModalType, useModal } from "@/hooks/use-modal-store";

const ServerChannels = ({
  channel,
  server,
  role,
}: {
  channel: { id: string; type: string; name: string };
  server?: any;
  role: string;
}) => {
  const { onOpen } = useModal();
  const router = useRouter();
  const params = useParams();

  const onClick = () => {
    router.push(`/servers/${params?.serverId}/channels/${channel.id}`);
  };
  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action, { channel });
  };
  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 mb-1 transition",
        params?.channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
      <Icon channel={channel} />
      <p
        className={cn(
          "line-clamp-1 font-semibold text-sm text-zinc-500 darK:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transiton",
          params?.channelId === channel.id &&
            "text-primary dark:text-zinc-200 dark:group-hover:text-white"
        )}
      >
        {channel.name}
      </p>
      {channel.name !== "general" && role !== "GUEST" && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Edit">
            <Edit
              onClick={(w) => onAction(w, "editChannel")}
              className="hidden group-hover:block w-4 h-4 text-zinc-400 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
          <ActionTooltip label="Delete">
            <Trash
              onClick={(e) => onAction(e, "deleteChannel")}
              className="hidden group-hover:block w-4 h-4 text-zinc-400 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
        </div>
      )}
      {channel.name === "general" && role !== "GUEST" && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="This cannot be edited or deleted">
            <Lock className="hidden group-hover:block w-4 h-4 text-zinc-400 dark:text-zinc-400" />
          </ActionTooltip>
        </div>
      )}
    </button>
  );
};

const Icon = ({ channel }: any) => {
  if (channel.type === "TEXT")
    return (
      <Hash className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
    );
  if (channel.type === "AUDIO")
    return (
      <MicIcon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
    );
  return (
    <VideoIcon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
  );
};

export default ServerChannels;
