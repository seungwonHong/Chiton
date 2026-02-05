import { create } from "zustand";

interface StepStore {
  stepNumber: number;
  setStepNumber: (stepNumber: number) => void;

  ageVerification: {
    day: number;
    month: number;
    year: number;
    confirmed: boolean;
  } | null;

  personalInfo: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsOfUse: boolean;
    personalData: boolean;
    thirdPartySharing: boolean;
    crossBorderTransfer: boolean;
    marketing: boolean;
  } | null;

  introduceYourself: {
    status: string;
    introduction: string;
    links: string[];
    techStacks: string[];
  } | null;

  // Choose Your Interests는 공통으로 쓰이는 부분이 있어서 따로 빼놓음

  followDevelopers: string[];

  setAgeVerification: (
    ageVerification: Partial<{
      day: number;
      month: number;
      year: number;
      confirmed: boolean;
    }> | null
  ) => void;

  setPersonalInfo: (
    personalInfo: Partial<{
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      termsOfUse: boolean;
      personalData: boolean;
      thirdPartySharing: boolean;
      crossBorderTransfer: boolean;
      marketing: boolean;
    }> | null
  ) => void;

  setIntroduceYourself: (
    introduceYourself: Partial<{
      status: string;
      introduction: string;
      links: string[];
      techStacks: string[];
    }> | null
  ) => void;

  setFollowDevelopers: (followDevelopers: string[]) => void;
}

const useStepStore = create<StepStore>((set) => ({
  stepNumber: 1,
  setStepNumber: (stepNumber) => set({ stepNumber }),

  ageVerification: {
    day: 14,
    month: 8,
    year: 2004,
    confirmed: false,
  },

  personalInfo: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsOfUse: false,
    personalData: false,
    thirdPartySharing: false,
    crossBorderTransfer: false,
    marketing: false,
  },

  introduceYourself: {
    status: "",
    introduction: "",
    links: [],
    techStacks: [],
  },

  followDevelopers: [],

  setAgeVerification: (data) =>
    set((state) => ({
      ageVerification:
        data === null
          ? null
          : ({
              ...(state.ageVerification ?? {
                day: 14,
                month: 8,
                year: 2004,
                confirmed: false,
              }),
              ...data,
            } as StepStore["ageVerification"]),
    })),

  setPersonalInfo: (data) =>
    set((state) => ({
      personalInfo:
        data === null
          ? null
          : ({
              ...(state.personalInfo ?? {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                termsOfUse: false,
                personalData: false,
                thirdPartySharing: false,
                crossBorderTransfer: false,
                marketing: false,
              }),
              ...data,
            } as StepStore["personalInfo"]),
    })),

  setIntroduceYourself: (data) =>
    set((state) => ({
      introduceYourself:
        data === null
          ? null
          : ({
              ...(state.introduceYourself ?? {
                status: "",
                introduction: "",
                links: [],
                techStacks: [],
              }),
              ...data,
            } as StepStore["introduceYourself"]),
    })),

  setFollowDevelopers: (data) =>
    set((state) => ({
      followDevelopers: data,
    })),
}));

export default useStepStore;
