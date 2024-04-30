// import Link from "next/link";
import DefaultButton from "../../components/defaultButton";
import DefaultCard from "../../components/defaultCard";

function Joinus() {
  return (
    <div className="container mx-auto">
      <div className="lg:flex lg:flex-row justify-between block py-8 items-end">
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
