import UbaidKiPhoto from "../images/ubaid_color.webp";
import RichaKiPhoto from "../images/richa_color.webp";
import member1 from "../images/team/1.webp";
import member2 from "../images/team/2.webp";
import member3 from "../images/team/3.webp";
import member4 from "../images/team/4.webp";
import member5 from "../images/team/5.webp";
import member6 from "../images/team/6.webp";
import member7 from "../images/team/7.webp";
import member8 from "../images/team/8.webp";
import member9 from "../images/team/9.webp";
import member10 from "../images/team/10.webp";
import member11 from "../images/team/11.webp";
import member12 from "../images/team/12.webp";
import member13 from "../images/team/13.webp";
import member14 from "../images/team/14.webp";
import member15 from "../images/team/15.webp";
import member16 from "../images/team/16.webp";
import member17 from "../images/team/17.webp";
import member18 from "../images/team/18.webp";
import member19 from "../images/team/19.webp";
import member20 from "../images/team/20.webp";
import member21 from "../images/team/21.webp";
import member22 from "../images/team/22.webp";
import member23 from "../images/team/23.webp";
import member24 from "../images/team/24.webp";
import member25 from "../images/team/25.webp";
import Header from "../components/Head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { handleScrollAnimation, handleTypeAnimation } from "../lib/animations";
import { Helmet } from "react-helmet-async";

function Innovators() {
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
    handleScrollAnimation("b4", null, "text3");
    const handleScroll = () => {
      handleScrollAnimation("b2", null, "text2");
      handleScrollAnimation("b2", null, "text5");
      handleScrollAnimation("b1", null, "text1");
      handleScrollAnimation("b1", null, "text6");
      handleScrollAnimation("b3", null, "text7");
      handleScrollAnimation("b3", null, "text8");
      handleScrollAnimation("b3", null, "text9");
      handleTypeAnimation("b1", setAnimationTriggered);
      handleTypeAnimation("b3", setAnimation2Triggered);

      handleScrollAnimation("b3", null, "text3");
    };

    console.log("Loading metadata");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Innovators - VYUG Metaverse</title>
        <meta name="description" content="Innovators" />
        <meta name="keywords" content="Innovators" />
        <meta property="og:title" content="Innovators" />
        <meta property="og:description" content="Innovators" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/innovators" />
      </Helmet>
      <Header isTransparent={position} isHeaderText={true} />
      <div className="flex flex-col pt-28 md:pt-10 justify-center items-center overflow-x-hidden">
        <section
          id="b4"
          className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 mt-16 sm:mt-24 md:mt-36 mb-12 sm:mb-16 md:mb-24 px-2"
        >
          <h1 className="header text-2xl sm:text-3xl md:text-[28.8px] text-[#242424] text-center">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Innovators Behind VYUG",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={40}
              repeat={0}
              cursor={false}
            />
          </h1>
          <p
            className="description text-[#6D6A6A] text-[0.8rem] text-center max-w-4xl mx-auto"
            id="text3"
          >
            At <span className="font-semibold">VYUG</span>, we believe that
            building a successful business lies in the synergy of innovation and
            empathy—where understanding the needs of our community drives us to
            create transformative solutions that elevate lives and foster
            genuine connections."
          </p>
        </section>
        <section
          className="flex flex-col md:flex-row justify-center item-center md:items-start gap-8 lg:gap-20 mt-8 md:mt-16 mb-28 md:mb-0 px-3 sm:px-6 md:px-8 lg:px-10"
          id="b2"
        >
          <div className="relative w-full lg:w-[35%] xl:w-[35%]">
            <img
              src={UbaidKiPhoto}
              alt="Ubaid Chand, Founder & CEO"
              className="w-2/3 md:w-full mx-auto max-w-md grayscale-[100%] hover:grayscale-0"
              style={{
                transition: "grayscale 0.5s ease-in-out",
              }}
            />

            <ScrollAnimation
              animateIn="fadeIn"
              duration={0.7}
              delay={0}
              offset={50}
            >
              <div className="absolute bottom-[60%] lg:bottom-[10%] right-[3%] md:right-[-30%] lg:right-[-10%] bg-[#D7D7D750] rounded-lg md:rounded-[5rem] px-5 md:px-7 lg:px-9 py-1.5 lg:py-2">
                <p className="text-[#111113] font-semibold text-xs sm:text-base md:text-lg lg:text-xl">
                  Trailblazer
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              duration={0.7}
              delay={0}
              offset={50}
            >
              <div className="absolute top-[15%] md:top-[20%] lg:top-[25%] right-[10%] md:right-[-9%] lg:right-[0%] bg-[#D7D7D750] rounded-lg md:rounded-[5rem] px-5 md:px-7 lg:px-9 py-1.5 lg:py-2">
                <p className="text-[#111113] font-semibold text-xs sm:text-base md:text-lg lg:text-xl">
                  Visionary
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              duration={0.7}
              delay={0}
              offset={50}
            >
              <div className="absolute bottom-[-5%] lg:bottom-[40%] left-[0] lg:left-[-15%] bg-[#D7D7D750] rounded-lg md:rounded-[5rem] px-5 md:px-7 lg:px-9 py-1.5 lg:py-2">
                <p className="text-[#111113] font-semibold text-xs sm:text-base md:text-lg lg:text-xl">
                  Innovator
                </p>
              </div>
            </ScrollAnimation>
          </div>
          <div className="w-full lg:w-[40%] xl:w-[30%] mt-0 md:mt-24">
            <h3 className="header text-2xl sm:text-3xl lg:text-[41.6px] font-extrabold uppercase text-center md:text-start">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Ubaid Chand",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={40}
                repeat={0}
                cursor={false}
              />
            </h3>
            <h6 className="header text-[#303030] font-normal text-sm sm:text-base uppercase text-center md:text-start decoration-[#303030] my-1">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  " Founder & CEO",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={40}
                repeat={0}
                cursor={false}
              />
            </h6>

            <p
              className="description text-[0.8rem] text-[#606060] text-left text-center md:text-start mt-5 pe-0 md:pe-4 hidden-text"
              id="text2"
            >
              As the visionary founder of VYUG, Ubaid Chand brings a wealth of
              experience from the Web3 industry. His deep understanding of
              decentralized technologies and his passion for innovation have
              been the driving forces behind VYUG. Ubaid’s vision is rooted in
              creating a metaverse that not only mirrors the intricacies of the
              physical world but also transcends its limitations
            </p>
            <p
              className="description text-[0.8rem] text-[#606060] text-left text-center md:text-start mt-5 pe-0 md:pe-4 hidden-text"
              id="text5"
            >
              For Ubaid, VYUG represents the pinnacle of technological
              evolution—a space where the fusion of digital and real-world
              experiences leads to groundbreaking solutions for contemporary
              challenges. He believes that VYUG has the potential to redefine
              how we interact with technology and with each other, setting a new
              standard for immersive digital experiences. By leveraging the
              strengths of Web3 technology, Ubaid aims to build a platform that
              not only addresses the needs of today's global community but also
              paves the way for future advancements
            </p>
          </div>
        </section>
        <section
          className="flex flex-col md:flex-row justify-center item-center md:items-start gap-8 md:gap-10 bg-[#D7D7D7] px-3 sm:px-6 md:px-8 lg:px-10 pt-20 md:pt-16"
          id="b1"
        >
          <div className="w-full lg:w-[40%] xl:w-[30%] mt-0 md:mt-24">
            <h3 className="header text-2xl sm:text-3xl lg:text-[41.6px] font-extrabold uppercase text-center md:text-start">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["Richa Thakur", 2000]}
                  wrapper="span"
                  speed={40}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h3>
            <h6 className="header text-[#303030] font-normal text-sm sm:text-base uppercase text-center md:text-start decoration-[#303030] my-1">
              {animationTriggered && (
                <TypeAnimation
                  sequence={["Chief Project Head", 2000]}
                  wrapper="span"
                  speed={40}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h6>

            <p
              className="description text-[0.8rem] text-[#606060] text-left text-center md:text-start mt-6 pe-0 md:pe-4 hidden-text"
              id="text1"
            >
              Richa Thakur, the Chief Project Head of VYUG, brings a unique
              perspective to the project with her background in journalism and
              her keen focus on problem-solving. Her approach to VYUG is
              grounded in her belief that technology should serve as a tool to
              tackle real-world issues and drive meaningful change
            </p>
            <p
              className="description text-[0.8rem] text-[#606060] text-left text-center md:text-start mt-6 pe-0 md:pe-4 hidden-text"
              id="text6"
            >
              Richa’s vision for VYUG is centered on creating a platform that
              bridges gaps and fosters collaboration across diverse industries.
              She sees VYUG as more than just a digital space; it is a
              solution-driven ecosystem designed to enhance lives and facilitate
              progress. Her commitment to leveraging her expertise in
              communication and strategic thinking ensures that VYUG is not only
              a technological marvel but also a practical solution to
              contemporary challenges. Richa’s leadership is focused on making
              VYUG a dynamic platform that addresses real needs while fostering
              an inclusive and innovative community
            </p>
          </div>
          <div className="relative w-full lg:w-[35%] xl:w-[35%]">
            <img
              src={RichaKiPhoto}
              alt="Richa Thakur, Chief Project Head"
              className="w-2/3 md:w-full mx-auto max-w-md grayscale-[100%] hover:grayscale-0"
              style={{
                transition: "grayscale 0.5s ease-in-out",
              }}
            />
            <ScrollAnimation
              animateIn="fadeIn"
              duration={0.7}
              offset={50}
              delay={0}
            >
              <div className="absolute bottom-[50%] md:bottom-[80%] xl:bottom-[20%] right-[4%] md:right-[-5%] xl:right-[-10%] bg-[#6D6A6A50] rounded-lg md:rounded-[5rem] px-5 md:px-6 lg:px-9 py-1.5 lg:py-2">
                <p className="text-[#ffffff] font-semibold text-xs sm:text-base lg:text-lg xl:text-xl">
                  Pioneer
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              duration={0.7}
              offset={50}
              delay={0}
            >
              <div
                className="absolute top-[18%] xl:top-[20%] right-[6%] md:right-[-7%] xl:right-[-7%] bg-[#6D6A6A50] rounded-lg md:rounded-[5rem] px-5 md:px-6 lg:px-9 py-1.5 lg:py-2"
                id="2"
              >
                <p className="text-[#ffffff] font-semibold text-xs sm:text-base lg:text-lg xl:text-xl">
                  Visionary
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              duration={0.7}
              offset={50}
              delay={0}
            >
              <div
                className="absolute top-[40%] xl:top-[40%] left-[5%] md:left-[-4%] xl:left-[0%] bg-[#6D6A6A50] rounded-lg md:rounded-[5rem] px-5 md:px-6 lg:px-9 py-1.5 lg:py-2"
                id="3"
              >
                <p className="text-[#ffffff] font-semibold text-xs sm:text-base lg:text-lg xl:text-xl">
                  Strategist
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>
        <section
          className="flex flex-col justify-center item-center gap-4 md:gap-6 md:gap-0 my-20 sm:my-24 md:my-28"
          id="b3"
        >
          <div className="w-full max-w-4xl mx-auto px-3">
            {/* Content */}
            <h3 className="header text-2xl sm:text-3xl lg:text-[28.8px] font-extrabold uppercase text-center max-w-3xl mx-auto">
              {animation2Triggered && (
                <TypeAnimation
                  sequence={["Groundbreaking Team Behind VYUG", 3000]}
                  wrapper="span"
                  speed={20}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h3>
            <h6 className="header text-[#303030] font-normal text-sm sm:text-base lg:text-lg  uppercase text-center decoration-[#303030] underline-offset-[11px] my-1">
              {animation2Triggered && (
                <TypeAnimation
                  sequence={["Members", 2000]}
                  wrapper="span"
                  speed={20}
                  repeat={0}
                  cursor={false}
                />
              )}
            </h6>
            <p
              className="description text-[0.8rem] text-[#606060] text-left text-center mt-8 pe-0 md:pe-4 hidden-text"
              id="text7"
            >
              At <span className="font-semibold">VYUG</span>, our team embodies
              the spirit of innovation, collaboration, and inclusivity, united
              by a shared vision to create a hyper-realistic metaverse where
              everyone belongs. Our diverse group of thinkers, creators, and
              problem-solvers brings a wealth of expertise from various fields,
              driving us to challenge conventions and redefine the future of
              digital interaction
            </p>
            <p
              className="description text-[0.8rem] text-[#606060] text-left text-center mt-6 pe-0 md:pe-4 hidden-text"
              id="text8"
            >
              What sets us apart is our unwavering commitment to crafting a
              platform that transcends traditional boundaries. We believe that
              VYUG is not just a space for exploration; it is a movement toward
              a more connected, compassionate world. Here, individuals from all
              walks of life come together, each contributing their unique
              perspectives and talents to build a thriving community
            </p>
            <p
              className="description text-[0.8rem] text-[#606060] text-left text-center mt-6 pe-0 md:pe-4 hidden-text"
              id="text9"
            >
              With our tagline,{" "}
              <span className="font-semibold">“Where You Belong,”</span> we
              emphasize that VYUG is a place for everyone—a sanctuary where
              barriers of race, caste, and age dissolve, allowing true
              connections to flourish. Our groundbreaking team is dedicated to
              ensuring that every voice is heard and valued, creating an
              environment where individuals can thrive both personally and
              professionally. Together, we are pioneering a new era of digital
              existence, inviting you to join us on this extraordinary journey
              where everyone can find their rightful place in the VYUG community
            </p>
          </div>
          <div className="w-screen relative mb-10 md:mb-20 min-h-[110vh]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[11rem] z-[25] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member1}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[6%] left-[52%] max-w-[9.5rem] z-[24] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member2}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[6%] left-[38%] max-w-[10.4rem] z-[23] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member3}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[8.5%] left-[32%] max-w-[10.45rem] z-[22] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member4}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[8.5%] left-[56%] max-w-[11.45rem] z-[21] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member5}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[13.5%] left-[25.5%] max-w-[10.75rem] z-[20] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member6}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[15.5%] left-[63%] max-w-[10.35rem] z-[19] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member7}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[20%] left-[18.75%] max-w-[10.65rem] z-[18] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member8}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[21.75%] left-[69.25%] max-w-[10.35rem] z-[17] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member9}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[25%] left-[75%] max-w-[8.75rem] z-[16] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member10}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[26%] left-[14.5%] max-w-[8.35rem] z-[15] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member11}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[26%] left-[30.75%] max-w-[8rem] z-[14] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member12}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[23%] left-[54.75%] max-w-[8.35rem] z-[13] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member13}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[20.5%] left-[49.5%] max-w-[8.95rem] z-[12] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member14}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[16%] left-[43.25%] max-w-[8.95rem] z-[11] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member15}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[24.5%] left-[45.5%] max-w-[9rem] z-[10] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member16}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[22.5%] left-[60%] max-w-[8.5rem] z-[9] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member17}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[28%] left-[65.5%] max-w-[9rem] z-[8] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member18}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[29%] left-[71%] max-w-[8.5rem] z-[7] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member19}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[18.5%] left-[36%] max-w-[8.95rem] z-[6] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member20}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[25.5%] left-[23.5%] max-w-[8.5rem] z-[5] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member21}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[29.5%] left-[18.5%] max-w-[8.75rem] z-[4] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member22}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[30%] left-[52%] max-w-[8.15rem] z-[3] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member23}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[27.5%] left-[40%] max-w-[8.75rem] z-[2] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member24}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            <div className="absolute bottom-[27.5%] left-[33.5%] max-w-[8rem] z-[1] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform">
              {/* <p
                className="description text-white text-center px-6 py-2 rounded-[5rem] bg-[#24242499] mb-4 hidden w-max mx-auto"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                Admin HR
              </p> */}
              <img
                src={member25}
                className="w-full"
                onMouseEnter={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                  e.target.previousElementSibling.style.opacity = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                  e.target.previousElementSibling.style.opacity = "0%";
                }}
              />
            </div>
            {/* <img src={member3} className="absolute bottom-[6%] left-[38%] max-w-[10.4rem] z-[23] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member4} className="absolute bottom-[8.5%] left-[32%] max-w-[10.45rem] z-[22] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member5} className="absolute bottom-[8.5%] left-[56%] max-w-[11.45rem] z-[21] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member6} className="absolute bottom-[13.5%] left-[25.5%] max-w-[10.75rem] z-[20] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member7} className="absolute bottom-[15.5%] left-[63%] max-w-[10.35rem] z-[19] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member8} className="absolute bottom-[20%] left-[18.75%] max-w-[10.65rem] z-[18] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member9} className="absolute bottom-[21.75%] left-[69.25%] max-w-[10.35rem] z-[17] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member10} className="absolute bottom-[25%] left-[75%] max-w-[8.75rem] z-[16] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member11} className="absolute bottom-[26%] left-[14.5%] max-w-[8.35rem] z-[15] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member12} className="absolute bottom-[26%] left-[30.75%] max-w-[8rem] z-[14] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member13} className="absolute bottom-[23%] left-[54.75%] max-w-[8.35rem] z-[13] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member14} className="absolute bottom-[20.5%] left-[49.5%] max-w-[8.95rem] z-[12] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member15} className="absolute bottom-[16%] left-[43.25%] max-w-[8.95rem] z-[11] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member16} className="absolute bottom-[24.5%] left-[45.5%] max-w-[9rem] z-[10] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member17} className="absolute bottom-[22.5%] left-[60%] max-w-[8.5rem] z-[9] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member18} className="absolute bottom-[28%] left-[65.5%] max-w-[9rem] z-[8] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member19} className="absolute bottom-[29%] left-[71%] max-w-[8.5rem] z-[7] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member20} className="absolute bottom-[18.5%] left-[36%] max-w-[8.95rem] z-[6] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member21} className="absolute bottom-[25.5%] left-[23.5%] max-w-[8.5rem] z-[5] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member22} className="absolute bottom-[29.5%] left-[18.5%] max-w-[8.75rem] z-[4] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member23} className="absolute bottom-[30%] left-[52%] max-w-[8.15rem] z-[3] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member24} className="absolute bottom-[27.5%] left-[40%] max-w-[8.75rem] z-[2] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" />
            <img src={member25} className="absolute bottom-[27.5%] left-[33.5%] max-w-[8rem] z-[1] grayscale-[100%] hover:z-[100] hover:scale-[1.1] hover:grayscale-0 transition-transform" /> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Innovators;
