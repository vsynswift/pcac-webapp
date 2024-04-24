import about5 from "../../../assets/images/about5.png";
import  hero4  from "../../../assets/images/hero4.png";
import  hero5  from "../../../assets/images/hero5.png";
import Image from "next/image";

function DownloadApp() {
  return (
    <div
      className="lg:flex block text-center justify-between items-center text-white py-4 bg-cover bg-center lg:m-[80px] m-4 p-4 lg:px-[80px]"
      style={{ backgroundImage: `url(${about5.src})` }}
    >
      <div><h6 className="lg:text-5xl text-2xl font-semibold">Download PCAC App</h6></div>
      <div className="flex gap-4 flex-row justify-center">
        <a href="#">
        <Image src={hero4} className="h-19 w-60" alt="hero4" />
        </a>
        <a href="#">
          <Image src={hero5} className="h-19 w-60" alt="hero5" />
        </a>
      </div>
    </div>
  );
}

export default DownloadApp;
