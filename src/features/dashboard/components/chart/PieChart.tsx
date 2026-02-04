"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface Props {
  data: { name: string; value: number }[];
  colors?: string[]; // 선택적 색상 배열
  height?: number;
}

const CustomPieChart = ({
  data,
  colors = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"],
  height = 300,
}: Props) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={height}
      style={{ pointerEvents: "none" }}
    >
      <PieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <Pie
          style={{ pointerEvents: "none" }}
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
