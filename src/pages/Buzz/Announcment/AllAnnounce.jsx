import { InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
import Searchbar from "../../../components/Searchbar";
import { useNavigate } from "react-router-dom";
import { protectedApiPost } from "../../../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../../components/toast";

const AllAnnounce = ({ search }) => {
  const [emailData, setEmailData] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

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
      console.error(error?.response.data.message);
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

  const highlightText = (text, word) => {
    const parts = text.split(new RegExp(`(${word})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === word.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full flex flex-col gap-4 md:gap-8">
      {/* code appears when announcments release */}

      <div
        onClick={() =>
          navigate(
            "/buzz/announcement/celebrate-the-first-ever-metaverse-diwali-with-vyug"
          )
        }
        className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto transform-transition group duration-500 ease-in-out hover:bg-[#242424] p-5 md:p-6 rounded-xl"
      >
        <div className="w-[100%] md:w-[15%] flex flex-row md:flex-col gap-2">
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            30 October, 2024
          </p>
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            06:00 PM
          </p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col gap-2 md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0] border-black group-hover:border-[#fff] pt-4 md:pt-0 pl-0 md:pl-10">
          <Typography
            variant="h2"
            className="header text-start text-sm sm:text-lg lg:text-2xl md:font-extrabold w-full group group-hover:text-[#fff]"
          >
            {highlightText(
              `Celebrate the First-Ever Metaverse Diwali! VYUG Presents the Festival of Lights in VR`,
              search
            )}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-start text-xs sm:text-sm w-full group group-hover:text-[#fff]"
          >
            VYUG wishes you a Happy and Healthy Diwali! May this festival of light bring you auspicious prosperity, joy, and growth.
            This Diwali, VYUG proudly announces the first-ever VR Diwali celebration. Our company brings the auspicious festival of lights into the world of virtual reality and immersive experiences.
          </Typography>
        </div>
      </div>
      <div
        onClick={() =>
          navigate(
            "/buzz/announcement/finance-meets-the-metaverse-the-vyug-presale-is-live"
          )
        }
        className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto transform-transition group duration-500 ease-in-out hover:bg-[#242424] p-5 md:p-6 rounded-xl"
      >
        <div className="w-[100%] md:w-[15%] flex flex-row md:flex-col gap-2">
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            28 October, 2024
          </p>
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            12:00 PM
          </p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col gap-2 md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0] border-black group-hover:border-[#fff] pt-4 md:pt-0 pl-0 md:pl-10">
          <Typography
            variant="h2"
            className="header text-start text-sm sm:text-lg lg:text-2xl md:font-extrabold w-full group group-hover:text-[#fff]"
          >
            {highlightText(
              `Finance Meets the Metaverse: The VYUG Presale is Live! Invest Now...`,
              search
            )}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-start text-xs sm:text-sm w-full group group-hover:text-[#fff]"
          >
            VYUG is here with the VYUG Presale! The entries to the future
            economy are now open. VYUG invites you to join this force and become
            a partner with the company's ultimate future. Invest in the future
            token and get maximum returns on your stakes.
          </Typography>
        </div>
      </div>
      <div
        onClick={() =>
          navigate("/buzz/announcement/closure-of-the-successful-vyug-airdrop")
        }
        className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto transform-transition group duration-500 ease-in-out hover:bg-[#242424] p-5 md:p-6 rounded-xl"
      >
        <div className="w-[100%] md:w-[15%] flex flex-row md:flex-col gap-2">
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            25 October, 2024
          </p>
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            05:00 PM
          </p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col gap-2 md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0] border-black group-hover:border-[#fff] pt-4 md:pt-0 pl-0 md:pl-10">
          <Typography
            variant="h2"
            className="header text-start text-sm sm:text-lg lg:text-2xl md:font-extrabold w-full group group-hover:text-[#fff]"
          >
            {highlightText(
              `VYUG Announces Closure of the Successful VYUG Airdrop!`,
              search
            )}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-start text-xs sm:text-sm w-full group group-hover:text-[#fff]"
          >
            VYUG is excited to announce that the VYUG token airdrop is
            officially over! Thank you to everyone who participated and
            supported us. Your enthusiasm truly means a lot!
          </Typography>
        </div>
      </div>
      <div
        onClick={() =>
          navigate("/buzz/announcement/vyug-announces-the-vyug-token-presale")
        }
        className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto transform-transition group duration-500 ease-in-out hover:bg-[#242424] p-5 md:p-6 rounded-xl"
      >
        <div className="w-[100%] md:w-[15%] flex flex-row md:flex-col gap-2">
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            16 October, 2024
          </p>
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            07:40 PM
          </p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col gap-2 md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0] border-black group-hover:border-[#fff] pt-4 md:pt-0 pl-0 md:pl-10">
          <Typography
            variant="h2"
            className="header text-start text-sm sm:text-lg lg:text-2xl md:font-extrabold w-full group group-hover:text-[#fff] capitalize"
          >
            {highlightText(`The vyug token presale is coming...`, search)}
            {highlightText(`The vyug token presale is coming...`, search)}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-start text-xs sm:text-sm w-full group group-hover:text-[#fff]"
          >
            VYUG is proud to announce the token presale of VYUG Tokens. With
            this announcement, VYUG invites investors from all over the globe to
            join hands with the best metaverse token and get the first-mover
            advantage in future technology.
          </Typography>
        </div>
      </div>
      <div
        onClick={() =>
          navigate("/buzz/announcement/vyug-token-deployed-on-mainnet")
        }
        className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto transform-transition group duration-500 ease-in-out hover:bg-[#242424] p-5 md:p-6 rounded-xl"
      >
        <div className="w-[100%] md:w-[15%] flex flex-row md:flex-col gap-2">
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            29 August, 2024
          </p>
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            06:00 PM
          </p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col gap-2 md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0] border-black group-hover:border-[#fff] pt-4 md:pt-0 pl-0 md:pl-10">
          <Typography
            variant="h2"
            className="header text-start text-sm sm:text-lg lg:text-2xl md:font-extrabold w-full group group-hover:text-[#fff]"
          >
            {highlightText(
              `VYUG Token Officially Deployed on Mainnet After Successful Testnet
            Phase`,
              search
            )}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-start text-xs sm:text-sm w-full group group-hover:text-[#fff]"
          >
            We are excited to announce that the VYUG token has officially been
            deployed on the Mainnet. This comes after the successful completion
            of our Testnet phase, which we recently reported with detailed
            insights. With positive proof-of-history validation and extensive
            testing, the VYUG token is now live on the public blockchain,
            marking a key milestone in our journey.
          </Typography>
        </div>
      </div>
      <div
        onClick={() =>
          navigate("/buzz/announcement/vyug-token-deployed-on-testnet")
        }
        className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto transform-transition group duration-500 ease-in-out hover:bg-[#242424] p-5 md:p-6 rounded-xl"
      >
        <div className="w-[100%] md:w-[15%] flex flex-row md:flex-col gap-2">
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            23 August, 2024
          </p>
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            10:00 PM
          </p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col gap-2 md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0] border-black group-hover:border-[#fff] pt-4 md:pt-0 pl-0 md:pl-10">
          <Typography
            variant="h2"
            className="header text-start text-sm sm:text-lg lg:text-2xl md:font-extrabold w-full group group-hover:text-[#fff]"
          >
            {highlightText(
              `Winning the TEST-Run! VYUG Token Successfully Gets Deployed on
            TestNet`,
              search
            )}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-start text-xs sm:text-sm w-full group group-hover:text-[#fff]"
          >
            VYUG is proud to announce that our token has successfully been
            deployed on TestNet. This achievement was awaited after our attempt
            to get into the market with VYUG tokens.
          </Typography>
        </div>
      </div>
      <div
        onClick={() => navigate("/buzz/announcement/vyug-jackpot-announcement")}
        className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto transform-transition group duration-500 ease-in-out hover:bg-[#242424] p-5 md:p-6 rounded-xl"
      >
        <div className="w-[100%] md:w-[15%] flex flex-row md:flex-col gap-2">
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            23 August, 2024
          </p>
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            10:00 PM
          </p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col gap-2 md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0] border-black group-hover:border-[#fff] pt-4 md:pt-0 pl-0 md:pl-10">
          <Typography
            variant="h2"
            className="header text-start text-sm sm:text-lg lg:text-2xl md:font-extrabold w-full group group-hover:text-[#fff]"
          >
            {highlightText(
              `Important Announcement ! VYUG Jackpot Will Only Be Available After
            15th September`,
              search
            )}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-start text-xs sm:text-sm w-full group group-hover:text-[#fff]"
          >
            This is to bring under your notice that our VYUG team has received
            numerous queries regarding the Jackpot approval and the Jackpot
            prizes.
          </Typography>
        </div>
      </div>
      <div
        onClick={() =>
          navigate("/buzz/announcement/vyug-enters-new-arenas-with-beta")
        }
        className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto transform-transition group duration-500 ease-in-out hover:bg-[#242424] p-5 md:p-6 rounded-xl"
      >
        <div className="w-[100%] md:w-[15%] flex flex-row md:flex-col gap-2">
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            21 August, 2024
          </p>
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            03:00 PM
          </p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col gap-2 md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0] border-black group-hover:border-[#fff] pt-4 md:pt-0 pl-0 md:pl-10">
          <Typography
            variant="h2"
            className="header text-start text-sm sm:text-lg lg:text-2xl md:font-extrabold w-full group group-hover:text-[#fff]"
          >
            {highlightText(
              `VYUG Enters New Arenas With Beta! Launches The Most Advanced Version
            of Metaverse.`,
              search
            )}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-start text-xs sm:text-sm w-full group group-hover:text-[#fff]"
          >
            VYUG is excited to announce the beta release of our cutting-edge
            metaverse platform. Earlier this Year, we had successfully launched
            the alpha testing phase for Nexara, the first futuristic city within
            the metaverse.
          </Typography>
        </div>
      </div>
      <div
        onClick={() =>
          navigate("/buzz/announcement/vyug-launches-the-airdrop-of-revolution")
        }
        className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto transform-transition group duration-500 ease-in-out hover:bg-[#242424] p-5 md:p-6 rounded-xl"
      >
        <div className="w-[100%] md:w-[15%] flex flex-row md:flex-col gap-2">
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            15 August, 2024
          </p>
          <p className="description text-start text-xs sm:text-sm group group-hover:text-[#fff]">
            03:00 PM
          </p>
        </div>
        <div className="w-[100%] md:w-[85%] flex flex-col gap-2 md:gap-5 border-t-[1px] md:border-l-[1px] md:border-t-[0] border-black group-hover:border-[#fff] pt-4 md:pt-0 pl-0 md:pl-10">
          <Typography
            variant="h2"
            className="header text-start text-sm sm:text-lg lg:text-2xl md:font-extrabold w-full group group-hover:text-[#fff]"
          >
            {highlightText(
              `VYUG Launches The Airdrop of Revolution! Brings its own 'VYUG
            Token' this 15th August.`,
              search
            )}
          </Typography>
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-start text-xs sm:text-sm w-full group group-hover:text-[#fff]"
          >
            VYUG is thrilled to announce the VYUG token airdrop! Airdrops have
            become increasingly popular in the universe of digital currencies.
            They have become a boon to both the finance and the digital world,
            and VYUG aims to bring this Boon to life.
          </Typography>
        </div>
      </div>

      {/* Code Appears if there is no announcments */}

      {/* <div className="flex min-h-[50vh] justify-center items-center flex-col gap-5">
        <Typography
          variant="h1"
          className="header text-2xl sm:text-3xl lg:text-4xl"
        >
          Stay Tuned!
        </Typography>
        <Typography
          variant="subtitle2"
          component={"p"}
          className="description text-center text-sm md:text-base"
        >
          We currently have no announcements. <br />
          Please check back soon for the latest Annuncements
        </Typography>
      </div> */}

      <div className="pt-5 md:pt-20 flex justify-center items-center flex-col">
        <Typography
          variant="subtitle2"
          component={"p"}
          className="description text-lg sm:text-xl"
        >
          Get All The Latest
        </Typography>
        <Typography
          variant="h2"
          className="header text-base sm:text-lg lg:text-3xl md:font-extrabold"
        >
          News & Updates
        </Typography>
        <div className="md:w-[60%] mx-auto w-[90%] mt-10">
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
    </div>
  );
};

export default AllAnnounce;
