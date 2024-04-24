"use client";

import { Carousel } from "flowbite-react";
import Testimonialpic from "../../assets/images/testi.png";
import Testimonialprofile from "../../assets/images/testimonialprofile.png";
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
    <div className="lg:h-[800px] h-[500px] text-center flex flex-col lg:w-[1000px] items-center m-auto justify-center p-4 pt-10 lg:p-[80px]">
      <div>
        <p className="text-lg">What People Says</p>
        <h1 className="lg:text-5xl lg:leading-none font-semibold text-2xl">Trusted by peoples around</h1>
        <span className="text-secondaryTextColor font-semibold text-2xl lg:text-5xl">the tricity.</span>
      </div>
      <Carousel 
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        {users.map((user) => (
          <div className="flex flex-col items-center text-center justify-center ">
            <Image className="lg:w-16 w-10 h-10 lg:h-12" src={Testimonialpic} />
            <p className=" py-4 font-semibold text-xl"> {user.content} </p>
            <Image className="w-20 h-20" src={Testimonialprofile} />
            <h1 className="font-semibold text-xl">{user.name}</h1>
            <p className="text-gray-600">{user.position}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
