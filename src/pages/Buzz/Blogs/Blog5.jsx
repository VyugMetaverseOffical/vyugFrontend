import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import blogBg from "../../../images/Blog/blogBg.webp";
import blog5 from "../../../images/Blog/blog5.webp";
import blog4_2 from "../../../images/Blog/blog4_2.webp";
import blog4_3 from "../../../images/Blog/blog4_3.webp";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { ComingSoon } from "../../../components/ComingSoon";

function Blog5() {
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
          October 18, 2024 | COMMUNITY
        </Typography>
        <Typography
          variant="h1"
          component={"h1"}
          className="header text-[#111113] text-start text-3xl sm:text-4xl md:text-[45px] mt-3"
        >
          Embark the Journey to the Future: Overview of the VYUG Metaverse
        </Typography>
        <p className="w-[100%] flex justify-start items-start my-4 mt-6">
          <img
            className="h-[100%] w-[100%] object-contain object-left"
            src={blog5}
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
            We are a groundbreaking metaverse platform designed to solve the limitations of traditional digital experiences.
             At VYUG, we aim to be valuable and accessible to all segments of society.
              We want to match steps with time and create a universe that pairs up with the physical world and becomes an alternative for it in the future. 

          
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize"
          >
        Get handy with <b>Hyper-Realistic Universes,</b> advanced 3D environments, and immersive realities. 
        With <b>15+ sectors</b>, including education, commerce, and tourism, VYUG creates virtual regions inspired by nature, opening new possibilities for industries to innovate, connect, and thrive in an interconnected digital future.
          </Typography>
          <Typography
            variant="h2"
            component={"h2"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
           The Virtual YUG: Where You Belong
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
           The name ‘VYUG’ was derived from the Hindi word ‘Yug’, which means era. VYUG means virtual era.
            We believe that the future belongs to technology. We’ve set up VYUG as the ultimate definition of metaverse.
            It’s time to move beyond the screens you see and get immersed in the new era of technology.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Often termed ‘Web3’, the <b>Metaverse Technology</b> takes you to the advanced version of the internet and screens.
             We cut apart the limitations and boundaries that Web2 has faced. 
             VYUG brings people closer by breaking down physical barriers, allowing us to collaborate and share experiences with anyone, anywhere in the world.
          </Typography>
          <Typography
            variant="h2"
            component={"h2"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            The First-Ever Open Metaverse
          </Typography>
      
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
We bring you the first-ever <b>Open Metaverse</b>. This is the first time a metaverse platform has come up with an open space. VYUG gives you <b>10+ regions, 85+ countries</b>, and much more in the metaverse.          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
            Built with concepts of realism, we bring you the ultimate fusion space, where imaginations find reality, or say a ‘virtual’ reality. 
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
Till now, you must have browsed through the <b>Metaverse Platforms</b> with confined spaces. We break the shacks and bring you the ultimate space, where you can set up anything you want, visit anything you wish to, and browse through a modern era filled with futuristic hyper-realistic elements. No other platform in the metaverse and <b>VR industry</b> has operated in such a wide spectrum till now.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
We offer endless opportunities for learning, creativity, innovation, entrepreneurship, and whatnot. VYUG is the ultimate space that sets new standards in the way people connect, create, and thrive. It is going to be your prime identity that you carry forward in the future.          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
           We bring you the first-ever <b>Open Metaverse</b>. This is the first time a metaverse platform has come up with an open space.
            VYUG gives you <b>10+ regions, 85+ countries</b>, and much more in the metaverse.
          </Typography>
          
          <Typography
            variant="h3"
            component={"h3"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            The Most Advanced Hyper-Realistic Universe
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
           VYUG brings you the <b>First-Ever Hyperrealistic Universe</b>. Say goodbye to the traditional technologies. Get immersed in the futuristic and most advanced versions of technology. Our virtual universe will have <b>Modern 3-D Elements</b>, virtual reality elements, and much more.
           We have envisioned the metaverse to be extremely immersive and interactive. Our metaverse is an engaging experience that has never been seen before. VYUG Metaverse is the new face of <b>Virtual Reality</b>. Metaverse is the most immersive technology that provides a virtual space to learn, collaborate, interact, play, and do much more. 
          </Typography>
          <Typography
            variant="h3"
            component={"h3"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            The Perfect Stew of Metaverse Sectors
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
          VYUG is the first metaverse to have a virtual universe that consists of <b>15+ sectors</b>. We have brought in a platform that serves nearly every sector of society. Be it the sector of <b>Corporate in the Metaverse</b> or <a
              href="https://www.vyugmetaverse.com/sectors/virtual-reality-in-education"
              className="font-bold text-[#006BFF]"
            >
              Education in the Metaverse
            </a>, get it all with our platform.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
We want our pioneer platform to go beyond the norms of technical, gaming, and development niches and collaborate with almost all industries across the world.          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
Our sectors include a vast blend of commerce, corporate, gaming, entertainment, tourism, hospitality, sustainability, and much more. Whether you want to play, work, learn, rest, club, or do any other activity, each of your desires will be solved with our platform. 
         </Typography>
<Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
Get perks of immersive classrooms, virtual offices, <b>VR Gaming</b>, virtual commerce, <b>Tourism in the Metaverse</b>, and whatnot. VYUG is the ultimate one-stop solution to cater to all the metaverse needs and demands.         </Typography>
          
          <Typography
            variant="h4"
            component={"h4"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            VYUG Tokenomics: The Future of Finance in the Metaverse
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
           VYUG tokenomics is our modern approach to transforming the definitions and utilities of <b>Finance in the metaverse</b>. Till now, digital finances have been revolving around payment gateways, authentications, and risky crypto-based transactional spaces.
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
VYUG, for the first time, has brought a revolution to this. We have brought a unique space that includes all the features that need to be there for the integration of a futuristic metaverse with an inclusion of the future economy.  
         </Typography>
         <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
Talking about the <b>VYUG Wallet</b> is the most advanced and secure interface built to support the new dimensions of finance. It is a singular platform to integrate all your transactions. Be it crypto trading, staking in different currencies, or performing NFT-based transactions, the VYUG wallet will facilitate it all.          </Typography>
         <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
The <b>NFT Marketplace of VYUG</b> is a unique platform built to uplift the whole transactional space of digital assets. With our metaverse booming and a vast virtual sector that’s all yours to explore, we believe our NFT marketplace will rise.         </Typography>
<Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
There’s a lot more to our Tokenomics. We have built a modern space that’s ready to establish futuristic forms of trade. Our tokenomics will be the best space provided to transform from old-school finances to the new era of digital finance. 
    </Typography>
    <Typography
            variant="h4"
            component={"h4"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            The Future VYUG Token: Key to Metaverse Economy
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
The VYUG token is the ultimate token that you need in your purses. This token fulfils all your needs and demands of the future.     </Typography>
    <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
It’s time to get the most advanced metaverse token into your wallets. The VYUG token is the new face of decentralized finance. Get ownership of tokens, which will completely change the way you look at metaverse tokens. Our VYUG token is the <b>Best Metaverse Token to invest</b> in. We have built it on the most advanced features and have made it the ultimate high-utility and the ultimate secure token that you need. 
</Typography>
<Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
This token has the utilities and functionalities to go beyond traditional transactions. It offers a range of services and features never seen before. Here’s a quick look at a few features of the
</Typography>
<Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
<a
              href="https://www.vyugmetaverse.com/vyug-token"
              className="font-bold text-[#006BFF]"
            >
              VYUG Token:
            </a>
</Typography>
<ol className="description text-[#6D6A6A] text-left text-sm md:text-base capitalize">
            <li>
              <b>A Plethora of Tasks</b>: The VYUG token can be used for multiple tasks. Buy virtual lands, buy virtual assets, make in-platform purchases, and much more.
            </li>
            <li>
              <b>High Potential</b>: With metaverse and NFT growing. The VYUG token has the potential to grow exponentially up to 50X of its initial values. 
            </li>{" "}
            <li>
            
            <b>Security and Convenience</b>: The VYUG token is most secure and encrypted. It can only be bought and traded through the VYUG Wallet, which makes a uniform setup for secure transactions. 
            </li>{" "}
            <li>
            <b>Range of Availability</b>: The VYUG token will be available on 4 different chains. These chains are Solana, Ethereum, BNB, and Polygon.
            </li>{" "}
            <li>
            <b>Swap-Off Features</b>: The VYUG tokens can be swapped with many other crypto coins for easy and convenient third-party transactions.  
            </li>{" "}

          </ol>
          <Typography
            variant="h4"
            component={"h4"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            The Fusion of Advanced Virtual Cities
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
VYUG has a virtual universe that is spread around an area of <b>1203 sq. km</b>. This is the <b>Biggest space created in any metaverse</b>. We are envisioned to create a replica of our mother Earth in our metaverse. 
</Typography>
    <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
We have always believed in the concept of <b>‘realism’</b>. This concept has helped us to bring a fusion of imagination and real-world elements. Our regions are the most advanced natural regions in the metaverse. We have built deserts, forests, mountains, plains, and islands. These natural regions represent Earth’s core regions and make you feel like you’re in the real world for developing your future. 
</Typography>
<Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
‘Nexara’, the first virtual city of VYUG, is an urban landscape that represents the vision of a city of the future. We've got different concepts for what a city of 2060s will look like. Nexara resembles these concepts. It is the <b>most advanced virtual city</b> that is made to aid all kinds of future innovations and modern developments. 
</Typography>
<Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
The next addition to this elite list is the city of ‘Haas’. We will be soon coming with this city, which is named after the Hindi word ‘itihaas’. This city will include a blend of history, mythology, and ancient milestones. This will make you familiar with the historical events and the insights of the big revolutions and take you to the ultimate journeys of mythological scripts. 
</Typography>
<Typography
            variant="h4"
            component={"h4"}
            className="header text-[#111113] text-start text-xl sm:text-2xl md:text-[30px] mt-5 mb-2"
          >
            The Innovative Future
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
VYUG is a bold story told. We believe in transforming the technology. Our innovations have just kicked off. Our slogan is <b>“Where You Belong."</b> This slogan in itself says that this is the future. People have always been welcoming of modernity and innovations, and the world of AI and the metaverse is one such innovation only. I feel that in the years to come, everyone will have a role to play in this innovation. And with VYUG, we try to become their aids in this transformation journey into the future
</Typography>
<Typography
            variant="subtitle2"
            component={"p"}
            className="description text-left text-[#6D6A6A] text-sm md:text-base capitalize"
          >
We want to establish{" "}<a
              href="https://vyugmetaverse.com/"
              className="font-bold text-[#006BFF] text-underline"
            >
              VYUG 
            </a>{" "} as a place where people can create their own digital identities, build businesses, form communities, and experiment with new forms of creativity and expression. We want our platform to be the epitome of the metaverse, contributing to the evolution of digital society and bringing together people from all walks of life.
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

export default Blog5;
