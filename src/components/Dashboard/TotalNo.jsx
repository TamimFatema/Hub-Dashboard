import React from "react";
import Link from "next/link";
import Total from "./total";

const TotalNo = () => {
  return (
    <>
      {Total.map((link, index) => (
        <Link href={link.href} key={index}>
          <div
            className="rounded-lg flex flex-col p-7 relative border"
            style={{ backgroundColor: link.color }}
          >
            <div className="relative z-10">
              <div className="flex justify-between pb-2">
                <p className="text-lg">{link.title}</p>
              </div>

              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: link.bgColor }}
              >
                <span className="font-extrabold text-white">0 </span>
              </div>
              <div>
                <span>{link.icon}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TotalNo;
