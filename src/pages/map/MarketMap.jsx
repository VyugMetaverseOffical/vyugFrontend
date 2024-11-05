import React, { useEffect, useState } from "react";
import SideIcon from "../../components/side-icon";
import Header from "../../components/Head";
import marketMap from "../../images/marketMap.svg";
import Searchbar from "../../components/Searchbar";
import Footer from "../../components/Footer";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { InputAdornment, Typography } from "@mui/material";
import { protectedApiPost } from "../../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";
import { Helmet } from "react-helmet-async";

const MarketMap = () => {
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
            error?.response.data.message.error ||
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
        <title>VYUG Metaverse Map - VYUG Metaverse</title>
        <meta name="description" content="VYUG Metaverse Map" />
        <meta name="keywords" content="VYUG Metaverse Map" />
        <meta property="og:title" content="VYUG Metaverse Map" />
        <meta property="og:description" content="VYUG Metaverse Map" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/map" />
      </Helmet>
      <div className="min-h-screen">
        <Header isTransparent={position} isHeaderText={true} />
        <SideIcon />
        <div className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto flex flex-col mt-40 justify-center gap-2 sm:gap-4 items-center">
          <img
            className="w-[30%] sm:w-[15%] transition duration-500 ease-in-out contrast-[100%] brightness-0 hover:brightness-[1] hover:contrast-[1] hover:scale-110 pb-5"
            src={marketMap}
            alt="Map Icon"
          />
          <Typography
            variant="h2"
            component={"h1"}
            className="header text-3xl text-center sm:text-3xl lg:text-[45px]"
          >
            VYUG Metaverse Map - Coming Soon!
          </Typography>
          <Typography
            variant="subtitle1"
            component={"h6"}
            className="header text-sm md:text-xl text-center pb-10 sm:pb-12 font-normal"
          >
            Unveiling Soon: The 3D Map of VYUG Metaverse
          </Typography>
          <Typography
            variant="subtitle1"
            component={"p"}
            className="description text-sm md:text-base text-[#303030] text-center"
          >
            We're hard at work crafting a revolutionary 3D map of the VYUG
            Metaverse. This immersive and interactive experience will be unlike
            anything you've seen before, bringing our expansive digital universe
            to life.
          </Typography>
          <Typography
            variant="subtitle1"
            component={"h3"}
            className="header text-[#111113] text-xl pt-14 pb-3 sm:text-2xl lg:text-3xl font-bold text-center"
          >
            What to Expect
          </Typography>
          <div className="flex justify-start items-strat gap-3">
            <FiberManualRecordIcon fontSize="5px" />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm md:text-base text-center"
            >
              <b>Explore a New World : </b> Navigate through the dynamic and
              vibrant landscapes of VYUG
            </Typography>
          </div>
          <div className="flex justify-start items-start gap-3">
            <FiberManualRecordIcon fontSize="5px" />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm md:text-base text-center"
            >
              <b>Discover Hidden Gems : </b> Find unique locations,
              opportunities, and experiences
            </Typography>
          </div>
          <div className="flex justify-start items-start gap-3">
            <FiberManualRecordIcon fontSize="5px" />
            <Typography
              variant="subtitle2"
              component={"p"}
              className="description text-sm md:text-base text-center"
            >
              <b>Interactive Features : </b> Engage with the environment and
              unlock exclusive content
            </Typography>
          </div>
          <Typography
            variant="subtitle1"
            component={"h3"}
            className="header text-[#111113] text-xl pt-14 pb-3 sm:text-2xl lg:text-3xl font-bold text-center"
          >
            Stay Tuned
          </Typography>
          <Typography
            variant="subtitle1"
            component={"p"}
            className="description text-sm md:text-base text-[#303030] text-center"
          >
            Follow us on our social media channels and subscribe to our
            newsletter for the latest news and sneak peeks. The future is almost
            here, and we can't wait for you to be a part of it!
          </Typography>
          <Typography
            variant="subtitle1"
            component={"h3"}
            className="header text-[#111113] text-xl pt-14 pb-3 sm:text-2xl lg:text-3xl font-bold text-center"
          >
            Join Us on This Adventure:
          </Typography>
          <Typography
            variant="subtitle1"
            component={"p"}
            className="description text-sm md:text-base text-[#303030] text-center"
          >
            Follow us on our social media channels and subscribe to our
            newsletter for the latest news and sneak peeks. The future is almost
            here, and we can't wait for you to be a part of it!
          </Typography>
        </div>
        <div className="py-16 md:py-20 flex justify-center items-center flex-col">
          <Typography
            variant="subtitle2"
            component={"h4"}
            className="description text-lg sm:text-xl lg:text-2xl"
          >
            Get All The Latest
          </Typography>
          <Typography
            variant="h2"
            component={"h3"}
            className="header text-xl sm:text-2xl lg:text-3xl md:font-extrabold"
          >
            News & Updates
          </Typography>
          <div className="md:w-[60%] mx-auto w-[95%] mt-10">
            <Searchbar
              onSearch={setEmailData}
              placeholder={"Enter Your Mail"}
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

export default MarketMap;
