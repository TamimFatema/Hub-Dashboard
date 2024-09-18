"use client";
import { useState } from "react";
import Image from "next/image";
import CustomerDetails from "./CustomerDetails";

const ReceivedOrderDetails = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, label: "Seller Center" },
    { number: 2, label: "Shipping" },
    { number: 3, label: "Hub" },
  ];

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">
          <Image src="/Icons/order.png" alt="" width={25} height={25} />
        </span>
        <h2 className="text-2xl font-semibold">Order Details</h2>
        <p className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          2
        </p>
      </div>

      <div className="bg-white p-5 md:p-10 lg:p-5 rounded-lg shadow-lg mb-6">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="border-2 shadow-lg rounded-lg p-2 lg:w-3/4">
            <div className="flex justify-between px-2">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg">Order ID #100002</p>
                <div className="flex items-center gap-2 text-md">
                  <Image
                    src="/Icons/calendar.png"
                    alt=""
                    width={15}
                    height={15}
                  />
                  <p>10 August 2023 9:55:17 am</p>
                </div>
              </div>
              <div className="flex flex-col items-end w-full">
                <div className="flex mt-2 gap-1">
                  <p className="p-1">Status: </p>
                  <button className="bg-gray-100 text-[#7B9607] p-1 border-2 rounded-xl shadow-2xl">
                    to be received
                  </button>
                </div>
                <div className="flex gap-1">
                  <p className="whitespace-nowrap">
                    Payment Method:
                    <span className="font-bold">Cash on Delivery</span>
                  </p>
                </div>
                <div className="flex gap-1">
                  <p>Payment Status: </p>
                  <p className="text-red-500 font-semibold">Unpaid</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-6">
              <p className="mb-3">Delivery Details</p>
              <div className="flex justify-center items-center mb-8">
                <ol className="flex">
                  {steps.map((step) => (
                    <li key={step.number} className="flex items-center">
                      <div
                        className={`relative flex flex-col items-center text-gray-500`}
                      >
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer ${
                            currentStep >= step.number
                              ? "bg-[#5709BB]  text-white"
                              : "bg-gray-200 text-gray-500"
                          } mb-2`}
                          onClick={() => handleStepClick(step.number)}
                        >
                          <span>{step.number}</span>
                        </div>
                        <div
                          className={`text-xs ${
                            currentStep >= step.number
                              ? "font-semibold text-gray-800"
                              : "text-gray-500"
                          }`}
                        >
                          {step.label}
                        </div>
                      </div>
                      {step.number !== steps.length && (
                        <div className="flex-1 h-0.5 border-dotted border-t-2 border-gray-300 mx-4"></div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="w-full overflow-x-scroll lg:overflow-auto px-2 py-2 mb-2 border-b-2">
              <table className="table-fixed lg:table-auto w-[200%] lg:w-full text-sm text-black text-center">
                <thead className="bg-[#EBE2FF]">
                  <tr className="border">
                    <th className="p-3">SL</th>
                    <th className="p-3">Item details</th>
                    <th className="p-3">Variations</th>
                    <th className="p-3">Store Name</th>
                    <th className="p-3">Discount</th>
                    <th className="p-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td className="p-3">1</td>
                    <td className="p-3">
                      <div className="flex flex-wrap items-center justify-center">
                        <div>
                          <img
                            src="https://www.optus.com.au/content/dam/optus/images/shop/mobile/phones/apple/iphone-15/carousel/SD-PDP-01-iphone-15-pink-front-back.jpg/renditions/version-1694741183491/original.jpeg"
                            className=" border w-[60px] h-[60px]"
                          />
                        </div>
                        <div className="flex-col px-1">
                          <p>Phone </p>
                          <p>price: 100.00 ৳</p>
                          <p>Qty: 5</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Black</td>
                    <td className="p-3">Techland BD</td>
                    <td className="p-3">20.00 ৳</td>
                    <td className="p-3">200.00 ৳</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex px-7 py-1">
              <div className="flex flex-col items-end flex-grow">
                <p>Shipping:</p>
                <p>Coupon Discount:</p>
                <p>Total:</p>
              </div>
              <div className="flex flex-col items-end flex-grow">
                <p>50.00 ৳</p>
                <p>0.00 ৳</p>
                <p>1550.00 ৳</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-auto">
            <div className="bg-white flex flex-col py-6 px-3 mb-4 rounded-lg shadow-lg items-start  gap-3">
              <p className="font-semibold text-lg">Order & Shipping Info</p>
              <div className="flex flex-col w-full">
                <label className="text-md">Order Status</label>
                <select
                  id="selector"
                  name="selector"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="option1">Pending</option>
                  <option value="option2">Cancelled</option>
                  <option value="option3">Packaging</option>
                  <option value="option4">Confirmed</option>
                  <option value="option5">Shipped Out</option>
                  <option value="option6">Delivered</option>
                  <option value="option7">Returned</option>
                  <option value="option8">Failed to Deliver</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label>Payment Status</label>
                <select
                  id="selector"
                  name="selector"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="option1">Unpaid</option>
                  <option value="option2">Paid</option>
                </select>
              </div>
            </div>
            <CustomerDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceivedOrderDetails;
