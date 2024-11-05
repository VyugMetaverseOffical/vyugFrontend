import React, { useEffect, useRef, useState } from "react";

const ScreenshotDetector = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const touchTimeoutRef = useRef(null);
  const longPressDuration = 500; // 1 second for long press detection
  const minTouchPoints = 2; // Minimum number of touch points for multi-finger detection

  const showOverlay = () => {
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };

  const onTouchStart = (event) => {
    if (event.touches.length >= minTouchPoints) {
      touchTimeoutRef.current = setTimeout(() => {
        showOverlay();
      }, longPressDuration);
    }
  };

  // const onBlur = () => {
  //   showOverlay();
  // };

  // const onFocus = (e) => {
  //   console.log(e);
  //   hideOverlay();
  // };

  const onTouchEnd = () => {
    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
    // Assume any touch end could be a potential screenshot
    setTimeout(hideOverlay, 500);
  };

  const onTouchMove = (event) => {
    if (event.touches.length < minTouchPoints) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
      hideOverlay();
    }
  };

  const onKeyDown = (event) => {
    
    // Detect common screenshot shortcuts
    // if (event.key == "Insert" || (event.ctrlKey && event.key == "Insert")) {
    //   showOverlay();
    //   event.preventDefault();
    // }

    if (event.keyCode === 91 && event.shiftKey && event.keyCode === 83) {
      console.log("sds");
      onBlur();
    }

    // Disable F12
    if (event.keyCode === 123) {
      event.preventDefault();
    }

    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (event.ctrlKey && event.shiftKey) {
      if (
        event.keyCode === 73 ||
        event.keyCode === 74 ||
        event.keyCode === 67
      ) {
        event.preventDefault();
      }
    }
    // Disabled Ctrl+U
    if (event.ctrlKey && event.keyCode === 85) {
      event.preventDefault();
    }

    // disabled copy the content
    if (event.ctrlKey && event.keyCode === 67) {
      event.preventDefault();
    }
  };

  const onContextMenu = (event) => {
    event.preventDefault();
  };

  const onDragStart = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("touchstart", onTouchStart);
    // window.addEventListener("blur", onBlur);
    // window.addEventListener("focus", onFocus);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("contextmenu", onContextMenu);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("dragstart", onDragStart);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      // window.removeEventListener("blur", onBlur);
      // window.removeEventListener("focus", onFocus);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("contextmenu", onContextMenu);
      window.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return (
    <div>
      {isOverlayVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        ></div>
      )}
    </div>
  );
};

export default ScreenshotDetector;
