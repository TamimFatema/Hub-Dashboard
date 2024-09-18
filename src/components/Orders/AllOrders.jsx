"use client";
import React, { useState, useEffect } from "react";
import OrderCard from "./OrderCard";
import OrderTable from "./OrderTable";
import axios from "axios";

const AllOrders = () => {
  const baseapi = process.env.API_KEY;
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const url = `${baseapi}/api/orders`;

    axios
      .get(url, { headers })
      .then((response) => {
        setOrders(response.data);
        setFilteredOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <>
      <div className="flex gap-3 items-center mb-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.83333 7.5625L10 6.47917L12.1667 7.5625V2.41667H7.83333V7.5625ZM4.58333 15.4167V13.25H10V15.4167H4.58333ZM2.41667 19.75C1.82083 19.75 1.31076 19.5378 0.886458 19.1135C0.462153 18.6892 0.25 18.1792 0.25 17.5833V2.41667C0.25 1.82083 0.462153 1.31076 0.886458 0.886458C1.31076 0.462153 1.82083 0.25 2.41667 0.25H17.5833C18.1792 0.25 18.6892 0.462153 19.1135 0.886458C19.5378 1.31076 19.75 1.82083 19.75 2.41667V17.5833C19.75 18.1792 19.5378 18.6892 19.1135 19.1135C18.6892 19.5378 18.1792 19.75 17.5833 19.75H2.41667ZM2.41667 17.5833H17.5833V2.41667H14.3333V11.0833L10 8.91667L5.66667 11.0833V2.41667H2.41667V17.5833Z"
              fill="#141414"
            />
          </svg>
        </span>
        <h1 className="text-xl font-semibold">All Orders</h1>

        {/* Display the total number of orders */}
        <p className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          {filteredOrders.length}
        </p>
      </div>
      <div className=" bg-white px-5 py-4 grid grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 my-4 justify-center">
        <OrderCard orders={filteredOrders} />
      </div>
      <OrderTable orders={filteredOrders} />
    </>
  );
};

export default AllOrders;
