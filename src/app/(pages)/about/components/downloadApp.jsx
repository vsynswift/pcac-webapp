import about5 from "../../../assets/images/about5.png";
import  hero4  from "../../../assets/images/hero4.png";
import  hero5  from "../../../assets/images/hero5.png";
import Image from "next/image";

function DownloadApp() {
  return (
    <div
      className="lg:flex block text-center justify-between items-center text-white py-8 bg-cover bg-center container mx-auto"
      style={{ backgroundImage: `url(${about5.src})` }}
    >
      <div><h6 className="lg:text-5xl text-2xl font-semibold">Download PCAC App</h6></div>
      <div className="flex gap-4 flex-row justify-center">
        <a href="#">
        <Image src={hero4} className="lg:h-16 lg:w-48" alt="hero4" />
        </a>
        <a href="#">
          <Image src={hero5} className="lg:h-16 lg:w-48" alt="hero5" />
        </a>
      </div>
    </div>
  );
}

export default DownloadApp;
