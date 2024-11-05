import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Explore = ({ exploreFurther }) => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "center",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      className="my-6 md:my-12 w-[85%] md:w-[70%] mx-auto"
      sx={{
        "& .slick-track": {
          display: "flex !important",
          justifyContent: "space-between",
          gap: {
            xs: "1rem",
            md: "2rem",
          },
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
        {exploreFurther?.map((ef, index) => (
          <Box
            key={index}
            onClick={() => navigate(ef.url)}
            sx={{
              display: "flex !important",
              flexDirection: "column !important",
              justifyContent: "center !important",
              alignItems: "center !important",
              transition: "background-color 500 ease-in-out",
              width: {
                xs: "9rem !important",
                sm: "12rem !important",
              },
              "&:hover": {
                backgroundColor: ef.bge,
              },
              "&:hover h6": {
                color:
                  ef.text === "Sports & Games" || ef.text === "SPORTS & GAMES"
                    ? "#242424 !important"
                    : "#fff !important",
              },
              "& img": {
                opacity: 1,
                filter: "brightness(0) contrast(100%)",
              },
              "& img:hover": {
                filter: "brightness(1) contrast(1)",
              },
            }}
            className="border-[3px] flex flex-col justify-center group cursor-pointer items-center border-solid border-[#242424] rounded-[2rem] w-36 sm:w-48 md:w-48 h-36 sm:h-48 md:h-48 rounded-3xl p-2 sm:p-6"
          >
            <img
              src={ef.svg}
              alt={ef.text}
              aria-hidden="true"
              className="h-20 contrast-[100%] transition duration-500 group-hover:scale-110 brightness-0 group-hover:contrast-[1] group-hover:brightness-[1]"
            />
            <p
              style={{ opacity: 1 }}
              className="text-[#242424] text-center header duration-500 text-sm md:text-base uppercase"
            >
              {ef.text}
            </p>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Explore;
