"use client";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Link from "next/link";
// import _ from "lodash";

const CustomerTable = () => {
  const baseapi = process.env.API_KEY;
  const [customer, setCustomer] = useState([]);
  const [filteredCustomer, setFilteredCustomer] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = sessionStorage.getItem("token");

  // Fetching customer data
  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const url = `${baseapi}/api/customer`;
    axios
      .get(url, { headers })
      .then((response) => {
        setCustomer(response.data);
        setFilteredCustomer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Debounced search function
  // const debouncedSearch = useMemo(
  //   () =>
  //     _.debounce((term) => {
  //       const filtered = customer.filter((customer) => {
  //         const fullName =
  //           `${customer.first_name} ${customer.last_name}`.toLowerCase();
  //         return (
  //           customer.id.toString().toLowerCase().includes(term.toLowerCase()) ||
  //           fullName.includes(term.toLowerCase()) ||
  //           customer.mobile_number.toLowerCase().includes(term.toLowerCase())
  //         );
  //       });
  //       setFilteredCustomer(filtered);
  //     }, 300),
  //   [customer]
  // );

  // useEffect(() => {
  //   debouncedSearch(searchTerm);
  // }, [searchTerm, debouncedSearch]);

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  return (
    <>
      <div className="flex gap-3 items-center m-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M1.08301 21.6666V18.6333C1.08301 18.0194 1.24099 17.4551 1.55697 16.9405C1.87294 16.426 2.29273 16.0333 2.81634 15.7624C3.93579 15.2027 5.07329 14.7829 6.22884 14.503C7.3844 14.2232 8.55801 14.0833 9.74967 14.0833C10.9413 14.0833 12.115 14.2232 13.2705 14.503C14.4261 14.7829 15.5636 15.2027 16.683 15.7624C17.2066 16.0333 17.6264 16.426 17.9424 16.9405C18.2584 17.4551 18.4163 18.0194 18.4163 18.6333V21.6666H1.08301ZM20.583 21.6666V18.4166C20.583 17.6221 20.3618 16.8593 19.9195 16.128C19.4771 15.3968 18.8497 14.7694 18.0372 14.2458C18.958 14.3541 19.8247 14.5392 20.6372 14.801C21.4497 15.0628 22.208 15.3833 22.9122 15.7624C23.5622 16.1235 24.0587 16.5253 24.4018 16.9676C24.7448 17.41 24.9163 17.893 24.9163 18.4166V21.6666H20.583ZM9.74967 12.9999C8.55801 12.9999 7.53787 12.5756 6.68926 11.727C5.84065 10.8784 5.41634 9.85825 5.41634 8.66659C5.41634 7.47492 5.84065 6.45478 6.68926 5.60617C7.53787 4.75756 8.55801 4.33325 9.74967 4.33325C10.9413 4.33325 11.9615 4.75756 12.8101 5.60617C13.6587 6.45478 14.083 7.47492 14.083 8.66659C14.083 9.85825 13.6587 10.8784 12.8101 11.727C11.9615 12.5756 10.9413 12.9999 9.74967 12.9999ZM20.583 8.66659C20.583 9.85825 20.1587 10.8784 19.3101 11.727C18.4615 12.5756 17.4413 12.9999 16.2497 12.9999C16.0511 12.9999 15.7983 12.9773 15.4913 12.9322C15.1844 12.8871 14.9316 12.8374 14.733 12.7833C15.2205 12.2055 15.5952 11.5645 15.857 10.8603C16.1188 10.1562 16.2497 9.42492 16.2497 8.66659C16.2497 7.90825 16.1188 7.177 15.857 6.47284C15.5952 5.76867 15.2205 5.1277 14.733 4.54992C14.9858 4.45964 15.2386 4.40096 15.4913 4.37388C15.7441 4.34679 15.9969 4.33325 16.2497 4.33325C17.4413 4.33325 18.4615 4.75756 19.3101 5.60617C20.1587 6.45478 20.583 7.47492 20.583 8.66659ZM3.24967 19.4999H16.2497V18.6333C16.2497 18.4346 16.2 18.2541 16.1007 18.0916C16.0014 17.9291 15.8705 17.8027 15.708 17.7124C14.733 17.2249 13.749 16.8593 12.7559 16.6155C11.7629 16.3718 10.7608 16.2499 9.74967 16.2499C8.73856 16.2499 7.73648 16.3718 6.74342 16.6155C5.75037 16.8593 4.76634 17.2249 3.79134 17.7124C3.62884 17.8027 3.49794 17.9291 3.39863 18.0916C3.29933 18.2541 3.24967 18.4346 3.24967 18.6333V19.4999ZM9.74967 10.8333C10.3455 10.8333 10.8556 10.6211 11.2799 10.1968C11.7042 9.77249 11.9163 9.26242 11.9163 8.66659C11.9163 8.07075 11.7042 7.56068 11.2799 7.13638C10.8556 6.71207 10.3455 6.49992 9.74967 6.49992C9.15384 6.49992 8.64377 6.71207 8.21947 7.13638C7.79516 7.56068 7.58301 8.07075 7.58301 8.66659C7.58301 9.26242 7.79516 9.77249 8.21947 10.1968C8.64377 10.6211 9.15384 10.8333 9.74967 10.8333Z"
              fill="#1E1E1E"
            />
          </svg>{" "}
        </span>
        <h1 className="text-xl font-semibold">Customers</h1>

        {/* using the length function to find the total number of customers */}
        <p className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          {filteredCustomer.length}
        </p>
      </div>
      <div className="bg-white shadow-xl overflow-x-auto rounded-lg">
        <div className="flex flex-wrap justify-between gap-2 m-2">
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
          <div className="flex flex-wrap justify-between gap-3">
            <div date-rangepicker class="flex flex-wrap items-center">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  name="start"
                  type="text"
                  class="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="From"
                />
              </div>
              <span class="mx-4 text-gray-500">to</span>
              <div class="relative">
                <input
                  name="end"
                  type="text"
                  class="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5"
                  placeholder="To"
                />
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
              </div>
            </div>
            <button className="bg-[#5709BB] text-white px-4 rounded-lg">
              Filter
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-scroll lg:overflow-auto">
          <table className="table-fixed lg:table-auto w-[200%] lg:w-full text-md text-center">
            <thead className="bg-[#EBE2FF]">
              <tr className="border">
                <th className="p-3">SL</th>
                <th className="p-3">Customer’s info</th>
                <th className="p-3">Order ID</th>
                <th className="p-3">Ordered items</th>
                <th className="p-3">Total Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomer.map((customer, index) => (
                <tr key={customer.id} className="border">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <div>
                      <p>
                        {customer.first_name} {customer.last_name}
                      </p>
                      <p>{customer.mobile_number}</p>
                    </div>
                  </td>
                  <td className="p-3">{customer.order_number}</td>
                  <td className="p-3">{customer.items}</td>
                  <td className="p-3">{customer.amount}</td>
                  <td className="p-3">
                    <button className="p-2 rounded-xl shadow-xl bg-green-100 text-green-400">
                      confirmed
                    </button>
                  </td>

                  <td className="p-3 gap-2 flex items-center justify-center">
                    <Link href={`/hub/hub_customer/${customer.id}`}>
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

export default CustomerTable;
