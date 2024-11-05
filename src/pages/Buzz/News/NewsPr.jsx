import React, { useEffect, useState } from "react";
import Header from "../../../components/Head";
import { Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { Link, useNavigate, useParams } from "react-router-dom";
import news from "./PRNews";
import Footer from "../../../components/Footer";
import Starter from "../../../components/Starter";
import { RWebShare } from "react-web-share";
import { Helmet } from "react-helmet-async";

const NewsPr = () => {
  const [position, setPosition] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

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

  return (
    <>
      <Helmet>
        <title>News & PR - VYUG Metaverse</title>
        <meta name="description" content="News & PR" />
        <meta name="keywords" content="News & PR" />
        <meta property="og:title" content="News & PR" />
        <meta property="og:description" content="News & PR" />
        <link
          rel="canonical"
          href={`https://www.vyugmetaverse.com/buzz/pr-news/${id}`}
        />
      </Helmet>
      <Header isTransparent={position} isHeaderText={true} />
      <div className="min-h-screen">
        {news ? (
          news
            // .filter((i) => i?.id.toLocaleLowerCase() == id.replace(/-/g, " "))
            .filter((i) => i?.id == id)
            .map((item, index) => (
              <div
                key={index}
                className="w-[90%] sm:w-[80%] mx-auto flex flex-col gap-4 pt-36 pb-20"
              >
                <div className="w-full flex flex-col gap-5 sm:w-[95%] mx-auto">
                  <div className="w-20 sm:w-36">
                    <img
                      className="h-[100%] w-[100%]"
                      src={item?.icon}
                      alt={item?.iconImg}
                      aria-hidden="true"
                    />
                  </div>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-xs sm:text-sm"
                  >
                    {item?.date} | COMMUNITY
                  </Typography>
                </div>
                <div className="sm:w-[95%] mx-auto sm:h-[50vh] md:h-[65vh]">
                  <img
                    className="h-[100%] w-[100%] rounded-2xl"
                    src={item?.img}
                    alt={item?.id}
                    aria-hidden="true"
                  />
                </div>
                <Typography
                  variant="h1"
                  className="header text-xl text-left sm:text-2xl md:text-3xl pt-10 font-bold"
                >
                  {item?.heading}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description whitespace-pre-line text-[#6D6A6A] text-left text-sm md:text-base sm:pt-5"
                >
                  {item?.desc}
                </Typography>
                <p className="sm:pb-5 description text-sm md:text-base">
                  <Link
                    to={item?.url}
                    className="text-decoration-none text-[#242424] cursor-pointer underline underline-offset-[6px]"
                  >
                    Read More
                  </Link>
                </p>
                <div className="flex gap-5 items-center">
                  <button
                    onClick={() => navigate("/buzz/pr-news")}
                    className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm sm:text-base uppercase"
                  >
                    &lt; Back
                  </button>
                  <RWebShare
                    data={{
                      url: window.location.href,
                      title: "Check it out this article",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm sm:text-base uppercase">
                      Share <ShareIcon fontSize="25px" />
                    </button>
                  </RWebShare>
                </div>
              </div>
            ))
        ) : (
          <Starter />
        )}
      </div>
      <Footer />
    </>
  );
};

export default NewsPr;
