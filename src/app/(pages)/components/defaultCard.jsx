import Link from "next/link";
import { GoHome } from "react-icons/go";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import Topimg from '../../assets/images/topborder.png'

function DefaultCard() {
  const carddata = [
    {
      icon: <GoHome />,
      heading: "Latest News",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
      href: "/",
    },
    {
      icon: <FaHandshakeAngle />,
      heading: "Latest News",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
      href: "/",
    },
    {
      icon: <IoKeyOutline />,
      heading: "Latest News",
      paragraph:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
      href: "/",
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-3 gap-14 lg:px-[80px] p-4 my-4 text-center items-center">
      {carddata.map((data) => (
        <div className="bg-white shadow border-collapse group border-transparent rounded-none cursor-pointer my-4 pb-4">
          <div className="flex items-center justify-center ">
            <img className="hidden group-hover:block" src = {Topimg.src} />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 lg:p-4 p-4 py-8 bg-white">
            <div className="group-hover:bg-primaryColor group-hover:text-white flex justify-center border rounded-full border-primaryColor h-10 w-10 items-center text-primaryColor">
              {data.icon}
            </div>
            <h5 className="text-lg font-bold tracking-tight text-black ">
              {data.heading}
            </h5>
            <p className="font-normal text:lg text-gray-500 dark:text-gray-400">
              {data.paragraph}
            </p>
            <Link
              className="flex text-primaryColor text-center justify-center "
              href={data.href}
            >
              {data.link}
              <svg
                className="-mr-1 ml-2 h-4 w-4 "
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default DefaultCard;
