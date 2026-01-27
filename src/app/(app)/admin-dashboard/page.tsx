"use client";
import React, { useEffect, useState } from "react";
import { UserStar, Flag, Mail, Users } from "lucide-react";
import SubscriberStatCard from "@/features/dashboard/components/SubscriberStatCard";
import EarningsComponent from "@/features/dashboard/components/EarningsComponent";
import { UserPlus, UserMinus } from "lucide-react";
import SubscribersComponent from "@/features/dashboard/components/SubscribersComponent";
import DashboardFilter from "@/features/dashboard/components/DashboardFilter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DashboardModal from "@/features/dashboard/components/DashboardModal";
import useModalStore from "@/shared/store/modalStore";
import TableStatus from "@/features/dashboard/components/TableStatus";
import { MailPlus } from "lucide-react";

const AdminDashboard = () => {
  const [earningsValue, setEarningsValue] = useState(30);
  const { isOpen, setIsOpen } = useModalStore();
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEarningsValue(Number(params.get("earnings") || "30"));
  }, []);

  // 목업 데이터
  const chartData = Array.from(
    {
      length:
        earningsValue === 1
          ? 24
          : earningsValue === 0
          ? 365 * 5
          : earningsValue, // 0일 때 5년(365 * 5)
    },
    (_, i) => {
      const date = new Date();

      if (earningsValue === 1) {
        // 24시간: 1시간 단위
        date.setHours(
          date.getHours() - ((earningsValue === 1 ? 24 : earningsValue) - 1 - i)
        );
        return {
          date: date.toLocaleTimeString("en-US", { hour: "numeric" }),
          value: Math.random() * 100,
        };
      } else {
        // 일 단위: earningsValue만큼 과거로 이동
        // 0일 때 5년(365 * 5)
        const count = earningsValue === 0 ? 365 * 5 : earningsValue;
        date.setDate(date.getDate() - (count - 1 - i));

        // 5년치면 연도도 표시하는 게 좋음 (데이터 길이에 따라 포맷 변경)
        const dateFormat =
          count > 365
            ? { year: "numeric", month: "short", day: "numeric" } // "Oct 31, 2024"
            : { month: "short", day: "numeric" }; // "Oct 31"

        return {
          date: date.toLocaleDateString("en-US", dateFormat as any),
          value: Math.random() * 100,
        };
      }
    }
  );

  // 파이 차트 데이터(목업)
  const pieChartData = [
    { name: "Pro", value: 150 },
    { name: "Premium", value: 5000 },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center 2xl:mt-[6.4rem] md:mt-[5.6rem] mt-[8rem] 2xl:px-[8rem] lg:px-[6rem] md:px-[3.2rem] px-[1.6rem]">
      <div className="flex flex-col items-start justify-center w-full 2xl:max-w-[150rem] lg:max-w-[130rem] md:max-w-[100rem]">
        {/* 페이지 이름 */}
        <div className="flex flex-row items-center 2xl:gap-[1.6rem] lg:gap-[1.2rem] md:gap-[0.8rem] gap-[0.4rem]">
          <UserStar className="2xl:w-[3.6rem] 2xl:h-[3.6rem] lg:w-[3.2rem] lg:h-[3.2rem] md:w-[2.8rem] md:h-[2.8rem] w-[3.2rem] h-[3.2rem]" />
          <h1 className="2xl:text-[3.6rem] lg:text-[3.2rem] md:text-[2.8rem] text-[3.2rem] font-medium">
            Admin Dashboard
          </h1>
        </div>

        {/* 대시보드 내용 */}
        <div className="2xl:max-w-[120rem] lg:max-w-[100rem] md:max-w-[80rem] w-full flex flex-col mx-auto 2xl:mt-[6.4rem] lg:mt-[4.8rem] md:mt-[3.2rem] mt-[1.6rem]">
          <div
            className="flex flex-row w-fit items-center ml-auto cursor-pointer lg:gap-[0.8rem] gap-[0.4rem] py-[0.6rem] px-[1.2rem] rounded-[0.6rem] hover:bg-side-bar-hover"
            onClick={() => {
              setIsOpen(true);
              setModalType("send-emails");
            }}
          >
            <MailPlus className="w-[2rem] h-[2rem] text-[var(--color-dashboard-card-text)]" />
            <span className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem] font-medium">
              Send Emails
            </span>
          </div>
          {/* 관리 */}
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:gap-[2.4rem] lg:gap-[2rem] md:gap-[1.6rem] gap-[1.2rem] mt-[2.4rem]">
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setModalType("managers");
              }}
            >
              <SubscriberStatCard
                title="Managers"
                value="100"
                icon={
                  <UserStar className="w-[3rem] h-[3rem] text-[var(--color-dashboard-card-text)]" />
                }
                filter={false}
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setModalType("report-management");
              }}
            >
              <SubscriberStatCard
                title="Report Management"
                value="100"
                icon={
                  <Flag className="w-[3rem] h-[3rem] text-[var(--color-dashboard-card-text)]" />
                }
                filter={false}
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setModalType("beta-application");
              }}
            >
              <SubscriberStatCard
                title="Beta Applications"
                value="100"
                icon={
                  <Mail className="w-[3rem] h-[3rem] text-[var(--color-dashboard-card-text)]" />
                }
                filter={false}
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setModalType("beta-testers");
              }}
            >
              <SubscriberStatCard
                title="Beta Testers"
                value="100"
                icon={
                  <Users className="w-[3rem] h-[3rem] text-[var(--color-dashboard-card-text)]" />
                }
                filter={false}
              />
            </div>
          </div>

          {/* 수익 그래프 */}
          <div className="2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.2rem]">
            <EarningsComponent
              chartData={chartData}
              earningsValue={earningsValue}
            />
          </div>

          {/* 구독자수와 구독자 분배 파이그래프 */}
          <div className="flex md:flex-row flex-col items-center 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.2rem] 2xl:gap-[2.4rem] lg:gap-[2rem] md:gap-[1.6rem] gap-[1.2rem]">
            {/* 구독자수 */}
            <SubscribersComponent
              chartData={chartData}
              earningsValue={earningsValue}
              queryKey="subscribers"
              chartType="line"
            />

            {/* 구독자 분배와 파이 차트*/}
            <SubscribersComponent
              pieChartData={pieChartData}
              queryKey="subscribers"
              chartType="pie"
            />
          </div>

          {/* 신규 구독자와 취소 구독자 */}
          <div className="flex md:flex-row flex-col items-center w-full 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.2rem] 2xl:gap-[2.4rem] lg:gap-[2rem] md:gap-[1.6rem] gap-[1.2rem]">
            <SubscriberStatCard
              title="New Subscribers"
              value="100"
              queryKey="new-subscribers"
              icon={
                <UserPlus className="w-[3rem] h-[3rem] text-[var(--color-dashboard-card-text)]" />
              }
              filter={true}
            />
            <SubscriberStatCard
              title="Churned Subscribers"
              value="10"
              queryKey="churned-subscribers"
              icon={
                <UserMinus className="w-[3rem] h-[3rem] text-[var(--color-dashboard-card-text)]" />
              }
              filter={true}
            />
          </div>

          {/* 구독자 테이블 */}
          <div className="flex flex-col 2xl:mt-[4rem] lg:mt-[3.2rem] mt-[4.8rem] 2xl:mb-[4rem] lg:mb-[3.2rem] mb-[2.4rem]">
            <div className="flex flex-row items-start justify-between">
              <h2 className="2xl:text-[2.4rem] lg:text-[2rem] md:text-[1.8rem] text-[2rem] font-medium">
                Subscriber Table
              </h2>
              <DashboardFilter
                options={{
                  All: 1,
                  Pro: 2,
                  Ultimate: 3,
                }}
                queryKey="subscriber-table"
                textClassName="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem]"
                iconClassName="w-[1.6rem] h-[1.6rem]"
              />
            </div>
            {/* 테이블 */}
            <div className="w-full overflow-x-auto 2xl:mt-[2.4rem] lg:mt-[2rem] md:mt-[1.6rem] mt-[1.2rem]">
              <Table>
                <TableHeader className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem]">
                  <TableRow className="border-b border-dashboard-card-border">
                    <TableHead>Name</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Subscription Date</TableHead>
                    <TableHead>Next Payment Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody className="2xl:text-[1.6rem] lg:text-[1.4rem] md:text-[1.2rem] text-[1.4rem]">
                  {[
                    {
                      name: "John Doe",
                      plan: "Pro",
                      price: "14.99",
                      subscriptionDate: "2025.01.01",
                      nextPaymentDate: "2025.01.01",
                      status: "pending",
                    },
                    {
                      name: "hong.seung.won",
                      plan: "Premium",
                      price: "29.99",
                      subscriptionDate: "2025.01.01",
                      nextPaymentDate: "2025.01.01",
                      status: "failed",
                    },
                    {
                      name: "Jonny Depp",
                      plan: "Premium",
                      price: "29.99",
                      subscriptionDate: "2025.01.01",
                      nextPaymentDate: "2025.01.01",
                      status: "paid",
                    },
                    {
                      name: "Tom Cruise",
                      plan: "Premium",
                      price: "29.99",
                      subscriptionDate: "2025.01.01",
                      nextPaymentDate: "2025.01.01",
                      status: "canceled",
                    },
                    {
                      name: "Brad Pitt",
                      plan: "Premium",
                      price: "29.99",
                      subscriptionDate: "2025.01.01",
                      nextPaymentDate: "2025.01.01",
                      status: "in_transit",
                    },
                  ].map((item) => (
                    <TableRow
                      key={item.name}
                      className="border-b border-dashboard-card-border"
                    >
                      <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                        {item.name}
                      </TableCell>
                      <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                        {item.plan}
                      </TableCell>
                      <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                        $ {item.price}
                      </TableCell>
                      <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                        {item.subscriptionDate}
                      </TableCell>
                      <TableCell className="pr-[4rem] md:pr-[0.8rem]">
                        {item.nextPaymentDate}
                      </TableCell>
                      <TableCell>
                        <TableStatus status={item.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <DashboardModal modalType={modalType} />}
    </div>
  );
};

export default AdminDashboard;
