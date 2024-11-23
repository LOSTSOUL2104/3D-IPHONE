import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.8 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2.4 });
  }, []);

  return (
    <section className="w-full min-h-screen bg-black relative">
      <div className="w-full h-screen flex flex-col justify-between pt-20 pb-30">
        <div className="w-full flex-1 flex flex-col items-center">
          <p id="hero" className="hero-title opacity-0 text-2xl">
            iPhone 15 Pro
          </p>
          <div className="md:w-10/12 w-9/12 mt-5 flex-1 flex items-center justify-center">
            <video
              className="pointer-events-none w-full"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>

        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20 space-y-4 text-center"
        >
          <button class="bg-black text-blue-400 border border-teal-800 border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-lg hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-400 group">
            <span class="bg-teal-400 shadow-teal-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            BUY NOW
          </button>
          <p className="text-sm sm:text-base text-gray-600">
            From{" "}
            <span className="font-semibold text-teal-500">₹1999/month</span> or
            <span className="font-semibold text-teal-500">₹149999</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
