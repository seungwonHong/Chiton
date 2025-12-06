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
import ManagersModalContentsAction from "./ManagersModalContentsAction";

type Props = {};

const ManagersModalContents = (props: Props) => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="2xl:text-[3.6rem] lg:text-[3rem] md:text-[2.4rem] text-[2rem] font-medium">
        Managers
      </h1>
      <div className="flex flex-row items-center 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.2rem]">
        <Table className="h-full">
          <TableHeader className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem]">
            <TableRow className="border-b border-dashboard-card-border">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] overflow-x-auto">
            {[
              {
                name: "John Doe",
                email: "john.doe@example.com",
                role: "Manager",
              },
              {
                name: "hong.seung.won",
                email: "hong.seung.won@example.com",
                role: "Supreme Manager",
              },
            ].map((item) => {
              return (
                <TableRow
                  key={item.name}
                  className="border-b border-dashboard-card-border cursor-pointer"
                >
                  <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                    {item.name}
                  </TableCell>
                  <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                    {item.email}
                  </TableCell>
                  <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                    {item.role}
                  </TableCell>
                  <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                    <ManagersModalContentsAction
                      name={item.name}
                      role={item.role}
                    />
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

export default ManagersModalContents;
