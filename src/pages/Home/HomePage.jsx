import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Head";
import homeAudio from "../../videos/homeAudio.mp3";
import { Typography, useMediaQuery } from "@mui/material";
import image from "../../images/home-page.webp";
import image1 from "../../images/land_home.svg";
import image2 from "../../images/emote_home.svg";
import image3 from "../../images/wearable_home.svg";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import HomeScrollComponent from "./HomeScrollComponent";
// import FloatingIcon from "../../components/FloatingIcon";
import MobileScroll from "./MobileScroll";
import unmute from "../../images/unmute.svg";
import mute from "../../images/mute_hover.svg";

const HomePage = ({ showHomePageLoaded, onVideoLoaded }) => {
  const [position, setPosition] = useState(false);
  const [loadedData, setLoadedData] = useState(false);

  const isMobile = useMediaQuery("(max-width: 950px");

  const [isMuted, setIsMuted] = useState(isMobile ? false : true);

  const audioRef = useRef(null);
  const navigate = useNavigate();
  const sliderImages = [
    {
      image: image1,
      text: "Land",
    },
    {
      image: image2,
      text: "Emotes",
    },
    {
      image: image3,
      text: "Wearables",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const boxElement = document.getElementById("b1");

      if (boxElement) {
        const bounding = boxElement.getBoundingClientRect();
        const boxTop = bounding.top;

        if (boxTop <= (3 / 4) * window.innerHeight) {
          const imgElement = document.getElementById("img1");
          if (imgElement) {
            imgElement.classList.add("animate-slide-from-left");
          }
          const textElement = document.getElementById("text1");
          if (textElement) {
            textElement.classList.add("animate-slide-from-right");
          }
        }

        if (boxTop <= 0) {
          setPosition(true);
        } else {
          setPosition(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const timeData = setTimeout(() => {
      if (showHomePageLoaded) {
        setLoadedData(true);
      }
    }, 800);

    return () => {
      clearTimeout(timeData);
    };
  }, [showHomePageLoaded]);

  return (
    <div className="min-h-screen">
      {/* <FloatingIcon /> */}
      {loadedData && <Header isTransparent={position} isHeaderText={false} />}
      {isMobile ? (
        <MobileScroll handleLoadedData={onVideoLoaded} />
      ) : (
        <HomeScrollComponent handleLoadedData={onVideoLoaded} />
      )}
      <audio ref={audioRef} muted={isMuted} autoPlay loop>
        <source src={homeAudio} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      {!isMobile && (
        <img
          src={isMuted ? mute : unmute}
          className="fixed cursor-pointer -z-[1] bottom-10 right-10 w-12"
          onClick={toggleAudio}
          alt={isMuted ? "muteIcon" : "unmuteIcon"}
          aria-hidden="true"
        />
      )}
      {loadedData && (
        <div className="bg-[#fff]" id="b1">
          <div className="flex justify-center items-center bg-[#242424]">
            <div className="py-20 md:py-40 flex-col sm:flex-row gap-10 flex w-[95%] justify-center items-center sm:w-[90%] mx-auto">
              <div className="hidden sm:block sm:w-[45%]">
                <img
                  src={image}
                  className="rounded-2xl w-[100%] h-[100%]"
                  alt="investment"
                  aria-hidden="true"
                />
              </div>
              <div className="w-[90%] sm:w-[50%] flex flex-col gap-10">
                <Typography
                  variant="h1"
                  component="h1"
                  className="header text-[#fff] text-3xl sm:text-4xl md:text-[45px]"
                >
                  INVESTMENT
                </Typography>
                <div className="sm:hidden">
                  <img
                    src={image}
                    className="rounded-2xl w-[100%] h-[100%]"
                    alt="investment"
                    aria-hidden="true"
                  />
                </div>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-left text-sm md:text-base text-[#fff]"
                >
                  VYUG is a new Metaverse platform that aims to be more than
                  just a game. It is building a virtual world with educational
                  and business opportunities. Invest in VYUG to help shape the
                  future of virtual interaction.
                </Typography>
                <button
                  onClick={() => navigate("/invest-in-vyug")}
                  className="black-btn py-2 px-4 w-1/2 text-center sm:w-fit lg:px-10 description text-sm md:text-base uppercase"
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-center px-5 sm:px-20 pt-20 md:pt-40 max-w-5xl mx-auto">
            <Typography
              variant="h2"
              component="h2"
              className="header text-3xl sm:text-4xl md:text-[45px]"
            >
              TRADE <span className="font-extrabold">CENTER</span>
            </Typography>
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm md:text-base text-center"
            >
              VYUG, the largest open-world Metaverse platform, extends VR beyond
              entertainment. Invest in VYUG to unlock endless opportunities in
              AR, VR, and XR. This virtual land promises limitless potential for
              education, business, and immersive experiences. Join us in shaping
              the future with VYUG.
            </Typography>
            <div className="flex gap-5 sm:gap-10 justify-center items-center mt-6">
              {sliderImages.map((sliderImg, index) => (
                <div
                  key={index}
                  className="flex flex-wrap justify-center items-center"
                >
                  <img
                    src={sliderImg.image}
                    alt={sliderImg.text}
                    aria-hidden="true"
                  />
                  <h6 className="text-center pt-2 text-sm sm:text-lg md:text-xl uppercase">
                    {sliderImg.text}
                  </h6>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("/trade-center/market-place")}
              className="white-btn w-fit mx-auto py-2 mb-5 sm:mt-10 px-4 lg:px-10 rounded-3xl description"
            >
              DISCOVER NOW
            </button>
          </div>
          <div className="flex justify-center items-center py-20 md:py-40 max-w-5xl mx-auto">
            <div className="flex flex-col justify-center items-center gap-7 w-[90%] sm:w-[70%] mx-auto">
              <Typography
                variant="h3"
                component="h3"
                className="header text-3xl sm:text-4xl md:text-[45px]"
              >
                WHAT'S <span className="font-extrabold">NEW ?</span>
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-center"
              >
                Vyug is thrilled to unveil groundbreaking news that will reshape
                how you engage with the metaverse. Step into a world of
                limitless possibilities where creativity knows no bounds.
              </Typography>
              <button
                onClick={() => navigate("/buzz/pr-news")}
                className="white-btn w-fit mx-auto py-2 sm:mt-10 px-4 lg:px-10 rounded-3xl description"
              >
                EXPLORE NOW
              </button>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};
export default HomePage;
