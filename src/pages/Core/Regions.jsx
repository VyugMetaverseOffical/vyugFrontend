import React, { useEffect, useState } from "react";
import Header from "../../components/Head";
import SideIcon from "../../components/side-icon";
import core from "../../images/Core/core.svg";
import { Box, Typography } from "@mui/material";
import desert from "../../images/Core/desertBox.svg";
import forest from "../../images/Core/forestBox.svg";
import water from "../../images/Core/waterBox.svg";
import land from "../../images/Core/landBox.svg";
import mountain from "../../images/Core/mountainBox.svg";
import island from "../../images/Core/islandBox.svg";
import Footer from "../../components/Footer";
import { TypeAnimation } from "react-type-animation";
import {
  handleScrollAnimation,
  handleTypeAnimation,
} from "../../lib/animations";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Regions = () => {
  const [position, setPosition] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const exploreFurther = [
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
      svg: land,
      text: "Plains",
      url: "/regions/virtual-reality-in-plains",
      bge: "#D53442",
    },
  ];

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
    const handleScroll = () => {
      handleScrollAnimation("rw1", null, "rwt1");
      handleTypeAnimation("rw1", setAnimationTriggered);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Regions - VYUG Metaverse</title>
        <meta name="description" content="Regions" />
        <meta name="keywords" content="Regions" />
        <meta property="og:title" content="Regions" />
        <meta property="og:description" content="Regions" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/regions" />
      </Helmet>

      <div className="min-h-screen">
        <Header isTransparent={position} isHeaderText={true} />
        <SideIcon />
        <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto flex flex-col mt-40 justify-center gap-2 items-center">
          <img
            className="transition w-16 md:w-20 duration-500 ease-in-out contrast-[100%] brightness-0 hover:brightness-[1] hover:contrast-[1] hover:scale-110 pb-5"
            src={core}
            alt={"Core elements"}
            aria-hidden="true"
          />
          <Typography
            variant="h1"
            component={"div"}
            id="rd1"
            className="description text-[#242424] text-center text-[25px] md:text-[28px]"
          >
            <TypeAnimation
              sequence={["Core Elements : ", 1000]}
              wrapper="h2"
              speed={30}
              repeat={0}
              cursor={false}
              className="custom-text"
            />
          </Typography>
          <div className="animate-slide-from-bottom">
            <Typography
              variant="subtitle1"
              component={"p"}
              className="description text-[14px] md:text-base text-[#6D6A6A] text-center py-4"
            >
              In VYUG, we have meticulously designed a digital landscape that
              mirrors the beauty and diversity of our planet. Each core
              element—forests, mountains, water bodies, plains, deserts, and
              islands—plays a crucial role in crafting a hyper-realistic
              experience that transports users into a vibrant virtual world. As
              you explore these elements through virtual reality (VR), you'll be
              immersed in an experience that feels both familiar and
              extraordinary.
            </Typography>
          </div>
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[65%] mx-auto my-16">
          <div className="flex flex-wrap justify-center items-center max-w-2xl mx-auto gap-5 mt-16">
            {exploreFurther.map((category, index) => (
              <Box
                key={index}
                className="w-[10rem] md:w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-3xl p-3 sm:p-6 cursor-pointer transition duration-500 ease-in-out group group-hover"
                sx={{
                  border: "3px solid #242424",
                  "&:hover": {
                    backgroundColor: category.bge,
                  },
                  "&:hover > div:last-child": {
                    color:
                      category.text === "SPORTS & GAMES" &&
                      "#000000 !important",
                  },
                }}
                onClick={() => navigate(category.url)}
              >
                <Box
                  className="flex justify-center w-full"
                  sx={{
                    "& img": {
                      opacity: 1,
                      filter: "brightness(0) contrast(100%)",
                    },
                    "& img:hover": {
                      filter: "brightness(1) contrast(1)",
                    },
                  }}
                >
                  <img
                    className="h-20 contrast-[100%] transition duration-500 group-hover:scale-110 brightness-0 group-hover:contrast-[1] group-hover:brightness-[1]"
                    src={category.svg}
                    alt={category.text}
                    aria-hidden="true"
                  />
                </Box>
                <div
                  className="text-center header text-sm sm:text-base mt-4 text-[#242424] transition duration-500 group-hover:text-[#fff] uppercase"
                  style={{
                    opacity: 1,
                  }}
                >
                  <p>{category.text}</p>
                </div>
              </Box>
            ))}
          </div>
        </div>
        <div
          id="rw1"
          className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto flex flex-col my-28 justify-center gap-2 items-center"
        >
          <Typography
            variant="h1"
            component={"div"}
            className="header uppercase text-[#242424] text-center text-[25px] md:text-[28px]"
          >
            {animationTriggered && (
              <TypeAnimation
                sequence={["Hyper-Realistic Experience", 2000]}
                wrapper="h2"
                speed={30}
                repeat={0}
                cursor={false}
              />
            )}
          </Typography>
          <Typography
            id="rwt1"
            variant="subtitle1"
            component={"p"}
            className="description text-[14px] md:text-base text-[#6D6A6A] text-center py-4 hidden-text"
          >
            In VYUG, every core element has been meticulously crafted to provide
            an unparalleled hyper-realistic experience. When you don your VR
            headset, you're not just entering a digital space; you're stepping
            into a world that feels as tangible and immersive as the physical
            one. The attention to detail, the realistic sounds, and the seamless
            interactions create an environment where your senses are fully
            engaged, allowing you to lose yourself in the wonders of VYUG.
            <br />
            <br />
            From the rustling leaves of the forests to the bustling cities on
            the plains, every element of VYUG is designed to offer a truly
            immersive and transformative experience. This is not just a virtual
            space; it's a new world, where the beauty and complexity of nature
            and civilization cometo life in extraordinary ways.
          </Typography>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Regions;
