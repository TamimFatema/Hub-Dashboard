import React from "react";

const ShippingAgent = () => {
  return (
    <>
      <div className="flex gap-3 items-center mb-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
          >
            <path
              d="M5.50016 17.6666C4.59738 17.6666 3.83002 17.3506 3.19808 16.7187C2.56613 16.0867 2.25016 15.3194 2.25016 14.4166H0.0834961V2.49992C0.0834961 1.90409 0.295649 1.39402 0.719954 0.96971C1.14426 0.545405 1.65433 0.333252 2.25016 0.333252H17.4168V4.66659H20.6668L23.9168 8.99992V14.4166H21.7502C21.7502 15.3194 21.4342 16.0867 20.8022 16.7187C20.1703 17.3506 19.4029 17.6666 18.5002 17.6666C17.5974 17.6666 16.83 17.3506 16.1981 16.7187C15.5661 16.0867 15.2502 15.3194 15.2502 14.4166H8.75016C8.75016 15.3194 8.43419 16.0867 7.80225 16.7187C7.1703 17.3506 6.40294 17.6666 5.50016 17.6666ZM5.50016 15.4999C5.80711 15.4999 6.0644 15.3961 6.27204 15.1885C6.47968 14.9808 6.5835 14.7235 6.5835 14.4166C6.5835 14.1096 6.47968 13.8523 6.27204 13.6447C6.0644 13.4371 5.80711 13.3333 5.50016 13.3333C5.19322 13.3333 4.93593 13.4371 4.72829 13.6447C4.52065 13.8523 4.41683 14.1096 4.41683 14.4166C4.41683 14.7235 4.52065 14.9808 4.72829 15.1885C4.93593 15.3961 5.19322 15.4999 5.50016 15.4999ZM2.25016 12.2499H3.11683C3.42377 11.9249 3.77586 11.6631 4.17308 11.4645C4.5703 11.2659 5.01266 11.1666 5.50016 11.1666C5.98766 11.1666 6.43002 11.2659 6.82725 11.4645C7.22447 11.6631 7.57655 11.9249 7.8835 12.2499H15.2502V2.49992H2.25016V12.2499ZM18.5002 15.4999C18.8071 15.4999 19.0644 15.3961 19.272 15.1885C19.4797 14.9808 19.5835 14.7235 19.5835 14.4166C19.5835 14.1096 19.4797 13.8523 19.272 13.6447C19.0644 13.4371 18.8071 13.3333 18.5002 13.3333C18.1932 13.3333 17.9359 13.4371 17.7283 13.6447C17.5206 13.8523 17.4168 14.1096 17.4168 14.4166C17.4168 14.7235 17.5206 14.9808 17.7283 15.1885C17.9359 15.3961 18.1932 15.4999 18.5002 15.4999ZM17.4168 10.0833H22.021L19.5835 6.83325H17.4168V10.0833Z"
              fill="#1E1E1E"
            />
          </svg>
        </span>
        <h1 className="text-xl font-semibold">Shipping Agents</h1>

        {/* using the length function to find the total number of customers */}
        <p className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
          {/* {filteredCustomer.length} */}
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-lg my-6">
      <div className="p-5 flex justify-end">
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

      <div className="w-full overflow-x-scroll lg:overflow-auto">
        <table className="table-fixed lg:table-auto w-[200%] lg:w-full text-sm text-center">
          <thead className="bg-[#EBE2FF]">
            <tr className="border">
              <th className="p-3">SL</th>
              <th className="p-3">Agent ID</th>
              <th className="p-3">Agent’s name</th>
              <th className="p-3">No. of assigned orders</th>
              <th className="p-3">No. of canceled orders</th>
              <th className="p-3">Website</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-3">2</td>
              <td className="p-3">20001</td>
              <td className="p-3">Sundarban Courier Service</td>
              <td className="p-3">10</td>
              <td className="p-3">01</td>
              <td className="p-3">
                <div className="text-xs text-[#5709BB]  underline">
                  <p>Sundarban Courier Service</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default ShippingAgent;
