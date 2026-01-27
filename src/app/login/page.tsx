import React from "react";
import Button from "@/shared/components/Button";
import Link from "next/link";
import LoginComponent from "@/features/login/components/LoginComponent";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen 2xl:px-[16rem] lg:px-[12rem] md:px-[3.2rem] px-[1.6rem]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="2xl:text-[6.4rem] lg:text-[4.8rem] md:text-[3.2rem] text-[3.6rem] font-medium mr-auto">
          Log in
        </h1>
        <LoginComponent />

        <span className="2xl:text-[1.4rem] text-[1.2rem] text-normal lg:mt-[2rem] mt-[1.6rem]">
          New to Chiton?
          <Link href="/signup" className="text-[var(--color-primary-color)]">
            Sign up
          </Link>
        </span>

        <Link
          href="/login/find-password"
          className="text-[#9B9B9B] 2xl:text-[1.4rem] text-[1.2rem] text-normal 2xl:mt-[2.4rem] lg:mt-[2rem] mt-[1.6rem] hover:text-[var(--color-foreground)] duration-300 ease-in-out"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
