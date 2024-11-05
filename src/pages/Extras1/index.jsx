import React, { useRef, useState } from "react";
import SideIcon from "../../components/side-icon";
import cursor from "../../images/cursor.webp";
// import Marquee from "react-fast-marquee";
import myAUdio from "../../videos/galaxyAudio.mp3";
import CustomCursor from "../../components/CustomCursor";
import FrontCursor from "../../components/FrontCursor";
import menuIcon from "../../images/landing-page-menu-icon.gif";
import airdropIcon from "../../images/airdrop-icon.webp";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { protectedApiPost } from "../../apis/api";
import s1 from "../../images/socialIcons/twitterGray.svg";
import s2 from "../../images/socialIcons/telegramGray.svg";
import s3 from "../../images/socialIcons/discordGray.svg";
import s4 from "../../images/socialIcons/instaGray.svg";
import s5 from "../../images/socialIcons/facebookGray.svg";
import s6 from "../../images/socialIcons/youtubeGray.svg";
import t1 from "../../images/socialIcons/twitter.svg";
import t2 from "../../images/socialIcons/telegram.svg";
import t3 from "../../images/socialIcons/discord.svg";
import t4 from "../../images/socialIcons/instagram.svg";
import t5 from "../../images/socialIcons/facebook.svg";
import t6 from "../../images/socialIcons/youtube.svg";
import Typography from "@mui/material/Typography";
import Starter from "../../components/Starter";
import { ComingSoon } from "../../components/ComingSoon";
import unmute from "../../images/unmute.svg";
import mute from "../../images/mute_hover.svg";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";
import Scroll from "./Scroll";
import Content from "./Content";

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

const SignUpForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || email === "") {
      toast.error(
        <ToastError data={"Email field cannot be empty"} />,
        ErrorStyling
      );
      return;
    }

    try {
      const response = await protectedApiPost(`users/newuser`, {
        email: email,
      });
      if (response.status === 200) {
        toast.success(
          <ToastSuccess data={"Your email has been registered"} />,
          SuccessStyling
        );
      }
    } catch (error) {
      console.error(error);
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

  return (
    <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-[1rem]">
      <h6 className="header text-white text-base text-[15px] md:text-[20px] font-semibold">
        Sign up and stay connected!
      </h6>
      <form
        className="border-[1px] border-solid border-white rounded-[4rem] flex justify-center items-center p-1 md:p-2"
        onSubmit={handleSubmit} // Handle form submission
      >
        <input
          type="email"
          name="email"
          id="email"
          className="description bg-[#ffffff00] outline-none text-[14px] md:text-[16px] text-white ps-3 md:min-w-[20rem]"
          placeholder="example@gmail.com"
          value={email} // Bind the email input to state
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
        />
        <button type="submit">
          <svg
            width="39"
            height="30"
            viewBox="0 0 39 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.9999 15.911C38.9203 16.4843 38.868 17.0622 38.7588 17.6309C37.9059 22.0677 35.5359 25.4781 31.6876 27.846C29.1925 29.3801 26.4472 30.0554 23.5155 29.9965C17.5564 29.8764 12.0955 26.074 9.94384 20.5382C9.71867 19.9604 9.94384 19.3825 10.4852 19.1627C11.0356 18.9384 11.6087 19.1945 11.8544 19.7949C12.821 22.1629 14.3222 24.1162 16.4283 25.5823C19.2395 27.5401 22.3669 28.2902 25.7558 27.8098C31.2395 27.0325 35.5496 22.9764 36.6777 17.5901C38.1152 10.7287 33.68 3.87859 26.8134 2.35584C20.5587 0.969051 14.3813 4.15504 11.9181 10.0489C11.7475 10.4568 11.5246 10.7967 11.0583 10.8783C10.6785 10.944 10.3419 10.8352 10.0917 10.5338C9.82784 10.2166 9.77553 9.85629 9.93019 9.47107C10.3532 8.41511 10.8695 7.40675 11.5291 6.47995C14.3199 2.55978 18.1182 0.361764 22.9332 0.0354603C30.5526 -0.483453 37.3123 4.74647 38.7361 12.2016C38.8543 12.8202 38.9135 13.4479 38.9999 14.0733V15.911Z"
              fill="white"
            />
            <path
              d="M18.3025 16.0169H17.9136C12.3685 16.0169 6.82338 16.0169 1.28055 16.0169C1.15773 16.0169 1.03264 16.0214 0.912094 16.0056C0.375324 15.933 -0.00450847 15.5048 4.04221e-05 14.9813C0.00458932 14.4602 0.391246 14.0364 0.93029 13.973C1.05084 13.9594 1.17593 13.9639 1.29875 13.9639C6.83248 13.9639 12.3685 13.9639 17.9022 13.9639C18.0341 13.9639 18.1661 13.9639 18.3776 13.9639C18.2639 13.8415 18.1979 13.7622 18.1251 13.6874C16.9879 12.5522 15.8507 11.4192 14.7134 10.2862C14.4018 9.97574 14.3018 9.60865 14.4428 9.19171C14.577 8.79743 14.8727 8.57536 15.2798 8.51644C15.6687 8.45979 15.9689 8.63654 16.235 8.90393C17.6088 10.2794 18.9871 11.648 20.3654 13.019C20.7635 13.4155 21.1661 13.8098 21.5664 14.2064C22.0326 14.6686 22.0417 15.2986 21.58 15.7563C19.7946 17.5306 18.0091 19.3026 16.226 21.0791C15.9667 21.3397 15.6733 21.5097 15.298 21.4621C14.8909 21.41 14.5906 21.1924 14.4496 20.8004C14.304 20.3993 14.3814 20.03 14.6793 19.7263C15.1501 19.2437 15.6323 18.7701 16.1122 18.2942C16.8514 17.56 17.5952 16.8281 18.3344 16.0939C18.3253 16.0667 18.3139 16.0418 18.3048 16.0146L18.3025 16.0169Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

const index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px");
  const [status, setStatus] = useState(1);
  const [img, setImg] = useState(-1);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="cursor-none min-h-screen overflow-x-hidden">
      <SideIcon />
        <div
          // className={`${
          //   showHomePageLoaded &&
          //   "transform-transition duration-[3s] scale-[2] ease-in-out opacity-transition opacity-0 relative"
          // }`}
        >
          {isMobile && (
            <div className="absolute top-[45%] left-[45%] -translate-x-[50%] -translate-y-[50%] w-[87%] sm:w-[60%] md:w-[45%]">
              <img
                className="cursorImage"
                src={cursor}
                width={"100%"}
                height={"100%"}
                alt=""
              />
            </div>
          )}
          <Scroll />
          {/* <video
            onLoadedData={() => setLoaded(false)}
            autoPlay
            loop
            muted
            style={{ objectFit: "cover", height: "100vh", width: "100%" }}
          >
            <source src={isMobile ? myVideo1 : myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          {/* <Lottie options={defaultOptions} isPaused={false} /> */}
          <audio ref={audioRef} muted={isMuted} autoPlay loop>
            <source src={myAUdio} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
          <img
            src={isMuted ? mute : unmute}
            className="fixed z-[100] bottom-[50%] md:bottom-20 right-1 md:right-10 w-8 md:w-12"
            onClick={toggleAudio}
            style={{ cursor: "pointer" }}
          />
          {/* Toggle menu bar - with Airdrop Link */}
          <div className="fixed top-0 left-0 right-0 z-[18] flex justify-between items-center py-9 px-9 md:px-[7rem]">
            <div className="flex justify-between items-center gap-[0.5rem] md:gap-5">
              <button onClick={handleToggleMenu}>
                <img
                  src={menuIcon}
                  alt="Link to toggle menu bar"
                  className="w-[2rem] md:w-[2.5rem]"
                />
              </button>
              <h6 className="header text-white text-[20px] sm:text-[25px] md:text-[30px]">
                VYUG
              </h6>
            </div>
            <Link
              to={"/landing-page/login"}
              className="flex justify-between items-center gap-[0.5rem] md:gap-5"
            >
              <h6 className="description text-white text-[12px] sm:text-[18px] md:text-[25px]">
                AIRDROP
              </h6>
              <img src={airdropIcon} alt="Click to toggle menu bar" />
            </Link>
          </div>

          {/* Rest Content - visible only when menu is in a closed state */}
          {!menuOpen && (
            <div className="fixed z-[18] bottom-0 flex flex-col-reverse justify-start items-center md:items-start gap-4 pb-10 md:pb-[5rem] md:px-[10rem]">
              <SignUpForm />
              <div>
                <p className="description text-center md:text-start text-[15px] md:text-[20px] text-white px-10 md:px-0 max-w-lg mx-auto">
                  Discover VYUG, The ultimate virtual reality experience!
                  Navigate hyper-realistic worlds, expand your business,
                  revolutionized living, and more.
                </p>
              </div>
            </div>
          )}

          {/* Initial Overlay when menu is in a closed state */}
          {!menuOpen && (
            <div
              className="fixed top-0 bottom-0 left-0 right-0 z-[15]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 35.3%, rgba(0, 0, 0, 0.9) 79.3%)",
              }}
            ></div>
          )}

          {/* Menu */}
          {menuOpen && (
            <div
              className="absolute top-0 left-0 min-h-[100vh] w-[100vw] z-[15] bg-[#00000050] flex flex-col justify-start items-center md:items-stretch gap-10 md:pb-[5rem] md:px-[10rem]"
              style={{
                background:
                  "linear-gradient(21.74deg, #000000 36.29%, rgba(109, 106, 106, 0.8) 113.71%)",
              }}
            >
              <ul className="mt-36 md:mt-40 lg:mt-48 list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjE3NzIxIDBDMy44OTA3IDAgMy42MTA2NSAwLjAyODY1MTcgMy4zMzk4NCAwLjA4NDEwNjZMNy44MTk2OCAyLjEzNjg2QzcuMTA0MzEgMC44NjIzMjQgNS43MzkxOSAwIDQuMTc3MjEgMFoiIGZpbGw9IiM2RDZBNkEiLz4KPHBhdGggZD0iTTQuMTc0MDIgOC4zNDkzMkM1Ljc0NzA5IDguMzQ5MzIgNy4xMTg2OCA3LjQ3NDk4IDcuODMwMzUgNi4xODc1TDMuMzMyMDMgOC4yNjQyOUMzLjYwMzc2IDguMzE5NzQgMy44ODU2NiA4LjM0OTMyIDQuMTc0MDIgOC4zNDkzMloiIGZpbGw9IiM2RDZBNkEiLz4KPHBhdGggZD0iTTAgNC4xNzYxNUMwIDUuNjE0MjggMC43MzIwMDUgNi44ODYwNSAxLjg0Mjk1IDcuNjM2NTRWNi40Mzg3MUMxLjI3NTQ2IDUuODUyNzQgMC45MjQyNDggNS4wNTUxMSAwLjkyNDI0OCA0LjE3NjE1QzAuOTI0MjQ4IDMuMjk3MTkgMS4yNzU0NiAyLjQ5ODY0IDEuODQyOTUgMS45MTM1OVYwLjcxNDg0NEMwLjczMjAwNSAxLjQ2NjI2IDAgMi43MzcxIDAgNC4xNzYxNVoiIGZpbGw9IiM2RDZBNkEiLz4KPHBhdGggZD0iTTYuOTEyMDcgNC4xNTkzMUg3LjMwMzk1TDIuMzA0NjkgMS45NTMxMkMyLjMxMDIzIDEuOTYxNDQgMi40MDI2NiAyLjA4OTkxIDIuNDAyNjYgMi4yMTc0Nkw2LjkxMTE0IDQuMTU5MzFINi45MTIwN1oiIGZpbGw9IiM2RDZBNkEiLz4KPHBhdGggZD0iTTIuMzA0NjkgNi4zNzM2M0w3LjMwOTQ5IDQuMTYwMDVMNy4zMDM5NSA0LjE1ODJINi45MTIwN0wyLjM3MTIzIDYuMTY1NjdDMi4zNzEyMyA2LjE2NTY3IDIuMzcxMjMgNi4yMjAyIDIuMzA1NjEgNi4zNzM2M0gyLjMwNDY5WiIgZmlsbD0iIzZENkE2QSIvPgo8cGF0aCBkPSJNOC4xMTM4IDIuNzc5MTNMNi43MDgwMiAyLjEzNDkzTDQuMDcwMjEgMC45MjYwMUwyLjY2NzIgMC4yODM2NTdMMi4zMDg1OSAwLjExOTE0MVYxLjk1Mzc3TDcuMzEwNjMgNC4xNTk5NUwyLjMwODU5IDYuMzc1MzhWOC4yMzEyN0wyLjY2NTM1IDguMDY2NzVMNC4wNTgyIDcuNDIzNDhMNi43Mjc0MyA2LjE5MTQ1TDguMTIyMTIgNS41NDcyNUwxMS4xMjc4IDQuMTU5OTVMOC4xMTM4IDIuNzc5MTNaIiBmaWxsPSIjRDdEN0Q3Ii8+Cjwvc3ZnPgo=)]">
                <li className="flex flex-col justify-center md:justify-start items-center md:items-start gap-1 text-center description text-white my-4">
                  <Link
                    onClick={() => setStatus(0)}
                    className="text-[15px] md:text-[20px] flex justify-start items-center gap-4"
                  >
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.17721 0C3.8907 0 3.61065 0.0286517 3.33984 0.0841066L7.81968 2.13686C7.10431 0.862324 5.73919 0 4.17721 0Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M4.17402 8.34932C5.74709 8.34932 7.11868 7.47498 7.83035 6.1875L3.33203 8.26429C3.60376 8.31974 3.88566 8.34932 4.17402 8.34932Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M0 4.17615C0 5.61428 0.732005 6.88605 1.84295 7.63654V6.43871C1.27546 5.85274 0.924248 5.05511 0.924248 4.17615C0.924248 3.29719 1.27546 2.49864 1.84295 1.91359V0.714844C0.732005 1.46626 0 2.7371 0 4.17615Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M6.91207 4.15931H7.30395L2.30469 1.95312C2.31023 1.96144 2.40266 2.08991 2.40266 2.21746L6.91114 4.15931H6.91207Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M2.30469 6.37363L7.30949 4.16005L7.30395 4.1582H6.91207L2.37123 6.16567C2.37123 6.16567 2.37123 6.2202 2.30561 6.37363H2.30469Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M8.1138 2.77913L6.70802 2.13493L4.07021 0.92601L2.6672 0.283657L2.30859 0.119141V1.95377L7.31063 4.15995L2.30859 6.37538V8.23127L2.66535 8.06675L4.0582 7.42348L6.72743 6.19145L8.12212 5.54725L11.1278 4.15995L8.1138 2.77913Z"
                        fill="#D7D7D7"
                      />
                    </svg>
                    <span>White Paper</span>
                  </Link>
                  <span className="text-[10px] md:text-[12px] ps-[28px]">
                    Read Our Official White Paper
                  </span>
                </li>
                <li className="flex flex-col justify-center md:justify-start items-center md:items-start gap-1 text-center description text-white my-4">
                  <Link
                    onClick={() => setStatus(0)}
                    className="text-[15px] md:text-[20px] flex justify-start items-center gap-4"
                  >
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.17721 0C3.8907 0 3.61065 0.0286517 3.33984 0.0841066L7.81968 2.13686C7.10431 0.862324 5.73919 0 4.17721 0Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M4.17402 8.34932C5.74709 8.34932 7.11868 7.47498 7.83035 6.1875L3.33203 8.26429C3.60376 8.31974 3.88566 8.34932 4.17402 8.34932Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M0 4.17615C0 5.61428 0.732005 6.88605 1.84295 7.63654V6.43871C1.27546 5.85274 0.924248 5.05511 0.924248 4.17615C0.924248 3.29719 1.27546 2.49864 1.84295 1.91359V0.714844C0.732005 1.46626 0 2.7371 0 4.17615Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M6.91207 4.15931H7.30395L2.30469 1.95312C2.31023 1.96144 2.40266 2.08991 2.40266 2.21746L6.91114 4.15931H6.91207Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M2.30469 6.37363L7.30949 4.16005L7.30395 4.1582H6.91207L2.37123 6.16567C2.37123 6.16567 2.37123 6.2202 2.30561 6.37363H2.30469Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M8.1138 2.77913L6.70802 2.13493L4.07021 0.92601L2.6672 0.283657L2.30859 0.119141V1.95377L7.31063 4.15995L2.30859 6.37538V8.23127L2.66535 8.06675L4.0582 7.42348L6.72743 6.19145L8.12212 5.54725L11.1278 4.15995L8.1138 2.77913Z"
                        fill="#D7D7D7"
                      />
                    </svg>
                    <span>Economics Paper</span>
                  </Link>
                  <span className="text-[10px] md:text-[12px] ps-[28px]">
                    Learn the Tokenomics of VYUG
                  </span>
                </li>
                <li className="flex flex-col justify-center md:justify-start items-center md:items-start gap-1 text-center description text-white my-4">
                  <Link
                    onClick={() => setStatus(0)}
                    className="text-[15px] md:text-[20px] flex justify-start items-center gap-4"
                  >
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.17721 0C3.8907 0 3.61065 0.0286517 3.33984 0.0841066L7.81968 2.13686C7.10431 0.862324 5.73919 0 4.17721 0Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M4.17402 8.34932C5.74709 8.34932 7.11868 7.47498 7.83035 6.1875L3.33203 8.26429C3.60376 8.31974 3.88566 8.34932 4.17402 8.34932Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M0 4.17615C0 5.61428 0.732005 6.88605 1.84295 7.63654V6.43871C1.27546 5.85274 0.924248 5.05511 0.924248 4.17615C0.924248 3.29719 1.27546 2.49864 1.84295 1.91359V0.714844C0.732005 1.46626 0 2.7371 0 4.17615Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M6.91207 4.15931H7.30395L2.30469 1.95312C2.31023 1.96144 2.40266 2.08991 2.40266 2.21746L6.91114 4.15931H6.91207Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M2.30469 6.37363L7.30949 4.16005L7.30395 4.1582H6.91207L2.37123 6.16567C2.37123 6.16567 2.37123 6.2202 2.30561 6.37363H2.30469Z"
                        fill="#6D6A6A"
                      />
                      <path
                        d="M8.1138 2.77913L6.70802 2.13493L4.07021 0.92601L2.6672 0.283657L2.30859 0.119141V1.95377L7.31063 4.15995L2.30859 6.37538V8.23127L2.66535 8.06675L4.0582 7.42348L6.72743 6.19145L8.12212 5.54725L11.1278 4.15995L8.1138 2.77913Z"
                        fill="#D7D7D7"
                      />
                    </svg>
                    <span>Governance Documentation</span>
                  </Link>
                  <span className="text-[10px] md:text-[12px] ps-[28px]">
                    Learn how VYUG is governed and built by its community
                  </span>
                </li>
              </ul>
              <ul className="mt-10 mb-4 hidden md:flex flex-col justify-start items-start gap-1 list-disc">
                <li className="flex justify-start items-center gap-3 description text-[12px] text-white">
                  <div className="w-[3px] h-[3px] rounded-[50%] bg-white"></div>
                  <Link onClick={() => setStatus(0)}>Cookie Policy</Link>
                </li>
                <li className="flex justify-start items-center gap-3 description text-[12px] text-white">
                  <div className="w-[3px] h-[3px] rounded-[50%] bg-white"></div>
                  <Link onClick={() => setStatus(0)}>Terms of Services</Link>
                </li>
                <li className="flex justify-start items-center gap-3 description text-[12px] text-white">
                  <div className="w-[3px] h-[3px] rounded-[50%] bg-white"></div>
                  <Link onClick={() => setStatus(0)}>Privacy Policy</Link>
                </li>
              </ul>
              <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center gap-10">
                <SignUpForm />
                <div className="flex flex-col justify-center lg:justify-end items-center gap-3 mt-12 lg:mt-0">
                  <h6 className="header text-white text-base text-[15px] font-semibold">
                    Follow us
                  </h6>
                  <div className="flex flex-wrap justify-center items-center gap-2 max-w-[8rem] sm:max-w-[10rem] md:max-w-[25rem]">
                    {Social_Icons.map((item, index) => {
                      return (
                        <Typography
                          key={index}
                          variant="h2"
                          className="header text-center w-[4vh] h-[4vh] sm:w-[5vh] sm:h-[5vh]"
                        >
                          <Link
                            to={item.link}
                            onMouseEnter={() => setImg(index)}
                            onMouseLeave={() => setImg(-1)}
                            className="no-underline flex justify-center"
                          >
                            {img === index ? (
                              <img
                                className="transition tarnsform-transition duration-150 ease-in-out hover:scale-125"
                                width={"100%"}
                                height={"100%"}
                                src={item.colorImg}
                                alt={item.name}
                              />
                            ) : (
                              <img
                                className="transition tarnsform-transition duration-200 ease-in-out hover:scale-110"
                                width={"100%"}
                                height={"100%"}
                                src={item.image}
                                alt={item.name}
                              />
                            )}
                          </Link>
                        </Typography>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Content />
      {status == 0 && <ComingSoon status={status} setStatus={setStatus} />}
      {/* {isClicked && (
        <HomePage
          showHomePageLoaded={showHomePageLoaded}
          onVideoLoaded={() => setShowHomePageLoaded(true)}
        />
      )} */}
    </div>
  );
};

export default index;
