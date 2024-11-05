import React, { useState, useRef, useEffect } from "react";
import video from "../../videos/VyugAbout.mp4";
import video1 from "../../videos/mobileAbout.mp4";
import aboutLeft from "../../images/aboutLeft.svg";
import aboutRight from "../../images/aboutRight.svg";
import { Divider, TextField, Typography, useMediaQuery } from "@mui/material";
import SideIcon from "../../components/side-icon";
import Footer from "../../components/Footer";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import video_vyug from "../../videos/aboutPlanet.mp4";
import video_vyugPlanet from "../../videos/mobileVyugPlanet.mp4";
import { Link } from "react-router-dom";
import Header from "../../components/Head";
import { TypeAnimation } from "react-type-animation";
import {
  handleScrollAnimation,
  handleTypeAnimation,
} from "../../lib/animations";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "What is VYUG?",
    answer:
      "VYUG, the next YUG or Era, is a pathway from your imagination into reality.",
  },
  {
    question: "How do I create an account on VYUG?",
    answer:
      "VYUG works by harnessing the power of imagination and transforming it into reality through innovative technologies.",
  },
  {
    question: "What can I do with virtual land in VYUG?",
    answer:
      "VYUG, the next YUG or Era, is a pathway from your imagination into reality.",
  },
  {
    question: "What devices can I use to access VYUG?",
    answer:
      "VYUG works by harnessing the power of imagination and transforming it into reality through innovative technologies.",
  },
  {
    question: "How do I purchase virtual land in VYUG?",
    answer:
      "VYUG, the next YUG or Era, is a pathway from your imagination into reality.",
  },
  {
    question:
      "How can I stay updated with the latest news and developments in VYUG?",
    answer:
      "VYUG works by harnessing the power of imagination and transforming it into reality through innovative technologies.",
  },
];

function About() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);
  const [animation3Triggered, setAnimation3Triggered] = useState(false);
  const [animation4Triggered, setAnimation4Triggered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isMobile = useMediaQuery("(max-width: 920px");

  const videoRef = useRef(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isVisible;
    }
  }, [isVisible]);

  useEffect(() => {
    window.scrollTo(0, 0);
    handleScrollAnimation("rw2", null, "rwt2");
    const handleScroll = () => {
      handleScrollAnimation("rw1", null, "rwt1");
      handleScrollAnimation("rw3", null, "rwt3");
      handleTypeAnimation("rw1", setAnimationTriggered);
      handleTypeAnimation("rw3", setAnimation2Triggered);
      handleTypeAnimation("rw4", setAnimation3Triggered);
      handleScrollAnimation("rw4", null, "rwt4");
      handleTypeAnimation("rw5", setAnimation4Triggered);
      handleScrollAnimation("rw5", null, "rwt5");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us - VYUG Metaverse</title>
        <meta name="description" content="About Us" />
        <meta name="keywords" content="About Us" />
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="About Us" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/about-us" />
      </Helmet>
      <Header isTransparent={position} isHeaderText={true} />
      <SideIcon />

      <div className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto flex flex-col pt-44 pb-32 justify-center gap-2 sm:gap-4 items-center">
        <Typography
          variant="h1"
          className="header text-[#242424] text-2xl sm:text-4xl lg:text-[45px]"
        >
          <TypeAnimation
            sequence={[" Welcome to VYUG", 2000]}
            wrapper="h1"
            speed={30}
            repeat={0}
            cursor={false}
          />
        </Typography>
        <Typography
          variant="h1"
          className="header text-2xl text-[#242424] text-center sm:text-3xl lg:text-4xl pb-10 sm:pb-20 font-normal"
        >
          <TypeAnimation
            sequence={["A New Era of Digital Existence", 2000]}
            wrapper="h1"
            speed={30}
            repeat={0}
            cursor={false}
          />
        </Typography>
        <div className="animate-slide-from-right">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description italic text-[#6D6A6A] text-[15px] pb-3 md:text-base font-bold text-center"
          >
            From Darkness to Dawn: The Journey Through Time
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-sm md:text-base text-[#6D6A6A] text-center"
          >
            In the vast tapestry of time, humanity has traversed through various
            epochs, each marked by its unique challenges and triumphs. From the
            Satya Yuga, a time of truth and virtue, to the Treta Yuga, where
            duty and righteousness began to wane, and onto the Dvapara Yuga, a
            period characterized by conflict and the gradual decline of
            morality, we have seen humanity evolve. Finally, we find ourselves
            in the Kali Yuga, a dark age filled with discord, division, and
            uncertainty. Yet, as history has shown, every ending is but a new
            beginning.
          </Typography>
        </div>
      </div>
      {isMobile ? (
        <div
          className="aboutVideo-container flex justify-center pb-20 items-center min-h-screen"
          id="rw1"
        >
          <video
            id="aboutVideo-1"
            playsInline
            webkit-playsinline="true"
            autoPlay
            loop
            ref={videoRef}
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-[90%] sm:w-[80%] mx-auto pt-[40em]">
            <div id="text2" className="w-full">
              <Typography
                variant="h2"
                className="header text-center text-[#242424] text-2xl sm:pb-5 sm:text-4xl md:text-[45px]"
              >
                {animationTriggered && (
                  <TypeAnimation
                    sequence={["Introducing VYUG", 2000]}
                    wrapper="h1"
                    speed={30}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </Typography>
              <Typography
                variant="h1"
                className="description text-center text-[#242424] text-3xl pb-5 sm:text-3xl md:text-3xl pb-10"
              >
                {animationTriggered && (
                  <TypeAnimation
                    sequence={["The Next Digital Epoch", 1000]}
                    wrapper="h1"
                    speed={30}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-center text-sm text-[#6D6A6A] md:text-base hidden-text"
                id="rwt1"
              >
                <b>VYUG</b> is not just a name; it is a revolution. It
                represents the dawn of a <b>new digital era</b>, transcending
                the limitations of previous ages to create a vibrant, inclusive,
                and technologically advanced world. it is a hyper-realistic
                metaverse—a revolutionary space designed to elevate the human
                experience beyond the limitations of the physical world. In a
                time when many feel isolated and overwhelmed by the complexities
                of modern life, VYUG offers a sanctuary where connection,
                creativity, and community thrive.
                <br />
                <br />
                This new epoch - <b>VYUG</b>, is a digital world built upon the
                foundation of technology and human values. It is a space where
                boundaries of race, caste, and age dissolve, allowing every
                individual to belong, participate, and contribute. Here, we
                embrace diversity and inclusivity, creating a vibrant tapestry
                of cultures and ideas from around the globe.
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="aboutVideo-container flex justify-center items-center min-h-screen"
          id="rw1"
        >
          <video
            id="aboutVideo-1"
            playsInline
            webkit-playsinline="true"
            autoPlay
            loop
            ref={videoRef}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-[90%] sm:w-[87%] md:w-[80%] mx-auto">
            <div id="text2" className="w-full my-40 md:w-[50%] ml-auto">
              <Typography
                variant="h1"
                className="header text-left text-3xl sm:pb-5 md:text-4xl text-[#242424] lg:text-[45px]"
              >
                {animationTriggered && (
                  <TypeAnimation
                    sequence={["Introducing VYUG", 2000]}
                    wrapper="h1"
                    speed={30}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </Typography>
              <Typography
                variant="h2"
                className="description text-left pb-5 sm:text-3xl text-left text-[#242424] md:text-[27px] pb-10"
              >
                {animationTriggered && (
                  <TypeAnimation
                    sequence={["The Next Digital Epoch", 1000]}
                    wrapper="h2"
                    speed={30}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-left text-sm text-[#6D6A6A] md:text-base hidden-text "
                id="rwt1"
              >
                <b>VYUG</b> is not just a name; it is a revolution. It
                represents the dawn of a <b>new digital era</b>, transcending
                the limitations of previous ages to create a vibrant, inclusive,
                and technologically advanced world. it is a hyper-realistic
                metaverse—a revolutionary space designed to elevate the human
                experience beyond the limitations of the physical world. In a
                time when many feel isolated and overwhelmed by the complexities
                of modern life, VYUG offers a sanctuary where connection,
                creativity, and community thrive.
                <br />
                <br />
                This new epoch - <b>VYUG</b>, is a digital world built upon the
                foundation of technology and human values. It is a space where
                boundaries of race, caste, and age dissolve, allowing every
                individual to belong, participate, and contribute. Here, we
                embrace diversity and inclusivity, creating a vibrant tapestry
                of cultures and ideas from around the globe.
              </Typography>
            </div>
          </div>
        </div>
      )}
      <div
        className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto flex flex-col justify-center items-center py-40"
        id="rw3"
      >
        <Typography
          variant="h1"
          className="header text-3xl text-[#242424] text-center sm:text-4xl lg:text-[45px] pb-10"
        >
          {animation2Triggered && (
            <TypeAnimation
              sequence={["The Inspiring Tale of VYUG", 2000]}
              wrapper="h1"
              speed={30}
              repeat={0}
              cursor={false}
            />
          )}
        </Typography>
        <Typography
          variant="subtitle2"
          component={"p"}
          className="description text-center text-sm sm:text-base sm:text-center text-[#6D6A6A] hidden-text"
          id="rwt3"
        >
          Imagine a world that seamlessly blends the best of our Earth with the
          limitless potential of a digital realm. In VYUG, every landscape is
          crafted with precision, mimicking the breathtaking beauty of our
          planet while introducing elements of wonder and creativity.
          <br />
          <br />
          In this hyper-realistic metaverse, you will wander through lush
          forests and climb majestic mountains, all from the comfort of your own
          home. You can connect with people from all corners of the globe,
          sharing experiences and building friendships that transcend physical
          distances. Engage in thrilling adventures, express your creativity,
          and explore new horizons in a space where your dreams are not just
          fantasies but tangible realities.
        </Typography>
      </div>
      {isMobile ? (
        <div
          className="aboutVideo-container flex justify-center pb-20 items-center min-h-screen"
          id="rw1"
        >
          <video
            id="aboutVideo-1"
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
          >
            <source src={video_vyugPlanet} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-[90%] sm:w-[80%] mx-auto" id="rw4">
            <div id="text2" className="w-full mt-[30em]">
              <Typography
                variant="h1"
                className="header text-center text-[#fff] pt-4 sm:pt-10 sm:pb-3 text-3xl sm:text-4xl md:text-[45px]"
              >
                {animation3Triggered && (
                  <TypeAnimation
                    sequence={["Why Should Every", 2000]}
                    wrapper="h1"
                    speed={30}
                    repeat={0}
                    cursor={false}
                  />
                )}{" "}
                <br />
              </Typography>
              <Typography
                variant="h1"
                className="header text-center text-[#fff] pb-10 text-2xl sm:text-3xl lg:text-4xl"
              >
                {animation3Triggered && (
                  <TypeAnimation
                    sequence={["Human Belong to VYUG?", 2000]}
                    wrapper="h1"
                    speed={30}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-center text-[#fff] text-sm md:text-base hidden-text"
                id="rwt4"
              >
                In today's world, we face unprecedented challenges that demand
                innovative solutions. VYUG addresses these issues by offering a
                platform where creativity and technology converge to create
                impactful experiences. Here, we empower individuals to
                contribute to a thriving ecosystem that values collaboration
                over competition, unity over division.
                <br />
                <br />
                <b>VYUG</b> is for everyone—an open space free from
                discrimination, where age, race, or social status have no
                bearing on one's ability to participate and prosper. It is a
                digital sanctuary that embraces the essence of humanity,
                allowing individuals to explore their passions and connect with
                others who share their vision.
                <br />
                <br />
                As we embark on this journey into VYUG, we invite you to join us
                in shaping a new reality. Together, we can leave behind the
                constraints of the Kali Yuga and step into a future filled with
                hope, innovation, and boundless potential.
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <div className="aboutVideo-container h-screen md:min-h-[140vh] flex justify-center items-center">
          <video
            id="aboutVideo-1"
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
          >
            <source src={video_vyug} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-[90%] sm:w-[80%] mx-auto" id="rw4">
            <div id="text2" className="w-full md:w-[60%] ml-auto">
              <Typography
                variant="h1"
                className="header text-left text-[#fff] pt-4 sm:pt-10 sm:pb-3 text-3xl sm:text-4xl md:text-[45px]"
              >
                {animation3Triggered && (
                  <TypeAnimation
                    sequence={["Why Should Every", 2000]}
                    wrapper="h1"
                    speed={30}
                    repeat={0}
                    cursor={false}
                  />
                )}{" "}
                <br />
              </Typography>
              <Typography
                variant="h1"
                className="header text-left text-[#fff] pb-10 text-2xl sm:text-3xl lg:text-4xl"
              >
                {animation3Triggered && (
                  <TypeAnimation
                    sequence={["Human Belong to VYUG?", 2000]}
                    wrapper="h1"
                    speed={30}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-left text-[#fff] text-sm md:text-base hidden-text"
                id="rwt4"
              >
                In today's world, we face unprecedented challenges that demand
                innovative solutions. VYUG addresses these issues by offering a
                platform where creativity and technology converge to create
                impactful experiences. Here, we empower individuals to
                contribute to a thriving ecosystem that values collaboration
                over competition, unity over division.
                <br />
                <br />
                <b>VYUG</b> is for everyone—an open space free from
                discrimination, where age, race, or social status have no
                bearing on one's ability to participate and prosper. It is a
                digital sanctuary that embraces the essence of humanity,
                allowing individuals to explore their passions and connect with
                others who share their vision.
                <br />
                <br />
                As we embark on this journey into VYUG, we invite you to join us
                in shaping a new reality. Together, we can leave behind the
                constraints of the Kali Yuga and step into a future filled with
                hope, innovation, and boundless potential.
              </Typography>
            </div>
          </div>
        </div>
      )}
      <div
        className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto flex flex-col justify-center gap-4 md:py-32 py-40 items-center"
        id="rw5"
      >
        <Typography
          variant="h1"
          className="header text-center text-3xl text-[#242424] sm:text-4xl lg:text-[45px] pb-10"
        >
          {animation2Triggered && (
            <TypeAnimation
              sequence={["VYUG: The New Normal", 2000]}
              wrapper="h1"
              speed={30}
              repeat={0}
              cursor={false}
            />
          )}
        </Typography>
        <Typography
          variant="subtitle2"
          component={"p"}
          className="description text-sm md:text-base text-[#6D6A6A] text-center hidden-text"
          id="rwt5"
        >
          VYUG is not just a virtual experience; it is a way of life. It is the
          new normal where technology and humanity harmoniously coexist, paving
          the way for a brighter future. As we navigate this transformative
          journey, we invite you to envision a world where every individual has
          a place, a purpose, and the opportunity to thrive. <br /> Welcome to
          VYUG—a place where the whole world belongs, and every story matters.
          Join us in building a vibrant, inclusive, and innovative digital
          future, where we can all thrive together.
        </Typography>
      </div>
      <div className="w-[95%] md:w-[80%] xl:w-[65%] mx-auto flex flex-col justify-center gap-10 pb-20 md:pb-32 items-center">
        <Typography
          variant="h2"
          className="description hidden sm:block text-sm sm:text-2xl lg:text-[33px] text-center leading-4"
        >
          Welcome to <b>VYUG</b> | Welcome to your <b>New Reality</b>
        </Typography>
        <Typography
          variant="h2"
          className="description sm:hidden sm:block text-[22px] lg:text-3xl text-center leading-10"
        >
          Welcome to <b>VYUG</b> <br /> Welcome to your <b>New Reality</b>
        </Typography>
        <div className="flex justify-center items-start gap-2 -mt-5">
          <div>
            <img src={aboutLeft} alt="Left_invertedcomma" aria-hidden="true" />
          </div>
          <Typography
            variant="h2"
            className="description text-[22px] text-center sm:text-[22px] lg:text-[33px]"
          >
            Welcome to <b>Where You Belong</b>
          </Typography>
          <div>
            <img src={aboutRight} alt="Right_invertedcomma" aria-hidden="true" />
          </div>
        </div>
      </div>
      <Grid2
        xs={12}
        container
        className="flex justify-center mt-20 py-10 text-[#fff] bg-[#222020]"
      >
        <Grid2 xs={11}>
          <Typography
            variant="h2"
            className="header text-3xl sm:text-4xl md:text-[45px] text-[#fff]"
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
              component={"p"}
              className="description text-sm md:text-base text-[#fff]"
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
                component={"p"}
                className="description text-sm md:text-base text-[#fff]"
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
                  component={"p"}
                  className="description text-sm md:text-base cursor-pointer text-[#fff]"
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}{" "}
                </Typography>
                {expandedIndex === index && (
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-left faq-transition font-semibold bg-[#fff] text-[#000000] rounded-xl p-5 mt-2 text-sm md:text-base"
                  >
                    {faq.answer}
                  </Typography>
                )}
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
  );
}
export default React.memo(About);
