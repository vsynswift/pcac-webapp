"use client";

import Link from "next/link";
import Forgotpassword from './forgotPassword'
import LoginInput from "../../../(pages)/components/input/loginInput";

function Loginform() {
  return (
    <div className="flex flex-col px-16 w-full gap-4">
      <div>
        <LoginInput classnames="focus:ring-0 focus:outline-none border-b border-white  text-white py-2  bg-transparent " placeholder="Enter Email" />
        <LoginInput classnames="focus:ring-0 focus:outline-none border-b border-white  text-white py-2  bg-transparent " placeholder="Password" />
      </div>
      <div className="flex justify-end">
          <Forgotpassword />
      </div>
      <div>
        <Link href="/">
          <button className="bg-white text-primaryColor px-10 py-2 rounded-md">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Loginform;
