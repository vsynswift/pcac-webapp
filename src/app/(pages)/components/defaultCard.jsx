import Link from "next/link";
import { GoHome } from "react-icons/go";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

function DefaultCard() {
  const carddata = [
    {
      icon: <GoHome className="w-10 h-10" />,
      heading: "Buy Property",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
      href: "/",
    },
    {
      icon: <FaHandshakeAngle className="w-10 h-10" />,
      heading: "Sell Property",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
      href: "/",
    },
    {
      icon: <IoKeyOutline className="w-10 h-10" />,
      heading: "Rent Property",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
      href: "/",
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-20 gap-8 text-center items-center">
      {carddata.map((data) => (
        <div className="bg-white border-collapse group border-transparent rounded-none cursor-pointer shadow-xl group">
          <div className="flex justify-center">
            <div className="flex items-center justify-center h-2 opacity-0 w-40 bg-primaryColor group-hover:opacity-100 rounded-b-xl " />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 lg:py-12 lg:p-4 bg-white m-4 pb-4">
            <div className="group-hover:bg-primaryColor group-hover:text-white flex justify-center border-2 rounded-full border-primaryColor h-16 w-16 items-center text-primaryColor">
              {data.icon}
            </div>
            <h5 className="text-[18px] font-bold tracking-tight text-black ">
              {data.heading}
            </h5>
            <p className="font-normal text:lg text-gray-600 dark:text-gray-400">
              {data.paragraph}
            </p>
            <Link
              className="flex group-hover:text-primaryColor text-[#0057ffe3] text-center justify-center "
              href={data.href}
            >
              {data.link}
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DefaultCard;
