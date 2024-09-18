"use client";
import React, { useState } from "react";
import NewMessage from "./NewMessage";
import Link from "next/link";

const messages = [
  {
    id: 1,
    name: "Tamim Fatema",
    message: "There will be a delay in the delivery due to...",
  },
  {
    id: 2,
    name: "Ishrat Jahan",
    message: "I did not receive the product I ordered on...",
  },
  {
    id: 3,
    name: "Hub, Tamim Fatema",
    message: "This is to let you know that you have one...",
  },
  {
    id: 4,
    name: "Hub, Rabita Amin",
    message: "This is to let you know that you have one...",
  },
  {
    id: 5,
    name: "Rabita Amin",
    message: "This is to let you know that you have one...",
  },
];

const AllMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/3 bg-white border-r border-gray-200 my-2">
        <div className="flex justify-around py-4 border-gray-200">
          <Link href="/hub/hub_messages">
            <span className="font-bold cursor-pointer text-[#5709BB]  underline">
              All
            </span>
          </Link>

          <Link href="/hub/hub_messages/inbox">
            <span className="cursor-pointer">Inbox</span>
          </Link>
          <Link href="/hub/hub_messages/sent">
            <span className="cursor-pointer">Sent</span>
          </Link>
        </div>
        <div className="p-4 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelectMessage(msg)}
            >
              <div className="font-bold">{msg.name}</div>
              <div className="text-gray-600">{msg.message}</div>
            </div>
          ))}
        </div>
      </div>
      <NewMessage />
    </div>
  );
};

export default AllMessages;
