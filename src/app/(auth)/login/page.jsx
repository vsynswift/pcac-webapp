import Loginbg from "../../assets/images/loginbg.png";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import Pcaclogo2 from "../../assets/images/pcaclogo2.png";
import Loginform from "./components/loginForm"

function Login() {
  return (
    <div className="container mx-auto h-screen">
      <div className="absolute top-0 left-0">
        <img className="h-screen" src={Loginbg.src} />
      </div>
      <div className="flex justify-between h-screen gap-20">
        <div className="relative flex flex-col w-3/5 gap-48 lg:pr-44 pr-0 z-50">
          <div className="lg:pt-32 pt-0 ">
            <Link href="/">
              <Image src={Logo} className="" alt="PCAC"/>
            </Link>
          </div>
          <div className="">
            <h1 className="text-5xl font-semibold">Welcome to PCAC</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a distribution.
            </p>
          </div>
        </div>
        <div className="flex w-2/5 flex-col bg-primaryColor absolute right-0  h-screen items-top">
          <div className="">
            <img className="" src={Pcaclogo2.src} />
          </div>
          <div className="flex flex-col items-center justify-center">
          <h1 className="text-[40px] text-white">Or login to your account</h1>
            <Loginform />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
