"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import CustomerOrderTable from "./CustomerOrderTable";

const CustomerDetails = ({ details }) => {
  const baseapi = process.env.API_KEY;
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${baseapi}/api/customer/${details}`, { headers })
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer details:", error);
      });
  }, []);

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <span>
          <Image src="/Icons/user.png" alt="User Icon" width={25} height={25} />
        </span>
        <h2 className="text-2xl font-semibold">Customer Details</h2>
      </div>

      <div className="flex gap-5 my-5">
        <h3 className="text-lg font-semibold">Customer ID # {details}</h3>
        <div className="flex gap-2 items-center text-gray-600 text-md">
          <span>
            <Image
              src="/Icons/calendar.png"
              alt="Calendar Icon"
              width={15}
              height={15}
            />
          </span>
          <p>Joined at: </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5">
        <CustomerOrderTable />
        <div className="bg-white flex flex-col rounded-lg p-4 w-full md:w-2/5">
          <div className="flex gap-3 items-center mb-2">
            <span>
              <Image
                src="/Icons/user2.png"
                alt="User Icon"
                width={20}
                height={20}
              />
            </span>
            <p>Customer</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {customers.map((customer) => (
              <div key={customer.id} className="flex flex-col text-sm">
                <p>
                  {customer.first_name} {customer.last_name}
                </p>
                <p>{customer.mobile_number}</p>
                <p>{customer.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
