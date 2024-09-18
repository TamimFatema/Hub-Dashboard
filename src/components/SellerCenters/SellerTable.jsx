"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
const SellerTable = () => {
  const baseapi = process.env.API_KEY;
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    console.log("Token:", token);

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const url = `${baseapi}/api/sellers`;

    axios
      .get(url, { headers })
      .then((response) => {
        setSellers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="bg-white shadow-xl overflow-x-auto rounded-lg">
        <div className="flex flex-wrap justify-between p-4">
          <div className="flex gap-3 items-center">
            <h1 className="text-lg font-semibold">Seller Centers' List</h1>

            {/* using the length function to find the total number of customers */}
            <p className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
              {sellers.length}
            </p>
          </div>
          <div className="p-2 flex justify-end">
            <div class="relative w-80">
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
        </div>

        <div className="w-full overflow-x-scroll lg:overflow-auto">
          <table className="table-fixed lg:table-auto w-[200%] lg:w-full text-md text-center">
            <thead className="bg-[#EBE2FF]">
              <tr className="border">
                <th className="p-3">SL</th>
                <th className="p-3">Seller's Name</th>
                <th className="p-3">Store Name</th>
                <th className="p-3">No. of Pending Orders</th>
                <th className="p-3">Store's Address</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, index) => (
                <tr className="border" key={index}>
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{seller.name}</td>
                  <td className="p-3">{seller.shop_name}</td>
                  <td className="p-3">{seller.quantityUploaded}</td>
                  <td className="p-3">{seller.shop_address}</td>
                  <td className="p-3">
                    <div className="flex items-center justify-center">
                      <Link href={`/hub/hub_seller_center/${seller.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="23"
                            height="23"
                            rx="2.5"
                            stroke="#5709BB"
                          />
                          <path
                            d="M12.3333 15C13.1667 15 13.875 14.7083 14.4583 14.125C15.0417 13.5417 15.3333 12.8333 15.3333 12C15.3333 11.1667 15.0417 10.4583 14.4583 9.875C13.875 9.29167 13.1667 9 12.3333 9C11.5 9 10.7917 9.29167 10.2083 9.875C9.625 10.4583 9.33333 11.1667 9.33333 12C9.33333 12.8333 9.625 13.5417 10.2083 14.125C10.7917 14.7083 11.5 15 12.3333 15ZM12.3333 13.8C11.8333 13.8 11.4083 13.625 11.0583 13.275C10.7083 12.925 10.5333 12.5 10.5333 12C10.5333 11.5 10.7083 11.075 11.0583 10.725C11.4083 10.375 11.8333 10.2 12.3333 10.2C12.8333 10.2 13.2583 10.375 13.6083 10.725C13.9583 11.075 14.1333 11.5 14.1333 12C14.1333 12.5 13.9583 12.925 13.6083 13.275C13.2583 13.625 12.8333 13.8 12.3333 13.8ZM12.3333 17C10.7111 17 9.23333 16.5472 7.9 15.6417C6.56667 14.7361 5.6 13.5222 5 12C5.6 10.4778 6.56667 9.26389 7.9 8.35833C9.23333 7.45278 10.7111 7 12.3333 7C13.9556 7 15.4333 7.45278 16.7667 8.35833C18.1 9.26389 19.0667 10.4778 19.6667 12C19.0667 13.5222 18.1 14.7361 16.7667 15.6417C15.4333 16.5472 13.9556 17 12.3333 17ZM12.3333 15.6667C13.5889 15.6667 14.7417 15.3361 15.7917 14.675C16.8417 14.0139 17.6444 13.1222 18.2 12C17.6444 10.8778 16.8417 9.98611 15.7917 9.325C14.7417 8.66389 13.5889 8.33333 12.3333 8.33333C11.0778 8.33333 9.925 8.66389 8.875 9.325C7.825 9.98611 7.02222 10.8778 6.46667 12C7.02222 13.1222 7.825 14.0139 8.875 14.675C9.925 15.3361 11.0778 15.6667 12.3333 15.6667Z"
                            fill="#5709BB"
                          />
                        </svg>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SellerTable;
