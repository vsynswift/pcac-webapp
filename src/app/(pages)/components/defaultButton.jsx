"use client";

import { Button } from "flowbite-react";
import React from "react";

function DefaultButton(props,classname) {
  return ( 
    <div >
      <Button size="sm" className={`${classname} enabled:hover:bg-primaryColor bg-[#0057ffe8] focus:ring-0 px-4`}>
        <span className="rounded-sm">{props.title}</span>
      </Button>
    </div>
  );
}

export default DefaultButton;
