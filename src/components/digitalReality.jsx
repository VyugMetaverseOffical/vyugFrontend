import React, { useRef, useEffect, useState } from "react";
import icon from "../images/vect.svg";
import { Box } from "@mui/material";
import education from "../images/education.svg";
import entertainment from "../images/entertainment.svg";
import games from "../images/games.svg";
import corporate from "../images/corporate.svg";
import commercial from "../images/commercial.svg";
import events from "../images/events.svg";
import tourism from "../images/tourism.svg";
import hospitality from "../images/hospitality.svg";
import funParks from "../images/fun-parks.svg";
import { useNavigate } from "react-router-dom";
const DigitalReality = ({ isDigitalRealityOpen, isTransparent, onClose }) => {
  const digitalRealityRef = useRef(null);
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
    setIsOpen(isDigitalRealityOpen); // Update isOpen state based on isPresenceOpen prop
  }, [isDigitalRealityOpen]);

  useEffect(() => {
    const handleHoverOutside = (event) => {
      if (
        digitalRealityRef.current &&
        !digitalRealityRef.current.contains(event.target)
      ) {
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
          ref={digitalRealityRef}
          style={{ opacity: "0.8", zIndex: "1000" }}
          className="bg-black top-32 fixed h-3/5 w-screen"
        >
          <div className="flex ml-28 mt-24">
            <Box className="w-1/3">
              <div className=" text-[#E9E8E8] flex items-center">
                <div
                  className="ml-2 cursor-pointer hover:text-white hover:font-semibold transition-all duration-3000"
                  onMouseOver={handleRotation1}
                >
                  SECTORS
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
                  PARTNERS
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
                  <div className="flex flex-col items-center w-36 cursor-pointer">
                    <img
                      src={education}
                      onClick={() => {
                        navigate("/education");
                      }}
                    />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer text-center"
                      onClick={() => {
                        navigate("/education");
                      }}
                    >
                      Education
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-36 cursor-pointer">
                    <img
                      src={entertainment}
                      onClick={() => {
                        navigate("/entertainment");
                      }}
                    />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer text-center"
                      onClick={() => {
                        navigate("/entertainment");
                      }}
                    >
                      Entertainment
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center w-36 cursor-pointer"
                    onClick={() => {
                      navigate("/game");
                    }}
                  >
                    <img src={games} />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer text-center"
                      onClick={() => {
                        navigate("/game");
                      }}
                    >
                      Games
                    </div>
                  </div>
                </div>
                <div className="flex gap-36 mt-14">
                  <div
                    className="flex flex-col items-center w-36 cursor-pointer"
                    onClick={() => {
                      navigate("/corporate");
                    }}
                  >
                    <img src={corporate} />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer text-center"
                      onClick={() => {
                        navigate("/corporate");
                      }}
                    >
                      Corporate
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center w-36 cursor-pointer"
                    onClick={() => {
                      navigate("/commercial");
                    }}
                  >
                    <img src={commercial} />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer text-center"
                      onClick={() => {
                        navigate("/commercial");
                      }}
                    >
                      Commercial
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center w-36 cursor-pointer"
                    onClick={() => {
                      navigate("/event");
                    }}
                  >
                    <img src={events} />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer text-center"
                      onClick={() => {
                        navigate("/event");
                      }}
                    >
                      Events
                    </div>
                  </div>
                </div>
                <div className="flex gap-40 mt-14">
                  <div
                    className="flex flex-col items-center w-36 cursor-pointer"
                    onClick={() => {
                      navigate("/tourism");
                    }}
                  >
                    <img src={tourism} />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer text-center"
                      onClick={() => {
                        navigate("/tourism");
                      }}
                    >
                      Tourism
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center w-36 cursor-pointer"
                    onClick={() => {
                      navigate("/fun-park");
                    }}
                  >
                    <img src={funParks} />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer text-center"
                      onClick={() => {
                        navigate("/fun-park");
                      }}
                    >
                      Fun Parks
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center w-36 cursor-pointer"
                    onClick={() => {
                      navigate("/hospitality");
                    }}
                  >
                    <img src={hospitality} />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer text-center"
                      onClick={() => {
                        navigate("/hospitality");
                      }}
                    >
                      Hospitality
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
export default DigitalReality;
