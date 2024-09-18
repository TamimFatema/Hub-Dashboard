import React from "react";
import AllMessages from "./AllMessages";

const Messages = () => {
  return (
    <>
      <div className="flex gap-3 items-center mb-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
          >
            <path
              d="M2.33366 17.6666C1.73783 17.6666 1.22776 17.4544 0.80345 17.0301C0.379145 16.6058 0.166992 16.0958 0.166992 15.4999V2.49992C0.166992 1.90409 0.379145 1.39402 0.80345 0.96971C1.22776 0.545405 1.73783 0.333252 2.33366 0.333252H19.667C20.2628 0.333252 20.7729 0.545405 21.1972 0.96971C21.6215 1.39402 21.8337 1.90409 21.8337 2.49992V15.4999C21.8337 16.0958 21.6215 16.6058 21.1972 17.0301C20.7729 17.4544 20.2628 17.6666 19.667 17.6666H2.33366ZM11.0003 10.0833L2.33366 4.66659V15.4999H19.667V4.66659L11.0003 10.0833ZM11.0003 7.91659L19.667 2.49992H2.33366L11.0003 7.91659ZM2.33366 4.66659V2.49992V15.4999V4.66659Z"
              fill="#1E1E1E"
            />
          </svg>
        </span>
        <h1 className="text-xl font-semibold">Messages</h1>

        {/* using the length function to find the total number of customers */}
        <p className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          {/* {filteredCustomer.length} */}
        </p>
      </div>
        <AllMessages />
    </>
  );
};

export default Messages;
