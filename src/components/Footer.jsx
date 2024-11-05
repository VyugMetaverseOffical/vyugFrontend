import { Typography } from "@mui/material";
import React, { useState } from "react";
import Vyug_LOGO from "../images/vyugLogo.webp";
import Vyug from "../images/VYUG.svg";
import s1 from "../images/socialIcons/twitterGray.svg";
import s2 from "../images/socialIcons/telegramGray.svg";
import s3 from "../images/socialIcons/discordGray.svg";
import s4 from "../images/socialIcons/instaGray.svg";
import s5 from "../images/socialIcons/facebookGray.svg";
import s6 from "../images/socialIcons/youtubeGray.svg";
import t1 from "../images/socialIcons/twitter.svg";
import t2 from "../images/socialIcons/telegram.svg";
import t3 from "../images/socialIcons/discord.svg";
import t4 from "../images/socialIcons/instagram.svg";
import t5 from "../images/socialIcons/facebook.svg";
import t6 from "../images/socialIcons/youtube.svg";
import { Link, useNavigate } from "react-router-dom";
import { ComingSoon } from "./ComingSoon";

const Footer = () => {
  const [status, setStatus] = useState(1);
  const [img, setImg] = useState(-1);
  const navigate = useNavigate();

  const Governance = [
    {
      name: "Overview",
      link: "/about",
    },
    {
      name: "DAO Proposal",
      link: "/innovators",
    },
    {
      name: "Voting Mechanism",
      link: "/invest",
    },
    {
      name: "DAO Transparency",
      link: "/invest-in-vyug",
    },
  ];

  const Token = [
    {
      name: "Tokenomics",
      link: "/vyug-token",
    },
    {
      name: "Token Utility",
      link: "/vyug-token",
    },
    {
      name: "Presale",
      link: "/crypto-presale",
    },
  ];

  const Creator_Community = [
    {
      name: "Events",
      link: "/buzz/events",
    },
    {
      name: "Create Events",
      link: "/builder",
    },
    {
      name: "Create in VYUG",
      link: "/dao",
    },
    {
      name: "VYUG Studio",
      link: "/faqs",
    },
    {
      name: "Docs",
      link: "/faqs",
    },
  ];

  const Docs = [
    {
      name: "Roadmap",
      link: "/white-paper",
    },
    {
      name: "White Paper",
      link: "/whitepaper",
    },
    {
      name: "Licenses",
      link: "/licenses",
    },
    {
      name: "GitHub",
      link: "/careers",
    },
    {
      name: "Press Kit",
      link: "/terms-of-use",
    },
    // {
    //   name: "FAQ",
    //   link: "/privacy-policy",
    // },
  ];

  const Info = [
    {
      name: "Terms of Use",
      link: "/terms-of-use",
    },
    {
      name: "Terms & Conditions",
      link: "/white-paper",
    },
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Code Of Ethics",
      link: "/careers",
    },
    {
      name: "Feedback",
      link: "/terms-of-use",
    },
    {
      name: "Help Centre",
      link: "/privacy-policy",
    },
  ];

  const Social_Icons = [
    {
      name: "twitter",
      link: "https://x.com/VyugOfficial",
      image: s1,
      colorImg: t1,
    },
    {
      name: "telegram",
      link: "https://telegram.me/vyugofficial",
      image: s2,
      colorImg: t2,
    },
    {
      name: "discord",
      link: "https://discord.gg/rqSaNCwjTx",
      image: s3,
      colorImg: t3,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/vyugofficial/",
      image: s4,
      colorImg: t4,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/VyugOfficial/",
      image: s5,
      colorImg: t5,
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/@VyugOfficial",
      image: s6,
      colorImg: t6,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center py-10 items-center gap-5 sm:gap-10 bg-[#242424]">
        <div className="w-[85%] mx-auto gap-5 flex justify-start items-center">
          <div className="w-[10vh] h-[10vh] sm:w-[15vh] sm:h-[15vh] flex justify-center items-center">
            <img
              width={"100%"}
              height={"100%"}
              src={Vyug_LOGO}
              alt="Vyug logo"
              aria-hidden="true"
            />
          </div>
          <div className="w-[15vh] h-[15vh] sm:w-[25vh] sm:h-[25vh] flex justify-center items-center">
            <img
              width={"100%"}
              height={"100%"}
              src={Vyug}
              alt="VYUG"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="w-[85%] mx-auto flex-wrap gap-10 lg:gap-20 flex justify-start items-start">
          <div className="flex flex-col justify-center pr-4 sm:pr-5 gap-2">
            <h5 className="header pb-5 text-base sm:text-lg text-[#fff]">
              GOVERNANCE
            </h5>
            {Governance.map((item, index) => {
              return (
                <Typography
                  key={index}
                  variant="h5"
                  component={"h5"}
                  className="description text-xs sm:text-sm"
                >
                  <Link
                    onClick={() => setStatus(0)}
                    className="no-underline footer-text"
                  >
                    {item.name}
                  </Link>
                </Typography>
              );
            })}
          </div>
          <div className="flex flex-col justify-center pr-4 sm:pr-5 gap-2">
            <h5 className="header pb-5 text-base sm:text-lg  text-[#fff]">
              TOKEN
            </h5>
            {Token.map((item, index) => {
              return (
                <Typography
                  key={index}
                  variant="h5"
                  component={"h5"}
                  className="description text-xs sm:text-sm"
                >
                  <Link to={item.link} className="no-underline footer-text">
                    {item.name}
                  </Link>
                </Typography>
              );
            })}
          </div>
          <div className="flex flex-col justify-center pr-4 sm:pr-5 gap-2">
            <h5 className="header pb-5 text-base sm:text-lg  text-[#fff]">
              CREATORS COMMUNITY
            </h5>
            {Creator_Community.map((item, index) => {
              if (item?.name == "Events") {
                return (
                  <Typography
                    key={index}
                    variant="h5"
                    component={"h5"}
                    className="description text-xs sm:text-sm"
                  >
                    <Link to={item.link} className="no-underline footer-text">
                      {item.name}
                    </Link>
                  </Typography>
                );
              }
              return (
                <Typography
                  key={index}
                  variant="h5"
                  component={"h5"}
                  className="description text-xs sm:text-sm"
                >
                  <Link
                    onClick={() => setStatus(0)}
                    className="no-underline footer-text"
                  >
                    {item.name}
                  </Link>
                </Typography>
              );
            })}
          </div>
          <div className="flex flex-col justify-center pr-4 sm:pr-5 gap-2">
            <h5 className="header pb-5 text-base sm:text-lg  text-[#fff]">
              DOCS
            </h5>
            {Docs.map((item, index) => {
              return (
                <Typography
                  key={index}
                  variant="h5"
                  component={"h5"}
                  className="description text-xs sm:text-sm"
                >
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      if (item?.name === "White Paper") {
                        console.log("inside");
                        navigate("/whitepaper");
                        // return;
                      }
                      setStatus(0);
                    }}
                    className="no-underline footer-text"
                  >
                    {item.name}
                  </Link>
                </Typography>
              );
            })}
          </div>
          <div className="flex flex-col justify-center pr-4 sm:pr-5 gap-2">
            <h5 className="header pb-5 text-base sm:text-lg  text-[#fff]">
              INFO
            </h5>
            {Info.map((item, index) => {
              if (
                item?.name == "Terms of Use" ||
                item?.name == "Privacy Policy"
              ) {
                return (
                  <Typography
                    key={index}
                    variant="h5"
                    component={"h5"}
                    className="description text-xs sm:text-sm"
                  >
                    <Link to={item.link} className="no-underline footer-text">
                      {item.name}
                    </Link>
                  </Typography>
                );
              }
              return (
                <Typography
                  key={index}
                  variant="h5"
                  component={"h5"}
                  className="description text-xs sm:text-sm"
                >
                  <Link
                    onClick={() => setStatus(0)}
                    className="no-underline footer-text"
                  >
                    {item.name}
                  </Link>
                </Typography>
              );
            })}
          </div>
        </div>
        <div className="w-[90%] sm:w-[80%] mx-auto gap-5 flex justify-center items-center lg:items-end flex-col">
          <Typography
            variant="h2"
            component={"h2"}
            className="description font-semibold pt-8 text-xl text-center text-[#fff]"
          >
            Follow us
          </Typography>
          <div className="flex justify-center items-center gap-5">
            {Social_Icons.map((item, index) => {
              return (
                <Link
                  target="__blank"
                  key={index}
                  to={item.link}
                  onMouseEnter={() => setImg(index)}
                  onMouseLeave={() => setImg(-1)}
                  className="w-[4vh] h-[4vh] sm:w-[5vh] sm:h-[5vh] no-underline flex justify-center"
                >
                  {img === index ? (
                    <img
                      className="transition tarnsform-transition duration-150 ease-in-out hover:scale-125"
                      width={"100%"}
                      height={"100%"}
                      src={item.colorImg}
                      alt={item.name}
                      aria-hidden="true"
                    />
                  ) : (
                    <img
                      className="transition tarnsform-transition duration-200 ease-in-out hover:scale-110"
                      width={"100%"}
                      height={"100%"}
                      src={item.image}
                      alt={item.name}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center items-center">
            <Link
              to={"/join-telegram"}
              className="description text-xs text-center text-[#fff]"
            >
              Join Telegram Community
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Typography
              variant="subtitle2"
              className="description text-xs text-center text-[#fff]"
            >
              Copyright © 2023- 2024 VYUG. All Rights Reserved
            </Typography>
          </div>
        </div>
      </div>
      {status == 0 && <ComingSoon status={status} setStatus={setStatus} />}
    </>
  );
};

export default Footer;
