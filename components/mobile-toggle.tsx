import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { NavigationSideBar } from "./navigation/navigation-sideBar";
import ServerSidebar from "./server/server-sidebar";

interface props {
  serverId: string;
  server: any;
  profile: any;
}

const MobileToggle = ({ server, serverId, profile }: props) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 flex gap-0">
          <div className="w-[72px]">
            <NavigationSideBar />
          </div>
          <ServerSidebar
            server={server}
            serverId={serverId}
            profile={profile}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileToggle;
