import GetInTouch from "../components/GetInTouch";
import tokenVideo from "../videos/token_video.mp4";
import tokenImg from "../images/vyug_token_img.webp";
import tokenomicsBG from "../images/tokenomics_bg.webp";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Header from "../components/Head";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { handleScrollAnimation, handleTypeAnimation } from "../lib/animations";
import ReactCardFlip from "react-card-flip";
import { Helmet } from "react-helmet-async";
// import Marquee from "react-fast-marquee";

function Token() {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);
  const [animation3Triggered, setAnimation3Triggered] = useState(false);
  const industries = ["CoinCRED", "LBank", "CoinLord"];
  const container = useRef(null);
  const stickyMask = useRef(null);
  const isMobile = useMediaQuery("(max-width: 330px");
  const isTablet = useMediaQuery("(min-width: 330px) and (max-width: 600px)");
  const targetMaskSize = isMobile ? 150 : isTablet ? 105 : 35;
  const initialMaskSize = 0.8;
  const easing = 0.15;
  let easedScrollProgress = 0;

  const [position, setPosition] = useState(false);
  const [color, setColor] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlickClick = (e) => {
    e.preventDefault();
    setIsFlipped((prevState) => !prevState);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleFlickClick({ preventDefault: () => {} });
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setColor(false);
    } else {
      setColor(true);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const boxElement = document.getElementById("rw3");

      if (boxElement) {
        const bounding = boxElement.getBoundingClientRect();
        const boxTop = bounding.top;

        if (boxTop <= 100) {
          setPosition(true);
        } else {
          setPosition(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

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
      handleScrollAnimation("rw1", "rwi1", "rwt1", "rwi2");
      handleTypeAnimation("rw1", setAnimationTriggered);
      handleTypeAnimation("rw3", setAnimation2Triggered);

      handleScrollAnimation("rw3", null, "rwt3");
      handleScrollAnimation("rw4", null, "rwt4");
      handleTypeAnimation("rw4", setAnimation3Triggered);
    };

    console.log("Loading metadata");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (e) => {
    const para = e.target.querySelector(".animated-visibility");
    if (para) {
      para.style.opacity = "100%";
      para.style.visibility = "visible";
    }
  };

  const handleMouseLeave = (e) => {
    const para = e.target.querySelector(".animated-visibility");
    if (para) {
      para.style.opacity = "0%";
      para.style.visibility = "hidden";
    }
  };

  return (
    <div>
      <Helmet>
        <title>Vyug Token - VYUG Metaverse</title>
        <meta name="description" content="Vyug Token" />
        <meta name="keywords" content="Vyug Token" />
        <meta property="og:title" content="Vyug Token" />
        <meta property="og:description" content="Vyug Token" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/vyug-token" />
      </Helmet>
      <Header isTransparent={position} isHeaderText={color} />
      <section className="token__main">
        <div ref={container} className="token__container-1">
          <div ref={stickyMask} className="token__stickyMask">
            <video autoPlay loop>
              <source src={tokenVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section
        style={{ overflowX: "hidden" }}
        className="bg-[#242424] py-20 md:py-40 px-8 md:px-16 flex flex-col justify-center items-stretch gap-6 md:gap-0"
        id="rw1"
      >
        <h3 className="header text-white text-center uppercase font-bold text-xl md:text-2xl mb-16">
          {animationTriggered && (
            <TypeAnimation
              sequence={["Harnessing the Power of Blockchain technology", 2000]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
            />
          )}
        </h3>
        <div className="relative min-h-[55vh]">
          <h2
            className="absolute hidden-text z-[1] top-0 left-[15%] header text-white text-start uppercase font-bold text-5xl md:text-7xl lg:text-9xl"
            id="rwi1"
          >
            VYUG
          </h2>
          <img
            src={tokenImg}
            alt="VYUG TOKEN"
            className="absolute z-[0] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xs mx-auto w-8/12 border-[4px] border-white border-solid rounded-full"
          />
          <h2
            className="absolute z-[1] bottom-0 right-[10%] header text-white text-end uppercase font-bold text-5xl md:text-7xl lg:text-9xl hidden-text"
            id="rwi2"
          >
            TOKEN
          </h2>
        </div>
        <p
          className="description text-white text-base text-center max-w-4xl mx-auto mt-16 hidden-text"
          id="rwt1"
        >
          The VYUG Token is a cutting-edge utility token meticulously designed
          to harness the decentralized power of blockchain technology. Built on
          the Solana blockchain, with robust integrations across Ethereum,
          Polygon, and BNB networks, the VYUG Token epitomizes the
          transformative potential of cryptocurrencies in reshaping digital
          interactions and economic systems
        </p>
      </section>

      <section
        id="rw3"
        className="my-24 flex flex-col justify-center items-stretch gap-6 max-w-4xl mx-auto px-3 overflow-x-hidden lg:overflow-x-visible"
      >
        <h3 className="header text-3xl sm:text-4xl md:text-[45px] font-black uppercase text-center text-[#242424]">
          {animation2Triggered && (
            <TypeAnimation
              sequence={["Multichain Foundation", 2000]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={false}
            />
          )}
        </h3>
        {/* <p className="description text-center text-base max-w-2xl mx-auto">
          VYUG token, the in-house currency of VYUG, is used for transferring
          values, governance, and staking by the users in the VYUG Metaverse.
          Based on, Ethereum, and Polygon Blockchain.
        </p> */}
        <div className="relative mx-auto my-16">
          <img
            src={tokenomicsBG}
            alt="Tokenomics"
            className="max-w-[21rem] sm:max-w-sm"
          />
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div
              className="max-w-[28rem] absolute top-[50%] left-[50%] -translate-x-1/2 translate-y-[-116%] border-[4px] border-white border-solid rounded-full"
              style={{ width: "75%" }}
            >
              <img
                src={tokenImg}
                alt="Tokenomics"
                onClick={handleFlickClick}
                className="w-[100%]"
              />
            </div>
            <div
              className="max-w-[28rem] absolute top-[50%] left-[50%] -translate-x-1/2 translate-y-[-116%] border-[4px] border-white border-solid rounded-full"
              style={{ width: "75%" }}
            >
              <img
                src={tokenImg}
                alt="Tokenomics"
                onClick={handleFlickClick}
                className="w-[100%]"
              />
            </div>
          </ReactCardFlip>

          <svg
            width="200"
            height="50"
            viewBox="0 0 392 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-3%] sm:top-[2%] md:top-[10%] left-[18%] sm:left-[6%] md:left-[-35%] w-[75px] sm:w-[100px] sm:h-[25px] md:w-[200px] md:h-[50px]"
          >
            <path
              d="M342 1L342.825 0.435089L342.527 0H342V1ZM381.167 66C381.167 68.9455 383.554 71.3333 386.5 71.3333C389.446 71.3333 391.833 68.9455 391.833 66C391.833 63.0545 389.446 60.6667 386.5 60.6667C383.554 60.6667 381.167 63.0545 381.167 66ZM0 2H2.51471V0H0V2ZM7.54412 2H12.5735V0H7.54412V2ZM17.6029 2H22.6324V0H17.6029V2ZM27.6618 2H32.6912V0H27.6618V2ZM37.7206 2H42.75V0H37.7206V2ZM47.7794 2H52.8088V0H47.7794V2ZM57.8382 2H62.8676V0H57.8382V2ZM67.8971 2H72.9265V0H67.8971V2ZM77.9559 2H82.9853V0H77.9559V2ZM88.0147 2H93.0441V0H88.0147V2ZM98.0735 2H103.103V0H98.0735V2ZM108.132 2H113.162V0H108.132V2ZM118.191 2H123.221V0H118.191V2ZM128.25 2H133.279V0H128.25V2ZM138.309 2H143.338V0H138.309V2ZM148.368 2H153.397V0H148.368V2ZM158.427 2H163.456V0H158.427V2ZM168.485 2H173.515V0H168.485V2ZM178.544 2H183.574V0H178.544V2ZM188.603 2H193.632V0H188.603V2ZM198.662 2H203.691V0H198.662V2ZM208.721 2H213.75V0H208.721V2ZM218.78 2H223.809V0H218.78V2ZM228.838 2H233.868V0H228.838V2ZM238.897 2H243.927V0H238.897V2ZM248.956 2H253.985V0H248.956V2ZM259.015 2H264.044V0H259.015V2ZM269.074 2H274.103V0H269.074V2ZM279.133 2H284.162V0H279.133V2ZM289.191 2H294.221V0H289.191V2ZM299.25 2H304.28V0H299.25V2ZM309.309 2H314.339V0H309.309V2ZM319.368 2H324.397V0H319.368V2ZM329.427 2H334.456V0H329.427V2ZM339.486 2H342V0H339.486V2ZM341.175 1.56491L342.565 3.59616L344.216 2.46634L342.825 0.435089L341.175 1.56491ZM345.347 7.65866L348.128 11.7212L349.778 10.5913L346.997 6.52884L345.347 7.65866ZM350.909 15.7837L353.69 19.8462L355.341 18.7163L352.56 14.6538L350.909 15.7837ZM356.472 23.9087L359.253 27.9712L360.903 26.8413L358.122 22.7788L356.472 23.9087ZM362.034 32.0337L364.815 36.0962L366.466 34.9663L363.685 30.9038L362.034 32.0337ZM367.597 40.1587L370.378 44.2212L372.028 43.0913L369.247 39.0288L367.597 40.1587ZM373.159 48.2837L375.94 52.3462L377.591 51.2163L374.81 47.1538L373.159 48.2837ZM378.722 56.4087L381.503 60.4712L383.153 59.3414L380.372 55.2788L378.722 56.4087ZM384.284 64.5337L385.675 66.5649L387.325 65.4351L385.935 63.4039L384.284 64.5337Z"
              fill="#111113"
            />
          </svg>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute top-[-2.5%] sm:top-[-2%] md:top-[6.5%] left-[-50%] sm:left-[-56%] md:left-[-97%] border-[1p] border-blac border-dashe rounded-md max-w-[15rem] p-2"
          >
            <h6 className="description text-xs sm:text-sm md:text-base text-end font-bold">
              {animation2Triggered && (
                <TypeAnimation
                  sequence={["Solana", 2000]}
                  wrapper="span"
                  speed={30}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h6>
            <p className="description text-xs text-end font-normal invisible transition-opacity animated-visibility">
              The VYUG Token leverages Solana's high-speed blockchain
              technology, which supports thousands of transactions per second
              (TPS) with minimal fees. Solana's robust infrastructure ensures
              rapid, cost-effective transactions, making it ideal for
              high-activity environments like VYUG.
            </p>
          </div>

          <svg
            width="200"
            height="50"
            viewBox="0 0 393 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-3%] sm:top-[2.5%] md:top-[10%] left-[60%] sm:left-[65%] md:left-[80%] w-[75px] sm:w-[100px] sm:h-[25px] md:w-[200px] md:h-[50px]"
          >
            <path
              d="M50.5 1L49.6748 0.435089L49.9727 0H50.5V1ZM11.3333 66C11.3333 68.9455 8.94553 71.3333 6 71.3333C3.05447 71.3333 0.666656 68.9455 0.666656 66C0.666656 63.0545 3.05447 60.6667 6 60.6667C8.94553 60.6667 11.3333 63.0545 11.3333 66ZM392.5 2H389.985V0H392.5V2ZM384.956 2H379.926V0H384.956V2ZM374.897 2H369.868V0H374.897V2ZM364.838 2H359.809V0H364.838V2ZM354.779 2H349.75V0H354.779V2ZM344.721 2H339.691V0H344.721V2ZM334.662 2H329.632V0H334.662V2ZM324.603 2H319.574V0H324.603V2ZM314.544 2H309.515V0H314.544V2ZM304.485 2H299.456V0H304.485V2ZM294.426 2H289.397V0H294.426V2ZM284.368 2H279.338V0H284.368V2ZM274.309 2H269.279V0H274.309V2ZM264.25 2H259.221V0H264.25V2ZM254.191 2H249.162V0H254.191V2ZM244.132 2H239.103V0H244.132V2ZM234.073 2H229.044V0H234.073V2ZM224.015 2H218.985V0H224.015V2ZM213.956 2H208.926V0H213.956V2ZM203.897 2H198.868V0H203.897V2ZM193.838 2H188.809V0H193.838V2ZM183.779 2H178.75V0H183.779V2ZM173.72 2H168.691V0H173.72V2ZM163.662 2H158.632V0H163.662V2ZM153.603 2H148.573V0H153.603V2ZM143.544 2H138.515V0H143.544V2ZM133.485 2H128.456V0H133.485V2ZM123.426 2H118.397V0H123.426V2ZM113.367 2H108.338V0H113.367V2ZM103.309 2H98.2792V0H103.309V2ZM93.2498 2H88.2203V0H93.2498V2ZM83.1909 2H78.1615V0H83.1909V2ZM73.1321 2H68.1027V0H73.1321V2ZM63.0732 2H58.0438V0H63.0732V2ZM53.0144 2H50.5V0H53.0144V2ZM51.3252 1.56491L49.9345 3.59616L48.2842 2.46634L49.6748 0.435089L51.3252 1.56491ZM47.1533 7.65866L44.372 11.7212L42.7217 10.5913L45.503 6.52884L47.1533 7.65866ZM41.5908 15.7837L38.8095 19.8462L37.1592 18.7163L39.9405 14.6538L41.5908 15.7837ZM36.0283 23.9087L33.247 27.9712L31.5967 26.8413L34.378 22.7788L36.0283 23.9087ZM30.4658 32.0337L27.6845 36.0962L26.0342 34.9663L28.8155 30.9038L30.4658 32.0337ZM24.9033 40.1587L22.122 44.2212L20.4717 43.0913L23.253 39.0288L24.9033 40.1587ZM19.3408 48.2837L16.5595 52.3462L14.9092 51.2163L17.6905 47.1538L19.3408 48.2837ZM13.7783 56.4087L10.997 60.4712L9.34671 59.3414L12.128 55.2788L13.7783 56.4087ZM8.21576 64.5337L6.82516 66.5649L5.17484 65.4351L6.56546 63.4039L8.21576 64.5337Z"
              fill="#111113"
            />
          </svg>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute top-[-2.5%] sm:top-[-1.5%] md:top-[7%] right-[-50%] sm:right-[-53%] md:right-[-94%] border-[1p] border-blac border-dashe rounded-md max-w-[15rem] p-2"
          >
            <h6 className="description text-xs sm:text-sm md:text-base font-bold">
              {animation2Triggered && (
                <TypeAnimation
                  sequence={["Ethereum", 2000]}
                  wrapper="span"
                  speed={30}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h6>
            <p className="description text-xs text-start font-normal invisible transition-opacity animated-visibility">
              Integration with Ethereum enhances the VYUG Token’s accessibility
              and interoperability, tapping into Ethereum’s vast network and
              DeFi ecosystem. This allows users to seamlessly interact with
              various Ethereum-based applications and services.
            </p>
          </div>

          <svg
            width="200"
            height="50"
            viewBox="0 0 393 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[-5%] sm:bottom-[1%] md:bottom-[8%] right-[20%] sm:right-[10%] md:right-[-30%] w-[75px] sm:w-[100px] sm:h-[25px] md:w-[200px] md:h-[50px]"
          >
            <path
              d="M50.5 71L49.6748 71.5649L49.9727 72H50.5V71ZM11.3333 6C11.3333 3.05448 8.94553 0.666664 6 0.666664C3.05447 0.666664 0.666656 3.05448 0.666656 6C0.666656 8.94552 3.05447 11.3333 6 11.3333C8.94553 11.3333 11.3333 8.94552 11.3333 6ZM392.5 70H389.985V72H392.5V70ZM384.956 70H379.926V72H384.956V70ZM374.897 70H369.868V72H374.897V70ZM364.838 70H359.809V72H364.838V70ZM354.779 70H349.75V72H354.779V70ZM344.721 70H339.691V72H344.721V70ZM334.662 70H329.632V72H334.662V70ZM324.603 70H319.574V72H324.603V70ZM314.544 70H309.515V72H314.544V70ZM304.485 70H299.456V72H304.485V70ZM294.426 70H289.397V72H294.426V70ZM284.368 70H279.338V72H284.368V70ZM274.309 70H269.279V72H274.309V70ZM264.25 70H259.221V72H264.25V70ZM254.191 70H249.162V72H254.191V70ZM244.132 70H239.103V72H244.132V70ZM234.073 70H229.044V72H234.073V70ZM224.015 70H218.985V72H224.015V70ZM213.956 70H208.926V72H213.956V70ZM203.897 70H198.868V72H203.897V70ZM193.838 70H188.809V72H193.838V70ZM183.779 70H178.75V72H183.779V70ZM173.72 70H168.691V72H173.72V70ZM163.662 70H158.632V72H163.662V70ZM153.603 70H148.573V72H153.603V70ZM143.544 70H138.515V72H143.544V70ZM133.485 70H128.456V72H133.485V70ZM123.426 70H118.397V72H123.426V70ZM113.367 70H108.338V72H113.367V70ZM103.309 70H98.2792V72H103.309V70ZM93.2498 70H88.2203V72H93.2498V70ZM83.1909 70H78.1615V72H83.1909V70ZM73.1321 70H68.1027V72H73.1321V70ZM63.0732 70H58.0438V72H63.0732V70ZM53.0144 70H50.5V72H53.0144V70ZM51.3252 70.4351L49.9345 68.4038L48.2842 69.5337L49.6748 71.5649L51.3252 70.4351ZM47.1533 64.3413L44.372 60.2788L42.7217 61.4087L45.503 65.4712L47.1533 64.3413ZM41.5908 56.2163L38.8095 52.1538L37.1592 53.2837L39.9405 57.3462L41.5908 56.2163ZM36.0283 48.0913L33.247 44.0288L31.5967 45.1587L34.378 49.2212L36.0283 48.0913ZM30.4658 39.9663L27.6845 35.9038L26.0342 37.0337L28.8155 41.0962L30.4658 39.9663ZM24.9033 31.8413L22.122 27.7788L20.4717 28.9087L23.253 32.9712L24.9033 31.8413ZM19.3408 23.7163L16.5595 19.6538L14.9092 20.7837L17.6905 24.8462L19.3408 23.7163ZM13.7783 15.5913L10.997 11.5288L9.34671 12.6586L12.128 16.7212L13.7783 15.5913ZM8.21576 7.46633L6.82516 5.43509L5.17484 6.56491L6.56546 8.59615L8.21576 7.46633Z"
              fill="#111113"
            />
          </svg>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute bottom-[-42%] sm:bottom-[-36%] md:bottom-[-28%] right-[-50%] sm:right-[-52%] md:right-[-92%] border-[1p] border-blac border-dashe rounded-md max-w-[15rem] p-2"
          >
            <h6 className="description text-xs sm:text-sm md:text-base font-bold">
              {animation2Triggered && (
                <TypeAnimation
                  sequence={["Polygon", 2000]}
                  wrapper="span"
                  speed={30}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h6>
            <p className="description text-xs text-start font-normal invisible transition-opacity animated-visibility">
              The VYUG Token’s compatibility with Polygon provides additional
              scalability and efficiency. Polygon’s layer 2 solutions offer
              fast, low-cost transactions, enhancing the overall user experience
              and enabling smoother interactions within the VYUG metaverse.
            </p>
          </div>

          <svg
            width="200"
            height="50"
            viewBox="0 0 392 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[-4%] sm:bottom-[0%] md:bottom-[8%] left-[20%] sm:left-[12%] md:left-[-35%] w-[75px] sm:w-[100px] sm:h-[25px] md:w-[200px] md:h-[50px]"
          >
            <path
              d="M342 71L342.825 71.5649L342.527 72H342V71ZM381.167 6C381.167 3.05448 383.554 0.666664 386.5 0.666664C389.446 0.666664 391.833 3.05448 391.833 6C391.833 8.94552 389.446 11.3333 386.5 11.3333C383.554 11.3333 381.167 8.94552 381.167 6ZM0 70H2.51471V72H0V70ZM7.54412 70H12.5735V72H7.54412V70ZM17.6029 70H22.6324V72H17.6029V70ZM27.6618 70H32.6912V72H27.6618V70ZM37.7206 70H42.75V72H37.7206V70ZM47.7794 70H52.8088V72H47.7794V70ZM57.8382 70H62.8676V72H57.8382V70ZM67.8971 70H72.9265V72H67.8971V70ZM77.9559 70H82.9853V72H77.9559V70ZM88.0147 70H93.0441V72H88.0147V70ZM98.0735 70H103.103V72H98.0735V70ZM108.132 70H113.162V72H108.132V70ZM118.191 70H123.221V72H118.191V70ZM128.25 70H133.279V72H128.25V70ZM138.309 70H143.338V72H138.309V70ZM148.368 70H153.397V72H148.368V70ZM158.427 70H163.456V72H158.427V70ZM168.485 70H173.515V72H168.485V70ZM178.544 70H183.574V72H178.544V70ZM188.603 70H193.632V72H188.603V70ZM198.662 70H203.691V72H198.662V70ZM208.721 70H213.75V72H208.721V70ZM218.78 70H223.809V72H218.78V70ZM228.838 70H233.868V72H228.838V70ZM238.897 70H243.927V72H238.897V70ZM248.956 70H253.985V72H248.956V70ZM259.015 70H264.044V72H259.015V70ZM269.074 70H274.103V72H269.074V70ZM279.133 70H284.162V72H279.133V70ZM289.191 70H294.221V72H289.191V70ZM299.25 70H304.28V72H299.25V70ZM309.309 70H314.339V72H309.309V70ZM319.368 70H324.397V72H319.368V70ZM329.427 70H334.456V72H329.427V70ZM339.486 70H342V72H339.486V70ZM341.175 70.4351L342.565 68.4038L344.216 69.5337L342.825 71.5649L341.175 70.4351ZM345.347 64.3413L348.128 60.2788L349.778 61.4087L346.997 65.4712L345.347 64.3413ZM350.909 56.2163L353.69 52.1538L355.341 53.2837L352.56 57.3462L350.909 56.2163ZM356.472 48.0913L359.253 44.0288L360.903 45.1587L358.122 49.2212L356.472 48.0913ZM362.034 39.9663L364.815 35.9038L366.466 37.0337L363.685 41.0962L362.034 39.9663ZM367.597 31.8413L370.378 27.7788L372.028 28.9087L369.247 32.9712L367.597 31.8413ZM373.159 23.7163L375.94 19.6538L377.591 20.7837L374.81 24.8462L373.159 23.7163ZM378.722 15.5913L381.503 11.5288L383.153 12.6586L380.372 16.7212L378.722 15.5913ZM384.284 7.46633L385.675 5.43509L387.325 6.56491L385.935 8.59615L384.284 7.46633Z"
              fill="#111113"
            />
          </svg>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute bottom-[-41.5%] sm:bottom-[-37%] md:bottom-[-28%] left-[-50%] sm:left-[-50%] md:left-[-97%] border-[1p] border-blac border-dashe rounded-md max-w-[15rem] p-2"
          >
            <h6 className="description text-xs sm:text-sm md:text-base text-end font-bold">
              {animation2Triggered && (
                <TypeAnimation
                  sequence={["BNB", 2000]}
                  wrapper="span"
                  speed={30}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h6>
            <p className="description text-xs text-end font-normal invisible transition-opacity animated-visibility">
              The VYUG Token’s compatibility with Polygon provides additional
              scalability and efficiency. Polygon’s layer 2 solutions offer
              fast, low-cost transactions, enhancing the overall user experience
              and enabling smoother interactions within the VYUG metaverse.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 my-8 mt-16">
          <div className="relative border-[1px] border-black border-dashed rounded-md px-4 pb-2 pt-4 w-full md:w-[32.33%] my-2">
            <h6 className="description text-base uppercase absolute top-0 left-0 translate-x-[9%] -translate-y-1/2 bg-white px-1">
              Token Name :
            </h6>
            <p className="description text-base font-bold uppercase">
              VYUG TOKEN
            </p>
          </div>
          <div className="relative border-[1px] border-black border-dashed rounded-md px-4 pb-2 pt-4 w-full md:w-[32.33%] my-2">
            <h6 className="description text-base uppercase absolute top-0 left-0 translate-x-[9%] -translate-y-1/2 bg-white px-1">
              Token Symbol :
            </h6>
            <p className="description text-base font-bold uppercase">VYUG</p>
          </div>
          <div className="relative border-[1px] border-black border-dashed rounded-md px-4 pb-2 pt-4 w-full md:w-[32.33%] my-2">
            <h6 className="description text-base uppercase absolute top-0 left-0 translate-x-[9%] -translate-y-1/2 bg-white px-1">
              Supply :
            </h6>
            <p className="description text-base font-bold uppercase">
              3,50,00,00,000 (3.5B)
            </p>
          </div>
          {/* <div className="relative border-[1px] border-black border-dashed rounded-md px-4 pb-2 pt-4 w-full my-2">
            <h6 className="description text-start text-base uppercase absolute top-0 left-0 translate-x-[9%] -translate-y-1/2 bg-white px-1">
              Token Address :
            </h6>
            <p className="description text-start text-base font-bold uppercase my-1.5 md:my-0">
              Ethereum Chain -{" "}
              <span className="text-sm md:text-base break-words">
                0x2170Ed0880ac9A755fd29B2688956BD959F933F8
              </span>
            </p>
            <p className="description text-start text-base font-bold uppercase">
              Polygon Chain -{" "}
              <span className="text-sm md:text-base break-words">
                0x2170Ed0880ac9A755fd29B2688956BD959F933F8
              </span>
            </p>
          </div> */}
        </div>
      </section>
      {/* <section className="flex flex-col justify-center items-center gap-8 md:gap-10 my-24">
        <h2 className="header text-3xl sm:text-4xl md:text-[45px] font-black uppercase text-center text-[#242424]">
          Available on
        </h2>
        <div className="w-full mx-auto my-5">
          <Marquee>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
            <p className="description text-white bg-[#242424] w-max px-6 py-2 text-xl uppercase rounded-3xl mx-6">
              CoinCRED
            </p>
          </Marquee>
        </div>
      </section> */}
      <section
        className="flex flex-col justify-center items-center gap-5 md:gap-8 px-3 mb-24"
        id="rw4"
      >
        <h4 className="header text-3xl sm:text-4xl md:text-[45px] font-black uppercase text-center text-[#242424] tracking-wider">
          {animation3Triggered && (
            <TypeAnimation
              sequence={["Utility and Versatility", 2000]}
              wrapper="span"
              speed={30}
              repeat={0}
              cursor={false}
            />
          )}
        </h4>
        <div id="rwt4">
          <p className="description text-base text-center max-w-[54rem] mx-auto">
            The VYUG Token embodies the spirit of the cryptocurrency revolution,
            providing users with a decentralized means to participate in a new
            digital economy. By enabling direct transactions, ownership of
            digital assets, and governance participation, the VYUG Token
            empowers individuals to reclaim control over their financial futures
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="my-6 md:my-10">
              <h6 className="description text-base md:text-lg text-[#242424] uppercase font-bold">
                Utility and Functionality :
              </h6>
              <p className="description text-base mt-6">
                As the native currency of the VYUG ecosystem, the VYUG Token
                serves various functions, including:
              </p>
              <ul
                className={
                  "ps-5 mt-4 description text-base list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgMTEgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjUuNSIgY3k9IjUuNSIgcj0iNS41IiBmaWxsPSIjMjQyNDI0Ii8+Cjwvc3ZnPgo=)]"
                }
              >
                <li>
                  <span className="font-semibold text-[#242424]">
                    Facilitating the purchase
                  </span>{" "}
                  of digital assets, properties, and collectibles
                </li>
                <li>
                  <span className="font-semibold text-[#242424]">
                    Enabling staking
                  </span>{" "}
                  and reward mechanisms that incentivize user participation and
                  network security
                </li>
                <li>
                  <span className="font-semibold text-[#242424]">
                    Allowing governance rights,
                  </span>{" "}
                  where holders can influence key decisions that shape the
                  platform’s future
                </li>
              </ul>
            </div>
            <div className="my-6 md:my-10">
              <h6 className="description text-base md:text-lg text-[#242424] uppercase font-bold">
                Global Reach :
              </h6>
              <p className="description text-base mt-6">
                With its decentralized architecture and multichain capabilities,
                the VYUG Token transcends geographic barriers, fostering a truly
                global community. This inclusivity promotes diverse
                participation and collaboration, enriching the VYUG ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <GetInTouch /> */}
      <Footer />
    </div>
  );
}

export default Token;
