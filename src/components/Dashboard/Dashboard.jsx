import React from "react";
import OrderCard from "../Orders/OrderCard";
import CustomersDashboard from "./CustomersDashboard";
import SellersList from "./SellersList";
import TotalNo from "./TotalNo";
import Link from "next/link";
import Money from "./Money";
const Dashboard = () => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-t-lg flex flex-col">
        <div className="flex gap-2 items-center justify-between py-3 px-5">
          <div className="">
            <h1 className="text-lg">Hello Tamim</h1>
            <h2 className="text-md">Welcome to My UpOn Hub dashboard</h2>
          </div>
          <div className="flex items-center gap-2 text-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
            >
              <rect width="40" height="40" fill="white" />
              <path
                d="M35.9111 11.1111L24.7111 20.0889C23.9111 20.8889 21.7956 22.0089 19.7333 20.0889L12.9778 14.0444"
                stroke="#5709BB"
                stroke-width="1.5"
              />
              <path
                d="M13.8667 10.2222H34.4889C35.2 10.2518 36.6045 10.7555 36.5334 12.5333C36.4623 14.3111 36.5037 22.5185 36.5334 26.3999C36.563 27.1407 36.2667 28.6399 34.8445 28.7111H28.0952"
                stroke="#5709BB"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M13.7778 25.0668L10.4 19.2001C9.83708 18.4001 9.60002 14.7556 12.4445 14.1334C16.9264 13.153 11.5556 5.95564 10.4 4.62231C9.24452 3.28898 4.00005 7.73342 3.46672 10.6668C2.93338 13.6001 4.00005 17.5112 4.00005 17.9556C4.00005 18.4001 7.58066 24.6692 8.26672 25.9556C8.9778 27.289 13.1556 33.1556 15.2 33.9556C16.7196 34.5503 20.8 35.7334 24.9778 34.2223C29.1556 32.7112 22.6667 25.9556 22.1334 25.4223C21.6 24.889 19.6445 25.3334 17.7778 26.7556C16.2845 27.8934 14.4889 26.1038 13.7778 25.0668Z"
                stroke="#5709BB"
                stroke-width="1.5"
              />
            </svg>
            <p className="text-[#5709BB] ">Contact shipping agent</p>
          </div>
        </div>
        <div className="bg-white md:px-6 lg:px-7 flex flex-col flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-8 my-4 px-2">
            <OrderCard />
            <TotalNo />
            <Money />
          </div>
          <div className="flex justify-center my-4">
            <Link href="/">
              <div className="rounded-lg flex flex-col w-80 sm:w-[442px] flex-shrink p-7 relative border bg-[#ededd8]">
                <div className="relative z-10">
                  <div className="flex justify-between pb-2">
                    <p className="text-lg">Commission generated</p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9D9D00]">
                    <span className="font-extrabold text-white">0</span>
                  </div>
                  <div>
                    <span>
                      <svg
                        className="absolute right-0 top-0 bottom-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="77"
                        viewBox="0 0 120 77"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_4808_25946)">
                          <path
                            d="M0 76.5957V21.5L19 11L29 53L39 29.3617L62 45L78.5 0L83 29.3617L102.128 42.1277L120 35.7447V76.5957H0Z"
                            fill="#9D9D00"
                            fill-opacity="0.1"
                          />
                          <path
                            d="M0 21.5L19 11L29 53L39 29.3617L62 45L78.5 0L83 29.3617L102.128 42.1277L120 35.7447"
                            stroke="#9D9D00"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4808_25946">
                            <rect width="120" height="77" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <CustomersDashboard />
      <SellersList />
    </>
  );
};

export default Dashboard;
