"use client";
import { useState } from "react";
import hubItems from "./hubItems";
import Link from "next/link";

const HubSidebar = () => {
  const [expanded, setExpanded] = useState({});

  const toggleDropdown = (itemId) => {
    setExpanded((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };
  return (
    <div className="hidden w-[15%] px-6 py-8 bg-[#FEFEFF] sm:block ">
      <h2 className="text-xl font-semibold text-center text-[#1E1E1E] flex items-center gap-2 mx-2">
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3937_3990)">
            <circle cx="14" cy="4.5" r="2" fill="#D5C2FF" />
            <circle cx="14" cy="24.5" r="2" fill="#D5C2FF" />
            <circle
              cx="14"
              cy="14.5"
              r="5.75"
              fill="#EBE2FF"
              stroke="#5709BB"
              stroke-width="1.5"
            />
            <circle
              cx="14"
              cy="14.5"
              r="3.25"
              fill="white"
              stroke="#5709BB"
              stroke-width="1.5"
            />
            <circle
              cx="5.5"
              cy="3.5"
              r="2.75"
              fill="white"
              stroke="#5709BB"
              stroke-width="1.5"
            />
            <circle
              cx="22.5"
              cy="25"
              r="2.75"
              fill="white"
              stroke="#5709BB"
              stroke-width="1.5"
            />
            <circle
              cx="6"
              cy="25.5"
              r="2.75"
              fill="white"
              stroke="#5709BB"
              stroke-width="1.5"
            />
            <circle
              cx="3"
              cy="14.5"
              r="2.25"
              fill="white"
              stroke="#5709BB"
              stroke-width="1.5"
            />
            <circle
              cx="25"
              cy="14.5"
              r="2.25"
              fill="white"
              stroke="#5709BB"
              stroke-width="1.5"
            />
            <circle
              cx="22.5"
              cy="3.5"
              r="2.75"
              fill="white"
              stroke="#5709BB"
              stroke-width="1.5"
            />
            <rect
              width="7"
              height="1"
              transform="translate(15.7275 10.9248) rotate(-50)"
              fill="#5709BB"
            />
            <rect
              width="7"
              height="1"
              transform="translate(7 22.6284) rotate(-50)"
              fill="#5709BB"
            />
            <rect
              width="7"
              height="1"
              transform="translate(16.2661 17) rotate(50)"
              fill="#5709BB"
            />
            <rect
              width="7"
              height="1"
              transform="translate(7.26611 6) rotate(50)"
              fill="#5709BB"
            />
            <circle cx="14" cy="14.5" r="2" fill="#B276FF" />
            <circle cx="25" cy="14.5" r="1" fill="#B276FF" />
            <circle cx="22.5" cy="3.5" r="1.5" fill="#B276FF" />
            <circle cx="22.5" cy="25" r="1.5" fill="#B276FF" />
            <circle cx="6" cy="25.5" r="1.5" fill="#B276FF" />
            <circle cx="5.5" cy="3.5" r="1.5" fill="#B276FF" />
            <circle cx="3" cy="14.5" r="1" fill="#B276FF" />
          </g>
          <defs>
            <clipPath id="clip0_3937_3990">
              <rect width="28" height="29" fill="white" />
            </clipPath>
          </defs>
        </svg>
        My UpOn Hub
      </h2>
      <div className="flex flex-col mt-5">
        {hubItems.map((section) => (
          <div key={section.title} className="mb-2">
            <ul className="dropdown p-1">
              {section.items.map((item) => (
                <li key={item.id} className="p-1">
                  <div
                    className="flex items-center mb-1 hover:text-[#5709BB]  focus:text-[#5709BB]  cursor-pointer"
                    onClick={() => item.subItems && toggleDropdown(item.id)}
                  >
                    {item.icon}
                    {item.subItems ? (
                      <p
                        className="mx-4 text-sm cursor-pointer"
                        onClick={() => toggleDropdown(item.id)}
                      >
                        {item.label}
                      </p>
                    ) : (
                      <Link href={`${item.href}`} passHref>
                        <p className="mx-4  text-sm">{item.label}</p>
                      </Link>
                    )}
                    {item.subItems && (
                      <span className="ml-auto">
                        <img
                          src={
                            expanded[item.id]
                              ? "/Icons/upload.png"
                              : "/Icons/down.png"
                          }
                          alt={
                            expanded[item.id] ? "Collapse Icon" : "Expand Icon"
                          }
                          width={10}
                          height={10}
                        />
                      </span>
                    )}
                  </div>

                  {item.subItems && expanded[item.id] && (
                    <ul className="dropdown-content pl-12">
                      {item.subItems.map((subItem, index) => (
                        <li
                          key={index}
                          className="my-2 text-sm hover:text-[#5709BB] focus:text-[#5709BB]"
                        >
                          <Link href={`${subItem.link}`} passHref>
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HubSidebar;
