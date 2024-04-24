// import Link from "next/link";
import DefaultButton from "../../components/defaultButton";
import DefaultCard from "../../components/defaultCard";

function Joinus() {
  return (
    <div className="lg:-mt-[80px] mt-0 ">
      <div className="lg:flex lg:flex-row justify-between block lg:pt-[80px] lg:px-[80px] pb-8 p-4 items-end">
        <div className="lg:text-5xl  text-2xl font-semibold">
          <h1>Would you like</h1>
          <h2 className="text-secondaryTextColor">to join us for?</h2>
        </div>
        <div className="py-4 lg:py-0">
            <DefaultButton className="bg-primaryColor" title={"contact Us"}></DefaultButton>
        </div>
      </div>
      <div className="">
        <DefaultCard />
      </div>
    </div>
  );
}
export default Joinus;
