"use client";
import Image from "next/image";
import { useState } from "react";
import { Server } from "@/types"; // Import the Server interface from your types file
import { useRouter } from "next/navigation";

interface props {
  serverData: Server[];
}

export default function ServerExplorerComponent({ serverData }: props) {
  const router = useRouter();
  const servers = serverData;

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredServers = servers.filter((server) =>
    server.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServerClick = (serverId: string) => {
    router.push(`/invite/${serverId}`);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold text-center mt-8">
          Choose a server
        </h1>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search servers"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-4 py-2 mt-4 mb-2 border border-gray-300 rounded-md w-full max-w-md"
          />
        </div>
        {filteredServers.length === 0 && (
          <p className="text-center mt-4">No servers found</p>
        )}
        {filteredServers.length > 0 && (
          <div className="flex items-center justify-center m-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-7xl mx-auto">
              {filteredServers.map((server) => (
                <button
                  key={server.id}
                  onClick={() => handleServerClick(server.inviteCode)}
                >
                  <div className="bg-white p-4 rounded-lg">
                    <Image
                      src={server.imgUrl}
                      alt={server.name}
                      width={150}
                      height={150}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h2 className="text-lg font-semibold mt-2 text-black text-center">
                      {server.name}
                    </h2>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
