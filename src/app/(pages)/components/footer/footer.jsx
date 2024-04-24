import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoYoutube } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { MdLocalPhone } from "react-icons/md";
import { BiSolidPrinter } from "react-icons/bi";
import NavList from "../header/navList";
import Image from "next/image";
import Link from "next/link"
import Logo from "../../../assets/images/logo.png";

const contentDetails = [
  {
    name: "S.C.O-209, Sector 36-D, Sector 36, Chandigarh, 160036",
    icons: <PiMapPinFill />,
  },
  { name: "+91 (123) 456-7890", icons: <MdLocalPhone /> },
  { name: "+91 (123) 456-7890", icons: <BiSolidPrinter /> },
];

const socialIcons = [
  { icons: <BiLogoFacebook />, link: "" },
  { icons: <IoLogoYoutube />, link: "" },
  { icons: <LiaLinkedinIn />, link: "" },
  { icons: <BiLogoTwitter />, link: "" },
];

function Footer() {
  return (
    <div className="flex flex-col justify-center text-center p-2 ">
      <div className="flex flex-col gap-2 justify-center border-b w-full pb-4">
        <h1 className="lg:text-5xl text-2xl font-semibold">
          Buy
          <span className="text-primaryColor">.</span> Sell
          <span className="text-primaryColor">.</span> Rent
          <span className="text-primaryColor">.</span>
        </h1>
        <p>
          We’re a diverse and passionate team that takes ownership of your
          design and empower you to execute the roadmap.
          <br /> We stay light on our feet and truly enjoy delivering great
          work.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center lg:items-center text-black md:gap-4">
          {contentDetails.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 mb-3 md:mb-0 text-left md:text-center lg:text-right xl:text-center p-2 lg:p-5"
            >
              <div className="text-primaryColor border-solid">{item.icons}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center text-primaryColor text-xl gap-5 rounded-lg lg:mt-3 ">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="rounded-full bg-white p-2 border border-blue-700 hover:bg-primaryColor hover:text-white"
            >
              {item.icons}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:flex justify-between lg:px-[160px]  px-4 py-4">
        <div>
          <Link href="/">
            <Image src={Logo} />
          </Link>
        </div>
        <div>
          <NavList />
        </div>
        <div>
          <p className="text-sm lg:text-base lg:text-black text-gray-400">
            Copyright © 2024 • Synswift Infotech LLP.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
