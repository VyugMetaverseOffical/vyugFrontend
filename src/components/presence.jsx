import React, { useRef, useEffect, useState } from "react";
import icon from "../images/vect.svg";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Presence = ({ isPresenceOpen, isTransparent, onClose }) => {
  const navigate = useNavigate();
  const presenceRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [Rotated1, set1Rotated] = useState(false);
  const [Rotated2, set2Rotated] = useState(false);

  const handleRotation1 = () => {
    set1Rotated(!Rotated1);
    set2Rotated(false);
  };
  const handleRotation2 = () => {
    set2Rotated(!Rotated2);
    set1Rotated(false);
  };
  useEffect(() => {
    setIsOpen(isPresenceOpen); // Update isOpen state based on isPresenceOpen prop
  }, [isPresenceOpen]);

  useEffect(() => {
    const handleHoverOutside = (event) => {
      if (presenceRef.current && !presenceRef.current.contains(event.target)) {
        // Hover occurred outside of the Presence component, close it
        setIsOpen(false);
        onClose();
      }
    };

    // Adding event listener when component mounts
    document.addEventListener("mouseover", handleHoverOutside);

    // Cleaning up the event listener when component unmounts
    return () => {
      document.removeEventListener("mouseover", handleHoverOutside);
    };
  }, []);

  console.log(isTransparent);
  return (
    <>
      {isOpen && (
        <div
          ref={presenceRef}
          style={{ opacity: "0.8", zIndex: "1000" }}
          className="bg-black top-32 fixed h-3/5 w-screen"
        >
          <div className="flex ml-28 mt-24">
            <Box className="w-1/3">
              <div
               className="text-[#E9E8E8] flex items-center">
                <div
                  className="ml-2 cursor-pointer hover:text-white hover:font-semibold transition-all duration-3000"
                  onMouseOver={handleRotation1}
                >
                  WHAT IS VYUG
                </div>
                <img
                  src={icon}
                  className="h-2 ml-2"
                  style={{
                    transition: "transform 0.3s",
                    transform: Rotated1 ? "rotate(-90deg)" : "rotate(0deg)",
                  }}
                />
              </div>
              <div className="mt-5 text-[#E9E8E8] flex items-center">
                <div
                  className="ml-2 cursor-pointer hover:text-white hover:font-semibold transition-all duration-3000"
                  onMouseOver={handleRotation2}
                >
                  VYUG INNOVATORS
                </div>
                <img
                  src={icon}
                  className="h-2 ml-2 "
                  style={{
                    transition: "transform 0.3s",
                    transform: Rotated2 ? "rotate(-90deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </Box>
            <div className="h-[100px] min-h-full w-px bg-gradient-to-tr from-transparent via-white to-transparent opacity-25 dark:via-neutral-400 "></div>
            {Rotated1 ? (
              <Box className="w-2/5 mx-20 text-white">
                <div className="flex justify-between">
                  <div
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    About
                  </div>
                  <div
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      navigate("/coming-soon");
                    }}
                  >
                    Vision
                  </div>
                  <div
                    className="hover:scale-110 transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      navigate("/coming-soon");
                    }}
                  >
                    Mission
                  </div>
                </div>
              </Box>
            ) : Rotated2 ? (
              <Box className="w-2/5 ml-20 items-center text-white flex justify-center text-xl">
                Coming Soon
              </Box>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Presence;
