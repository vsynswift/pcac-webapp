import aboutbg from "../../assets/images/aboutbg.png"




function BreadCamps(props) {
    return(
        <div className="flex flex-col text-center text-white py-28" style={{backgroundImage: `url(${aboutbg.src})`,}}>
                <h1 className="text-[64px] font-semibold">{props.title}</h1>
                <p className="text-[24px] font-semibold">{props.subtitle}</p>
        </div>
      
    )
}

export default BreadCamps;