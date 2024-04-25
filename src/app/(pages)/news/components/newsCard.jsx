import Card1 from "../../../assets/images/card1.jpeg";
import Card2 from "../../../assets/images/card2.jpeg";
import Card3 from "../../../assets/images/card3.jpeg";
import Image from "next/image";

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
  return blogdata.map((data) => (
    <div className="lg:flex md:flex block lg:m-[80px] lg:p-0 p-4 m-0 gap-10 bg-white hover:shadow hover:border-0 border">
      <div className="relative flex flex-1 top-0 text-center justify-end ">
        <Image
          src={data.image}
          width={700}
          height={300}
          alt="card1.png"
        ></Image>
        <div className="text-white absolute right-0 bg-red-600 h-20 w-20 flex flex-col justify-center items-center">
          <div>{data.day}</div>
          <div>{data.month}</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 justify-center lg:p-4 p-0">
        <div>
          <h1 className="lg:text-2xl text-xl font-semibold">{data.title}</h1>
        </div>
        <div className="text-black flex">Category : 
          <p className="text-gray-600 "> {data.category}</p>
        </div>
        <div className="text-gray-600">{data.desc}</div>
      </div>
    </div>
  ));
}

export default NewsCard;
