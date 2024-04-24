"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "Home", active: true, href: "/" },
  { name: "About Us", active: false, href: "about" },
  { name: "Contact Us", active: false, href: "contact" },
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
            color={activeIndex === index ? "blue" : "gray"} // Change color based on activeIndex
            className={`pt-1 px-2 ${activeIndex === index ? 'font-semibold' : ''}`} // Add font-bold class conditionally
            href={item.href}
            onClick={() => handleClick(index)} // Handle click event
          >
            {item.name}
          </Link>
          <div className={`hidden lg:block rounded-full w-1 h-1 ${activeIndex === index ? 'bg-primaryColor' : ''}`}></div>
        </div>
      ))}
    </ul>
  );
}

export default NavList;
