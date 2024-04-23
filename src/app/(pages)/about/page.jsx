import Property from "../(home)/components/property";
import Subscribe from "../(home)/components/subscribe";
import { Testimonials } from "../(home)/components/testimonials";
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
