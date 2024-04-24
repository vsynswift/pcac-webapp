import DefaultButton from "../../components/defaultButton";
import Bgsubscribe from "../../../assets/images/bgsubscribe.png";
import DefaultInput from "../../components/defaultInput";
function Subscribe() {
  return (
    <div className="text-center flex justify-center items-center p-4 lg:p-[80px]">
      <img
        className="absolute lg:h-[450px] h-[300px] w-full left-0"
        src={Bgsubscribe.src}
      />

      <div className="relative flex flex-col text-center items-center p-4 lg:py-[50px] justify-center h-full w-full backdrop-blur-sm">
        <div className="relative flex flex-col text-center items-center gap-4">
          <h1 className="lg:text-5xl text-2xl text-white ">Subscribe</h1>
          <p className="text-lg text-white">
            Subscribe our newsletter too stay updated every moment.
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-center gap-4">
            <DefaultInput
              placeholder="Enter a valid email address..."
              name="email"
              id="email"
              type="email"
              classnames="lg:w-[300px] w-full justify-center block border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
            />
            <DefaultButton title={"Submit"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
