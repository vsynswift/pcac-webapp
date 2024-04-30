import Card1 from "../../../assets/images/card1.jpeg";
import Card2 from "../../../assets/images/card2.jpeg";
import Card3 from "../../../assets/images/card3.jpeg";
import cardimg from "../../../assets/images/cardimg.png";
import Image from "next/image";
import Link from "next/link";

const blogdata = [
  {
    image: Card1,
    day: "02",
    month: "may",
    title: "Company launches new software channel",
    category: " History",
    desc: "Emerson acquires Aperture, a leading provider of data center management software. Emerson reported 140,700 employees worldwide that year.",
  },
  {
    image: Card2,
    day: "02",
    month: "may",
    title: "Company launches new software channel",
    category: " History",
    desc: "Emerson acquires Aperture, a leading provider of data center management software. Emerson reported 140,700 employees worldwide that year.",
  },
  {
    image: Card3,
    day: "02",
    month: "may",
    title: "Company launches new software channel",
    category: " History",
    desc: "Emerson acquires Aperture, a leading provider of data center management software. Emerson reported 140,700 employees worldwide that year.",
  },
];

function NewsCard() {
  return (
    <div className="grid lg:grid-cols-3 gap-10 container mx-auto">
      {blogdata.map((data) => (
        <div className="block lg:p-0 p-0 m-0 gap-10 bg-white hover:shadow hover:border-transparent border ">
          <div className="relative flex top-0 text-center justify-end">
            <Link href={"/news/singleBlog"}>
              <Image
                href={"/"}
                src={data.image}
                width={400}
                height={300}
                alt="card1.png"
              ></Image>
            </Link>
            <div className="text-white absolute left-0 bg-primaryColor h-20 w-20 flex flex-col justify-center items-center">
              <div>{data.day}</div>
              <div>{data.month}</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center p-4">
            <div>
              <Link href={"/news/singleBlog"}>
                <h1 className="lg:text-[18px] text-lg hover:text-primaryColor font-semibold">
                  {data.title}
                </h1>
              </Link>
            </div>
            {/* <div className="text-black flex">
              Category :<p className="text-gray-600 "> {data.category}</p>
            </div> */}
            <div className="text-gray-500 text-lg">{data.desc}</div>
            <div>
              <div className="">
                <div className="text-lg flex items-center gap-2 h-10 ">
                  <img className="h-7 w-7" src={cardimg.src} />
                  <div>
                    <h2 className="text-gray-400"><span className="text-black">Posted By : </span> PCAC </h2>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsCard;
