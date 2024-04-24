import Property from "../components/property";
import Subscribe from "../components/subscribe";
import { Testimonials } from "../components/testimonials";
import BreadCamps from "../components/breadCamp";
import AboutPCAC from "./components/aboutPCAC";
import DownloadApp from "./components/downloadApp";
import TeamMember from "./components/teamMember";

function About() {
  return (
    <div>
      <BreadCamps title ={"About Us"} subtitle ={"PCAC    :    About Us"}/>
      <AboutPCAC />
      <DownloadApp />
      <TeamMember />
      <Subscribe />
      <Testimonials />
      <Property />
    </div>
  );
}
export default About;
