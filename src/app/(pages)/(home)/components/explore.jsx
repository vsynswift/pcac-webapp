import DefaultButton from "../../components/defaultButton";
import Explore1 from "../../../assets/images/explore1.png";
import Explore2 from "../../../assets/images/explore2.png";

function Explore() {
  return (
    <div className="lg:-mt-[80px] mt-0 ">
      <div className="lg:flex lg:flex-row justify-between block lg:pt-[-80px] lg:p-[80px] p-4 items-end">
        <div className="lg:text-5xl lg:leading-none text-2xl font-semibold">
          <h1>Explore Our</h1>
          <h2 className="text-gray-400">PCAC Playbook</h2>
        </div>
        <div className="py-4 lg:py-0">
          <DefaultButton
            className="bg-primaryColor"
            title={"View All"}
          ></DefaultButton>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 block gap-10 p-4 lg:px-[80px]">
        <div className="w-full">
          <img src={Explore1.src} className="w-full h-96" />
          <div className="text-lg py-4 pr-[50px]">
            <h2 className="text-[28px] ">01</h2>
            <h1 className="font-semibold py-4">Pioneer In Everything</h1>
            <p>
              We’re obsessed with creating a delightful user experience for you
              and your team every step of the way-and it shows.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 block w-full ">
          <img src={Explore2.src} className="w-full h-96" />
          <div className="lg:flex lg:flex-row block">
            <div className="text-lg py-4 pr-[50px]">
              <h2 className="text-[28px] ">01</h2>
              <h1 className="font-semibold py-4">Pioneer In Everything</h1>
              <p>
                We’re obsessed with creating a delightful user experience for
                you and your team every step of the way-and it shows.
              </p>
            </div>
            <div className="text-lg py-4 pr-[50px]">
              <h2 className="text-[28px] ">01</h2>
              <h1 className="font-semibold py-4 ">Pioneer In Everything</h1>
              <p>
                We’re obsessed with creating a delightful user experience for
                you and your team every step of the way-and it shows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Explore;
