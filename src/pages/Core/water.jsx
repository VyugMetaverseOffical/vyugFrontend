import SideIcon from "../../components/side-icon";
import video from "../../images/Core/Water/water.mp4";
import desert from "../../images/Core/desertBox.svg";
import { Box } from "@mui/material";
import muteIcon from "../../images/mute.svg";
import unmute from "../../images/unmute.svg";
import mute_hover from "../../images/mute_hover.svg";
import unmute_hover from "../../images/unmute_hover.svg";
import SimpleImageSlider from "react-simple-image-slider";
import forest from "../../images/Core/forestBox.svg";
import water from "../../images/Core/Water/waterIcon.svg";
import land from "../../images/Core/landBox.svg";
import mountain from "../../images/Core/mountainBox.svg";
import island from "../../images/Core/islandBox.svg";
import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import waterImg1 from "../../images/Core/Water/water_img1.webp";
import waterImg2 from "../../images/Core/Water/water_img2.webp";
import waterImg3 from "../../images/Core/Water/water_img3.webp";
import Header from "../../components/Head";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import {
  handleScrollAnimation,
  handleTypeAnimation,
} from "../../lib/animations";
import Starter from "../../components/Starter";
import Explore from "./Explore";
import { Helmet } from "react-helmet-async";

const slideImages = [
  {
    url: waterImg1,
  },
  {
    url: waterImg2,
  },
  {
    url: waterImg3,
  },
];

const exploreFurther = [
  {
    svg: desert,
    text: "Deserts",
    url: "/regions/virtual-reality-in-desert",
    bge: "#F79654",
  },
  {
    svg: mountain,
    text: "Mountains",
    url: "/regions/virtual-reality-in-mountain",
    bge: "#314265",
  },
  {
    svg: forest,
    text: "Forest",
    url: "/regions/virtual-reality-in-forest",
    bge: "#8AB126",
  },
  {
    svg: island,
    text: "Islands",
    url: "/regions/virtual-reality-in-island",
    bge: "#855944",
  },
  {
    svg: land,
    text: "Plains",
    url: "/regions/virtual-reality-in-plains",
    bge: "#D53442",
  },
];

const Water = () => {
  const height = window.innerHeight;
  const [mute, setMute] = useState(true);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setMute(!mute);
  };

  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    handleScrollAnimation("rw2", null, "rwt2");
    const handleScroll = () => {
      handleScrollAnimation("rw1", null, "rwt1");
      handleTypeAnimation("rw1", setAnimationTriggered);
      handleTypeAnimation("rw3", setAnimation2Triggered);

      handleScrollAnimation("rw3", null, "rwt3");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Water - VYUG Metaverse</title>
        <meta name="description" content="Water" />
        <meta name="keywords" content="Water" />
        <meta property="og:title" content="Water" />
        <meta property="og:description" content="Water" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/regions/virtual-reality-in-water-body"
        />
      </Helmet>
      {loading && <Starter />}
      <div>
        <Header isTransparent={position} isHeaderText={false} />
        <SideIcon />
        <div
          style={{
            overflowX: "hidden",
            marginTop: "0px",
            height: "calc(100vh)",
            width: "100%",
            position: "relative",
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.90)",
            // zIndex: 999999,
          }}
        >
          <video
            autoPlay
            playsInline
            webkit-playsinline="true"
            loop
            muted={mute}
            onLoadedData={() => setLoading(false)}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            ref={videoRef}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src={mute ? muteIcon : unmute}
            className="absolute cursor-pointer opacity-100 transition ease-in-out duration-200 hover:scale-110 hover:opacity-0 bottom-10 left-10 w-14 h-16"
            onClick={toggleMute}
            alt={mute ? "muteIcon" : "unmuteIcon"}
            aria-hidden="true"
          />
          <img
            src={mute ? mute_hover : unmute_hover}
            className="absolute cursor-pointer opacity-0 transition ease-in-out duration-200 hover:scale-110 hover:opacity-100 bottom-10 left-10 w-14 h-16"
            onClick={toggleMute}
            alt={mute ? "muteIcon" : "unmuteIcon"}
            aria-hidden="true"
          />
        </div>
        <Box
          className="flex flex-col items-center justify-center gap-6 px-2 py-20 md:py-40 bg-[#fff] ease-in-out duration-500 hover:bg-[#E2F6FD]"
          id="rw1"
        >
          <div className="flex justify-center items-center gap-3 mb-3">
            <img
              src={water}
              alt={"Water Bodies"}
              aria-hidden="true"
              className="w-12 sm:w-16"
            />
            <h2 className="text-[#6D6A6A] header font-medium text-[25px] md:text-[28px]">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["WATER BODIES", 2000]}
                  wrapper="h2"
                  speed={20}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h2>
          </div>
          <p
            data-aos="fade-upp"
            data-aos-duration="3000"
            className="text-center text-[#6D6A6A] max-w-5xl text-sm md:text-base mx-auto description"
          >
            VYUG's water bodies, from tranquil lakes to rushing rivers, are
            designed to be the essence of life within this digital universe. The
            crystal-clear waters reflect the surrounding landscapes, creating
            stunning visuals that captivate and calm the senses. Engage in
            activities like boating, fishing, or simply relaxing by the shore.
            The realistic sound of flowing water, the play of light on the
            surface, and the gentle ripple of waves provide a deeply immersive
            experience that connects you with the soothing qualities of nature.
          </p>
        </Box>
        <Box
          className="relative"
          sx={{
            "& button": {
              width: {
                xs: "24px !important",
                sm: "30px !important",
                md: "50px !important",
              },
              height: {
                xs: "24px !important",
                sm: "30px !important",
                md: "50px !important",
              },
            },
            "& button[data-id^='bullet-']": {
              width: {
                xs: "10px !important",
                sm: "13px !important",
                md: "15px !important",
              },
              height: {
                xs: "10px !important",
                sm: "13px !important",
                md: "15px !important",
              },
            },
            "& .rsis-container + button, & .rsis-container + button + button, & .rsis-container + button + button + div":
              {
                zIndex: 3,
              },
            "& .rsis-image": {
              backgroundPosition: "center !important",
            },
            "& .rsis-image + div": {
              backgroundPosition: "center !important",
            },
          }}
        >
          <SimpleImageSlider
            width={"100%"}
            height={height > 768 ? height * 0.35 : height * 0.875}
            images={slideImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            loop={true}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.20)",
              zIndex: 1,
            }}
          />
          <Box className="absolute z-[2] top-[55%] sm:top-1/2 md:top-2/3 left-10 sm:left-20 md:left-36 flex flex-col gap-2 md:gap-2.5">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl text-start header">
              The Essence of Life
            </h3>
          </Box>
        </Box>
        <div
          className="flex flex-col items-center justify-center py-20 md:py-28"
          id="rw3"
        >
          <h3 className="text-[25px] md:text-[28px] text-[#242424] text-center header">
            {animation2Triggered && (
              <TypeAnimation
                sequence={["EXPLORE FURTHER", 2000]}
                wrapper="h3"
                speed={20}
                repeat={0}
                cursor={false}
              />
            )}
          </h3>
          <Explore exploreFurther={exploreFurther} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Water;