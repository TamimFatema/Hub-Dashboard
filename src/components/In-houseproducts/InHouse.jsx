"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const InhouseProducts = () => {
  const baseapi = process.env.API_KEY;
  const [product, setProduct] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState([]);
  const [filteredProducs, setFilteredProducts] = useState ([])

  //fetching product data
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const url = `${baseapi}/api/productsinfo`;

    axios
      .get(url, { headers })
      .then((response) => {
        setProduct(response.data);
        setFilteredProducts(response.data); // Initialize with all products
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className="flex gap-3 items-center mb-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
          >
            <path
              d="M8.91667 19.0438V11.623L2.41667 7.85841V15.2792L8.91667 19.0438ZM11.0833 19.0438L17.5833 15.2792V7.85841L11.0833 11.623V19.0438ZM8.91667 21.5355L1.33333 17.1751C0.990278 16.9765 0.723958 16.7147 0.534375 16.3897C0.344792 16.0647 0.25 15.7036 0.25 15.3063V6.69383C0.25 6.29661 0.344792 5.9355 0.534375 5.6105C0.723958 5.2855 0.990278 5.02369 1.33333 4.82508L8.91667 0.464665C9.25972 0.266054 9.62083 0.166748 10 0.166748C10.3792 0.166748 10.7403 0.266054 11.0833 0.464665L18.6667 4.82508C19.0097 5.02369 19.276 5.2855 19.4656 5.6105C19.6552 5.9355 19.75 6.29661 19.75 6.69383V15.3063C19.75 15.7036 19.6552 16.0647 19.4656 16.3897C19.276 16.7147 19.0097 16.9765 18.6667 17.1751L11.0833 21.5355C10.7403 21.7341 10.3792 21.8334 10 21.8334C9.62083 21.8334 9.25972 21.7341 8.91667 21.5355ZM14.3333 7.2355L16.4188 6.04383L10 2.33341L7.8875 3.55216L14.3333 7.2355ZM10 9.75425L12.1125 8.5355L5.69375 4.82508L3.58125 6.04383L10 9.75425Z"
              fill="#1E1E1E"
            />
          </svg>
        </span>
        <h1 className="text-xl font-semibold">In-house Products</h1>

        {/* using the length function to find the total number of customers */}
        <p className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          {product.length}
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-lg my-6">
        <div className="p-5 flex justify-between">
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
          <div>
            <button className="border border-[#5709BB]  rounded-lg flex items-center gap-2 px-3 py-2 text-[#5709BB] ">
              <p>
                Sort by: <span>Default </span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.45946 12.5L3 8.04054L4.04054 7L7.45946 10.4189L10.8784 7L11.9189 8.04054L7.45946 12.5Z"
                  fill="#5709BB"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-scroll lg:overflow-auto">
          <table className="table-fixed lg:table-auto w-[200%] lg:w-full text-sm text-center">
            <thead className="bg-[#EBE2FF]">
              <tr className="border">
                <th className="p-3"></th>
                <th className="p-3">SL</th>
                <th className="p-3">Product’s name</th>
                <th className="p-3">SKU</th>
                <th className="p-3">Buying prices</th>
                <th className="p-3">Selling price</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Active status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => (
                <tr key={index} className="border">
                  <td className="p-3">
                    <input
                      id={`default-checkbox-${index}`}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                    />
                  </td>
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <div className="flex gap-2 items-center justify-center">
                      <p>{item.name}</p>
                    </div>
                  </td>
                  <td className="p-3">{item.product_type}</td>
                  <td className="p-3">{item.price}</td>
                  <td className="p-3">{item.sellingPrice}</td>
                  <td className="p-3">
                    <div className="flex justify-center">
                      <div className="relative h-10 w-20 flex items-center justify-center border border-[#5709BB] rounded-lg">
                        {!isEditing ? (
                          // Display the number and the edit button
                          <>
                            <span className="text-blue-gray-700">{item.unit}</span>
                            <button
                              className="absolute right-0 p-1 text-blue-gray-500"
                              onClick={() => setIsEditing(true)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M2.5 9.5H3.2125L8.1 4.6125L7.3875 3.9L2.5 8.7875V9.5ZM1.5 10.5V8.375L8.1 1.7875C8.2 1.69583 8.31042 1.625 8.43125 1.575C8.55208 1.525 8.67917 1.5 8.8125 1.5C8.94583 1.5 9.075 1.525 9.2 1.575C9.325 1.625 9.43333 1.7 9.525 1.8L10.2125 2.5C10.3125 2.59167 10.3854 2.7 10.4313 2.825C10.4771 2.95 10.5 3.075 10.5 3.2C10.5 3.33333 10.4771 3.46042 10.4313 3.58125C10.3854 3.70208 10.3125 3.8125 10.2125 3.9125L3.625 10.5H1.5ZM7.7375 4.2625L7.3875 3.9L8.1 4.6125L7.7375 4.2625Z"
                                  fill="#5709BB"
                                  fillOpacity="0.75"
                                />
                              </svg>
                            </button>
                          </>
                        ) : (
                          // Display the input field when editing
                          <input
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onBlur={() => setIsEditing(false)} // Exit editing mode when the input loses focus
                            autoFocus
                          />
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="toggle-row">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div
                        className={`w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-${item.activeStatusColor}`}
                      ></div>
                    </label>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center gap-1">
                      <Link
                        href={`/admin/product-management/products/${item.id}`}
                      >
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
export default InhouseProducts;
