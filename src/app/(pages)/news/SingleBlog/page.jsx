import team from "../../../assets/images/team.jpg";
import cardimg from "../../../assets/images/cardimg.png";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "../components/newsCard";

function Singleblog() {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="container lg:mx-auto ">
        <h1 className="lg:text-5xl text-lg font-semibold">
          Company launches new software channel
        </h1>
      </div>

      <div className="flex gap-4 container lg:mx-auto ">
        <div className="text-white left-0 bg-primaryColor h-20 w-20 flex flex-col justify-center items-center">
          <div>02</div>
          <div>May</div>
        </div>
        <div className="text-lg flex items-center gap-2 h-20 justify-end border-y-2 w-[90%]">
          <img className="h-10 w-10" src={cardimg.src} />
          <div>
            <h2 className="text-gray-400">
              <span className="text-black">Posted By : </span> PCAC
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center container lg:mx-auto ">
        <Link href={"/"}>
          <img
            className="w-[100%] h-[100%]"
            href={"/"}
            src={team.src}
            alt="card1.png"
          ></img>
        </Link>
      </div>
      <div className="items-center text-left container lg:mx-auto ">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="container mx-auto">
      <div className="border py-4 ">
        <div className="text-center ">
          <h1 className="lg:text-5xl text-2xl font-semibold">
            Reuse
            <span className="text-primaryColor">.</span> Reduce
            <span className="text-primaryColor">.</span> Recycle
            <span className="text-primaryColor">.</span>
          </h1>
        </div>
        <div className="lg:grid grid-cols-3 py-4">
          <div className="items-center border-r p-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
          <div className="items-center border-r p-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
          <div className="items-center p-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
        </div>
      </div>
      </div>
        <div className="text-5xl container lg:mx-auto ">
            <h1>Relative Post</h1>
        </div>
      <div className="grid grid-cols-1">
      <NewsCard />
      </div>
    </div>
  );
}

export default Singleblog;
