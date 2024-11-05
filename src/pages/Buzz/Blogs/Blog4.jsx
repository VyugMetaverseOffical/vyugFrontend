import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import blogBg from "../../../images/Blog/blogBg.webp";
import blog4 from "../../../images/Blog/blog4.webp";
import blog4_2 from "../../../images/Blog/blog4_2.webp";
import blog4_3 from "../../../images/Blog/blog4_3.webp";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { ComingSoon } from "../../../components/ComingSoon";

function Blog4() {
  const [status, setStatus] = useState(-1);
  const navigate = useNavigate();

  return (
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
          October 16, 2024 | COMMUNITY
        </Typography>
        <Typography
          variant="h1"
          component={"h1"}
          className="header text-[#111113] text-start text-3xl sm:text-4xl md:text-[45px] mt-3"
        >
          Best Crypto Presale: Participate in the VYUG Token Presale!
        </Typography>
        <p className="w-[100%] flex justify-start items-start my-4 mt-6">
          <img
            className="h-[100%] w-[100%] object-contain object-left"
            src={blog4}
            alt="Experience First-ever Dussehra Celebration in the VYUG Metaverse!"
            aria-hidden="true"
          />
        </p>
        <div className="w-full pt-6 flex flex-col gap-4">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize"
          >
            VYUG, a game-changer metaverse platform, is launching the{" "}
            <a
              href="https://www.vyugmetaverse.com/buzz/blogs/best-crypto-presale-participate-in-the-vyug-token-presale"
              className="font-bold text-[#006BFF]"
            >
              Best Crypto Presale
            </a>{" "}
            of VYUG tokens. This upcoming presale is set to transform the
            landscape of the metaverse and crypto. We are aiming at providing a
            digital currency that enables everything from virtual real estate
            purchases to in-game transactions. The <strong>VYUG Token</strong>{" "}
            has all the benefits and features that one looks for in a metaverse
            token.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize"
          >
            Our platform is a unique metaverse stage that aims to provide you
            with the benefits of education, corporate, commerce, etc., all in
            one place. VYUG is the vision forward. The VYUG token is the key
            facilitator for all future digital transactions. Let’s dive in to
            get more insights on why our{" "}
            <strong>Upcoming Crypto Presale</strong> is the best:
          </Typography>
          <Typography
            variant="h2"
            component={"h2"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            The Best Crypto Presale - VYUG Token
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            The VYUG presale is a golden chance to grab for early investors.
            Join hands with a project that is already generating buzz in the
            Web3 community. We aim to foster the space of modern technologies
            like the metaverse and virtual reality. With the upcoming boom in
            the Web3 industry, our VYUG Token Presale is one such promising
            event that can set new standards. This presale might become one of
            the <strong>Best crypto presales</strong> of today’s times.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Our VYUG token goes beyond the spaces of transactions. We want the
            realms of finance and technology to be merged with advanced
            facilitators. <strong>VYUG presale</strong> is an exciting
            opportunity for investors worldwide to stake in the future of
            finance. The economies are evolving with the onset of crypto and NFT
            marketplace integration. With our upcoming crypto presale, we will
            successfully tap into this evolution.
          </Typography>
          <Typography
            variant="h2"
            component={"h2"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            The High Utility VYUG Token
          </Typography>
          <p className="w-[100%] flex justify-start items-start my-4">
            <img
              className="h-[100%] w-[100%] object-contain object-left"
              src={blog4_2}
              alt="Experience First-ever Dussehra Celebration in the VYUG Metaverse!"
              aria-hidden="true"
            />
          </p>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            The Vyug token is more than just a transaction tool. Our token is an
            integrated digital asset that is vital for unlocking the potential
            of crypto and Web3 space together. This token will support all kinds
            of NFT transactions. Users can buy the tokens from our{" "}
            <strong>
              <i>VYUG UCE Wallet</i>
            </strong>
            , which is a safeguard wallet for all kinds of trading and NFT-based
            transactions. Here’s a quick look at a few of the tonnes of{" "}
            <a
              href="https://www.vyugmetaverse.com/vyug-token"
              className="font-bold text-[#006BFF]"
            >
              Features of the VYUG token
            </a>
            :
          </Typography>
          <ol className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize">
            <li>
              1. <i>Key to De-Fi</i>: The VYUG token is the key to de-fi, i.e.,
              decentralized finance. This means that you can use VYUG tokens for
              all the aspects of future digital finance.
            </li>
            <li>
              2. <i>High Supply Volume</i>: This token comes with a total supply
              volume of 3.5 billion, which is a huge pool of volume.
            </li>{" "}
            <li>
              3. <i>Staking</i>: You can stake these tokens for high rewards in
              the future. The presale will have VYUG tokens at discounted
              prices, and these prices are bound to rise in the future.
            </li>{" "}
            <li>
              4. <i>Swap-Off</i>: Users will be able to swap off any crypto
              token or coin of their choice with the VYUG tokens.
            </li>{" "}
            <li>
              5. <i>Range of Transactions</i>: You can buy virtual assets, buy
              NFTs, and even use these tokens for any other kind of transaction
              in the crypto space.
            </li>{" "}
            <li>
              6. <i>Rise in Demand</i>: VYUG is seeing a high rise in demand.
              Users across the globe are joining hands with us. Hence, the
              demand for VYUG tokens will rise ultimately.
            </li>
          </ol>
          <Typography
            variant="h3"
            component={"h3"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            Why Join the VYUG Presale?
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            One of the most prominent reasons for joining our presale is our
            platform itself. The VYUG metaverse is one such platform that will
            transform the definitions of metaverse. Unlike other platforms, we
            offer you a replica of the real world. We bring you the most
            advanced and immersive stage to enhance your virtual reality
            experience.
          </Typography>
          <p className="w-[100%] flex justify-start items-start my-4">
            <img
              className="h-[100%] w-[100%] object-contain object-left"
              src={blog4_3}
              alt="Experience First-ever Dussehra Celebration in the VYUG Metaverse!"
              aria-hidden="true"
            />
          </p>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            With the trust of the Web3 industry, we want to barge upon the next
            phase of digital identity, which includes our VYUG token and NFT
            marketplace. If you are the one who is looking for{" "}
            <strong>good crypto investments</strong>, our presale is a good way
            to begin with. Our presale is an initial entry into the world of
            digital finance. Our whitepaper, which we launched recently, has
            showcased our visions and futuristic concepts to the industry. The
            VYUG token presale is one such attempt. Here’s why one should join
            our presale:
          </Typography>
          <ol className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize">
            <li>
              1. <i>Highly Discounted Price</i>: The VYUG tokens will be
              launched in the presale at a highly discounted price of $0.044.
            </li>
            <li>
              2. <i>Staking Opportunity</i>: Buyers can buy a high amount of
              tokens in the presale and stake them for a longer time to get
              maximum returns.
            </li>{" "}
            <li>
              3. <i>NFT token</i>: For users who perform NFT transactions
              frequently, this token might be a good investment to facilitate
              upcoming transactions.
            </li>{" "}
            <li>
              4. <i>Diverse Availability</i>: This token will be available on
              multiple chains, including Solana, Ethereum, BNB, etc.
            </li>{" "}
            <li>
              5. <i>Potential of Growth</i>: These tokens might gain up to 10
              times their initial value.
            </li>{" "}
          </ol>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            There’s much more to this list, making our presale the{" "}
            <strong>Best Crypto Presale</strong>. VYUG believes in advancing the
            pace of the growth of digital technologies. Our platform has
            problem-solving features and aims to set up an innovative digital
            space targeted at fostering the future.
          </Typography>
          <Typography
            variant="h4"
            component={"h4"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            End Note: Don’t miss the VYUG Presale
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            VYUG aims to broaden decentralized finance. We invite you to get
            involved with the most promising metaverse platform. With our{" "}
            <a
              href="https://www.vyugmetaverse.com/buzz/blogs/vyug-token-presale"
              className="font-bold text-[#006BFF]"
            >
              Crypto Presale
            </a>{" "}
            Live moment, we probably will announce the onset of a new-age token
            into the markets. Pair up with VYUG and attain the maximum potential
            of the future of digital finance and the metaverse.
          </Typography>
          <div className="flex gap-5 items-center mt-6">
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
      {status === 0 && <ComingSoon status={status} setStatus={setStatus} />}
    </div>
  );
}

export default Blog4;
