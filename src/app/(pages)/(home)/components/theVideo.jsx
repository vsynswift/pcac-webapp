
import Bgvideoimage from "../../../assets/images/bgvideo.png";
import DefaultButton from "../../components/defaultButton";
import { FaPlay } from "react-icons/fa";

function TheVideo() {
  return (
    <div  style={{ background: 'linear-gradient(90deg, rgb(0, 0, 0 ) 10%, rgb(102 102 102) 100%)' }}
    className=" relative bg-cover lg:my-[100px] my-[50px]">
      <img
        className="absolute left-0 opacity-[0.35] h-full w-full"
        src={Bgvideoimage.src}
      />
      <div className="relative lg:p-[80px] p-4 lg:flex  justify-between">
        <div className=" flex flex-col lg:gap-16 gap-4 lg:w-2/5">
          <h1 className=" lg:text-5xl text-2xl text-white font-light">
            <span className="font-semibold">
              Watch the video <br />
            </span>
            to see how our team provide verified properties
          </h1>
          <p className="text-white">
            Still have any doubts? <a href="/" className="underline">Contact Us</a> and check for yourself.
          </p>
          <DefaultButton title={"Contact Us"} />
        </div>
        <div className="hidden lg:flex w-3/5 text-right lg:items-center lg:justify-center">
          {/* <img className="bg-primaryColor" src={Videoimage.src} /> */}
          <div className="p-2 rounded-full text-center justify-center hover:bg-gray-400">
            <div className="hover:border-8 hover:border-gray-300 p-8 rounded-full text-center justify-center bg-primaryColor">
              <FaPlay className="text-gray-300  h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheVideo;
