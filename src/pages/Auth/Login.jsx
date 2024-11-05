import React, { useEffect, useState } from "react";
import image1 from "../../images/login_image.webp";
import { useAuth } from "../../redux/counterSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import toast from "react-hot-toast";
import { ErrorStyling, ToastError } from "../../components/toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { setLogin, isLoggedIn, loading } = useAuth();

  console.log(loading);

  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/crypto-presale");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = () => {
    if (!email || !password) {
      toast.error(<ToastError data={"Please fill all fields"} />, ErrorStyling);
      return;
    }
    if (!regex.test(String(email).toLowerCase())) {
      toast.error(<ToastError data={"Invalid email address"} />, ErrorStyling);
      return;
    }

    setLogin({ email, password });
  };

  return (
    <>
      <Helmet>
        <title>Login - VYUG Metaverse</title>
        <meta
          name="description"
          content="Log in to your account to access personalized features and manage your portfolio"
        />
        <meta name="keywords" content="Login, Account access, user login" />
        <meta property="og:title" content="Login - VYUG Metaverse" />
        <meta
          property="og:description"
          content="Log in to your account to access personalized features and manage your portfolio"
        />
        <link rel="canonical" href="https://www.vyugmetaverse.com/auth/login" />
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
              <TextField
                type={visible ? "text" : "password"}
                value={password}
                name="password"
                className="text-sm sm:text-base"
                placeholder="password"
                size="small"
                onChange={(e) => setPassword(e.target.value)}
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
                InputProps={{
                  style: { color: "white" },
                  classes: {
                    input: "description text-sm sm:text-base text-[#fff]",
                  },
                  endAdornment: (
                    <InputAdornment className="tw-me-4" position="end">
                      <IconButton
                        onClick={() => setVisible((prevState) => !prevState)}
                        edge="end"
                      >
                        {!visible ? (
                          <VisibilityOff sx={{ color: "white" }} />
                        ) : (
                          <Visibility sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <button
                disabled={loading && true}
                onClick={handleLogin}
                className="bg-[#fff] text-center uppercase text-[#000000] rounded-3xl text-sm sm:text-base header p-2"
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Log in"
                )}
              </button>
              <Typography
                variant="subtitle2"
                className="description text-xs sm:text-sm text-right mt-0 pt-0 text-[#fff]"
                id="forgot"
              >
                <Link
                  className="no-underline text-[#fff]"
                  to={"/auth/forgot-password"}
                >
                  Forgot Password ?
                </Link>
              </Typography>
            </div>
            <Typography
              variant="h2"
              className="header text-[#fff] text-center text-base sm:text-base"
            >
              Don't have Account yet?
            </Typography>
            <button
              className="bg-[#fff] uppercase px-10 text-[#000000] rounded-3xl mx-auto py-2 text-sm sm:text-base header"
              id="control"
              onClick={() => navigate("/auth/signup")}
            >
              create account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
