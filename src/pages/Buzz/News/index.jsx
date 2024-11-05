import React, { useEffect, useState } from "react";
import news_pr from "../../../images/news_pr.svg";
import Header from "../../../components/Head";
import { InputAdornment, Typography } from "@mui/material";
import Searchbar from "../../../components/Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import AllNews from "./AllNews";
import Footer from "../../../components/Footer";
import RecentNews from "./RecentNews";
import { Helmet } from "react-helmet-async";

const News = () => {
  const [position, setPosition] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(0);

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
          href="https://www.vyugmetaverse.com/buzz/pr-news"
        />
      </Helmet>
      <div className="min-h-screen pt-32">
        <Header isTransparent={position} isHeaderText={true} />
        <div className="flex justify-center flex-col gap-5 items-center">
          <img
            className="h-20 w-20 contrast-[80%] brightness-0 hover:contrast-[1] hover:brightness-[1] transform transition-transform duration-500 hover:scale-125 ease-in-out"
            src={news_pr}
            alt="News PR"
            aria-hidden="true"
          />
          <Typography
            variant="h1"
            className="header text-3xl sm:text-4xl lg:text-[45px]"
          >
            News & PR
          </Typography>
          <div className="w-[95%] md:w-[60%] mx-auto">
            <Searchbar
              onSearch={setSearch}
              placeholder={"Search Article"}
              InputProps={{
                endAdornment: (
                  <InputAdornment className="me-4" position="end">
                    <SearchIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className="w-[95%] md:w-[90%] mx-auto mt-10 mb-32 md:mb-40 flex flex-col gap-10">
          <div className="flex gap-8">
            {["All", "Recent"].map((item, index) => (
              <Typography
                onClick={() => setActive(index)}
                key={index}
                variant="subtitle1"
                component={"p"}
                className={`
                ${
                  active == index &&
                  "font-bold underline underline-offset-[8px] md:underline-offset-[7px]"
                } 
                text-sm relative hover:font-bold hover-effect description cursor-pointer`}
              >
                {item}
              </Typography>
            ))}
          </div>
          {active === 0 ? (
            <AllNews search={search} />
          ) : (
            <RecentNews search={search} />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default News;
