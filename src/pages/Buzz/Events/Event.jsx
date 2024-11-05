import React, { useEffect, useState } from "react";
import Header from "../../../components/Head";
import { Button, Divider, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import eventMan from "../../../images/eventMan.png";
import Footer from "../../../components/Footer";

const EventId = () => {
  const [position, setPosition] = useState(false);

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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this article",
          url: window.location.href,
        });
      } catch (err) {
        toast.error("Something went wrong !");
      }
    } else {
      toast.error("Something went wrong !");
    }
  };

  return (
    <div className="min-h-screen">
      <Header isTransparent={position} isHeaderText={false} />
      <div className="w-full -z-10 h-[50vh] relative">
        <img
          className="h-[100%] w-[100%]"
          src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
          alt=""
        />
        <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center"></div>
      </div>
      <div className="w-[80%] z-10 -mt-20 mx-auto rounded-xl bg-[#fff] flex flex-col md:flex-row justify-center gap-10 items-center px-10 py-10">
        <div className="w-full md:w-[60%] flex flex-col gap-6 sm:gap-10">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-xs sm:text-sm"
          >
            July 9, 2024 | COMMUNITY
          </Typography>
          <Typography
            variant="h1"
            className="header text-sm sm:text-lg lg:text-2xl"
          >
            Welcome to the Unveil of
            <p className="header text-base sm:text-xl lg:text-4xl font-extrabold">
              the greatest Metaverse
            </p>
          </Typography>
          <Divider
            sx={{
              mb: 1,
              width: 250,
              backgroundColor: "black",
            }}
          />
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-xs sm:text-sm"
          >
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </Typography>

          <div className="flex gap-5 items-center">
            <button className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm sm:text-base uppercase">
              Interested
            </button>
            <button
              onClick={handleShare}
              className="white-btn py-2 px-4 w-fit lg:px-10 description text-sm sm:text-base uppercase"
            >
              <ShareIcon />
            </button>
          </div>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-xs sm:text-sm"
          >
            <span className="font-extrabold">Venue :</span> 195 x 42 Auditorium,
            J Block, Nexara, VYU
          </Typography>
        </div>
        <div className="w-full md:w-[30%] flex items-center justify-center gap-5">
          <div className="h-40 sm:w-80 w-40 flex justify-center items-center sm:h-80">
            <img
              className="h-[100%]"
              src="https://s3-alpha-sig.figma.com/img/86b5/6a48/e45ea215607f093570d39479c81c9877?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRKZux~cpIQLvQ6XKR4638amim3f82olADeP72xUbw9UDqVLKEpXQeuutoulePF8sv1jQxqK0Q1cGsfzmS7lKcor2X6vOb6KjRfnYuyOoOiomjYrAJ3gsb4z3xvTE-gcbMLiyxX7qwxgaB~52LmCI7SZsrEv260y4JmqWq3DZoW87SWmVaPd3fJVQ53nsRJpDIb4tEBg8w6MHr3N9HbT3M7sbzmC5orSixGIHpGQbE44U664iqKpDfW2Ebbg99CZ8cXJRdBejGdm89JwwyKxQRG26Zm4RAf106gidnRafiiGPD3r-IoptPUWbw12blWaOOsjFkRs-4xXhG7huGxiNQ__"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#111113] w-full py-10 md:py-16">
        <p className="header uppercase font-black text-center text-[#1F1F21] text-4xl sm:text-[4.25rem] md:text-[5.rem] xl:text-[7.5rem] 2xl:text-9xl block">
          sponsors
        </p>
      </div>
      <div className="w-[60%] mx-auto py-10 md:py-16 flex flex-col gap-5">
        <Typography
          variant="subtitle2"
          component={"p"}
          className="header text-xs sm:text-sm font-bold"
        >
          Organized by:
        </Typography>
        <Typography
          variant="subtitle2"
          component={"p"}
          className="description text-xs sm:text-sm"
        >
          The Rocking Uniquehorns (TRU) are 9'990 NFTs rocking on the Ethereum
          Blockchain, randomly generated by combining over 300 regular,
          legendary and ultra rare traits.
        </Typography>
        <ul>
          {[
            "https://rockinguniquehorns.com",
            "https://discord.gg/rockinguniquehorns",
            "https://twitter.com/Uniquehorns_nft",
            "https://rockinguniquehorns.com",
          ].map((item, index) => (
            <li key={index}>
              <Typography
                variant="subtitle2"
                component={"p"}
                className="description text-xs sm:text-sm"
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[60%] mx-auto pb-10 flex flex-col gap-5">
        <Typography
          variant="subtitle2"
          component={"p"}
          className="header text-xs sm:text-sm font-bold"
        >
          Interested People :
        </Typography>
        <div className="flex items-center">
          {[eventMan, eventMan, eventMan, eventMan].map((item, index) => (
            <div key={index} className="w-10 h-10 -ml-2">
              <img className="h-[100%] w-[100%]" src={item} alt="" />
            </div>
          ))}
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-xs sm:text-sm font-bold ml-5"
          >
            + 15
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventId;
