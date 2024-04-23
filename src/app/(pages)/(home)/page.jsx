"use client";
import About from "./components/aboutUs";
import Explore from "./components/explore";
import Faq from "./components/faq";
import Hero from "./components/hero";
import Joinus from "./components/joinus";
import Property from "./components/property";
import Subscribe from "./components/subscribe";
import { Testimonials } from "./components/testimonials";
import TheVideo from "./components/theVideo";
import Wedothis from "./components/wedothis";

function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Wedothis />
      <Joinus />
      <Explore />
      <TheVideo />
      <Faq />
      <Subscribe />
      <Testimonials />
      <Property />
    </div>
  );
}
export default Home;
