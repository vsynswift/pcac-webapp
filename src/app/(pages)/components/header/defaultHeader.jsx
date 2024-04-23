"use client";
import { Navbar } from "flowbite-react";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import Navlist from "../navList";
import DefaultButton from "../defaultButton";
import AnnouncementBar from "../announcementBar";

function DefaultHeader() {
  return (
    <div>
      <div className="hidden lg:block bg-primaryColor py-1">
        <AnnouncementBar />
      </div>
      <Navbar className="py-5">
        <div>
          <Navbar.Brand href="/">
            <Image src={Logo} className="" alt="PCAC" />
          </Navbar.Brand>
        </div>
        <div className="flex flex-row items-center">
          <div className="hidden 2xl:block xl:block md:flex lg:block ">
            <Navlist />
          </div>
          <div className="lg:flex md:order-2 hidden ml-2">
            <DefaultButton className=" " title={"Request An Account"} />
          </div>
          <div className="lg:flex md:order-2 hidden ml-2">
            <DefaultButton className="" title={"Login"} />
          </div>
        </div>
      </Navbar>
      <DrawerMenu />
    </div>
  );
}

export default DefaultHeader;
