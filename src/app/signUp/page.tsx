import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Button, Checkbox, Input } from "@jamsr-ui/react";

const page = () => {
  return (
    <main className="flex items-center justify-center flex-col h-screen bg-[#090a0a]">
      <div className="w-[23.1rem] h-[35.4rem]  bg-[#111217]  rounded-xl border border-[#1b1c22] ">
        <div className="m-10">
          <h1 className="text-lg font-semibold flex justify-center  text-white ">
            Sign up
          </h1>
          <span className="flex justify-center text-[#808290] text-sm font-semibold mt-1 mb-7">
            Already have an Account?
            <Link
              href="/signIn"
              className="text-blue-600 hover:text-blue-500 ml-1.5"
            >
              Sign in
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

          <div className="flex items-center gap-2 mt-3">
            <span className="border-t border-[#373839]   w-full"></span>

            <span className="flex justify-center text-[#808290] text-[11px] font-semibold mt-1 mb-2">
              OR
            </span>
            <span className="border-t border-[#373839]  w-full"></span>
          </div>

         

          <div className="mb-5 mt-4">
            <Input label="Email" isFilled placeholder="email@email.com" className="" type="email" />
          </div>
          <div className="mb-5">
            <Input
            defaultValue="Yash@123"
              label="Password"
              type="password"
              placeholder="Enter your password"
              isSecuredText
            />
          </div>
          <div className="mb-4">
          <Input label= " Confirm Password" type="password" placeholder="Re-enter Password" isSecuredText />
          </div>
          <div>
          <Checkbox label="Remember me" />
          </div>

          <Button  className="w-full mt-4" color="primary">Sign In</Button>

        </div>
      </div>
    </main>
  );
};

export default page;
