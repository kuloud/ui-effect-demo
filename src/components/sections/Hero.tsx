import HeroBg from "@/app/components/HeroBg";
import { Button } from "@/components/brumes/button";
import DecryptedText from "@/components/DecryptedText";
import Ellipse from "@/components/Ellipse";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <div className="absolute top-0 right-0 left-0 -z-10">
          <HeroBg />
        </div>
        <div className="pt-16.5">
          <div className="flex h-160 flex-col items-center justify-center gap-13.5">
            <div className="flex w-full flex-col px-6">
              <Badge variant="outline">
                <div className="flex size-4 items-center justify-center">
                  <Ellipse className="size-1.5 bg-[#FF821E]" />
                </div>
                <span className="">Public Beta Access</span>
              </Badge>
              <p className="hero-title flex flex-col">
                <DecryptedText text="Power Your Devices" />
                <DecryptedText text="with AI You Can Trust" />
              </p>
              <p className="hero-subtitle flex flex-col opacity-60">
                <span>
                  // Deploy, execute and evolve your AI across decentralized
                  devices
                </span>
                <span>// for faster, smarter, real-world performance.</span>
              </p>
            </div>

            <div className="flex w-full flex-col justify-start px-6">
              <Button variant="default">Join the waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
