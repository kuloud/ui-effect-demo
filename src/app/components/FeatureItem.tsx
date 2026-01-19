import Ellipse from "@/components/Ellipse";

import Pattern from "@/assets/images/Pattern.svg";
import DecryptedText from "@/components/DecryptedText";

export default function FeatureItem({
  index,
  title,
  desc,
  icon,
}: {
  index: number;
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="dashed-border-4-4-t flex flex-col">
      <div className="p-8">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-2">
            <div className="p-0.5">
              <Ellipse className="bg-primary size-1.5" />
            </div>
            <span className="cross-card-desc text-[#686868]">
              {(index + 1).toString().padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="leading-prefix">//</span>
            <DecryptedText className="feature-item-title" text={title} />
          </div>
          <span className="cross-card-desc text-[#686868]">{desc}</span>
        </div>
      </div>
      <div className="relative flex h-45 w-full items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-17"
          style={{
            backgroundImage: `url(${Pattern})`,
          }}
        />

        <div className="absolute right-16 z-10">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}
