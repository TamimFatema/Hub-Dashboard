"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import axios from "axios";
import orderData from "./OrderData";

const OrderCard = () => {
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

  const countStatus = (status) => {
    return orders.filter((order) => order.order_status === status).length;
  };

  return (
    <>
      {orderData.map((link, index) => {
        const statusCount = countStatus(link.status);
        return (
          <Link href={link.href} key={index}>
            <div
              className="rounded-lg flex flex-col p-7 relative border"
              style={{
                backgroundColor: link.color,
              }}
            >
              <div className="relative z-10">
                <div className="flex justify-between pb-2">
                  <p className="text-lg">{link.title}</p>
                </div>

                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: link.bgColor }}
                >
                  <span className="font-extrabold text-white">
                    {statusCount}
                  </span>
                </div>
                <div>
                  <span>{link.icon}</span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default OrderCard;
