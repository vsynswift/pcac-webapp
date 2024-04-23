"use client";

import { Carousel } from "flowbite-react";
import Testimonialpic from "../../../assets/images/testi.png";
import Testimonialprofile from "../../../assets/images/testimonialprofile.png";
import Image from "next/image";

export function Testimonials() {
  const users = [
    {
      name: "Jordan Barrett",
      position: "MD, Jubliee Walk, Mohali",
      content:
        "“Through PCAC, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!”",
      image: "",
    },
    {
      name: "Jordan Barrett",
      position: "MD, Jubliee Walk, Mohali",
      content:
        "“Through PCAC, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!”",
      image: "",
    },
    {
      name: "Jordan Barrett",
      position: "MD, Jubliee Walk, Mohali",
      content:
        "“Through PCAC, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!”",
      image: "",
    },
  ];
  return (
    <div className="h-[600px] text-center flex flex-col lg:w-[900px] items-center m-auto justify-center p-4 py-10 lg:p-[80px]">
      <div>
        <p className="text-lg">What People Says</p>
        <h1 className="lg:text-5xl lg:leading-none font-semibold text-2xl">Trusted by peoples around</h1>
        <span className="text-gray-400  font-semibold text-2xl lg:text-5xl">the tricity.</span>
      </div>
      <Carousel
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        {users.map((user) => (
          <div className="flex flex-col items-center text-center justify-center   ">
            <Image className="lg:w-20 w-10 h-10 lg:h-20" src={Testimonialpic} />
            <p className=" py-4"> {user.content} </p>
            <Image className="w-10 h-10" src={Testimonialprofile} />
            <h1>{user.name}</h1>
            <p>{user.position}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
