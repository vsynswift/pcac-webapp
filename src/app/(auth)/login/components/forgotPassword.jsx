"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import LoginInput from "../../../(pages)/components/input/loginInput";
import Setnewpassword from "./setNewPassword"
import Link from "next/link";

function Forgotpassword() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        className="hover:bg-transparent focus:shadow-none focus:ring-0 dark:focus:ring-none group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent text-white focus:bg-transparent enabled:hover:bg-transparent dark:bg-transparent dark:focus:ring-0 dark:enabled:hover:bg-transparent rounded-lg bg-transparents"
        onClick={() => setOpenModal(true)}
      >
        Forgot Password?
      </Button>
      <Modal className="backdrop-blur" show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="border-0"></Modal.Header>
        <Modal.Body className="px-16 pb-16">
          <div className="space-y-6">
            <h1 className="text-[40px]">Forgot Password?</h1>
            <p>
              Please enter your registered email address, and we will email you
              the instructions to reset your password.
            </p>
            <LoginInput classnames="focus:ring-0 focus:outline-none border-b h-10" placeholder="Enter your email address" />
          </div>
          <div className="flex flex-row pt-4 items-center justify-between">
          <Button
              className="hover:bg-primaryColor bg-primaryColor focus:shadow-none focus:ring-0 dark:focus:ring-none group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent text-white focus:bg-primaryColor enabled:hover:bg-PrimaryColor dark:bg-primaryColor dark:focus:ring-0 dark:enabled:hover:bg-PrimaryColor rounded-lg "
              onClick={() => setOpenModal(false)}
            >
              Send
            </Button>
            <p>Didn’t receive the instruction? <Link href='#' className="text-primaryColor">Resend Now</Link></p>
          </div>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default Forgotpassword;
