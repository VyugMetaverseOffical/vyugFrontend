import React, { useEffect, useState } from "react";
import image1 from "../../images/login_image.webp";
import { useAuth } from "../../redux/counterSlice";
import { useNavigate } from "react-router-dom";
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

const Signup = () => {
  const { isLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const verifyEmail = async () => {
    setLoading(true);
    if (!email) {
      toast.error(<ToastError data={"Please fill all fields"} />, ErrorStyling);
      setLoading(false);
      return;
    }
    if (!regex.test(String(email).toLowerCase())) {
      toast.error(<ToastError data={"Invalid email address"} />, ErrorStyling);
      setLoading(false);
      return;
    }
    try {
      const object = {
        email: email,
        type: "signup",
      };
      const response = await protectedApiPost("users/verify-email", object);
      console.log("abbbh", response);

      if (response.data.substring(0, 3) == "250") {
        toast.success(
          <ToastSuccess data={"OTP has been sent to your email"} />,
          SuccessStyling
        );
        navigate("/auth/signup/verify-otp", {
          state: email,
        });
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign up - VYUG Metaverse</title>
        <meta
          name="description"
          content="Create a new Account on VYUG Metaverse. Sign up now and be a part of our community"
        />
        <meta name="keywords" content="sign up, create account, register" />
        <meta property="og:title" content="Sign up - VYUG Metaverse" />
        <meta
          property="og:description"
          content="Create a new Account on VYUG Metaverse. Sign up now and be a part of our community"
        />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/auth/signup"
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
              className="description text-start text-[25px] md:text-[28px] pb-5 text-[#fff]"
            >
              WELCOME TO <br />
              <b>VYUG TOKEN PRESALE</b>
            </Typography>
            <div className="flex w-full flex-col gap-4">
              <TextField
                name="email"
                className="text-sm sm:text-base"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                  },
                  border: "2px solid white",
                  borderRadius: "30px",
                  backgroundColor: "transparent",
                  padding: "3px",
                }}
                placeholder="email"
                size="small"
                fullWidth
                InputProps={{
                  style: { color: "white" },
                  classes: {
                    input: "description text-sm sm:text-base text-[#fff]",
                  },
                }}
              />
              <button
                disabled={loading && true}
                onClick={verifyEmail}
                className="bg-[#fff] text-center uppercase text-[#000000] rounded-3xl text-sm sm:text-base header p-2"
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
            <Typography
              variant="h2"
              className="header pt-10 text-[#fff] text-center text-base sm:text-base"
            >
              Already have an Account ?
            </Typography>
            <button
              className="bg-[#fff] uppercase px-16 text-[#000000] rounded-3xl mx-auto py-2 text-sm sm:text-base header"
              id="control"
              onClick={() => navigate("/auth/login")}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
