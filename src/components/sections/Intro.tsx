import CornersPlus from "@/components/CornersPlus";

import Variant1 from "@/assets/images/figure/Variant1.svg";
import Variant2 from "@/assets/images/figure/Variant2.svg";

import Pattern from "@/assets/images/Pattern.svg";
import DecryptedText from "@/components/DecryptedText";

export default function Intro() {
  return (
    <div>
      <CornersPlus>
        <div className="p-10">
          <p className="flex flex-col">
            <p className="cross-card-content">
              <DecryptedText text="Pivotal distributed inference engine" />
            </p>
            <span className="cross-card-desc text-[#686868]">
              Scalable and efficient intelligence beyond centralized
              infrastructure.
            </span>
          </p>
        </div>
      </CornersPlus>
      <CornersPlus showCorners="bottom">
        <div className="flex">
          <div className="dashed-border-4-4-r flex-554">
            <div className="p-10">
              <div className="cross-card-content1 flex items-baseline gap-2">
                <span className="leading-prefix">//</span>
                <DecryptedText text={"WASM protocol"} />
              </div>
            </div>
            <div className="relative p-4 flex flex-col items-center">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-17"
                style={{
                  backgroundImage: `url(${Pattern})`,
                }}
              />
              <img src={Variant1} alt="" />
            </div>
          </div>
          <div className="flex-723">
            <div className="p-10">
              <div className="cross-card-content1 flex items-baseline gap-2">
                <span className="leading-prefix">//</span>
                <DecryptedText text={"P2P inference engine"} />
              </div>
            </div>
            <div className="relative p-4 flex flex-col items-center">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-17"
                style={{
                  backgroundImage: `url(${Pattern})`,
                }}
              />
              <img src={Variant2} alt="" />
            </div>
          </div>
        </div>
      </CornersPlus>
    </div>
  );
}
