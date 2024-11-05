import React, { useEffect, useRef, useState } from "react";
import SideIcon from "../../components/side-icon";
import video from "../../images/sector/Sports/sports_games.mp4";
import video1 from "../../images/sector/Sports/sportsMobile.mp4";
import unmute from "../../images/unmute.svg";
import mute from "../../images/mute_hover.svg";
import sliderImg1 from "../../images/sector/Sports/img1.webp";
import sliderImg2 from "../../images/sector/Sports/img2.webp";
import sliderImg3 from "../../images/sector/Sports/img3.webp";
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
import education from "../../images/educationBox.svg";
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
    svg: event,
    text: "Events",
    bge: "#CBAACB",
    url: "/sectors/virtual-reality-in-event",
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

const Game = () => {
  const height = window.innerHeight;
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  const faqs = [
    {
      question: "What sports activities are available in VYUG?",
      answer:
        "VYUG offers virtual sports like soccer, basketball, and individual fitness activities.",
    },
    {
      question: "Can users compete in virtual sports tournaments?",
      answer: "Yes, VYUG hosts various sports tournaments and competitions.",
    },
    {
      question: "Are there fitness programs in VYUG?",
      answer:
        "Yes, VYUG provides virtual fitness programs, including workouts and training sessions.",
    },
    {
      question: "How do I join a sports team in VYUG?",
      answer:
        "Users can join or form sports teams through the VYUG sports portal.",
    },
    {
      question: "Is there a cost to participate in sports activities?",
      answer:
        "Participation costs vary; some activities might be free, while others require a fee.",
    },
    {
      question: "Can I watch live sports events in VYUG?",
      answer:
        "Yes, live sports events and matches can be viewed within the VYUG sports arenas.",
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const isMobile = useMediaQuery("(max-width: 750px)");

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
        <title>Virtual Reality in Sports Industry: VYUG Technologies</title>
        <meta name="description" content="Virtual Reality for Sports training is an option for many athletes. It can help improve technique and even reduce the risk of injury to some extent." />
        <meta name="keywords" content="Virtual Reality in Sports Training, Virtual Reality in Sports, VR Sports Training, Virtual Reality Sports Coaching" />
        <meta property="og:title" content="Virtual Reality in Sports Industry: VYUG Technologies" />
        <meta property="og:description" content="Virtual Reality for Sports training is an option for many athletes. It can help improve technique and even reduce the risk of injury to some extent." />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/sectors/virtual-reality-in-sports"
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
              backgroundColor: "#F9B99D",
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
                fill="#B28C7E"
              />
              <path
                d="M87.0729 45.3704C87.0729 68.4017 68.401 87.0736 45.3646 87.0736C22.3281 87.0736 3.65625 68.4017 3.65625 45.3704C3.65625 22.334 22.3281 3.66211 45.3646 3.66211C68.401 3.66211 87.0729 22.334 87.0729 45.3704Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeMiterlimit="10"
              />
              <path
                d="M46.9376 20C47.2661 20.0776 47.5985 20.1493 47.925 20.2369C50.0851 20.8162 51.7016 22.0864 52.7946 24.0394C52.9021 24.2305 53.1051 24.4037 53.3042 24.5012C54.2937 24.981 54.8252 25.7515 54.865 26.8504C54.8829 27.3561 54.879 27.8617 54.865 28.3674C54.8391 29.5062 54.3056 30.3085 53.2644 30.7843C53.1012 30.8579 52.922 30.9893 52.8424 31.1406C51.9405 32.8388 50.5987 34.0373 48.8189 34.754C48.7632 34.7759 48.7094 34.7998 48.6019 34.8455C49.0339 35.184 49.4122 35.5184 49.8283 35.7932C50.308 36.1097 50.8416 36.1157 51.3751 35.9067C51.7852 35.7454 52.1894 35.5742 52.6035 35.4269C54.0926 34.8953 55.6932 35.5662 56.3362 36.9817C56.9912 38.4211 56.4378 40.0894 55.0163 40.8399C53.8218 41.471 52.6054 42.0643 51.3891 42.6555C51.1024 42.7949 50.9909 42.9362 51.0327 43.2806C51.3811 46.1534 52.2451 48.8788 53.348 51.5366C54.0408 53.2049 54.7655 54.8632 55.53 56.5017C56.0595 57.6365 56.3382 58.7414 55.5519 59.9458C55.8107 59.9458 55.9819 59.9458 56.1551 59.9458C58.3729 59.9458 60.5926 59.9458 62.8104 59.9458C66.573 59.9458 69.4 62.3248 70.061 66.0397C70.0709 66.0994 70.1127 66.1532 70.1406 66.2109V68.4625C69.7046 69.7227 68.8008 70.1428 67.4988 70.1408C52.4581 70.1169 37.4175 70.1269 22.3768 70.1249C21.0987 70.1249 20.163 69.4659 20.0516 68.351C19.729 65.1498 20.9056 62.2771 23.9735 60.6884C25.0067 60.1548 26.1156 59.9398 27.2782 59.9398C35.0106 59.9438 42.7429 59.9418 50.4753 59.9418H50.9531C48.8966 57.7758 46.9137 55.6854 45.0284 53.7006C44.2918 54.3695 43.591 55.0265 42.8683 55.6596C42.084 56.3464 41.2996 57.0352 40.4833 57.6822C39.8383 58.1919 39.0778 58.395 38.2437 58.381C36.7107 58.3571 35.1778 58.379 33.6429 58.3731C31.9268 58.3671 30.6188 57.1487 30.585 55.5322C30.5511 53.8479 31.7556 52.6116 33.4995 52.4942C34.4591 52.4305 35.4167 52.3269 36.3703 52.2015C37.1408 52.1 37.7101 51.6401 37.8316 50.8856C38.0127 49.7667 38.0745 48.626 38.1581 47.4932C38.2477 46.2908 37.953 45.2297 37.2403 44.2004C36.6988 43.418 36.3166 42.4604 36.1075 41.5267C35.7352 39.8604 36.4858 38.4688 37.5648 37.2544C38.7573 35.9126 40.2783 35.0904 41.9824 34.5808C42.1337 34.535 42.283 34.4892 42.4961 34.4255C42.3468 34.3239 42.2492 34.2503 42.1437 34.1866C40.4376 33.1494 39.3187 31.6622 38.7235 29.763C38.6657 29.5798 38.4666 29.4405 38.3273 29.2852C38.2954 29.2513 38.2417 29.2394 38.2019 29.2115C37.3757 28.6601 37.6862 27.81 37.6504 27.0594C37.6265 26.5578 37.9092 26.2114 38.3492 25.9705C38.4985 25.8888 38.6617 25.7356 38.7115 25.5803C39.7109 22.4826 41.7953 20.6371 45.0105 20.0816C45.0702 20.0717 45.122 20.0279 45.1797 20C45.767 20 46.3543 20 46.9416 20L46.9376 20ZM50.8436 41.6263C52.1157 40.9852 53.3659 40.392 54.5784 39.731C55.3767 39.295 55.6414 38.2956 55.2652 37.4694C54.8909 36.6472 53.9712 36.2272 53.1032 36.4999C52.7627 36.6074 52.4283 36.7408 52.0998 36.8841C50.7998 37.4595 49.6292 37.2803 48.574 36.3188C47.9011 35.7076 47.0969 35.3512 46.193 35.2875C44.7158 35.184 43.2625 35.3433 41.857 35.835C40.1628 36.4263 38.7255 37.3679 37.7778 38.9347C37.3299 39.6733 37.0352 40.4756 37.2503 41.3555C37.5887 42.7451 38.2915 43.9595 39.2391 45.0087C39.5437 45.3451 40.0434 45.582 40.4973 45.6935C41.4987 45.9404 42.4005 45.0186 42.1875 44.0093C42.1158 43.6669 41.9426 43.3404 41.7834 43.0238C41.5564 42.5739 41.2518 42.1558 41.0826 41.688C41.0149 41.5028 41.1622 41.1027 41.3275 41.0111C41.4967 40.9175 41.9446 41.0012 42.0342 41.1485C42.4901 41.895 42.9798 42.6535 43.2526 43.4738C43.8001 45.1222 42.7449 46.6989 41.0189 46.8721C40.4734 46.9278 39.906 46.7546 39.3346 46.6849C39.3346 46.7984 39.3446 46.9736 39.3346 47.1488C39.263 48.3513 39.267 49.5637 39.0918 50.7502C38.8728 52.2254 37.8734 53.1969 36.5594 53.3661C35.5581 53.4955 34.5507 53.5931 33.5433 53.6687C32.4842 53.7504 31.7417 54.4929 31.7715 55.4943C31.8014 56.4698 32.5698 57.1925 33.609 57.1985C35.2236 57.2064 36.8401 57.2184 38.4527 57.1865C38.8091 57.1806 39.2172 57.081 39.5078 56.8859C40.2086 56.4141 40.9154 55.9224 41.5086 55.3291C42.8803 53.9574 44.1883 52.522 45.5181 51.1086C45.7909 50.8179 46.0935 50.6984 46.414 50.9772C46.7345 51.2559 46.6688 51.5804 46.406 51.879C46.1731 52.1438 45.9422 52.4086 45.6893 52.6972C47.8832 55.0006 50.0353 57.2721 52.2073 59.5257C52.5895 59.9219 53.1111 60.0274 53.6606 59.8801C54.7058 59.6014 55.1477 58.5781 54.6819 57.507C53.8119 55.5063 52.8921 53.5254 52.0779 51.5007C50.8157 48.3592 49.9497 45.1062 49.6192 41.7238C49.5834 41.3635 49.6371 41.0649 50.0194 40.9375C50.3976 40.81 50.6485 41.0131 50.8436 41.6283V41.6263ZM21.4491 65.4026H68.7152C68.6415 65.1837 68.5917 65.0005 68.5201 64.8233C67.6142 62.5916 65.492 61.1244 63.0652 61.1224C51.0745 61.1124 39.0838 61.1144 27.0911 61.1224C25.6139 61.1224 24.3119 61.638 23.205 62.6095C22.3569 63.3541 21.7597 64.2679 21.4491 65.4026ZM21.1923 66.6151C21.1923 66.9794 21.1923 67.3019 21.1923 67.6224C21.1923 68.6895 21.4511 68.9483 22.5182 68.9483C37.5548 68.9483 52.5935 68.9483 67.6302 68.9483C67.7934 68.9483 67.9587 68.9582 68.1199 68.9403C68.5579 68.8906 68.8824 68.6437 68.9322 68.2177C68.9919 67.6941 68.9461 67.1585 68.9461 66.6151H21.1903H21.1923ZM48.7492 29.7889C49.9218 29.7889 51.0964 29.7988 52.269 29.7849C53.1171 29.7749 53.6685 29.2155 53.6904 28.3694C53.7024 27.8637 53.7064 27.3581 53.6904 26.8544C53.6626 26.062 53.1131 25.4947 52.3208 25.4907C49.9736 25.4767 47.6264 25.4767 45.2792 25.4907C44.4849 25.4947 43.9374 26.062 43.9095 26.8544C43.8936 27.3262 43.9016 27.8 43.9056 28.2719C43.9155 29.2394 44.457 29.7829 45.4246 29.7889C46.5334 29.7948 47.6403 29.7889 48.7492 29.7889ZM51.5483 24.3081C50.3618 22.0247 47.3517 20.7346 44.7079 21.3199C42.3348 21.8455 40.0095 24.0553 39.9399 25.8749C40.8516 25.8749 41.7634 25.8829 42.6752 25.8669C42.7927 25.865 42.9579 25.7734 43.0137 25.6758C43.599 24.6605 44.4929 24.2882 45.6316 24.3042C47.5846 24.33 49.5376 24.3101 51.5463 24.3101L51.5483 24.3081ZM51.5205 30.9654C51.3433 30.9654 51.188 30.9654 51.0327 30.9654C49.1593 30.9654 47.286 30.9654 45.4126 30.9654C44.3834 30.9654 43.597 30.5414 43.0495 29.6634C42.9778 29.548 42.8206 29.4126 42.7011 29.4106C41.7734 29.3887 40.8477 29.3987 39.916 29.3987C40.1987 31.5806 42.6294 33.665 45.3111 34.0512C47.7021 34.3956 50.6445 32.9503 51.5205 30.9654ZM42.7011 28.1982V27.0794H38.8489V28.2221C40.0892 28.2221 41.2916 28.2221 42.4961 28.2221C42.5578 28.2221 42.6195 28.2082 42.7011 28.1982Z"
                fill="white"
              />
              <path
                d="M24.5189 20C24.6403 20.0398 24.7598 20.0836 24.8832 20.1155C26.7805 20.6072 28.0606 22.4447 27.8276 24.348C27.5828 26.3467 25.9184 27.8319 23.9316 27.8299C21.9388 27.8279 20.2824 26.3467 20.0356 24.348C19.8006 22.4427 21.0807 20.6052 22.978 20.1135C23.1014 20.0816 23.2229 20.0378 23.3443 20C23.7365 20 24.1267 20 24.5189 20ZM26.671 23.9478C26.6889 22.4407 25.4645 21.1845 23.9654 21.1746C22.4464 21.1646 21.2141 22.3671 21.1902 23.8821C21.1683 25.3852 22.3947 26.6434 23.8958 26.6553C25.4068 26.6692 26.6511 25.4529 26.671 23.9478Z"
                fill="white"
              />
              <path
                d="M32.1539 45.0744C32.1539 45.6617 32.1658 46.247 32.1519 46.8343C32.126 47.8218 31.3974 48.5663 30.4139 48.5823C29.2254 48.6022 28.0369 48.6022 26.8464 48.5823C25.8629 48.5663 25.1243 47.8198 25.1104 46.8343C25.0944 45.6458 25.0924 44.4553 25.1104 43.2668C25.1263 42.3052 25.8629 41.5626 26.8205 41.5467C28.0249 41.5248 29.2314 41.5248 30.4358 41.5467C31.3934 41.5646 32.118 42.3072 32.1479 43.2688C32.1658 43.87 32.1519 44.4732 32.1519 45.0764L32.1539 45.0744ZM30.9813 45.1123C30.9813 44.5588 30.9873 44.0034 30.9813 43.4499C30.9753 42.9343 30.7802 42.7213 30.2845 42.7173C29.1756 42.7093 28.0667 42.7133 26.9578 42.7173C26.5238 42.7173 26.2869 42.9383 26.2849 43.3783C26.281 44.5031 26.281 45.6279 26.2849 46.7527C26.2849 47.1907 26.5219 47.4117 26.9558 47.4136C28.0647 47.4176 29.1736 47.4216 30.2825 47.4136C30.7782 47.4097 30.9733 47.1966 30.9793 46.681C30.9873 46.1594 30.9793 45.6378 30.9793 45.1162L30.9813 45.1123Z"
                fill="white"
              />
              <path
                d="M66.0342 27.6341C65.3015 27.6341 64.5669 27.6461 63.8343 27.6321C62.3949 27.6063 61.5787 26.2406 62.2635 24.9784C62.9782 23.6624 63.7168 22.3585 64.4714 21.0664C65.2119 19.8003 66.8384 19.7923 67.577 21.0545C68.3336 22.3465 69.0682 23.6525 69.7829 24.9664C70.4836 26.2565 69.6594 27.6142 68.1842 27.6321C67.4675 27.6401 66.7509 27.6321 66.0342 27.6321V27.6341ZM66.0282 26.4596C66.729 26.4596 67.4317 26.4675 68.1325 26.4576C68.8014 26.4476 69.0403 26.0375 68.7118 25.4482C68.023 24.2099 67.3262 22.9756 66.6214 21.7453C66.277 21.1441 65.7813 21.1441 65.4369 21.7453C64.7322 22.9756 64.0354 24.2099 63.3466 25.4482C63.0201 26.0375 63.259 26.4496 63.9239 26.4576C64.6247 26.4675 65.3274 26.4596 66.0282 26.4596Z"
                fill="white"
              />
              <path
                d="M62.5961 45.0918C63.0659 45.3506 63.5238 45.5059 63.8543 45.8025C64.6168 46.4874 65.3255 47.2339 66.0422 47.9705C66.7987 48.7489 66.8027 49.7563 66.0442 50.5427C65.3315 51.2813 64.6068 52.0099 63.8663 52.7206C63.0799 53.4751 62.0705 53.4652 61.2941 52.7067C60.5595 51.99 59.8309 51.2653 59.1162 50.5287C58.3815 49.7702 58.3796 48.7489 59.1162 47.9924C59.8428 47.2439 60.5635 46.4874 61.3379 45.7906C61.6684 45.4939 62.1303 45.3446 62.5961 45.0918ZM59.6855 49.2606C59.807 49.4457 59.8946 49.6388 60.0339 49.7802C60.7048 50.467 61.3837 51.1459 62.0685 51.8188C62.4408 52.1851 62.7195 52.197 63.0799 51.8467C63.7906 51.1538 64.4934 50.4511 65.1862 49.7404C65.5266 49.392 65.5206 49.1172 65.1762 48.7669C64.4814 48.0581 63.7807 47.3554 63.0699 46.6606C62.7275 46.3241 62.4428 46.3281 62.0964 46.6685C61.3877 47.3633 60.6869 48.0661 59.9921 48.7748C59.8747 48.8943 59.807 49.0635 59.6855 49.2606Z"
                fill="white"
              />
            </svg>
            <h1 className="text-[#6D6A6A] font-medium header text-[25px] md:text-[28px]">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["SPORTS & GAMES", 2000]}
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
            VYUG will revolutionize the sports industry by providing virtual
            arenas where athletes can train, compete, and engage with fans in
            real-time. Users can experience live matches, participate in virtual
            training sessions with their favorite athletes, and even engage in
            fantasy sports leagues within the metaverse
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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          />
          <Box className="absolute z-[2] top-[55%] sm:top-1/2 md:top-2/3 left-10 sm:left-20 md:left-36 flex flex-col gap-2 md:gap-2.5">
            <p className="w-3/4 text-white text-lg sm:text-xl md:text-2xl text-start header">
              Experience the thrill of competition in a virtual arena, where
              champions are born without limits
            </p>
          </Box>
        </Box>
        <div
          className="flex flex-col items-center justify-center py-20 md:py-28"
          id="rw3"
        >
          {/* <Box className="px"> */}
          <h2 className="text-[#242424] header text-[25px] md:text-[28px] text-center">
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

export default Game;
