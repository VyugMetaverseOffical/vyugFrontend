import React, { useEffect, useState } from "react";
import Blogsimg from "../../../images/Blog/Blogs.svg";
import Header from "../../../components/Head";
import { InputAdornment, Typography } from "@mui/material";
import Searchbar from "../../../components/Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import AllBlogs from "./AllBlogs";
import Footer from "../../../components/Footer";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
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
        <title>Blogs - VYUG Metaverse</title>
        <meta name="description" content="Blogs" />
        <meta name="keywords" content="Blogs" />
        <meta property="og:title" content="Blogs" />
        <meta property="og:description" content="Blogs" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/buzz/blogs"
        />
      </Helmet>
      <div className="min-h-screen pt-32">
        <Header isTransparent={position} isHeaderText={true} />
        <div className="flex justify-center flex-col gap-5 items-center">
          <img
            className="h-20 w-20 contrast-[80%] brightness-0 hover:contrast-[1] hover:brightness-[1] transform transition-transform duration-500 hover:scale-125 ease-in-out"
            src={Blogsimg}
            alt="Blogs"
            aria-hidden="true"
          />
          <Typography
            variant="h1"
            className="header text-3xl sm:text-4xl lg:text-[45px]"
          >
            Blogs
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
        <div className="w-[95%] md:w-[90%] mx-auto mt-10 flex flex-col gap-10">
          <div className="flex gap-8">
            {["All", "About Vyug"].map((item, index) => (
              <Typography
                onClick={() => setActive(index)}
                key={index}
                variant="subtitle1"
                component={"p"}
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
          <AllBlogs search={search} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
