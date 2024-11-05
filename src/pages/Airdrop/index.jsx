import { Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import sliderImg1 from "../../images/airdrop_slider_1.webp";
import sliderImg2 from "../../images/airdrop_slider_2.webp";
import sliderImg3 from "../../images/airdrop_slider_3.webp";
import sliderImg4 from "../../images/airdrop_slider_4.webp";
import sliderImg5 from "../../images/airdrop_slider_5.webp";
import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import infoImg1 from "../../images/airdrop_infographic_1.png";
// import infoImg2 from "../../images/airdrop_infographic_2.png";
import graphGIF from "../../images/airdrop_GIF.gif";
import whyJoinAirdrop from "../../images/airdrop_whyjoin.webp";
import airdropMobile from "../../images/airdrop_mobile.webp";
import airdropMobileStep1 from "../../images/airdrop_step1.webp";
import airdropMobileStep2 from "../../images/airdrop_step2.webp";
import airdropMobileStep3 from "../../images/airdrop_step3.webp";
import airdropMobileStep4 from "../../images/airdrop_step4.webp";
import AirdropHeader from "../../components/AirdropHeader";
import { useAirdropAuth } from "../../redux/airdropAuthSlice";
import s1 from "../../images/socialIcons/twitterGray.svg";
import s2 from "../../images/socialIcons/telegramGray.svg";
import s3 from "../../images/socialIcons/discordGray.svg";
import s4 from "../../images/socialIcons/instaGray.svg";
import s5 from "../../images/socialIcons/facebookGray.svg";
import s6 from "../../images/socialIcons/youtubeGray.svg";
import t1 from "../../images/socialIcons/twitter.svg";
import t2 from "../../images/socialIcons/telegram.svg";
import t3 from "../../images/socialIcons/discord.svg";
import t4 from "../../images/socialIcons/instagram.svg";
import t5 from "../../images/socialIcons/facebook.svg";
import t6 from "../../images/socialIcons/youtube.svg";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "../../index.css";
import airdropVideo from "../../videos/airdropSteps.mp4";
import { Helmet } from "react-helmet-async";

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
  {
    name: "instagram",
    link: "https://www.instagram.com/vyugofficial/",
    image: s4,
    colorImg: t4,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/VyugOfficial/",
    image: s5,
    colorImg: t5,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/@VyugOfficial",
    image: s6,
    colorImg: t6,
  },
];

const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isInView];
};

function Airdrop() {
  const [position, setPosition] = useState(false);
  const [img, setImg] = useState(-1);
  const { airdropUser, authToken, fetchAirdropUser } = useAirdropAuth();
  const stepImgRef = useRef();
  const height = window.innerHeight;
  const width = window.innerWidth;

  const [elementRef, isInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  if (!authToken) {
    return <Navigate to={"/landing-page/login"} replace={true} />;
  }

  const sliderImages = [
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4,
    sliderImg5,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "center",
    centerMode: true,
    pauseOnHover: false,
  };

  window.addEventListener("scroll", function (e) {
    let scroll_y = this.scrollY;
    if (scroll_y > 10) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImgChange = (id, direction) => {
    if (direction === 1) {
      if (id === "step-1") {
        stepImgRef.current.src = airdropMobileStep1;
      } else if (id === "step-2") {
        stepImgRef.current.src = airdropMobileStep2;
      } else if (id === "step-3") {
        stepImgRef.current.src = airdropMobileStep3;
      } else if (id === "step-4") {
        stepImgRef.current.src = airdropMobileStep4;
      }
    } else if (direction === 2) {
      stepImgRef.current.src = airdropMobile;
    }
  };

  useEffect(() => {
    const stepCards = document.querySelectorAll('[id^="step-"]');
    stepCards.forEach((card) => {
      card.addEventListener("mouseenter", () => handleImgChange(card.id, 1));
      card.addEventListener("mouseleave", () => handleImgChange(card.id, 2));
    });
  }, []);

  useEffect(() => {
    if (authToken && !airdropUser) {
      console.log("fetching...");
      fetchAirdropUser();
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Airdrop - VYUG Metaverse</title>
        <meta name="description" content="Airdrop" />
        <meta name="keywords" content="Airdrop" />
        <meta property="og:title" content="Airdrop" />
        <meta property="og:description" content="Airdrop" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/vyug-airdrop" />
      </Helmet>
      <AirdropHeader isTransparent={position} isHeaderText={true} />
      {/* <Box
        className="relative mt-28"
        sx={{
          marginInline: "auto",
          "& > div": {
            margin: "0 auto !important",
          },
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
            boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.25) !important",
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
      </Box> */}
      <Box
        className="my-20 md:my-28 w-full max-w-6xl mx-auto"
        sx={{
          "& .slick-track": {
            display: "flex !important",
            justifyContent: "space-between",
            gap: {
              md: "2rem",
              xs: "1rem",
            },
          },
          "& .slick-list": {
            overflow: "visible !important",
          },
          "& button": {
            zIndex: 100,
          },
          "& button::before, & button::after": {
            opacity: 1,
            color: "black",
          },
        }}
      >
        <Slider {...settings}>
          {sliderImages.map((image) => (
            <a
              href="https://play.google.com/store/apps/details?id=com.vyugwallet.android"
              target="_blank"
            >
              <img src={image} alt="fdfa" className="w-full shadow-2xl" />
            </a>
          ))}
        </Slider>
      </Box>

      <section className="my-20 md:my-28">
        <div className="flex flex-col justify-center items-center gap-1">
          <h5 className="description text-[15px] md:text-[30px] text-center">
            Join
          </h5>
          <h2 className="header text-[25px] md:text-[45px] text-center">
            VYUG Biggest Airdrop{" "}
          </h2>
          <h3 className="description text-[15px] md:text-[30px] text-center">
            Steal your Luck Spot{" "}
            <span className="header text-[15px] md:text-[30px]">Win BIG!</span>
          </h3>
        </div>
        <div className="flex justify-start md:justify-center items-end gap-10 md:gap-0 ms-8 md:ms-0 mt-10">
          <img src={graphGIF} alt="" />
          {/* <div className="flex flex-col justify-center items-center gap-4 md:gap-8 transition-opacity duration-300 cursor-pointer transform transition-transform duration-200 hover:scale-110 ease-in-out w-[30%] md:w-[15%]">
            <p className="description text-[15px] md:text-[20px] ps-20 md:ps-28">
              Total Supply
              <br />
              3,500,000,000
            </p>
            <img src={infoImg1} alt="Total Supply" className="w-full" />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:gap-8 transition-opacity duration-300 cursor-pointer transform transition-transform duration-200 hover:scale-110 ease-in-out w-[30%] md:w-[15%]">
            <p className="description text-[15px] md:text-[20px] text-center ps-16 md:ps-36">
              Airdrop Supply
              <br />
              175,000,000
            </p>
            <img src={infoImg2} alt="Total Supply" className="w-full" />
          </div> */}
        </div>
      </section>

      <section className="my-20 md:my-28">
        <img
          src={whyJoinAirdrop}
          alt="Why Join Airdrop"
          className="max-w-6xl mx-auto w-full"
        />
      </section>

      <section
        ref={elementRef}
        className="my-20 md:my-28 flex flex-col justify-center items-stretch gap-8 md:gap-16"
      >
        <h4 className="description text-[15px] md:text-[30px] text-center">
          Steps To Participate in Giveaway
        </h4>
        {/* <div className="relative">
          <img
            src={airdropMobile}
            alt=""
            className="max-w-lg mx-auto w-[50%]"
            ref={stepImgRef}
          />

          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-full max-w-5xl mx-auto px-8 sm:px-16 md:px-0">
            <div className="flex flex-col">
              <div
                id="step-1"
                className={`${isInView && "wiggle-animated-cards"} flex flex-col justify-center items-center gap-0 bg-[#D7D7D7] py-3 px-8 sm:py-4 sm:px-14 md:py-6 md:px-10 rounded-xl w-[50px] sm:w-[100px] md:w-[218px] drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]`}
              >
                <p className="description text-[8px] sm:text-[16px] md:text-[24px]">
                  STEP
                </p>
                <p className="header text-[20px] sm:text-[46px] md:text-[100px]">
                  01
                </p>
              </div>

              <div
                id="step-2"
                className={`${isInView && "wiggle-animated-cards"} flex flex-col justify-center items-center gap-0 bg-[#D7D7D7] py-3 px-8 sm:py-4 sm:px-14 md:py-6 md:px-10 rounded-xl w-[50px] sm:w-[100px] md:w-[218px] drop-shadow-[4px_-4px_4px_rgba(0, 0, 0, 0.25)]`}
              >
                <p className="description text-[8px] sm:text-[16px] md:text-[24px]">
                  STEP
                </p>
                <p className="header text-[20px] sm:text-[46px] md:text-[100px]">
                  02
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div
                id="step-3"
                className={`${isInView && "wiggle-animated-cards"} flex flex-col justify-center items-center gap-0 bg-[#D7D7D7] py-3 px-8 sm:py-4 sm:px-14 md:py-6 md:px-10 rounded-xl w-[50px] sm:w-[100px] md:w-[218px] drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]`}
              >
                <p className="description text-[8px] sm:text-[16px] md:text-[24px]">
                  STEP
                </p>
                <p className="header text-[20px] sm:text-[46px] md:text-[100px]">
                  03
                </p>
              </div>

              <div
                id="step-4"
                className={`${isInView && "wiggle-animated-cards"} flex flex-col justify-center items-center gap-0 bg-[#D7D7D7] py-3 px-8 sm:py-4 sm:px-14 md:py-6 md:px-10 rounded-xl w-[50px] sm:w-[100px] md:w-[218px] drop-shadow-[4px_-4px_4px_rgba(0, 0, 0, 0.25)]`}
              >
                <p className="description text-[8px] sm:text-[16px] md:text-[24px]">
                  STEP
                </p>
                <p className="header text-[20px] sm:text-[46px] md:text-[100px]">
                  04
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <video autoPlay playsInline controls loop className="w-full md:w-[80%] mx-auto">
          <source src={airdropVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a
          href="https://play.google.com/store/apps/details?id=com.vyugwallet.android"
          className="description text-white text-[15px] md:text-[30px] font-bold bg-[#242424] rounded-[5rem] px-8 md:px-12 py-3 w-max mx-auto"
          target="_blank"
        >
          Get VYUG Wallet
        </a>
      </section>

      <section className="my-20 md:my-28 mb-16">
        <h6 className="description text-[15px] md:text-[20px] text-center mb-4">
          Follow us
        </h6>
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-[10rem] md:max-w-[50rem] mx-auto">
          {Social_Icons.map((item, index) => {
            return (
              <Typography
                key={index}
                variant="h2"
                className="header text-center w-[4vh] h-[4vh] sm:w-[5vh] sm:h-[5vh]"
              >
                <Link
                  to={item.link}
                  onMouseEnter={() => setImg(index)}
                  onMouseLeave={() => setImg(-1)}
                  className="no-underline flex justify-center"
                >
                  {img === index ? (
                    <img
                      className="transition tarnsform-transition duration-150 ease-in-out hover:scale-125"
                      width={"100%"}
                      height={"100%"}
                      src={item.colorImg}
                      alt={item.name}
                    />
                  ) : (
                    <img
                      className="transition tarnsform-transition duration-200 ease-in-out hover:scale-110"
                      width={"100%"}
                      height={"100%"}
                      src={item.image}
                      alt={item.name}
                    />
                  )}
                </Link>
              </Typography>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Airdrop;
