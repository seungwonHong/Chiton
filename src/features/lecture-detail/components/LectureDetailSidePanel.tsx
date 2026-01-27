"use client";
import React from "react";
import { Folders } from "lucide-react";
import SuggestedLecture from "./SuggestedLecture";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const LectureDetailSidePanel = () => {

  return (
    <div className="flex flex-col w-full">
      {/* 섹션의 존재 유뮤로 렌더링 */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="section-1">
          <AccordionTrigger className="cursor-pointer [&>svg]:w-[2rem] [&>svg]:h-[2rem] w-full">
            <div className="flex flex-row items-center gap-[0.8rem]">
              <Folders className="w-[2.4rem] h-[2.4rem]" strokeWidth={1.5} />
              <span className="text-[1.6rem] font-medium">Section</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className=" w-full">
            {Array.from({ length: 10 }).map((_, index) => (
              <SuggestedLecture key={index} />
            ))}
            <div className="w-full h-[0.5px] bg-divide-color my-[1.6rem]"></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 추천 영상 */}
      <div className="flex flex-col w-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <SuggestedLecture key={index} />
        ))}
      </div>
    </div>
  );
};

export default LectureDetailSidePanel;
