
import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image1 from "../../images/airdrop_slider_1.webp";
import Image2 from "../../images/airdrop_slider_2.webp";
import Image3 from "../../images/airdrop_slider_3.webp";
import forwardIcon from "../../images/forwardIcon.svg";
import backIcon from "../../images/backIcon.svg";
import video1 from "../../videos/galaxy.mp4";
import video2 from "../../videos/landingPage2.mp4";
import Header from "../../components/Head";
import Footer from "../../components/Footer";
import Scroll from "./Scroll";

const fadeImages = [video1, Image2, video2];



const Content = () => {
  const [position, setPosition] = useState(false);

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

  const properties = {
    prevArrow: <img src={backIcon} alt="" />,
    nextArrow: <img src={forwardIcon} alt="" />,
  };

  return (
    <div className="min-h-screen">
      <Header isTransparent={position} isHeaderText={false} />
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-fade">
            <div className="image-container">
              <video
                autoPlay
                playsInline
                webkit-playsinline="true"
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
              >
                <source src={fadeImages[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} alt="bday" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <video
                autoPlay
                playsInline
                webkit-playsinline="true"
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
              >
                <source src={fadeImages[2]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
