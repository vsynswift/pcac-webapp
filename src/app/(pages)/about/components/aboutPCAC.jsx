import about11 from "../../../assets/images/about11.png";
import about12 from "../../../assets/images/about12.png";
import about13 from "../../../assets/images/about13.png";
import cardimg from "../../../assets/images/cardimg.png";
import Image from "next/image";


function AboutPCAC() {
  return (
    <div className="bg-cover">
      <div className="lg:flex gap-8 block justify-between px-[20px] py-[20px] lg:px-[80px] lg:py-[40px] items-center">
        <div className="lg:w-[500px] w-full">
          <div className="lg:flex block">
            <Image className="z-20 py-10" src={about11} alt="" />
            <Image className="hidden lg:block  absolute z-0 left-56" src={about12} alt="" />
          </div>
          <div className="relative hidden lg:block z-50">
            <Image className="z-50 " src={about13} alt="" />
          </div>
        </div>
        <div className="lg:w-[750px] w-full">
          <div className=" flex flex-col gap-2 lg:gap-4 pt-4">
            <h6 className="text-lg font-semibold">About PCAC</h6>
            <h1 className="lg:text-5xl tracking-normal font-semibold text-2xl lg:leading-none">
              We aim to Provide Expert
            </h1>
            <span className="font-semibold tracking-normal lg:text-5xl text-gray-400 lg:leading-none">
              Advice and Quality Services.
            </span>
            <p className="text-lg italic ">
              Ut enim ad minim veniam, quis nostrud nisi et exercitation the
              ullamco laboris containing Lorem nisi ut aliquip.
            </p>
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