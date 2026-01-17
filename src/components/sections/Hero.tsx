import HeroBg from "@/app/components/HeroBg";
import { Button } from "@/components/brumes/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="w-full relative">
        <div className="w-full absolute ">
          <HeroBg />
        </div>
        <div className="absolute pt-16.5 ">
          <div className="h-160 flex flex-col items-center justify-center gap-13.5">
            <div className="px-6 flex flex-col w-full">
              <Badge variant="outline">
                <span className="">Public Beta Access</span>
              </Badge>
              <p className="hero-title flex flex-col uppercase">
                <span>Power Your Devices</span>
                <span>with AI You Can Trust</span>
              </p>
              <p className="hero-subtitle flex flex-col opacity-60">
                <span>
                  // Deploy, execute and evolve your AI across decentralized
                  devices
                </span>
                <span>// for faster, smarter, real-world performance.</span>
              </p>
            </div>

            <div className="px-6 flex flex-col justify-start w-full">
              <Button variant="default">Join the waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
