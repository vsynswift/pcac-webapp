
import Link from 'next/link';
import React from 'react'

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Link
      href={"/"}
        variant="small"
        color="blue-gray"
        className="p-1 "
      >
        Home
      </Link>
      <Link
        href= {"about"}
        variant="small"
        color="blue-gray"
        className="p-1 "
        
      >About
        {/* <a href="#" className="flex items-center text-white font-medium hover:text-primaryColor active:text-primaryColor">
          Account
        </a> */}
      </Link>
      <Link
      href={"contact"}
        variant="small"
        color="blue-gray"
        className="p-1 font-regular"
      >
       Contact US
      </Link>
      
    </ul>
  );
}

export default NavList
