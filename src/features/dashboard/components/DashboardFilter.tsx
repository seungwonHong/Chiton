"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  options: Record<string, number>;
  queryKey: string;
  textClassName?: string;
  iconClassName?: string;
}

const DashboardFilter = ({
  options,
  queryKey,
  textClassName,
  iconClassName,
}: Props) => {
  const [selected, setSelected] = useState(
    queryKey === "subscriber-table"
      ? Object.keys(options)[0]
      : Object.keys(options)[2]
  );
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (selected: string) => {
    setSelected(selected);
    const params = new URLSearchParams(window.location.search);
    const selectedKey = selected; // selected는 현재 키 문자열
    const selectedValue = options[selectedKey]; // options에서 값 가져오기

    params.set(queryKey, selectedValue.toString());

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    router.refresh();
  };

  useEffect(() => {
    const urlValue = new URLSearchParams(window.location.search).get(queryKey);

    if (urlValue) {
      if (urlValue !== selected && queryKey !== "subscriber-table") {
        switch (urlValue) {
          case "1":
            setSelected("Last 24 hours");
            break;
          case "7":
            setSelected("Last 7 days");
            break;
          case "30":
            setSelected("Last 30 days");
            break;
          case "90":
            setSelected("Last 3 months");
            break;
          case "365":
            setSelected("Last 12 months");
            break;
          default:
            setSelected(Object.keys(options)[2]);
            break;
        }
      } else if (urlValue !== selected && queryKey === "subscriber-table") {
        switch (urlValue) {
          case "1":
            setSelected("All");
            break;
          case "2":
            setSelected("Pro");
            break;
          case "3":
            setSelected("Premium");
            break;
          default:
            setSelected(Object.keys(options)[0]);
            break;
        }
      }
    } else {
      setSelected(
        queryKey === "subscriber-table"
          ? Object.keys(options)[0]
          : Object.keys(options)[2]
      );
    }
  }, []);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className={`relative flex flex-row gap-[0.4rem] items-center lg:px-[1.6rem] px-[0.8rem] lg:py-[0.6rem] py-[0.4rem] cursor-pointer hover:bg-side-bar-hover transition-all duration-300 ease-in-out rounded-[0.4rem] lg:rounded-[0.6rem]`}
          >
            <span className={`font-normal ${textClassName}`}>{selected}</span>
            <ChevronDown className={`${iconClassName}`} strokeWidth={1.5} />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          side="bottom"
          className="flex flex-col gap-[0.4rem] w-[14rem] p-[0.4rem] z-[150] border border-border rounded-[0.8rem] bg-popover"
        >
          {Object.keys(options).map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => handleFilter(option)}
              className={`rounded-[0.4rem] py-[0.6rem] px-[0.8rem] w-full md:min-h-[3.2rem] min-h-[4rem] cursor-pointer outline-none ${
                selected === option ? "bg-accent" : "hover:bg-accent"
              }`}
            >
              <span className="text-[1.4rem] font-normal leading-none">
                {option}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DashboardFilter;
