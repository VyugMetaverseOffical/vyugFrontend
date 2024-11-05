import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";
import bgImg from "../images/presale_bg.png";
import Tokenomics from "../images/tokenomics.svg";
import PreSaleTxn from "../components/PreSaleTxn";
import s1 from "../images/socialIcons/twitterGray.svg";
import s2 from "../images/socialIcons/telegramGray.svg";
import s3 from "../images/socialIcons/discordGray.svg";
import t1 from "../images/socialIcons/twitter.svg";
import t2 from "../images/socialIcons/telegram.svg";
import t3 from "../images/socialIcons/discord.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import pr_1 from "../images/crypto_times_logo.webp";
import pr_2 from "../images/cryptoBasic.png";
import pr_3 from "../images/newsbtc_logo.webp";
import pr_4 from "../images/techbullion_logo.webp";
import pr_5 from "../images/cryptoBasic.png";
import pr_6 from "../images/PR/cplogo3.webp";
import pr_7 from "../images/PR/cgDark.webp";
import pr_8 from "../images/techbullion_logo.webp";
import pr_9 from "../images/cryptoBasic.png";
import pr_10 from "../images/newsbtc_logo.webp";
import pr_11 from "../images/uToday.png";
import pr_12 from "../images/PR/TimesNow.webp";
import beosinLogo from "../images/beosin_logo.png";
import section1_bg from "../images/presale_section1_bg_img.png";
import section3_bg from "../images/presale_section3_bg_img.png";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { baseURL } from "../apis/api";
import { useMediaQuery } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import PresaleRoadmap from "./PresaleRoadmap";
import PresaleFAQs from "./PresaleFAQs";

function PreSale() {
  const { pathname } = useLocation();

  const [position, setPosition] = useState(false);
  const [img, setImg] = useState(-1);
  const containerRef = useRef();
  // const [openWaitlist, setOpenWaitlist] = useState(true);
  const [price, setPrice] = useState(0);
  const [nextPrice, setNextPrice] = useState(0);
  const [phase, setPhase] = useState(1);
  const [usdtRaised, setUsdtRaised] = useState(0);
  const [phaseTarget, setPhaseTarget] = useState(0);
  const [listingPrice, setListingPrice] = useState(0);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 1023.9px)");
  const isExtremelySmall = useMediaQuery("(max-width: 378px)");

  const PRS = [
    {
      link: "https://www.cryptotimes.io/2024/10/11/vyug-to-launch-token-presale-of-vyug-tokens/",
      src: pr_1,
    },
    {
      link: "https://thecryptobasic.com/2024/10/11/vyug-launching-presale-of-vyug-token-soon-why-should-you-stake-in-this-high-utility-token/",
      src: pr_2,
    },
    {
      link: "https://www.newsbtc.com/press-releases/the-much-awaited-pre-sale-coming-soon-vyug-to-launch-the-first-ever-token-presale-of-vyug-tokens/",
      src: pr_3,
    },
    {
      link: "https://techbullion.com/gear-up-for-the-vyug-token-presale-vyug-brings-a-chance-to-soar-high/",
      src: pr_4,
    },
    {
      link: "https://thecryptobasic.com/2024/10/04/vyug-unveils-groundbreaking-whitepaper-advancing-the-metaverses-future/",
      src: pr_5,
    },
    {
      link: "https://cryptopotato.com/24-hours-to-go-vyug-set-to-revolutionize-the-metaverse-with-a-massive-airdrop-event/",
      src: pr_6,
    },
    {
      link: "https://coingape.com/press-releases/vyug-unveils-massive-airdrop-for-its-groundbreaking-hyper-realistic-metaverse/",
      src: pr_7,
    },
    {
      link: "https://techbullion.com/vyug-metaverse-launches-beta-version-and-announces-extended-airdrop-event/",
      src: pr_8,
    },
    {
      link: "https://thecryptobasic.com/2024/09/03/vyug-metaverse-announces-beta-launch-extends-airdrop-and-introduces-token-purchase-discounts-via-vyug-wallet/",
      src: pr_9,
    },
    {
      link: "https://www.newsbtc.com/press-releases/vyug-launches-unprecedented-airdrop-for-its-hyper-realistic-metaverse-your-chance-to-win-big/",
      src: pr_10,
    },
    {
      link: "https://u.today/press-releases/unlock-the-future-vyugs-historic-airdrop-launches-this-august",
      src: pr_11,
    },
    {
      link: "https://www.timesnownews.com/technology-science/vyugs-metaverse-unveiling-celebrities-avatars-and-a-glimpse-into-the-future-of-virtual-experiences-article-106269511?fbclid=PAZXh0bgNhZW0CMTEAAabCE4Tczf2QHOWxGNwJIF-v0MV1Q58yMmCdBN0edAcszpxtzx3tzGXc2rk_aem_EVy6c776Mm8VmrCe7h0G9A",
      src: pr_12,
    },
  ];

  const tokenomicsData = [
    {
      allocation: "Early Community & Airdrop",
      initials: "EC&A",
      age: "10 %",
      bgColor: "#2E632B",
    },
    {
      allocation: "Early Ecosystem & Platform Development",
      initials: "EE&PD",
      age: "27 %",
      bgColor: "#ECF6ED",
    },
    {
      allocation: "Team & Advisors",
      initials: "T&D",
      age: "15 %",
      bgColor: "#5FAF5A",
    },
    {
      allocation: "Reserve Funds",
      initials: "RF",
      age: "08 %",
      bgColor: "#CAE4C9",
    },
    {
      allocation: "Staking & Rewards",
      initials: "S&R",
      age: "17 %",
      bgColor: "#5FAF5A",
    },
    {
      allocation: "Liquidity & Exchange Listings",
      initials: "L&EL",
      age: "18 %",
      bgColor: "#3D833A",
    },
  ];

  const handleOpenWaitlist = () => {
    setOpenWaitlist((prev) => !prev);
  };

  const Social_Icons = [
    {
      name: "twitter",
      link: "https://x.com/VyugOfficial",
      image: s1,
      colorImg: t1,
    },
    {
      name: "telegram",
      link: "https://telegram.me/vyugofficial",
      image: s2,
      colorImg: t2,
    },
    {
      name: "discord",
      link: "https://discord.gg/rqSaNCwjTx",
      image: s3,
      colorImg: t3,
    },
    // {
    //   name: "instagram",
    //   link: "https://www.instagram.com/vyugofficial/",
    //   image: s4,
    //   colorImg: t4,
    // },
    // {
    //   name: "facebook",
    //   link: "https://www.facebook.com/VyugOfficial/",
    //   image: s5,
    //   colorImg: t5,
    // },
    // {
    //   name: "youtube",
    //   link: "https://www.youtube.com/@VyugOfficial",
    //   image: s6,
    //   colorImg: t6,
    // },
  ];

  const section3Content = [
    {
      heading: "Biggest Decentralized Metaverse",
      description:
        "VYUG boasts the largest decentralized metaverse at 1203 km, offering endless opportunities for land ownership, gaming, and community interaction.",
    },
    {
      heading: "Real-World Utility Across Multiple Sectors",
      description:
        "VYUG powers NFTs, gaming, virtual land, and V-Commerce, ensuring continuous demand in diverse industries.",
    },
    {
      heading: "Blockchain Scalability",
      description:
        "Built on Solana with cross-chain support for Ethereum, Polygon, and BNB, enabling fast, low-cost transactions.",
    },
    {
      heading: "Event-Based Token Burn for Value Growth",
      description:
        "Our innovative token burn mechanism reduces supply at key milestones, creating scarcity and driving long-term value for investors.",
    },
    {
      heading: "Diverse Ecosystem Across Multiple Sectors",
      description:
        "VYUG spans NFTs, gaming, virtual real estate, entertainment, education, and corporate, ensuring continuous demand and diverse opportunities across industries.",
    },
    {
      heading: "Staking Rewards for Passive Income",
      description:
        "Earn handsome rewards by staking your VYUG tokens, incentivizing long-term holding while actively contributing to the network's growth and stability.",
    },
    {
      heading: "Empowered Community Governance",
      description:
        "Join a vibrant community where your voice matters! With our decentralized governance model, investors influence key platform decisions, fostering transparency and trust.",
    },
    {
      heading: "High Liquidity with Tier 1 Exchange Listings",
      description:
        "VYUG is set for Tier 1 exchange listings, unlocking high liquidity and global visibility, giving early investors unmatched opportunities for profit and exposure.",
    },
  ];

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
    const scrollers = document.querySelectorAll(".scroller");

    const duplicateAndScroll = (scroller) => {
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicateItem = item.cloneNode(true);
        duplicateItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicateItem);
      });
    };

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        duplicateAndScroll(scroller);
        duplicateAndScroll(scroller);
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchData();
    const id = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const widthOfBar = phaseTarget && usdtRaised / phaseTarget;
  console.log(widthOfBar);

  return (
    <div className="relative">
      <Helmet>
        <title>VYUG Crypto Presale is Live - Start Investing Now...</title>
        <meta
          name="description"
          content="Looking for the Best Crypto Presales to invest in 2024? You are in the right place at VyugMetaverse.com. Join the most exciting Token presale of 2024."
        />
        <meta
          name="keywords"
          content="Crypto Presales, Token presale, Presale Coins, Best Coin to Invest"
        />
        <meta
          property="og:title"
          content="VYUG Crypto Presale is Live - Start Investing Now..."
        />
        <meta
          property="og:description"
          content="Looking for the Best Crypto Presales to invest in 2024? You are in the right place at VyugMetaverse.com. Join the most exciting Token presale of 2024."
        />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/crypto-presale"
        />
        {pathname === "/presale" && (
          <meta name="robots" content="noindex" />
        )}
      </Helmet>
      <Header isTransparent={position} isHeaderText={false} />
      <div
        className="fixed z-[-3] w-[100vw] h-[100vh] flex justify-center items-center"
        style={{
          background: `url(${bgImg}), linear-gradient(to right, #000000 15%, #00000050 100%), rgba(0, 0, 0, 0.75)`,
        }}
      ></div>
      <div
        className="fixed z-[-2] w-[70vw] h-[70vw] top-0 right-0 rounded-[100%] flex justify-center items-center"
        style={{
          background:
            "linear-gradient(to right bottom, #049a99, #00998c, #00977c, #00956a50, #159255)",
          filter: "blur(200rem)",
          transform: "translate(35%, -20%)",
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        ref={containerRef}
        className="min-h-screen flex flex-col justify-center items-stretch"
      >
        {/* BUY VYUG TOKEN Section */}
        <section className="relative lg:flex lg:flex-col lg:justify-center lg:items-center lg:min-h-[55vh] pt-36">
          <div
            className="absolute z-[-3] top-0 left-0 right-0 bottom-0"
            style={{
              background: `url(${section1_bg})`,
              backgroundSize: isMobile ? "200%" : "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: isMobile
                ? "top 50% left 40%"
                : "bottom center",
            }}
          ></div>
          <div
            className="absolute z-[-2] top-0 left-0 right-0 bottom-0"
            style={{
              background: isMobile
                ? "linear-gradient(163.32deg, rgba(0, 0, 0, 0.95) 20%, rgba(0, 0, 0, 0) 90%)"
                : "linear-gradient(163.32deg, rgba(0, 0, 0, 0.95) 22.07%, rgba(0, 0, 0, 0) 77.05%)",
            }}
          ></div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-24 md:gap-28 lg:gap-40 px-5 lg:px-0">
            <div className="flex flex-col justify-start items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-[39%]">
              {/* Amount Raised Bar */}
              <div className="flex flex-col justify-center items-stretch gap-3 w-full sm:w-[75%] lg:w-full mb-6">
                <p
                  style={{
                    fontSize: isExtremelySmall && "8px",
                  }}
                  className="description text-[#fff] text-[10px] mb-2.5 text-end"
                >
                  Phase 1 target - ${phaseTarget}
                </p>
                {/* Full Bar container */}
                <div className="relative bg-[#ffffff20] h-[5px]">
                  <div
                    className="absolute top-0 left-0 -translate-y-[25%] -translate-x-1/2 rounded-[50%] w-[10px] h-[10px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #049A99 0%, #159255 100%)",
                      outline: "1px solid #159255",
                      outlineOffset: "3px",
                    }}
                  >
                    {/* Start Circle */}
                  </div>
                  <div
                    className="h-full rounded-[2rem] relative"
                    style={{
                      width: `${widthOfBar * 100}%`,
                      background:
                        "linear-gradient(180deg, #049A99 0%, #159255 100%)",
                    }}
                  >
                    {/* % Complete Bar Container - green colored */}
                    <span
                      className="absolute top-[-400%] description text-[#fff] text-[10px] w-max"
                      style={{
                        left: "80%",
                        fontSize: isExtremelySmall && "8px",
                      }}
                    >
                      Raised - ${usdtRaised}
                    </span>
                  </div>
                  <div
                    className="absolute top-0 left-[100%] -translate-y-[25%] -translate-x-1/2 rounded-[50%] w-[10px] h-[10px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #049A99 0%, #159255 100%)",
                      outline: "1px solid #159255",
                      outlineOffset: "3px",
                    }}
                  >
                    {/* End Circle */}
                  </div>
                </div>
                {/* Price Container */}
                <div className="flex justify-between items-start">
                  <p
                    style={{
                      fontSize: isExtremelySmall && "8px",
                    }}
                    className="description text-[#fff] text-[10px]"
                  >
                    CURRENT PRICE : <span>1 VYUG = ${price}</span>
                  </p>
                  <p
                    style={{
                      fontSize: isExtremelySmall && "8px",
                    }}
                    className="description text-[#fff] text-[10px]"
                  >
                    NEXT PRICE: <span>1 VYUG = $0.044</span>
                  </p>
                </div>
                <div className="flex justify-end items-start">
                  <p
                    style={{
                      fontSize: isExtremelySmall && "8px",
                    }}
                    className="description text-[#fff] text-[10px]"
                  >
                    LISTING PRICE : <span>1 VYUG = $0.088</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-stretch gap-12 lg:gap-0 my-6 lg:my-0">
                <h1 className="header font-transyl text-[#fff] font-bold text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-start uppercase">
                  CLAIM YOUR{" "}
                  <TypeAnimation
                    sequence={["STAKE", 2500, "FUTURE", 2500]}
                    speed={40}
                    repeat={Infinity}
                  />{" "}
                  <br /> VYUG TOKEN{" "}
                  <span
                    className="text-[#fff] lg:text-[#0E7F59]"
                    // style={{
                    //   "-webkit-text-stroke": "1px #ffffff",
                    //   "text-stroke": "1px #ffffff",
                    // }}
                  >
                    PRESALE
                  </span>
                </h1>
                {isMobile && (
                  <PreSaleTxn
                    handleOpenWaitlist={handleOpenWaitlist}
                    price={price}
                    nextPrice={nextPrice}
                    phase={phase}
                    usdtRaised={usdtRaised}
                    listingPrice={listingPrice}
                  />
                )}
                <p className="description text-[#fff] text-sm md:text-sm lg:text-base text-center lg:text-start ps-2 mt-3">
                  Welcome to the VYUG Token presale—your portal to the most
                  transformative Metaverse experience ever built
                </p>
              </div>
              <div>
                <h4 className="font-transyl font-bold text-[#fff] text-sm md:text-base text-center lg:text-start ps-2 uppercase">
                  BUILT ON Trust
                </h4>
                <p className="description text-[#fff] text-sm md:text-base text-center lg:text-start ps-2 text">
                  Our Certification Journey to Secure Your Future
                </p>
                <a
                  href="https://beosin.com/audits/VYUG_202410011931.pdf"
                  target="_blank"
                >
                  <div className="bg-[#00000080] px-4 py-1.5 rounded-[0.5rem] border-[1px] border-solid border-[#159255] w-fit mt-3 mx-auto lg:mx-0 lg:ms-2">
                    <img src={beosinLogo} alt="Beosin" className="w-[6rem]" />
                  </div>
                </a>
              </div>
              <div className="ps-2 mx-auto lg:mx-0 mt-4 lg:mt-0">
                <h4 className="description text-[#fff] text-center lg:text-start text-sm md:text-base">
                  Join The Community
                </h4>
                <div className="flex justify-center lg:justify-start items-center gap-2 sm:gap-4 mt-2">
                  {Social_Icons.map((item, index) => {
                    return (
                      <Link
                        target="_blank"
                        key={index}
                        to={item.link}
                        onMouseEnter={() => setImg(index)}
                        onMouseLeave={() => setImg(-1)}
                        className="w-[4vh] h-[4vh] sm:w-[5vh] sm:h-[5vh] no-underline flex justify-center"
                      >
                        {img === index ? (
                          <img
                            className="transition tarnsform-transition duration-150 ease-in-out hover:scale-[1.125]"
                            width={"100%"}
                            height={"100%"}
                            src={item.colorImg}
                            alt={item.name}
                            aria-hidden="true"
                          />
                        ) : (
                          <img
                            className="transition tarnsform-transition duration-200 ease-in-out hover:scale-110"
                            width={"100%"}
                            height={"100%"}
                            src={item.image}
                            alt={item.name}
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>
                <div className="bg-[#00000080] px-4 py-1.5 rounded-[0.5rem] border-[1px] border-solid border-[#159255] w-fit mt-6">
                  <a
                    href="https://www.vyugmetaverse.com/whitepaper"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/whitepaper");
                    }}
                    className="font-transyl text-[#fff] text-sm md:text-base font-bold flex justify-center items-center gap-2"
                  >
                    <span>Whitepaper</span>
                    <span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.99051 0C6.02406 0.0123997 6.05725 0.0258935 6.0908 0.0371991C6.39933 0.14369 6.58569 0.45113 6.53317 0.76878C6.48139 1.08133 6.21479 1.31254 5.89131 1.31364C5.00254 1.31655 4.11341 1.3089 3.22465 1.31728C2.35193 1.32567 1.60977 1.90408 1.38767 2.74361C1.34281 2.9132 1.31911 3.09409 1.31874 3.2695C1.31437 5.75819 1.314 8.24725 1.31655 10.7359C1.31765 11.8304 2.159 12.6838 3.25455 12.6867C5.75236 12.6929 8.25053 12.6929 10.7483 12.6867C11.8443 12.6841 12.6838 11.8333 12.6885 10.7381C12.6922 9.85848 12.6871 8.97847 12.6914 8.09882C12.6929 7.78445 12.93 7.52041 13.2359 7.47081C13.5456 7.42048 13.8439 7.59371 13.9562 7.88839C13.9723 7.93033 13.9883 7.9719 14.0043 8.01384V10.9952C13.9967 11.0255 13.9847 11.0558 13.9814 11.0864C13.837 12.4238 12.9223 13.5153 11.6346 13.876C11.4259 13.9343 11.2089 13.962 10.9956 14.004H3.00911C2.97884 13.9963 2.9493 13.985 2.9183 13.981C1.54376 13.7936 0.621443 13.0452 0.161925 11.7385C0.0784098 11.5011 0.0525163 11.2436 0 10.9952C0 8.33295 0 5.67067 0 3.00838C0.00838802 2.96863 0.0193289 2.92961 0.0251641 2.88949C0.211889 1.57403 0.925235 0.670677 2.16374 0.196936C2.43143 0.0944564 2.72647 0.0638219 3.00911 0C4.00291 0 4.99671 0 5.99051 0Z"
                          fill="white"
                        />
                        <path
                          d="M14.0068 4.89605C13.9948 4.91903 13.9806 4.94091 13.9711 4.96498C13.8467 5.28081 13.5557 5.45039 13.234 5.3935C12.9149 5.33697 12.6958 5.07293 12.6947 4.73413C12.6925 3.96389 12.6939 3.19401 12.6939 2.42377C12.6939 2.3749 12.6939 2.32603 12.6939 2.25127C12.637 2.30452 12.5977 2.33953 12.5605 2.37636C10.8814 4.0547 9.2016 5.7323 7.52472 7.41282C7.3256 7.61231 7.10313 7.71406 6.82305 7.63602C6.36061 7.50728 6.19103 6.94966 6.50102 6.58387C6.53931 6.53864 6.58198 6.49743 6.62392 6.45549C8.29241 4.78591 9.96126 3.11633 11.6305 1.44785C11.6659 1.41247 11.7103 1.38694 11.7508 1.35667C11.7443 1.34208 11.7373 1.3275 11.7308 1.31291C11.6841 1.31291 11.6378 1.31291 11.5911 1.31291C10.83 1.31291 10.0692 1.31181 9.30809 1.31364C9.12209 1.314 8.95725 1.26367 8.81794 1.14077C8.45834 0.82385 8.55025 0.248358 8.98971 0.0547045C9.03019 0.0368344 9.07067 0.0182348 9.11115 0C10.5608 0 12.0105 0 13.4602 0C13.7424 0.0824214 13.9233 0.266228 14.0072 0.547045C14.0072 1.99671 14.0072 3.44638 14.0072 4.89605H14.0068Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {!isMobile && (
              <PreSaleTxn
                handleOpenWaitlist={handleOpenWaitlist}
                price={price}
                nextPrice={nextPrice}
                phase={phase}
                usdtRaised={usdtRaised}
                listingPrice={listingPrice}
              />
            )}
          </div>

          {/* Ticker */}
          <section className="w-full my-20 py-3 bg-[#00000080] scroller">
            <div className="flex justify-start items-center flex-wrap gap-[1rem] scroller__inner">
              <p className="flex justify-start items-center gap-3 description font-transyl text-[#fff] text-xs sm:text-sm md:text-base font-semibold uppercase ps-5">
                <span className="w-[5px] h-[5px] bg-[#fff] rounded-[50%]"></span>
                Unlock global opportunities with VYUG – NFTs, land,
                collectibles, and more in the largest decentralized metaverse
              </p>
              <p className="flex justify-start items-center gap-3 description font-transyl text-[#fff] text-xs sm:text-sm md:text-base font-semibold uppercase ps-5">
                <span className="w-[5px] h-[5px] bg-[#fff] rounded-[50%]"></span>
                Presale Price $ 0.033
              </p>
              <p className="flex justify-start items-center gap-2 description font-transyl text-[#fff] text-xs sm:text-sm md:text-base font-semibold uppercase ps-5">
                <span className="w-[5px] h-[5px] bg-[#fff] rounded-[50%]"></span>
                Listing Price $ 0.088
              </p>
            </div>
          </section>
        </section>
        {/* Blogs, PRs, etc */}
        <section className="my-16 md:my-16">
          <h2 className="header font-transyl text-[#fff] text-center md:text-start text-[25px] md:text-[30px] lg:text-[35px] uppercase flex flex-col justify-center items-center md:items-start gap-2 w-fit mx-auto">
            {/*  xl:ms-[22rem] */}
            <span className="flex justify-start items-center">
              From Headl
              <span className="hidden md:block bg-[#fff] animate-line"></span>
              ines to BlockChain
            </span>
            <span className="md:ms-28">VYUG in the Media Spotlight </span>
          </h2>
          <div className="scroller my-14">
            <div className="scroller__inner flex justify-start items-center gap-4">
              {PRS.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="bg-[#00000080] h-[8rem] w-[15rem] rounded-[0.5rem] flex justify-center items-center"
                >
                  <img src={item.src} className="w-[75%]" alt="Presale PR" />
                </a>
              ))}
            </div>
          </div>
        </section>
        {/* Grid Section (Design Tera Tauba Tauba!!!) */}
        <section className="mb-16 md:mb-36 relative">
          <div
            style={{
              background: `url(${section3_bg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="absolute z-[-2] top-0 right-0 left-0 bottom-0"
          ></div>
          <div
            className="absolute z-[-1] w-[60vw] h-[60vw] top-0 right-0 rounded-[100%] flex justify-center items-center"
            style={{
              background:
                "linear-gradient(to right bottom, #049a99, #00998c, #00977c, #00956a50, #159255)",
              filter: "blur(10rem)",
              transform: "translate(-10%, -65%)",
              top: 0,
              left: 0,
            }}
          ></div>
          <div
            className="absolute z-[-1] w-[50vw] h-[50vw] top-0 right-0 rounded-[100%] flex justify-center items-center"
            style={{
              background:
                "linear-gradient(to right bottom, #049a99, #00998c, #00977c, #00956a50, #159255)",
              filter: "blur(8rem)",
              transform: "translate(0%, 50%)",
              bottom: 0,
              right: 0,
            }}
          ></div>
          <div className="pt-24 px-4">
            <h2 className="header font-transyl text-[#fff] text-center md:text-start text-[25px] md:text-[30px] lg:text-[35px] uppercase flex flex-col justify-center items-center md:items-start gap-2 w-fit mx-auto">
              Why to invest in VYUG?
            </h2>
            <p className="description text-sm md:text-base text-[#fff] text-center mt-4 max-w-[850px] mx-auto">
              In a world saturated with generic Metaverse projects with their
              limitations in entertainment, VYUG stands out by offering real and
              unmatched utility. Our platform is designed to solve real-world
              problems and provide users with unparalleled opportunities to
              create, collaborate, and thrive.
            </p>
            <div className="max-w-[900px] lg:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-0.5 justify-center content-center mt-12">
              {section3Content.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="bg-[#00000095] p-5 md:p-3 py-6 md:py-4.5 w-[250px] min-h-[200px] mx-auto"
                  >
                    <h6 className="font-transyl text-[#fff] text-xs md:text-sm uppercase text-start">
                      {item.heading}
                    </h6>
                    <p className="description text-[#fff] text-xs md:text-sm text-start mt-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="col-span-1 w-[250px] md:min-h-[200px] mx-auto"></div>
                </>
              ))}
            </div>
          </div>
        </section>
        {/* Vyug Tokenomics */}
        <section className="my-16">
          <h2 className="header font-transyl text-[#fff] text-center text-[25px] md:text-[30px] lg:text-[35px] uppercase">
            VYUG TOKENOMICS
          </h2>
          <h2 className="description text-[#fff] text-center text-[15px] md:text-[20px] lg:text-[20px] pt-2 font-semibold">
            A Blueprint for Future Success
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 mt-20 w-[90%] mx-auto items-center">
            <div className="lg:w-[40%] w-full flex justify-center items-center">
              <img src={Tokenomics} alt="" />
            </div>
            <div className="lg:w-[55%] w-full flex justify-center items-center">
              <TableContainer
                component={Paper}
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <Table
                  sx={{
                    borderCollapse: "collapse",
                    backgroundColor: "transparent",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        className="header flex items-center justify-start gap-4 text-[#fff] text-sm md:text-base"
                        sx={{
                          border: "none",
                          color: "white",
                        }}
                      >
                        <span className="w-4 h-4 rounded-full border-[1px] border-[#fff]" />
                        Allocation
                      </TableCell>
                      <TableCell
                        className="header text-left text-[#fff] text-sm md:text-base px-10"
                        sx={{
                          borderLeft: "1px dashed white",
                          borderBottom: "1px dashed white",
                          color: "white",
                        }}
                      >
                        Initials
                      </TableCell>
                      <TableCell
                        className="header text-left px-10 text-[#fff] text-sm md:text-base"
                        sx={{
                          borderLeft: "1px dashed white",
                          borderBottom: "1px dashed white",
                          color: "white",
                        }}
                      >
                        %age
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tokenomicsData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell
                          className="header flex gap-5 w-[300px] sm:w-full text-left text-[#fff] text-xs md:text-sm"
                          sx={{
                            borderBlock: "1px dashed white",
                            color: "white",
                          }}
                        >
                          <span
                            style={{ backgroundColor: `${item?.bgColor}` }}
                            className="w-4 h-4 rounded-full"
                          />
                          <p className="">{item?.allocation}</p>
                        </TableCell>
                        <TableCell
                          className="header text-left px-10 text-[#fff] text-xs md:text-sm"
                          sx={{
                            borderBlock: "1px dashed white",
                            borderLeft: "1px dashed white",
                            color: "white",
                          }}
                        >
                          {item?.initials}
                        </TableCell>
                        <TableCell
                          className="header text-left px-10 text-[#fff] text-xs md:text-sm"
                          sx={{
                            borderBlock: "1px dashed white",
                            borderLeft: "1px dashed white",
                            color: "white",
                          }}
                        >
                          {item?.age}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell
                        className="header flex gap-5 text-left text-[#fff] text-xs md:text-sm"
                        sx={{
                          border: "none",
                          borderTop: "1px dashed white",
                        }}
                      >
                        <p className="w-4 h-4 rounded-full bg-[#A7D2A4]" />
                        UCE Wallet
                      </TableCell>
                      <TableCell
                        className="header text-left px-10 text-[#fff] text-xs md:text-sm"
                        sx={{
                          border: "none",
                          borderTop: "1px dashed white",
                          borderLeft: "1px dashed white",
                        }}
                      >
                        UCEW
                      </TableCell>
                      <TableCell
                        className="header text-left px-10 text-[#fff] text-xs md:text-sm"
                        sx={{
                          border: "none",
                          borderTop: "1px dashed white",
                          borderLeft: "1px dashed white",
                        }}
                      >
                        05 %
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </section>{" "}
        {/* Vyug RoadMap */}
        <PresaleRoadmap />
        {/* VYUG FAQs */}
        <PresaleFAQs />
        {/* Achievements */}
        {/* <section className="mb-16 md:mb-36">
          <h2 className="header font-transyl text-[#fff] text-[25px] md:text-[30px] lg:text-[35px] uppercase flex flex-col justify-center items-center">
            Built On Trust
          </h2>
          <p className="description text-sm md:text-base text-[#fff] text-center mt-4">
            Our Certification Journey to Secure Your Future
          </p>
          <div className="scroller my-14">
            <div className="scroller__inner flex justify-start items-center gap-4">
              {Array.from(Array(6)).map((item, index) => (
                <div
                  key={index}
                  className="bg-[#00000080] h-[8rem] w-[15rem] rounded-[0.5rem]"
                ></div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Section */}
        {/* <section className="mb-16 md:mb-36 px-3 md:px-0">
          <h3 className="header font-transyl text-[#fff] text-[25px] md:text-[30px] lg:text-[35px] uppercase flex flex-col justify-center items-center text-center">
            What Makes VYUG Unique?
          </h3>
          <p className="description text-sm md:text-base text-[#fff] text-center mt-4 max-w-[900px] mx-auto">
            In a world saturated with generic Metaverse projects with their
            limitations in entertainment, VYUG stands out by offering real and
            unmatched utility. Our platform is designed to solve real-world
            problems and provide users with unparalleled opportunities to
            create, collaborate, and thrive.
          </p>

          <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-9 w-full max-w-[1400px] mx-auto my-16">
            <div className="w-full md:w-[45%] p-3 sm:p-4 md:p-6 flex justify-start items-start sm:items-stretch gap-5 sm:gap-10 md:gap-16 bg-[#FFFFFF19] hover:bg-[#FFFFFF28] transition duration-300 ease-in-out border-[1px] border-solid border-[#FFFFFF30] rounded-[0.5rem]">
              <div className="relative w-[45%] md:w-[50%] aspect-square bg-[#00000030] rounded-[0.5rem] border-[1px] border-solid border-[#FFFFFF30]">
                <img
                  src={unique1}
                  alt="Unmatched Utility"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-[28%] md:-translate-y-[45%] w-[80%] md:w-[100%]"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4 w-[60%] md:w-[55%]">
                <h6 className="header font-transyl text-[16px] md:text-[18px] text-[#fff] text-start uppercase">
                  Unmatched Utility
                </h6>
                <p className="description text-xs sm:text-sm md:text-base text-[#fff] text-start">
                  VYUG is a utility-driven Metaverse that enables users to buy,
                  sell, and trade virtual assets, participate in
                  community-driven projects, and earn through engaging
                  experiences. It's not just virtual; it’s valuable!
                </p>
              </div>
            </div>

            <div className="w-full md:w-[45%] p-3 sm:p-4 md:p-6 flex justify-start items-start sm:items-stretch gap-5 sm:gap-10 md:gap-16 bg-[#FFFFFF19] hover:bg-[#FFFFFF28] transition duration-300 ease-in-out border-[1px] border-solid border-[#FFFFFF30] rounded-[0.5rem]">
              <div className="relative w-[45%] md:w-[50%] aspect-square bg-[#00000030] rounded-[0.5rem] border-[1px] border-solid border-[#FFFFFF30]">
                <img
                  src={unique3}
                  alt="the Growth"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-[35%] md:-translate-y-1/2 w-[75%] md:w-[93%]"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4 w-[60%] md:w-[55%]">
                <h6 className="header font-transyl text-[16px] md:text-[18px] text-[#fff] text-start uppercase">
                  the Growth
                </h6>
                <p className="description text-xs sm:text-sm md:text-base text-[#fff] text-start">
                  By holding VYUG Tokens, you become part of a community that
                  thrives on collaboration and shared success. Your investment
                  empowers you to influence the direction of the Metaverse and
                  participate in decision-making processes.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[45%] p-3 sm:p-4 md:p-6 flex justify-start items-start sm:items-stretch gap-5 sm:gap-10 md:gap-16 bg-[#FFFFFF19] hover:bg-[#FFFFFF28] transition duration-300 ease-in-out border-[1px] border-solid border-[#FFFFFF30] rounded-[0.5rem]">
              <div className="relative w-[45%] md:w-[50%] aspect-square bg-[#00000030] rounded-[0.5rem] border-[1px] border-solid border-[#FFFFFF30]">
                <img
                  src={unique2}
                  alt="Exclusive Benefits"
                  className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 md:-translate-x-[30%] md:-translate-y-[32%] w-[85%] md:w-[100%]"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4 w-[60%] md:w-[55%]">
                <h6 className="header font-transyl text-[16px] md:text-[18px] text-[#fff] text-start uppercase">
                  Exclusive Benefits
                </h6>
                <p className="description text-xs sm:text-sm md:text-base text-[#fff] text-start">
                  As an early participant in the VYUG Token presale, you’ll
                  enjoy exclusive access to features, events, and opportunities
                  that will shape the VYUG ecosystem. Your early support
                  positions you to benefit from our growth and innovation.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[45%] p-3 sm:p-4 md:p-6 flex justify-start items-start sm:items-stretch gap-5 sm:gap-10 md:gap-16 bg-[#FFFFFF19] hover:bg-[#FFFFFF28] transition duration-300 ease-in-out border-[1px] border-solid border-[#FFFFFF30] rounded-[0.5rem]">
              <div className="relative w-[45%] md:w-[50%] aspect-square bg-[#00000030] rounded-[0.5rem] border-[1px] border-solid border-[#FFFFFF30]">
                <img
                  src={unique4}
                  alt="Multi-Chain Advantage"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-[35%] md:-translate-y-1/2 w-[92%] md:w-[100%]"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4 w-[60%] md:w-[55%]">
                <h6 className="header font-transyl text-[16px] md:text-[18px] text-[#fff] text-start uppercase">
                  Multi-Chain Advantage
                </h6>
                <p className="description text-xs sm:text-sm md:text-base text-[#fff] text-start">
                  Built on Solana, Polygon, Ethereum, and BNB, VYUG ensures
                  fast, secure, and low-cost transactions, making it easy for
                  you to engage and transact within the Metaverse without the
                  barriers that limit traditional platforms.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* Section */}
        {/* <section className="mb-16 md:mb-36 px-3 md:px-0">
          <h3 className="header font-transyl text-[#fff] text-[25px] md:text-[30px] lg:text-[35px] uppercase flex flex-col justify-center items-center text-center">
            Why You Should Invest in VYUG Token
          </h3>
          <p className="description text-sm md:text-base text-[#fff] text-center mt-4 max-w-[900px] mx-auto">
            In a world saturated with generic Metaverse projects with their
            limitations in entertainment, VYUG stands out by offering real and
            unmatched utility. Our platform is designed to solve real-world
            problems and provide users with unparalleled opportunities to
            create, collaborate, and thrive.
          </p>
          <div className="flex flex-wrap justify-center items-stretch gap-6 sm:gap-8 md:gap-12 w-full max-w-[1200px] mx-auto my-16">
            <div className="min-w-[250px] w-[45%] md:w-[30%] p-3 sm:p-4 md:p-6 flex flex-col justify-start items-stretch gap-6 bg-[#FFFFFF19] hover:bg-[#FFFFFF28] transition duration-100 ease-in-out border-[1px] border-solid border-[#FFFFFF30] rounded-[0.5rem]">
              <div className="relative h-[200px] bg-[#00000030] rounded-[0.5rem] border-[1px] border-solid border-[#FFFFFF30]">
                <img
                  src={last1}
                  alt="Security First"
                  className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[42%] w-[60%]"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4">
                <h6 className="header font-transyl text-[16px] md:text-[18px] text-[#fff] text-start uppercase">
                  Security First
                </h6>
                <p className="description text-xs sm:text-sm md:text-base text-[#fff] text-start">
                  Our platform employs audited smart contracts to ensure that
                  your investment is secure. Transparency and safety are our top
                  priorities, giving you peace of mind as you join our
                  community.
                </p>
              </div>
            </div>

            <div className="min-w-[250px] w-[45%] md:w-[30%] p-3 sm:p-4 md:p-6 flex flex-col justify-start items-stretch gap-6 bg-[#FFFFFF19] hover:bg-[#FFFFFF28] transition duration-300 ease-in-out border-[1px] border-solid border-[#FFFFFF30] rounded-[0.5rem]">
              <div className="relative h-[200px] bg-[#00000030] rounded-[0.5rem] border-[1px] border-solid border-[#FFFFFF30]">
                <img
                  src={last2}
                  alt="Tokenomics Designed for Growth"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%]"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4">
                <h6 className="header font-transyl text-[16px] md:text-[18px] text-[#fff] text-start uppercase">
                  Tokenomics Designed for Growth
                </h6>
                <p className="description text-xs sm:text-sm md:text-base text-[#fff] text-start">
                  With a limited supply of 3.5 billion tokens, our
                  well-structured tokenomics ensures that your investment has
                  the potential for significant appreciation. Participate in a
                  system designed to reward you for your loyalty and engagement.
                </p>
              </div>
            </div>

            <div className="min-w-[250px] w-[45%] md:w-[30%] p-3 sm:p-4 md:p-6 flex flex-col justify-start items-stretch gap-6 bg-[#FFFFFF19] hover:bg-[#FFFFFF28] transition duration-300 ease-in-out border-[1px] border-solid border-[#FFFFFF30] rounded-[0.5rem]">
              <div className="relative h-[200px] bg-[#00000030] rounded-[0.5rem] border-[1px] border-solid border-[#FFFFFF30]">
                <img
                  src={last3}
                  alt="Governance through DAO"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%]"
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-4">
                <h6 className="header font-transyl text-[16px] md:text-[18px] text-[#fff] text-start uppercase">
                  Governance through DAO
                </h6>
                <p className="description text-xs sm:text-sm md:text-base text-[#fff] text-start">
                  With VYUG, your voice matters! Token holders will have the
                  opportunity to participate in the DAO, and can propose and
                  vote on key decisions affecting the development of the
                  platform, ensuring that our community-driven vision thrives.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* Section */}
        {/* <section className="mb-16 md:mb-36 px-3 md:px-0 flex flex-col justify-start items-center">
          <h3 className="header font-transyl text-[#fff] text-[25px] md:text-[30px] lg:text-[35px] text-center uppercase flex flex-col justify-center items-center">
            Become Part of the VYUG Legacy!
          </h3>
          <p className="description text-sm md:text-base text-[#fff] text-center mt-4 max-w-[1000px] mx-auto">
            This is your moment to seize a revolutionary opportunity! Join us in
            creating a Metaverse that is not just a destination but a thriving
            community where every participant contributes to a brighter, more
            connected future.
          </p>
          <button
            onClick={handleOpenWaitlist}
            className="bg-[#00000080] px-20 py-3 rounded-[5rem] text-[#fff] description text-sm md:text-base font-semibold mt-12 md:mt-20"
          >
            BUY NOW
          </button>
        </section> */}
      </div>
      <Footer />
      {/* {openWaitlist && (
        <div className="fixed z-[4] flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-[#00000090] w-screen h-screen">
          <div className="flex flex-col justify-start items-stretch gap-0 max-w-[500px] w-[400px] mx-auto bg-[#242424] p-6 rounded-[1rem]">
            <button className="text-xl ms-auto" onClick={handleOpenWaitlist}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10.5" cy="10.5" r="10.5" fill="white" />
                <path
                  d="M15.0039 6L6.00232 15.0016"
                  stroke="#242424"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 6L15.0016 15.0016"
                  stroke="#242424"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <p className="description text-[#fff] text-base text-center my-4">
              Be among the first to invest in VYUG and become a part of our
              growing community. Fill the form now to secure your spot in the
              presale and enjoy exclusive benefits.
            </p>
            <a
              href="https://forms.gle/nWJ8r6GPcVgYLYxL8"
              target="_blank"
              className="flex justify-center items-center header uppercase text-[#fff] text-center text-base bg-[#000000] px-16 py-3 rounded-[5rem] mt-4"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default PreSale;
