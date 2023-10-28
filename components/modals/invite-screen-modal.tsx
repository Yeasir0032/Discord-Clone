"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import Image from "next/image";

export const InviteScreenModal = ({ server }: any) => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  // const { server } = data;
  const isModalOpen = isOpen && type === "inviteAccept";

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <div className="relative h-20 w-20 mx-auto">
            <Image
              className="rounded-full"
              fill
              src={server?.[0].imgUrl}
              alt=""
            />
          </div>
          <DialogTitle className="text-2xl text-center font-bold">
            {server?.[0].name}
          </DialogTitle>
          <DialogDescription className="text-center">
            You are invited to join in {server?.[0].name} .
          </DialogDescription>
        </DialogHeader>
        <Button variant="primary" className="mx-10">
          Accept Invite
        </Button>
        <Button variant="link" className="bg-white text-gray-500 text-sm">
          Nevermind
        </Button>
      </DialogContent>
    </Dialog>
  );
};
