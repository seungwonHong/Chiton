import Link from 'next/link';
import React from 'react'

const FooterHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full lg:px-[12rem] md:px-[3.2rem] px-[1.6rem] flex flex-row items-center justify-between 2xl:mt-[3.2rem] lg:mt-[2.4rem] md:mt-[1.6rem] mt-[1rem]">
      <Link href="/" className="cursor-pointer dark:hidden block">
        <img
          src="/icons/ChitonLogoDark.png"
          alt="logo"
          className="2xl:w-[36px] 2xl:h-[36px] lg:w-[32px] lg:h-[32px] md:w-[28px] md:h-[28px] w-[32px] h-[32px]"
        />
      </Link>
      <Link href="/" className="cursor-pointer dark:block hidden">
        <img
          src="/icons/ChitonLogoWhite.png"
          alt="logo"
          className="2xl:w-[36px] 2xl:h-[36px] lg:w-[32px] lg:h-[32px] md:w-[28px] md:h-[28px] w-[32px] h-[32px] "
        />
      </Link>
      <Link
        href="/login"
        className="bg-[var(--login-button)] 2xl:px-[3.2rem] 2xl:py-[1.2rem] lg:px-[2.8rem] lg:py-[1rem] px-[2.4rem] py-[1rem] 2xl:rounded-[1.2rem] lg:rounded-[0.8rem] rounded-[0.8rem] font-normal hover:bg-[var(--login-button-hover)] transition-all duration-300 ease-in-out"
      >
        <span className="2xl:text-[2rem] lg:text-[1.6rem] text-[1.4rem] font-medium">
          Login
        </span>
      </Link>
    </header>
  );
}

export default FooterHeader