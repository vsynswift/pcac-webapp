import Property from "../(home)/components/property";
import BreadCamps from "../components/breadCamp";
import ContactInfo from "./components/contactInfo";
import GoogleMap from "./components/map";

function Contact() {
    return(
        <div>
            <BreadCamps  title={"Contact Us"}  subtitle = {"PCAC    :    Contact Us"}/>
            <ContactInfo /> 
            <GoogleMap />
            <Property />
        </div>
    )
}

export default Contact;