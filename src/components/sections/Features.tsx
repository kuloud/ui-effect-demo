import FeatureItem from "@/app/components/FeatureItem";
import CornersPlus from "@/components/CornersPlus";

import Icon1 from "@/assets/images/features/Feature1.svg";
import Icon2 from "@/assets/images/features/Feature2.svg";
import Icon3 from "@/assets/images/features/Feature3.svg";
import DecryptedText from "@/components/DecryptedText";

const features = [
  {
    title: "Streamlined integration across heterogeneous systems",
    desc: "Nvdia, AMD, Apple Silicon, Desktops, IoT devices... Integrate seamlessly across diverse platforms and environments without rewriting code.",
    icon: Icon1,
  },
  {
    title: "Adapt intelligence everywhere with higher efficiency",
    desc: "Reduce token latency and network transfer costs through efficient, distributed execution.",
    icon: Icon2,
  },
  {
    title: "Gain real-time visibility in AI runtime behavior",
    desc: "Understand how AI runs in real-world environments, live and across devices.",
    icon: Icon3,
  },
];

export default function Features() {
  return (
    <CornersPlus>
      <div className="flex">
        <div className="dashed-border-4-4-r flex-598">
          <p className="flex flex-col gap-y-4 px-10 py-30">
            <p className="cross-card-content">
              <DecryptedText text="From Spec to Shipped in Minutes" />
            </p>

            <span className="cross-card-desc text-[#686868]">
              Turn ideas into production-ready deployments with tools that are
              easy to adopt.
            </span>
          </p>
        </div>
        <div className="flex-679 pt-16.5">
          {features.map((item, index) => (
            <FeatureItem key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </CornersPlus>
  );
}
