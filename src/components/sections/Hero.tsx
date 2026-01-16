import HeroBg from "@/app/components/HeroBg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="w-full relative">
        <div className="w-full absolute ">
          <HeroBg />
        </div>
        <div className="absolute pt-52.25">
          <div></div>
        </div>
      </div>
    </section>
  );
}
