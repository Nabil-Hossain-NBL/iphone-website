import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { rightImg, watchImg } from "../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".link",
        start: "bottom bottom",
        // scrub: true,
      },
    });
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#title",
        start: "bottom bottom",
        // scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden common-padding bg-zinc h-full"
    >
      <div className="screen-max-width">
        <div className="mb-12 md:flex w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highligts.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
