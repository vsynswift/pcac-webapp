"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "News",href: "/news" },
  { name: "About Us",  href: "/about" },
  { name: "Gallery",href: "/gallery" },
  { name: "Contact Us",href: "/contact" },

];

function NavList({ }) {
  const [activeIndex, setActiveIndex] = useState(" ");
  const pathname = usePathname();

  useEffect (() => {
    setActiveIndex(pathname);
  },[pathname] );

  return (
    <ul className="mt-2 mb-4 flex lg:flex-row flex-col gap-2 lg:mb-0 lg:mt-0 items-start lg:items-center lg:gap-8 group ">
      {menuItems.map((item, index) => (
        <div key={index} className="justify-center flex flex-col items-center">
          <Link
            variant="small"
            color={activeIndex === item.href ? "blue" : "gray"} 
            className={`pt-1 px-2 text-[15px] ${
              activeIndex === item.href ? "font-semibold" : ""
            }`}
            href={item.href}>
            {item.name}
          </Link>
          <div
            className={`hidden lg:block rounded-full w-1 h-1 ${activeIndex === item.href ? "bg-primaryColor" : ""
            }`}
          ></div>
        </div>
      ))}
    </ul>
  );
}

export default NavList;
