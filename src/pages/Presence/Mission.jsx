import React, { useEffect, useState } from "react";
import Header from "../../components/Head";
import { Divider, InputAdornment, Typography } from "@mui/material";
import Searchbar from "../../components/Searchbar";
import Footer from "../../components/Footer";
import missionHead from "../../images/Mission/missionHead.svg";
import mission from "../../images/Mission/mission.svg";
import vission from "../../images/Mission/vission.svg";
import globe from "../../images/Mission/globe.svg";
import firstArrow from "../../images/Mission/firstArrow.svg";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";
import { Helmet } from "react-helmet-async";

const Mission = () => {
  const [position, setPosition] = useState(false);
  const [emailData, setEmailData] = useState("");

  const handleSubmit = async () => {
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
        <title>Mission/ Vision - VYUG Metaverse</title>
        <meta name="description" content="Mission/ Vision" />
        <meta name="keywords" content="Mission/ Vision" />
        <meta property="og:title" content="Mission/ Vision" />
        <meta property="og:description" content="Mission/ Vision" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/mission-vision"
        />
      </Helmet>
      <div className="min-h-screen">
        <Header isTransparent={position} isHeaderText={true} />
        <div className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto flex flex-col mt-40 justify-center gap-2 sm:gap-4 items-center">
          <img
            className="transition duration-500 ease-in-out contrast-[100%] brightness-0 hover:brightness-[1] hover:contrast-[1] hover:scale-110 pb-5"
            src={missionHead}
            alt={"Mission Head"}
            aria-hidden="true"
          />
          <Typography
            variant="h2"
            component={"h2"}
            className="header text-3xl text-center text-[#242424] sm:text-3xl lg:text-[45px]"
          >
            Unveil Our Vision and Mission
          </Typography>
          <Typography
            variant="subtitle1"
            component={"p"}
            className="description md:w-[70%] text-[#3E3E3E] text-center text-base md:text-lg pb-4"
          >
            Discover What Drives Us—Explore How Our Vision and Mission Inspire
            Our Innovations and Shape the Future
          </Typography>
          <Divider
            sx={{
              width: "20%",
              height: 5,
              borderRadius: 2,
              backgroundColor: "#242424",
            }}
            orientation="horizontal"
          />
          <button className="white-btn w-fit mx-auto py-3 my-4 px-4 md:px-7 rounded-3xl description">
            Explore Now
          </button>
          <Typography
            variant="subtitle1"
            component={"p"}
            className="description text-[#434343] text-center text-sm md:text-base pb-4"
          >
            Scroll down to explore more about us
          </Typography>
          <div className="w-full flex-col md:flex-row flex justify-between my-5 items-stretch">
            <div className="flex w-[90%] mx-auto md:w-[40%] flex-col justify-start items-center">
              <img
                className="transition duration-500 ease-in-out contrast-[100%] brightness-0 hover:brightness-[1] hover:contrast-[1] hover:scale-110 pb-5"
                src={mission}
                alt={"Mission"}
                aria-hidden="true"
              />
              <div className="flex p-10 flex-col items-center border-2 shadow-2xl border-[#242424]">
                <Typography
                  variant="subtitle1"
                  component={"h2"}
                  className="header text-[#242424] text-center text-base md:text-3xl pb-6"
                >
                  Mission
                </Typography>
                <Typography
                  variant="subtitle1"
                  component={"p"}
                  className="description text-[#6D6A6A] tracking-wide text-left text-sm md:text-base"
                >
                  At VYUG, our mission is to create a transformative
                  hyper-realistic metaverse that empowers individuals and
                  industries to solve real-time challenges through innovative
                  technology. We strive to redefine the way people live,
                  connect, and thrive in a digital age, fostering an environment
                  where creativity, collaboration, and inclusivity are at the
                  forefront. By bridging the gap between reality and the virtual
                  world, we aim to enhance the human experience and inspire a
                  new way of life that embraces the limitless possibilities of
                  technology.
                </Typography>
              </div>
            </div>
            <div className="flex w-[90%] mx-auto md:w-[40%] flex-col justify-end pt-20 md:pt-40 items-center">
              <img
                className="transition duration-500 ease-in-out contrast-[100%] brightness-0 hover:brightness-[1] hover:contrast-[1] hover:scale-110 pb-5"
                src={vission}
                alt={"Vision"}
                aria-hidden="true"
              />
              <div className="flex p-10 flex-col items-center border-2 shadow-2xl border-[#242424]">
                <Typography
                  variant="subtitle1"
                  component={"h2"}
                  className="header text-[#242424] text-center text-base md:text-3xl pb-6"
                >
                  Vision
                </Typography>
                <Typography
                  variant="subtitle1"
                  component={"p"}
                  className="description text-[#6D6A6A] text-left tracking-wide text-sm md:text-base"
                >
                  Our vision is to become a leading force in the Web3 industry,
                  pioneering a digital ecosystem that transcends traditional
                  boundaries and promotes sustainable growth for individuals and
                  communities worldwide. We envision VYUG as a global platform
                  where people from all walks of life can come together to
                  explore, create, and innovate, cultivating a vibrant culture
                  of progress and understanding. Through our commitment to
                  addressing real-world issues and harnessing the power of
                  technology, we aspire to shape a future where every individual
                  can thrive, uniting humanity in a shared journey toward a
                  brighter tomorrow.
                </Typography>
              </div>
            </div>
          </div>

          <div className="hidden w-full md:flex justify-center gap-10 my-20 items-center">
            <div className="w-[35%] flex flex-col justify-center gap-4 items-start">
              <Typography
                variant="subtitle1"
                component={"p"}
                className="description text-[#6D6A6A] text-left text-sm"
              >
                First ever futuristic city of metaverse,Nexara
              </Typography>
              <img src={firstArrow} alt={"top_left arrow"} aria-hidden="true" />
              <img
                src={firstArrow}
                className="-scale-y-[1]"
                alt={"bottom_left arrow"}
                aria-hidden="true"
              />
              <Typography
                variant="subtitle1"
                component={"p"}
                className="description text-[#6D6A6A] text-left text-sm"
              >
                Realistic avatars
              </Typography>
            </div>
            <div>
              <img
                className="transition duration-500 ease-in-out contrast-[100%] brightness-0 hover:brightness-[1] hover:contrast-[1] hover:scale-110 pb-5"
                src={globe}
                alt={"World globe"}
                aria-hidden="true"
              />
            </div>
            <div className="w-[35%] flex flex-col justify-center gap-4 items-start">
              <Typography
                variant="subtitle1"
                component={"p"}
                className="description text-[#6D6A6A] text-left text-sm"
              >
                Vast domain of sectors including education, commerce, corporate,
                tourism
              </Typography>
              <img
                src={firstArrow}
                className="-scale-x-[1]"
                alt={"top_right arrow"}
                aria-hidden="true"
              />
              <img
                src={firstArrow}
                className="-scale-x-[1] -scale-y-[1]"
                alt={"bottom_right arrow"}
                aria-hidden="true"
              />
              <Typography
                variant="subtitle1"
                component={"p"}
                className="description text-[#6D6A6A] text-left text-sm"
              >
                Hyper-realistic environment
              </Typography>
            </div>
          </div>
          <div className="md:w-[60%] mt-10 md:mt-0 w-full mr-auto flex items-start justify-start flex-col gap-5">
            <Typography
              variant="h2"
              component={"h2"}
              className="header text-xl text-left text-[#242424] sm:text-2xl lg:text-[35px]"
            >
              Limitless Innovation, Unbounded Vision
            </Typography>
            <Typography
              variant="subtitle1"
              component={"p"}
              className="description text-[#6D6A6A] mt-4 text-left text-sm md:text-base"
            >
              At VYUG, We're Redefining Boundaries—Crafting a Metaverse Where
              Innovation Fuels Transformation and Every Vision Finds Its Path to
              Reality"
              <br />
              <br />
              This version connects the limitless development theme with VYUG's
              broader mission and vision of fostering innovation, creativity,
              and transformation in the metaverse. It sets the stage for
              introducing your team, values, and the purpose behind VYUG's
              initiatives.
            </Typography>
            <button className="white-btn w-fit py-3 px-4 rounded-3xl description">
              Read the Documentation
            </button>
          </div>

          <div className="md:w-[60%] mt-10 md:mt-0 w-full my-10 md:my-20 ml-auto flex items-start justify-start flex-col gap-5">
            <Typography
              variant="h2"
              component={"h2"}
              className="header text-xl text-left text-[#242424] sm:text-2xl lg:text-[35px]"
            >
              Meet the Minds Behind the Vision
            </Typography>
            <Typography
              variant="subtitle1"
              component={"p"}
              className="description text-[#6D6A6A] mt-4 text-left text-sm md:text-base"
            >
              "Connect with the Diverse Team and Community Powering VYUG’s
              Vision for a Revolutionary Metaverse"
              <br />
              <br />
              This version emphasizes both the global reach and the impact of
              the team and community, aligning with the mission and vision of
              VYUG.
            </Typography>
            <button className="white-btn w-fit py-3 px-4 rounded-3xl description">
              Read the Documentation
            </button>
          </div>
        </div>

        <div className="py-16 md:py-20 flex justify-center items-center flex-col">
          <Typography
            variant="subtitle2"
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

export default Mission;
