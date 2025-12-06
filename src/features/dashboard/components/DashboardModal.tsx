"use client";

import Modal from "@/shared/components/Modal";
import ManagersModalContents from "./managers/ManagersModalContents";
import useModalStore from "@/shared/store/modalStore";
import { useEffect } from "react";
import BetaApplicationModalContents from "./beta-application/BetaApplicationModalContents";
import BetaTestersModalContents from "./beta-testers/BetaTestersModalContents";
import ReportManagementModalContents from "./report-management/ReportManagementModalContents";

interface Props {
  modalType: string;
}

const DashboardModal = ({ modalType }: Props) => {
  const { isOpen } = useModalStore();

  // 모달 열릴 때 body 스크롤 잠그기
  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed flex items-center justify-center inset-0 z-[200] bg-[var(--color-modal-background)] backdrop-blur-sm ">
      <Modal className="2xl:w-[100rem] lg:w-[80rem] md:w-[60rem] w-full 2xl:h-[80rem] lg:h-[60rem] md:h-[40rem] h-[56rem] 2xl:rounded-[2rem] lg:rounded-[1.6rem] md:rounded-[1.2rem] rounded-[1rem] border border-dashboard-card-border bg-background">
        {modalType === "managers" && <ManagersModalContents />}
        {modalType === "beta-application" && <BetaApplicationModalContents />}
        {modalType === "report-management" && <ReportManagementModalContents />}
        {modalType === "beta-testers" && <BetaTestersModalContents />}
      </Modal>
    </div>
  );
};

export default DashboardModal;
