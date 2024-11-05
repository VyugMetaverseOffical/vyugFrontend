import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import blogBg from "../../../images/Blog/blogBg.webp";
import blog3 from "../../../images/Blog/blog3.webp";
import blog3_2 from "../../../images/Blog/blog3_2.jpg";
import blog3_3 from "../../../images/Blog/blog3_3.jpg";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { ComingSoon } from "../../../components/ComingSoon";

function Blog3() {
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
          October 8, 2024 | COMMUNITY
        </Typography>
        <Typography
          variant="h1"
          component={"h1"}
          className="header text-[#111113] text-start text-3xl sm:text-4xl md:text-[45px] mt-3"
        >
          VYUG launches first of its kind Token Presale 2024!
        </Typography>
        <p className="w-[100%] flex justify-start items-start my-4 mt-6">
          <img
            className="h-[100%] w-[100%] object-contain object-left"
            src={blog3}
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
            VYUG Metaverse has reached a stage where it is launching its very
            first VYUG <strong>Token Pre-Sale</strong> this festive season! The
            step comes as a pivotal development point for the VYUG Metaverse
            ecosystem. To be launched on 15th October, 2024, this event propels
            the early access opportunity to investors and early adopters to
            become a part of the VYUG ecosystem by acquiring VYUG Tokens at a
            much hyped discounted price of $0.044 almost half of the listed
            price of $0.088.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize"
          >
            By buying the <strong>VYUG Token</strong> during this pre-sale,
            investors will help the VYUG Ecosystem to grow and build towards the
            official launch of its full-fledged Metaverse soon. By participating
            in the{" "}
            <a
              href="https://www.vyugmetaverse.com/crypto-presale"
              className="font-bold text-[#006BFF]"
              // onClick={(e) => {
              //   e.preventDefault()
              //   setStatus(0);
              // }}
            >
              Crypto Presale Live
            </a>
            , you aren’t just helping the VYUG Token grow, but are also helping
            the entire Massively Multiplayer Open World of VYUG to see the light
            of the day!
          </Typography>
          <Typography
            variant="h2"
            component={"h2"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            VYUG Token Overview
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            VYUG, an SPL token based on the Solana blockchain, is engineered for
            compatibility with BSC, Polygon, and Ethereum networks, ensuring
            widespread accessibility. The pre-sale will unfold in three
            strategic phases, accommodating investments from $1 million to $10
            million. This three-pronged phased approach promotes controlled
            growth and equitable distribution of the 3% of total tokens
            allocated for the pre-sale.
          </Typography>
          <Typography
            variant="h3"
            component={"h3"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            Utility of the VYUG Token
          </Typography>
          <p className="w-[100%] flex justify-start items-start my-4">
            <img
              className="h-[100%] w-[100%] object-contain object-left"
              src={blog3_2}
              alt="Experience First-ever Dussehra Celebration in the VYUG Metaverse!"
              aria-hidden="true"
            />
          </p>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            The VYUG token acts as a cornerstone of the VYUG Metaverse,
            facilitating a wide array of activities and transactions:
          </Typography>
          <ol className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize">
            <li>
              1. Transactional Currency: By using the VYUG Token, you can buy
              and sell Virtual assets in the VYUG Metaverse.
            </li>
            <li>
              2. Virtual Land Ownership: With the help of the VYUG Token, you
              can own and sell Virtual pieces of land in the VYUG Metaverse.
            </li>{" "}
            <li>
              3. Asset Acquisition: VYUG Token can be used to acquire virtual
              assets in the Massively Multiplayer Open World of VYUG Metaverse.
            </li>{" "}
            <li>
              4. Staking and Rewards: VYUG Tokens are the only currency used in
              the VYUG Metaverse and thus ownership of these makes you eligible
              for stakes and rewards in the game.
            </li>{" "}
            <li>
              5. Governance Participation: By owning the VYUG Tokens, you can
              stake in the governance of the VYUG Metaverse and hold rights as
              real citizens of the Metaverse.
            </li>{" "}
            <li>
              6. NFT Marketplace Integration: Powers an NFT ecosystem for
              creating, trading, and collecting digital assets.
            </li>{" "}
            <li>
              7. In-Game Economy: With the help of the VYUG Tokens, you can play
              games inside the VYUG Metaverse and do fast microtransactions to
              facilitate and fuel the in game economy.
            </li>
            <li>
              8. Event Access: The VYUG Token enables you to participate in
              exclusive events, competitions, and gatherings.
            </li>{" "}
            <li>
              9. Marketplace Transactions: The VYUG Metaverse contains a
              sprawling marketplace where you can buy and sell assets with the
              help of the VYUG Token
            </li>
          </ol>
          <Typography
            variant="h3"
            component={"h3"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            Why Participate in the Crypto Pre-Sale Live?
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Participating in the VYUG Token Crypto Pre-sale Live offers several
            compelling advantages:
          </Typography>
          <ol className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize">
            <li>
              1. Significant Price Discount: Secure tokens at $0.044, doubling
              the potential value.
            </li>
            <li>
              2. Early Adopter Advantage: Position at the forefront of the VYUG
              Metaverse.
            </li>{" "}
            <li>
              3. Diverse Ecosystem Engagement: Access a wide range of metaverse
              activities.
            </li>{" "}
            <li>
              4. Multi-Chain Compatibility: Benefit from integrations across{" "}
              <strong>Solana, BSC, Polygon, and Ethereum</strong>.
            </li>{" "}
            <li>
              5. Governance Rights: Influence the VYUG Metaverse's future
              direction.
            </li>{" "}
            <li>
              6. Potential for Growth: As the ecosystem expands, demand for VYUG
              tokens may increase.
            </li>{" "}
            <li>
              7. Exclusive Features: Enjoy{" "}
              <strong>zero-fee internal transactions</strong> with the VYUG
              Wallet.
            </li>
            <li>
              8. Future Exchange Listings: Plans for December 2024 listings on
              Tier 1 exchanges to expand liquidity.
            </li>
          </ol>
          <Typography
            variant="h4"
            component={"h4"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            How to Participate
          </Typography>
          <p className="w-[100%] flex justify-start items-start my-4">
            <img
              className="h-[100%] w-[100%] object-contain object-left"
              src={blog3_3}
              alt="Experience First-ever Dussehra Celebration in the VYUG Metaverse!"
              aria-hidden="true"
            />
          </p>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Participating in the VYUG Token Presale is straightforward:
          </Typography>
          <ol className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize">
            <li>1. Visit the Official Website: Go to the Vyugmetaverse.com.</li>
            <li>
              2. Create an Account: Sign up and complete KYC for security
              purposes.
            </li>{" "}
            <li>
              3. Choose Your Investment Level: Make the decision to buy the
              level of VYUG Tokens.
            </li>{" "}
            <li>
              4. Select Payment Method: Select the payment method for purchase
              of the VYUG Tokens from the available cryptocurrencies.
            </li>{" "}
            <li>
              5. Complete the Transaction: Follow the given instructions and
              finalise your purchase.
            </li>{" "}
            <li>
              6. Receive Your Tokens: Tokens will be transferred to your
              designated wallet in real-time.
            </li>{" "}
            <li>
              7. Prepare for Utilisation: Engage with the VYUG Metaverse once
              tokens are listed on exchanges.
            </li>
          </ol>
          <Typography
            variant="h4"
            component={"h4"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            Conclusion
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            The VYUG Token Pre-Sale 2024 is an investment opportunity for early
            investors to get in early action of the{" "}
            <a
              href="https://www.vyugmetaverse.com/"
              className="font-bold text-[#006BFF]"
            >
              VYUG Metaverse
            </a>
            , which is a first of its kind Metaverse which contains a massively
            multiplayer open world with a deep lore and 10 different regions to
            explore, play, and work in. As the Metaverse evolves and VYUG grows
            to its utmost potential, you will remember being the part of a
            growing story from start to finish. And all of this can be done by
            now participating in the VYUG Crypto Pre-Sale, this October.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            The use cases of this token are many but the fun parts are:
          </Typography>
          <ol className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize">
            <li>1. Participate in the ever-growing VYUG Metaverse Ecosystem</li>
            <li>
              2. Become a part of the ever-expanding Metaverse in-game economy
            </li>
            <li>
              3. Own lands, buy virtual assets, sell your own game based NFTs,
              all by the help of the VYUG Token
            </li>
            <li>
              4. Socialize and pool your investments together to buy land in the
              VYUG Metaverse
            </li>
            <li>5. Exchange Tokens, buy/sell with each other at 0 gas price</li>
            <li>
              6. So, much and more, all by participating in the{" "}
              <a
                href="https://www.vyugmetaverse.com/buzz/blogs/vyug-token-presale"
                className="font-bold text-[#006BFF]"
              >
                VYUG Presale
              </a>
              this month!
            </li>
          </ol>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            As VYUG grows towards a multi-chain exchange and integration
            listings, early investors are bound to be held at an advantage. Not
            only will you attain Tokens at 50% off before the exchange listings,
            but also attain a preview of the Token’s liquidity, utility, and its
            potential of being World Token of the{" "}
            <strong>VYUG Metaverse</strong>
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            The VYUG <strong>Token Pre-sale</strong> is a chance to shape the
            future of digital interactions and experiences. As the metaverse
            continues to expand, VYUG token holders will be well-positioned to
            explore, create, and thrive in this new digital frontier.
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

export default Blog3;
