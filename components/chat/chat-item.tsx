"use client";

import {
  EditIcon,
  FileIcon,
  ShieldAlert,
  ShieldCheck,
  Trash,
} from "lucide-react";
import ActionTooltip from "../action-tooltip";
import UserAvatar from "../user-avatar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import queryString from "query-string";
import axios from "axios";
import { useModal } from "@/hooks/use-modal-store";
import { useParams, useRouter } from "next/navigation";

interface props {
  id: string;
  content: string;
  timestamp: string;
  fileUrl?: string | null;
  deleted: boolean;
  currentMember: {
    id: string;
    channelId: string;
    Profile: {
      id: string;
      name: string;
      imgUrl: string;
    };
  };
  isUpdated: boolean;
  socketUrl: string;
  sockerQuery: Record<string, string>;
  member: {
    id: string;
    channelId: string;
    role: string;
    Profile: {
      id: string;
      name: string;
      imgUrl: string;
    };
  };
}

const roleMap = {
  GUEST: null,
  MODERATOR: <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />,
  ADMIN: <ShieldAlert className="h-4 w-4 ml-2 text-rose-500" />,
};

const formSchema = z.object({
  content: z.string().min(1),
});

export const ChatItem = ({
  id,
  content,
  timestamp,
  currentMember,
  sockerQuery,
  socketUrl,
  isUpdated,
  deleted,
  fileUrl,
  member,
}: props) => {
  const [isEditing, setEditing] = useState(false);
  const { onOpen } = useModal();
  const params = useParams();
  const router = useRouter();
  const onMemberClick = () => {
    if (member.id === currentMember.id) return;
    router.push(`/servers/${params?.serverId}/conversations/${member.id}`);
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape" || event.keyCode === 27) {
        setEditing(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: content,
    },
  });

  useEffect(() => {
    form.reset({
      content,
    });
  }, [content]);
  const isLoading = form.formState.isSubmitting;
  const onEditSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = queryString.stringifyUrl({
        url: `${socketUrl}/${id}`,
        query: sockerQuery,
      });
      await axios.patch(url, values);
      form.reset();
      setEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (!member) return <div>Error</div>;
  const fileType = fileUrl?.split(".").pop();
  const canDeleteMessage =
    !deleted &&
    (member?.role === "ADMIN" ||
      member?.role === "MODERATOR" ||
      currentMember.id === member?.id);
  const canEditMessage = !deleted && !fileUrl && member.id === currentMember.id;
  const isImage =
    fileUrl &&
    (fileType === "jpg" || fileType === "jpeg" || fileType === "png");
  const isVideo =
    fileUrl &&
    (fileType === "mp4" || fileType === "webm" || fileType === "ogg");
  return (
    <div className="relative group flex items-center hover:bg-black/5 p-4 transition w-full">
      <div className="group flex gap-x-2 items-start w-full">
        <div
          className="cursor-pointer hover:drop-shadow-md transition"
          onClick={onMemberClick}
        >
          <UserAvatar src={member.Profile.imgUrl} />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-x-2">
            <div className="flex items-center">
              <p
                className="font-semibold text-sm hover:underline cursor-pointer"
                onClick={onMemberClick}
              >
                {member.Profile.name}
              </p>
              <ActionTooltip label={member.role}>
                {/* @ts-ignore */}
                {roleMap[member.role]}
              </ActionTooltip>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {timestamp}
            </span>
          </div>
          {isImage && (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-md overflow-hidden mt-2 border flex items-center bg-secondary h-48 w-48"
            >
              <Image
                fill
                src={fileUrl}
                alt={fileUrl}
                className="object-cover"
              />
            </a>
          )}
          {isVideo && (
            <div>
              <video width="320" height="240" controls>
                <source src={fileUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {fileUrl && !isImage && !isVideo && (
            <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
              <FileIcon className="h-10  w-10 fill-indigo-200 stroke-indigo-200" />
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
              >
                {fileType}
                {` File`}
              </a>
            </div>
          )}
          {!fileUrl && !isEditing && (
            <p
              className={cn(
                "text-sm text-zinc-600 dark:text-zinc-300",
                deleted &&
                  "italic text-zinc-500  dark:text-zinc-400 text-xs mt-1 bg-background/10 p-3"
              )}
            >
              {content}
              {isUpdated && !deleted && (
                <span className="text-[10px] mx-2">(edited)</span>
              )}
            </p>
          )}
          {!fileUrl && isEditing && (
            <Form {...form}>
              <form
                className="flex items-center w-full pt-2 gap-x-2"
                onSubmit={form.handleSubmit(onEditSubmit)}
              >
                <FormField
                  name="content"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <div className="relative w-full">
                          <Input
                            disabled={isLoading}
                            placeholder="Edited Message"
                            {...field}
                            className="p-2 bg-zinc-200/90 dark:bg-zinc-700/75 border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-zinc-600 dark:text-zinc-200"
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button disabled={isLoading} size="sm" variant="primary">
                  Save
                </Button>
              </form>
              <span className="text-[10px] mt-1 text-zinc-400">
                Press Escape to cancel and enter to save
              </span>
            </Form>
          )}
        </div>
      </div>
      {canDeleteMessage && (
        <div className="hidden group-hover:flex items-center gap-x-2 absolute p-1 -top-2 right-5 bg-white dark:bg-zinc-800">
          {canEditMessage && (
            <ActionTooltip label="Edit">
              <EditIcon
                onClick={() => setEditing(true)}
                className="cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
              />
            </ActionTooltip>
          )}

          <ActionTooltip label="Delete">
            <Trash
              onClick={() =>
                onOpen("deleteMessage", {
                  apiUrl: `${socketUrl}/${id}`,
                  query: sockerQuery,
                })
              }
              className="cursor-pointer ml-auto w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
        </div>
      )}
    </div>
  );
};
