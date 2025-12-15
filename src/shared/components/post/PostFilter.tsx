"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import useDropDownStore from "../../store/dropDownStore";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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
    <>
      {/* 드롭다운 메뉴 */}
      <DropdownMenu open={postFilterOpen} onOpenChange={setPostFilterOpen}>
        <DropdownMenuTrigger asChild>
          <div
            className={`relative mr-auto flex flex-row items-center lg:px-[1.6rem] px-[0.8rem] lg:py-[0.6rem] py-[0.4rem] hover:bg-post-filter-background active:bg-post-filter-background transition-all duration-300 cursor-pointer lg:rounded-[0.6rem] rounded-[0.4rem] lg:gap-[0.8rem] gap-[0.4rem] 2xl:mb-[4rem] lg:mb-[3.2rem] md:mb-[2.4rem] mb-[1.6rem]`}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-normal">
              {filter === "recent"
                ? "Recent"
                : filter === "foryou"
                ? "For You"
                : "Follower"}
            </span>
            <ChevronDown className="lg:w-[1.6rem] lg:h-[1.6rem] md:w-[1.4rem] md:h-[1.4rem] w-[1.2rem] h-[1.2rem]" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          side="bottom"
          className="flex flex-col gap-[0.4rem] w-[12rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
        >
          <DropdownMenuItem
            className={`flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none  ${
              filter === "recent" ? "bg-accent" : "hover:bg-accent"
            }`}
            onClick={() => handleFilter("recent")}
          >
            <span className="text-[1.4rem] font-normal leading-none">
              Recent
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none  ${
              filter === "foryou" ? "bg-accent" : "hover:bg-accent"
            }`}
            onClick={() => handleFilter("foryou")}
          >
            <span className="text-[1.4rem] font-normal leading-none">
              For You
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`flex items-center rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none  ${
              filter === "follower" ? "bg-accent" : "hover:bg-accent"
            }`}
            onClick={() => handleFilter("follower")}
          >
            <span className="text-[1.4rem] font-normal leading-none">
              Follower
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default PostFilter;
