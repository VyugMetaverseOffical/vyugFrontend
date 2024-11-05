import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef, useState } from "react";
import cloud1 from "../../images/presale/mobcloud1.svg";
import treasure from "../../images/presale/mobiletreasure.svg";
import cloud2 from "../../images/presale/mobcloud2.svg";
import cloud3 from "../../images/presale/mobcloud3.svg";
import cloud4 from "../../images/presale/mobcloud4.svg";
import cloud5 from "../../images/presale/mobcloud5.svg";
import shuttle1 from "../../images/presale/shuttle1.svg";
import shuttle2 from "../../images/presale/shuttle2.svg";
import shuttle3 from "../../images/presale/shuttle3.svg";
import shuttle4 from "../../images/presale/shuttle4.svg";
import shuttle5 from "../../images/presale/shuttle5.svg";
import cloud6 from "../../images/presale/mobcloud6.svg";
import cloud7 from "../../images/presale/mobcloud7.svg";
import cloud8 from "../../images/presale/mobcloud8.svg";
import cloud9 from "../../images/presale/mobcloud9.svg";
import citycloud1 from "../../images/presale/cityCloud1.svg";
import citycloud2 from "../../images/presale/cityCloud2.svg";
import city from "../../images/presale/mobcity.svg";
import plane from "../../images/presale/plane.svg";
import sun from "../../images/presale/mobsun.svg";
import screen1 from "../../images/presale/mobscreen1.svg";
import playspace from "../../images/presale/mobplayspace.svg";
import character from "../../images/presale/character.svg";
import screen2 from "../../images/presale/mobscreen2.svg";
import nft from "../../images/presale/nft.svg";
import nft1 from "../../images/presale/mobnft1.svg";
import nftCharacter from "../../images/presale/nftCharacter.svg";
import girl from "../../images/presale/girl.svg";
import PreSaleTxn from "../../components/PreSaleTxn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../apis/api";
import scrollDown from "../../images/scrollDown.png";


const PresaleMobile = () => {
  const parallaxRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [price, setPrice] = useState(0);
  const [nextPrice, setNextPrice] = useState(0);
  const [phase, setPhase] = useState(1);
  const [usdtRaised, setUsdtRaised] = useState(0);
  const [listingPrice, setListingPrice] = useState(0);
  const [phaseTarget, setPhaseTarget] = useState(0);

  const navigate = useNavigate();

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

  const handlePresale = () => navigate("/crypto-presale");

  return (
    <div style={{ height: "600px", overflow: "hidden" }}>
      <Parallax ref={parallaxRef} pages={8.3}>
        <ParallaxLayer
          offset={0}
          factor={3}
          style={{
            background:
              "linear-gradient(180deg, #2996D7 -7.51%, #41C7ED 19.55%, #74CAD7 43.47%, #CFDD97 73.67%)",
          }}
        />
        <ParallaxLayer sticky={{ start: 0, end: 1 }} offset={0} speed={0.3}>
          <div>
            <div
              style={{ transform: `translateX(${position * 0.009}vw)` }}
              className="top-[60px] -left-[20vw] absolute"
            >
              <img src={cloud1} alt="" />
            </div>
            <div
              style={{ transform: `translateX(-${position * 0.009}vw)` }}
              className="top-[70px] -right-[30vw] absolute"
            >
              <img src={cloud2} alt="" />
            </div>
          </div>
          <div>
            {/* <div
              style={{ transform: `translateX(${position * 0.009}vw)` }}
              className="top-[150px] -left-[60vw] absolute"
            >
              <img src={cloud3} alt="" />
            </div> */}
            <div
              style={{ transform: `translateX(-${position * 0.009}vw)` }}
              className="top-[280px] -right-[60vw] absolute"
            >
              <img src={cloud4} alt="" />
            </div>
          </div>
          <div>
            <div
              style={{ transform: `translateX(-${position * 0.004}vw)` }}
              className="top-[550px] left-0 absolute"
            >
              <img src={cloud5} alt="" />
            </div>
            <div className="top-[550px] left-[50%] absolute">
              <img src={cloud6} alt="" />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.6}
          speed={0.5}
          sticky={{ start: 0.8, end: 1.05 }}
          style={{ display: "flex", width: "80%", margin: "auto" }}
        >
          <img src={plane} className="w-[60%] md:w-[30%]" alt="" />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0, end: 1 }} speed={0.3}>
          <div
            style={{ transform: `translateX(${position * 0.009}vw)` }}
            className="top-[150px] -left-[60vw] absolute"
          >
            <img src={cloud3} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.08}>
          <div
            className={`top-[1370px] flex justify-center items-center -right-[10vh] absolute`}
          >
            <img
              src={cloud7}
              className="flex w-[100%] justify-center items-center"
              alt=""
            />
          </div>
          <div
            className={`top-[1470px] flex justify-center items-center -left-[10vh] absolute`}
          >
            <img
              src={cloud8}
              className="flex w-[100%] justify-center items-center"
              alt=""
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.09}>
          <div
            className={`top-[1640px] flex justify-center items-center left-0 right-0 absolute`}
          >
            <img
              src={cloud9}
              className="flex w-[100%] justify-center items-center"
              alt=""
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          // className="top-[1650px] absolute"
          // style={{
          //   backgroundImage: `url(${treasure})`,
          //   backgroundSize: "contain",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   width: "100vw",
          //   height: "100vh",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          <div className="top-[1600px] absolute w-[100%]">
            <img
              src={treasure}
              className="flex w-[100%] justify-center items-center"
              alt=""
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.1}
          factor={4.2}
          style={{
            background:
              "linear-gradient(180deg, #E39454 -2.01%, #FFF88F 43.96%)",
          }}
        />
        <ParallaxLayer offset={3} speed={0.2}>
          <div className={`top-[15vh] left-[5vw] absolute`}>
            <img src={citycloud1} alt="" />
          </div>

          <div className={`top-[25vh] right-[7vw] absolute`}>
            <img src={citycloud2} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} factor={3.5} speed={0.15}>
          <div className="top-[40vh] left-0 absolute">
            <img src={shuttle1} alt="" />
          </div>

          <div className="top-[80vh] left-[50vw] absolute">
            <img src={shuttle4} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} factor={3.5} speed={0.25}>
          <div className={`top-[20vh] left-[30vw] absolute`}>
            <img src={shuttle5} alt="" />
          </div>

          <div className={`top-[70vh] left-[25vw] absolute`}>
            <img src={shuttle3} alt="" />
          </div>

          <div className={`top-[60vh] -right-40 absolute`}>
            <img src={shuttle2} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={0.07}>
          <div
            className={`bottom-0 flex justify-center items-center left-0 right-0 w-[100%] absolute`}
          >
            <img
              src={sun}
              className="flex w-[100%] justify-center items-center"
              alt=""
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5}>
          <div className="bottom-0 absolute w-[100%]">
            <img
              src={city}
              className="flex w-[100%] justify-center items-center"
              alt=""
            />
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={4.5} speed={0.3}>
          <div className="top-[20vh] left-[2vw] absolute">
            <img src={screen1} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.5} speed={0.3}>
          <div
            // style={{ transform: `translateX(-${position * 0.004}vw)` }}
            className="top-[45vh] right-10 absolute"
          >
            <img src={screen2} alt="" />
          </div>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={4.49}
          factor={5.3}
          style={{
            background:
              "linear-gradient(180deg, #2F2E5A -6.01%, #272E4B 43.96%)",
          }}
        />
        <ParallaxLayer offset={4.15} speed={0.3}>
          <div className="top-[50vh] left-0 absolute">
            <img src={screen1} className="w-[70%] md:w-full" alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.15} speed={0.3}>
          <div
            style={{ transform: `translateX(-${position * 0.004}vw)` }}
            className="top-[65vh] -right-[155px] absolute"
          >
            <img className="w-[60%]" src={screen2} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.4}
          factor={6.5}
          style={{
            backgroundImage: `url(${playspace})`,
            backgroundSize: "contain",
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
          offset={6.4}
          factor={7.5}
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
        <ParallaxLayer offset={5.9}>
          <div
            style={{
              left: `${(550 - (position - 3248)) * 0.4}px`,
              // left: "20vw",
            }}
            className="absolute"
          >
            <img src={character} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.5}>
          <div className="flex justify-center items-center">
            <img src={nft1} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.7}>
          <div
            style={{
              left: `${(position - 3815) * 0.2}px`,
              // left: "40vw",
              // transform: x.to((xVal) => `translateX(${xVal})`),
              position: "absolute",
            }}
          >
            <img src={nftCharacter} alt="" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.3}
          factor={8.3}
          style={{
            backgroundColor: "#E3DFD8",
          }}
        />
        <ParallaxLayer offset={7.45}>
          <div
            style={{
              left: `${(position - 4815) * 0.4}px`,
              position: "absolute",
              top: "100px",
            }}
          >
            <img src={girl} className="w-[90%]" alt="" />
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0.7} speed={0.2}>
          <div className="w-[90%] z-[999999] mx-auto gap-5 flex flex-col">
            <h2 className="header font-transyl font-extrabold text-center text-2xl sm:text-[45px] text-[#0000008a]">
              DISCOVER THE <br /> HIDDEN TREASURE
            </h2>
            <h2 className="text-[#0000008a] font-transyl text-center header text-base md:text-2xl">
              & EMPOWER YOUR WEB3 JOURNEY
            </h2>
          </div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={1.75}>
          <div className="w-[90%] mx-auto gap-5 flex flex-col">
            <h2 className="header text-2xl font-transyl md:leading-[3.5rem] sm:text-[45px] text-center text-[#0000008a]">
              GATHER YOUR TREASURE WITH VYUG TOKEN
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.2}>
          <div className="w-[70%] mt-[40px] md:w-[30%] gap-5 flex flex-col ml-auto">
            <h2 className="header font-transyl text-3xl pr-5 md:leading-[3.2rem] sm:text-[45px] text-right text-[#0000008a]">
              THE PRESALE IS NOW LIVE
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={0.2}>
          <div className="bg-[#0000008a] rounded-2xl w-[80%] md:w-[40%] gap-10 flex flex-col p-6 mx-auto">
            <h2 className="header text-3xl font-transyl md:leading-[3rem] sm:text-[45px] text-center text-[#fff]">
              REAL-LIFE INDUSTRY INTEGRATIONS
            </h2>
            <p className="text-[#fff] text-base md:text-lg text-center description">
              We're forging partnerships with real-world industries, bridging
              the gap between the virtual and physical realms, and enabling
              practical applications that benefit our users.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.6} speed={0.2}>
          <div className="bg-[#0000008a] rounded-2xl w-[80%] md:w-[40%] gap-10 flex flex-col p-6 mx-auto">
            <h2 className="header font-transyl text-3xl md:leading-[3rem] sm:text-[45px] text-center text-[#fff]">
              3D PRODUCTION
            </h2>
            <p className="text-[#fff] text-base md:text-lg text-center description">
              Our advanced 3D production capabilities will ensure a
              hyper-realistic Metaverse where creativity knows no bounds.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5.7} speed={0.2}>
          <div className="bg-[#0000008a] rounded-2xl w-[80%] md:w-[40%] gap-10 flex flex-col p-6 mx-auto">
            <h2 className="header font-transyl text-3xl leading-[3rem] sm:text-[45px] text-center text-[#fff]">
              VR/ AR AAA GAMES
            </h2>
            <p className="text-[#fff] text-base md:text-lg text-center description">
              Dive into immersive gaming experiences that blend reality with the
              virtual world, providing players with unparalleled engagement.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.6} speed={0.2}>
          <div className="bg-[#0000008a] rounded-2xl w-[80%] md:w-[40%] gap-10 flex flex-col p-6 mx-auto">
            <h2 className="header font-transyl text-3xl leading-[3rem] sm:text-[45px] text-center text-[#fff]">
              THE BIGGEST OPEN NFT MARKETPLACE
            </h2>
            <p className="text-[#fff] text-base md:text-lg text-center description">
              Buy, sell, and trade unique digital assets seamlessly, making VYUG
              the go-to platform for NFT enthusiasts.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={7.2} speed={0.2}>
          <div className="bg-[#0000008a] mt-[40px] rounded-2xl w-[80%] md:w-[40%] gap-10 flex flex-col p-6 mx-auto">
            <h2 className="header font-transyl text-3xl md:leading-[3rem] sm:text-[45px] text-center text-[#fff]">
              BEYOND THE BLOCKCHAIN EXPLORE THE INNOVATIVE VYUG TOKEN
            </h2>
            <button
              onClick={() => navigate("/crypto-presale")}
              style={{
                background: `linear-gradient(90deg, #049A99 0%, #159255 100%)`,
              }}
              className="header px-8 py-3 mx-auto rounded-full text-[#fff]"
            >
              Visit Presale
            </button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} sticky={{ start: 0, end: 0.01 }}>
          <div className="w-[90%] bg-[#00000090] rounded-lg absolute top-5 left-5 right-5 mx-auto">
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
        <ParallaxLayer sticky={{ start: 0, end: 8.3 }} style={{pointerEvents: 'none'}}>
          <img
            className="fixed animate-up-down h-[100px] w-[100px] left-[40%] -translate-x-[50%] bottom-10"
            src={scrollDown}
            alt=""
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default PresaleMobile;
