"use client";
import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import useDropDownStore from "@/shared/store/dropDownStore";
import DropDownMenu from "@/shared/components/DropDownMenu";
import { usePathname, useRouter } from "next/navigation";

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
  const { activeDashboardFilter, setActiveDashboardFilter } =
    useDropDownStore();

  const isOpen = activeDashboardFilter === queryKey;

  const handleFilter = (selected: string) => {
    setSelected(selected);
    setActiveDashboardFilter(null);
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
    <div
      className={`relative flex flex-row gap-[0.4rem] items-center lg:px-[1.6rem] px-[0.8rem] lg:py-[0.6rem] py-[0.4rem] cursor-pointer ${
        isOpen ? "" : "hover:bg-side-bar-hover"
      } transition-all duration-300 ease-in-out rounded-[0.4rem] lg:rounded-[0.6rem]`}
      onClick={(e) => {
        e.stopPropagation();
        setActiveDashboardFilter(isOpen ? null : queryKey);
      }}
    >
      <span className={`font-normal ${textClassName}`}>{selected}</span>
      <ChevronDown className={`${iconClassName}`} strokeWidth={1.5} />

      {isOpen && (
        <DropDownMenu
          className="lg:top-[4rem] top-[3.2rem] right-[0.6rem]"
          align="right"
        >
          {Object.keys(options).map((option) => (
            <div
              key={option}
              className={`flex flex-row items-center justify-center lg:px-[3.2rem] md:px-[2.8rem] px-[3.2rem] lg:py-[0.8rem] md:py-[0.6rem] py-[0.8rem] lg:rounded-[1rem] rounded-[0.8rem] w-full ${
                selected === option
                  ? "bg-drop-down-menu-hover"
                  : "hover:bg-drop-down-menu-hover"
              }`}
              onClick={() => handleFilter(option)}
            >
              <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal shrink-0">
                {option}
              </span>
            </div>
          ))}
        </DropDownMenu>
      )}
    </div>
  );
};

export default DashboardFilter;
