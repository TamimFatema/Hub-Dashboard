"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Link from "next/link";

import OrderFilter from "./OrderFilter";

const OrderTable = () => {
  const baseapi = process.env.API_KEY;
  const [orders, setOrders] = useState([]);

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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="bg-white shadow-xl rounded-lg my-6">
        <OrderFilter />
        <div className="w-full overflow-x-scroll lg:overflow-auto">
          <table className="table-fixed lg:table-auto w-[200%] lg:w-full text-sm text-center">
            <thead className="bg-[#EBE2FF]">
              <tr className="border">
                <th className="p-3">SL</th>
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer Info</th>
                <th className="p-3">Ordered items</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr className="border" key={order.id}>
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{order.id}</td>

                  <td className="">
                    <div>
                      <p>{order.customer.first_name}</p>
                      <p>{order.customer.mobile_number}</p>
                    </div>
                  </td>
                  <td className="p-3">{order.store.name}</td>
                  <td className="p-3">
                    <div>
                      <p>${order.total_price}</p>
                      <p className="text-black font-semibold">
                        "{order.payment_status}"
                      </p>
                    </div>
                  </td>
                  <td className="p-3">
                    <button
                      className={`p-2 rounded-xl shadow-2xl ${
                        order.order_status === "cancelled"
                          ? "bg-red-200 text-red-700"
                          : order.order_status === "pending"
                          ? "bg-[#ECF4F4] text-[#46D7BD]"
                          : order.order_status === "received"
                          ? "bg-[#FFFEE1] text-[#AA9404]"
                          : order.order_status === "to_receive"
                          ? "bg-[#D6E1FF] text-[#0529A9]"
                          : order.order_status === "shipped"
                          ? "bg-[#FFF3E1] text-[#D16807]"
                          : "bg-green-100 text-[#00BE85]"
                      }`}
                    >
                      {order.order_status}
                    </button>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center justify-center">
                      <span className="border border-[#5709BB]  rounded-md p-1.5">
                        <Link
                          href={`/hub/hub_order/${
                            order.order_status === "pending"
                              ? "pending_order/details"
                              : order.order_status === "shipped"
                              ? "shipped_out_order/details"
                              : order.order_status === "to_receive"
                              ? "orders_to_receive/details"
                              : order.order_status === "received"
                              ? "received_order/details"
                              : order.order_status === "cancelled"
                              ? "cancelled-orders/details"
                              : "completed_order/details"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                          >
                            <path
                              d="M8.8 9.6C9.8 9.6 10.65 9.25 11.35 8.55C12.05 7.85 12.4 7 12.4 6C12.4 5 12.05 4.15 11.35 3.45C10.65 2.75 9.8 2.4 8.8 2.4C7.8 2.4 6.95 2.75 6.25 3.45C5.55 4.15 5.2 5 5.2 6C5.2 7 5.55 7.85 6.25 8.55C6.95 9.25 7.8 9.6 8.8 9.6ZM8.8 8.16C8.2 8.16 7.69 7.95 7.27 7.53C6.85 7.11 6.64 6.6 6.64 6C6.64 5.4 6.85 4.89 7.27 4.47C7.69 4.05 8.2 3.84 8.8 3.84C9.4 3.84 9.91 4.05 10.33 4.47C10.75 4.89 10.96 5.4 10.96 6C10.96 6.6 10.75 7.11 10.33 7.53C9.91 7.95 9.4 8.16 8.8 8.16ZM8.8 12C6.85333 12 5.08 11.4567 3.48 10.37C1.88 9.28333 0.72 7.82667 0 6C0.72 4.17333 1.88 2.71667 3.48 1.63C5.08 0.543333 6.85333 0 8.8 0C10.7467 0 12.52 0.543333 14.12 1.63C15.72 2.71667 16.88 4.17333 17.6 6C16.88 7.82667 15.72 9.28333 14.12 10.37C12.52 11.4567 10.7467 12 8.8 12ZM8.8 10.4C10.3067 10.4 11.69 10.0033 12.95 9.21C14.21 8.41667 15.1733 7.34667 15.84 6C15.1733 4.65333 14.21 3.58333 12.95 2.79C11.69 1.99667 10.3067 1.6 8.8 1.6C7.29333 1.6 5.91 1.99667 4.65 2.79C3.39 3.58333 2.42667 4.65333 1.76 6C2.42667 7.34667 3.39 8.41667 4.65 9.21C5.91 10.0033 7.29333 10.4 8.8 10.4Z"
                              fill="#5709BB"
                            />
                          </svg>
                        </Link>
                      </span>
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
export default OrderTable;
