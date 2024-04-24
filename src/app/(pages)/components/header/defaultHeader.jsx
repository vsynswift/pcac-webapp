"use client";
import { Button, Navbar } from "flowbite-react";
import Link from "next/link"
import Logo from "../../../assets/images/logo.png";
import Image from "next/image";
import Navlist from "../navList";
import DefaultButton from "../defaultButton";
import AnnouncementBar from "../announcementBar";
import DrawerMenu from "./drawerMenu";

function DefaultHeader() {
  return (
    <div>
      <div className="hidden lg:block bg-primaryColor py-1">
        <AnnouncementBar />
      </div>
      <Navbar className="py-5">
        <div className="flex flex-1 justify-between sm:w-full">
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
            <Button className="text-black font-semibold bg-gray-100 enabled:hover:bg-gray-200 border-1 border-gray-200 focus:ring-0">Request An Account</Button>
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
