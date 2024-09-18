import React from "react";
import Image from "next/image";
const CustomerOrderTable = () => {
  return (
    <>
      <div className="bg-white flex flex-col w-full md:w-4/5">
        <div className="flex p-2 justify-end">
          <div className="flex items-center rounded-l-lg border border-gray-500 p-1.5 gap-2 bg-white">
            <span className="">
              <Image src="/Icons/search.png" alt="" width={10} height={10} />
            </span>
            <input
              type="text"
              placeholder="Search by order id"
              className="w-[150px] md:w-[200px] outline-none"
            />
          </div>
          <button className="bg-[#5709BB]  rounded-r-lg px-2 text-white">
            Search
          </button>
        </div>

        <div className="w-full overflow-x-scroll lg:overflow-auto mb-6">
          <table className="table-fixed lg:table-auto w-[200%] lg:w-full text-sm text-center">
            <thead className="bg-[#EBE2FF]">
              <tr className="border">
                <th className="p-3">SL</th>
                <th className="p-3">Order ID</th>
                <th className="p-3">Total</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3 gap-2 flex items-center justify-center">
                  {/* <span className="border border-[#5709BB] rounded-md text-[#5709BB] p-1.5">
                          <a>
                            <Image
                              src="/Icons/view.png"
                              alt=""
                              width={20}
                              height={20}
                            />
                          </a>
                      </span>

                      <span className="text-xl border border-green-300 rounded-md text-green-300 p-1.5">
                        <Image
                          src="/Icons/download.png"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </span> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CustomerOrderTable;
