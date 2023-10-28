"use client";

import { useParams, useRouter } from "next/navigation";
import ActionTooltip from "../action-tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface navicon {
  id: string;
  name: string;
  imageUrl: string;
}

const NavigationIcon = ({ id, name, imageUrl }: navicon) => {
  const params = useParams();
  const router = useRouter();

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button
        onClick={() => {
          router.push(`/servers/${id}`);
        }}
        className="group relative flex items-center"
      >
        <div
          className={cn(
            "absolute bg-primary rounded-r-full transition-all left-0 w-[4px]",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === id &&
              "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image fill src={imageUrl} alt="Channel" />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationIcon;
