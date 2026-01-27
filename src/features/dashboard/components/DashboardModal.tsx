import Modal from "@/shared/components/Modal";
import ManagersModalContents from "./managers/ManagersModalContents";
import BetaApplicationModalContents from "./beta-application/BetaApplicationModalContents";
import BetaTestersModalContents from "./beta-testers/BetaTestersModalContents";
import ReportManagementModalContents from "./report-management/ReportManagementModalContents";
import SendEmailModalContents from "./send-emails/SendEmailModalContents";

interface Props {
  modalType: string;
}

const DashboardModal = ({ modalType }: Props) => {
  return (
    <Modal className="2xl:w-[100rem] lg:w-[80rem] md:w-[60rem] w-full 2xl:h-[80rem] lg:h-[60rem] md:h-[40rem] h-[56rem] ">
      {modalType === "send-emails" && <SendEmailModalContents />}
      {modalType === "managers" && <ManagersModalContents />}
      {modalType === "beta-application" && <BetaApplicationModalContents />}
      {modalType === "report-management" && <ReportManagementModalContents />}
      {modalType === "beta-testers" && <BetaTestersModalContents />}
    </Modal>
  );
};

export default DashboardModal;
