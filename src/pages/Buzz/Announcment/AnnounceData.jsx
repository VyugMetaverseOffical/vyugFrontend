import React, { useEffect, useState } from "react";
import Header from "../../../components/Head";
import ShareIcon from "@mui/icons-material/Share";
import { Typography } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import announcementImg from "../../../images/Announcement/announcement-img-1.webp";
import announcementImg2 from "../../../images/Announcement/announcement-img-2.webp";
import announcementBg from "../../../images/Blog/blogBg.webp";
import { RWebShare } from "react-web-share";
import Footer from "../../../components/Footer";
import diwaliBanner from "../../../images/Diwali_Banner.jpg";
import diwaliAnnouncement from "../../../images/Announcement/announcement_diwali.jpg"
import { Helmet } from "react-helmet-async";

const Announcement1 = ({ navigate }) => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] z-10 -mt-48 md:-mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-6 md:p-12 py-10 md:py-20 overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start">
        <div className="w-full lg:w-[65%] flex flex-col gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-1">
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-[10px] sm:text-sm"
            >
              August 21, 2024 | COMMUNITY
            </Typography>
            <Typography
              variant="h1"
              className="header text-[20px] md:text-[30px] text-start my-4 md:my-8"
            >
              VYUG Enters New Arenas With Beta! Launches The Most Advanced
              Version of Metaverse.
            </Typography>
            <div className="lg:hidden w-full flex items-center justify-center lg:justify-end gap-5 mb-4">
              <img
                className="w-[50%]"
                src={announcementImg}
                alt="VYUG Enters New Arenas With Beta"
                aria-hidden="true"
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                VYUG is excited to announce the beta release of our cutting-edge
                metaverse platform.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                Earlier this Year, we had successfully launched the alpha
                testing phase for Nexara, the first futuristic city within the
                metaverse.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                Our in-house developers and testers participated in this early
                stage, which has shown vital insights that influenced the
                platform's evolution.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                VYUG is now thrilled to welcome the public into Nexara's beta
                testing phase, enabling you to interact and explore this
                state-of-the-art virtual environment.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                So Get Ready for the unparalleled universe!
              </Typography>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start mb-4">
                  What's new in the Beta Version?
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  With a tonne of features, the Vyug beta edition offers you a
                  sneak peek at providing the most advanced technology in the
                  metaverse .
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  Till now, the Alpha version has only been catching the
                  widening buzz in the metaverse and the Beta version has still
                  been in an infancy.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  But VYUG makes a historical attempt to give users an
                  experience that’s bigger and more real in terms of graphics
                  and newer versions of 3-D development. VYUG tries to take you
                  to environments that are not virtual anymore but are just next
                  to reality.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start my-4"
                >
                  With most immersive gaming environments , users can play and
                  interact with players worldwide as you immerse yourself in a
                  visually spectacular world.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start my-4"
                >
                  With realistic virtual classrooms, learn like never before.
                  VYUG offers an engaging and interactive learning experience
                  for business, academic, and school training.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start my-4"
                >
                  Vyug shall become the most useful tool for businesses in the
                  years to come, with all the elements of professionalism and
                  being fun. You may even create your own virtual storefront and
                  conduct virtual meetings in our beta version.
                </Typography>
              </div>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start">
                  Why Should You Join the Beta?
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  You can get early access to all of these features and more by
                  signing up for the beta. As one of the first users to explore
                  the Vyug metaverse, you'll be able to offer insightful
                  comments that will help us polish and optimize the platform
                  before its public debut.
                </Typography>
              </div>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start mt-4">
                  What Comes Next?
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  This is just our kickstart. The Beta represents your first
                  step into a more expansive and interconnected metaverse, and
                  we have huge ambitions for Vyug.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  Based on user experiences and suggestions , we'll be
                  developing our virtual environment, holding events, and
                  introducing new features as we go.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start my-4"
                >
                  Our Beta version is going to be Live soon! So stay connected
                  and updated to rock the new world of metaverse with VYUG.
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <button
              onClick={() => navigate("/buzz/announcements")}
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
              <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase">
                Share <ShareIcon fontSize="25px" />
              </button>
            </RWebShare>
          </div>
        </div>
        <div className="hidden w-full lg:w-[35%] lg:flex items-center justify-center lg:justify-end gap-5">
          <div className="h-40 sm:w-80 w-40 flex justify-center lg:justify-end items-center sm:h-80">
            <img
              className="h-[100%]"
              src={announcementImg}
              alt="VYUG Enters New Arenas With Beta"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Announcement2 = ({ navigate }) => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] z-10 -mt-48 md:-mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-6 md:p-12 py-10 md:py-20 overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start">
        <div className="w-full lg:w-[65%] flex flex-col gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-1">
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-[10px] sm:text-sm"
            >
              August 15, 2024 | COMMUNITY
            </Typography>
            <Typography
              variant="h1"
              className="header text-[20px] md:text-[30px] text-start my-4 md:my-8"
            >
              VYUG Launches The Airdrop of Revolution! Brings its own 'VYUG
              Token' this 15th August.
            </Typography>
            <div className="lg:hidden w-full flex items-center justify-center lg:justify-end gap-5 mb-4">
              <img
                className="w-[50%]"
                src={announcementImg2}
                alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true"
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                VYUG is thrilled to announce the VYUG token airdrop!
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                Airdrops have become increasingly popular in the universe of
                digital currencies. They have become a boon to both the finance
                and the digital world, and VYUG aims to bring this Boon to life.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                As a special thanks to our growing community, and to promote and
                reach a wider base, VYUG is giving away these tokens to users
                who participate in this exciting event. This giveaway will bring
                you humongous rewards.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                That’s not all—100 lucky participants will have the chance to
                win a jackpot of up to $5,000 USDT!
              </Typography>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                  How to Join
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  It's quite simple to get started! Just download the Vyug
                  Wallet app from your app store or our official website. After
                  installation, there are a few simple procedures you must
                  finish in order to be eligible for the airdrop. To ensure that
                  everyone has an equal chance of winning, these procedures are
                  made to be easy to follow and entertaining.
                </Typography>
              </div>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start mt-4">
                  Benefits for You
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  Besides earning Vyug Tokens, you'll also get a kick start on
                  discovering the huge potential of the VYUG metaverse. Your
                  tokens will be the means by which you can transact, own
                  special assets, and take part in a variety of events in our
                  virtual world.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start my-4"
                >
                  But the excitement doesn’t stop there! Those who complete the
                  steps will automatically be entered into our jackpot draw,
                  where 100 lucky users will win up to $5,000 USDT each. Just
                  Imagine the possibilities!
                </Typography>
              </div>
              <div>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  <span className="font-semibold text-[#303030]">Note: </span>
                  Please note that all participants must undergo KYC
                  verification. This is to guarantee the airdrop process's
                  integrity and security. The only people who can take out or
                  utilize their Vyug Tokens are those who have finished their
                  KYC.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start my-4"
                >
                  So Don't pass up this wonderful opportunity! Hurry up now and
                  download the Vyug Wallet app and follow the steps to win big.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start my-4"
                >
                  Together, let's mold the metaverse's future!
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <button
              onClick={() => navigate("/buzz/announcements")}
              className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase"
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
              <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase">
                Share <ShareIcon fontSize="25px" />
              </button>
            </RWebShare>
          </div>
        </div>
        <div className="hidden w-full lg:w-[35%] lg:flex items-center justify-center lg:justify-end gap-5">
          <div className="h-40 sm:w-80 w-40 flex justify-center lg:justify-end items-center sm:h-80">
            <img
              className="h-[100%]"
              src={announcementImg2}
              alt="VYUG Launches The Airdrop of Revolution"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Announcement3 = ({ navigate }) => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] z-10 -mt-48 md:-mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-6 md:p-12 py-10 md:py-20 overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start">
        <div className="w-full lg:w-[65%] flex flex-col gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-1">
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-[10px] sm:text-sm"
            >
              August 23, 2024 | COMMUNITY
            </Typography>
            <Typography
              variant="h1"
              className="header text-[20px] md:text-[30px] text-start my-4 md:my-8"
            >
              Important Announcement ! VYUG Jackpot Will Only Be Available After
              15th September
            </Typography>
            {/* <div className="h-80 flex justify-center lg:justify-end items-center"> */}
            {/* <img className="w-[50%]" src={announcementImg2} alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true" /> */}
            {/* </div> */}
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                This is to bring under your notice that our VYUG team has
                received numerous queries regarding the Jackpot approval and the
                Jackpot prizes.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                We have always been clear about our airdrop that this will last
                for a month, and all the jackpot winning procedures will be
                starting after 15th september. This fact has also been mentioned
                in our Terms and Conditions.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                We understand the high-energy sentiments of our participants and
                appreciate their precious participation. Therefore, we are once
                again announcing that the VYUG Jackpot will be available for
                lucky winners after 15th september.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                Our team will select a few lucky winners after 15th September,
                and these winners will only be eligible to take part in the
                jackpot.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                Users are welcomed to take part in our airdrop in massive
                numbers. You get VYUG Tokens, and rewards, which shall fetch you
                greatly in future. The USDT prizes that you will receive will be
                straightaway put in your VYUG Wallet Account. So we insist that
                you please Wait till the Final Date!
              </Typography>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-5 items-center">
              <button
                onClick={() => navigate("/buzz/announcements")}
                className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase"
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
                <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase">
                  Share <ShareIcon fontSize="25px" />
                </button>
              </RWebShare>
            </div>
          </div>
        </div>
        <div className="hidden w-full lg:w-[35%] lg:flex items-center justify-center lg:justify-end gap-5">
          <div className="h-40 sm:w-80 w-40 flex justify-center lg:justify-end items-center sm:h-80">
            {/* <img className="h-[100%]" src={announcementImg2} alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Announcement4 = ({ navigate }) => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] z-10 -mt-48 md:-mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-6 md:p-12 py-10 md:py-20 overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start">
        <div className="w-full lg:w-[65%] flex flex-col gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-1">
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-[10px] sm:text-sm"
            >
              August 23, 2024 | COMMUNITY
            </Typography>
            <Typography
              variant="h1"
              className="header text-[20px] md:text-[30px] text-start my-4 md:my-8"
            >
              Winning the TEST-Run! VYUG Token Successfully Gets Deployed on
              TestNet
            </Typography>
            {/* <div className="h-80 flex justify-center lg:justify-end items-center"> */}
            {/* <img className="w-[50%]" src={announcementImg2} alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true" /> */}
            {/* </div> */}
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start mt-4"
              >
                VYUG is proud to announce that our token has successfully been
                deployed on TestNet. This achievement was awaited after our
                attempt to get into the market with VYUG tokens.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start mb-4"
              >
                Our tokens are intended to be the facilitator of the digital
                economy. VYUG token aims to be your go-to token for all
                metaverse needs.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                With VYUG metaverse platform booming, and proving itself as a
                problem-solver in various industries, this token will soon gain
                demands.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                And we can happily say that these demands will soon be fulfilled
                when VYUG tokens will be available for use.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start"
              >
                Our coin has been successfully deployed on Testnet and here is
                the official{" "}
                <a
                  href="https://x.com/Beosin_com/status/1823532516885848216"
                  target="_blank"
                >
                  Announcement
                </a>
                .
              </Typography>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                  What is the TestNet Audit Report?
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  Whenever a platform plans to bring its own coin into
                  circulation, it needs to go through a process of launching and
                  testing its coin on a test network. The project goes through
                  multiple testing phases ,these phases include the development
                  team's own preliminary testing and public testing, where the
                  network (or coin in this case) is tested by a few esteemed
                  consenting users, also known as testers, after which the audit
                  for this coin is done to examine its security, accessibility,
                  utility and success rate in real digital peripherals.
                </Typography>
              </div>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                  Moving Ahead
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  With the successful TestNet deployment, VYUG token will next
                  be tested on the MainNet network. Our attempts are rapid and
                  our developments have been fast. We aim to bring this coin to
                  users in the most secure, fast, accessible form. So, it's high
                  time that users explore our VYUG metaverse and join hands with
                  us to get into the world of VYUG and also attain benefits of
                  VYUG token.
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-5 items-center">
              <button
                onClick={() => navigate("/buzz/announcements")}
                className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase"
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
                <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase">
                  Share <ShareIcon fontSize="25px" />
                </button>
              </RWebShare>
            </div>
          </div>
        </div>
        <div className="hidden w-full lg:w-[35%] lg:flex items-center justify-center lg:justify-end gap-5">
          <div className="h-40 sm:w-80 w-40 flex justify-center lg:justify-end items-center sm:h-80">
            {/* <img className="h-[100%]" src={announcementImg2} alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Announcement5 = ({ navigate }) => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] z-10 -mt-48 md:-mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-6 md:p-12 py-10 md:py-20 overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start">
        <div className="w-full lg:w-[65%] flex flex-col gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-1">
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-[10px] sm:text-sm"
            >
              August 29, 2024 | COMMUNITY
            </Typography>
            <Typography
              variant="h1"
              className="header text-[20px] md:text-[30px] text-start mt-4 md:mt-8"
            >
              VYUG Token Officially Deployed on Mainnet After Successful Testnet
              Phase
            </Typography>
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm md:text-base text-start italic my-4"
            >
              Testnet Testing Report Released Earlier This Month
            </Typography>
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start mt-4"
              >
                Dear VYUG Community,
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start mt-4"
              >
                We are excited to announce that the VYUG token has officially
                been deployed on the Mainnet. This comes after the successful
                completion of our Testnet phase, which we recently reported with
                detailed insights. With positive proof-of-history validation and
                extensive testing, the VYUG token is now live on the public
                blockchain, marking a key milestone in our journey.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                Earlier this month, the VYUG token underwent rigorous testing on
                the Testnet, and the results exceeded our expectations. As
                promised, we have now transitioned to the Mainnet. This
                deployment is a testament to the hard work and dedication of our
                development team, who have ensured that our token meets the
                highest standards of security, encryption, and interoperability.
              </Typography>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                  Understanding the Mainnet Deployment
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  The Mainnet is the final operational environment where
                  blockchain projects are released for public use. Unlike the
                  Testnet, an internal testing network, the Mainnet signals the
                  completion of all major backend functionalities. At this
                  stage, the VYUG token transitions from testing to real-world
                  application, where it holds actual value and is fully
                  integrated into the public blockchain. With this deployment,
                  we are confident that the VYUG token is optimized for
                  scalability, security, and performance.
                </Typography>
              </div>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                  Testnet Testing Report
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  We recently released our Testnet testing report, highlighting
                  the robust testing process we undertook before Mainnet
                  deployment. The report details our extensive performance,
                  security, and reliability evaluation across multiple use
                  cases. We are proud to share that all objectives were met,
                  paving the way for a smooth Mainnet transition.
                </Typography>
              </div>
              <div>
                <h4 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                  What This Means for VYUG
                </h4>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start my-4"
                >
                  The deployment of the VYUG token on Mainnet is a crucial step
                  in realizing our vision for a seamless digital ecosystem. This
                  achievement underscores our commitment to providing users with
                  a reliable, secure, and future-ready platform. As we continue
                  to advance, the VYUG token will play a central role in driving
                  utility, growth, and innovation across our ecosystem.
                </Typography>
                <Typography
                  variant="subtitle2"
                  component={"p"}
                  className="description text-sm md:text-base text-start"
                >
                  We are excited about what lies ahead and remain focused on
                  delivering a world-class experience for our community. Thank
                  you for your continued trust and support.
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-5 items-center">
              <button
                onClick={() => navigate("/buzz/announcements")}
                className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase"
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
                <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase">
                  Share <ShareIcon fontSize="25px" />
                </button>
              </RWebShare>
            </div>
          </div>
        </div>
        <div className="hidden w-full lg:w-[35%] lg:flex items-center justify-center lg:justify-end gap-5">
          <div className="h-40 sm:w-80 w-40 flex justify-center lg:justify-end items-center sm:h-80">
            {/* <img className="h-[100%]" src={announcementImg2} alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Announcement6 = ({ navigate }) => {
  return (
    <>
      <Helmet>
        <title>The VYUG Token Presale is coming...</title>
        <meta
          name="description"
          content="Important! Vyug is Going to Start its Token Presale in a few days. So be ready to Grab the biggest Crypto Presale ever."
        />
        <meta name="keywords" content="Announcement" />
        <meta
          property="og:title"
          content="The VYUG Token Presale is coming..."
        />
        <meta
          property="og:description"
          content="Important! Vyug is Going to Start its Token Presale in a few days. So be ready to Grab the biggest Crypto Presale ever."
        />
        <link
          rel="canonical"
          href={`https://www.vyugmetaverse.com/buzz/announcement/vyug-announces-the-vyug-token-presale`}
        />
      </Helmet>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] z-10 -mt-48 md:-mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-6 md:p-12 py-10 md:py-20 overflow-x-hidden">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start">
          <div className="w-full lg:w-[65%] flex flex-col gap-6">
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-[10px] sm:text-sm"
              >
                October 16, 2024 | COMMUNITY
              </Typography>
              <Typography
                variant="h1"
                component={"h1"}
                className="header text-[20px] md:text-[30px] text-start mt-4 md:mt-8 capitalize"
              >
                The VYUG Token Presale is coming...
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start italic my-4"
              >
                VYUG is proud to announce the token presale of{" "}
                <a
                  href="https://www.vyugmetaverse.com/vyug-token"
                  className="font-bold text-[#006BFF]"
                >
                  VYUG Tokens
                </a>
                . With this announcement, VYUG invites investors from all over
                the globe to join hands with the best metaverse token and get
                the first-mover advantage in future technology.
              </Typography>
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <div>
                  <h2 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                    Understanding the VYUG Presale
                  </h2>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    VYUG Presale is a golden chance for the investing community
                    to invest their stakes into a metaverse token built for the
                    future.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    In this presale, VYUG will launch 3% of its total supply
                    volume of 3.5 billion. This plan will go through 3 unique
                    phases.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    Each of these phases will include the presale of 1% of
                    tokens out of the total supply.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    For the first phase. The price set is{" "}
                    <strong>$0.033</strong>. The second phase will go through a
                    similar routine. This time, the price set for this phase
                    will be <strong>$0.040</strong>. The third and final phase
                    will have a price of <strong>$0.044</strong>.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    After conducting these three phases, the VYUG token will
                    then soon be listed at the initial listing price of{" "}
                    <strong>$0.088</strong>.
                  </Typography>
                </div>
                <div>
                  <h2 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                    How to Participate
                  </h2>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    The participation includes a few simple steps. Firstly,
                    visit the{" "}
                    <a
                      href="https://www.vyugmetaverse.com/"
                      className="font-bold text-[#006BFF]"
                    >
                      VYUG Homepage
                    </a>
                    . You will find the link to the{" "}
                    <a
                      href="https://www.vyugmetaverse.com/crypto-presale"
                      className="font-bold text-[#006BFF]"
                    >
                      Presale page
                    </a>{" "}
                    there. Then go to the presale page, select the amount you
                    want to invest, add your wallet, and you are good to go.
                  </Typography>
                </div>
                <div>
                  <h3 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                    Join the Golden Chance
                  </h3>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start my-4"
                  >
                    Through this presale, you get the ultimate VYUG token, a
                    token that you need to uplift your journey of digital
                    finance. This token has the utilities and functionalities to
                    go beyond traditional transactions. It offers a bandwidth of
                    features never seen before.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    Join hands with VYUG and build a stage for futuristic
                    innovations and cutting-edge technology that serves every
                    section of society. Join our token presale and get maximum
                    benefits! For more details and updates, visit our presale
                    page.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex gap-5 items-center">
                <button
                  onClick={() => navigate("/buzz/announcements")}
                  className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase"
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
                  <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase">
                    Share <ShareIcon fontSize="25px" />
                  </button>
                </RWebShare>
              </div>
            </div>
          </div>
          <div className="hidden w-full lg:w-[35%] lg:flex items-center justify-center lg:justify-end gap-5">
            <div className="h-40 sm:w-80 w-40 flex justify-center lg:justify-end items-center sm:h-80">
              {/* <img className="h-[100%]" src={announcementImg2} alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Announcement7 = ({ navigate }) => {
  return (
    <>
      <Helmet>
        <title>VYUG Announces Closure of the Successful VYUG Airdrop</title>
        <meta
          name="description"
          content="VYUG Announces the Closure of VYUG Airdrop. The company will announce winners by the end of this month. VYUG's next venture is the upcoming VYUG Presale."
        />
        <meta name="keywords" content="Announcement" />
        <meta
          property="og:title"
          content="VYUG Announces Closure of the Successful VYUG Airdrop"
        />
        <meta
          property="og:description"
          content="VYUG Announces the Closure of VYUG Airdrop. The company will announce winners by the end of this month. VYUG's next venture is the upcoming VYUG Presale."
        />
        <link
          rel="canonical"
          href={`https://www.vyugmetaverse.com/buzz/announcement/closure-of-the-successful-vyug-airdrop`}
        />
      </Helmet>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] z-10 -mt-48 md:-mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-6 md:p-12 py-10 md:py-20 overflow-x-hidden">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start">
          <div className="w-full lg:w-[65%] flex flex-col gap-6">
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-[10px] sm:text-sm"
              >
                October 25, 2024 | COMMUNITY
              </Typography>
              <Typography
                variant="h1"
                component={"h1"}
                className="header text-[20px] md:text-[30px] text-start mt-4 md:mt-8 capitalize"
              >
                VYUG Announces Closure of the Successful VYUG Airdrop!
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="header text-sm md:text-base text-start italic mt-10 my-4"
              >
                Dear VYUG Community,
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                VYUG is excited to announce that the VYUG token airdrop is
                officially over! Thank you to everyone who participated and
                supported us. Your enthusiasm truly means a lot!
                <br />
                Our company extends a heartfelt thank you to everyone who
                participated in this event. With all the support that this
                airdrop received, the venture was a bigger delight than
                expected. Our team is overwhelmed to receive such accolades from
                the users and thrilled to have such an active community behind
                VYUG.
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4"
              >
                Now that the airdrop has ended, hence, we have removed the
                ‘Airdrop Button’ from the VYUG Wallet Application. Please note
                that no further tokens will be distributed as part of this
                particular airdrop campaign.
              </Typography>
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <div>
                  <h2 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                    What’s Next?
                  </h2>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    The plans ahead for VYUG are the announcement of jackpot
                    winners. Stay tuned for the jackpot winners announcement.
                    Our team will be giving a random amount of USDT to{" "}
                    <strong>100 lucky users</strong> as a thank-you for
                    participating.
                    <br />
                    This announcement will be done through our{" "}
                    <strong>Telegram channel</strong>. Keep an eye on our
                    official channel for the big reveal!
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    Successing this, the VYUG presale will be our company's next
                    venture, and we invite worthy participations from across
                    industries.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  >
                    VYUG thanks our community once again for being a part of
                    this journey with us. More exciting updates are coming soon!
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="header text-sm md:text-base my-6 text-start"
                  >
                    Best Wishes, <br />
                    The VYUG Team
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex gap-5 items-center">
                <button
                  onClick={() => navigate("/buzz/announcements")}
                  className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase"
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
                  <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase">
                    Share <ShareIcon fontSize="25px" />
                  </button>
                </RWebShare>
              </div>
            </div>
          </div>
          <div className="hidden w-full lg:w-[35%] lg:flex items-center justify-center lg:justify-end gap-5">
            <div className="h-40 sm:w-80 w-40 flex justify-center lg:justify-end items-center sm:h-80">
              {/* <img className="h-[100%]" src={announcementImg2} alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Announcement8 = ({ navigate }) => {
  return (
    <>
      <Helmet>
        <title>Finance Meets the Metaverse: The VYUG Presale is Live!</title>
        <meta
          name="description"
          content="VYUG Token Presale is going to live on October 28, 2024. Invest Now and become part of the Metaverse Community to book your profit."
        />
        <meta name="keywords" content="Announcement" />
        <meta
          property="og:title"
          content="Finance Meets the Metaverse: The VYUG Presale is Live!"
        />
        <meta
          property="og:description"
          content="VYUG Token Presale is going to live on October 28, 2024. Invest Now and become part of the Metaverse Community to book your profit."
        />
        <link
          rel="canonical"
          href={`https://www.vyugmetaverse.com/buzz/announcement/finance-meets-the-metaverse-the-vyug-presale-is-live`}
        />
      </Helmet>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] z-10 -mt-48 md:-mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-6 md:p-12 py-10 md:py-20 overflow-x-hidden">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start">
          <div className="w-full lg:w-[65%] flex flex-col gap-6">
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-[10px] sm:text-sm"
              >
                October 28, 2024 | COMMUNITY
              </Typography>
              <Typography
                variant="h1"
                component={"h1"}
                className="header text-[20px] md:text-[30px] text-start mt-4 md:mt-8 capitalize"
              >
                Finance Meets the Metaverse: The VYUG Presale is Live! Invest
                Now...
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="header text-sm md:text-base text-start mt-10 my-4"
              >
                Dear Community,
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4 text-[#000000DE]"
              >
                VYUG is here with the VYUG Presale!
                <br />
                The entries to the future economy are now open. VYUG invites you
                to join this force and become a partner with the company's
                ultimate future. Invest in the future token and get maximum
                returns on your stakes.
              </Typography>
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <div>
                  <h2 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                    Why Join the VYUG Presale
                  </h2>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start text-[#000000DE]"
                  >
                    The VYUG Presale is your unique chance to invest in the best
                    metaverse token. With a supply volume of{" "}
                    <strong> 3.5 billion </strong> and chain facilitation of{" "}
                    <strong> 4 </strong> blockchains that include{" "}
                    <strong> Polygon, Ethereum, Solana, BNB, </strong> and a
                    wide range of other features, the VYUG Token is the only
                    token you need in your purses.
                    <br /> <br />
                    Our company is launching 3% of our total supply into this
                    presale at a never-before-seen price of{" "}
                    <strong> $0.033 </strong> per token. The minimum purchase
                    limit is as low as $20. Plus, there is no maximum purchase
                    limit, so users can stake in as many VYUG tokens as they
                    wish to.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start text-[#000000DE]"
                  >
                    This Presale has three phases, and by the time of listing,
                    the price of this token will rise to{" "}
                    <strong> $0.088 </strong> per token. Analyzing this big rise
                    and the huge potential of VYUG tokens to grow up to multiple
                    times their values very soon, this Presale is the best
                    opportunity to grab!
                  </Typography>
                  <h2 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                    Steps to Participate
                  </h2>
                  <ul
                    className={
                      "ps-5 mt-4 description text-base list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgMTEgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjUuNSIgY3k9IjUuNSIgcj0iNS41IiBmaWxsPSIjMjQyNDI0Ii8+Cjwvc3ZnPgo=)]"
                    }
                  >
                    <li className="text-[#000000DE] pt-4">
                      First, visit the VYUG website. Scroll down the banner on
                      your homepage and click on the{" "}
                      <strong> 'Visit Presale' </strong> button to go to the{" "}
                      <strong> Presale page</strong>.
                    </li>
                    <li className="text-[#000000DE] pt-4">
                      Now you need to log in/sign up with your credentials.
                    </li>
                    <li className="text-[#000000DE] pt-4">
                      After this, you need to connect a wallet. Add your wallets
                      from the available lists.
                    </li>
                    <li className="text-[#000000DE] pt-4">Now add the amount you want to invest.</li>
                    <li className="text-[#000000DE] pt-4">
                      After this, you shall receive a notification to confirm
                      your wallet connection. Click on the{" "}
                      <strong> 'Connect' </strong> button to proceed.
                    </li>
                    <li className="text-[#000000DE] pt-4">
                      After this, click on <strong> 'Buy Tokens'. </strong>{" "}
                      You'll again receive a notification to approve your
                      transaction. Click on the <strong> 'Approve' </strong>{" "}
                      button.
                    </li>
                    <li className="text-[#000000DE] pt-4">
                      And that’s it—you're set to transform your journey with
                      VYUG!
                    </li>
                    <li className="text-[#000000DE] pt-4">
                      Do not forget to follow our{" "}
                      <a
                        className="font-bold text-[#006BFF]"
                        href="https://t.me/vyugofficial"
                        target="_blank"
                      >
                        {" "}
                        Telegram{" "}
                      </a>{" "}
                      and{" "}
                      <a
                        className="font-bold text-[#006BFF]"
                        href="https://x.com/VyugOfficial"
                        target="_blank"
                      >
                        {" "}
                        Twitter{" "}
                      </a>{" "}
                      pages for more updates.
                    </li>
                  </ul>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start"
                  ></Typography>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="header text-sm md:text-base my-6 text-start"
                  >
                    Grab the Opportunities!
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex gap-5 items-center">
                <button
                  onClick={() => navigate("/buzz/announcements")}
                  className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase"
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
                  <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase">
                    Share <ShareIcon fontSize="25px" />
                  </button>
                </RWebShare>
              </div>
            </div>
          </div>
          <div className="hidden w-full lg:w-[35%] lg:flex items-center justify-center lg:justify-end gap-5">
            <div className="h-40 sm:w-80 w-40 flex justify-center lg:justify-end items-center sm:h-80">
              {/* <img className="h-[100%]" src={announcementImg2} alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const Announcement9 = ({ navigate }) => {
  return (
    <>
      <Helmet>
        <title> Celebrate the First-Ever Metaverse Diwali with VYUG! </title>
        <meta
          name="description"
          content="VYUG Token Presale is going to live on October 28, 2024. Invest Now and become part of the Metaverse Community to book your profit."
        />
        <meta name="keywords" content="Announcement" />
        <meta
          property="og:title"
          content="Celebrate the First-Ever Metaverse Diwali with VYUG!"
        />
        <meta
          property="og:description"
          content="Celebrate this Diwali with Vyug Metaverse. Enjoy Immersive experience of the first-ever VR Diwali celebration.
"
        />
        <link
          rel="canonical"
          href={`https://www.vyugmetaverse.com/buzz/announcement/celebrate-the-first-ever-metaverse-diwali-with-vyug`}
        />
      </Helmet>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] z-10 -mt-48 md:-mt-28 mx-auto rounded-xl bg-[#fff] flex gap-5 flex-col p-6 md:p-12 py-10 md:py-20 overflow-x-hidden">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-start">
          <div className="w-full lg:w-[65%] flex flex-col gap-6">
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-[10px] sm:text-sm"
              >
                October 30, 2024 | COMMUNITY
              </Typography>
              <Typography
                variant="h1"
                component={"h1"}
                className="header text-[20px] md:text-[30px] text-start mt-4 md:mt-8 capitalize"
              >
                Celebrate the First-Ever Metaverse Diwali! VYUG Presents the Festival of Lights in VR
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="header text-sm md:text-base italic text-start mt-10 my-4"
              >
                Dear VYUG Community,
              </Typography>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-sm md:text-base text-start my-4 text-[#000000DE]"
              >
                VYUG wishes you a Happy and Healthy Diwali! May this festival of light bring you auspicious prosperity, joy, and growth.
                <br />
                This Diwali, VYUG proudly announces the first-ever VR Diwali celebration. Our company brings the auspicious festival of lights into the world of virtual reality and immersive experiences.

              </Typography>
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <div>
                  <h2 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                    Celebrate Diwali! VR wali
                  </h2>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start text-[#000000DE]"
                  >
                    The festival of lights and joy is now brought to you in an immersive and surreal virtual experience. Our team believes in combining the fusion of culture and traditions with futuristic technology. This celebration is a great chance for users where they can witness <strong> Lord Ram’s </strong> imperial journey and his homecoming in the metaverse
                  </Typography>
                  <h2 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                    The 720-Degree Experience
                  </h2>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start text-[#000000DE]"
                  >
                    With VYUG Diwali, you get the chance to witness this festival in an immersive <strong> 720-degree experience. </strong> This is probably the largest and most advanced virtual celebration of Diwali. Our team brings the vibrant vibes and stories of Awadh right into the virtual universe.
                  </Typography>
                  <h2 className="description font-semibold text-[#303030] text-sm md:text-base text-start my-4">
                    Join us in the first Metaverse Diwali
                  </h2>
                  <Typography
                    variant="subtitle2"
                    component={"p"}
                    className="description text-sm md:text-base text-start text-[#000000DE]"
                  >
                    As the flag bearer of traditions and technologies and serving society with innovations, our company stands tall in presenting users with the ultimate space for joy, celebrations, and creation.
                    <br />
                    So do not miss out on this auspicious celebration of virtual immersion, lights, and joy!
                    Visit the VYUG metaverse website to join this exciting Diwali celebration

                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex gap-5 items-center">
                <button
                  onClick={() => navigate("/buzz/announcements")}
                  className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase"
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
                  <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm md:text-base uppercase">
                    Share <ShareIcon fontSize="25px" />
                  </button>
                </RWebShare>
              </div>
            </div>
          </div>
          <div className="hidden w-full lg:w-[35%] lg:flex items-center justify-center lg:justify-end gap-5">
            <div className="h-40 sm:w-80 w-40 flex justify-center lg:justify-end items-center sm:h-80">
              <img className="h-[100%]" src={diwaliAnnouncement} alt="VYUG Launches The Airdrop of Revolution"
                aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AnnounceData = () => {
  const [position, setPosition] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
        <title>Announcement - VYUG Metaverse</title>
        <meta name="description" content="Announcement" />
        <meta name="keywords" content="Announcement" />
        <meta property="og:title" content="Announcement" />
        <meta property="og:description" content="Announcement" />
        <link
          rel="canonical"
          href={`https://www.vyugmetaverse.com/buzz/announcement/${id}`}
        />
      </Helmet>
      <div className="min-h-screen pb-20 overflow-x-hidden">
        <Header isTransparent={position} isHeaderText={false} />
        <div className="w-full -z-10 h-[50vh] relative">
          <img
            className="h-[100%] w-[100%] object-cover"
            src={announcementBg}
            alt="BG Announcements"
            aria-hidden="true"
          />
          <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center"></div>
        </div>
        {pathname === "/pages/announcement/vyug-enters-new-arenas-with-beta" ? (
          <Announcement1 navigate={navigate} />
        ) : pathname ===
          "/buzz/announcement/vyug-launches-the-airdrop-of-revolution" ? (
          <Announcement2 navigate={navigate} />
        ) : pathname === "/buzz/announcement/vyug-jackpot-announcement" ? (
          <Announcement3 navigate={navigate} />
        ) : pathname === "/buzz/announcement/vyug-token-deployed-on-testnet" ? (
          <Announcement4 navigate={navigate} />
        ) : pathname === "/buzz/announcement/vyug-token-deployed-on-mainnet" ? (
          <Announcement5 navigate={navigate} />
        ) : pathname ===
          "/buzz/announcement/vyug-announces-the-vyug-token-presale" ? (
          <Announcement6 navigate={navigate} />
        ) : pathname ===
          "/buzz/announcement/closure-of-the-successful-vyug-airdrop" ? (
          <Announcement7 navigate={navigate} />
        ) :
          pathname ===
            "/buzz/announcement/finance-meets-the-metaverse-the-vyug-presale-is-live" ? (
            <Announcement8 navigate={navigate} />
          ) : (
            pathname ===
            "/buzz/announcement/celebrate-the-first-ever-metaverse-diwali-with-vyug" && (
              <Announcement9 navigate={navigate} />
            )
          )
        }
      </div>
      <Footer />
    </>
  );
};

export default AnnounceData;
