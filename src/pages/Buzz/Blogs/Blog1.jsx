import React, { useEffect, useState } from "react";
import Header from "../../../components/Head";
import ShareIcon from "@mui/icons-material/Share";
import blogBg from "../../../images/Blog/blogBg.webp";
import blog1 from "../../../images/Blog/blog1.webp";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Footer from "../../../components/Footer";
import { Helmet } from "react-helmet-async";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog4 from "./Blog4";
import Blog5 from "./Blog5";

const Blog1 = () => {
  const [position, setPosition] = useState(false);

  const { id } = useParams();

  const metaTags = [
    {
      path: "overview-of-vyug-metaverse",
      title: "An Overview of VYUG Metaverse",
      description: "A complete detailed guide on what is VYUG Metaverse and learn how the VYUG Metaverse is the new YUG of Metaverse.",
      keywords: "Vyug Metaverse",
    },
    {
      path: "best-crypto-presale-participate-in-the-vyug-token-presale",
      title: "Best Crypto Presale is Upcoming Participate Now on VYUG.",
      description:
        "Start Investing in the Best Crypto Presale of VYUG Token 2024 and become an early investor of VYUG Metaverse.",
      keywords: "Crypto Presale, Vyug Metaverse",
    },
    {
      path: "vyug-token-presale",
      title: "Invest In Best Crypto Presale 2024: VYUG Token Presale",
      description:
        "Grab the opportunity to Invest in the upcoming Best Crypto Presale of 2024 of Vyug Token Presale and get the benefits of Vyug Token in Vyug Metaverse.",
      keywords:
        "Token Presale, Presale Coins, Best Coin to Invest, Best Cryptocurrency to Invest",
    },
    {
      path: "first-ever-metaverse-dussehra-celebration",
      title: "First-Ever Dussehra Celebration in the VYUG Metaverse",
      description:
        "Explore the First Ever Dussehra Celebration in Vyug Mertavers at your home and Experience the epic battle between Lord Rama and Ravana.",
      keywords:
        "Dussehra in Metaverse, Celebrating Dussehra Virtually, Ramayana in Metaverse, First Ever Dussehra in Metaverse",
    },
    {
      path: "why-vyug",
      title: "Why VYUG?",
      description: "Why VYUG?",
      keywords: "Why VYUG?",
    },
  ];

  const metaTagUse = metaTags.find((item) => item.path === id);

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

  return (
    <>
      <Helmet>
        <title>{metaTagUse.title}</title>
        <meta name="description" content={metaTagUse.description} />
        <meta name="keywords" content={metaTagUse.keywords} />
        <meta property="og:title" content={metaTagUse.title} />
        <meta property="og:description" content={metaTagUse.description} />
        <link
          rel="canonical"
          href={`https://www.vyugmetaverse.com/buzz/blogs/${id}`}
        />
      </Helmet>
      <Header isTransparent={position} isHeaderText={false} />
      {id === "why-vyug" ? (
        <div className="min-h-screen">
          <div className="w-full -z-10 h-[50vh] relative">
            <img
              className="h-[100%] w-[100%]"
              src={blogBg}
              alt="BG Blogs"
              aria-hidden="true"
            />
            <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center"></div>
          </div>
          <div className="mb-20 w-[95%] md:w-[80%] z-10 -mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-5 md:p-10">
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm"
            >
              July 9, 2024 | COMMUNITY
            </Typography>
            <Typography
              variant="h1"
              className="header text-[#111113] text-3xl sm:text-4xl md:text-[45px]"
            >
              Why VYUG?
            </Typography>
            <p className="h-40 w-[100%] flex justify-center items-center sm:h-80 my-4">
              <img
                className="h-[100%] w-[100%]"
                src={blog1}
                alt="Why VYUG ?"
                aria-hidden="true"
              />
            </p>
            <div className="w-full pt-6 flex flex-col gap-6 sm:gap-10">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize"
              >
                “We don't just claim that we are the best.
                <br />
                We prove to you that we are the best.”
                <br />
                <br />
                It had all begun with an idea in our minds.
                <br />
                An imagination that will keep the future in your hands; a future
                that will not only be the technological leap ahead, but also
                give you true powers of advancement, knowledge, technology,
                environment, and other things in the most morally responsible
                way. <br />
                <br />
                <b>An Unforeseen Experience</b> <br />
                VYUG is more than just a tech term. VYUG provides you with a
                never-before-seen encounter. We inspire you to engage with the
                upcoming generation. We push you to embark on the wonderful
                journey towards next-generation technology, which is swift,
                captivating, immersive, illuminating, and breathtaking. VYUG
                transports you to a new era of sophisticated visions, visions
                that will not only depict realities but also probe each
                reality's core in order to uncover concepts that inspire
                invention and self-enlightenment. <br /> <br />
                <b>A Diverse Zone of Services.</b> <br />
                Our platform has many specialities. With sectors like Education,
                Corporate, Sports, Entertainment,
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
              >
                we try to serve a purpose for all our needs. Whether you want to
                get into metaverse for learning, or for playing games, or for
                creating or collaborating in a workplace, or for just sitting
                around a virtual theater, we provide you all.
                <br />
                <br />
                <b>A 'Present' for Your Future</b>
                <br />
                VYUG is a gift for the prosperity you envision for the future.We
                are going to make your territories endless through the virtual
                realms. We aim to be the light bearer to educational reforms. We
                aim to change the face of cultures and corporations through true
                upliftment. We aim to raise new and secure platforms for the
                economy. <br />
                <br />
                VYUG is going to be there for the next generation. <br />
                We are here to assist you in every aspect of life. A platform
                that is so immersive that you get the best out of us and get the
                best out of yourselves through us. <br />
                Ultimately we are providing you with a centralized platform for
                anything and everything related to the realm of Metaverse.{" "}
                <br />
                <br />
                <b>A Ticket to New Finances</b>
                <br />
                We have our own metaverse coin named VYUG Token. We also have
                our own VYUG wallet App that facilitates all the transactions of
                the metaverse. Users can do any metaverse transactions, be it
                buying a land, or buying a pair of shoes, or swapping VYUG token
                with any other crypto coin, all transactions can be done through
                our wallet. Our mission is to help you achieve financial
                independence by bridging endless possibilities within a single,
                comprehensive platform. VYUG Wallet is your go-to solution for
                all your digital currency needs. <br />
                <br />
                <b>A Team of Growers</b>
                <br />
                At VYUG, we strive to give it our all. We don't refer to our
                individuals as employees and our groups as teams. Everybody
                present here is a human being attempting to grow and evolve.
                Everybody in our room attempts to construct, produce, or come up
                with something. <br />
                At VYUG, we want to make sure that every contribution someone
                makes is for the benefit of time, resources, people, technology,
                and the future.
                <br />
                <br />
                <b>A Vision for The Future</b>
                <br />
                Since the Metaverse is going to be the way of the future, we
                want to make VYUG a synonym of Metaverse.
                <br />
                We aim to unite people from all over the world and contribute to
                the development of digital society. In the future, we plan to
                provide a more user-friendly interface to facilitate users'
                navigation of VYUG. We plan to implement digital improvements as
                well, so that we can continuously improve.
                <br />
                <br />
              </Typography>
              <div className="flex gap-5 items-center">
                <button
                  onClick={() => navigate("/buzz/blogs")}
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
          </div>
        </div>
      ) : id === "first-ever-metaverse-dussehra-celebration" ? (
        <Blog2 />
      ) : id === "vyug-token-presale" ? (
        <Blog3 />
      ) : id === "best-crypto-presale-participate-in-the-vyug-token-presale" ? (
        <Blog4 />
      ) : id === "overview-of-vyug-metaverse" && <Blog5 />}

      <Footer />
    </>
  );
};

export default Blog1;
