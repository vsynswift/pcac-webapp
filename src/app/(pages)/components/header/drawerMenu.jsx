"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import NavList from "../navList";
import { CiMenuFries } from "react-icons/ci";

function DrawerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="items-center justify-center lg:hidden">
        <Button className="enabled:hover:bg-primaryColor bg-[#0057ffe8] focus:ring-0 hover:bg-primaryColor" onClick={() => setIsOpen(true)}><CiMenuFries /></Button>
      </div>
      <Drawer position="right"  open={isOpen} onClose={handleClose}>
        <Drawer.Header title="PCAC" />
        <Drawer.Items onClick={handleClose}>
          <NavList className="flex flex-col"/>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
export default DrawerMenu;