import React, { useEffect, useRef, useState } from "react";
import SideIcon from "../../components/side-icon";
import video from "../../images/sector/Hospitality/hospitality.mp4";
import video1 from "../../images/sector/Hospitality/hospitalityMobile.mp4";
import unmute from "../../images/unmute.svg";
import mute from "../../images/mute_hover.svg";
import sliderImg1 from "../../images/sector/Hospitality/img1.webp";
import sliderImg2 from "../../images/sector/Hospitality/img2.webp";
import sliderImg3 from "../../images/sector/Hospitality/img3.webp";
import entertainment from "../../images/entertainmentBox.svg";
import event from "../../images/eventBox.svg";
import tourism from "../../images/tourismBox.svg";
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
import funpark from "../../images/tradingBox.svg";
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
    svg: game,
    text: "Sports & Games",
    bge: "#FDFD96",
    url: "/sectors/virtual-reality-in-sports",
  },
  {
    svg: funpark,
    text: "Sustainability",
    bge: "#A2D5C6",
    url: "/sectors/virtual-reality-in-sustainability",
  },
];

const Hospitality = () => {
  const height = window.innerHeight;
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const faqs = [
    {
      question: "What hospitality services are offered in VYUG?",
      answer: "VYUG includes virtual hotels, restaurants, and spas.",
    },
    {
      question: "Can I make reservations at virtual hotels?",
      answer:
        "Yes, reservations can be made through the VYUG hospitality section.",
    },
    {
      question: "Are there virtual dining experiences?",
      answer:
        "Yes, VYUG offers virtual dining experiences where users can explore different cuisines.",
    },
    {
      question: "How do virtual spas work in VYUG?",
      answer:
        "Virtual spas provide relaxation and wellness experiences through guided sessions and environments.",
    },
    {
      question: "Is there a cost for using hospitality services?",
      answer:
        "Costs vary depending on the service; some experiences may be free, while others require a fee.",
    },
    {
      question: "Can I host events at virtual hospitality venues?",
      answer:
        "Yes, users can host private events and gatherings at various hospitality venues in VYUG.",
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
        <title>Hospitality - VYUG Metaverse</title>
        <meta name="description" content="Hospitality" />
        <meta name="keywords" content="Hospitality" />
        <meta property="og:title" content="Hospitality" />
        <meta property="og:description" content="Hospitality" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/sectors/virtual-reality-in-hospitality"
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
              backgroundColor: "#CDBCFF",
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
                fill="#C386E5"
              />
              <path
                d="M87.0729 45.3704C87.0729 68.4017 68.401 87.0736 45.3646 87.0736C22.3281 87.0736 3.65625 68.4017 3.65625 45.3704C3.65625 22.334 22.3281 3.66211 45.3646 3.66211C68.401 3.66211 87.0729 22.334 87.0729 45.3704Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeMiterlimit="10"
              />
              <path
                d="M46.1622 19C46.6952 19.1159 47.2356 19.2001 47.7574 19.3534C51.361 20.41 53.6631 22.8673 55.1031 26.2335C55.9708 28.2607 56.2775 30.4056 56.4458 32.5843C56.7488 36.4946 56.9283 40.4181 57.6782 44.2798C57.8671 45.2541 58.0877 46.2228 58.3346 47.1822C58.3907 47.3972 58.5814 47.6328 58.774 47.7488C60.8143 48.9887 61.7886 50.7877 61.7755 53.1758C61.7531 57.8547 61.7755 62.5337 61.7643 67.2126C61.7568 69.812 59.7596 71.7812 57.2612 71.6298C56.7113 71.5961 56.1391 71.4427 55.6342 71.2146C52.7318 69.9093 49.8369 68.5834 46.9645 67.2164C46.3305 66.9153 45.7901 66.4197 45.1673 65.9858C44.0696 67.3211 42.3117 67.7325 40.7614 68.4936C38.8408 69.4361 36.8866 70.3057 34.938 71.1884C32.4751 72.3049 29.7466 71.1884 28.95 68.7274C28.7891 68.2318 28.7199 67.6858 28.7181 67.1621C28.7012 62.4832 28.7218 57.8042 28.7012 53.1253C28.6919 50.754 29.6812 48.9812 31.6971 47.7469C31.9103 47.616 32.0954 47.3318 32.1609 47.083C33.066 43.6757 33.4325 40.188 33.728 36.6854C33.9506 34.043 34.1282 31.3837 34.577 28.7749C35.067 25.9287 36.4079 23.4414 38.622 21.504C40.1443 20.1744 41.904 19.3497 43.9162 19.0879C44.0154 19.0748 44.1107 19.0299 44.2061 19C44.8569 19 45.5096 19 46.1603 19H46.1622ZM45.2384 48.0742C44.4904 48.9943 43.7909 49.8582 43.0859 50.7166C42.5249 51.3992 42.0836 51.4142 41.4776 50.769C40.3855 49.6077 39.3027 48.4389 38.2031 47.285C38.0872 47.1635 37.8385 47.0269 37.7169 47.0718C36.0581 47.7095 34.3751 48.2986 32.7724 49.0597C31.0875 49.8601 30.317 51.3001 30.345 53.1889C30.3768 55.3469 30.3525 57.5069 30.3544 59.6668C30.3544 59.8333 30.3694 60.0016 30.3806 60.1886H36.0264C36.0264 59.6743 36.0264 59.1974 36.0264 58.7187C36.0264 57.793 36.0133 56.8673 36.0394 55.9435C36.0525 55.4498 36.4135 55.115 36.8492 55.115C37.2905 55.115 37.6197 55.4442 37.6645 55.9398C37.6776 56.0931 37.6739 56.2483 37.6739 56.4017C37.6739 58.167 37.6739 59.9324 37.6739 61.6977C37.6739 61.8791 37.6907 62.0587 37.7001 62.2868C38.6202 62.0418 39.4673 61.7782 40.3332 61.5968C40.8269 61.4939 41.1766 61.2527 41.3037 60.802C41.5824 59.8183 41.8311 58.8253 42.0349 57.8248C42.2107 56.9552 42.2257 56.0464 42.4576 55.1955C42.7961 53.95 43.7984 53.4843 45.0196 53.8696C45.1374 53.907 45.2889 53.9294 45.4011 53.8883C46.9476 53.3235 47.8976 54.3464 48.109 55.4853C48.253 56.2577 48.2904 57.0506 48.4344 57.8229C48.6064 58.7449 48.8065 59.665 49.0627 60.5663C49.1543 60.8899 49.3844 61.3256 49.6537 61.4191C50.6598 61.7688 51.7089 61.9988 52.801 62.2887V61.6473C52.801 59.8987 52.801 58.1521 52.801 56.4035C52.801 56.267 52.7973 56.1286 52.8047 55.9921C52.8384 55.461 53.1638 55.115 53.622 55.115C54.0745 55.115 54.4298 55.4648 54.4392 55.994C54.4579 57.2095 54.4467 58.427 54.4504 59.6444C54.4504 59.8258 54.4691 60.0053 54.4803 60.1961H60.0887C60.0999 60.0371 60.1186 59.9043 60.1186 59.7716C60.1186 57.5948 60.0925 55.418 60.128 53.2431C60.1598 51.315 59.3856 49.8526 57.6539 49.0392C56.0643 48.2911 54.3981 47.7039 52.7561 47.0756C52.6364 47.0288 52.3858 47.1672 52.2699 47.2888C51.1703 48.4407 50.0875 49.6114 48.9954 50.7708C48.3876 51.416 47.9481 51.4011 47.3871 50.7185C46.6821 49.8601 45.9827 48.9943 45.2365 48.0761L45.2384 48.0742ZM34.0011 46.6604C35.4092 46.1312 36.7482 45.6655 38.0554 45.1269C39.8432 44.3901 40.5912 42.9988 40.2883 41.1006C40.2696 40.9791 40.1817 40.8538 40.0938 40.7622C37.7861 38.3516 36.9184 35.4287 37.0268 32.1579C37.0512 31.4435 37.24 31.236 37.9376 31.062C40.1761 30.5048 41.7787 29.1789 42.7325 27.0788C42.8989 26.7104 43.1028 26.4186 43.5441 26.4055C43.9854 26.3924 44.2155 26.6673 44.395 27.0301C46.0855 30.4711 48.872 32.1747 52.6832 32.2439C53.3228 32.2552 53.6538 32.5675 53.6276 33.1921C53.4985 36.1374 52.5729 38.7556 50.4447 40.8762C50.34 40.981 50.2184 41.1044 50.1866 41.239C49.8425 42.7426 50.6298 44.3639 52.0717 44.9773C53.2816 45.4916 54.5308 45.918 55.7632 46.3799C55.9764 46.4603 56.1933 46.5314 56.4608 46.6267C56.429 46.4304 56.4103 46.3144 56.3916 46.1985C56.0269 43.7973 55.5912 41.4036 55.3163 38.9931C55.0021 36.2384 54.8824 33.4614 54.5813 30.703C54.3158 28.2644 53.4985 26.0072 51.9539 24.0567C49.0851 20.4381 44.3071 19.5853 40.6249 22.0482C38.4107 23.5275 37.1372 25.6706 36.3929 28.1709C35.6972 30.5085 35.7141 32.9415 35.4635 35.3389C35.1493 38.3516 34.8014 41.3606 34.4405 44.3677C34.3526 45.1064 34.1619 45.8338 34.0011 46.6585V46.6604ZM43.5478 29.0536C42.3304 30.8358 40.7016 31.9952 38.6482 32.6011C38.6763 35.324 39.3757 37.7756 41.3673 39.7037C43.5834 41.8505 46.5774 41.9646 48.9038 40.0384C50.11 39.0398 50.9253 37.7607 51.4003 36.2814C51.6472 35.5128 51.793 34.7124 51.9856 33.927C47.0879 32.8704 46.9308 32.7806 43.546 29.0536H43.5478ZM36.0245 61.9091H30.3507C30.3507 63.6034 30.3507 65.2621 30.3507 66.9209C30.3507 67.1771 30.3544 67.437 30.3899 67.6895C30.6386 69.5109 32.4489 70.4965 34.175 69.7148C37.0586 68.4095 39.9292 67.0761 42.8017 65.7483C43.8714 65.2528 44.4081 64.4019 44.4099 63.2219C44.4137 60.7365 44.4099 58.2531 44.4099 55.7677C44.4099 55.6443 44.3781 55.5209 44.3632 55.3974C44.3052 55.3825 44.2454 55.3656 44.1874 55.3507C44.092 55.6125 43.9518 55.8687 43.9106 56.1399C43.7835 56.987 43.7124 57.8416 43.5852 58.6869C43.3814 60.0315 43.1065 61.363 42.1864 62.4327C41.9751 62.6777 41.6684 62.9039 41.3636 62.9937C40.0022 63.3939 38.6258 63.7492 37.2531 64.1083C36.4583 64.3159 36.0432 63.983 36.0282 63.1471C36.0207 62.7413 36.0282 62.3336 36.0282 61.9109L36.0245 61.9091ZM46.0837 55.3769C46.0743 55.577 46.0594 55.7415 46.0594 55.9042C46.0594 58.3035 46.0687 60.7029 46.0537 63.1022C46.0463 64.3925 46.6185 65.2733 47.7929 65.8082C50.5793 67.0798 53.3545 68.3758 56.1372 69.6512C58.2168 70.6049 60.1074 69.3857 60.1168 67.0873C60.1242 65.5108 60.1186 63.9344 60.1168 62.3579C60.1168 62.2083 60.0981 62.0605 60.0887 61.9128H54.4448C54.4448 62.328 54.4485 62.7038 54.4448 63.0797C54.4355 64.0129 54.0334 64.3215 53.1357 64.084C51.8959 63.7548 50.6635 63.3939 49.4143 63.1022C48.7803 62.9544 48.3502 62.6085 48.0061 62.0867C47.3179 61.0432 47.0598 59.8595 46.8822 58.6514C46.7606 57.8211 46.6877 56.9833 46.5624 56.1548C46.5194 55.8687 46.5568 55.4909 46.0855 55.3769H46.0837ZM41.689 43.8067C42.8129 44.4425 43.9387 45.0858 45.0719 45.716C45.158 45.7646 45.3169 45.7628 45.403 45.716C46.5362 45.0858 47.6601 44.4425 48.7822 43.8048C48.6793 43.283 48.5858 42.8043 48.483 42.2863C46.2931 43.3354 44.1219 43.2774 41.9844 42.2021C41.8797 42.7706 41.7862 43.2718 41.6871 43.8067H41.689ZM43.9817 47.0008C42.897 46.3874 41.8629 45.802 40.8587 45.2335C40.4005 45.6132 39.9872 45.9554 39.5589 46.3107C40.451 47.2644 41.3224 48.1957 42.2238 49.157C42.8129 48.4332 43.372 47.7488 43.9817 47.0008ZM49.605 45.2335C48.5746 45.8189 47.5461 46.4023 46.4895 47.0026C47.101 47.7525 47.6583 48.4389 48.2436 49.1588C49.1525 48.1845 50.0314 47.2457 50.9122 46.3032C50.4634 45.9367 50.0557 45.6038 49.6032 45.2354L49.605 45.2335Z"
                fill="white"
              />
              <path
                d="M61.7472 40.9415C61.2741 40.9434 60.9206 40.7265 60.6944 40.3244C60.2736 39.5708 59.6752 39.0116 58.9421 38.5628C58.0837 38.0373 58.0912 37.0031 58.9552 36.4795C59.6901 36.0344 60.2642 35.4547 60.7093 34.7179C61.2142 33.882 62.2634 33.8763 62.7683 34.7104C63.2227 35.4622 63.8118 36.0456 64.5636 36.5019C65.3957 37.0069 65.3883 38.0485 64.5505 38.5572C63.8006 39.0135 63.2283 39.6119 62.7515 40.3468C62.5514 40.6535 62.1512 40.8293 61.8407 41.0649C61.8108 41.0238 61.779 40.9827 61.7491 40.9415H61.7472ZM62.9198 37.5417C62.5308 37.1602 62.0894 36.7264 61.7491 36.3916C61.3807 36.7432 60.9393 37.1621 60.5635 37.5211C60.9524 37.8989 61.39 38.3253 61.7173 38.6432C62.0801 38.3122 62.5289 37.8989 62.9198 37.5417Z"
                fill="white"
              />
              <path
                d="M28.7406 33.9316C29.1277 34.2215 29.5298 34.3936 29.7299 34.6984C30.218 35.4483 30.8052 36.0523 31.5719 36.518C32.3779 37.0079 32.3705 38.0514 31.5588 38.547C30.7921 39.0145 30.203 39.6167 29.7336 40.3797C29.253 41.1633 28.2151 41.167 27.7327 40.3853C27.252 39.6092 26.6461 38.9996 25.8663 38.5227C25.0846 38.044 25.094 36.9986 25.8794 36.5236C26.663 36.0504 27.2558 35.4277 27.7532 34.6647C27.9421 34.373 28.3423 34.2178 28.7406 33.9335V33.9316ZM28.735 36.3964C28.3704 36.7461 27.9309 37.1669 27.555 37.5259C27.9402 37.9018 28.3778 38.3263 28.7219 38.6611C29.0772 38.3226 29.5205 37.9037 29.9263 37.5203C29.5392 37.1557 29.0959 36.7368 28.735 36.3945V36.3964Z"
                fill="white"
              />
              <path
                d="M69.556 49.6992C69.4382 50.249 69.2287 50.6024 68.8229 50.8306C68.073 51.2532 67.5101 51.8498 67.0632 52.5828C66.5414 53.4393 65.4998 53.4319 64.978 52.5697C64.533 51.8329 63.9495 51.2626 63.2164 50.8175C62.3824 50.3088 62.373 49.2634 63.2052 48.7585C63.957 48.3022 64.546 47.7206 64.9986 46.967C65.4886 46.1554 66.5339 46.1329 67.0276 46.9352C67.5064 47.715 68.1235 48.3116 68.8902 48.8053C69.1839 48.9941 69.3391 49.3943 69.5579 49.6992H69.556ZM64.8864 49.7927C65.238 50.1592 65.6606 50.5987 65.9935 50.9446C66.3862 50.5613 66.8219 50.1349 67.1698 49.7927C66.8145 49.428 66.3881 48.9923 66.0309 48.6276C65.67 48.996 65.2417 49.4317 64.8845 49.7927H64.8864Z"
                fill="white"
              />
              <path
                d="M27.9824 49.6744C27.8628 50.2148 27.6814 50.5702 27.2942 50.7927C26.5182 51.2378 25.9253 51.8474 25.4597 52.616C24.9697 53.4239 23.9244 53.4295 23.4307 52.6235C22.9631 51.8587 22.3628 51.264 21.6017 50.7946C20.7957 50.2971 20.7994 49.2592 21.6129 48.7655C22.3647 48.3092 22.9538 47.7276 23.412 46.9796C23.9262 46.1437 24.9623 46.1381 25.469 46.9721C25.9253 47.7239 26.52 48.298 27.2568 48.773C27.5654 48.9712 27.7431 49.3696 27.9806 49.6781L27.9824 49.6744ZM24.448 48.6477C24.0609 49.0124 23.6195 49.4294 23.2867 49.7436C23.6644 50.1569 24.074 50.6057 24.4012 50.961C24.8164 50.5627 25.2559 50.1419 25.6018 49.809C25.2353 49.4388 24.8052 49.0049 24.448 48.6458V48.6477Z"
                fill="white"
              />
              <path
                d="M36.9586 53.5074C36.4799 53.5074 36.0012 53.5205 35.5243 53.5036C34.9464 53.4849 34.6154 53.1708 34.6192 52.6771C34.6229 52.1852 34.952 51.8767 35.5355 51.8692C36.5267 51.8561 37.5159 51.8561 38.5071 51.8692C39.0812 51.8767 39.4384 52.1927 39.4515 52.6659C39.4646 53.1521 39.0887 53.4924 38.494 53.5074C37.9816 53.5205 37.4692 53.5093 36.9568 53.5074H36.9586Z"
                fill="white"
              />
              <path
                d="M46.0525 50.4903C46.0413 50.9373 45.6635 51.2982 45.2166 51.2888C44.7678 51.2795 44.4068 50.9017 44.4162 50.4548C44.4255 50.0097 44.807 49.6432 45.2521 49.6525C45.6953 49.6619 46.0637 50.0471 46.0525 50.4884V50.4903Z"
                fill="white"
              />
              <path
                d="M45.2259 53.4508C44.7752 53.4451 44.4124 53.073 44.418 52.6242C44.4236 52.1791 44.8051 51.807 45.2465 51.8126C45.6878 51.8182 46.0618 52.2015 46.0544 52.6429C46.0487 53.0917 45.6747 53.4545 45.2259 53.4489V53.4508Z"
                fill="white"
              />
            </svg>
            <h1 className="text-[#6D6A6A] font-medium header text-[25px] md:text-[28px]">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["HOSPITALITY", 2000]}
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
            The hospitality sector will thrive in VYUG, allowing users to
            explore virtual hotels and resorts before booking their stays.
            Guests can experience personalized services, interact with staff in
            a virtual setting, and enjoy unique experiences tailored to their
            preferences
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
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              zIndex: 1,
            }}
          />
          <Box className="absolute z-[2] top-[55%] sm:top-1/2 md:top-2/3 left-10 sm:left-20 md:left-36 flex flex-col gap-2 md:gap-2.5">
            <p className="w-3/4 text-white text-lg sm:text-xl md:text-2xl text-start header">
              Experience luxury like never before in a virtual paradise that
              redefines hospitality
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

export default Hospitality;
