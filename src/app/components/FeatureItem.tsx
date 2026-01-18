import Ellipse from "@/components/Ellipse";

import Pattern from "@/assets/images/Pattern.svg";
import { cn } from "@/lib/utils";

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
    <div className="flex flex-col dashed-border-4-4-t">
      <div className="p-8">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-2">
            <div className="p-0.5">
              <Ellipse className="size-1.5 bg-primary" />
            </div>
            <span className="cross-card-desc text-[#686868]">
              {(index + 1).toString().padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="leading-prefix">//</span>
            <span className="feature-item-title">{title}</span>
          </div>
          <span className="cross-card-desc text-[#686868]">{desc}</span>
        </div>
      </div>
      <div className="relative h-45 w-full flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-17"
          style={{
            backgroundImage: `url(${Pattern})`,
          }}
        />

        <div className="absolute z-10 right-16">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}
