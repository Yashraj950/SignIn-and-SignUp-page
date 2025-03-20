import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { Button, Checkbox, Input } from "@jamsr-ui/react";
import { FcInfo } from "react-icons/fc";

const page = () => {
  return (
    <main className="flex items-center justify-center flex-col h-screen bg-[#090a0a]">
      <div className="w-[24.4rem] h-[35.6rem]  bg-[#111217]  rounded-xl border border-[#1b1c22] ">
        <div className="m-10">
          <h1 className="text-lg font-semibold flex justify-center  text-white ">
            Sign in
          </h1>
          <span className="flex justify-center text-[#808290] text-sm font-semibold mt-1 mb-7">
            Need an Account?
            <Link
              href="/signUp"
              className="text-blue-600 hover:text-blue-500 ml-1.5"
            >
              Sign up
            </Link>
          </span>

          <div className="grid grid-cols-2 text-white gap-2 ">
            <Link
              href=""
              className="flex text-sm items-center cursor-pointer border p-[5px] rounded-[5px]  border-[#363843] font-semibold bg-[#1f212a] justify-center"
            >
              <FcGoogle className="mr-1" size={15} />
              <span className="text-[#9a9cae] hover:text-[#b3b5c9] cursor-pointer">
                Use Google
              </span>
            </Link>
            <Link
              href=""
              className="flex text-sm items-center cursor-pointer border rounded-[5px] p-[5px]  border-[#363843] font-semibold bg-[#1f212a] justify-center"
            >
              <FaApple className="mr-1" size={15} />
              <span className="text-[#9a9cae] hover:text-[#b3b5c9] cursor-pointer">
                Use Apple
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <span className="border-t border-[#373839]  w-full"></span>

            <span className="flex justify-center text-[#808290] text-[11px]  font-semibold mt-1 mb-2">
              OR
            </span>
            <span className="border-t border-[#373839]   w-full"></span>
          </div>

          <div className="flex gap-2 mt-2 mb-5 items-center border border-[#133c6c] rounded-[5px] p-[10px] bg-[#172331]">
            <FcInfo size={30} />
            <span className="text-[15px]  text-[#9a9cae]">
              Use <span className="text-white font-semibold">demo@keenthemes.com </span>username and <span className="text-white font-semibold">demo1234</span> password.
            </span>
          </div>

          <div className="mb-5">
           
            <Input label="Email"  defaultValue="demo@keenthemes.com" placeholder="Enter your email" type="email" />
          </div>
          <div className="mb-5">
            <Input
            defaultValue="demo1234"
              label="Password"
              type="password"
              placeholder="Enter your password"
              isSecuredText
              labelHelperContent={
                <div className="ml-auto text-xs">Forgot Password?</div>
              }
            />
          </div>
          <div className="flex items-center gap-1.5 text-sm">
          <Checkbox label="I accept"  />
          <Link href="" className="text-blue-700 font-semibold hover:text-blue-600">Terms & Conditions</Link>
          </div>

         <Link href="/demo1"> <Button  className="w-full mt-4" color="primary">Sign Up</Button></Link>
          
        </div>
      </div>
    </main>
  );
};

export default page;
