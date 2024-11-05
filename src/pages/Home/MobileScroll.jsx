import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileScroll = ({ handleLoadedData }) => {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);

  const frames = {
    currentIndex: 0,
    maxIndex: 1305,
  };

  const images = []; // Store all image objects here
  const imagePromises = [];

  // Preload the first 50 images
  const preloadImages = () => {
    for (let i = 4; i <= 1308; i++) {
      const img = new Image();
      const src = `/videoFram/(${i}).jpg`;
      images.push(img);
      if (i <= 54) { // Preload the first 50 images only
        const promise = new Promise((resolve, reject) => {
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = (err) => {
            console.error(`Failed to load image: ${src}`, err);
            reject(err);
          };
        });
        imagePromises.push(promise);
      }
    }
  };

  const lazyLoadImages = (index) => {
    const img = images[index];
    if (!img || img.src) return; // If image already loaded or doesn't exist, do nothing

    const src = `/videoFram/(${index + 4}).jpg`;
    img.src = src;
    img.onload = () => {
      console.log(`Lazy-loaded image: ${src}`);
    };
    img.onerror = (err) => {
      console.error(`Failed to lazy-load image: ${src}`, err);
    };
  };

  // Drawing function
  const drawFrame = (index) => {
    if (index >= 0 && index <= frames.maxIndex && images[index]) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const img = images[index];

      if (!img || !img.complete || img.naturalWidth === 0) {
        console.error(
          "Image not loaded properly:",
          img ? img.src : "Image undefined"
        );
        return;
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      frames.currentIndex = index;
    }
  };

  const preLoadImages = async () => {
    try {
      preloadImages(); // Start preloading images
      await Promise.all(imagePromises); // Wait for the first 50 images to load
      handleLoadedData();
      drawFrame(frames.currentIndex); // Draw the first frame
      animationStart();

      // Lazy load the remaining images in the background
      for (let i = 50; i <= frames.maxIndex; i++) {
        lazyLoadImages(i);
      }
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  const animationStart = () => {
    gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        markers: false,
        onUpdate: (self) => {
          const newIndex = Math.floor(frames.maxIndex * self.progress);
          if (newIndex !== frames.currentIndex) {
            drawFrame(newIndex);
            lazyLoadImages(newIndex); // Lazy load the image when needed
          }
        },
      },
    });
  };

  useEffect(() => {
    preLoadImages();
  }, []);

  return (
    <>
      <div className="video-background">
        <canvas ref={canvasRef} style={{ width: "100%", height: "110vh" }} />
      </div>
      <div id="container" ref={parentRef}></div>
    </>
  );
};

export default MobileScroll;


