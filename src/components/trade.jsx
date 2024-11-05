import React, { useRef, useEffect, useState } from "react";
import icon from "../images/vect.svg";
import { Box } from "@mui/material";
import land from "../images/land.svg";
import wearables from "../images/wearables.svg";
import emotes from "../images/emotes.svg";
import privacy from "../images/privacy_policy.svg";
import content from "../images/content_policy.svg";
import security from "../images/security.svg";
import { useNavigate } from "react-router-dom";
const Trade = ({ isTradeOpen, isTransparent, onClose }) => {
  const tradeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [Rotated1, set1Rotated] = useState(false);
  const [Rotated2, set2Rotated] = useState(false);
  const [Rotated3, set3Rotated] = useState(false);
  const [Rotated4, set4Rotated] = useState(false);
  const navigate = useNavigate();

  const handleRotation1 = () => {
    set1Rotated(!Rotated1);
    set3Rotated(false);
    set4Rotated(false);
    set2Rotated(false);
  };
  const handleRotation2 = () => {
    set2Rotated(!Rotated2);
    set3Rotated(false);
    set4Rotated(false);
    set1Rotated(false);
  };
  const handleRotation3 = () => {
    set3Rotated(!Rotated3);
    set2Rotated(false);
    set4Rotated(false);
    set1Rotated(false);
  };
  const handleRotation4 = () => {
    set4Rotated(!Rotated4);
    set3Rotated(false);
    set2Rotated(false);
    set1Rotated(false);
  };

  useEffect(() => {
    setIsOpen(isTradeOpen);
  }, [isTradeOpen]);

  useEffect(() => {
    const handleHoverOutside = (event) => {
      if (tradeRef.current && !tradeRef.current.contains(event.target)) {
        setIsOpen(false);
        onClose();
      }
    };
    document.addEventListener("mouseover", handleHoverOutside);
    return () => {
      document.removeEventListener("mouseover", handleHoverOutside);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div
          ref={tradeRef}
          style={{ opacity: "0.8", zIndex: "1000" }}
          className="bg-black top-32 fixed h-3/5 w-screen  "
        >
          <div className="flex ml-28 mt-24">
            <Box className="w-1/3">
              <div className=" text-[#E9E8E8] flex items-center">
                <div
                  className="ml-2 cursor-pointer hover:text-white hover:font-semibold transition-all duration-3000"
                  onMouseOver={handleRotation1}
                >
                  TRADE CENTER
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
                  WHITE PAPER
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

              <div className="mt-5 text-[#E9E8E8] flex items-center">
                <div
                  className="ml-2 cursor-pointer hover:text-white hover:font-semibold transition-all duration-3000"
                  onMouseOver={handleRotation3}
                >
                  POLICIES
                </div>
                <img
                  src={icon}
                  className="h-2 ml-2 "
                  style={{
                    transition: "transform 0.3s",
                    transform: Rotated3 ? "rotate(-90deg)" : "rotate(0deg)",
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
                      src={land}
                      onClick={() => {
                        navigate("/market-place");
                      }}
                    />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 "
                      onClick={() => {
                        navigate("/market-place");
                      }}
                    >
                      Lands
                    </div>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <img src={wearables} />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 "
                      onClick={() => {
                        navigate("/market-place");
                      }}
                    >
                      Wearables
                    </div>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <img src={emotes} />
                    <div
                      className="mt-1 hover:scale-110 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        navigate("/market-place");
                      }}
                    >
                      Emotes
                    </div>
                  </div>
                </div>
              </Box>
            ) : Rotated2 ? (
              <Box className="w-2/5 ml-20 items-center text-white flex justify-center text-xl">
                Coming Soon
              </Box>
            ) : Rotated3 ? (
              <Box className="w-2/5 ml-20 text-white  ">
                <div className="flex gap-28">
                  <div className=" flex flex-col items-center justify-center cursor-pointer">
                    <img src={privacy} className="h-8" />
                    <div
                      className="mt-1 text-sm hover:scale-110 transition-all duration-300 "
                      onClick={() => {
                        navigate("/coming-soon");
                      }}
                    >
                      PRIVACY POLICY
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center cursor-pointer">
                    <img src={content} className="h-8" />
                    <div
                      className="mt-1 text-sm hover:scale-110 transition-all duration-300 "
                      onClick={() => {
                        navigate("/coming-soon");
                      }}
                    >
                      CONTENT POLICY
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center cursor-pointer">
                    <img src={security} className="h-8" />
                    <div
                      className="mt-1 text-sm hover:scale-110 transition-all duration-300 "
                      onClick={() => {
                        navigate("/coming-soon");
                      }}
                    >
                      SECURITY
                    </div>
                  </div>
                </div>
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
export default Trade;
