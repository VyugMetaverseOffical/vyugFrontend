import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Head";
import SideIcon from "../../components/side-icon";
import sectors from "../../images/sector.svg";
import sectorGray from "../../images/sectorGray.svg";
import Footer from "../../components/Footer";
import entertainment from "../../images/entertainmentBox.svg";
import game from "../../images/gameBox.svg";
import corporate from "../../images/corporateBox.svg";
import commercial from "../../images/commercialBox.svg";
import event from "../../images/eventBox.svg";
import tourism from "../../images/tourismBox.svg";
import funpark from "../../images/tradingBox.svg";
import hospitality from "../../images/hospitalityBox.svg";
import education from "../../images/educationBox.svg";
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import {
  handleScrollAnimation,
  handleTypeAnimation,
} from "../../lib/animations";
import { Helmet } from "react-helmet-async";

const categories = [
  { src: education, title: "EDUCATION", bgColor: "#30669C" },
  { src: entertainment, title: "ENTERTAINMENT", bgColor: "#C95757" },
  { src: commercial, title: "COMMERCIAL", bgColor: "#7FAE7F" },
  { src: corporate, title: "CORPORATE", bgColor: "#B8B884" },
  { src: event, title: "EVENTS", bgColor: "#CBAACB" },
  { src: tourism, title: "TOURISM", bgColor: "#FF6961" },
  { src: game, title: "SPORTS & GAMES", bgColor: "#FDFD96" },
  { src: hospitality, title: "HOSPITALITY", bgColor: "#C386E5" },
  { src: funpark, title: "SUSTAINABILITY", bgColor: "#A2D5C6" },
];

function Sectors() {
  const [position, setPosition] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [img, setImg] = useState(-1);
  const navigate = useNavigate();

  const pageHandler = (title, index) => {
    if (title === "EDUCATION") {
      navigate("/sectors/virtual-reality-in-education");
    }
    if (title === "ENTERTAINMENT") {
      navigate("/sectors/virtual-reality-in-entertainment");
    }
    if (title === "CORPORATE") {
      navigate("/sectors/virtual-reality-in-corporate");
    }
    if (title === "SPORTS & GAMES") {
      navigate("/sectors/virtual-reality-in-sports");
    }
    if (title === "COMMERCIAL") {
      navigate("/sectors/virtual-reality-in-commercial");
    }
    if (title === "EVENTS") {
      navigate("/sectors/virtual-reality-in-event");
    }
    if (title === "TOURISM") {
      navigate("/sectors/virtual-reality-in-tourism");
    }
    if (title === "SUSTAINABILITY") {
      navigate("/sectors/virtual-reality-in-sustainability");
    }
    if (title === "HOSPITALITY") {
      navigate("/sectors/virtual-reality-in-hospitality");
    }
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
    const handleScroll = () => {
      handleScrollAnimation("rw1", null, "rwt1");
      handleTypeAnimation("rw1", setAnimationTriggered);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sectors - VYUG Metaverse</title>
        <meta name="description" content="Digital Reality" />
        <meta name="keywords" content="Digital Reality" />
        <meta property="og:title" content="Digital Reality" />
        <meta property="og:description" content="Digital Reality" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/sectors" />
      </Helmet>
      <div className="min-h-screen">
        <Header isTransparent={position} isHeaderText={true} />
        <SideIcon />
        <div className="flex flex-col my-36 md:my-40 justify-center items-center">
          <div
            className="mb-8"
            onMouseEnter={() => setImg(1)}
            onMouseLeave={() => setImg(-1)}
          >
            {img === 1 ? (
              <img
                className="transition w-16 md:w-28 tarnsform-transition duration-150 ease-in-out hover:scale-125"
                src={sectors}
                alt="Sectors in Metaverse"
              />
            ) : (
              <img
                className="transition w-16 md:w-28 tarnsform-transition duration-200 ease-in-out hover:scale-110"
                src={sectorGray}
                alt="Sectors in Metaverse"
              />
            )}
          </div>
          <div className="flex flex-col justify-start items-stretch gap-5 px-6">
            <h1 className="header text-[25px] text-center md:text-[28px] text-[#242424] font-normal text-center">
              <TypeAnimation
                sequence={[
                  " Integrating Sectors into the Hyper-Realistic Metaverse",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                repeat={0}
                cursor={false}
                className="custom-text1"
              />
            </h1>
            <div className="animate-slide-from-bottom">
              <p className="max-w-[825px] mx-auto description text-[14px] md:text-[16px] text-[#6D6A6A] font-normal text-center">
                At VYUG, we envision a metaverse that transcends traditional
                boundaries, creating a seamless blend of reality and virtuality
                across various sectors. By integrating diverse industries into
                our hyper-realistic virtual environment, we aim to enhance
                everyday experiences, foster innovation, and create new
                opportunities for individuals and businesses alike. Here's a
                glimpse of the sectors we will integrate within the VYUG
                metaverse
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center max-w-2xl mx-auto gap-5 mt-16">
              {categories.map((category, index) => (
                <Box
                  key={index}
                  className="w-[10rem] md:w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-3xl p-3 sm:p-6 cursor-pointer transition duration-500 ease-in-out group group-hover"
                  sx={{
                    border: "3px solid #242424",
                    "&:hover": {
                      backgroundColor: category.bgColor,
                    },
                    "&:hover > p:last-child": {
                      color:
                        category.title === "SPORTS & GAMES" &&
                        "#000000 !important",
                    },
                  }}
                  onClick={() => pageHandler(category.title, index)}
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
                      id={category.title}
                      src={category.src}
                      alt={category.title}
                    />
                  </Box>
                  <p
                    className="text-center header text-sm md:text-base mt-4 text-[#242424] transition duration-500 group-hover:text-[#fff]"
                    style={{
                      opacity: 1,
                    }}
                  >
                    {category.title}
                  </p>
                </Box>
              ))}
            </div>
          </div>
          <div
            id="rw1"
            className="flex flex-col justify-start items-stretch gap-4 mt-[5rem] md:mt-[8rem] px-4"
          >
            <h2 className="header text-[25px] text-center md:text-[28px] text-[#242424] font-bold text-center">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["A Day in VYUG", 2000]}
                  wrapper="span"
                  speed={30}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h2>
            <p
              id="rwt1"
              className="max-w-[825px] mx-auto description text-[14px] md:text-[16px] text-[#6D6A6A] font-normal text-center hidden-text"
            >
              Imagine a typical day in VYUG: you start your morning with an
              interactive virtual yoga session, attend a lecture in a
              breathtaking virtual classroom, enjoy lunch at a virtual café with
              friends, and spend your afternoon exploring a digital art
              exhibition. Later, you participate in a corporate meeting, wrap up
              your day with a live concert, and wind down with a virtual game
              night with friends—all from the comfort of your home.
              <br />
              <br />
              At VYUG, we are dedicated to creating a comprehensive ecosystem
              that enhances daily life and connects people across the globe.
              Join us as we build a vibrant metaverse where every sector
              thrives, and every individual can find their place.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Sectors;
