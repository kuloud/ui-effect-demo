import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import NewV3 from "@/components/sections/NewV3";

import "./style.css";

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto max-w-360 px-20">
      <Hero />
      {/* <Features />
      <NewV3 />
      <Testimonials /> */}
    </div>
  );
}
