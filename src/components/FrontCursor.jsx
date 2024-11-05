import React, { useEffect, useState } from "react";
import cursor from "../images/cursor.webp";
import { useMediaQuery } from "@mui/material";

const FrontCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imageProps, setImageProps] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px");

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (
        e.clientX > 370 &&
        e.clientY > 145 &&
        e.clientX < 934 &&
        e.clientY > 145 &&
        e.clientX < 934 &&
        e.clientY < 495 &&
        e.clientX > 370 &&
        e.clientY < 495
      ) {
        setImageProps(true);
      } else {
        setImageProps(false);
      }
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
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: "60vh",
    height: "60vh",
    transform: `translate(-50%, -50%)`,
    pointerEvents: "none",
    zIndex: "99999",
    display: isHidden || isMobile ? "none" : "block",
  };

  return (
    <div style={cursorStyle}>
      <img
        className={`${imageProps && "cursorImage"}`}
        src={cursor}
        width={"100%"}
        height={"100%"}
        alt={"Cursor"}
        aria-hidden="true"
      />
    </div>
  );
};

export default FrontCursor;
