// "use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Copy, RefreshCw } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import { useState } from "react";
// import axios from "axios";

export const InviteModal = () => {
  const [copied, setCopied] = useState(false);
  // const [isLoading, setisLoading] = useState(false);

  const { onOpen, isOpen, onClose, type, data } = useModal();
  const origin = useOrigin();
  const { server } = data;
  const isModalOpen = isOpen && type === "invite";
  const inviteUrl = `${origin}/invite/${server?.[0].inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  // const onNew = async () => {
  //   try {
  //     setisLoading(true);
  //     const response = await axios.patch(
  //       `/api/servers/${server?.id}/invite-code`
  //     );
  //     onOpen("invite", { server: response.data });
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite friends to this server
          </DialogTitle>
          <DialogDescription>
            Share this link to your friends to invite them to your server.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6">
          <Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 ">
            Server Invite Link
          </Label>
          <div className="flex items-center mt-2 gap-x-2">
            <Input
              className="bg-zinc-300/50 border-0 focus-visble:ring-0 text-black focus-visible:ring-offset-0"
              value={inviteUrl}
              // disabled={isLoading}
            />
            <Button size="icon" onClick={onCopy} className="hover:bg-gray-200">
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          {/* <Button
            disabled={isLoading}
            className="text-xs text-zinc-500 mt-4"
            variant="link"
            size="sm"
            onClick={onNew}
          >
            Generate a new Link
            <RefreshCw className="w-4 h-4 ml-2" />
          </Button> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};
