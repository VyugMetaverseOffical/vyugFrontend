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

const ForgotPassword = () => {
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

  const handleForgot = async () => {
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
      };
      const response = await protectedApiPost("users/verify-email", object);
      console.log(response.status);

      if (response.status === 200) {
        toast.success(
          <ToastSuccess data={"OTP has been sent to your email"} />,
          SuccessStyling
        );
        navigate("/auth/forgot/verify-otp", {
          state: email,
        });
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(
          <ToastError data={error?.response.data?.message?.message} />,
          ErrorStyling
        );
      } else {
        toast.error(
          <ToastError data={"An error occurred. Please try again"} />,
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
        <title>Forgot Password - VYUG Metaverse</title>
        <meta name="description" content="Forgot your Password ? Enter your email to recieve an OTP" />
        <meta name="keywords" content="forgot password, reset password" />
        <meta property="og:title" content="Forgot Password - VYUG Metaverse" />
        <meta property="og:description" content="Forgot your Password ? Enter your email to recieve an OTP" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/auth/forgot-password"
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
              Forgot Password
            </Typography>
            <div className="flex w-full flex-col gap-4">
              <Typography
                variant="subtitle2"
                className="description font-semibold text-sm sm:text-base text-[#fff]"
              >
                Regain access with a simple password reset
              </Typography>
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
                placeholder="email-id"
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
                onClick={handleForgot}
                className="bg-[#fff] text-center uppercase text-[#000000] rounded-3xl text-sm sm:text-base header p-2"
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Send Otp"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
