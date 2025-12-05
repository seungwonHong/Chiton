import React from "react";

interface Props {
  number: number;
  content: string;
  trendingNumber: number;
}

const TrendingComponent = ({ number, content, trendingNumber }: Props) => {
  return (
    <div className="flex flex-row w-full items-center px-[1.4rem] py-[0.6rem] rounded-[0.6rem] cursor-pointer hover:bg-side-panel-hover transition-all duration-300 ease-in-out text-[1.4rem] text-[#808080] font-normal">
      <span>
        {number}. {content}
      </span>
      <span className="ml-auto text-[var(--color-primary-color)]">
        {trendingNumber}
      </span>
    </div>
  );
};

export default TrendingComponent;
