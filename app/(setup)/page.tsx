"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { Server } from "@/types"; // Import the Server interface from your types file
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [servers, setServers] = useState<Server[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function fetchServers() {
      try {
        const response = await axios.get<Server[]>(
          "/api/servers/getAllServers"
        );
        setServers(response.data || []);
      } catch (error: any) {
        console.error("Error fetching servers:", error.message);
      }
    }

    fetchServers();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredServers = servers.filter((server) =>
    server.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServerClick = (serverId: string) => {
    router.push(`/servers/${serverId}`);
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
                  onClick={() => handleServerClick(server.id)}
                >
                  <div className="bg-white p-4 rounded-lg">
                    <Image
                      src={server.imageUrl}
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
