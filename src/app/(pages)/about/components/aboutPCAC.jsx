import about11 from "../../../assets/images/about11.png";
import about12 from "../../../assets/images/about12.png";
import about13 from "../../../assets/images/about13.png";
import about14 from "../../../assets/images/about14.jpeg";
import about15 from "../../../assets/images/about15.jpeg";
import cardimg from "../../../assets/images/cardimg.png";
import Image from "next/image";
import { Carousel } from "flowbite-react";

function AboutPCAC() {
  return (
    <div className="bg-cover relative container mx-auto">
      <div className="lg:flex gap-8 block justify-between py-[20px] lg:py-[40px] items-center">
        <div className="lg:w-[500px] w-full">
          <div className="hidden lg:block">
            <div className="lg:flex block">
              <Image className="z-20 py-10" src={about11} alt="" />
              <Image
                className="hidden lg:block  absolute z-0 left-56"
                src={about12}
                alt=""
              />
            </div>
            <div className="relative hidden lg:block z-50">
              <Image className="z-50 " src={about13} alt="" />
            </div>
          </div>
          <div className="lg:hidden text-center items-center justify-center h-56 sm:h-80 xl:h-80 2xl:h-96">
            <Carousel className="rounded-0">
              <Image className="" src={about14} alt="" />
              <Image className="" src={about15} alt="" />
            </Carousel>
          </div>
        </div>
        <div className="lg:w-[750px] w-full">
          <div className=" flex flex-col gap-2 lg:gap-4 pt-4">
            <div>
              <h6 className="text-lg font-semibold">About PCAC</h6>
              <h1 className="lg:text-5xl tracking-normal font-semibold text-2xl ">
                We aim to Provide Expert
              </h1>
              <span className="font-semibold tracking-normal lg:text-5xl text-secondaryTextColor lg:leading-none">
                Advice and Quality Services.
              </span>
            </div>
            <div>
              <p className="lg:text-lg text-sm italic ">
                Ut enim ad minim veniam, quis nostrud nisi et exercitation the
                ullamco laboris containing Lorem nisi ut aliquip.
              </p>
            </div>

            <div>
              <p className="next-lg text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, sunt in culpa qui officia when an
                unknown. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged laboris aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="text-lg flex flex-row gap-4">
              <img className="" src={cardimg.src} />
              <div>
                <h1>kamal Gupta</h1>
                <h2 className="text-gray-300">President (PCAC)</h2>
              </div>
            </div>

            {/* <div className="px-0 ">
              <DefaultButton
                className="bg-primaryColor enabled:hover:bg-primaryColor"
                title={"Contact Us"}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPCAC;
