import map2 from "../../../assets/images/map2.png";
import cardimg from "../../../assets/images/cardimg.png";
import Link from "next/link";
function Wedothis() {
  return (
    <div className="lg:-mt-[80px] mt-0">
      <img className="hidden lg:block absolute" src={map2.src} />
      <div className="lg:grid lg:grid-cols-2 lg:gap-[100px] block lg:pt-[-80px] lg:p-[80px] p-4">
        <div className="lg:text-5xl text-2xl lg:pt-[80px] pt-4 font-semibold">
          <h1>We Do This</h1>
          <h2 className="text-secondaryTextColor">For A Single Cause</h2>
        </div>
        <div className="flex flex-col lg:gap-4 lg:pl-8 text-gray-600 lg:pt-[80px] pt-4">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using!
          </p>
          <p>
            Content here, content here', making it look like readable English.
            Many desktop publishing packages and web pageike.{" "}
          </p>
          <p>
            Many desktop publishing packages and web page editors now use ipsum'
            will uncover many web sites still in their infancy.
          </p>
          <Link className="flex" href={"/"}>
            Read Our Manifesto
            <svg
              className="-mr-1 ml-2 h-4 w-4 -rotate-45"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <div className="text-lg flex flex-row gap-4">
            <img className="" src={cardimg.src} />
            <div>
              <h1>kamal Gupta</h1>
              <h2 className="text-gray-300">President (PCAC)</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wedothis;
