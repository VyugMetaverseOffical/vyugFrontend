import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/cursorlottie.json";
import { useMediaQuery } from "@mui/material";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isStopped, setIsStopped] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px");

  useEffect(() => {
    let timeout;
    setIsHidden(false);
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsStopped(true);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsStopped(false);
      }, 7000);
    };

    const handleMouseEnter = (e) => {
      // console.log(e);
      const targetTagName = e.target.tagName.toLowerCase();
      const targetCursorStyle = window.getComputedStyle(e.target).cursor;
      if (targetTagName === "input" || targetCursorStyle === "pointer") {
        setIsHidden(true);
      }
    };

    const handleMouseLeave = (e) => {
      const targetTagName = e.target.tagName.toLowerCase();
      const targetCursorStyle = window.getComputedStyle(e.target).cursor;
      if (targetTagName === "input" || targetCursorStyle === "pointer") {
        setIsHidden(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", updatePosition);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", updatePosition);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
      clearTimeout(timeout);
    };
  }, [window.location.href]);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    transform: `translate(-50%, -50%)`,
    width: "50px",
    height: "50px",
    pointerEvents: "none",
    zIndex: "999999",
    display: isHidden ||isMobile ? 'none' : 'block'
  };

  return (
    <div style={cursorStyle}>
      <Lottie options={defaultOptions} isStopped={isStopped} isPaused={false} />
    </div>
  );
};

export default CustomCursor;