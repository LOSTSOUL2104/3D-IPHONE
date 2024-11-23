import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-full h-screen overflow-hidden common-padding relative"
      style={{
        zIndex: 1,
      }}
    >

      <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-zinc"></div>

     
      <div className="screen-max-width h-full flex flex-col justify-center">
        <div className="mb-12 w-full md:flex items-end justify-between">
        <h1
            id="title"
            className="section-heading opacity-0 translate-y-5 transition-transform duration-700"
          >
            Explore the Essentials.
          </h1>

     
          <div className="flex flex-wrap items-end gap-5 mt-6 md:mt-0">
            <p className="link opacity-0 translate-y-5 transition-transform duration-700 flex items-center">
              Catch the Feature.
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link opacity-0 translate-y-5 transition-transform duration-700 flex items-center">
              Catch the Event
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
