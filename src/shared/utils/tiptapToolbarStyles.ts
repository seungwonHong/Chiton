export const btnClass = (active: boolean) =>
  `group flex flex-row items-center justify-center cursor-pointer p-[0.4rem] rounded-[0.4rem] transition-all duration-300 ease-in-out shrink-0 ${
    active ? "bg-side-bar-hover" : "hover:bg-accent"
  } outline-none`;

export const iconClass = (active: boolean) =>
  `md:w-[1.6rem] md:h-[1.6rem] w-[2rem] h-[2rem] transition-all duration-300 ease-in-out ${
    active ? "text-primary-color" : "text-[#9ca3af] group-hover:text-foreground"
  }`;

export const menuItemClass = (active: boolean) =>
  `group flex flex-row items-center gap-[0.6rem] rounded-[0.4rem] w-full min-h-[3.2rem] px-[0.8rem] py-[0.6rem] cursor-pointer outline-none ${
    active ? "bg-side-bar-hover" : "hover:bg-accent"
  }`;

export const menuIconClass = (active: boolean) =>
  `!md:w-[1.6rem] !md:h-[1.6rem] !w-[2rem] !h-[2rem] transition-all duration-300 ease-in-out ${
    active
      ? "text-primary-color"
      : "text-[#9ca3af] group-hover:text-primary-color"
  }`;

export const menuLabelClass = (active: boolean) =>
  `text-[1.4rem] font-normal leading-none transition-all duration-300 ease-in-out ${
    active ? "text-foreground" : "text-[#9ca3af] group-hover:text-foreground"
  }`;
