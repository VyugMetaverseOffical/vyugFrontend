import React, { useEffect, useState, useRef } from "react";
import SideIcon from "../../components/side-icon";
import video from "../../images/sector/Entertainment/entertainment.mp4";
import video1 from "../../images/sector/Entertainment/entertainmentMobile.mp4";
import unmute from "../../images/unmute.svg";
import mute from "../../images/mute_hover.svg";
import sliderImg1 from "../../images/sector/Entertainment/img1.webp";
import sliderImg2 from "../../images/sector/Entertainment/img2.webp";
import sliderImg3 from "../../images/sector/Entertainment/img3.webp";
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
import education from "../../images/educationBox.svg";
import game from "../../images/gameBox.svg";
import corporate from "../../images/corporateBox.svg";
import commercial from "../../images/commercialBox.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Head";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import {
  handleScrollAnimation,
  handleTypeAnimation,
} from "../../lib/animations";
import Starter from "../../components/Starter";
import Explore from "../Core/Explore";
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
    svg: event,
    text: "Event",
    bge: "#CBAACB",
    url: "/sectors/virtual-reality-in-event",
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

const Entertainment = () => {
  const height = window.innerHeight;
  const [loading, setLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);

  const faqs = [
    {
      question: "What types of entertainment are available in VYUG?",
      answer:
        "VYUG offers virtual concerts, movies, live performances, and gaming experiences.",
    },
    {
      question: "How can I attend a virtual concert?",
      answer:
        "Tickets for virtual concerts can be purchased through the VYUG entertainment section.",
    },
    {
      question: "Are there multiplayer games available?",
      answer:
        "Yes, VYUG hosts various multiplayer games and esports tournaments.",
    },
    {
      question: "Can I watch movies in VYUG?",
      answer:
        "Yes, VYUG has virtual cinemas where you can watch the latest movies and classics.",
    },
    {
      question: "Is there a subscription service for entertainment?",
      answer:
        "VYUG offers subscription plans for unlimited access to certain entertainment content.",
    },
    {
      question: "How often are new entertainment events added?",
      answer:
        "New events and content are added regularly, ensuring fresh experiences for users.",
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

  const isMobile = useMediaQuery("(max-width: 750px");

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
        <title>Explore VR Entertainment Experience: VR Shows With VYUG</title>
        <meta name="description" content="Discover all the VYUG Virtual Reality Entertainment Experience. Enjoy streaming your favorite VR Shows, Movie, and live Sports Events." />
        <meta name="keywords" content="VR Entertainment, VR Live Sports, Virtual Reality in Entertainment, Movies in VR , VR Shows" />
        <meta property="og:title" content="Explore VR Entertainment Experience: VR Shows With VYUG" />
        <meta property="og:description" content="Discover all the VYUG Virtual Reality Entertainment Experience. Enjoy streaming your favorite VR Shows, Movie, and live Sports Events." />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/sectors/virtual-reality-in-entertainment"
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
            {/* <source src={"https://drive.google.com/file/d/16Re2xOf01IFUMHzUizhvqSNLPefs2RnB/view?usp=sharing"} type="video/mp4" /> */}
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
              backgroundColor: "#FFD6B4",
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
                fill="#C95757"
              />
              <path
                d="M87.0729 45.3704C87.0729 68.4017 68.401 87.0736 45.3646 87.0736C22.3281 87.0736 3.65625 68.4017 3.65625 45.3704C3.65625 22.334 22.3281 3.66211 45.3646 3.66211C68.401 3.66211 87.0729 22.334 87.0729 45.3704Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeMiterlimit="10"
              />
              <path
                d="M54.0495 53.3329V69.1838H35.0061V57.991C34.7706 58.2558 34.6304 58.4173 34.4864 58.5789C32.2673 61.0413 28.5299 61.1523 26.4723 58.756C25.9818 58.1857 25.5866 57.4538 25.3842 56.7296C24.0975 52.1318 22.8731 47.5165 21.639 42.9051C21.1582 41.1103 21.8317 39.446 23.3306 38.6537C25.3939 37.5617 27.7999 38.6868 28.415 41.0344C29.18 43.9601 29.9411 46.8858 30.7042 49.8115C30.7373 49.9361 30.782 50.0568 30.8424 50.2495C31.4361 49.395 31.9948 48.5988 32.5456 47.7988C33.9822 45.7101 35.9736 44.657 38.4983 44.6025C39.2243 44.5869 39.9524 44.6005 40.7076 44.6005C40.8458 44.0555 40.9802 43.5319 41.1242 42.9674C39.0355 41.741 37.7664 39.9424 37.4082 37.4975C37.2564 37.4605 37.1006 37.4313 36.9469 37.3865C36.2383 37.1802 35.7283 36.5923 35.7925 35.8448C35.8976 34.5912 35.629 33.4875 34.9107 32.4442C34.5934 31.9848 34.4747 31.3872 34.2431 30.7935C33.2639 32.6563 31.8313 33.9995 29.8321 34.6672C27.8369 35.3329 25.8845 35.1908 24.0099 34.237C21.0083 32.7011 19.3693 29.3433 20.0175 26.0905C20.6891 22.7269 23.496 20.2158 26.8811 19.9841C28.9192 19.8459 30.7392 20.4377 32.3023 21.7594C33.8615 23.0792 34.7083 24.7902 34.9672 26.9101C35.6524 25.9562 36.4388 25.3002 37.4374 24.909C37.5483 24.8662 37.6204 24.689 37.6827 24.5605C39.1504 21.5784 41.5486 20.0309 44.8694 19.9744C46.3722 19.9491 47.8924 19.9024 49.3777 20.0776C52.4163 20.4396 54.7931 23.2018 54.8378 26.2735C54.8709 28.5997 54.4563 30.8538 53.5472 32.9951C53.2669 33.6549 53.2553 34.3032 53.2533 34.9767C53.2533 35.3738 53.2884 35.7806 53.2124 36.1641C53.0742 36.8648 52.6012 37.2678 51.9082 37.4352C51.7837 37.4644 51.6065 37.5929 51.589 37.6999C51.2055 40.0241 49.9539 41.7391 47.9119 42.9537C48.0443 43.4871 48.1766 44.0263 48.2895 44.4818C52.0834 44.7426 55.8228 44.9996 59.6206 45.2624C59.6206 45.0794 59.6206 44.8867 59.6206 44.692C59.6186 40.9527 59.6011 37.2113 59.6167 33.472C59.6264 31.1847 61.4776 29.4289 63.7473 29.5048C65.8613 29.5749 67.5451 31.3229 67.5509 33.5031C67.5645 37.7895 67.5606 42.0758 67.547 46.3622C67.547 46.8702 67.473 47.388 67.364 47.8844C66.6672 51.0203 63.868 53.292 60.6464 53.329C58.6434 53.3504 56.6423 53.3348 54.6393 53.3348C54.4602 53.3348 54.2831 53.3348 54.0514 53.3348L54.0495 53.3329ZM52.4494 51.7269H57.1951V46.6581C54.7872 46.4984 52.4066 46.3388 50.0162 46.1792C49.6989 48.2543 49.3972 50.2145 49.0876 52.235C47.653 51.3746 46.3021 50.5785 44.9667 49.7531C44.6436 49.5526 44.41 49.5351 44.0772 49.7434C42.7301 50.5804 41.3636 51.3824 39.9348 52.237C39.6234 50.193 39.3197 48.2095 39.0102 46.1928C36.8943 46.0994 35.2008 46.8352 33.9666 48.5365C33.2094 49.5799 32.4911 50.6524 31.7573 51.7133C31.6853 51.8184 31.6288 51.9313 31.5509 52.0618C32.6761 53.1363 33.7817 54.1933 34.9769 55.334V52.5737H36.5906V67.6071H52.4435V51.725L52.4494 51.7269ZM58.8322 51.7445C59.3772 51.7445 59.8717 51.7445 60.3661 51.7445C63.6072 51.7347 65.9586 49.3813 65.9645 46.1325C65.9683 44.1139 65.9645 42.0972 65.9645 40.0786C65.9645 37.879 65.9742 35.6794 65.9606 33.4798C65.9508 32.0685 64.7946 31.0037 63.4125 31.0932C62.1472 31.177 61.2012 32.2223 61.1992 33.5693C61.1934 37.4391 61.1992 41.3108 61.1953 45.1806C61.1953 46.3116 60.4965 46.9578 59.3714 46.8975C59.1982 46.8878 59.023 46.8975 58.8303 46.8975V51.7464L58.8322 51.7445ZM21.4755 27.5213C21.4794 30.7993 24.1734 33.4778 27.4553 33.47C30.7081 33.4622 33.3866 30.7799 33.3924 27.5252C33.3982 24.2432 30.7139 21.5531 27.4359 21.5531C24.1559 21.5531 21.4716 24.2394 21.4755 27.5213ZM34.0114 56.607C33.0206 55.659 32.0999 54.678 31.074 53.8234C30.0988 53.0097 29.5868 52.0326 29.2949 50.8062C28.5415 47.6411 27.6773 44.5032 26.848 41.3556C26.5813 40.3453 25.7716 39.7555 24.8119 39.8334C23.5486 39.9365 22.803 41.1084 23.1787 42.5138C24.4187 47.1583 25.6703 51.799 26.9434 56.4338C27.3619 57.9579 28.7576 58.941 30.3363 58.8884C31.9695 58.8339 33.116 57.9677 34.0134 56.607H34.0114ZM49.2628 27.9048C48.9163 27.9048 48.6205 27.9203 48.3246 27.9028C47.0652 27.8211 46.086 26.7465 46.1055 25.4813C46.125 24.2238 47.1547 23.1843 48.4161 23.1473C50.9408 23.0734 52.8874 25.3606 52.3579 27.8249C52.2353 28.3933 51.9433 28.9228 51.7408 29.4406C52.0776 29.5847 52.4591 29.7501 52.9789 29.974C53.0684 28.6445 53.2708 27.3403 53.2144 26.0497C53.119 23.8306 51.3788 21.9268 49.1811 21.666C47.727 21.4927 46.2417 21.557 44.7721 21.5628C42.1325 21.5725 39.8823 23.1512 38.9849 25.6234C38.8331 26.0438 38.6229 26.2346 38.1927 26.3572C36.4583 26.8556 35.374 28.7866 35.9268 30.4178C36.3746 29.571 37.1162 29.427 37.9318 29.5068C38.3017 29.5438 38.4788 29.3997 38.6482 29.0785C39.1601 28.1033 39.9154 27.3383 40.8926 26.8283C41.2468 26.6434 41.422 26.4098 41.5466 26.0438C41.9826 24.7591 43.3219 23.8461 44.4996 24.0019V25.4735C43.2109 25.8317 42.7048 26.5947 43.0143 27.7004C43.2985 28.7145 44.3458 29.4542 45.613 29.4932C46.489 29.5204 47.3688 29.5243 48.2448 29.4912C49.0507 29.462 49.7728 29.1739 50.3043 28.5452C50.9408 27.7919 51.0634 26.9315 50.6332 26.0438C50.2244 25.199 49.512 24.7571 48.5679 24.7416C48.0657 24.7338 47.7114 25.0686 47.6978 25.5085C47.6842 25.9562 48.019 26.2949 48.5173 26.3202C48.7587 26.3319 49.002 26.3222 49.2628 26.3222V27.9067V27.9048ZM51.6454 31.1244H37.4062V35.8293H51.6454V31.1244ZM39.0725 37.4702C39.1465 39.9073 41.751 42.1887 44.4626 42.2121C47.2228 42.2354 49.8468 39.9852 49.9636 37.4702H39.0706H39.0725ZM46.4053 43.5397C45.1127 43.8959 43.8728 43.8569 42.6231 43.5572C42.4926 44.0613 42.372 44.5052 42.2668 44.9548C42.2474 45.0385 42.261 45.1689 42.3155 45.2234C43.0416 45.9612 43.7754 46.6892 44.5249 47.4347C45.2548 46.7048 45.9478 46.0196 46.6252 45.3208C46.7109 45.2312 46.779 45.058 46.7576 44.9412C46.6681 44.4915 46.5376 44.0477 46.4072 43.5377L46.4053 43.5397ZM48.3947 46.2804C48.0073 46.1734 46.5201 47.4503 45.8544 48.445C46.5143 48.8402 47.1742 49.2353 47.8769 49.6558C48.056 48.4859 48.2253 47.3822 48.3927 46.2804H48.3947ZM40.6142 46.1169C40.8069 47.3686 40.9782 48.482 41.1573 49.6558C41.8775 49.2237 42.5355 48.8285 43.2421 48.4041C42.518 47.6859 41.8347 46.9948 41.1339 46.3213C41.0327 46.224 40.8556 46.2084 40.6142 46.1169ZM41.3948 28.1247C40.986 28.5938 40.6356 28.9909 40.2268 29.4581H42.117C41.9009 29.061 41.7062 28.7029 41.3948 28.1247Z"
                fill="white"
              />
              <path
                d="M69.9965 62.0591C69.9965 63.0849 70.0043 64.1108 69.9965 65.1366C69.9771 67.4316 68.266 69.1582 65.9807 69.1758C64.1607 69.1894 62.3407 69.1874 60.5206 69.1758C58.2314 69.1602 56.5087 67.4375 56.4951 65.1483C56.4834 63.0635 56.4834 60.9787 56.4951 58.8939C56.5087 56.6301 58.2275 54.8996 60.4836 54.8821C62.3192 54.8665 64.1568 54.8684 65.9924 54.8821C68.2524 54.8996 69.9693 56.6203 69.9946 58.8842C70.0063 59.9432 69.9946 61.0021 69.9965 62.061V62.0591ZM68.4081 62.0221C68.4081 61.0138 68.412 60.0035 68.4081 58.9952C68.4003 57.4729 67.4076 56.4724 65.8951 56.4685C64.1412 56.4627 62.3874 56.4646 60.6355 56.4685C59.0821 56.4724 58.0854 57.4613 58.0835 59.0068C58.0796 61.0254 58.0796 63.0421 58.0835 65.0607C58.0874 66.579 59.086 67.5854 60.5965 67.5893C62.366 67.5951 64.1373 67.5951 65.9068 67.5893C67.392 67.5835 68.4003 66.579 68.4101 65.0996C68.4159 64.0738 68.4101 63.0479 68.4101 62.0221H68.4081Z"
                fill="white"
              />
              <path
                d="M35.0115 40.5525H30.3125V39.0205H35.0115V40.5525Z"
                fill="white"
              />
              <path
                d="M30.2988 37.3659V35.834H35.0037V37.3659H30.2988Z"
                fill="white"
              />
              <path
                d="M68.399 23.0908V24.652H66.8261V23.0908L66.8105 23.1044H68.4126L68.397 23.0908H68.399Z"
                fill="white"
              />
              <path
                d="M31.8328 43.7322H30.3086V42.2002H31.8328V43.7322Z"
                fill="white"
              />
              <path
                d="M35.028 42.209V43.7176H33.4824V42.209H35.028Z"
                fill="white"
              />
              <path
                d="M58.8847 24.694V23.1328H60.4576V24.694L60.4731 24.6803H58.8711L58.8867 24.694H58.8847Z"
                fill="white"
              />
              <path
                d="M31.854 67.5811V69.1422H30.2812V67.5811L30.2656 67.5947H31.8677L31.8521 67.5811H31.854Z"
                fill="white"
              />
              <path
                d="M66.8287 23.0923H65.2676V21.5175H66.8287L66.8151 21.502V23.104L66.8307 23.0904L66.8287 23.0923Z"
                fill="white"
              />
              <path
                d="M31.8555 66.0097H33.4166V67.5845C32.8969 67.5845 32.3752 67.5845 31.8555 67.5845L31.871 67.5981V65.9961L31.8574 66.0117L31.8555 66.0097Z"
                fill="white"
              />
              <path
                d="M60.4556 26.2705V27.8317H58.8828V26.2705L58.8672 26.2841H60.4692L60.4536 26.2705H60.4556Z"
                fill="white"
              />
              <path
                d="M66.8261 21.5172V19.9561H68.4009V21.5172L68.4165 21.5036H66.8145L66.8281 21.5192L66.8261 21.5172Z"
                fill="white"
              />
              <path
                d="M60.4551 24.6943H62.0162V26.2691C61.4965 26.2691 60.9748 26.2691 60.4551 26.2691L60.4707 26.2827V24.6807L60.4551 24.6943Z"
                fill="white"
              />
              <path
                d="M22.3359 62.8307V61.2695H23.9087V62.8307L23.9243 62.8171H22.3223L22.3378 62.8307H22.3359Z"
                fill="white"
              />
              <path
                d="M22.3365 64.4029H20.7754V62.8281H22.3365L22.321 62.8145V64.4165L22.3346 64.4009L22.3365 64.4029Z"
                fill="white"
              />
              <path
                d="M23.9101 62.8281H25.4713V64.4029H23.9101L23.9238 64.4184V62.8164L23.9082 62.83L23.9101 62.8281Z"
                fill="white"
              />
              <path
                d="M23.9107 64.4043V65.9654H22.3359C22.3359 65.4457 22.3359 64.924 22.3359 64.4043L22.3223 64.4199H23.9243L23.9107 64.4043Z"
                fill="white"
              />
              <path
                d="M30.2793 66.0074V64.4463H31.854C31.854 64.966 31.854 65.4877 31.854 66.0074L31.8677 65.9919H30.2656L30.2812 66.0055L30.2793 66.0074Z"
                fill="white"
              />
              <path
                d="M58.8795 26.272H57.3184V24.6972C57.8381 24.6972 58.3598 24.6972 58.8795 24.6972L58.8639 24.6836V26.2856L58.8795 26.272Z"
                fill="white"
              />
              <path
                d="M30.2799 67.5825H28.7188V66.0078C29.2385 66.0078 29.7602 66.0078 30.2799 66.0078L30.2643 65.9941V67.5962L30.2799 67.5825Z"
                fill="white"
              />
              <path
                d="M68.4004 21.5175H69.9615V23.0923C69.4418 23.0923 68.9201 23.0923 68.4004 23.0923L68.416 23.1059V21.5039L68.4004 21.5175Z"
                fill="white"
              />
              <path
                d="M32.8465 27.4711C30.3451 28.7208 27.9625 29.9121 25.5293 31.1268V23.8135C27.9567 25.0262 30.349 26.2214 32.8465 27.4691V27.4711ZM27.1196 26.3868V28.5573C27.8438 28.1952 28.5212 27.8565 29.2901 27.4711C28.5095 27.0818 27.8379 26.745 27.1196 26.3868Z"
                fill="white"
              />
              <path
                d="M47.7274 32.667V34.1951H39.8457V32.667H47.7274Z"
                fill="white"
              />
              <path
                d="M50.8914 34.2019H49.3652V32.6738H50.8914V34.2019Z"
                fill="white"
              />
              <path
                d="M48.4655 38.5485C47.7939 39.8624 46.7817 40.5671 45.3646 40.5671C43.9475 40.5671 42.9392 39.8585 42.2734 38.5563C42.7503 38.3188 43.1981 38.093 43.638 37.873C44.8565 39.3738 46.044 39.3797 47.0698 37.8633C47.5117 38.0794 47.9613 38.3013 48.4655 38.5504V38.5485Z"
                fill="white"
              />
              <path
                d="M59.6895 62.7878V61.2598H66.7769V62.7878H59.6895Z"
                fill="white"
              />
              <path
                d="M59.6797 59.614V58.0918H66.7847V59.614H59.6797Z"
                fill="white"
              />
              <path
                d="M59.707 64.4229H63.5982V65.9684H59.707V64.4229Z"
                fill="white"
              />
              <path
                d="M65.2617 64.4365H66.7917V65.9646H65.2617V64.4365Z"
                fill="white"
              />
            </svg>
            <h1 className="text-[#6D6A6A] font-medium header text-[25px] md:text-[28px]">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["ENTERTAINMENT", 2000]}
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
              The entertainment sector will flourish in VYUG, offering users a
              wide array of experiences—from virtual concerts and immersive
              gaming to interactive storytelling and art exhibitions. Users will
              have the opportunity to participate in live events, enjoy
              cinematic experiences, and connect with creators and fellow fans
              in ways never before possible.
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
              Step into a vibrant universe where your imagination sparks endless
              entertainment adventures!
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

export default Entertainment;
