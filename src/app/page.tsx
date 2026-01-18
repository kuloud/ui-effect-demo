import Hero from "@/components/sections/Hero";

import "./style.css";
import Blackboard from "@/components/sections/Blackboard";
import Intro from "@/components/sections/Intro";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto max-w-360 px-20">
      <Hero />
      <div className="flex flex-col gap-y-10 dashed-border-4-4">
        <Blackboard />
        <Intro />
        <Features />
        <CTA />
      </div>
    </div>
  );
}
