import Form from "./form";
import { PiMapPinLineBold } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { IoLogoYoutube } from "react-icons/io";

const data = [
  {
    icon: <PiMapPinLineBold />,
    heading: "Our Location",
    line1: "S.C.O-209, Sector 36-D,",
    line2: " Sector 36, Chandigarh, 160036",
  },
  {
    icon: <MdAttachEmail />,
    heading: "Quick Contact",
    line1: "Email: info@pcac.com",
    line2: "Support: admin@pcac.com",
  },
  {
    icon: <FiPhoneCall />,
    heading: "Call us Now",
    line1: "Office: +91 (987)-654-3210",
    line2: "Toll free: +91 (987)-654-3210",
  },
  {
    icon: <IoMdTime />,
    heading: "Opening Hours",
    line1: "From Monday - Friday,",
    line2: " 9:30 am to 6:30 pm",
  },
];

const socialIcons = [
  { icons: <BiLogoFacebook />, link: "" },
  { icons: <IoLogoYoutube />, link: "" },
  { icons: <LiaLinkedinIn />, link: "" },
  { icons: <BiLogoTwitter />, link: "" },
];

function ContactInfo() {
  return (
    <div className="lg:flex lg:pt-[80px] container mx-auto gap-12 items-center block">
      <div className="bg-primaryColor text-white px-9 py-4 w-full lg:w-2/6">
        {data.map((data) => (
          <div className="flex gap-4 py-4">
            <div className=" text-2xl pt-1">{data.icon}</div>
            <div className="">
              <div className="text-[24px]">{data.heading}</div>
              <div className="text-lg">{data.line1}</div>
              <div className="text-lg">{data.line2}</div>
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center text-white text-xl gap-5 rounded-lg lg:mt-3 ">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="rounded-full  p-2 border border-white hover:bg-primaryColor hover:text-white"
            >
              {item.icons}
            </a>
          ))}
        </div>
      </div>
      <div className="bg-white lg:w-4/6 w-full">
        <Form />
      </div>
    </div>
  );
}

export default ContactInfo;
