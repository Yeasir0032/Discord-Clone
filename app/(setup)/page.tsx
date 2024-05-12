"use client";
import Image from "next/image";
import { useState } from "react";

/*
          profileId: profile[0].id,
          name,
          imgUrl: imageUrl,
          inviteCode: uuidv4(),

*/
// we need to handle searching for servers

export default function Page() {
  const [servers, setServers] = useState([
    {
      id: 1,
      name: "Server 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Server 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Server 3",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Server 4",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Server 5",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Server 6",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Server 7",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Server 8",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Server 9",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Server 10",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Server 11",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Server 12",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      name: "Server 13",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      name: "Server 14",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 15,
      name: "Server 15",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 16,
      name: "Server 16",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 17,
      name: "Server 17",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 18,
      name: "Server 18",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 19,
      name: "Server 19",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 20,
      name: "Server 20",
      imageUrl: "https://via.placeholder.com/150",
    },
    //need more 30 servers
    {
      id: 21,
      name: "Server 21",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 22,
      name: "Server 22",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 23,
      name: "Server 23",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 24,
      name: "Server 24",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 25,
      name: "Server 25",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 26,
      name: "Server 26",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 27,
      name: "Server 27",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 28,
      name: "Server 28",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 29,
      name: "Server 29",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 30,
      name: "Server 30",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 31,
      name: "Server 31",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 32,
      name: "Server 32",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 33,
      name: "Server 33",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 34,
      name: "Server 34",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 35,
      name: "Server 35",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 36,
      name: "Server 36",
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredServers = servers.filter((server) =>
    server.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <div key={server.id} className="bg-white p-4 rounded-lg">
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
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
