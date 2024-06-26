"use client";


import { Button } from "flowbite-react";
import React from "react";
import Link from "next/link";

function DefaultButton({ title, classnames, size, Link, href }) {
  return (
    <div>
      <Button as={Link}
        href={href}
        size={size ? size : "lg"}
        className={`enabled:hover:bg-[#0057ffe8] bg-primaryColor focus:ring-0 py-1 px-4 text-[15px] font-semibold
      ${classnames} `}
      >
        <span className="rounded-sm">{title}</span>
      </Button>
    </div>
  );
}

export default DefaultButton;
