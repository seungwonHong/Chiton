import React from "react";
import DashboardFilter from "./DashboardFilter";

interface Props {
  title: string;
  value: string;
  icon: React.ReactNode;
  queryKey?: string;
  filter: boolean;
}

const SubscriberStatCard = ({
  title,
  value,
  icon,
  queryKey,
  filter,
}: Props) => {
  return (
    <div className="flex flex-1 flex-row items-start w-full 2xl:p-[2.4rem] lg:p-[2rem] md:p-[1.6rem] p-[1.2rem] 2xl:rounded-[1.6rem] lg:rounded-[1.4rem] md:rounded-[1.2rem] rounded-[1rem] border-[1px] border-[var(--color-dashboard-card-border)]">
      <div className="flex flex-row items-center justify-center bg-side-bar-hover 2xl:rounded-[1.6rem] lg:rounded-[1.4rem] md:rounded-[1.2rem] rounded-[1rem] 2xl:w-[8rem] w-[6rem] 2xl:h-[8rem] h-[6rem] aspect-square">
        {icon}
      </div>

      <div className="flex flex-col items-start justify-between 2xl:ml-[2.4rem] lg:ml-[2rem] md:ml-[1.6rem] ml-[1.2rem]">
        <span className="2xl:text-[2rem] lg:text-[1.8rem] md:text-[1.6rem] text-[1.6rem] font-normal">
          {title}
        </span>
        <span className="2xl:text-[2.8rem] lg:text-[2.4rem] md:text-[2rem] text-[2.4rem] font-medium">
          {value}
        </span>
      </div>

      {filter && (
        <div className="flex ml-auto">
          <DashboardFilter
            options={{
              "Last 24 hours": 1,
              "Last 7 days": 7,
              "Last 30 days": 30,
              "Last 3 months": 90,
              "Last 12 months": 365,
              "All time": 0,
            }}
            queryKey={queryKey || ""}
            textClassName="2xl:text-[1.4rem] lg:text-[1.2rem] text-[1.2rem]"
            iconClassName="w-[1.6rem] h-[1.6rem]"
          />
        </div>
      )}
    </div>
  );
};

export default SubscriberStatCard;
