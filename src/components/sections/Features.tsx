import FeatureItem from "@/app/components/FeatureItem";
import CornersPlus from "@/components/CornersPlus";

import Icon1 from "@/assets/images/features/Feature1.svg";
import Icon2 from "@/assets/images/features/Feature2.svg";
import Icon3 from "@/assets/images/features/Feature3.svg";

const features = [
  {
    title: "Streamlined integration across heterogeneous systems",
    desc: "Lorem ipsum dolor sit amet consectetur. Eget tellus viverra tempor egestas enim aliquet.",
    icon: Icon1,
  },
  {
    title: "Adapt intelligence everywhere with higher efficiency",
    desc: "Lorem ipsum dolor sit amet consectetur. Eget tellus viverra tempor egestas enim aliquet.",
    icon: Icon2,
  },
  {
    title: "Gain real-time visibility in AI runtime behavior",
    desc: "Lorem ipsum dolor sit amet consectetur. Eget tellus viverra tempor egestas enim aliquet.",
    icon: Icon3,
  },
];

export default function Features() {
  return (
    <CornersPlus>
      <div className="flex">
        <div className="flex-598 dashed-border-4-4-r">
          <p className="flex flex-col gap-y-4 px-10 py-30 ">
            <span className="cross-card-content " style={{}}>
              From Spec to Shipped in Minutes
            </span>
            <span className="cross-card-desc text-[#686868]">
              Lorem ipsum dolor sit amet consectetur. Eget tellus viverra tempor
              egestas enim aliquet.
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
