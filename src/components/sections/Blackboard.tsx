import bento from "@/assets/images/frames/FrameBento.png";
import CornersPlus from "@/components/CornersPlus";
import DecryptedText from "@/components/DecryptedText";
import Ellipse from "@/components/Ellipse";

export default function Blackboard() {
  return (
    <section className="w-full">
      <CornersPlus>
        <div
          className="w-full bg-cover bg-center bg-no-repeat p-10"
          style={{ backgroundImage: `url(${bento})` }}
        >
          <div className="bg-[#121212]">
            <div className="flex items-center gap-0.75 p-2.5">
              <Ellipse className="size-3 bg-[#FE3838]" />
              <Ellipse className="size-3 bg-[#FAEF4A]" />
              <Ellipse className="size-3 bg-[#77F38A]" />
            </div>
            <div className="px-20 py-5">
              <p
                // animationDuration={1}
                // ease="back.inOut(2)"
                // scrollStart="center bottom+=50%"
                // scrollEnd="bottom bottom-=40%"
                // stagger={0.03}
                // textClassName="bento-title text-white/20"
                className="bento-title text-white/20"
              >
                {/* Brumes.aI defines a protocol and a secure execution environment
              for distributed AI workloads across devices, continuously
              improving intelligence in real-time. */}
                Brumes.aI defines a protocol
                <br /> and a{" "}
                <DecryptedText text="secure" className="text-white" /> execution
                environment
                <br /> for{" "}
                <DecryptedText text="distributed" className="text-white" /> AI
                workloads across devices,
                <br />{" "}
                <DecryptedText
                  text="continuously"
                  className="text-white"
                />{" "}
                improving intelligence in{" "}
                <DecryptedText text="real-time" className="text-white" />.
              </p>
            </div>
          </div>
        </div>
      </CornersPlus>
    </section>
  );
}
