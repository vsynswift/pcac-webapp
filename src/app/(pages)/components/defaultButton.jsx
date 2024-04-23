"use client";

import { Button } from "flowbite-react";
import React from "react";

function DefaultButton(props) {
  return (
    <div className="enabled:hover:bg-primaryColor items-center justify-center flex text-center gap-x-1 text-sm font-bold border-collapse lg:inline-block rounded-lg shadow-none w-full">
      <Button size="sm" className={`${props.className} enabled:hover:bg-primaryColor bg-[#0057ffe8]`}>
        <span className="rounded-sm">{props.title}</span>
      </Button>
    </div>
  );
}

export default DefaultButton;
