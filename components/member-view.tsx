"use client";
import {
  Loader2,
  MoreVertical,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
  Trash,
  Users2,
} from "lucide-react";
import UserAvatar from "./user-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface UserMemberProps {
  member?: memberProps;
  editMode?: boolean;
  className?: string;
  role?: boolean;
  serverId?: string;
  loadingId?: { loadingId: string; setLoadingId: any };
}

interface memberProps {
  Profile: {
    imgUrl: string;
    name: string;
    id: string;
    email: string;
  };
  role: string;
  id: string;
  serverId: string;
}

const roleIconMap = {
  GUEST: <Users2 className="h-5 w-5 ml-2 text-gray-700" />,
  MODERATOR: <ShieldCheck className="h-5 w-5 ml-2 text-indigo-500" />,
  ADMIN: <ShieldAlert className="h-5 w-5 ml-2 text-rose-500" />,
};

const MemberView = ({
  member,
  className,
  role,
  editMode,
  serverId,
}: UserMemberProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { onOpen } = useModal();

  const onRoleChange = async (role: string) => {
    try {
      setLoading(true);
      const response = await axios.patch(`/api/members/${member?.id}`, {
        role,
        serverId: member?.serverId,
      });
      router.refresh();
      // onClose();
      onOpen("members", { members: response.data });
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      onClick={() => {
        if (!editMode)
          router.push(`/servers/${serverId}/conversations/${member?.id}`);
      }}
      className={cn(
        "flex items-center gap-x-2 mb-6",
        !editMode &&
          "group cursor-pointer px-2 py-2 rounded-md w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1"
      )}
    >
      <UserAvatar
        src={member?.Profile?.imgUrl}
        className={cn("h-6 w-6 md:h-8 md:w-8", editMode && className)}
      />
      <div className="flex flex-col gap-y-1">
        <div className="text-xs font-semibold items-center flex gap-x-1">
          {member?.Profile?.name}
          {/* @ts-ignore */}
          {roleIconMap[member.role]}
        </div>
        {editMode && (
          <p className="text-xs text-zinc-500">{member?.Profile?.email}</p>
        )}
      </div>
      {editMode && member?.role !== "ADMIN" && !loading && (
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical className="h-4 w-4 text-zinc-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex items-center">
                  <ShieldQuestion className="w-4 h-4 mr-2" />
                  <span>Role</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      disabled={member?.role === "GUEST"}
                      onClick={() => onRoleChange("GUEST")}
                    >
                      <ShieldCheck className="h-4 w-4 mr-2" />
                      GUEST
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      disabled={member?.role === "MODERATOR"}
                      onClick={() => onRoleChange("MODERATOR")}
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      MODERATOR
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-rose-500"
                onClick={() => setLoading(true)}
              >
                <Trash className="h-4 w-4 mr-2" />
                Kick
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      {loading && (
        <Loader2 className="animate-spin text-zinc-500 ml-auto h-4 w-4" />
      )}
    </div>
  );
};

export default MemberView;
