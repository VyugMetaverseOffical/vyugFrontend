import { Divider, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import google from "../images/partners/google_workspace.svg";
import rokoko from "../images/partners/rokoko.svg";
import blender from "../images/partners/blender.svg";
import aws from "../images/partners/aws.svg";
import avtf from "../images/partners/avtf.svg";
import collab from "../images/partners/collab.svg";
import resources from "../images/partners/resources.svg";
import market from "../images/partners/market.svg";
import vision from "../images/partners/vision.svg";
import unreal_engine from "../images/partners/unreal_engine.svg";
import Header from "../components/Head";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import { TypeAnimation } from "react-type-animation";
import { handleScrollAnimation, handleTypeAnimation } from "../lib/animations";
import { Helmet } from "react-helmet-async";

const Partners = () => {
  const [position, setPosition] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);
  const [animation3Triggered, setAnimation3Triggered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 850px");

  const partnerData = [
    {
      id: 1,
      name: "Innovative \n Collaboration",
      desc: "Join us in shaping the future of the digital landscape. Our partners will have the opportunity to collaborate on groundbreaking projects that leverage the power of VR, blockchain, and immersive technologies",
      imgUrl: collab,
    },
    {
      id: 2,
      name: "Access to \n Resources",
      desc: "As a partner of VYUG, you will gain access to our cutting-edge tools, technologies, and resources, enabling you to bring your ideas to life in our metaverse",
      imgUrl: resources,
    },
    {
      id: 3,
      name: "Market \n Expansion",
      desc: "By partnering with VYUG, organizations can tap into new markets and reach a diverse global audience, enhancing their brand visibility and customer engagement",
      imgUrl: market,
    },
    {
      id: 4,
      name: "Shared \n Vision",
      desc: "We work closely with our partners to align our goals and strategies, ensuring that our collaborative efforts contribute to the overall success of the VYUG ecosystem",
      imgUrl: vision,
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
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      handleScrollAnimation("rw1", null, "rwt1");
      handleTypeAnimation("rw1", setAnimationTriggered);
      handleScrollAnimation("rw2", null, "rwt2");
      handleTypeAnimation("rw2", setAnimation2Triggered);
      handleScrollAnimation("rw3", null, "rwt3");
      handleTypeAnimation("rw3", setAnimation3Triggered);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Partners of VYUG - VYUG Metaverse</title>
        <meta name="description" content="Partners of VYUG" />
        <meta name="keywords" content="Partners of VYUG" />
        <meta property="og:title" content="Partners of VYUG" />
        <meta property="og:description" content="Partners of VYUG" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/partners" />
      </Helmet>
      <div className="min-h-screen">
        <Header isTransparent={position} isHeaderText={true} />
        <div className="w-[90%] sm:w-[80%] md:w-[75%] mx-auto flex flex-col justify-center items-center pt-44 pb-32">
          <Typography
            variant="h2"
            className="header text-3xl text-[#242424] sm:text-4xl md:text-[45px] pb-4"
          >
            <TypeAnimation
              sequence={["Partners of VYUG", 1000]}
              wrapper="span"
              speed={30}
              repeat={0}
              cursor={false}
            />
          </Typography>
          <Typography
            variant="h2"
            className="description text-[#6D6A6A] text-lg sm:text-xl lg:text-2xl pb-10 animate-slide-from-bottom"
          >
            Together Towards a New Digital Epoch
          </Typography>
          <Typography
            variant="subtitle1"
            className="description text-[#6D6A6A] text-sm md:text-base text-center animate-slide-from-right"
          >
            <b>At VYUG</b>, collaboration is the key to unlocking the full
            potential of our hyper-realistic metaverse. We are proud to partner
            with industry leaders, innovators, and organizations that share our
            vision of creating a vibrant and inclusive digital space. Together,
            we aim to revolutionize various sectors, from education and
            entertainment to corporate and sustainability.
          </Typography>
        </div>
        <div id="rw1" className="bg-[#D9D9D9] flex justify-center items-center">
          <div className="w-[100%] sm:w-[80%] md:w-[75%] mx-auto flex flex-col justify-center gap-4 items-center py-20 sm:py-32">
            <Typography
              variant="h2"
              className="header text-[#242424] text-center text-3xl sm:text-4xl text-left md:text-[45px] pb-10"
            >
              {animationTriggered && (
                <TypeAnimation
                  sequence={["Our Partnership Philosophy", 2000]}
                  wrapper="span"
                  speed={30}
                  repeat={0}
                  cursor={false}
                />
              )}
            </Typography>
            <Typography
              id="rwt1"
              variant="subtitle1"
              className="description text-[#6D6A6A] text-sm md:text-base text-center hidden-text"
            >
              We recognize that building a successful metaverse requires diverse
              expertise and perspectives. By partnering with like-minded
              organizations, we can harness our collective strengths to drive
              innovation, enhance user experiences, and create solutions that
              address real-world challenges. Our partnerships are founded on
              mutual respect, shared values, and a commitment to fostering a
              brighter future for all.
            </Typography>
          </div>
        </div>
        <div
          id="rw2"
          className="w-[90%] sm:w-[80%] md:w-[75%] mx-auto flex flex-col justify-center gap-4 items-center pt-20 sm:pt-32"
        >
          <Typography
            variant="h2"
            className="header text-3xl text-center text-[#242424] sm:text-4xl md:text-[45px] pb-10"
          >
            {animation2Triggered && (
              <TypeAnimation
                sequence={["What We Offer Our Partners", 2000]}
                wrapper="span"
                speed={30}
                repeat={0}
                cursor={false}
              />
            )}
          </Typography>
          {/* <Typography
          id="rwt2"
          variant="subtitle1"
          className="description text-[#6D6A6A] text-sm md:text-base text-center hidden-text"
        >
          We recognize that building a successful metaverse requires diverse
          expertise and perspectives. By partnering with like-minded
          organizations, we can harness our collective strengths to drive
          innovation, enhance user experiences, and create solutions that
          address real-world challenges. Our partnerships are founded on mutual
          respect, shared values, and a commitment to fostering a brighter
          future for all.
        </Typography> */}
        </div>
        <div className="w-[95%] pt-20 overflow-x-auto sm:w-[80%] mx-auto flex justify-center items-start pb-40">
          <div className="flex w-full justify-evenly gap-2 md:gap-4 items-start">
            {partnerData.map((partner) => (
              <div
                key={partner.id}
                style={{ flexShrink: 0 }}
                className="cursor-pointer transition duration-500 ease-in-out group group-hover hover:bg-[#242424] rounded-2xl py-10 w-[12rem] md:w-[14rem] border-[3px] border-[#242424] flex flex-col justify-center items-center gap-5"
              >
                <div className="w-28 h-28">
                  <img
                    src={partner.imgUrl}
                    alt={partner.name}
                    className="contrast-[100%] transition duration-500 group-hover:scale-110 brightness-0 group-hover:contrast-[1] group-hover:brightness-[1] object-cover w-[100%] h-[100%]"
                  />
                </div>
                <h6 className="text-[#242424] whitespace-pre-line pt-4 transition duration-500 group-hover:text-[#fff] text-center header text-sm md:text-base uppercase">
                  {partner.name}
                </h6>
                <Typography
                  variant="subtitle2"
                  className="description pt-4 px-[2px] md:px-3 text-center hidden text-[#fff] transition duration-500 group-hover:block font-semibold text-sm"
                >
                  {partner.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div
          id="rw3"
          className="w-[90%] sm:w-[80%] md:w-[75%] mx-auto flex flex-col justify-center items-center pb-36"
        >
          <Typography
            variant="h2"
            className="header text-center text-3xl sm:text-4xl md:text-[45px] text-[#242424] uppercase pb-10"
          >
            {animation3Triggered && (
              <TypeAnimation
                sequence={["Current Partners", 2000]}
                wrapper="span"
                speed={30}
                repeat={0}
                cursor={false}
              />
            )}
          </Typography>
          <div className="w-[100%] flex flex-wrap justify-between items-center">
            <div className="w-[30%] sm:w-[20%] md:px-3 lg:px-5 flex justify-center items-center">
              <img
                src={avtf}
                alt="avtf_technology"
                className="h-[100%] w-[100%] contrast-[1] brightness-[1] sm:contrast-[80%] sm:brightness-0 hover:contrast-[1] hover:brightness-[1] cursor-pointer transform transition-transform duration-500 hover:scale-110 ease-in-out"
              />
            </div>
            <Divider
              className="my-8 md:my-12 xl:my-16 h-10"
              sx={{
                my: 2,
                mx: 1,
                backgroundColor: "black",
              }}
              orientation="vertical"
            />
            <div className="w-[55%] sm:w-[35%] md:px-3 lg:px-5 flex justify-center items-center">
              <img
                src={google}
                alt="avtf_technology"
                className="h-[100%] w-[100%] contrast-[1] brightness-[1] sm:contrast-[80%] sm:brightness-0 hover:contrast-[1] hover:brightness-[1] cursor-pointer transform transition-transform duration-500 hover:scale-110 ease-in-out"
              />
            </div>
            <Divider
              className="my-8 md:my-12 xl:my-16 h-10"
              sx={{
                my: 2,
                mx: 1,
                backgroundColor: "black",
              }}
              orientation="vertical"
            />
            <div className="w-[45%] sm:w-[35%] md:px-3 lg:px-5 flex justify-center items-center">
              <img
                src={rokoko}
                alt="avtf_technology"
                className="h-[100%] w-[100%] contrast-[1] brightness-[1] sm:contrast-[80%] sm:brightness-0 hover:contrast-[1] hover:brightness-[1] cursor-pointer transform transition-transform duration-500 hover:scale-110 ease-in-out"
              />
            </div>
            <Divider
              className="my-8 md:my-12 xl:my-16 h-10"
              sx={{
                my: 2,
                mx: 1,
                backgroundColor: "black",
              }}
              orientation="vertical"
            />
            <div className="w-[28%] sm:w-[20%] md:px-3 lg:px-5 flex justify-center items-center">
              <img
                src={aws}
                alt="avtf_technology"
                className="h-[100%] w-[100%] contrast-[1] brightness-[1] sm:contrast-[80%] sm:brightness-0 hover:contrast-[1] hover:brightness-[1] cursor-pointer transform transition-transform duration-500 hover:scale-110 ease-in-out"
              />
            </div>
            <Divider
              className="my-8 md:my-12 xl:my-16 h-10"
              sx={{
                my: 2,
                mx: 1,
                backgroundColor: "black",
              }}
              orientation="vertical"
            />
            <div className="w-[45%] sm:w-[30%] md:px-3 lg:px-5 flex justify-center items-center">
              <img
                src={unreal_engine}
                alt="avtf_technology"
                className="h-[100%] w-[100%] contrast-[1] brightness-[1] sm:contrast-[80%] sm:brightness-0 hover:contrast-[1] hover:brightness-[1] cursor-pointer transform transition-transform duration-500 hover:scale-110 ease-in-out"
              />
            </div>
            <Divider
              className="my-8 md:my-12 xl:my-16 h-10"
              sx={{
                my: 2,
                mx: 1,
                backgroundColor: "black",
              }}
              orientation="vertical"
            />
            <div className="w-[45%] sm:w-[30%] md:px-3 lg:px-5 flex justify-center items-center">
              <img
                src={blender}
                alt="avtf_technology"
                className="h-[100%] w-[100%] contrast-[1] brightness-[1] sm:contrast-[80%] sm:brightness-0 hover:contrast-[1] hover:brightness-[1] cursor-pointer transform transition-transform duration-500 hover:scale-110 ease-in-out"
              />
            </div>
          </div>
          <Typography
            variant="h2"
            className="description text-sm md:text-base text-[#D7D7D7] pt-10"
          >
            Many more to go...
          </Typography>
        </div>
        <GetInTouch BgColor={"black"} />
        <Footer />
      </div>
    </>
  );
};

export default Partners;
