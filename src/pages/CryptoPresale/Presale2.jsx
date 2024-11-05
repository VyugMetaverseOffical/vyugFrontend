import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cloud1 from "../../images/presale/cloud1.svg";
import treasure from "../../images/presale/treasure.svg";
import cloud2 from "../../images/presale/cloud2.svg";
import cloud3 from "../../images/presale/cloud3.svg";
import cloud4 from "../../images/presale/cloud4.svg";
import cloud5 from "../../images/presale/cloud5.svg";
import cloud6 from "../../images/presale/cloud6.svg";
import cloud8 from "../../images/presale/cloud8.svg";
import cloud7 from "../../images/presale/cloud7.svg";
import citycloud1 from "../../images/presale/cityCloud1.svg";
import citycloud2 from "../../images/presale/cityCloud2.svg";
import shuttle1 from "../../images/presale/shuttle1.svg";
import shuttle2 from "../../images/presale/shuttle2.svg";
import shuttle3 from "../../images/presale/shuttle3.svg";
import shuttle4 from "../../images/presale/shuttle4.svg";
import shuttle5 from "../../images/presale/shuttle5.svg";
import plane from "../../images/presale/plane.svg";
import city from "../../images/presale/city.svg";
import screen1 from "../../images/presale/screen1.svg";
import playspace from "../../images/presale/playspace.svg";
import character from "../../images/presale/character.svg";
import screen2 from "../../images/presale/screen2.svg";
import sun from "../../images/presale/sun.svg";
import nft from "../../images/presale/nft.svg";
import nft1 from "../../images/presale/nft1.svg";
import nftFrame from "../../images/presale/nftFrame.svg";
import girl from "../../images/presale/girl.svg";
import nftCharacter from "../../images/presale/nftCharacter.svg";
import { useMediaQuery } from "@mui/material";
import PreSaleTxn from "../../components/PreSaleTxn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../apis/api";
import scrollDown from "../../images/scrollDown.png";

const Presale2 = () => {
  const parallaxRef = useRef(null);

  const navigate = useNavigate();

  const [position, setPosition] = useState(0);
  const [price, setPrice] = useState(0);
  const [nextPrice, setNextPrice] = useState(0);
  const [phase, setPhase] = useState(1);
  const [usdtRaised, setUsdtRaised] = useState(0);
  const [listingPrice, setListingPrice] = useState(0);
  const [phaseTarget, setPhaseTarget] = useState(0);

  const isMobile = useMediaQuery("(max-width: 950px)");
  const isTab = useMediaQuery("(max-width: 1150px)");

  const demo1 = useMediaQuery("(max-height: 650px)");
  const demo2 = useMediaQuery("(max-height: 720px)");
  const demo3 = useMediaQuery("(max-height: 1080px)");
  console.log(demo1);

  console.log(window.innerHeight);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const currentPosition = parallaxRef.current.current;
      setPosition(currentPosition);
      console.log("scrolling", currentPosition);
    }
  };

  useEffect(() => {
    const parallaxElement = parallaxRef.current.container.current;
    if (parallaxElement) {
      parallaxElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (parallaxElement) {
        parallaxElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handlePresale = () => navigate("/crypto-presale");

  const fetchData = () => {
    axios
      .get(baseURL + "presale/getVyugTokenPrice")
      .then((response) => {
        setPrice((prev) => {
          if (prev !== response?.data?.tokenPriceInUsdt) {
            return response?.data?.tokenPriceInUsdt;
          } else {
            return prev;
          }
        });
        setNextPrice((prev) => {
          if (prev !== response?.data?.nextPhasePrice) {
            return response?.data?.nextPhasePrice;
          } else {
            return prev;
          }
        });
        setPhase((prev) => {
          if (prev !== Number(response?.data?.currentPhase?.split(" ")[1])) {
            return Number(response?.data?.currentPhase?.split(" ")[1]);
          } else {
            return prev;
          }
        });
        setUsdtRaised((prev) => {
          if (prev !== response?.data?.totalUSDTRaised) {
            return response?.data?.totalUSDTRaised;
          } else {
            return prev;
          }
        });
        setPhaseTarget((prev) => {
          if (prev !== response?.data?.currentPhaseTarget) {
            return response?.data?.currentPhaseTarget;
          } else {
            return prev;
          }
        });
        setListingPrice((prev) => {
          if (prev !== response?.data?.listingPrice) {
            return response?.data?.listingPrice;
          } else {
            return prev;
          }
        });
      })
      .catch((error) => {
        console.log("presale/getVyugTokenPrice", error);
      });
  };

  useEffect(() => {
    fetchData();
    const id = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ height: "600px", overflow: "hidden" }}>
      <Parallax ref={parallaxRef} pages={8.4}>
        <ParallaxLayer
          offset={0}
          factor={3}
          style={{
            background:
              "linear-gradient(180deg, #2996D7 -7.51%, #41C7ED 19.55%, #74CAD7 43.47%, #CFDD97 73.67%)",
          }}
        />
        <ParallaxLayer sticky={{ start: 0, end: 1 }} speed={0.3}>
          <div>
            <div
              style={{ transform: `translateX(-${position * 0.009}vw)` }}
              className="top-[290px] left-[25vw] absolute"
            >
              <img src={cloud2} className="w-[70%] md:w-[100%]" alt="" />
            </div>
            <div
              style={{
                transform: `translateX(-${position * 0.004}vw)`,
                zIndex: 99999,
              }}
              className="top-[80px] -right-20 absolute"
            >
              <img src={cloud3} className="w-[70%] md:w-[100%]" alt="" />
            </div>
            <div
              style={{ transform: `translateY(${position * 0.004}vw)` }}
              className="top-0 right-[30vw] absolute"
            >
              <img src={cloud4} className="w-[70%] md:w-[100%]" alt="" />
            </div>
            <div className="top-[80px] left-[10vw] absolute">
              <img src={cloud5} className="w-[80%] md:w-[100%]" alt="" />
            </div>
            <div className="top-[290px] right-[20vw] absolute">
              <img src={cloud5} className="w-[70%] md:w-[100%]" alt="" />
            </div>
            <div
              style={{ transform: `translateY(-${position * 0.004}vw)` }}
              className="top-[550px] right-[10vw] absolute"
            >
              <img src={cloud6} className="w-[90%] md:w-[100%]" alt="" />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          offset={1.2}
          sticky={{ start: 0.8, end: 1 }}
          style={{ display: "flex", width: "80%", margin: "auto" }}
        >
          <img src={plane} className="w-[90%] md:w-[30%]" alt="" />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 1 }} speed={0.2}>
          <div
            style={{
              transform: `translateX(${position * 0.004}vw)`,
            }}
            className={`top-[160px] -left-40 absolute`}
          >
            <img src={cloud1} className="w-[50%] md:w-[100%]" alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0.6}>
          <div className={`top-[630px] left-0 absolute`}>
            <img src={cloud6} className="w-[70%] md:w-[100%]" alt="" />
          </div>

          <div className={`top-[660px] left-[35vw] absolute`}>
            <img src={cloud7} className="w-[70%] md:w-[100%]" alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.45} speed={0.12}>
          <div
            className={`flex justify-center items-center left-0 right-0 absolute`}
          >
            <img
              src={cloud8}
              className="flex w-[100%] justify-center items-center"
              alt=""
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.4}
          style={{
            backgroundImage: `url(${treasure})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <ParallaxLayer
          offset={3.3}
          factor={4.1}
          style={{
            background:
              "linear-gradient(180deg, #E39454 -2.01%, #FFF88F 43.96%)",
          }}
        />
        <ParallaxLayer offset={3.3} speed={0.2}>
          <div className={`left-[5vw] absolute`}>
            <img src={citycloud1} alt="" />
          </div>

          <div className={`left-[45vw] absolute`}>
            <img src={citycloud2} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.4} speed={0.15}>
          <div className={`top-10 left-0 absolute`}>
            <img src={shuttle1} alt="" />
          </div>

          <div className={`top-[250px] left-[20vw] absolute`}>
            <img src={shuttle4} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.4} speed={0.25}>
          <div className={`left-[35vw] absolute`}>
            <img src={shuttle5} alt="" />
          </div>

          <div className={`top-10 right-[4vw] absolute`}>
            <img src={shuttle3} alt="" />
          </div>

          <div className={`top-32 right-[5vw] absolute`}>
            <img src={shuttle2} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={0.08}>
          <div
            className={`flex justify-center items-center right-0 w-[100%] absolute`}
          >
            <img
              src={sun}
              className="flex w-[100%] justify-center items-center"
              alt=""
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.6}
          style={{
            backgroundImage: `url(${city})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <ParallaxLayer
          offset={4.45}
          factor={5.5}
          style={{
            background:
              "linear-gradient(180deg, #2F2E5A -6.01%, #272E4B 43.96%)",
          }}
        />
        <ParallaxLayer offset={4.6} speed={0.3}>
          <div className="left-0 absolute">
            <img src={screen1} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.6} speed={0.3}>
          <div
            style={{ transform: `translateX(-${position * 0.004}vw)` }}
            className={`top-[200px] left-[40vw] absolute`}
          >
            <img src={screen2} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.5}
          factor={6.5}
          style={{
            backgroundImage: `url(${playspace})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <ParallaxLayer offset={6.1}>
          <div
            style={{
              left: `${(550 - (position - 3940)) * 0.4}px`,
            }}
            className="absolute"
          >
            <img src={character} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.5}
          factor={7.6}
          style={{
            backgroundImage: `url(${nft})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <ParallaxLayer offset={6.6}>
          <div className="flex justify-center items-center">
            <img src={nftFrame} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.9}>
          <div className="flex justify-center items-center">
            <img src={nft1} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.8}>
          <div
            style={{
              left: `${(350 + (position - 3440)) * 0.4}px`,
              position: "absolute",
            }}
          >
            <img src={nftCharacter} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.4}
          factor={8.4}
          style={{
            backgroundColor: "#E3DFD8",
          }}
        />
        <ParallaxLayer offset={7.6}>
          <div
            style={{
              left: `${(position - 4340) * 0.2}px`,
              position: "absolute",
            }}
          >
            <img src={girl} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 2.25 }} speed={0.2}>
          <div className="bg-[#00000090] rounded-lg top-4 right-10 ml-auto absolute">
            <PreSaleTxn
              handleOpenWaitlist={handlePresale}
              price={price}
              nextPrice={nextPrice}
              phase={phase}
              usdtRaised={usdtRaised}
              listingPrice={listingPrice}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.2}>
          <div className={`w-[50%] left-10 gap-5 flex flex-col absolute`}>
            <h2 className="header text-3xl leading-[3rem] font-transyl sm:pb-5 md:text-[32px] lg:text-[34px] text-left text-[#0000008a]">
              DISCOVER THE <br /> HIDDEN TREASURE
            </h2>
            <h2 className="text-[#0000008a] header font-transyl text-base md:text-[20px] lg:text-[24px] text-left">
              & EMPOWER YOUR WEB3 JOURNEY
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.75}>
          <div className={`w-[60%] left-10 gap-5 flex flex-col absolute`}>
            <h2 className="header font-transyl text-[26px] md:text-[32px] lg:text-[34px] text-left text-[#0000008a]">
              GATHER YOUR TREASURE <br /> WITH VYUG TOKEN
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={0.2}>
          <div
            className={`w-[50%] font-transyl gap-5 flex flex-col left-10 absolute`}
          >
            <h2 className="header text-3xl font-transyl leading-[3.2rem] md:text-[32px] lg:text-[34px] text-left text-[#0000008a]">
              THE PRESALE IS <br /> NOW LIVE
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.55} speed={0.2}>
          <div
            className={`bg-[#0000008a] p-6 py-10 rounded-2xl w-[90%] md:w-[40%] gap-5 flex flex-col right-[100px] absolute`}
          >
            <h2 className="header text-3xl font-transyl leading-[3rem] md:text-[32px] lg:text-[34px] text-left text-[#fff]">
              REAL-LIFE INDUSTRY INTEGRATIONS
            </h2>
            <p className="text-[#fff] text-sm md:text-base text-left description">
              We're forging partnerships with real-world industries, bridging
              the gap between the virtual and physical realms, and enabling
              practical applications that benefit our users.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.7} speed={0.2}>
          <div
            className={`p-6 py-10 bg-[#0000008a] rounded-2xl w-[90%] md:w-[40%] gap-5 flex flex-col right-[100px] absolute`}
          >
            <h2 className="header text-3xl font-transyl leading-[3rem] md:text-[32px] lg:text-[34px] text-left text-[#fff]">
              3D PRODUCTION
            </h2>
            <p className="text-[#fff] text-sm md:text-base text-left description">
              Our advanced 3D production capabilities will ensure a
              hyper-realistic Metaverse where creativity knows no bounds.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5.8} speed={0.2}>
          <div
            className={`p-6 py-10 bg-[#0000008a] rounded-2xl w-[90%] md:w-[40%] gap-5 flex flex-col right-[100px] absolute`}
          >
            <h2 className="header text-3xl font-transyl leading-[3rem] md:text-[32px] lg:text-[34px] text-left text-[#fff]">
              VR/ AR AAA GAMES
            </h2>
            <p className="text-[#fff] text-sm md:text-base text-left description">
              Dive into immersive gaming experiences that blend reality with the
              virtual world, providing players with unparalleled engagement.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.9} speed={0.2}>
          <div
            className={`p-6 py-10 bg-[#0000008a] rounded-2xl w-[90%] md:w-[40%] gap-5 flex flex-col right-[100px] absolute`}
          >
            <h2 className="header text-3xl font-transyl leading-[3rem] md:text-[32px] lg:text-[34px] text-left text-[#fff]">
              THE BIGGEST OPEN NFT MARKETPLACE
            </h2>
            <p className="text-[#fff] text-sm md:text-base text-left description">
              Buy, sell, and trade unique digital assets seamlessly, making VYUG
              the go-to platform for NFT enthusiasts.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={7.7} speed={0.2}>
          <div
            className={`p-5 py-9 bg-[#0000008a] rounded-2xl w-[90%] md:w-[40%] gap-5 flex flex-col right-[80px] absolute`}
          >
            <h2 className="header text-3xl font-transyl leading-[3rem] md:text-[32px] lg:text-[34px] text-left text-[#fff]">
              BEYOND THE BLOCKCHAIN EXPLORE THE INNOVATIVE VYUG TOKEN
            </h2>
            <button
              onClick={() => navigate("/crypto-presale")}
              style={{
                background: `linear-gradient(90deg, #049A99 0%, #159255 100%)`,
              }}
              className={`${
                isTab ? "px-4 py-2 text-[20px]" : "px-10 py-5 text-2xl"
              } header mx-auto text-[#fff] rounded-full`}
            >
              Visit Presale
            </button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 8.4 }} style={{pointerEvents: 'none'}}>
          <img
            className="fixed animate-up-down h-[100px] w-[100px] left-[45%] -translate-x-[50%] bottom-10"
            src={scrollDown}
            alt=""
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Presale2;
