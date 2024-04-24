import { IoMdTime } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { PiGlobeLight } from "react-icons/pi";

function AnnouncementBar () {

    const contactDetail= [
        { name: "Mon - Fri: 08:00 - 06:30", link: "/", button: false, icons: <IoMdTime /> },
        { name: "+91 (987) 6543 2100", link: "/", button: false, icons: <IoCallOutline /> },
        { name: "contact@pcac.com", link: "/", button: false, icons: <PiGlobeLight /> }
    ];
    return(
        <div className="lg:flex lg:justify-between h-10 lg:items-center px-[80px] text-xs hidden">
            <div>
                <h1 className="text-white text-[12px] font-bold">Property Consultant Association Chandigarh -<span className="font-normal text-gray-300 ml-2">For all your property requirements</span></h1>
            </div>
            <div className="flex flex-row  text-white items-center text-sm">
            {contactDetail.map((item, index) => (
                <div key={index} className="ml-8 flex gap-2 items-center">
                    <div>
                        {item.icons}
                    </div>
                    <span className="text-[12px]">{item.name}</span>
                </div>
            )

            )}
                
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default AnnouncementBar;