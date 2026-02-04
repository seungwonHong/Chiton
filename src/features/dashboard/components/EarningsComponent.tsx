import React from "react";
import LineChart from "./chart/LineChart";
import DashboardFilter from "./DashboardFilter";

interface Props {
  chartData: { date: string; value: number }[];
  earningsValue: number;
}

const EarningsComponent = ({ chartData, earningsValue }: Props) => {
  return (
    <div className="flex flex-col w-full 2xl:p-[2.4rem] lg:p-[2rem] md:p-[1.6rem] p-[1.2rem] 2xl:rounded-[1.6rem] lg:rounded-[1.4rem] md:rounded-[1.2rem] rounded-[1rem] border-[1px] border-[var(--color-dashboard-card-border)]">
      <div className="flex flex-row items-start justify-between">
        <h2 className="2xl:text-[2.4rem] lg:text-[2rem] md:text-[1.8rem] text-[2rem] font-medium">
          Earnings
        </h2>
        <DashboardFilter
          options={{
            "Last 24 hours": 1,
            "Last 7 days": 7,
            "Last 30 days": 30,
            "Last 3 months": 90,
            "Last 12 months": 365,
            "All time": 0,
          }}
          queryKey="earnings"
          textClassName="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem]"
          iconClassName="w-[1.6rem] h-[1.6rem]"
        />
      </div>
      {/* 수익 */}
      <span className="2xl:text-[3.2rem] lg:text-[2.8rem] md:text-[2.4rem] text-[3rem] font-medium mt-[0.4rem]">
        $ 230
      </span>

      {/* 수익 그래프 */}
      <LineChart
        data={chartData}
        earningsValue={earningsValue}
        xKey="date"
        yKey="value"
        height={300}
      />
    </div>
  );
};

export default EarningsComponent;
