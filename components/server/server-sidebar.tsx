import { supabase } from "@/components/client";
import ServerHeader from "@/components/server/server-header";
import { ScrollArea } from "../ui/scroll-area";
import { ServerSearch } from "./server-search";
import {
  Hash,
  MicIcon,
  ShieldAlert,
  ShieldCheck,
  VideoIcon,
} from "lucide-react";
import { Separator } from "../ui/separator";
import ServerSection from "./server-section";
import ServerChannels from "./server-channel";
import MemberView from "../member-view";
import { useRouter } from "next/navigation";

interface ServerSidebarProps {
  serverId: string;
  profile: any;
  server: any;
}

const iconMap = {
  TEXT: <Hash className="mr-2 h-4 w-4" />,
  AUDIO: <MicIcon className="mr-2 h-4 w-4" />,
  VIDEO: <VideoIcon className="mr-2 h-4 w-4" />,
};

const roleMap = {
  GUEST: null,
  MODERATOR: <ShieldCheck className="h-4 w-4 text-indigo-500 mr-2" />,
  ADMIN: <ShieldAlert className="h-4 w-4 text-rose-500 mr-2" />,
};

const ServerSidebar = async ({
  serverId,
  profile,
  server,
}: ServerSidebarProps) => {
  const { data: memberTemp, error: memberError } = await supabase
    .from("Member")
    .select("*,Profile(*)")
    .eq("serverId", serverId);
  if (memberError) return <div className="loading">Loading</div>;
  const { data: channels, error: channelError } = await supabase
    .from("Channel")
    .select("*")
    .eq("serverId", serverId);
  if (channelError) return <div className="loading">Loading</div>;

  const textChannels = channels.filter((item) => item.type === "TEXT");
  const audioChannels = channels.filter((item) => item.type === "AUDIO");
  const videoChannels = channels.filter((item) => item.type === "VIDEO");
  const members = memberTemp.filter((item) => item.profileId !== profile[0].id);
  // console.log(videoChannels);

  const myRole = memberTemp.find(
    (item) => item.profileId === profile[0].id
  )?.role;

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2b2d31] bg-[#f2f3f5]">
      <ServerHeader server={server} role={myRole} members={memberTemp} />
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2 sticky top-0 dark:bg-[#2b2d31] bg-[#f2f3f5]">
          <ServerSearch
            data={[
              {
                label: "Text channels",
                type: "channel",
                data: textChannels.map(
                  (channel: {
                    id: string;
                    name: string;
                    type: "TEXT" | "AUDIO" | "VIDEO";
                  }) => ({
                    id: channel.id,
                    name: channel.name,
                    icon: iconMap[channel.type],
                  })
                ),
              },
              {
                label: "Voice channels",
                type: "channel",
                data: audioChannels.map(
                  (channel: {
                    id: string;
                    name: string;
                    type: "TEXT" | "AUDIO" | "VIDEO";
                  }) => ({
                    id: channel.id,
                    name: channel.name,
                    icon: iconMap[channel.type],
                  })
                ),
              },
              {
                label: "Video channels",
                type: "channel",
                data: videoChannels.map(
                  (channel: {
                    id: string;
                    name: string;
                    type: "TEXT" | "AUDIO" | "VIDEO";
                  }) => ({
                    id: channel.id,
                    name: channel.name,
                    icon: iconMap[channel.type],
                  })
                ),
              },
              {
                label: "Members",
                type: "member",
                data: members.map(
                  (member: {
                    profileId: string;
                    Profile: { name: string };
                    role: "ADMIN" | "MODERATOR" | "GUEST";
                  }) => ({
                    id: member.profileId,
                    name: member.Profile.name,
                    icon: roleMap[member.role],
                  })
                ),
              },
            ]}
          />
        </div>
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
        {!!textChannels.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              role={myRole}
              label="Text channels"
            />
            {textChannels.map((item) => (
              <ServerChannels key={item.id} channel={item} role={myRole} />
            ))}
          </div>
        )}

        {!!audioChannels.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              role={myRole}
              label="Audio channels"
            />
            {audioChannels.map((item) => (
              <ServerChannels key={item.id} channel={item} role={myRole} />
            ))}
          </div>
        )}
        {!!videoChannels.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              role={myRole}
              label="Video channels"
            />
            {videoChannels.map((item) => (
              <ServerChannels key={item.id} channel={item} role={myRole} />
            ))}
          </div>
        )}
        {!!members.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="members"
              role={myRole}
              label="Members"
            />
            {members.map((item) => (
              <MemberView key={item.id} member={item} serverId={serverId} />
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default ServerSidebar;
