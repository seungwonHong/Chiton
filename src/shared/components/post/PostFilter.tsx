"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import useDropDownStore from "../../store/dropDownStore";
import DropDownMenu from "../DropDownMenu";

type Props = {};

const PostFilter = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const { postFilterOpen, setPostFilterOpen } = useDropDownStore();

  const [filter, setFilter] = useState<"recent" | "foryou" | "follower">(
    "recent"
  );

  const handleFilter = async (filter: "recent" | "foryou" | "follower") => {
    setFilter(filter);
    setPostFilterOpen(false);
    const params = new URLSearchParams(window.location.search);
    params.set("filter", filter);

    router.replace(`${pathname}?${params.toString()}`); // pathname 추가
    await new Promise((resolve) => setTimeout(resolve, 0)); // URL 업데이트 대기
    router.refresh(); // 서버 컴포넌트 재렌더링
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filter = params.get("filter");
    if (filter) {
      setFilter(filter as "recent" | "foryou" | "follower");
    }
  }, [pathname]);

  return (
    <div
      className={`relative mr-auto flex flex-row items-center lg:px-[1.6rem] px-[0.8rem] lg:py-[0.6rem] py-[0.4rem] ${
        postFilterOpen
          ? ""
          : "hover:bg-post-filter-background active:bg-post-filter-background"
      } transition-all duration-300 cursor-pointer lg:rounded-[0.6rem] rounded-[0.4rem] lg:gap-[0.8rem] gap-[0.4rem] 2xl:mb-[4rem] lg:mb-[3.2rem] md:mb-[2.4rem] mb-[1.6rem]`}
      onClick={(e) => {
        e.stopPropagation();
        setPostFilterOpen(!postFilterOpen);
      }}
    >
      <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
        {filter === "recent"
          ? "Recent"
          : filter === "foryou"
          ? "For You"
          : "Follower"}
      </span>
      <ChevronDown className="lg:w-[1.6rem] lg:h-[1.6rem] md:w-[1.4rem] md:h-[1.4rem] w-[1.2rem] h-[1.2rem]" />

      {/* 드롭다운 메뉴 */}
      {postFilterOpen && (
        <DropDownMenu className="lg:top-[3.2rem] top-[3rem] left-[0]">
          <div
            className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full ${
              filter === "recent"
                ? "bg-drop-down-menu-hover"
                : "hover:bg-drop-down-menu-hover"
            }`}
            onClick={() => handleFilter("recent")}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              Recent
            </span>
          </div>
          <div
            className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full ${
              filter === "foryou"
                ? "bg-drop-down-menu-hover"
                : "hover:bg-drop-down-menu-hover"
            }`}
            onClick={() => handleFilter("foryou")}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              For You
            </span>
          </div>
          <div
            className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full ${
              filter === "follower"
                ? "bg-drop-down-menu-hover"
                : "hover:bg-drop-down-menu-hover"
            }`}
            onClick={() => handleFilter("follower")}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal">
              Follower
            </span>
          </div>
        </DropDownMenu>
      )}
    </div>
  );
};

export default PostFilter;
