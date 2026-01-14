import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import NewV3 from "@/components/sections/NewV3";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <NewV3 />
      <Testimonials />
    </div>
  );
}
