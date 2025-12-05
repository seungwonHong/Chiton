"use client";
import DropDownMenu from "@/shared/components/DropDownMenu";
import React, { useState } from "react";
import useDropDownStore from "@/shared/store/dropDownStore";
import { ChevronsUpDown } from "lucide-react";

interface Props {
  name: string;
  role: string;
}

const ManagersModalContentsAction = ({ name, role }: Props) => {
  const { setManagersModalDropdownOpen, managersModalDropdownOpen } =
    useDropDownStore();
  const isOpen = managersModalDropdownOpen === name;
  const [currentRole, setCurrentRole] = useState(role);

  return (
    <div
      className="relative flex flex-row items-center cursor-pointer px-[1rem] py-[0.5rem] rounded-[0.4rem] hover:bg-side-bar-hover w-fit pointer-events-auto"
      onClick={(e) => {
        e.stopPropagation();
        setManagersModalDropdownOpen(isOpen ? null : name);
      }}
    >
      <span>{currentRole}</span>
      <ChevronsUpDown className="w-[2rem] h-[2rem]" />

      {isOpen && (
        <DropDownMenu className="top-[4rem] right-[0]" align="right">
          <div
            className={`flex flex-row items-center justify-center gap-[1rem] px-[2rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out ${
              currentRole === "User"
                ? "bg-drop-down-menu-hover"
                : "hover:bg-drop-down-menu-hover"
            }`}
            onClick={() => setCurrentRole("User")}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
              User
            </span>
          </div>
          <div
            className={`flex flex-row items-center justify-center gap-[1rem] px-[2rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out ${
              currentRole === "Manager"
                ? "bg-drop-down-menu-hover"
                : "hover:bg-drop-down-menu-hover"
            }`}
            onClick={() => setCurrentRole("Manager")}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
              Manager
            </span>
          </div>
          <div
            className={`flex flex-row items-center justify-center gap-[1rem] px-[2rem] py-[0.8rem] rounded-[0.8rem] w-full hover:bg-drop-down-menu-hover cursor-pointer transition-all duration-300 ease-in-out ${
              currentRole === "Supreme Manager"
                ? "bg-drop-down-menu-hover"
                : "hover:bg-drop-down-menu-hover"
            }`}
            onClick={() => setCurrentRole("Supreme Manager")}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
              Supreme Manager
            </span>
          </div>
        </DropDownMenu>
      )}
    </div>
  );
};

export default ManagersModalContentsAction;
