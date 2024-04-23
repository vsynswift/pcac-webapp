import cardimg from "../../../assets/images/cardimg.png";
import Image from "next/image";
import m1 from "../../../assets/images/m1.png";
import m2 from "../../../assets/images/m2.png";
import m3 from "../../../assets/images/m3.png";
import m4 from "../../../assets/images/m4.png";
import m5 from "../../../assets/images/m5.png";

const members = [
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: m1.src,
    reverse: "false",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: m2.src,
    reverse: "true",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: m3.src,
    reverse: "false",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: m4.src,
    reverse: "true",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: m5.src,
    reverse: "false",
  },
];

function MemberCard({ className }) {
  return members.map((member) =>
    member.reverse === "true" ? (
      <div className="lg:flex block items-center group flex-row-reverse py-4">
        <div className="lg:flex block flex-1 flex-col gap-4 px-10 border-r-8 border-primaryColor">
          <div>
            <p>{member.content}</p>
          </div>
          <div className="text-lg flex flex-row gap-4 mb-4">
            <img className="" src={cardimg.src} />
            <div>
              <h1>kamal Gupta</h1>
              <h2 className="text-gray-300">President (PCAC)</h2>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={member.image}
            width={300}
            height={400}
            alt="memeber.png"
          ></Image>
        </div>
      </div>
    ) : (
      <div className="lg:flex items-center group py-4 ">
        <div className="lg:flex flex-1 flex-col gap-4 px-10 border-l-8 border-primaryColor">
          <div>
            <p>{member.content}</p>
          </div>
          <div className="text-lg flex flex-row gap-4 mb-4">
            <img className="" src={cardimg.src} />
            <div>
              <h1>kamal Gupta</h1>
              <h2 className="text-gray-300">President (PCAC)</h2>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={member.image}
            width={300}
            height={400}
            alt="memeber.png"
          ></Image>
        </div>
      </div>
    )
  );
}

export default MemberCard;
