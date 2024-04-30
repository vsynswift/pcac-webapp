"use client";

import { Carousel } from "flowbite-react";
import hero1 from "../../../assets/images/hero1.png";
import hero2 from "../../../assets/images/hero2.png";
import hero3 from "../../../assets/images/hero3.png";
import hero4 from "../../../assets/images/hero4.png";
import hero5 from "../../../assets/images/hero5.png";
import map1 from "../../../assets/images/map1.png";
import Image from "next/image";
import DefaultButton from "../../components/defaultButton";

function Hero() {
  return (
    <div className="bg-cover container mx-auto">
      <img
        className=" absolute left-2/4 hidden lg:block"
        src={map1.src}
      />

      <div className="lg:grid lg:grid-cols-2 block lg:gap-12 justify-between py-[20px] lg:py-[40px] items-center">
        <div className="relative w-full">
          <div className="hidden lg:flex justify-center lg:justify-start">
            <Image className="" src={hero1} alt="" />
          </div>
          <div className="lg:hidden h-56 sm:h-80 xl:h-80 2xl:h-96">
            <Carousel >
            <Image
              className=""
              src={hero1}
              alt=""
            />
            <Image
              className=""
              src={hero2}
              alt=""
            />
              <Image
              className=""
              src={hero3}
              alt=""
            />
            </Carousel>
          </div>
          <div className="hidden lg:block">
            <Image
              className="lg:absolute bottom-[-140px] right-40"
              src={hero3}
              alt=""
            />
            <Image
              className="lg:absolute top-[65px] right-[20px]"
              src={hero2}
              alt=""
            />
          </div>
        </div>

        <div className="relative">
          <div className=" flex flex-col gap-2 lg:gap-4 pt-4">
            <h1 className="lg:text-5xl text-2xl lg:leading-none">
              Find your dream home{" "}
            </h1>
            <span className="font-bold lg:text-5xl lg:leading-none">
              with PCAC.
            </span>
            <div>
            <p className="text-lg text-gray-600">
              If you’re new to Genie or looking to supercharge your current
              stack,
            </p>
            <span className="text-lg text-gray-600"> this section will help learn more about the platform
              features.</span>
            </div>
            <div className="px-0 ">
              <DefaultButton
                className="bg-primaryColor enabled:hover:bg-primaryColor justify-start lg:justify-center"
                title={"Contact Us"}
              />
            </div>
          </div>
          <div className="lg:absolute lg:right-0 lg:top-[25rem] block pt-4">
            <h6 className="text-primaryColor font-semibold pb-1">Download App:</h6>
            <div className="flex gap-4 flex-row ">
              <a href="#">
                <Image src={hero4} className="h-15" alt="hero4" />
              </a>
              <a href="#">
                <Image src={hero5} className="h-15" alt="hero5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
