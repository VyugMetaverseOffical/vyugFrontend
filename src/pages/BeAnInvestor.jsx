import { useEffect, useRef, useState } from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import {
  handleScrollAnimation,
  handleTypeAnimation,
  handleTextAnimation,
} from "../lib/animations";
import { Helmet } from "react-helmet-async";

function BeAnInvestor() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
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
    handleScrollAnimation("rw1", null, "rwt1");
    handleScrollAnimation("rw1", null, "rwt2");
    handleScrollAnimation("rw1", null, "rwt3");
    handleScrollAnimation("rw1", null, "rwt4");
    handleTypeAnimation("rw1", setAnimationTriggered);
    const handleScroll = () => {
      handleScrollAnimation("rw1", null, "rwt5");
      handleScrollAnimation("rw1", null, "rwt6");
      handleScrollAnimation("rw1", null, "rwt7");
      handleScrollAnimation("rw1", null, "rwt8");
      handleScrollAnimation("rw1", null, "rwt9");
      handleScrollAnimation("rw1", null, "rwt10");
      handleTypeAnimation("rw3", setAnimation2Triggered);
      industries.forEach((_, index) => {
        const id1 = `an${index}`;
        const id2 = `ant${index}`;
        handleTextAnimation(id1, id2);
      });
    };

    console.log("Loading metadata");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Be An Investor - VYUG Metaverse</title>
        <meta name="description" content="Be An Investor" />
        <meta name="keywords" content="Be An Investor" />
        <meta property="og:title" content="Be An Investor" />
        <meta property="og:description" content="Be An Investor" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/be-an-investor" />
      </Helmet>
      <Header isTransparent={position} isHeaderText={true} />
      {/* <div
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
          onClick={togglePause}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img
          src={videoRef.current && videoRef.current.paused ? play : pause}
          className="absolute bottom-10 left-10 w-14 h-16"
          onClick={togglePause}
          style={{ cursor: "pointer" }}
        />
      </div> */}
      <section
        className="flex flex-col justify-center items-center gap-11 max-w-4xl mx-auto py-20 md:py-24 px-4 lg:px-0 mt-20"
        id="rw1"
      >
        <h1 className="header text-[31.5px] md:text-[36px] font-bold uppercase text-center text-[#242424] mb-10">
          {animationTriggered && (
            <TypeAnimation
              sequence={["Be an investor", 2000]}
              wrapper="span"
              speed={30}
              repeat={0}
              cursor={false}
            />
          )}
        </h1>
        <div className="flex flex-col justify-start align-items-stretch gap-5">
          <h2
            id="rwt1"
            className="header text-lg sm:text-xl md:text-2xl font-bold uppercase text-start text-[#242424]"
          >
            Become an Investor in VYUG
          </h2>
          <p
            id="rwt2"
            className="description text-sm md:text-base text-[#6D6A6A] text-left text-start hidden-text"
          >
            VYUG is the forefront of the metaverse revolution, where innovation
            meets ethical practices in the rapidly evolving Web3 landscape. As
            we set out to redefine digital experiences through cutting-edge
            technology, we invite you to join us as an investor in this
            transformative journey.
          </p>
        </div>
        <div className="flex flex-col justify-start align-items-stretch gap-5">
          <h3
            id="rwt3"
            className="header text-lg sm:text-xl md:text-2xl font-bold uppercase text-start text-[#242424]"
          >
            Why Invest in VYUG
          </h3>
          <ol
            id="rwt4"
            className="description text-sm md:text-base text-[#6D6A6A] text-left text-start hidden-text flex flex-col justify-start items-stretch gap-4"
          >
            <li>
              <strong>Innovative Technology:</strong> VYUG stands at the
              intersection of artificial intelligence (AI), virtual reality
              (VR), and augmented reality (AR). Our platform leverages
              decentralized technology to create immersive experiences that
              engage users in ways never seen before. With advancements in VR
              headsets and other wearable technologies, the demand for immersive
              environments is skyrocketing, presenting a lucrative opportunity
              for investors.
            </li>
            <li>
              <strong>Ethical Commitment:</strong> Our commitment to ethical
              practices is at the core of VYUG's operations. We prioritize
              transparency and accountability in our governance and financial
              practices, ensuring that our community and investors are always
              informed and engaged. By fostering a culture of integrity, we
              build trust and long-lasting relationships with our stakeholders.
            </li>
            <li>
              <strong>Financial Growth and Revenue Potential:</strong> The
              metaverse industry is projected to experience exponential growth,
              with estimates suggesting it could reach trillions in value within
              the next decade. As VYUG expands its ecosystem, including land
              purchases, NFT marketplaces, and virtual commerce, we anticipate
              significant revenue streams. Our strategic tokenomics, featuring
              staking mechanisms and incentive structures, are designed to
              maximize returns for our investors.
            </li>
            <li>
              <strong>The Future of Web3:</strong> Investing in VYUG means being
              part of the future of Web3. As the digital landscape evolves,
              decentralized technologies will become increasingly important,
              offering users greater control and ownership of their digital
              assets. With the rise of blockchain technology and
              cryptocurrencies, VYUG is positioned to capitalize on this shift,
              ensuring our investors benefit from early involvement in a
              disruptive industry.
            </li>
            <li>
              <strong>The Demand for VR and AR Technologies:</strong> The
              growing adoption of VR headsets and AR applications is reshaping
              how we interact with digital content. As more consumers seek
              immersive experiences for entertainment, education, and social
              interaction, the demand for platforms like VYUG will continue to
              soar. This presents a prime investment opportunity, as the market
              for these technologies expands rapidly.
            </li>
            <li>
              <strong>Accountability and Correspondence:</strong> At VYUG, we
              prioritize clear communication with our investors. Our team is
              dedicated to maintaining open lines of correspondence, and
              providing regular updates on project developments and financial
              performance. We believe that accountability fosters trust and
              encourages a strong community of investors and users alike.
            </li>
          </ol>
          {/* <p
            id="rwt2"
            className="description text-sm md:text-base text-[#6D6A6A] text-left text-start hidden-text"
          >
            VYUG is the forefront of the metaverse revolution, where innovation
            meets ethical practices in the rapidly evolving Web3 landscape. As
            we set out to redefine digital experiences through cutting-edge
            technology, we invite you to join us as an investor in this
            transformative journey.
          </p> */}
        </div>
        <div className="flex flex-col justify-start align-items-stretch gap-5">
          <h3
            id="rwt5"
            className="header text-lg sm:text-xl md:text-2xl font-bold uppercase text-start text-[#242424]"
          >
            The Metaverse and Its Growth
          </h3>
          <p
            id="rwt6"
            className="description text-sm md:text-base text-[#6D6A6A] text-left text-start hidden-text"
          >
            The metaverse is more than just a trend; it represents a paradigm
            shift in how we engage with the digital world. As industries adopt
            virtual environments for work, play, and commerce, the growth
            potential is immense. VYUG is strategically positioned to lead this
            charge, offering an integrated ecosystem that combines gaming,
            social interaction, and economic activity.
          </p>
          <p
            id="rwt7"
            className="description text-sm md:text-base text-[#6D6A6A] text-left text-start hidden-text"
          >
            The integration of AI into the metaverse enhances user experiences,
            providing personalized interactions and dynamic environments. As we
            develop our platform, we leverage these technologies to create
            engaging and intuitive experiences that attract and retain users.
          </p>
        </div>
        <div className="flex flex-col justify-start align-items-stretch gap-5">
          <h3
            id="rwt8"
            className="header text-lg sm:text-xl md:text-2xl font-bold uppercase text-start text-[#242424]"
          >
            Why Invest in Web3 Now
          </h3>
          <p
            id="rwt9"
            className="description text-sm md:text-base text-[#6D6A6A] text-left text-start hidden-text"
          >
            The Web3 industry is at a pivotal moment, with increasing
            recognition of its potential to revolutionize online interactions
            and digital ownership. By investing in VYUG, you align yourself with
            a forward-thinking project that embodies the principles of
            decentralization, innovation, and ethical practices.
          </p>
        </div>
        <div className="flex flex-col justify-start align-items-stretch gap-5">
          <p
            id="rwt10"
            className="description text-sm md:text-base text-[#6D6A6A] text-left text-start hidden-text"
          >
            <strong>Join us at VYUG</strong> and be part of a groundbreaking
            initiative that shapes the future of the metaverse. With your
            investment, you will contribute to a vision where technology
            empowers individuals, fosters creativity, and drives economic
            growth. Together, we can unlock the vast potential of the metaverse
            and create a thriving ecosystem that benefits all participants.
          </p>
        </div>
      </section>
      {/* <section className="flex flex-col justify-center items-center gap-8 md:gap-10">
        <h2
          className="header text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center text-[#242424]"
          id="rw3"
        >
          {animation2Triggered && (
            <TypeAnimation
              sequence={["INDUSTRIES TO INVEST", 2000]}
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
              className="bg-[#111113] w-full relative py-10 md:py-16"
              key={index}
              id={`an${index}`}
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
            >
              <span
                aria-hidden="true"
                className="header uppercase font-bold text-center text-[#1F1F21] text-4xl sm:text-[4.25rem] md:text-[5.rem] xl:text-[7.5rem] 2xl:text-9xl block"
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
      </section> */}
      {/* <GetInTouch BgColor={"white"} /> */}
      <Footer />
    </div>
  );
}

export default BeAnInvestor;
