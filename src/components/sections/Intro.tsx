import CornersPlus from "@/components/CornersPlus";

import Variant1 from "@/assets/images/figure/Variant1.svg";
import Variant2 from "@/assets/images/figure/Variant2.svg";

import Pattern from "@/assets/images/Pattern.svg";

export default function Intro() {
  return (
    <div>
      <CornersPlus>
        <div className="p-10">
          <p className="flex flex-col">
            <span className="cross-card-content " style={{}}>
              Pivotal distributed inference engine
            </span>
            <span className="cross-card-desc text-[#686868]">
              Lorem ipsum dolor sit amet consectetur. Eget tellus viverra tempor
              egestas enim aliquet.
            </span>
          </p>
        </div>
      </CornersPlus>
      <CornersPlus showCorners="bottom">
        <div className="flex">
          <div className=" flex-554 dashed-border-4-4-r">
            <div className="p-10">
              <p className="flex flex-col">
                <span className="cross-card-content1 text-white " style={{}}>
                  WASM protocol
                </span>
                <span className="cross-card-desc text-[#686868]">
                  Lorem ipsum dolor sit amet consectetur. Eget tellus viverra
                  tempor egestas enim aliquet.
                </span>
              </p>
            </div>
            <div className="p-4 relative">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-17"
                style={{
                  backgroundImage: `url(${Pattern})`,
                }}
              />
              <img src={Variant1} alt="" />
            </div>
          </div>
          <div className=" flex-723">
            <div className="p-10">
              <p className="flex flex-col">
                <span className="cross-card-content1 text-white " style={{}}>
                  P2P inference engine
                </span>
                <span className="cross-card-desc text-[#686868]">
                  Lorem ipsum dolor sit amet consectetur. Eget tellus viverra
                  tempor egestas enim aliquet.
                </span>
              </p>
            </div>
            <div className="p-4 relative">
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
