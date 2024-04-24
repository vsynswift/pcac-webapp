import { Card } from "flowbite-react";
import about1 from "../../../assets/images/about1.png";
import about2 from "../../../assets/images/about2.png";
import Link from "next/link";


function About() {
  return (
    <div className="lg:pt-[100px] lg:px-[80px] pt-20 px-4 relative lg:mt-[100px]">
      <div>
        <h6 className="text-lg font-semibold">ABOUT US</h6>
      </div>
      <div>
        <h1 className="lg:text-5xl lg:font-semibold text-2xl">Setting Up Standard For</h1>
        <span className="lg:text-5xl lg:font-semibold text-secondaryTextColor text-2xl">
          Tricity Properties
        </span>
      </div>
      <div className="mt-4">
        <div className="bg-cover">
          <img className=" lg:absolute " src={about1.src} />
        </div>
      </div>
      <div className=" flex flex-row relative lg:justify-end justify-center">
        <Card className="lg:max-w-80 lg:my-[120px] my-[10px] lg:-mr-[10rem] mr-0 z-20 rounded-none">
          <h5 className="text-lg font-semibold tracking-tight text-black dark:text-white">
            Latest News
          </h5>
          <p className="font-normal text:lg text-gray-600 dark:text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <Link className="flex" href={"/"}>
            Read More
            <svg
              className="-mr-1 ml-2 h-4 w-4 -rotate-45"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Card>
        <div className=" hidden lg:block ">
          <img className=" " src={about2.src} />
        </div>
      </div>
    </div>
  );
}

export default About;
