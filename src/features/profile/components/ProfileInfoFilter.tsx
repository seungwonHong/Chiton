"use client";
import React, { useState } from "react";
import useSidebarStore from "@/shared/store/sidebarStore";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {};

const ProfileInfoFilter = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const typeFromQuery = searchParams.get("type");
  const { isOpen } = useSidebarStore();
  const [selectedFilter, setSelectedFilter] = useState(
    typeFromQuery || "posts"
  );

  const handleFilter = async (filter: string) => {
    setSelectedFilter(filter);

    const params = new URLSearchParams(window.location.search);
    params.set("type", filter);
    router.replace(`${pathname}?${params.toString()}`);
    await new Promise((resolve) => setTimeout(resolve, 0));
    router.refresh();
  };

  return (
    <div
      className={`lg:py-[1.4rem] md:py-[1.6rem] bg-background lg:mt-[2.4rem] md:mt-[1.6rem] mt-[2.4rem] flex flex-row lg:gap-[1rem] md:gap-[0.6rem] items-center w-full overflow-x-auto ${
        isOpen
          ? "md:top-0 md:sticky z-[120]"
          : "2xl:top-[5.6rem] md:top-[4.8rem] z-[95]"
      }`}
    >
      <button
        className={`lg:px-[2.4rem] md:px-[1.6rem] px-[2rem] lg:py-[0.6rem] md:py-[0.4rem] py-[0.6rem] lg:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.8rem] cursor-pointer 2xl:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] font-normal ${
          selectedFilter === "posts"
            ? "bg-[var(--color-button-bg)] text-[var(--color-background)]"
            : "bg-transparent hover:bg-post-filter-background"
        }`}
        onClick={() => handleFilter("posts")}
      >
        Posts
      </button>
        <button
        className={`lg:px-[2.4rem] md:px-[1.6rem] px-[2rem] lg:py-[0.6rem] md:py-[0.4rem] py-[0.6rem] lg:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.8rem] cursor-pointer 2xl:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] font-normal ${
          selectedFilter === "comments"
            ? "bg-[var(--color-button-bg)] text-[var(--color-background)]"
            : "bg-transparent hover:bg-post-filter-background"
        }`}
        onClick={() => handleFilter("comments")}
      >
        Comments
      </button>
      <button
        className={`lg:px-[2.4rem] md:px-[1.6rem] px-[2rem] lg:py-[0.6rem] md:py-[0.4rem] py-[0.6rem] lg:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.8rem] cursor-pointer 2xl:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] font-normal ${
          selectedFilter === "topics"
            ? "bg-[var(--color-button-bg)] text-[var(--color-background)]"
            : "bg-transparent hover:bg-post-filter-background"
        }`}
        onClick={() => handleFilter("topics")}
      >
        Topics
      </button>
      <button
        className={`lg:px-[2.4rem] md:px-[1.6rem] px-[2rem] lg:py-[0.6rem] md:py-[0.4rem] py-[0.6rem] lg:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.8rem] cursor-pointer 2xl:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] font-normal ${
          selectedFilter === "lectures"
            ? "bg-[var(--color-button-bg)] text-[var(--color-background)]"
            : "bg-transparent hover:bg-post-filter-background"
        }`}
        onClick={() => handleFilter("lectures")}
      >
        Lectures
      </button>
      <button
        className={`lg:px-[2.4rem] md:px-[1.6rem] px-[2rem] lg:py-[0.6rem] md:py-[0.4rem] py-[0.6rem] lg:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.8rem] cursor-pointer 2xl:text-[1.6rem] md:text-[1.4rem] text-[1.4rem] font-normal ${
          selectedFilter === "bookmarks"
            ? "bg-[var(--color-button-bg)] text-[var(--color-background)]"
            : "bg-transparent hover:bg-post-filter-background"
        }`}
        onClick={() => handleFilter("bookmarks")}
      >
        Bookmarks
      </button>
    </div>
  );
};

export default ProfileInfoFilter;
