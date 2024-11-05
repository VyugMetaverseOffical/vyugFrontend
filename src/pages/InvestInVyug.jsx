import { useEffect, useRef, useState } from "react";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Head";
import Footer from "../components/Footer";
import video from "../videos/investVyug.mp4";
import unmute from "../images/unmute.svg";
import mute from "../images/mute_hover.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import {
  handleScrollAnimation,
  handleTypeAnimation,
  handleTextAnimation,
} from "../lib/animations";
import { Helmet } from "react-helmet-async";

function InvestInVyug() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // const togglePause = () => {
  //   const video = videoRef.current;
  //   if (video.paused) {
  //     video.play();
  //     setIsPaused(false);
  //   } else {
  //     video.pause();
  //     setIsPaused(true);
  //   }
  // };

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

  const industries = [
    { title: "Education", hoverBgColor: "#C8E3FF" },
    { title: "Entertainment", hoverBgColor: "#FFD6B4" },
    { title: "Corporate", hoverBgColor: "#EBEBCE" },
    { title: "Commerce", hoverBgColor: "#D9FFD9" },
    { title: "Sports & Games", hoverBgColor: "#F9B99D" },
    { title: "Events", hoverBgColor: "#E7D6E7" },
    { title: "Tourism", hoverBgColor: "#C4FFC1" },
    { title: "Hospitality", hoverBgColor: "#CDBCFF" },
    { title: "Sustainability", hoverBgColor: "#D9FCF2" },
  ];

  const [position, setPosition] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);

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
      handleScrollAnimation("rw1", null, "rwt2");
      handleScrollAnimation("rw1", null, "rwt3");
      handleScrollAnimation("rw1", null, "rwt4");
      handleScrollAnimation("rw1", null, "rwt5");
      handleScrollAnimation("rw1", null, "rwt6");
      handleTypeAnimation("rw1", setAnimationTriggered);
      handleTypeAnimation("rw3", setAnimation2Triggered);
      industries.forEach((_, index) => {
        const id1 = `an${index}`;
        const id2 = `ant${index}`;
        handleTextAnimation(id1, id2);
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Invest In Vyug - VYUG Metaverse</title>
        <meta name="description" content="Invest In Vyug" />
        <meta name="keywords" content="Invest In Vyug" />
        <meta property="og:title" content="Invest In Vyug" />
        <meta property="og:description" content="Invest In Vyug" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/invest-in-vyug"
        />
      </Helmet>
      <Header isTransparent={position} isHeaderText={false} />
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
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          src={isMuted ? mute : unmute}
          className="absolute bottom-10 left-10 w-14"
          onClick={toggleAudio}
          style={{ cursor: "pointer" }}
        />
      </div>
      <section
        className="flex flex-col justify-center items-center gap-10 max-w-4xl mx-auto py-20 md:py-24 px-4 lg:px-0"
        id="rw1"
      >
        <h1 className="header text-[31.5px] md:text-[36px] font-bold uppercase text-center text-[#242424]">
          {animationTriggered && (
            <TypeAnimation
              sequence={["INVEST IN VYUG", 2000]}
              wrapper="span"
              speed={30}
              repeat={0}
              cursor={false}
            />
          )}
        </h1>
        <p
          className="description text-[14px] md:text-base text-[#6D6A6A] text-center hidden-text"
          id="rwt1"
        >
          At VYUG, we are paving the way for a transformative digital era
          transcending traditional boundaries. Our ambitious project encompasses
          a diverse array of sectors, including gaming, education,
          entertainment, technology, hospitality, corporate services, sports,
          commercials, events, and more, creating an integrated ecosystem that
          appeals to a wide audience. By investing in VYUG, you are not just
          supporting a platform; you are joining a movement that aims to
          redefine how we interact with technology and each other.
        </p>
        <p
          className="description text-[14px] md:text-base text-[#6D6A6A] text-center hidden-text"
          id="rwt2"
        >
          Our innovative approach leverages cutting-edge technology to develop a
          hyper-realistic metaverse that immerses users in a seamless digital
          experience. Utilizing advanced graphics and simulation techniques, we
          create lifelike environments where users can engage and interact
          meaningfully. In education, we are creating virtual classrooms where
          students can participate in immersive content and collaborate
          globally, breaking geographical barriers and enhancing the learning
          experience.
        </p>
        <p
          className="description text-[14px] md:text-base text-[#6D6A6A] text-center hidden-text"
          id="rwt3"
        >
          The entertainment sector will flourish with virtual events, concerts,
          and experiences that bring audiences together like never before. Users
          will be able to attend live performances, film screenings, and sports
          events from the comfort of their homes, experiencing the excitement as
          if they were physically present. Our hospitality offerings will
          transform how businesses engage with customers, providing
          personalized, immersive experiences that enhance brand loyalty and
          drive customer satisfaction.
        </p>
        <p
          className="description text-[14px] md:text-base text-[#6D6A6A] text-center hidden-text"
          id="rwt4"
        >
          Incorporating advanced technologies such as artificial intelligence,
          augmented reality, and blockchain, we ensure that every interaction
          within the VYUG metaverse is secure, engaging, and meaningful. Our
          platform will also support corporate environments, enabling businesses
          to host meetings and events in virtual spaces that foster
          collaboration and innovation. Sports and commercial industries can
          leverage our metaverse for interactive fan experiences, sponsorships,
          and merchandise sales, opening new revenue streams.
        </p>
        <p
          className="description text-[14px] md:text-base text-[#6D6A6A] text-center hidden-text"
          id="rwt5"
        >
          Moreover, VYUG's commitment to sustainability is reflected in our
          development practices, utilizing energy-efficient technologies and
          promoting eco-friendly solutions across all sectors. This
          forward-thinking approach not only enhances user experience but also
          positions VYUG as a responsible leader in the digital space.
        </p>
        <p
          className="description text-[14px] md:text-base text-[#6D6A6A] text-center hidden-text"
          id="rwt6"
        >
          As an investor, you will benefit from our unique tokenomics, designed
          to drive demand and enhance the value of your investment. With our
          planned governance token, you will have a voice in the future of VYUG,
          participating in key decisions that shape our development. By
          investing in VYUG, you are contributing to a project that is poised to
          revolutionize multiple industries, fostering innovation and
          connectivity in ways never seen before. Don’t miss the chance to be
          part of this groundbreaking venture that is redefining the future.
          Join us on this exciting journey and secure your stake in the future
          with VYUG!
        </p>
        {/* <button className="header bg-[#fff] hover:bg-[#242424] text-[#242424] border-[1px] border-solid border-[#242424] hover:text-white text-base md:text-lg font-bold uppercase py-2 px-9 rounded-[5rem] block mx-auto my-1 md:my-5">
          invest now
        </button> */}
      </section>

      <section
        className="flex flex-col justify-center items-center gap-8 md:gap-10 mb-10"
        id="rw3"
      >
        <h2 className="header text-[31.5px] md:text-[36px] font-bold uppercase text-center text-[#242424]">
          {animation2Triggered && (
            <TypeAnimation
              sequence={["Industries to empower", 2000]}
              wrapper="span"
              speed={30}
              repeat={0}
              cursor={false}
            />
          )}
        </h2>
        <div className="w-full mx-auto">
          {industries.map((item, index) => (
            <div
              style={{
                transition: "background-color 0.25s ease-in-out",
              }}
              className={`bg-[#111113] w-full relative py-10 md:py-16`}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = item.hoverBgColor;
                e.currentTarget.querySelector("span").style.color =
                  "rgba(36, 36, 36, 0.04)";
                e.currentTarget.querySelector("h6").style.color = "#242424";
                e.currentTarget.querySelector("h5").style.color = "#242424";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#111113";
                e.currentTarget.querySelector("span").style.color = "#1F1F21";
                e.currentTarget.querySelector("h6").style.color = "#ffffff";
                e.currentTarget.querySelector("h5").style.color = "#ffffff";
              }}
              key={index}
              id={`an${index}`}
            >
              <span
                aria-hidden="true"
                className="header uppercase font-black text-center text-[#1F1F21] text-4xl sm:text-[4.35rem] md:text-[5.25rem] xl:text-[8rem] 2xl:text-9xl block"
                style={{
                  transition: "color 0.25s ease-in-out",
                }}
              >
                {item.title}
              </span>
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <h6
                  className="header uppercase font-normal text-center text-white text-xl md:text-3xl"
                  style={{
                    transition: "color 0.25s ease-in-out",
                  }}
                >
                  VIRTUAL
                </h6>
                <h5
                  className="header uppercase font-bold text-center text-white text-3xl md:text-5xl hidden-text"
                  id={`ant${index}`}
                  style={{
                    transition: "color 0.25s ease-in-out",
                  }}
                >
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </section>
      <GetInTouch
        BgColor={"white"}
        heading={"Explore Investment Opportunities with VYUG: Inquire Now"}
      />
      <Footer />
    </div>
  );
}

export default InvestInVyug;
