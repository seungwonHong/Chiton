"use client";
import React, { useState } from "react";
import useDropDownStore from "@/shared/store/dropDownStore";
import { ChevronsUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  name: string;
  role: string;
}

const ManagersModalContentsAction = ({ name, role }: Props) => {
  const { setManagersModalDropdownOpen, managersModalDropdownOpen } =
    useDropDownStore();
  const [currentRole, setCurrentRole] = useState(role);

  return (
    <>
      <DropdownMenu onOpenChange={() => setManagersModalDropdownOpen(true)}>
        <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
          <div
            className={`flex flex-row items-center cursor-pointer px-[1rem] py-[0.5rem] rounded-[0.4rem] w-fit pointer-events-auto ${
              managersModalDropdownOpen ? "" : "hover:bg-side-bar-hover"
            }`}
          >
            <span>{currentRole}</span>
            <ChevronsUpDown className="w-[2rem] h-[2rem]" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          side="bottom"
          className="flex flex-col gap-[0.4rem] w-[14rem] p-[0.4rem] z-[300] border border-border rounded-[0.8rem]"
        >
          <DropdownMenuItem
            className={`flex items-center gap-[0.8rem] rounded-[0.4rem] cursor-pointer md:min-h-[3.2rem] min-h-[4rem] ${
              currentRole === "User" ? "bg-accent" : "hover:bg-accent"
            }`}
            onClick={() => {
              setCurrentRole("User");
              setManagersModalDropdownOpen(false);
            }}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
              User
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`flex items-center gap-[0.8rem] rounded-[0.4rem] cursor-pointer md:min-h-[3.2rem] min-h-[4rem] ${
              currentRole === "Manager" ? "bg-accent" : "hover:bg-accent"
            }`}
            onClick={() => {
              setCurrentRole("Manager");
              setManagersModalDropdownOpen(false);
            }}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
              Manager
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`flex items-center gap-[0.8rem] rounded-[0.4rem] cursor-pointer md:min-h-[3.2rem] min-h-[4rem] ${
              currentRole === "Supreme Manager"
                ? "bg-accent"
                : "hover:bg-accent"
            }`}
            onClick={() => {
              setCurrentRole("Supreme Manager");
              setManagersModalDropdownOpen(false);
            }}
          >
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.6rem] font-normal whitespace-nowrap">
              Supreme Manager
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ManagersModalContentsAction;
