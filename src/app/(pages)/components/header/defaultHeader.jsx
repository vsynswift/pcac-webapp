"use client";
import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import Logo from "../../../assets/images/logo.png";
import Image from "next/image";
import Navlist from "./navList";
import DefaultButton from "../defaultButton";
import AnnouncementBar from "./announcementBar";
import DrawerMenu from "./drawerMenu";

function DefaultHeader() {
  return (
    <div>
      <div className="hidden lg:block bg-primaryColor py-1">
        <AnnouncementBar />
      </div>
      <Navbar className="container mx-auto p-0 lg:px-0 py-2">
        <div className="flex flex-1 justify-between sm:w-full ">
          <div>
            <Link href="/">
              <Image src={Logo} className="" alt="PCAC" />
            </Link>
          </div>
          <div className="lg:hidden ">
            <DrawerMenu />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="hidden 2xl:block xl:block lg:block ">
            <Navlist />
          </div>
          <div className="lg:flex md:order-2 hidden ml-2 ">
            <DefaultButton
              classnames="!bg-gray-100 hover:bg-gray-300 border border-gray-200 text-black"
              title={"Request for Call"}
            />
          </div>
          <div className="lg:flex md:order-2 hidden ml-2">
            <DefaultButton className="" title={"Login"} />
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default DefaultHeader;
