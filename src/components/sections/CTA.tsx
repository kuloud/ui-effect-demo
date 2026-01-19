import { Button } from "@/components/brumes/button";
import DecryptedText from "@/components/DecryptedText";
import PixelCard from "@/components/PixelCard";

const CornerDecoration = () => (
  <>
    {/* Top-left corner */}
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className="absolute top-3 left-3"
      style={{ transform: "rotate(270deg)", opacity: 1 }}
    >
      <path
        d="M0,0 L22,0 L22,22"
        fill="none"
        stroke="#ff821e"
        strokeWidth="3"
      />
    </svg>

    {/* Top-right corner */}
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className="absolute top-3 right-3"
      style={{ transform: "rotate(0deg)", opacity: 1 }}
    >
      <path
        d="M0,0 L22,0 L22,22"
        fill="none"
        stroke="#ff821e"
        strokeWidth="3"
      />
    </svg>

    {/* Bottom-right corner */}
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className="absolute right-3 bottom-3"
      style={{ transform: "rotate(90deg)", opacity: 1 }}
    >
      <path
        d="M0,0 L22,0 L22,22"
        fill="none"
        stroke="#ff821e"
        strokeWidth="3"
      />
    </svg>

    {/* Bottom-left corner */}
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className="absolute bottom-3 left-3"
      style={{ transform: "rotate(180deg)", opacity: 1 }}
    >
      <path
        d="M0,0 L22,0 L22,22"
        fill="none"
        stroke="#ff821e"
        strokeWidth="3"
      />
    </svg>
  </>
);

export default function CTA() {
  return (
    <div className="dashed-border-4-4-t">
      <PixelCard className="h-100 w-full border-none">
        <div className="absolute flex size-full items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="cta-logo mb-10">
              <span>Brumes</span>
              <span className="text-primary">.</span>
              <span>ai</span>
            </p>
            <p className="cta-title">
              <DecryptedText text="Get actionable insights with us" />
            </p>
            <p className="cta-desc text-[#686868]">
              Power Your Devices with AI You Can Trust
            </p>

            <div className="mt-10">
              <Button>Join the waitlist</Button>
            </div>
          </div>
        </div>
        <CornerDecoration />
      </PixelCard>
    </div>
  );
}
