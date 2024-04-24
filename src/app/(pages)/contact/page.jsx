import BreadCamps from "../components/breadCamp";
import Property from "../components/property";
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