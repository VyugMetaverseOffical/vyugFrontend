import React, { useEffect, useState } from "react";
import Announcment from "../../../images/Announcement/Announcment.svg";
import Header from "../../../components/Head";
import { InputAdornment, Typography } from "@mui/material";
import Searchbar from "../../../components/Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import AllAnnounce from "./AllAnnounce";
import Footer from "../../../components/Footer";
import { Helmet } from "react-helmet-async";

const Announcement = () => {
  const [position, setPosition] = useState(false);
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");

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
        <title>Announcement - VYUG Metaverse</title>
        <meta name="description" content="Announcement" />
        <meta name="keywords" content="Announcement" />
        <meta property="og:title" content="Announcement" />
        <meta property="og:description" content="Announcement" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/buzz/announcements"
        />
      </Helmet>
      <div className="min-h-screen pt-32">
        <Header isTransparent={position} isHeaderText={true} />
        <div className="flex justify-center flex-col gap-5 items-center">
          <img
            className="h-20 w-20 contrast-[80%] brightness-0 hover:contrast-[1] hover:brightness-[1] transform transition-transform duration-500 hover:scale-125 ease-in-out"
            src={Announcment}
            alt="Announcement"
            aria-hidden="true"
          />
          <Typography
            variant="h1"
            className="header text-3xl sm:text-4xl lg:text-[45px]"
          >
            Announcement
          </Typography>
          <div className="w-[95%] md:w-[60%] mx-auto">
            <Searchbar
              placeholder={"Search Article"}
              onSearch={setSearch}
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
        <div className="w-[95%] md:w-[90%] mx-auto mt-10 mb-20 flex flex-col gap-10">
          <div className="flex gap-8">
            {["All", "News", "Activities"].map((item, index) => (
              <Typography
                onClick={() => setActive(index)}
                key={index}
                variant="subtitle1"
                className={`
                ${
                  active == index &&
                  "font-bold underline underline-offset-[7px]"
                } 
                text-sm relative hover:font-bold hover-effect description cursor-pointer`}
              >
                {item}
              </Typography>
            ))}
          </div>
          <AllAnnounce search={search} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Announcement;
