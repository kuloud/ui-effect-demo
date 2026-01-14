import "./App.css";
import PixelCard from "./components/PixelCard";
import HeroBg from "./ui/HeroBg";
import DecryptedText from "./components/DecryptedText";

function App() {
  const figmaLink =
    "https://www.figma.com/proto/1gdDlP1B9SZREHyhy5PdRg/Brumes.ai?page-id=0%3A1&node-id=3-376&t=CWk3ABhRfxRxIMKY-0&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3%3A376&hide-ui=1";

  return (
    <div className="flex flex-col justify-center items-center gap-16 w-screen h-screen">
      <HeroBg />

      <a href={figmaLink} className="text-white z-10" target="_blank">
        <DecryptedText
          text="Brumes.AI Design File >"
          speed={45}
          maxIterations={5}
          sequential={true}
          revealDirection="start"
          className="revealed"
          animateOn="both"
          parentClassName="text-white z-10 text-2xl hover:underline"
        />
      </a>

      <PixelCard variant="default">
        <p className=" text-white absolute">CTA Effect</p>
      </PixelCard>

      <a
        href="https://github.com/ifryan/Brumes-Demo"
        className="text-white z-10"
        target="_blank"
      >
        <DecryptedText
          text="Github >"
          speed={45}
          maxIterations={5}
          sequential={true}
          revealDirection="start"
          className="revealed"
          animateOn="both"
          parentClassName="text-white z-10 text hover:underline"
        />
      </a>
    </div>
  );
}

export default App;
