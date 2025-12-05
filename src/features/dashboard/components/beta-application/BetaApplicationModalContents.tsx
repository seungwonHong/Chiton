"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ManagersModalContentsAction from "../managers/ManagersModalContentsAction";
import { Trash2 } from "lucide-react";
import Button from "@/shared/components/Button";

type Props = {};

const BetaApplicationModalContents = (props: Props) => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="2xl:text-[3.6rem] lg:text-[3rem] md:text-[2.4rem] text-[2rem] font-medium">
        Beta Application
      </h1>
      <div className="flex flex-row items-center 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.2rem]">
        <Table className="h-full">
          <TableHeader className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem]">
            <TableRow className="border-b border-dashboard-card-border">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] overflow-x-auto">
            {[
              {
                name: "John Doe",
                email: "john.doe@example.com",
                date: "2025.01.01",
              },
              {
                name: "hong.seung.won",
                email: "hong.seung.won@example.com",
                date: "2025.01.01",
              },
            ].map((item) => {
              return (
                <TableRow
                  key={item.name}
                  className="border-b border-dashboard-card-border"
                >
                  <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                    {item.name}
                  </TableCell>
                  <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                    {item.email}
                  </TableCell>
                  <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                    {item.date}
                  </TableCell>
                  <TableCell className="pr-[4rem] md:pr-[0.8rem] flex flex-row items-center gap-[1.4rem]">
                    <Button className="!px-[1.4rem] !py-[0.4rem] !rounded-[0.6rem] hover:bg-button-hover transition-all duration-300 ease-in-out">
                      Accept
                    </Button>
                    <div className="hover:bg-red-500/20 rounded-[0.6rem] p-[0.4rem]">
                      <Trash2 className="w-[2rem] h-[2rem] text-red-500 cursor-pointer" />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BetaApplicationModalContents;
