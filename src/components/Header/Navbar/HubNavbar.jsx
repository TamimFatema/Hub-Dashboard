import React from "react";

const HubNavbar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 ">
      <div className="p-5 flex flex-shrink justify-start w-[80%]">
        <div class="relative w-full">
          <input
            class="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm outline-none"
            type="search"
            placeholder="Search"
          />
          <button class="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-[#5709BB]  border-gray-300 rounded-r-md">
            Search
          </button>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-bold">Tamim Fatema</div>
            <div className="text-gray-500 text-sm">uponbd.tamim@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubNavbar;
