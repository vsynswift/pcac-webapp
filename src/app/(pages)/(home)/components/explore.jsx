import DefaultButton from "../../components/defaultButton";
import Explore1 from "../../../assets/images/explore1.png";
import Explore2 from "../../../assets/images/explore2.png";

function Explore() {
  return (
    <div className="container mx-auto">
      <div className="lg:flex lg:flex-row justify-between block items-end py-8">
        <div className="lg:text-5xl text-2xl font-semibold">
          <h1>Explore Our</h1>
          <h2 className="text-secondaryTextColor">PCAC Playbook</h2>
        </div>
        <div className="py-4 lg:py-0">
          <DefaultButton
            className="bg-primaryColor"
            title={"View All"}
          ></DefaultButton>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 block gap-10 ">
        <div className="w-full">
          <img src={Explore1.src} className="w-full lg:h-96 h-80" />
          <div className="text-lg py-4 pr-[50px]">
            <h2 className="text-[28px] ">01</h2>
            <h1 className="font-semibold text-[18px]  py-4">Pioneer In Everything</h1>
            <p className="text-gray-600">
              We’re obsessed with creating a delightful user experience for you
              and your team every step of the way-and it shows.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 block w-full ">
          <img src={Explore2.src} className="w-full lg:h-96 h-56" />
          <div className="lg:flex lg:flex-row block">
            <div className="text-lg py-4 pr-[50px]">
              <h2 className="text-[28px] ">01</h2>
              <h1 className="font-semibold text-[18px] py-4">Pioneer In Everything</h1>
              <p className="text-gray-600">
                We’re obsessed with creating a delightful user experience for
                you and your team every step of the way-and it shows.
              </p>
            </div>
            <div className="text-lg py-4 pr-[50px]">
              <h2 className="text-[28px] ">01</h2>
              <h1 className="font-semibold text-[18px] py-4 ">Pioneer In Everything</h1>
              <p className="text-gray-600">
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
