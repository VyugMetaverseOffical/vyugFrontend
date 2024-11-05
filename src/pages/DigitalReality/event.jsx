import React, { useEffect, useRef, useState } from "react";
import SideIcon from "../../components/side-icon";
import video from "../../images/sector/Events/events.mp4";
import video1 from "../../images/sector/Events/eventsMobile.mp4";
import unmute from "../../images/unmute.svg";
import mute from "../../images/mute_hover.svg";
import sliderImg1 from "../../images/sector/Events/img1.webp";
import sliderImg2 from "../../images/sector/Events/img2.webp";
import sliderImg3 from "../../images/sector/Events/img3.webp";
import entertainment from "../../images/entertainmentBox.svg";
import tourism from "../../images/tourismBox.svg";
import funpark from "../../images/tradingBox.svg";
import hospitality from "../../images/hospitalityBox.svg";
import {
  Box,
  Divider,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import education from "../../images/educationBox.svg";
import game from "../../images/gameBox.svg";
import event from "../../images/eventIcon.svg";
import corporate from "../../images/corporateBox.svg";
import commercial from "../../images/commercialBox.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Head";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import Explore from "../Core/Explore";
import {
  handleScrollAnimation,
  handleTypeAnimation,
} from "../../lib/animations";
import Starter from "../../components/Starter";
import { Helmet } from "react-helmet-async";
const slideImages = [
  {
    url: sliderImg1,
  },
  {
    url: sliderImg2,
  },
  {
    url: sliderImg3,
  },
];

const exploreFurther = [
  {
    svg: education,
    text: "Education",
    bge: "#30669C",
    url: "/sectors/virtual-reality-in-education",
  },
  {
    svg: entertainment,
    text: "Entertainment",
    bge: "#C95757",
    url: "/sectors/virtual-reality-in-entertainment",
  },
  {
    svg: commercial,
    text: "Commercial",
    bge: "#7FAE7F",
    url: "/sectors/virtual-reality-in-commercial",
  },
  {
    svg: corporate,
    text: "Corporate",
    bge: "#B8B884",
    url: "/sectors/virtual-reality-in-corporate",
  },
  {
    svg: tourism,
    text: "Tourism",
    bge: "#FF6961",
    url: "/sectors/virtual-reality-in-tourism",
  },
  {
    svg: game,
    text: "Sports & Games",
    bge: "#FDFD96",
    url: "/sectors/virtual-reality-in-sports",
  },
  {
    svg: hospitality,
    text: "Hospitality",
    bge: "#C386E5",
    url: "/sectors/virtual-reality-in-hospitality",
  },
  {
    svg: funpark,
    text: "Sustainability",
    bge: "#A2D5C6",
    url: "/sectors/virtual-reality-in-sustainability",
  },
];

const Event = () => {
  const height = window.innerHeight;
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const faqs = [
    {
      question: "What types of events can be hosted in VYUG?",
      answer:
        "VYUG supports a wide range of events, including conferences, weddings, parties, and exhibitions.",
    },
    {
      question: "How do I host an event in VYUG?",
      answer:
        "Events can be hosted by booking a venue and planning through the VYUG events section.",
    },
    {
      question: "Are there tools for event management?",
      answer:
        "Yes, VYUG provides tools for planning, managing, and promoting virtual events.",
    },
    {
      question: "Can I attend public events in VYUG?",
      answer:
        "Yes, users can attend various public events listed in the VYUG event calendar.",
    },
    {
      question: "Is there a cost for hosting events?",
      answer:
        "Hosting costs vary depending on the venue and the type of event.",
    },
    {
      question: "Can I invite non-VYUG users to my event?",
      answer:
        "Yes, non-VYUG users can be invited to events, provided they create a guest account.",
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleAudio = () => {
    const video = videoRef.current;
    if (video.muted) {
      video.muted = !isMuted;
      setIsMuted(false);
    } else {
      video.muted = !isMuted;
      setIsMuted(true);
    }
  };

  const isMobile = useMediaQuery("(max-width: 750px)");


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <title>Virtual Events in Metaverse: VYUG Vitual Event Platform</title>
        <meta name="description" content="Step Into the Virtual Events with the VYUG Metaverse with its immersive expirences and limitless possibilities. Join Now!" />
        <meta name="keywords" content="Vitual Events, Virtual Events Platform, Metavserse Events, Events in Metaverse" />
        <meta property="og:title" content="Virtual Events in Metaverse: VYUG Vitual Event Platform" />
        <meta property="og:description" content="Step Into the Virtual Events with the VYUG Metaverse with its immersive expirences and limitless possibilities. Join Now!" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/sectors/virtual-reality-in-event"
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
            loop
            playsInline
            webkit-playsinline="true"
            muted
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            ref={videoRef}
            onLoadedData={() => setLoading(false)}
          >
            <source src={isMobile ? video1 : video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img
            src={isMuted ? mute : unmute}
            className="absolute bottom-10 left-10 w-14"
            onClick={toggleAudio}
            style={{ cursor: "pointer" }}
            alt="Mute/Unmute Button"
          />
        </div>
        <Box
          className="flex flex-col items-center justify-center gap-2 md:gap-6 px-2 py-20 md:py-40"
          sx={{
            backgroundColor: "#FFFFFF",
            transition: "background-color 0.25s ease-in-out",
            "&:hover": {
              backgroundColor: "#E7D6E7",
            },
          }}
          id="rw1"
        >
          <div className="flex justify-center items-center gap-3 mb-1 md:mb-3">
            <img src={event} className="w-12 sm:w-16" alt="Event" />
            <h1 className="text-[#6D6A6A] font-medium header text-[25px] md:text-[28px]">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["EVENTS", 2000]}
                  wrapper="span"
                  speed={30}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h1>
          </div>
          <p
            data-aos="fade-upp"
            data-aos-duration="3000"
            className="text-center text-[#6D6A6A] max-w-[54rem] text-sm md:text-base description mx-auto"
          >
            From conferences to weddings, VYUG will serve as a versatile
            platform for hosting events of all kinds. Users can create and
            attend virtual gatherings, leveraging immersive experiences to
            connect with attendees and share memorable moments, regardless of
            geographical barriers
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
            autoPlayDelay={4}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              zIndex: 1,
            }}
          />
          <Box className="absolute z-[2] top-[55%] sm:top-1/2 md:top-2/3 left-10 sm:left-20 md:left-36 flex flex-col gap-2 md:gap-2.5">
            <p className="w-3/4 text-white text-lg sm:text-xl md:text-2xl text-start header">
              Join us in a spectacular virtual realm where every event becomes
              an unforgettable experience
            </p>
          </Box>
        </Box>
        <div
          className="flex flex-col items-center justify-center py-20 md:py-28"
          id="rw3"
        >
          {/* <Box className="px"> */}
          <h2 className="text-[25px] md:text-[28px] text-[#242424] text-center header">
            {animation2Triggered && (
              <TypeAnimation
                sequence={["EXPLORE FURTHER", 2000]}
                wrapper="span"
                speed={30}
                repeat={0}
                cursor={false}
              />
            )}
          </h2>
          <Explore exploreFurther={exploreFurther} />
        </div>
        <Grid2
          xs={12}
          container
          className="flex justify-center py-10 text-[#fff] bg-[#222020]"
        >
          <Grid2 xs={11}>
            <Typography
              variant="h2"
              component={"h3"}
              className="header text-2xl sm:text-4xl text-[#fff]"
            >
              FAQ's
            </Typography>
          </Grid2>
          <Grid2
            xs={11}
            container
            className="flex justify-around gap-20 md:gap-32 py-10"
          >
            <Grid2
              xs={11}
              sm={9}
              md={5}
              container
              className="flex flex-col items-center gap-5 justify-center"
            >
              <svg
                width="133"
                height="134"
                viewBox="0 0 133 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M132.903 41.3482C132.495 43.5107 132.2 45.7026 131.662 47.8325C129.782 55.2724 125.893 61.5088 120.189 66.5775C119.275 67.3897 118.873 68.192 118.899 69.4478C118.983 73.6978 118.918 77.9511 118.941 82.2043C118.947 83.5221 118.643 84.6408 117.337 85.1855C116.037 85.727 115.01 85.1725 114.093 84.2462C111.231 81.3563 108.375 78.4632 105.472 75.6189C105.147 75.3026 104.486 75.0677 104.065 75.1656C98.5358 76.4311 92.9387 76.2713 87.3318 76.0854C80.5419 75.857 74.2545 73.9326 68.5828 70.2012C59.1839 64.017 53.3243 55.3637 51.6778 44.1402C49.6717 30.441 53.9951 18.8848 64.2463 9.70635C71.0394 3.62653 79.1678 0.684464 88.2393 0.501809C93.0164 0.407219 97.8196 0.204993 102.545 1.21612C114.349 3.74721 123.08 10.4109 128.745 21.1158C131.02 25.4115 132.278 30.0333 132.722 34.8769C132.744 35.1314 132.845 35.376 132.91 35.6271V41.358L132.903 41.3482ZM113.755 76.5648C113.755 73.8805 113.934 71.5386 113.71 69.239C113.435 66.3948 114.485 64.5389 116.656 62.7091C122.931 57.4219 126.467 50.4842 127.445 42.3332C128.531 33.2983 126.246 25.1049 120.597 17.9846C115.447 11.4938 108.745 7.49817 100.565 6.17392C95.3402 5.32914 90.051 5.33892 84.8427 6.02062C81.6439 6.43812 78.3672 7.29269 75.4504 8.65608C64.9399 13.5584 58.4871 21.866 56.7791 33.4385C54.9609 45.7613 59.1483 55.9835 68.68 63.8703C74.0211 68.2899 80.2762 70.5992 87.2216 70.8536C92.7766 71.0591 98.3543 71.3755 103.78 69.7674C105.617 69.2227 106.995 69.5717 108.288 71.0004C109.957 72.8432 111.765 74.5524 113.755 76.5648Z"
                  fill="white"
                />
                <path
                  d="M45.6982 133.798C42.791 130.973 39.7056 128.305 37.0318 125.272C34.9868 122.953 32.7991 122.056 29.7559 122.278C26.1519 122.539 22.5155 122.353 18.8921 122.336C8.32654 122.284 0.434766 114.345 0.41532 103.699C0.389392 90.5934 0.389392 77.4879 0.41532 64.3823C0.438007 53.7459 8.34598 45.8102 18.9213 45.7776C27.2441 45.7515 35.5669 45.7678 43.8897 45.7808C44.4407 45.7808 45.0241 45.82 45.5394 45.9994C46.6316 46.3777 47.2117 47.2486 47.2053 48.3869C47.202 49.5253 46.6186 50.3961 45.5232 50.7582C44.9657 50.9408 44.337 50.9702 43.7439 50.9735C35.5507 50.9865 27.3575 50.9735 19.1644 50.9832C11.1916 50.9898 5.59115 56.6358 5.58791 64.6694C5.58143 77.602 5.58143 90.5347 5.58791 103.467C5.59115 111.488 11.2045 117.124 19.187 117.131C24.2754 117.137 29.3637 117.157 34.452 117.114C35.8489 117.105 36.8212 117.558 37.7837 118.657C39.6214 120.758 41.6988 122.64 43.8897 124.825C43.8897 123.246 43.8865 121.925 43.8897 120.601C43.8962 118.041 44.781 117.134 47.3057 117.131C56.1017 117.127 64.8977 117.131 73.697 117.131C81.767 117.127 87.3544 111.511 87.3609 103.402C87.3642 97.9355 87.3544 92.4656 87.3706 86.999C87.3706 86.3989 87.4095 85.7661 87.604 85.2116C87.9929 84.1189 88.8744 83.5514 90.0055 83.5808C91.1334 83.6101 91.9793 84.2103 92.3358 85.3192C92.4914 85.802 92.527 86.3402 92.5303 86.8555C92.5432 92.5831 92.5789 98.3139 92.5303 104.041C92.4557 112.832 86.7289 119.978 78.2117 121.893C76.7565 122.219 75.2235 122.317 73.7229 122.323C65.6594 122.366 57.5958 122.346 49.5323 122.349C49.448 122.349 49.3637 122.376 49.0688 122.421C49.0688 123.53 49.0688 124.682 49.0688 125.833C49.0688 127.307 48.9975 128.788 49.0883 130.259C49.1855 131.851 48.6702 133.041 47.2571 133.801H45.7047L45.6982 133.798Z"
                  fill="white"
                />
                <path
                  d="M44.4051 81.1933C53.1168 81.1933 61.8285 81.1933 70.537 81.1933C70.9681 81.1933 71.4056 81.177 71.827 81.239C73.1752 81.438 74.141 82.5274 74.1378 83.7994C74.1378 85.0715 73.172 86.1577 71.8205 86.3566C71.3959 86.4186 70.9616 86.4023 70.5306 86.4023C53.0228 86.4023 35.5151 86.4023 18.0041 86.4023C17.9166 86.4023 17.8323 86.4023 17.7448 86.4023C15.6479 86.3892 14.4001 85.4173 14.4001 83.7962C14.4001 82.1751 15.6479 81.1966 17.7481 81.1966C26.6316 81.1933 35.5151 81.1966 44.3986 81.1966L44.4051 81.1933Z"
                  fill="white"
                />
                <path
                  d="M39.1774 95.7761C46.3756 95.7761 53.5738 95.7695 60.772 95.7793C62.8754 95.7793 64.12 96.9405 63.9093 98.6627C63.7505 99.9478 62.9824 100.678 61.7508 100.917C61.2906 101.005 60.8077 100.985 60.3345 100.985C46.2395 100.985 32.1445 100.985 18.0495 100.985C15.6933 100.985 14.4391 100.098 14.4067 98.4213C14.3743 96.7024 15.6642 95.7761 18.0981 95.7761C25.1246 95.7761 32.151 95.7761 39.1774 95.7761Z"
                  fill="white"
                />
                <path
                  d="M35.7322 71.8188C29.8239 71.8188 23.9156 71.8188 18.0073 71.8188C17.5763 71.8188 17.1388 71.8351 16.7174 71.7731C15.3692 71.5709 14.4034 70.488 14.4066 69.2127C14.4066 67.9406 15.3724 66.8577 16.7207 66.6555C17.1452 66.5935 17.5795 66.6098 18.0106 66.6098C29.9114 66.6098 41.8155 66.6098 53.7164 66.6098C53.8039 66.6098 53.8882 66.6098 53.9757 66.6098C56.0726 66.6229 57.3204 67.5949 57.3204 69.216C57.3204 70.837 56.0726 71.8155 53.9724 71.8155C47.8924 71.8188 41.8123 71.8155 35.7322 71.8155V71.8188Z"
                  fill="white"
                />
                <path
                  d="M90.1773 43.0343C90.1773 42.2971 90.1741 41.56 90.1773 40.8228C90.1935 37.8025 91.2987 36.2499 94.154 35.3693C96.2509 34.7202 97.6802 33.4286 98.2862 31.2856C99.2131 28.0043 97.1811 24.7361 93.7942 24.0381C90.6213 23.3858 87.5165 25.6396 87.066 28.9241C87.0141 29.309 86.9558 29.6972 86.878 30.0788C86.5798 31.5694 85.5751 32.3718 84.1523 32.2674C82.8041 32.1663 81.8545 31.0866 81.8318 29.6319C81.7281 23.4575 87.5683 18.0692 93.6419 18.7443C98.3413 19.263 102.143 22.4692 103.323 26.9084C104.476 31.2399 102.924 35.777 99.2423 38.5657C98.4288 39.1822 97.4825 39.6943 96.5199 40.0042C95.5508 40.314 95.2754 40.7935 95.3305 41.7655C95.4147 43.1908 95.3791 44.6293 95.3434 46.0579C95.298 47.9268 94.1929 49.1467 92.6631 49.0913C91.1593 49.0326 90.2032 47.8681 90.1773 46.0318C90.1611 45.0337 90.1773 44.0356 90.1773 43.0375V43.0343Z"
                  fill="white"
                />
              </svg>
              <Typography
                variant="subtitle2"
                component={"h6"}
                className="description text-xs sm:text-sm text-[#fff]"
              >
                You can ask anything you want to know
              </Typography>
              <TextField
                type={"search"}
                id={"searchText"}
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                  },
                }}
                InputProps={{
                  style: {
                    color: "#fff",
                    borderRadius: "20px",
                    border: "1px solid #fff",
                  },
                }}
              />
              <Link to={"/"} className="no-underline">
                <Typography
                  variant="subtitle2"
                  component={"h6"}
                  className="description text-xs sm:text-sm text-[#fff]"
                >
                  SUBMIT
                </Typography>
              </Link>
            </Grid2>
            <Grid2
              xs={11}
              sm={9}
              md={5}
              container
              className="flex flex-col gap-5 justify-center"
            >
              {faqs.map((faq, index) => (
                <div key={index}>
                  <Typography
                    variant="subtitle2"
                    component={"h6"}
                    className="description text-xs sm:text-sm cursor-pointer text-[#fff]"
                    onClick={() => handleToggle(index)}
                  >
                    {faq.question}{" "}
                  </Typography>
                  {expandedIndex === index && (
                    <Typography
                      variant="subtitle2"
                      component={"p"}
                      className="description faq-transition font-semibold bg-[#fff] text-[#000000] rounded-xl p-5 mt-2 text-xs sm:text-sm"
                    >
                      {faq.answer}
                    </Typography>
                  )}
                  {/* </Typography> */}
                  <Divider
                    sx={{ height: 1.2, backgroundColor: "white", mt: 2 }}
                    orientation="horizontal"
                  />
                </div>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
        <Footer />
      </div>
    </>
  );
};

export default Event;
