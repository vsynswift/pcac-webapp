import Mobileimage from "../../assets/images/mobile.png";
import Image from "next/image";
import hero4 from "../../assets/images/hero4.png";
import hero5 from "../../assets/images/hero5.png";

function Property() {
  return (
    <div className="bg-primaryColor border rounded-lg lg:rounded-[60px] lg:m-[80px] relative lg:flex lg:flex-row justify-between pt-4 mx-4 px-4 lg:p-[80px]">
      <div className="flex flex-1 flex-col gap-2">
        <h1 className="lg:text-5xl text-2xl text-white lg:leading-none">
          Get your property
          <br />
          <span className="">
            with <b>PCAC.</b>
          </span>
        </h1>
        <p className="lg:text-lg text-sm text-white">
          If you’re new to Genie or looking to supercharge your current will
          help you learn more about the and its features.
        </p>
        <div>
          <h6 className="text-white pt-3">Download App:</h6>
        </div>
        <div className="flex gap-4">
          <a href="#">
            <Image src={hero4} className="h-12 w-40" alt="hero4" />
          </a>
          <a href="#">
            <Image src={hero5} className="h-12 w-40" alt="hero5" />
          </a>
        </div>
      </div>

      <div className="flex flex-1 justify-end">
        <div className="lg:absolute right-[80px] bottom-[0px] block pt-10 lg:pt-0">
          <Image src={Mobileimage} />
        </div>
      </div>
    </div>
  );
}
export default Property;
