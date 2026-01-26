import { create } from "zustand";

interface DropDownStore {
  postFilterOpen: boolean;
  setPostFilterOpen: (isOpen: boolean) => void;
  editPostOpen: string | null;
  setEditPostOpen: (editPostOpen: string | null) => void;
  sidePanelHeaderDropDownOpen: boolean;
  setSidePanelHeaderDropDownOpen: (isOpen: boolean) => void;
  mobilePostButtonDropDownOpen: boolean;
  setMobilePostButtonDropDownOpen: (isOpen: boolean) => void;
  mobileProfileDropDownOpen: boolean;
  setMobileProfileDropDownOpen: (isOpen: boolean) => void;
  sideBarDropDownOpen: boolean;
  setSideBarDropDownOpen: (isOpen: boolean) => void;
  commentEditOpen: number | null;
  setCommentEditOpen: (commentEditOpen: number | null) => void;
  sideBarProfileDropDownOpen: boolean;
  setSideBarProfileDropDownOpen: (isOpen: boolean) => void;
  activeDashboardFilter: string | null;
  setActiveDashboardFilter: (activeDashboardFilter: string | null) => void;
  managersModalDropdownOpen: boolean;
  setManagersModalDropdownOpen: (managersModalDropdownOpen: boolean) => void;
  lectureDropDownOpen: string | null;
  setLectureDropDownOpen: (lectureDropDownOpen: string | null) => void;
}

const useDropDownStore = create<DropDownStore>((set) => ({
  postFilterOpen: false,
  setPostFilterOpen: (postFilterOpen) => set({ postFilterOpen }),
  editPostOpen: null,
  setEditPostOpen: (editPostOpen) => set({ editPostOpen }),
  sidePanelHeaderDropDownOpen: false,
  setSidePanelHeaderDropDownOpen: (sidePanelHeaderDropDownOpen) =>
    set({ sidePanelHeaderDropDownOpen }),
  mobilePostButtonDropDownOpen: false,
  setMobilePostButtonDropDownOpen: (mobilePostButtonDropDownOpen) =>
    set({ mobilePostButtonDropDownOpen }),
  mobileProfileDropDownOpen: false,
  setMobileProfileDropDownOpen: (mobileProfileDropDownOpen) =>
    set({ mobileProfileDropDownOpen }),
  sideBarDropDownOpen: false,
  setSideBarDropDownOpen: (sideBarDropDownOpen) => set({ sideBarDropDownOpen }),
  commentEditOpen: null,
  setCommentEditOpen: (commentEditOpen) => set({ commentEditOpen }),
  sideBarProfileDropDownOpen: false,
  setSideBarProfileDropDownOpen: (sideBarProfileDropDownOpen) =>
    set({ sideBarProfileDropDownOpen }),
  activeDashboardFilter: null,
  setActiveDashboardFilter: (activeDashboardFilter) =>
    set({ activeDashboardFilter }),
  managersModalDropdownOpen: false,
  setManagersModalDropdownOpen: (managersModalDropdownOpen) =>
    set({ managersModalDropdownOpen }),
  lectureDropDownOpen: null,
  setLectureDropDownOpen: (lectureDropDownOpen) => set({ lectureDropDownOpen }),
}));

export default useDropDownStore;
