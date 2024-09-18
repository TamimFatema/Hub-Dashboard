"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const SellerDetails = ({ details }) => {
  const baseapi = process.env.API_KEY;
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${baseapi}/api/sellers/${details}`, { headers })
      .then((response) => {
        setSeller(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer details:", error);
      });
  }, []);

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <span className="">
          <Image src="/Icons/sellers.png" alt="" width={25} height={25} />
        </span>
        <h2 className="text-2xl font-semibold">Seller's Details</h2>
      </div>

      {seller.map((seller) => (
        <>
          <div className="bg-white shadow-xl rounded-lg">
            <div className="flex items-center px-5 py-3">
              <div className="p-4 w-32">
                <img
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                  alt="..."
                  className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
              <div className="flex flex-col">
                <p className="py-1 text-lg font-semibold">{seller.name}</p>
                <div className="flex gap-2">
                  <p className="py-1 mb-2 text-md">Seller ID: </p>
                  <p className="py-1 mb-2 text-md">{seller.id}</p>
                </div>
              </div>
            </div>

            <h2 className="px-5 text-lg font-semibold">Account Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-3 my-4">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">Contact no.</p>
                <p className="py-1 mb-2 text-md">{seller.mobile_number}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">Shop's Name</p>
                <p className="py-1 mb-2 text-md">{seller.shop_name}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">NID</p>
                <p className="py-1 mb-2 text-md">{seller.nid}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">Shop's Address</p>
                <p className="py-1 mb-2 text-md">{seller.shop_address}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">Email</p>
                <p className="py-1 mb-2 text-md">{seller.email}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">Business License No.</p>
                <p className="py-1 mb-2 text-md">{seller.business_licens}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">Address</p>
                <p className="py-1 mb-2 text-md">Dhaka, Bangladesh</p>
              </div>

              <div className="flex flex-col gap-2 ">
                <p className="font-semibold text-sm">Tax ID</p>
                <p className="py-1 mb-2 text-md">{seller.tax_id}</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl overflow-x-auto rounded-lg">
            <div className="flex justify-between p-4">
             
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
                    <th className="p-3">Products</th>
                    <th className="p-3">Product Type</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                    <tr className="border">
                      <td className="p-3">{}</td>
                      <td className="p-3">{}</td>
                      <td className="p-3">{}</td>
                      <td className="p-3">{}</td>
                      <td className="p-3">{}</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default SellerDetails;
