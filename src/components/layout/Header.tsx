import { Button } from "@/components/brumes/button";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-[0.5px] border-b-white/8 backdrop-blur-xl">
      <div className="mx-auto max-w-360 py-3 px-20 flex justify-between items-center">
        <p className="text-white font-medium text-[21px] leading-[100%]">
          <span>Brumes</span>
          <span className="text-primary">.</span>
          <span>ai</span>
        </p>
        <div className="flex flex-row items-center gap-4">
          <a href="#">
            <span className="text-white">// PRODUCT</span>
          </a>
          <Separator orientation="vertical" color="#383838" />
          <a href="#">
            <span className="text-white">// HIGHLIGHT</span>
          </a>
          <Separator orientation="vertical" color="#383838" />
          <a href="#">
            <span className="text-white">// ABOUT_US</span>
          </a>
        </div>
        <div>
          <Button>JOIN THE WAITLIST</Button>
        </div>
      </div>
    </nav>
  );
}
