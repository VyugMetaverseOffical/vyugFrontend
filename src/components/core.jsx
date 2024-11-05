import React, { useRef, useEffect, useState } from "react";
import icon from "../images/vect.svg";
import { Box } from "@mui/material";
import forest from "../images/forest.svg";
import iceCaps from "../images/ice-caps.svg";
import desert from "../images/desert.svg";
import plains from "../images/plains.svg";
import beaches from "../images/beaches.svg";
import mountains from "../images/mountains.svg";
import { useNavigate } from "react-router-dom";
const Core = ({ isCoreOpen, onClose }) => {
  const coreRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [Rotated1, set1Rotated] = useState(false);
  const [Rotated2, set2Rotated] = useState(false);
  const navigate = useNavigate();
  const handleRotation1 = () => {
    set1Rotated(!Rotated1);
    set2Rotated(false);
  };
  const handleRotation2 = () => {
    set2Rotated(!Rotated2);
    set1Rotated(false);
  };
  useEffect(() => {
    setIsOpen(isCoreOpen); // Update isOpen state based on isPresenceOpen prop
  }, [isCoreOpen]);

  useEffect(() => {
    const handleHoverOutside = (event) => {
      if (coreRef.current && !coreRef.current.contains(event.target)) {
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

  return (
    <>
      {isOpen && (
        <div
          ref={coreRef}
          style={{ opacity: "0.8", zIndex: "1000" }}
          className="bg-black top-32 fixed h-3/5 w-screen  "
        >
          <div className="flex ml-28 mt-24">
            <Box className="w-1/3">
              <div className="text-[#E9E8E8] flex items-center">
                <div
                  className="ml-2 cursor-pointer hover:text-white hover:font-semibold transition-all duration-3000"
                  onMouseOver={handleRotation1}
                >
                  REGIONS
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
                  HOW IT'S MADE
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
              <Box className="w-2/5 mx-20 text-white  ">
                <div className="flex gap-32">
                  <div className="flex flex-col items-center cursor-pointer">
                    <img
                      src={desert}
                      onClick={() => {
                        navigate("/desert");
                      }}
                    />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        navigate("/desert");
                      }}
                    >
                      Deserts
                    </div>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <img
                      src={iceCaps}
                      onClick={() => {
                        navigate("/water");
                      }}
                    />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        navigate("/water");
                      }}
                    >
                      Ice Caps
                    </div>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <img
                      src={forest}
                      onClick={() => {
                        navigate("/forest");
                      }}
                    />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        navigate("/forest");
                      }}
                    >
                      Forest
                    </div>
                  </div>
                </div>
                <div className="flex gap-32 mt-14">
                  <div className="flex flex-col items-center cursor-pointer">
                    <img
                      src={beaches}
                      onClick={() => {
                        navigate("/island");
                      }}
                    />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        navigate("/island");
                      }}
                    >
                      Beaches
                    </div>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <img
                      src={plains}
                      onClick={() => {
                        navigate("/land");
                      }}
                    />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        navigate("/land");
                      }}
                    >
                      Plains
                    </div>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <img
                      src={mountains}
                      onClick={() => {
                        navigate("/mountain");
                      }}
                    />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        navigate("/mountain");
                      }}
                    >
                      Mountains
                    </div>
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
export default Core;
