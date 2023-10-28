// "use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import qs from "query-string";
export const DeleteChannelModal = () => {
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const { isOpen, onClose, type, data } = useModal();
  const { channel } = data;
  const isModalOpen = isOpen && type === "deleteChannel";

  const onConfirm = async () => {
    try {
      setisLoading(true);
      await axios.delete(`/api/channels/${channel.id}`);
      onClose();
      router.refresh();
      router.push(`/servers/${params?.serverId}`);
    } catch (error) {
      alert(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Channel
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-indigo-500">
              #{channel?.name}
            </span>{" "}
            permanently
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 py-4 px-6">
          <div className="flex items-center justify-between w-full">
            <Button disabled={isLoading} variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button disabled={isLoading} variant="primary" onClick={onConfirm}>
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
