import React, { useEffect, useState } from "react";
import error from "../images/error.svg";
import Header from "./Head";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const [position, setPosition] = useState(false);

  const navigate = useNavigate();

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
    const numberOfStars = 50;
    const container = document.querySelector(".stars-container");

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.className = "star";

      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;

      const size = Math.random() * 2 + 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      const blinkDuration = Math.random() * 5 + 1;
      star.style.animationDuration = `${blinkDuration}s`;

      container.appendChild(star);
    }
  }, []);

  return (
    <>
      {/* <Header isTransparent={position} isHeaderText={false} /> */}
      <div className="stars-container bg-[#242424] flex justify-center flex-col items-center h-screen">
        <div style={{ zIndex: 10 }} className="ml-12 lg:ml-32">
          <img
            className="w-[95%] lg:w-full"
            src={error}
            alt="404 ERROR page not found !"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col items-center mt-5 gap-2 md:gap-4 w-full">
          <h3 className="text-[#fff] header text-4xl md:text-[50px]">OOPS!</h3>
          <p className="text-[#fff] text-xl md:text-2xl uppercase description">
            Page not found
          </p>
          <div className="flex justify-center gap-5">
            <button
              onClick={() => navigate("/")}
              className="black-btn py-2 px-8 w-fit rounded-xl sm:px-8 lg:px-10 description text-base uppercase"
            >
              GO HOME
            </button>
            <button
              onClick={() => navigate(-1)}
              className="black-btn py-2 px-8 w-fit rounded-xl lg:px-10 description text-base uppercase"
            >
              GO BACK
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Error;
