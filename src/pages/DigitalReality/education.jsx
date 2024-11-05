import React, { useEffect, useRef, useState } from "react";
import SideIcon from "../../components/side-icon";
import video from "../../images/sector/Education/education.mp4";
import video1 from "../../images/sector/Education/educationMobile.mp4";
import unmute from "../../images/unmute.svg";
import mute from "../../images/mute_hover.svg";
import sliderImg1 from "../../images/sector/Education/img1.webp";
import sliderImg2 from "../../images/sector/Education/img2.webp";
import sliderImg3 from "../../images/sector/Education/img3.webp";
import event from "../../images/eventBox.svg";
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
import entertainment from "../../images/entertainmentBox.svg";
import game from "../../images/gameBox.svg";
import corporate from "../../images/corporateBox.svg";
import commercial from "../../images/commercialBox.svg";
import { Helmet } from "react-helmet-async";
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

const initialCategories = [
  {
    svg: entertainment,
    text: "ENTERTAINMENT",
    bge: "#C95757",
    url: "/sectors/virtual-reality-in-entertainment",
  },
  {
    svg: commercial,
    text: "COMMERCIAL",
    bge: "#7FAE7F",
    url: "/sectors/virtual-reality-in-commercial",
  },
  {
    svg: corporate,
    text: "CORPORATE",
    bge: "#B8B884",
    url: "/sectors/virtual-reality-in-corporate",
  },
  {
    svg: event,
    text: "EVENTs",
    bge: "#CBAACB",
    url: "/sectors/virtual-reality-in-event",
  },
  {
    svg: tourism,
    text: "TOURISM",
    bge: "#FF6961",
    url: "/sectors/virtual-reality-in-tourism",
  },
  {
    svg: game,
    text: "SPORTS & GAMES",
    bge: "#FDFD96",
    url: "/sectors/virtual-reality-in-sports",
  },
  {
    svg: hospitality,
    text: "HOSPITALITY",
    bge: "#C386E5",
    url: "/sectors/virtual-reality-in-hospitality",
  },
  {
    svg: funpark,
    text: "SUSTAINABILITY",
    bge: "#A2D5C6",
    url: "/sectors/virtual-reality-in-sustainability",
  },
];

const Education = () => {
  const height = window.innerHeight;
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const faqs = [
    {
      question: "What educational programs are available in VYUG?",
      answer:
        "VYUG offers virtual schools, colleges, and universities with a range of courses and degrees.",
    },
    {
      question: "Can I earn a real degree in VYUG?",
      answer:
        "Yes, accredited institutions in VYUG provide real degrees and certifications.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "Enrollment can be done through the VYUG education portal by selecting your desired course and completing the registration process.",
    },
    {
      question: "Are there any interactive learning tools?",
      answer:
        "Yes, VYUG includes virtual classrooms, labs, and interactive tools for an immersive learning experience.",
    },
    {
      question: "Is there a cost to attend classes in VYUG?",
      answer:
        "Tuition fees vary by institution and program; some courses may also offer scholarships or financial aid.",
    },
    {
      question: "Can I interact with other students and teachers?",
      answer:
        "Yes, VYUG provides features for live interactions, discussions, and collaborative projects.",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 750px)");

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
        <title>Virtual Reality in Education - VYUG Metaverse</title>
        <meta
          name="description"
          content="Virtual reality can benefit and effect understudies of any age through each education Phase to support commitment and further develop information maintenance."
        />
        <meta
          name="keywords"
          content="Virtual Reality in Education, Virtual Reality Classroom, Education in Metaverse, Higher or Further VR Education"
        />
        <meta
          property="og:title"
          content="Virtual Reality in Education - VYUG Metaverse"
        />
        <meta
          property="og:description"
          content="Virtual reality can benefit and effect understudies of any age through each education Phase to support commitment and further develop information maintenance."
        />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/sectors/virtual-reality-in-education"
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
            muted
            playsInline
            webkit-playsinline="true"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            ref={videoRef}
            onLoadedData={() => {
              setLoading(false);
            }}
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
          className="flex flex-col items-center justify-center gap-2 md:gap-6 px-3 py-20 md:py-40"
          sx={{
            backgroundColor: "#FFFFFF",
            transition: "background-color 0.25s ease-in-out",
            "&:hover": {
              backgroundColor: "#C8E3FF",
            },
          }}
          id="rw1"
        >
          <div className="flex justify-center items-center gap-3 mb-1 md:mb-3">
            <svg
              width="91"
              height="91"
              viewBox="0 0 91 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 sm:w-16"
            >
              <path
                d="M90.7344 45.3698C90.7344 70.4271 70.4219 90.7344 45.3646 90.7344C20.3073 90.7344 0 70.4271 0 45.3698C0 20.3125 20.3073 0 45.3646 0C70.4219 0 90.7344 20.3125 90.7344 45.3698Z"
                fill="#30669C"
              />
              <path
                d="M87.0729 45.3704C87.0729 68.4017 68.401 87.0736 45.3646 87.0736C22.3281 87.0736 3.65625 68.4017 3.65625 45.3704C3.65625 22.334 22.3281 3.66211 45.3646 3.66211C68.401 3.66211 87.0729 22.334 87.0729 45.3704Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeMiterlimit="10"
              />
              <path
                d="M67.4997 27.8699C66.1338 28.4173 64.8488 28.9102 63.5867 29.4629C63.4195 29.5368 63.2963 29.9047 63.2945 30.1388C63.2752 33.2351 63.2435 36.3331 63.2998 39.4294C63.3262 40.8551 62.6925 41.8092 61.5536 42.5203C60.0046 43.4867 58.262 43.8317 56.4877 44.0218C53.1292 44.3791 49.7689 44.409 46.479 43.543C45.4211 43.2649 44.4037 42.728 43.4602 42.1542C42.5731 41.6156 42.177 40.7214 42.1876 39.6318C42.2157 36.4915 42.1876 33.3495 42.2087 30.2093C42.2122 29.7234 42.0908 29.4805 41.6085 29.301C39.9873 28.6937 38.3925 28.0178 36.7801 27.3841C36.2679 27.1834 35.8807 26.9018 35.8789 26.3068C35.8789 25.7119 36.2662 25.432 36.7766 25.2278C41.8866 23.1895 46.9895 21.1317 52.1082 19.1128C52.4744 18.9684 52.9954 18.9596 53.3598 19.104C58.4803 21.1212 63.5814 23.1842 68.6967 25.2172C69.3691 25.4848 69.6208 25.9213 69.6155 26.6289C69.5944 29.528 69.6138 32.4272 69.5997 35.328C69.5979 35.7557 69.6701 36.011 70.1101 36.2433C71.1082 36.7714 71.6609 37.6762 71.6996 38.808C71.7472 40.2338 71.7243 41.6631 71.7084 43.0906C71.6996 43.8229 71.2913 44.2172 70.5467 44.226C69.2071 44.2401 67.8676 44.2418 66.5281 44.226C65.7958 44.2172 65.4033 43.8071 65.3945 43.0625C65.3804 41.6789 65.3646 40.2936 65.398 38.9118C65.4279 37.6973 66.0194 36.7996 67.0649 36.1747C67.2515 36.0638 67.4786 35.8156 67.4803 35.629C67.5085 33.082 67.498 30.5349 67.498 27.8717L67.4997 27.8699ZM44.3069 30.3941C44.3069 33.2175 44.3069 35.9388 44.3069 38.6601C44.3069 40.3834 44.4741 40.6263 46.0882 41.2459C46.3136 41.3322 46.5424 41.4131 46.7747 41.4695C50.2618 42.3232 53.7805 42.3267 57.2956 41.7493C58.3148 41.5821 59.3076 41.1685 60.2704 40.7654C60.9059 40.4996 61.2122 39.9785 61.1963 39.19C61.1418 36.5126 61.1752 33.8318 61.1734 31.1527C61.1734 30.9257 61.1541 30.7004 61.14 30.4117C58.6193 31.4203 56.1726 32.3779 53.747 33.3865C53.0464 33.6787 52.4427 33.6752 51.7386 33.3812C49.3148 32.3691 46.8663 31.4168 44.3069 30.3923V30.3941ZM62.7436 27.495C62.7383 27.4492 62.733 27.4052 62.7277 27.3594C60.7791 27.3594 58.8306 27.3594 56.8838 27.3594C55.5231 27.3594 54.1624 27.37 52.8018 27.3524C52.1311 27.3436 51.6893 26.8965 51.6928 26.298C51.6964 25.6995 52.1364 25.2859 52.8123 25.2524C52.9884 25.2436 53.1626 25.2507 53.3386 25.2507C56.28 25.2507 59.2213 25.2507 62.1627 25.2507C62.3563 25.2507 62.5499 25.2313 62.7436 25.2225C59.5065 23.8214 56.2747 22.5206 53.0341 21.2462C52.8247 21.1634 52.5149 21.2215 52.2913 21.3113C48.3396 22.8779 44.3931 24.4568 40.4467 26.0375C40.2795 26.1044 40.1246 26.1994 39.8782 26.3262C40.2038 26.4705 40.4185 26.5726 40.6386 26.6606C44.4019 28.1656 48.1706 29.6583 51.9269 31.1827C52.492 31.4115 52.9655 31.4344 53.5446 31.1967C56.6004 29.9382 59.6755 28.7254 62.7453 27.4985L62.7436 27.495ZM69.6085 42.0961C69.6085 41.1051 69.6085 40.188 69.6085 39.2709C69.6085 39.1618 69.6138 39.0509 69.6032 38.9435C69.5504 38.3503 69.1561 37.9244 68.6104 37.9138C68.0295 37.9015 67.5772 38.206 67.5402 38.7657C67.4698 39.8677 67.5191 40.9766 67.5191 42.0961H69.6085Z"
                fill="white"
              />
              <path
                d="M61.0948 50.5571C62.1087 50.5571 63.1173 50.55 64.1259 50.5588C65.0659 50.5676 65.5112 51.0781 65.3598 51.9899C65.0342 53.9596 64.7015 55.9275 64.3583 57.8937C64.2157 58.7175 63.8936 58.9815 63.075 58.9903C62.4202 58.9974 61.7654 58.9903 61.1018 58.9903C60.6459 61.4001 59.4314 63.2184 57.3261 64.3995C56.2735 64.991 55.1346 65.2972 53.9306 65.3096C52.0419 65.3272 50.1549 65.336 48.2662 65.3096C46.5676 65.2849 45.17 64.5931 44.0997 63.2659C42.938 61.8243 41.4488 61.8173 40.2976 63.2624C39.3911 64.3995 38.217 65.1811 36.786 65.2427C34.4009 65.343 31.9858 65.4398 29.6201 65.1934C26.3372 64.8501 24.0577 62.539 23.3572 59.3072C23.3396 59.2244 23.3184 59.1417 23.2832 58.9921C22.6055 58.9921 21.9314 59.0009 21.2554 58.9903C20.5162 58.9798 20.1694 58.6964 20.0426 57.9676C19.6959 55.9803 19.3597 53.9895 19.0305 51.9987C18.8774 51.0693 19.3034 50.5694 20.2468 50.5606C21.2554 50.5518 22.2641 50.5588 23.3026 50.5588C23.6617 49.1471 24.3834 48.0065 25.5979 47.2109C26.464 46.6441 27.4163 46.3431 28.453 46.3431C37.608 46.3395 46.763 46.3343 55.9197 46.3466C58.2538 46.3501 60.1988 47.8111 60.9205 50.0272C60.9733 50.1927 61.0279 50.3564 61.093 50.5588L61.0948 50.5571ZM42.1828 48.4483C37.6819 48.4483 33.1793 48.4448 28.6783 48.4483C26.6646 48.4501 25.3374 49.779 25.3321 51.791C25.3251 53.7888 25.3233 55.7885 25.3321 57.7863C25.3462 60.916 27.6116 63.1885 30.7343 63.2061C32.447 63.2166 34.1597 63.1955 35.8724 63.2114C37.0799 63.2219 38.0217 62.7502 38.775 61.8085C40.6849 59.4233 43.7143 59.4321 45.6399 61.8296C46.3968 62.7731 47.3456 63.2254 48.5514 63.2114C50.2412 63.192 51.9328 63.2114 53.6244 63.2061C56.7893 63.192 59.0512 60.9266 59.0652 57.7564C59.074 55.8026 59.0705 53.8469 59.0652 51.8931C59.0617 49.7438 57.7679 48.4465 55.6222 48.4465C51.1424 48.4448 46.6626 48.4465 42.1828 48.4465V48.4483ZM21.3083 52.6852C21.5494 54.118 21.78 55.491 22.0071 56.8428H23.1741V52.6852H21.3083ZM63.0803 52.7204H61.2092V56.8587H62.3868C62.6174 55.484 62.8445 54.1268 63.0786 52.7204H63.0803Z"
                fill="white"
              />
              <path
                d="M29.5381 50.5352C29.5504 51.1038 29.0804 51.5949 28.5119 51.6072C27.9416 51.6195 27.454 51.1513 27.4416 50.5792C27.4293 50.0072 27.894 49.5213 28.4679 49.509C29.0382 49.4967 29.5258 49.9632 29.5381 50.5352Z"
                fill="white"
              />
              <path
                d="M31.6217 51.6075C31.0496 51.5899 30.5867 51.097 30.6061 50.5267C30.6237 49.9529 31.1148 49.4917 31.6851 49.5093C32.2572 49.5269 32.7201 50.0197 32.7025 50.5901C32.6849 51.1604 32.1903 51.6268 31.6217 51.6075Z"
                fill="white"
              />
              <path
                d="M35.8679 50.5719C35.859 51.1422 35.3732 51.6157 34.8029 51.6052C34.2308 51.5964 33.7609 51.1123 33.7697 50.5402C33.7785 49.9664 34.2608 49.4982 34.8328 49.507C35.4049 49.5158 35.8749 49.9998 35.8661 50.5701L35.8679 50.5719Z"
                fill="white"
              />
            </svg>
            <h1 className="text-[#6D6A6A] font-medium header text-[25px] md:text-[28px]">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["EDUCATION", 2000]}
                  wrapper="span"
                  speed={30}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h1>
          </div>
          <div data-aos="fade-upp" data-aos-duration="3000">
            <p className="text-center text-[#6D6A6A] max-w-[54rem] text-sm md:text-base description mx-auto">
              In the VYUG metaverse, education will be redefined. Virtual
              classrooms will facilitate immersive learning experiences,
              allowing students to engage with interactive content and
              collaborate with peers from around the globe. From language
              learning to advanced science simulations, VYUG will empower
              educators to create engaging curricula that cater to diverse
              learning styles
            </p>
          </div>
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
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              zIndex: 1,
            }}
          />
          <Box className="absolute z-[2] top-[55%] sm:top-1/2 md:top-2/3 left-10 sm:left-20 md:left-36 flex flex-col gap-2 md:gap-2.5">
            <p className="w-3/4 text-white text-lg sm:text-xl md:text-2xl text-start header">
              Empowering minds in a limitless virtual classroom where knowledge
              knows no boundaries
            </p>
          </Box>
        </Box>
        <div
          className="flex flex-col items-center justify-center py-20 md:py-28"
          id="rw3"
        >
          <h2 className="text-[25px] md:text-[28px] text-center header text-[#242424]">
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
          <Explore exploreFurther={initialCategories} />
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

export default Education;
