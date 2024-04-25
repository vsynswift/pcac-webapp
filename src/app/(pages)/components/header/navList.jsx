"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us",  href: "about" },
  { name: "Contact Us",href: "contact" },
  { name: "News",href: "news" },
];

function NavList() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="mt-2 mb-4 flex lg:flex-row flex-col gap-2 lg:mb-0 lg:mt-0 items-start lg:items-center lg:gap-8 group ">
      {menuItems.map((item, index) => (
        <div key={index} className="justify-center flex flex-col items-center">
          <Link
            variant="small"
            color={activeIndex === index ? "blue" : "gray"} 
            className={`pt-1 px-2 text-[15px] ${
              activeIndex === index ? "font-semibold" : ""
            }`}
            href={item.href}
            onClick={() => handleClick(index)} 
          >
            {item.name}
          </Link>
          <div
            className={`hidden lg:block rounded-full w-1 h-1 ${
              activeIndex === index ? "bg-primaryColor" : ""
            }`}
          ></div>
        </div>
      ))}
    </ul>
  );
}

export default NavList;
