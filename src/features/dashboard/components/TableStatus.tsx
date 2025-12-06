import React from "react";

interface Props {
  status: string;
}

const STATUS_STYLE_MAP: Record<string, string> = {
  pending: "bg-[#4671cd]/25 text-[#0044ff]", // 파란 계열만 좀 더 강조
  // 이동 중: 같은 계열이지만 살짝 더 차분한 블루/그레이
  in_transit: "bg-[#4671cd]/15 text-[#3356a3]",

  // 지급 완료: 너무 쨍하지 않은 그린
  paid: "bg-[#16a34a]/15 text-[#15803d]",

  // 취소: 튀지 않는 뉴트럴 그레이
  canceled: "bg-[#9ca3af]/18 text-[#4b5563]",

  // 실패: 살짝 연한 코랄 레드 + 진한 텍스트
  failed: "bg-[#f97373]/18 text-[#b91c1c]",
};

const STATUS_LABEL_MAP: Record<string, string> = {
  pending: "Pending",
  in_transit: "In transit",
  paid: "Paid",
  canceled: "Canceled",
  failed: "Failed",
};

const TableStatus = ({ status }: Props) => {
  const key = status.toLowerCase();
  const classes = STATUS_STYLE_MAP[key] ?? "bg-slate-100 text-slate-800";
  const label = STATUS_LABEL_MAP[key] ?? status;

  return (
    <div
      className={`w-fit flex items-center justify-center px-[0.6rem] py-[0.2rem] rounded-[0.4rem] ${classes}`}
    >
      {label}
    </div>
  );
};

export default TableStatus;
