import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { supabase } from "@/components/client";
import NavigationAction from "@/components/navigation/navigation-action";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationIcon from "@/components/navigation/navigation-icon";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import ServerExplorerAction from "@/components/navigation/explorer-action";

export const NavigationSideBar = async () => {
  const profile = await currentProfile();
  if (!profile) return redirect("/");

  const { data: servers, error: serverError } = await supabase
    .from("Member")
    .select("profileId,Server(*)")
    .eq("profileId", profile[0].id);
  // console.log(servers);

  return (
    <div className="space-y-4 flex flex-col items-center h-full bg-[#e3e5e8] text-primary w-full dark:bg-[#1e1f22] py-3">
      <NavigationAction />
      <ServerExplorerAction />
      <Separator className="h-[2px] bg-zinc-300 rounded-md mx-auto w-10" />
      <ScrollArea className="flex-1 w-full">
        {servers?.map((server: any) => (
          <div key={server.Server.id} className="mb-4">
            <NavigationIcon
              id={server.Server.id}
              name={server.Server.name}
              imageUrl={server.Server.imgUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center gap-y-4 flex-col">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </div>
    </div>
  );
};
