import React, { useRef, useEffect, useState } from "react";
import icon from "../images/vect.svg";
import { Box } from "@mui/material";
import land from "../images/land.svg";
import wearables from "../images/wearables.svg";
import emotes from "../images/emotes.svg";
import { useNavigate } from "react-router-dom";
const Invest = ({ isInvestOpen, isTransparent, onClose }) => {
  const investRef = useRef(null);
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
    setIsOpen(isInvestOpen); // Update isOpen state based on isPresenceOpen prop
  }, [isInvestOpen]);

  useEffect(() => {
    const handleHoverOutside = (event) => {
      if (investRef.current && !investRef.current.contains(event.target)) {
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
          ref={investRef}
          style={{ opacity: "0.8", zIndex: "1000" }}
          className="bg-black top-32 fixed h-3/5 w-screen  "
        >
          <div className="flex ml-28 mt-24">
            <Box className="w-1/3">
              <div className="text-[#E9E8E8] flex items-center">
                <div
                  className="ml-2 cursor-pointer hover:text-white hover:font-semibold transition-all duration-3000"
                  onMouseOver={handleRotation1}
                  onClick={() => {
                    navigate("/coming-soon");
                  }}
                >
                  INVEST IN VYUG
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
                  onClick={() => {
                    navigate("/be-an-investor");
                  }}
                >
                  BE THE INVESTOR
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
              <Box className="w-2/5 ml-20 items-center text-white flex justify-center text-xl">
                Coming Soon
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
export default Invest;
