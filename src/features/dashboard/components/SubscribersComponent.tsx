import React from "react";
import LineChart from "./LineChart";
import DashboardFilter from "./DashboardFilter";
import CustomPieChart from "./PieChart";

interface Props {
  chartData?: { date: string; value: number }[];
  pieChartData?: { name: string; value: number }[];
  earningsValue?: number;
  queryKey: string;
  chartType: "line" | "pie";
}

const SubscribersComponent = ({
  chartData,
  pieChartData,
  earningsValue,
  queryKey,
  chartType,
}: Props) => {
  return (
    <div className="flex flex-1 flex-col w-full 2xl:p-[2.4rem] lg:p-[2rem] md:p-[1.6rem] p-[1.2rem] 2xl:rounded-[1.6rem] lg:rounded-[1.4rem] md:rounded-[1.2rem] rounded-[1rem] border-[1px] border-[var(--color-dashboard-card-border)] md:h-[42.1rem]">
      <div className="flex flex-row items-start justify-between">
        <h2 className="2xl:text-[2.4rem] lg:text-[2rem] md:text-[1.8rem] text-[2rem] font-medium">
          Subscribers
        </h2>
        {chartType === "line" && (
          <DashboardFilter
            options={{
              "Last 24 hours": 1,
              "Last 7 days": 7,
              "Last 30 days": 30,
              "Last 3 months": 90,
              "Last 12 months": 365,
              "All time": 0,
            }}
            queryKey={queryKey}
            textClassName="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem]"
            iconClassName="w-[1.6rem] h-[1.6rem]"
          />
        )}
      </div>

      <div
        className={`flex ${
          chartType === "line"
            ? " flex-col"
            : " flex-row items-start justify-between"
        }`}
      >
        {chartType === "line" ? (
          <span className="2xl:text-[3.2rem] lg:text-[2.8rem] md:text-[2.4rem] text-[3rem] font-medium mt-[0.4rem]">
            10k
          </span>
        ) : (
          <div className="flex flex-col gap-[0.4rem] lg:mt-[2.4rem] md:mt-[2rem] mt-[1.6rem]">
            <span className="text-[1.2rem] font-normal text-[#808080]">
              Pro: 15%
            </span>
            <span className="lg:text-[1.2rem] md:text-[1.2rem] text-[1rem] font-normal text-[#808080]">
              Premium: 85%
            </span>
          </div>
        )}

        {chartType === "line" ? (
          <LineChart
            data={chartData || []}
            earningsValue={earningsValue || 30}
            xKey="date"
            yKey="value"
            height={300}
          />
        ) : (
          <CustomPieChart
            data={pieChartData || []}
            height={350}
            colors={["#22c55e", "#3b82f6"]}
          />
        )}
      </div>
    </div>
  );
};

export default SubscribersComponent;
