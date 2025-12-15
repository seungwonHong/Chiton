"use client";
import React from "react";
import useUrlType from "../hooks/useUrlType";

interface Props {
  tabs: string[];
  type: "landing" | "home";
}

const TabButton = ({ tabs, type }: Props) => {
  const { activeTab, handleMenu } = useUrlType({ type });

  return (
    <div
      className={`flex flex-row items-center justify-center rounded-[0.8rem] bg-[var(--landing-tab-button)] ${
        type === "landing"
          ? "md:h-[4.8rem] h-[4.6rem] md:p-[0.4rem] p-[0.2rem] gap-[0.4rem]"
          : "w-full mt-[2rem] lg:h-[4.4rem] h-[4.2rem] p-[0.2rem] gap-[0.2rem]"
      }`}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleMenu(tab.toLowerCase())}
          className={`font-normal hover:text-black dark:hover:text-white hover:bg-[var(--landing-tab-button-active)] ${
            activeTab === tab.toLowerCase()
              ? "bg-[var(--landing-tab-button-active)] text-black dark:text-white"
              : "text-gray-500"
          } transition-all ease-in-out cursor-pointer rounded-[0.6rem] ${
            type === "landing"
              ? "text-[1.4rem] md:text-[1.6rem] md:px-[5.8rem] md:py-[1rem] px-[4rem] h-full duration-200"
              : "text-[1.4rem] lg:text-[1.6rem] flex-1 text-center h-full duration-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabButton;
