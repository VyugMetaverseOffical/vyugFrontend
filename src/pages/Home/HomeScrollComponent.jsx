import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../../videos/landingPage2.mp4";

gsap.registerPlugin(ScrollTrigger);

const HomeScrollComponent = ({ handleLoadedData }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const addEventListenerOnce = (el, event, fn, opts) => {
    const onceFn = (e, ...args) => {
      el.removeEventListener(event, onceFn);
      fn.apply(this, args);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
  };
  // Function to activate the video on iOS
  const activateVideoOnIOS = (video) => {
    addEventListenerOnce(document.documentElement, "touchstart", () => {
      video.play();
      video.pause();
    });
  };
  // Function to handle video source fetch and blob
  const fetchVideoBlob = (src, video) => {
    if (window.fetch) {
      fetch(src)
        .then((response) => response.blob())
        .then((response) => {
          const blobURL = URL.createObjectURL(response);
          const currentTime = video.currentTime;
          activateVideoOnIOS(video);
          video.setAttribute("src", blobURL);
          video.currentTime = currentTime + 0.01;
        });
    }
  };
  useEffect(() => {
    const video = videoRef.current;
    const src = video.currentSrc || video.src;
    activateVideoOnIOS(video);

    const onScrollUpdate = (self) => {
      if (video.duration) {
        const scrollProgress = self.progress;
        video.currentTime = scrollProgress * video.duration;
      }
    };

    const tl = gsap.timeline({
      defaults: { duration: 5 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: onScrollUpdate,
        scrub: 0.001,
      },
    });
    addEventListenerOnce(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        { currentTime: 0 },

        { currentTime: video.duration || 1, ease: "none" }
      );
    });
    setTimeout(() => fetchVideoBlob(src, video), 1000);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const videoRefnce = useRef(null);

  useEffect(() => {
    gsap.to(videoRefnce.current, {
      scale: 1.9,
      duration: 2,
      scrollTrigger: {
        trigger: videoRefnce.current,
        start: "center center+=35%",
        end: "center center",
        scrub: 3,
        onEnter: () => (document.body.style.overflowX = "hidden"),
        onLeaveBack: () => (document.body.style.overflowX = "hidden"),
      },
    });
  }, []);
  return (
    <>
      <video
        ref={videoRef}
        onLoadedData={handleLoadedData}
        src={video}
        playsInline
        webkit-playsinline="true"
        preload="auto"
        muted="muted"
        className="video-background"
        style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
      ></video>
      <div id="container" ref={containerRef}></div>
    </>
  );
};

export default HomeScrollComponent;
