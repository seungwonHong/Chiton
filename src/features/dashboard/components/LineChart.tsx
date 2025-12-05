"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface Props {
  data: Record<string, any>[];
  xKey: string; // X축에 표시할 데이터 키 (예: "date")
  yKey: string; // Y축 값으로 사용할 데이터 키 (예: "value")
  height?: number; // 차트 높이 (선택적, 기본값 300)
  earningsValue: number;
}

const LineChart = ({ data, xKey, yKey, height = 300, earningsValue }: Props) => {
  let xAxisInterval: number | "preserveStartEnd" = "preserveStartEnd";

  console.log(earningsValue);

  switch (earningsValue) {
    case 0: // All time (동적 처리)
      const days = data.length;
      if (days <= 60) {
        xAxisInterval = "preserveStartEnd";
      } else if (days <= 365) {
        xAxisInterval = 30; // 1달 간격
      } else if (days <= 730) {
        xAxisInterval = 90; // 2년 이내는 3달 간격
      } else {
        xAxisInterval = 365; // 2년 이상은 1년 간격
      }
      break;
    case 1: // 24시간
      xAxisInterval = 6; // 4개 데이터마다 표시 (데이터가 시간별로 있다고 가정 시)
      break;
    case 7: // 7일
      xAxisInterval = 0; // 모든 라벨 표시
      break;
    case 30: // 30일
      xAxisInterval = "preserveStartEnd"; // 시작과 끝만
      break;
    case 90: // 3개월
      xAxisInterval = 30; // 대략 30일 간격 (데이터 빈도에 따라 조정 필요)
      break;
    case 365: // 1년
      xAxisInterval = "preserveStartEnd"; // 심플하게 시작/끝
      break;
    default: // 나머지
      xAxisInterval = "preserveStartEnd";
  }
  console.log(xAxisInterval);

  const tickFormatter = (value: any, index: number) => {
    if (xAxisInterval === "preserveStartEnd") {
      if (index === 0 || index === data.length - 1) return value;
      return "";
    }
    return value;
  };

  return (
    <div className="outline-none focus:outline-none [&_svg]:outline-none [&_svg]:focus:outline-none">
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          key={earningsValue}
          data={data}
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey={xKey}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#808080", fontSize: 12 }}
            interval={xAxisInterval === "preserveStartEnd" ? 0 : xAxisInterval}
            tickFormatter={tickFormatter}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={false} // Y축 숫자 표시 제거
            width={0} // Y축 공간 최소화
          />
          <Tooltip
            isAnimationActive={false}
            cursor={{ stroke: "#e5e5e5", strokeWidth: 1, strokeDasharray: "0" }} // 세로선만 표시
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background border-[1px] border-[var(--dashboard-card-border)] rounded-[0.4rem] p-[0.4rem_0.8rem] box-shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex flex-row items-center gap-[1.2rem]">
                    <p className="m-0 text-[var(--foreground)] text-[1.2rem]">
                      {label}
                    </p>
                    <p className="m-[0.2rem_0_0_0] text-[var(--foreground)] text-[1.4rem] font-medium">
                      ${payload[0].value?.toFixed(2) || "0.00"}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke="#22c55e" // 고정 색상
            strokeWidth={2}
            fill="url(#colorEarnings)"
            fillOpacity={1}
            dot={false}
            activeDot={{ r: 4 }}
            isAnimationActive={true}
            animationEasing="ease-out"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
