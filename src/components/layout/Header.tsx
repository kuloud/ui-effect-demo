import { Button } from "@/components/brumes/button";
import DecryptedText from "@/components/DecryptedText";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b-[0.5px] border-b-white/8 backdrop-blur-xl">
      <div className="mx-auto flex max-w-360 items-center justify-between px-20 py-3">
        <p className="text-[21px] leading-[100%] font-medium text-white">
          <span>Brumes</span>
          <span className="text-primary">.</span>
          <span>ai</span>
        </p>
        <div className="flex flex-row items-center gap-4">
          <a
            href="#"
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            <DecryptedText text="// PRODUCT" />
          </a>
          <Separator orientation="vertical" color="#383838" />
          <a
            href="#"
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            <DecryptedText text="// HIGHLIGHT" />
          </a>
          <Separator orientation="vertical" color="#383838" />
          <a
            href="#"
            className="opacity-50 transition-opacity hover:opacity-100"
          >
            <DecryptedText text="// ABOUT_US" />
          </a>
        </div>
        <div>
          <Button>JOIN THE WAITLIST</Button>
        </div>
      </div>
    </nav>
  );
}
