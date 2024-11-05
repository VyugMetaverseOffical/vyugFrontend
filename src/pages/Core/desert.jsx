import { useEffect } from "react";
import SideIcon from "../../components/side-icon";
import video from "../../images/Core/Desert/desert.mp4";
import muteIcon from "../../images/mute.svg";
import unmute from "../../images/unmute.svg";
import mute_hover from "../../images/mute_hover.svg";
import unmute_hover from "../../images/unmute_hover.svg";
import desert from "../../images/Core/Desert/desertIcon.svg";
import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import forest from "../../images/Core/forestBox.svg";
import water from "../../images/Core/waterBox.svg";
import land from "../../images/Core/landBox.svg";
import mountain from "../../images/Core/mountainBox.svg";
import Starter from "../../components/Starter";
import island from "../../images/Core/islandBox.svg";
import { useState, useRef } from "react";
import Footer from "../../components/Footer";
import desertImg1 from "../../images/Core/Desert/desert_img1.webp";
import desertImg2 from "../../images/Core/Desert/desert_img2.webp";
import desertImg3 from "../../images/Core/Desert/desert_img3.webp";
import Header from "../../components/Head";
import { TypeAnimation } from "react-type-animation";
import {
  handleScrollAnimation,
  handleTypeAnimation,
} from "../../lib/animations";
import Explore from "./Explore";
import { Helmet } from "react-helmet-async";

const slideImages = [
  {
    url: desertImg1,
  },
  {
    url: desertImg2,
  },
  {
    url: desertImg3,
  },
];

const exploreFurther = [
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
    svg: water,
    text: "Water Bodies",
    url: "/regions/virtual-reality-in-water-body",
    bge: "#88BCE5",
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

const Desert = () => {
  const height = window.innerHeight;
  const [mute, setMute] = useState(true);
  const [loading, setLoading] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);

  const videoRef = useRef(null);

  const toggleMute = () => {
    setMute(!mute);
  };
  const [position, setPosition] = useState(false);
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
  }, []);

  useEffect(() => {
    handleScrollAnimation("rd2", null, "rdt2");
    const handleScroll = () => {
      handleScrollAnimation("rd1", null, "rdt1");
      handleTypeAnimation("rd1", setAnimationTriggered);
      handleTypeAnimation("rd3", setAnimation2Triggered);

      handleScrollAnimation("rd3", null, "rdt3");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Desert - VYUG Metaverse</title>
        <meta name="description" content="Desert" />
        <meta name="keywords" content="Desert" />
        <meta property="og:title" content="Desert" />
        <meta property="og:description" content="Desert" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/regions/virtual-reality-in-desert"
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
            className="absolute opacity-100 transition ease-in-out duration-200 hover:scale-110 hover:opacity-0 bottom-10 left-10 w-14 h-16"
            onClick={toggleMute}
            style={{ cursor: "pointer" }}
            alt={mute ? "muteIcon" : "unmuteIcon"}
            aria-hidden="true"
          />
          <img
            src={mute ? mute_hover : unmute_hover}
            className="absolute opacity-0 transition ease-in-out duration-200 hover:scale-110 hover:opacity-100 bottom-10 left-10 w-14 h-16"
            onClick={toggleMute}
            alt={mute ? "muteIcon" : "unmuteIcon"}
            aria-hidden="true"
            style={{ cursor: "pointer" }}
          />
        </div>
        <Box
          className="flex flex-col items-center justify-center gap-6 px-2 py-20 md:py-40 bg-[#fff] ease-in-out duration-500 hover:bg-[#FDE8D6]"
          id="rd1"
        >
          <div className="flex justify-center items-center gap-3 mb-3">
            <img
              src={desert}
              className="w-12 sm:w-16"
              alt={"Desert"}
              aria-hidden="true"
            />
            <h2 className="text-[#6D6A6A] font-medium description text-[25px] md:text-[28px]">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["DESERTS", 2000]}
                  wrapper="h2"
                  speed={20}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h2>
          </div>
          <p
            className="text-center text-[#6D6A6A] max-w-5xl text-sm md:text-base mx-auto description hidden-text"
            id="rdt1"
          >
            The deserts of VYUG are vast and mesmerizing, capturing the stark
            beauty and profound silence of these arid landscapes. Wander through
            endless dunes, feel the heat of the sun, and experience the
            stillness that only a desert can offer. The hyper-realistic
            rendering ensures that every grain of sand, every shifting shadow,
            and every distant mirage adds to the authenticity of your
            experience. The deserts in VYUG are places of reflection and
            adventure, where the timeless allure of the sand meets the boundless
            possibilities of the digital world.
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
            {/* <h3 className="text-2xl sm:text-3xl text-white header">
            Environmental Awareness
          </h3> */}
            <h3 className="text-white text-lg sm:text-xl md:text-2xl text-start header">
              The Sands Of Time
            </h3>
          </Box>
        </Box>
        <div
          className="flex flex-col items-center justify-center py-20 md:py-28"
          id="rd3"
        >
          <h3 className="text-[#242424] header text-center text-[25px] md:text-[28px]">
            {animation2Triggered && (
              <TypeAnimation
                sequence={["EXPLORE FURTHER", 2000]}
                wrapper="h3"
                speed={40}
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

export default Desert;
