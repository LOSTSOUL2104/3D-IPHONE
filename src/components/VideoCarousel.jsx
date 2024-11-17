import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      xPercent: -100 * videoId,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () =>
        setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true })),
    });
  }, [videoId, isEnd]);

  useEffect(() => {
    const currentSpan = videoSpanRef.current[videoId];
    const currentVideo = videoDivRef.current[videoId];
    let currentProgress = 0;

    if (currentSpan) {
      const anim = gsap.to(currentSpan, {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;
            gsap.to(currentVideo, {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            gsap.set(currentSpan, {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.set(currentVideo, { width: "12px" });
            gsap.set(currentSpan, { backgroundColor: "#afafaf" });
          }
        },
      });

      if (videoId === 0) anim.restart();

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) gsap.ticker.add(animUpdate);
      else gsap.ticker.remove(animUpdate);
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (isPlaying) videoRef.current[videoId]?.play();
      else videoRef.current[videoId]?.pause();
    }
  }, [isPlaying, startPlay, videoId, loadedData]);

  const handleProcess = (type, i) => {
    setVideo((prev) => {
      switch (type) {
        case "video-end":
          return { ...prev, isEnd: true, videoId: i + 1 };
        case "video-last":
          return { ...prev, isLastVideo: true };
        case "video-reset":
          return { ...prev, videoId: 0, isLastVideo: false };
        case "toggle-play":
          return { ...prev, isPlaying: !prev.isPlaying };
        default:
          return prev;
      }
    });
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((prev) => [...prev, e]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  className={`${
                    list.id === 2 ? "translate-x-44" : ""
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  playsInline
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, idx) => (
                  <p key={idx} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
        <button
          className="control-btn"
          onClick={() =>
            handleProcess(isLastVideo ? "video-reset" : "toggle-play")
          }
        >
          <img
            src={isLastVideo ? replayImg : isPlaying ? pauseImg : playImg}
            alt={isLastVideo ? "Replay" : isPlaying ? "Pause" : "Play"}
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
