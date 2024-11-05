import React, { useEffect, useState } from "react";
import image1 from "../../images/login_image.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { CircularProgress, TextField, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";
import { protectedApiPost } from "../../apis/api";
import { Helmet } from "react-helmet-async";

const SignupOTPVerification = () => {
  const [otpValue, setOtpValue] = useState();
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isResend, setIsResend] = useState(false);

  const regex = /^[0-9]*$/;

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const handleChange = (e) => {
    if (e.target.value.length <= 5) {
      regex.test(e.target.value) && setOtpValue(e.target.value);
    }
  };

  useEffect(() => {
    let seconds;
    if (timer > 0) {
      seconds = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResend(true);
    }
    return () => {
      clearInterval(seconds);
    };
  }, [timer]);

  const handleResendOtp = async () => {
    if (isResend) {
      setIsResend(false);
      setTimer(30);
      try {
        const object = {
          email: state,
          type: "signup",
        };
        const response = await protectedApiPost("users/verify-email", object);
        console.log("abbbh", response);

        if (response.data.substring(0, 3) == "250") {
          toast.success(
            <ToastSuccess data={"OTP has been sent to your email"} />,
            SuccessStyling
          );
        } else if (response && response.result.responseCode === 535) {
          toast.error(<ToastError data={"Some error occured"} />, ErrorStyling);
        }
      } catch (err) {
        if (err.response && err.response.data) {
          console.log(err.response.data.message);
          toast.error(
            <ToastError data={err?.response.data?.message.message} />,
            ErrorStyling
          );
        } else {
          toast.error(
            <ToastError data={"Failed to verify email"} />,
            ErrorStyling
          );
        }
      }
    }
  };

  useEffect(() => {
    if (!state) {
      console.log(state);
      navigate("/auth/signup");
    }
  }, [state, navigate]);

  const handleSignupOtp = async () => {
    setLoading(true);
    if (!otpValue) {
      toast.error(<ToastError data={"Please fill all fields"} />, ErrorStyling);
      setLoading(false);
      return;
    }
    try {
      const object = {
        email: state,
        otp: String(otpValue),
      };

      const response = await protectedApiPost("users/verify-otp", object);
      console.log(response);

      if (response) {
        toast.success(
          <ToastSuccess data={"OTP verified successfully"} />,
          SuccessStyling
        );
        navigate("/auth/create-account", {
          state: state,
        });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(
          <ToastError data={error?.response.data?.message.message} />,
          ErrorStyling
        );
      } else {
        toast.error(
          <ToastError data={"An error ocurred ! Please try again"} />,
          ErrorStyling
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign up OTP Verification - VYUG Metaverse</title>
        <meta
          name="description"
          content="Verify your account with OTP on VYUG Metaverse."
        />
        <meta name="keywords" content="sign up, create account, register" />
        <meta property="og:title" content="Sign up - VYUG Metaverse" />
        <meta
          property="og:description"
          content="Verify your account with OTP on VYUG Metaverse."
        />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/auth/signup/verify-otp"
        />
      </Helmet>
      <div
        className="min-h-screen w-full"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto gap-5 pt-20 md:pt-10 w-[95%] md:w-[80%]">
          <div className="w-full md:w-[45%] mr-auto flex flex-col gap-5">
            <div
              onClick={() => navigate(-1)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <ArrowBackIosNewOutlinedIcon
                className="text-[#fff]"
                fontSize="normal"
              />
              <Typography
                variant="subtitle2"
                className="description text-sm md:text-base text-[#fff]"
              >
                Back
              </Typography>
            </div>
            <Typography
              variant="h3"
              className="header text-start text-[25px] md:text-[28px] pb-5 text-[#fff]"
            >
              Enter OTP
            </Typography>
            <div className="flex w-full flex-col gap-4">
              <Typography
                variant="subtitle2"
                className="description font-semibold text-sm sm:text-base text-[#fff]"
              >
                One time password
              </Typography>
              <TextField
                name="otp"
                value={otpValue}
                onChange={handleChange}
                className="text-sm sm:text-base"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "& input": {
                      color: "white", // Ensure input text color is white
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "white", // Placeholder text color
                    },
                  },
                  border: "2px solid white",
                  borderRadius: "30px",
                  backgroundColor: "transparent",
                  padding: "3px",
                }}
                size="small"
                fullWidth
                InputProps={{
                  style: { color: "white" },
                  classes: {
                    input: "description text-sm sm:text-base text-[#fff]",
                  },
                }}
              />
              <Typography
                variant="subtitle2"
                className={`description text-xs pr-4 pb-4 sm:text-sm text-right mt-0 pt-0 text-[#fff]
                ${isResend && "hover:underline cursor-pointer"}`}
                id="resend"
                onClick={handleResendOtp}
              >
                {timer === 0
                  ? "Resend OTP"
                  : "Resend OTP in " + timer + " seconds"}
              </Typography>
              <button
                disabled={loading && true}
                onClick={handleSignupOtp}
                className="bg-[#fff] text-center uppercase text-[#000000] rounded-3xl text-sm sm:text-base header p-2"
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupOTPVerification;
