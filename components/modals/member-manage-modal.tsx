// "use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { ScrollArea } from "../ui/scroll-area";
import MemberView from "../member-view";
import { useState } from "react";

export const ManageMembersModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const [loadingId, setLoadingId] = useState("");
  const { members } = data;
  const isModalOpen = isOpen && type === "members";

  if (!members) return <div className="loading"></div>;
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Manage members
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            {members.length} Members
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-8 max-h-[420px] pr-6">
          {members?.map((member: any) => (
            <MemberView
              editMode
              member={member}
              role
              key={member.id}
              loadingId={{ loadingId, setLoadingId }}
            />
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
