"use client";
import React, { useEffect } from "react";
import { useTabStore } from "@/features/landing/store/tabButton";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface Props {
  tabs: string[];
  onChange?: (tab: string) => void;
  type: "landing" | "home";
}

const TabButton = ({ tabs, type }: Props) => {
  const { activeTab, setActiveTab } = useTabStore();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = async (tab: string) => {
    setActiveTab(tab);
    if (type === "home") {
      const params = new URLSearchParams(window.location.search);
      params.set("type", tab.toLowerCase());
      router.replace(`${pathname}?${params.toString()}`);
      await new Promise((resolve) => setTimeout(resolve, 0));
      router.refresh();
    }
  };

  // 직접 쿼리스트링 읽어와야 함
  useEffect(() => {
    if (type === "home") {
      const typeParam = searchParams.get("type");
      if (typeParam) {
        // 쿼리 파라미터를 직접 읽어서 탭 설정
        setActiveTab(
          typeParam === "posts"
            ? "Posts"
            : typeParam === "topics"
            ? "Topics"
            : "Lectures"
        );
      }
    }
  }, [type, searchParams.toString(), setActiveTab]);

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
          onClick={() => handleClick(tab)}
          className={`font-normal hover:text-black dark:hover:text-white hover:bg-[var(--landing-tab-button-active)] ${
            activeTab === tab
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
