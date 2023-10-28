"use client";

import { Plus, SettingsIcon } from "lucide-react";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

interface serverSectionProps {
  label: string;
  server?: any;
  role?: "ADMIN" | "MODERATOR" | "GUEST";
  sectionType: "channels" | "members";
}

const ServerSection = ({ label, role, sectionType }: serverSectionProps) => {
  const { onOpen } = useModal();
  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase text-zinc-500 font-semibold dark:text-zinc-400">
        {label}
      </p>
      {role !== "GUEST" && sectionType === "channels" && (
        <ActionTooltip label="Create Channel" side="top">
          <button
            onClick={() => onOpen("createChannel")}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <Plus className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
      {role !== "GUEST" && sectionType === "members" && (
        <ActionTooltip label="Manage members" side="top">
          <button
            onClick={() => onOpen("members")}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <SettingsIcon className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
};

export default ServerSection;
