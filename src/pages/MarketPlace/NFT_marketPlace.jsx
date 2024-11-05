import React, { useEffect, useState } from "react";
import Header from "../../components/Head";
import SideIcon from "../../components/side-icon";
import nft from "../../images/nft.svg";
import { InputAdornment, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Searchbar from "../../components/Searchbar";
import Footer from "../../components/Footer";
import { protectedApiPost } from "../../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";
import { Helmet } from "react-helmet-async";

const NFT_marketPlace = () => {
  const [position, setPosition] = useState(false);
  const [emailData, setEmailData] = useState("");

  const handleSubmit = async (event) => {
    if (!emailData) {
      toast.error(
        <ToastError data={"Email field cannot be empty"} />,
        ErrorStyling
      );
      return;
    }

    try {
      const response = await protectedApiPost(`users/newuser`, {
        email: emailData,
      });
      if (response.status === 200) {
        toast.success(
          <ToastSuccess data={"Your email has been registered"} />,
          SuccessStyling
        );
      }
    } catch (error) {      
      toast.error(
        <ToastError
          data={
            error?.response.data.message.message ||
            "An error occurred. Please try again"
          }
        />,
        ErrorStyling
      );
    }
  };

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
        <title>VYUG NFT Marketplace - VYUG Metaverse</title>
        <meta name="description" content="VYUG NFT Marketplace" />
        <meta name="keywords" content="VYUG NFT Marketplace" />
        <meta property="og:title" content="VYUG NFT Marketplace" />
        <meta property="og:description" content="VYUG NFT Marketplace" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/trade-center/market-place"
        />
      </Helmet>
      <div className="min-h-screen">
        <Header isTransparent={position} isHeaderText={true} />
        <SideIcon />
        <div className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto flex flex-col mt-40 justify-center gap-2 sm:gap-4 items-center">
          <img
            className="transition duration-500 ease-in-out contrast-[100%] brightness-0 hover:brightness-[1] hover:contrast-[1] hover:scale-110 pb-5"
            src={nft}
            alt="NFT_Marketplace" aria-hidden="true"
          />
          <Typography
            variant="h2"
            className="header text-3xl text-center sm:text-3xl lg:text-[45px]"
          >
            VYUG NFT Marketplace
          </Typography>
          <Typography
            variant="h2"
            className="header text-sm md:text-2xl pb-10 sm:pb-20 font-normal"
          >
            Unlock a World of Digital Assets
          </Typography>
          <Typography
            variant="subtitle1"
            component={"p"}
            className="header text-[#111113] text-sm md:text-base font-bold text-center"
          >
            Coming Soon: Your Gateway to Ownership in VYUG
          </Typography>
          <Typography
            variant="subtitle1"
            component={"p"}
            className="description text-sm md:text-base text-[#303030] text-center pb-4"
          >
            The VYUG NFT Marketplace is currently in development, and we're
            thrilled to introduce a vibrant platform where you can buy, sell,
            and trade a diverse range of digital assets. From stunning
            properties and unique collectibles to innovative wearables, our
            marketplace will empower you to enrich your VYUG experience.
          </Typography>
          <div className="flex justify-center text-center items-start gap-3">
            <FiberManualRecordIcon fontSize="5px" className="mt-1" />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm md:text-base text-center"
            >
              <b>Buy and Sell Properties : </b> Explore a wide range of virtual
              real estate, from prime land parcels to unique properties within
              the VYUG metaverse.
            </Typography>
          </div>
          <div className="flex justify-center text-center items-start gap-3">
            <FiberManualRecordIcon fontSize="5px" className="mt-1" />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm md:text-base text-center"
            >
              <b>Collect Unique Assets : </b> Discover and trade one-of-a-kind
              digital collectibles and assets that enhance your virtual
              lifestyle.
            </Typography>
          </div>
          <div className="flex justify-center text-center items-start gap-3">
            <FiberManualRecordIcon fontSize="5px" className="mt-1" />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm md:text-base text-center"
            >
              <b>Wearables and Customizations : </b> Personalize your avatar
              with exclusive wearables and customization options, allowing you
              to express your unique style.
            </Typography>
          </div>
          <Typography
            variant="subtitle1"
            component={"p"}
            className="description pt-4 text-sm md:text-base text-[#303030] text-center"
          >
            <b>Stay tuned</b> as we prepare to launch this exciting platform.
            The VYUG NFT Marketplace is designed to redefine digital ownership,
            offering a vibrant and immersive space for you to connect, create,
            and thrive. We can't wait to share more with you soon!
          </Typography>
        </div>
        <div className="py-16 md:py-20 flex justify-center items-center flex-col">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-lg sm:text-xl lg:text-2xl"
          >
            Get All The Latest
          </Typography>
          <Typography
            variant="h2"
            className="header text-xl sm:text-2xl lg:text-3xl md:font-extrabold"
          >
            News & Updates
          </Typography>
          <div className="md:w-[60%] mx-auto w-[95%] mt-10">
            <Searchbar
              onSearch={setEmailData}
              placeholder={"Enter Your E-mail"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <button
                      onClick={handleSubmit}
                      className="py-2 px-4 lg:px-10 rounded-3xl description text-[#fff] text-sm sm:text-base bg-[#242424] text-[#fff] ease-in-out hover:bg-[#6d6a6a] active:bg-[#242424]"
                    >
                      Subscribe
                    </button>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NFT_marketPlace;
