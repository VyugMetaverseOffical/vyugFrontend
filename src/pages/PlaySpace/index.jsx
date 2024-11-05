import React, { useEffect, useState } from "react";
import playSpaceImg from "../../images/playSpaceImg.webp";
import playSpace from "../../images/playSpace.svg";
import Footer from "../../components/Footer";
import Header from "../../components/Head";
import { Typography } from "@mui/material";
import { ComingSoon } from "../../components/ComingSoon";
import SideIcon from "../../components/side-icon";
import { TypeAnimation } from "react-type-animation";
import {
  handleScrollAnimation,
  handleTypeAnimation,
} from "../../lib/animations";
import { Helmet } from "react-helmet-async";

const PlaySpace = () => {
  const [position, setPosition] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);
  const [status, setStatus] = useState(1);

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
    window.scrollTo(0, 0);
    const handleScroll = () => {
      handleScrollAnimation("rw1", null, "rwt1");
      handleTypeAnimation("rw1", setAnimationTriggered);
      handleScrollAnimation("rw2", null, "rwt2");
      handleScrollAnimation("rw3", null, "rwt3");
      handleTypeAnimation("rw3", setAnimation2Triggered);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Play Space - VYUG Metaverse</title>
        <meta name="description" content="Play Space" />
        <meta name="keywords" content="Play Space" />
        <meta property="og:title" content="Play Space" />
        <meta property="og:description" content="Play Space" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/play-space" />
      </Helmet>
      <Header isTransparent={position} isHeaderText={true} />
      <SideIcon />
      <div className="w-[85%] sm:w-[80%] lg:w-[65%] mx-auto flex flex-col mt-40 justify-center gap-2 sm:gap-4 items-center">
        <img src={playSpace} alt="Be an Investor" />
        <div>
          <h1 className="text-[#242424] header text-3xl sm:text-4xl text-center md:text-[45px]">
            <TypeAnimation
              sequence={["VYUG PlaySpace", 1000]}
              wrapper="span"
              speed={30}
              repeat={0}
              cursor={false}
            />
          </h1>
          <h2 className="text-[#242424] description text-xl text-center md:text-[26px] mt-3 animate-slide-from-bottom">
            Dive into the Future of Gaming
          </h2>
        </div>
        <p className="description text-sm md:text-base text-center text-[#6D6A6A] mt-12 animate-slide-from-right">
          Welcome to VYUG PlaySpace, an innovative gaming platform where
          immersive VR experiences come to life across multiple devices,
          including iOS, Android, and web browsers. With a rich catalog of
          games, integration with the VYUG NFT Marketplace, and a robust
          ecosystem powered by the VYUG Token, PlaySpace offers players a
          dynamic environment for exploration and engagement. Key features
          include cross-platform accessibility, unique NFT-based in-game assets,
          staking mechanisms for enhanced rewards, and a vibrant community that
          fosters collaboration and competition.
        </p>
        <br />
        <p className="description text-center text-sm md:text-base text-[#6D6A6A] animate-slide-from-left">
          At VYUG PlaySpace, we're dedicated to pushing the boundaries of
          interactive gaming through innovative VR development and community
          engagement. As we expand our offerings, we will be dropping a number
          of exciting new games that will launch exclusively within VYUG
          PlaySpace. Each game will be crafted with cutting-edge technology to
          deliver unforgettable experiences that captivate players. Join us on
          this exciting journey and explore the limitless possibilities that
          await in VYUG PlaySpace!
        </p>
      </div>
      <div className="my-10 sm:my-32 w-[90%] sm:w-[85%] mx-auto flex flex-col gap-5 sm:gap-10 justify-center items-center">
        <div id="rw1">
          <Typography
            variant="h2"
            className="header text-center text-3xl sm:text-4xl md:text-[45px] text-[#242424]"
          >
            {animationTriggered && (
              <TypeAnimation
                sequence={["GAMES", 2000]}
                wrapper="span"
                speed={30}
                repeat={0}
                cursor={false}
              />
            )}
          </Typography>
        </div>
        <div className="pt-10 w-full flex flex-col lg:flex-row gap-10 sm:gap-20 justify-center items-center">
          <div className="lg:w-1/2 w-full flex flex-col justify-center gap-4 sm:gap-6">
            <Typography
              variant="h2"
              component={"h3"}
              className="header text-left text-2xl sm:text-4xl md:text-[45px] text-[#00000]"
            >
              {animationTriggered && (
                <TypeAnimation
                  sequence={["V1 Turbo Track", 2000]}
                  wrapper="span"
                  speed={30}
                  repeat={0}
                  cursor={false}
                />
              )}
            </Typography>
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm text-[#6D6A6A]"
            >
              Edition 1
            </Typography>
            <div className="inline-block lg:hidden w-[90%] rounded-xl sm:w-[60%] h-[100%] md:w-1/2 flex overflow-hidden justify-center items-center">
              <img
                src={playSpaceImg}
                className="imageHover w-[100%] h-[100%]"
                alt="V1 Turbo Track"
              />
            </div>
            <div id="rw2">
              <Typography
                id="rwt2"
                variant="subtitle2"
                component={"p"}
                className="description text-left text-sm md:text-base text-[#6D6A6A] hidden-text"
              >
                <b>V1 Turbo Track, </b> the premier destination for virtual
                racing enthusiasts! Here, you can push your limits and
                experience the pure exhilaration of the race in a way never
                before possible. VYUG offers a variety of experiences to keep
                you engaged. Step into your personal VR haven, the Garage.
                Admire your car collection, tinker with modifications, and get
                race-ready in this dedicated space Prepare to test your skills
                on a diverse range of Race Tracks.
                <br />
                <br />
                V1 Turbo Track for you developed by <b>VYUG Studios, </b> the
                future of VR racing! V1 is a groundbreaking VR racing experience
                that puts you in the driver's seat of high performance vehicles,
                from sleek sports cars to roaring muscle cars and experiences
                the rush of adrenaline in a fully immersive 360-degree world.
              </Typography>
            </div>
            <button
              onClick={() => setStatus(0)}
              className="white-btn w-fit py-2 mt-5 sm:mt-10 px-4 lg:px-10 rounded-3xl description uppercase"
            >
              coming soon
            </button>
          </div>
          <div className="w-1/3 overflow-hidden rounded-xl h-[60vh] flex hidden lg:block justify-center items-center">
            <img
              src={playSpaceImg}
              className="imageHover w-[100%] h-[100%]"
              alt="V1 Turbo Track"
            />
          </div>
        </div>
      </div>
      <Footer />
      {status == 0 && <ComingSoon status={status} setStatus={setStatus} />}
    </div>
  );
};

export default PlaySpace;
