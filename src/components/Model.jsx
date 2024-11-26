import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ModelView from "./ModelView";

const Model = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#heading",
        start: "bottom bottom",
      },
    });
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
