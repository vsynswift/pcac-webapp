"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import LoginInput from "../../../(pages)/components/input/loginInput";
import DefaultButton from "../../../(pages)/components/defaultButton";
import Link from "next/link";

function Setnewpassword() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        className="hover:bg-primaryColor bg-primaryColor focus:shadow-none focus:ring-0 dark:focus:ring-none group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent text-white focus:bg-primaryColor enabled:hover:bg-PrimaryColor dark:bg-primaryColor dark:focus:ring-0 dark:enabled:hover:bg-PrimaryColor rounded-lg "
        onClick={() => setOpenModal(true)}
      >
        Send
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="border-0"></Modal.Header>
        <Modal.Body className="px-16 pb-16">
          <div className="space-y-6">
            <h1 className="text-[40px]">Set New Password</h1>
            <p>
              Your new password must be different to previously used passwords.
            </p>
            <LoginInput
              classnames="focus:ring-0 focus:outline-none border-b h-10"
              placeholder="New Password"
            />
            <LoginInput
              classnames="focus:ring-0 focus:outline-none border-b h-10"
              placeholder="Confirm New Password"
            />
          </div>
          <div className="flex flex-row pt-4 items-center justify-between">
            {/* <DefaultButton title="Reset Password" href="#" /> */}
            <Button
              className="hover:bg-primaryColor bg-primaryColor focus:shadow-none focus:ring-0 dark:focus:ring-none group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent text-white focus:bg-primaryColor enabled:hover:bg-PrimaryColor dark:bg-primaryColor dark:focus:ring-0 dark:enabled:hover:bg-PrimaryColor rounded-lg "
              onClick={() => setOpenModal(false)}
            >
              Reset Password
            </Button>
            {/* <p>Didn’t receive the instruction? <Link href='#' className="text-primaryColor">Resend Now</Link></p> */}
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
export default Setnewpassword;
