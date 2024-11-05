import React, { useEffect, useState } from "react";
import image1 from "../../images/login_image.webp";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";
import { protectedApiPost } from "../../apis/api";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [cvisible, setCvisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/auth/forgot-password");
    }
  }, [state, navigate]);

  const handleResetPassword = async () => {
    setLoading(true);
    if (!password || !cpassword) {
      toast.error(<ToastError data={"Please fill all fields"} />, ErrorStyling);
      setLoading(false);
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error(
        <ToastError
          data={
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
          }
        />,
        ErrorStyling
      );
      setLoading(false);
      return;
    }
    if (password !== cpassword) {
      toast.error(<ToastError data={"Passwords do not match"} />, ErrorStyling);
      setLoading(false);
      return;
    }
    try {
      const Object = {
        email: state,
        password: password,
      };
      const response = await protectedApiPost("users/forgot-password", Object);
      console.log("users/forgot-password", response);

      if (response.status === 200) {
        toast.success(
          <ToastSuccess data={"Your password has been succesfully changed"} />,
          SuccessStyling
        );
        navigate("/auth/login");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(
          <ToastError data={error?.response.data?.error} />,
          ErrorStyling
        );
      } else {
        toast.error(
          <ToastError data={"An error occurred. Please try again"} />,
          ErrorStyling
        );
      }
      e.target.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Reset Password - VYUG Metaverse</title>
        <meta
          name="description"
          content="Reset it here to regain access to your account on VYUG Metaverse"
        />
        <meta name="keywords" content="reset password, forgot password" />
        <meta property="og:title" content="Reset Password - VYUG Metaverse" />
        <meta
          property="og:description"
          content="Reset it here to regain access to your account on VYUG Metaverse"
        />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/auth/reset-password"
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
              Create New Password
            </Typography>
            <div className="flex w-full flex-col gap-4">
              <Typography
                variant="subtitle2"
                className="description font-semibold text-sm sm:text-base text-[#fff]"
              >
                Use 8 or more characters mixing letters and numbers
              </Typography>
              <TextField
                type={visible ? "text" : "password"}
                value={password}
                name="password"
                className="text-sm sm:text-base"
                placeholder="new password"
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
              <TextField
                type={cvisible ? "text" : "password"}
                value={cpassword}
                name="password"
                className="text-sm sm:text-base"
                placeholder="confirm password"
                size="small"
                onChange={(e) => setCpassword(e.target.value)}
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
                        onClick={() => setCvisible((prevState) => !prevState)}
                        edge="end"
                      >
                        {!cvisible ? (
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
                onClick={handleResetPassword}
                className="bg-[#fff] text-center uppercase text-[#000000] rounded-3xl text-sm sm:text-base header p-2"
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
