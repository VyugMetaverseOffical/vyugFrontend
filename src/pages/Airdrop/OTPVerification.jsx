import myVideo from "../../videos/galaxy.mp4";
import menuIcon from "../../images/landing-page-menu-icon.gif";
import airdropIcon from "../../images/airdrop-icon.webp";
import vyugLogo from "../../images/airdrop_vyug_logo.png";
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
import { Typography, CircularProgress } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { protectedApiPost } from "../../apis/api";
import { useAirdropAuth } from "../../redux/airdropAuthSlice";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

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

function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [img, setImg] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const { setLoginUser, airdropUser, authToken } = useAirdropAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const length = 5;
  console.log(state?.email);
  const RE_DIGIT = new RegExp(/^\d+$/);

  const valueItems = useMemo(() => {
    const values = otp.split("");
    const items = [];
    for (let i = 0; i < length; i++) {
      const char = values[i];
      if (RE_DIGIT.test(char)) items.push(char);
      else items.push("");
    }
    return items;
  }, [otp, length]);

  const handleOTPFinish = (e) => {
    e.preventDefault();
    console.log(state.email, otp);
    setLoading(true);
    protectedApiPost("airdrop/verify-otp", {
      email: state.email,
      otp: otp,
    })
      .then((response) => {
        console.log("Verify OTP response", response);
        setLoading(false);
        if (response.status === 200) {
          setLoginUser(response);
          toast.success(
            <ToastSuccess data={"OTP verified successfully"} />,
            SuccessStyling
          );
          navigate("/vyug-airdrop", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error(
          <ToastError data={error?.response?.data?.message?.message} />,
          ErrorStyling
        );
      });
  };

  const handleResendOTP = (e) => {
    e.preventDefault();
    console.log(state.email);
    setResending(true);
    protectedApiPost("airdrop/resend-otp", {
      email: state.email,
    })
      .then((response) => {
        console.log("Resend OTP response", response);
        setResending(false);
        if (response.status === 200) {
          toast.success(
            <ToastSuccess data={"Resent OTP successfully"} />,
            SuccessStyling
          );
        }
      })
      .catch((error) => {
        setResending(false);
        toast.error(
          <ToastError data={error?.response?.data?.message?.message} />,
          ErrorStyling
        );
      });
  };

  const onChange = (e, i) => {
    let value = e.target.value;
    const isValueDigit = RE_DIGIT.test(value);
    if (!isValueDigit && value !== "") return;

    value = isValueDigit ? value : " ";

    if (value.length === length) {
      setOtp(value);
      e.target.blur();
      // onFinish(value);
      return;
    }

    const newOtp = otp.substring(0, i) + value + otp.substring(i + 1);
    setOtp(newOtp);

    // if (i + 1 === length && isValueDigit) onFinish(newOtp);

    if (!isValueDigit) return;

    const nextInputEl = e.target.nextElementSibling;

    if (nextInputEl) nextInputEl.focus();
  };

  const onKeyDown = (e) => {
    e.target.setSelectionRange(0, e.target.value.length);

    if (e.key !== "Backspace" || e.target.value !== "") return;

    const prevInput = e.target.previousElementSibling;
    if (prevInput) prevInput.focus();
  };

  const onFocus = (e) => {
    e.target.setSelectionRange(0, e.target.value.length);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('input[id^="otp_"]');
    inputs[0]?.focus();
    if (authToken) {
      navigate("/vyug-airdrop");
    }
  }, []);

  return (
    <div className="relative">
      <Helmet>
        <title>Airdrop Verify OTP - VYUG Metaverse</title>
        <meta name="description" content="Airdrop Verify OTP" />
        <meta name="keywords" content="Airdrop Verify OTP" />
        <meta property="og:title" content="Airdrop Verify OTP" />
        <meta property="og:description" content="Airdrop Verify OTP" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/landing-page/register/verify-otp" />
      </Helmet>
      <video
        autoPlay
        loop
        muted
        style={{ objectFit: "cover", height: "100vh", width: "100%" }}
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Toggle menu bar - with Airdrop Link */}
      <div className="absolute top-0 left-0 right-0 z-[18] flex justify-between items-center py-9 px-9 md:px-[7rem]">
        <div className="flex justify-between items-center gap-[0.5rem]">
          <button className="cursor-default">
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
          to={"/"}
          className="flex justify-between items-center gap-[0.5rem]"
        >
          <h6 className="description text-white text-[12px] sm:text-[18px] md:text-[25px]">
            AIRDROP
          </h6>
          <img src={airdropIcon} alt="Click to toggle menu bar" />
        </Link>
      </div>

      {/* Main overlay container */}
      <div
        className="absolute top-0 left-0 min-h-[100vh] w-[100vw] z-[15] bg-[#00000050] flex flex-col justify-start items-stretch md:items-center"
        style={{
          background:
            "linear-gradient(21.74deg, #000000 36.29%, rgba(109, 106, 106, 0.8) 113.71%)",
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-stretch md:items-start gap-8 md:gap-20 mt-28 md:mt-48 px-16 md:px-0">
          <img
            src={vyugLogo}
            alt="VYUG"
            className="w-[100px] md:w-[auto] mx-auto"
          />
          <div className="max-w-3xl">
            <div className="flex flex-col justify-start items-stretch gap-2">
              <h1 className="header text-white text-[15px] md:text-[30px]">
                Register For VYUG Airdrop
              </h1>
              <p className="description text-white text-[8px] md:text-[12px] text-start flex-1 mt-3 md:mt-8">
                OTP has been sent to your email to verify your account.
              </p>
              <form className="flex flex-col justify-start items-start gap-2 md:gap-5">
                <h6
                  htmlFor="name"
                  className="description text-white text-[12px] md:text-[20px] font-normal"
                >
                  Enter OTP
                </h6>
                <div className="flex justify-start items-center gap-6 md:gap-8">
                  <div className="flex justify-start items-start gap-1 md:gap-2">
                    {valueItems.map((d, i) => (
                      <input
                        key={i}
                        id={`otp_${i + 1}`}
                        // type="text"
                        className="description bg-[#ffffff00] outline-none border-[1px] border-solid border-white text-[14px] md:text-[16px] text-white rounded-[5rem] w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] text-center"
                        maxLength={length}
                        autoComplete="one-item-code"
                        pattern="\d{1}"
                        type="tel"
                        inputMode="numeric"
                        value={d}
                        onChange={(e) => onChange(e, i)}
                        onKeyDown={onKeyDown}
                        onFocus={onFocus}
                      />
                    ))}
                  </div>
                  {loading ? (
                    <CircularProgress sx={{ color: "white" }} />
                  ) : (
                    <button
                      className="description bg-[#ffffff00] outline-none text-[14px] md:text-[16px] text-white text-center"
                      onClick={handleOTPFinish}
                    >
                      <svg
                        width="53"
                        height="40"
                        viewBox="0 0 53 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[2rem] md:w-auto"
                      >
                        <path
                          d="M53.0014 21.2147C52.8932 21.9791 52.8221 22.7495 52.6737 23.5079C51.5147 29.4237 48.2939 33.9708 43.0641 37.128C39.6734 39.1735 35.9426 40.0738 31.9584 39.9953C23.8602 39.8352 16.4389 34.7654 13.5149 27.3843C13.2089 26.6138 13.5149 25.8434 14.2506 25.5503C14.9986 25.2512 15.7775 25.5926 16.1113 26.3933C17.4249 29.5506 19.4649 32.1549 22.3271 34.1097C26.1475 36.7202 30.3975 37.7202 35.003 37.0797C42.4552 36.0434 48.3125 30.6352 49.8456 23.4535C51.799 14.3049 45.7717 5.17145 36.4403 3.14112C27.9402 1.29207 19.5453 5.54005 16.1978 13.3985C15.966 13.9424 15.6631 14.3956 15.0295 14.5043C14.5133 14.592 14.0558 14.4469 13.7158 14.0451C13.3573 13.6221 13.2862 13.1417 13.4964 12.6281C14.0713 11.2202 14.7729 9.87566 15.6693 8.63994C19.4618 3.41304 24.6237 0.482352 31.1671 0.0472803C41.5217 -0.644604 50.7079 6.32862 52.6428 16.2688C52.8036 17.0936 52.8839 17.9305 53.0014 18.7644V21.2147Z"
                          fill="white"
                        />
                        <path
                          d="M24.8727 21.3565H24.3441C16.8085 21.3565 9.2728 21.3565 1.74024 21.3565C1.57333 21.3565 1.40333 21.3625 1.23951 21.3414C0.510056 21.2447 -0.0061269 20.6737 5.49325e-05 19.9758C0.00623676 19.2809 0.531693 18.7159 1.26424 18.6313C1.42806 18.6131 1.59806 18.6192 1.76497 18.6192C9.28517 18.6192 16.8085 18.6192 24.3287 18.6192C24.5079 18.6192 24.6872 18.6192 24.9747 18.6192C24.8201 18.456 24.7305 18.3503 24.6316 18.2506C23.0861 16.7369 21.5407 15.2262 19.9952 13.7156C19.5717 13.3016 19.4357 12.8122 19.6274 12.2563C19.8097 11.7306 20.2116 11.4345 20.7648 11.3559C21.2934 11.2804 21.7014 11.516 22.063 11.8726C23.9299 13.7065 25.803 15.5314 27.6761 17.3593C28.217 17.888 28.7641 18.4137 29.3081 18.9425C29.9418 19.5588 29.9541 20.3987 29.3267 21.0091C26.9003 23.3748 24.4739 25.7374 22.0506 28.1062C21.6983 28.4536 21.2996 28.6802 20.7896 28.6168C20.2363 28.5473 19.8283 28.2572 19.6366 27.7345C19.4388 27.1998 19.5439 26.7073 19.9488 26.3024C20.5886 25.6589 21.2439 25.0274 21.8961 24.3929C22.9007 23.414 23.9114 22.4381 24.9159 21.4592C24.9036 21.423 24.8881 21.3897 24.8757 21.3535L24.8727 21.3565Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </form>
              {resending ? (
                <CircularProgress sx={{ color: "white" }} />
              ) : (
                <button
                  onClick={handleResendOTP}
                  className="description text-white text-[8px] md:text-[12px] text-start flex-1 mt-3 md:mt-8"
                >
                  Resend OTP
                </button>
              )}
            </div>
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-3 my-12 lg:my-16">
              <h6 className="header text-white text-base text-[15px] font-semibold text-center md:text-start">
                Follow us
              </h6>
              <div className="flex flex-wrap justify-center items-center gap-4 max-w-[8rem] sm:max-w-[10rem] md:max-w-[50rem] mx-auto md:mx-0">
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
      </div>
    </div>
  );
}

export default OTPVerification;
