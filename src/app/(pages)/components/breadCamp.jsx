import aboutbg from "../../assets/images/aboutbg.png";

function BreadCamps(props) {
  return (
    <div
      className="flex flex-col text-center text-white lg:py-28 py-8"
      style={{ backgroundImage: `url(${aboutbg.src})` }}
    >
      <h1 className="lg:text-[55px] text-2xl font-semibold">{props.title}</h1>
      <p className="lg:text-[22px] text-lg font-semibold">{props.subtitle}</p>
    </div>
  );
}

export default BreadCamps;
