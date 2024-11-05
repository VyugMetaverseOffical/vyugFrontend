import React, { useEffect, useRef, useState } from "react";

import image1 from "../images/login_image.webp";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { loginUserWithGoogle } from "../redux/userAuthActions";
import GoogleLoginComponent from "../components/GoogleLoginComponent";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { protectedApiGet, protectedApiPost } from "../apis/api";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAuth } from "../redux/counterSlice";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../components/toast";

function Login() {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [account, setAccount] = useState(false);
  const [avtar, setAvtar] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [signUpOtp, setSignupOtp] = useState("");
  const [isOtpSend, setOtpSend] = useState(false);
  const [isSignupOtpSend, setSignupOtpSend] = useState(false);
  const [isFg_OtpVerified, setFg_OtpVerified] = useState(false);
  const [signinPasswordVisible, setSigninPasswordVisible] = useState(false);
  const [signupPasswordVisible, setSignupPasswordVisible] = useState(false);
  const [fgnewPasswordVisible, setFgnewPasswordVisible] = useState(false);
  const [forgotLoader, setForgotLoader] = useState(false);
  const [fgconfirmPasswordVisible, setFgconfirmPasswordVisible] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const regex = /^[0-9]*$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

  const { setLogin, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleLoginSuccess = async (response, id) => {
    if (response.credential) {
      const token = response.credential;
      try {
        const userInfo = await handleGoogleResponse(token);
        const object = {
          userInfo: userInfo,
          id: id,
        };

        dispatch(loginUserWithGoogle(object));
      } catch (error) {
        console.error("Error:", error.message);
        // Handle error appropriately
      }
    }
  };

  const handleGoogleResponse = async (token) => {
    try {
      console.log(token);
      const response = await axios.get(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error.message);
      throw error; // Rethrow the error for handling in the caller function
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  const buttonHandler = (e) => {
    const buttonId = e.target.id;
    if (buttonId === "forgot") {
      setForgotPassword(true);
    }
    if (buttonId === "control") {
      setCreateAccount(true);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const [loading1, setLoading1] = useState(false);
  const handleClick1 = () => {
    setLoading1(true);
    // Simulate an API call or other asynchronous operation
    setTimeout(() => {
      setLoading1(false);
      // Continue with the actual submission or login process
    }, 2000); // Change this duration as needed
  };
  const submitSignIn = async (e) => {
    handleClick1();
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    if (!validateEmail(email)) {
      toast.error(<ToastError data={"Invalid email address"} />, ErrorStyling);
      return;
    }
    const password = formData.get("password");
    setLogin({ email, password });

    e.target.reset();
  };
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const submitForgotPassword = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPassword = formData.get("fg_password");
    const confirmPassword = formData.get("fg_con_password");
    console.log(confirmPassword);
    if (newPassword !== confirmPassword) {
      console.log("Please enter");
      toast.error(
        <ToastError data={"Password does not match"} />,
        ErrorStyling
      );
      e.target.reset();
    } else if (!passwordRegex.test(newPassword)) {
      toast.error(
        <ToastError data={"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"} />,
        ErrorStyling
      );
      e.target.reset();
    } else {
      try {
        const object = {
          email: email,
          password: newPassword,
        };
        const response = await protectedApiPost(
          `users/forgot-password`,
          object
        );

        console.log(response.status);

        if (response.status === 200) {
          toast.success(
            <ToastSuccess
              data={"Your password has been succesfully changed"}
            />,
            SuccessStyling
          );
          setForgotPassword(false);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
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
      }
    }
  };

  const forgotEmail = async (e) => {
    e.preventDefault();
    setForgotLoader(true);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    if (!validateEmail(email)) {
      toast.error(<ToastError data={"Invalid email address"} />, ErrorStyling);
      setForgotLoader(false);
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
        setOtpSend(true);
        setEmail(email);
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
      setForgotLoader(false);
    }
  };
  const [loading2, setLoading2] = useState(false);
  const handleClick2 = () => {
    setLoading2(true);
    // Change this duration as needed
  };
  const verifyEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    try {
      if (!validateEmail(email)) {
        toast.error(
          <ToastError data={"Invalid email address"} />,
          ErrorStyling
        );
        setIsLoading(false);
        e.target.reset();
        return;
      }
      const object = {
        email: email,
        type: "signup",
      };
      const response = await protectedApiPost("users/verify-email", object);
      console.log("abbbh", response.data.substring(0, 3));

      if (response.data.substring(0, 3) === "250") {
        toast.success(
          <ToastSuccess data={"OTP has been sent to your email"} />,
          SuccessStyling
        );
        setSignupOtpSend(true);
        setEmail(email);
      } else if (response && response.result.responseCode === 535) {
        toast.error(<ToastError data={"Some error occured"} />, ErrorStyling);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data.message);
        toast.error(
          <ToastError data={error?.response.data?.message.message} />,
          ErrorStyling
        );
      } else {
        toast.error(
          <ToastError data={"An error occurred. Please try again !"} />,
          ErrorStyling
        );
      }
    } finally {
      setIsLoading(false);
      e.target.reset();
    }
  };

  const forgotOtp = async () => {
    console.log("chl rha hai", email, otp);

    try {
      const object = {
        email: email,
        otp: otp,
      };
      const response = await protectedApiPost("users/verify-otp", object);
      console.log(response);

      if (response) {
        toast.success(
          <ToastSuccess data={"OTP verified successfully"} />,
          SuccessStyling
        );
        setFg_OtpVerified(true);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(
          <ToastError data={error?.response.data?.error} />,
          ErrorStyling
        );
      } else {
        toast.error(
          <ToastError data={"An error ocurred. Please try again !"} />,
          ErrorStyling
        );
      }
    }
  };

  const signupOtp = async (e) => {
    // e.preventDefault(); // Prevents the default form submission behavior
    // const formData = new FormData(e.target);
    // const otp = formData.get("otp");

    try {
      const object = {
        email: email,
        otp: String(signUpOtp),
      };

      const response = await protectedApiPost("users/verify-otp", object);
      console.log(response);

      if (response) {
        toast.success(
          <ToastSuccess data={"OTP verified successfully"} />,
          SuccessStyling
        );
        setAccount(true);
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
      setSignupOtp("");
    }
  };

  const submitSignUp = async (e) => {
    e.preventDefault();
    handleClick2();
    const formData = new FormData(e.target);
    const userId = formData.get("email");
    const password = formData.get("password");

    const signupobject = {
      userId: userId,
      password: password,
      email: email,
    };
    console.log(signupobject);
    try {
      const response = await protectedApiPost("users/register", signupobject);
      console.log("users/register", response);

      if (response) {
        setLoading2(false);
        setCreateAccount(false);
        setForgotPassword(false);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(
          <ToastError data={error?.response.data?.error} />,
          ErrorStyling
        );
      } else {
        toast.error(
          <ToastError data={"An error ocurred. Please try again"} />,
          ErrorStyling
        );
      }
    } finally {
      setLoading2(false);
      e.target.reset();
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!forgotPassword && !createAccount ? (
        <Grid2 xs={12} py={5} container className="flex justify-center">
          <Grid2
            xs={11}
            sm={10}
            container
            className="flex flex-col text-[#fff] justify-center gap-10"
          >
            <Grid2
              xs={12}
              sm={7}
              md={5.7}
              lg={5}
              container
              className="flex flex-col text-[#fff] justify-center gap-5"
            >
              <Grid2
                xs={12}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <ArrowBackIosNewOutlinedIcon fontSize="normal" />
                <Typography
                  variant="subtitle2"
                  className="description text-sm sm:text-base text-[#fff]"
                >
                  Back
                </Typography>
              </Grid2>
              <Typography
                variant="h3"
                className="description text-start text-xl sm:text-2xl md:text-3xl pb-5 text-[#fff]"
              >
                WELCOME BACK TO THE <br />
                <b>VYUG METAVERSE</b>
              </Typography>
              <form
                className="flex flex-col text-[#fff] justify-center gap-5"
                onSubmit={submitSignIn}
              >
                <TextField
                  required
                  name="email"
                  className="tw-text-sm sm:tw-text-base"
                  variant="outlined"
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
                      input: "description text-xs sm:text-sm text-[#fff]",
                    },
                  }}
                />
                <TextField
                  type={signinPasswordVisible ? "text" : "password"}
                  required
                  name="password"
                  className="tw-text-sm sm:tw-text-base"
                  placeholder="password"
                  size="small"
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
                      input: "description text-xs sm:text-sm text-[#fff]",
                    },
                    endAdornment: (
                      <InputAdornment className="tw-me-4" position="end">
                        <IconButton
                          onClick={() =>
                            setSigninPasswordVisible((prevState) => !prevState)
                          }
                          edge="end"
                        >
                          {!signinPasswordVisible ? (
                            <VisibilityOff sx={{ color: "white" }} />
                          ) : (
                            <Visibility sx={{ color: "white" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Grid2 xs={12} className="flex flex-col justify-center gap-2">
                  <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    className="bg-[#fff] text-[#000000] rounded-3xl text-xs header sm:text-sm p-2"
                  >
                    {loading1 ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      "Log in"
                    )}
                  </Button>
                  <Typography
                    variant="subtitle2"
                    className="description text-xs sm:text-sm text-right mt-0 pt-0 cursor-pointer text-[#fff]"
                    id="forgot"
                    onClick={buttonHandler}
                  >
                    Forgot Password ?
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="description text-center text-xs text-[#fff]"
                  >
                    OR
                  </Typography>
                  {/* <Typography
                    variant="h2"
                    className="header text-[#fff] text-center text-base sm:text-xl"
                  >
                    Continue with
                  </Typography> */}
                </Grid2>
              </form>
              {/* <Box className="no-underline mx-auto cursor-pointer">
                <GoogleLoginComponent
                  onGoogleLoginSuccess={(response) =>
                    handleGoogleLoginSuccess(response, "sign_in")
                  }
                  onGoogleLoginFailure={handleGoogleLoginFailure}
                />
              </Box> */}
              {/* <img
                src={google}
                className="w-12 mx-auto cursor-pointer"
              /> */}
              <Typography
                variant="h2"
                className="header text-[#fff] text-center text-xs sm:text-sm"
              >
                Don't have Account yet?
              </Typography>
              <Button
                variant="contained"
                size="small"
                className="bg-[#fff] text-[#000000] rounded-3xl mx-auto py-2 px-3 text-xs header sm:text-sm"
                id="control"
                onClick={buttonHandler}
              >
                create account
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      ) : forgotPassword ? (
        !isOtpSend ? (
          <Grid2 xs={12} py={5} container className="flex justify-center">
            <Grid2
              xs={11}
              sm={10}
              container
              className="flex flex-col text-[#fff] justify-center gap-10"
            >
              <Grid2
                xs={12}
                sm={7}
                md={5.7}
                lg={5}
                container
                className="flex flex-col text-[#fff] justify-center gap-5"
              >
                <Grid2
                  xs={12}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setForgotPassword(false)}
                >
                  <ArrowBackIosNewOutlinedIcon fontSize="normal" />
                  <Typography
                    variant="subtitle2"
                    className="description text-sm sm:text-base text-[#fff]"
                  >
                    Back
                  </Typography>
                </Grid2>
                <Typography
                  variant="h3"
                  className="description text-start text-xl sm:text-3xl pb-5 text-[#fff]"
                >
                  Forgot Password
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="description text-sm sm:text-base text-[#fff]"
                >
                  Regain access with a simple password reset
                </Typography>
                <form
                  className="flex flex-col text-[#fff] justify-center gap-5"
                  onSubmit={forgotEmail}
                >
                  <TextField
                    required
                    name="email"
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
                        input: "description text-xs sm:text-sm text-[#fff]",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={forgotLoader && true}
                    size="small"
                    className="bg-[#fff] text-[#000000] rounded-3xl text-xs header sm:text-sm p-2"
                  >
                    {forgotLoader ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      "Send OTP"
                    )}
                  </Button>
                  <Typography
                    variant="subtitle2"
                    className="header cursor-pointer text-[#fff] text-center text-sm sm:text-base"
                  >
                    Resend
                  </Typography>
                </form>
              </Grid2>
            </Grid2>
          </Grid2>
        ) : !isFg_OtpVerified ? (
          <Grid2 xs={12} py={5} container className="flex justify-center">
            <Grid2
              xs={11}
              sm={10}
              container
              className="flex flex-col text-[#fff] justify-center gap-10"
            >
              <Grid2
                xs={12}
                sm={7}
                md={5.7}
                lg={5}
                container
                className="flex flex-col text-[#fff] justify-center gap-5"
              >
                <Grid2
                  xs={12}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setForgotPassword(false)}
                >
                  <ArrowBackIosNewOutlinedIcon fontSize="normal" />
                  <Typography
                    variant="subtitle2"
                    className="description text-sm sm:text-base text-[#fff]"
                  >
                    Back
                  </Typography>
                </Grid2>
                <Typography
                  variant="h3"
                  className="description text-start text-xl sm:text-2xl md:text-3xl text-[#fff]"
                >
                  Enter OTP
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="header text-sm sm:text-base text-[#fff]"
                >
                  One time password
                </Typography>
                <TextField
                  required
                  name="fg_otp"
                  value={otp}
                  onChange={(e) =>
                    regex.test(e.target.value) && setOtp(e.target.value)
                  }
                  className="tw-text-sm sm:tw-text-base"
                  variant="outlined"
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
                  size="small"
                  fullWidth
                  InputProps={{
                    style: { color: "white" },
                    classes: {
                      input: "description text-[#fff]",
                    },
                  }}
                />
                <Button
                  onClick={forgotOtp}
                  variant="contained"
                  type="submit"
                  size="small"
                  className="bg-[#fff] text-[#000000] rounded-3xl py-3 text-xs header sm:text-sm  p-2"
                >
                  Submit
                </Button>
              </Grid2>
            </Grid2>
          </Grid2>
        ) : (
          <Grid2 xs={12} py={5} container className="flex justify-center">
            <Grid2
              xs={11}
              sm={10}
              container
              className="flex flex-col text-[#fff] justify-center gap-10"
            >
              <Grid2
                xs={12}
                sm={7}
                md={5.7}
                lg={5}
                container
                className="flex flex-col text-[#fff] justify-center gap-5"
              >
                <Grid2
                  xs={12}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setForgotPassword(false)}
                >
                  <ArrowBackIosNewOutlinedIcon fontSize="normal" />
                  <Typography
                    variant="subtitle2"
                    className="description text-sm sm:text-base text-[#fff]"
                  >
                    Back
                  </Typography>
                </Grid2>
                <Typography
                  variant="h3"
                  className="description text-start text-xl sm:text-3xl text-[#fff]"
                >
                  Create New Password
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="header text-sm sm:text-base text-[#fff]"
                >
                  Use 8 or more characters mixing letters and numbers
                </Typography>
                <form
                  className="flex flex-col text-[#fff] justify-center gap-5"
                  onSubmit={submitForgotPassword}
                >
                  <TextField
                    name="fg_password"
                    placeholder="Enter New Password"
                    type={fgnewPasswordVisible ? "text" : "password"}
                    required
                    className="tw-text-sm sm:tw-text-base"
                    size="small"
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
                        input: "description text-xs sm:text-sm text-[#fff]",
                      },
                      endAdornment: (
                        <InputAdornment className="tw-me-4" position="end">
                          <IconButton
                            onClick={() =>
                              setFgnewPasswordVisible((prevState) => !prevState)
                            }
                            edge="end"
                          >
                            {!fgnewPasswordVisible ? (
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
                    name="fg_con_password"
                    placeholder="Confirm New Password"
                    type={fgconfirmPasswordVisible ? "text" : "password"}
                    required
                    className="tw-text-sm sm:tw-text-base"
                    size="small"
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
                        input: "description text-xs sm:text-sm text-[#fff]",
                      },
                      endAdornment: (
                        <InputAdornment className="tw-me-4" position="end">
                          <IconButton
                            onClick={() =>
                              setFgconfirmPasswordVisible(
                                (prevState) => !prevState
                              )
                            }
                            edge="end"
                          >
                            {!fgconfirmPasswordVisible ? (
                              <VisibilityOff sx={{ color: "white" }} />
                            ) : (
                              <Visibility sx={{ color: "white" }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    className="header text-sm sm:text-base text-[#fff]"
                  >
                    Use 8 or more characters mixing letters and numbers
                  </Typography>

                  <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    className="bg-[#fff] text-[#000000] rounded-3xl py-3 text-xs header sm:text-sm p-2"
                  >
                    Save
                  </Button>
                </form>
              </Grid2>
            </Grid2>
          </Grid2>
        )
      ) : !account ? (
        !isSignupOtpSend ? (
          <Grid2 xs={12} py={5} container className="flex justify-center">
            <Grid2
              xs={11}
              sm={10}
              container
              className="flex flex-col text-[#fff] justify-center gap-10"
            >
              <Grid2
                xs={12}
                sm={7}
                md={5.7}
                lg={5}
                container
                className="flex flex-col text-[#fff] justify-center gap-5"
              >
                <Grid2
                  xs={12}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  <ArrowBackIosNewOutlinedIcon fontSize="normal" />
                  <Typography
                    variant="subtitle2"
                    className="description text-sm sm:text-base text-[#fff]"
                  >
                    Back
                  </Typography>
                </Grid2>
                <Typography
                  variant="h3"
                  className="description text-start text-xl sm:text-3xl pb-5 text-[#fff]"
                >
                  Let's Explore <br />
                  <b>VYUG TOGETHER</b>
                </Typography>
                <form
                  className="flex flex-col text-[#fff] justify-center gap-5"
                  onSubmit={verifyEmail}
                >
                  <TextField
                    required
                    name="email"
                    className="tw-text-sm sm:tw-text-base"
                    variant="outlined"
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
                        input: "description text-xs sm:text-sm text-[#fff]",
                      },
                    }}
                  />
                  <Grid2 xs={12} className="flex flex-col justify-center gap-2">
                    <Button
                      variant="contained"
                      type="submit"
                      size="small"
                      className="bg-[#fff] text-[#000000] rounded-3xl text-xs header sm:text-sm p-2"
                    >
                      {isLoading ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        "Log in"
                      )}
                    </Button>
                    <Typography
                      variant="subtitle2"
                      className="description text-center text-xs text-[#fff]"
                    >
                      OR
                    </Typography>
                    {/* <Typography
                      variant="h2"
                      className="header text-center text-2xl sm:text-3xl text-[#fff]"
                    >
                      Continue with
                    </Typography> */}
                  </Grid2>
                </form>
                {/* <Box className="no-underline mx-auto cursor-pointer">
                  <GoogleLoginComponent
                    onGoogleLoginSuccess={(response) =>
                      handleGoogleLoginSuccess(response, "sign_up")
                    }
                    onGoogleLoginFailure={handleGoogleLoginFailure}
                  />
                </Box> */}
                <Typography
                  variant="h2"
                  className="header text-center text-sm sm:text-base text-[#fff]"
                >
                  Don't have Account yet?
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  className="bg-[#fff] text-[#000000] rounded-3xl mx-auto py-2 px-3 text-xs header sm:text-sm"
                  id="control"
                  onClick={buttonHandler}
                >
                  create account
                </Button>
              </Grid2>
            </Grid2>
          </Grid2>
        ) : (
          <Grid2 xs={12} py={5} container className="flex justify-center">
            <Grid2
              xs={11}
              sm={10}
              container
              className="flex flex-col text-[#fff] justify-center gap-10"
            >
              <Grid2
                xs={12}
                sm={7}
                md={5.7}
                lg={5}
                container
                className="flex flex-col text-[#fff] justify-center gap-5 text-white"
              >
                <Grid2
                  xs={12}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setSignupOtpSend(false)}
                >
                  <ArrowBackIosNewOutlinedIcon fontSize="normal" />
                  <Typography
                    variant="subtitle2"
                    className="description text-sm sm:text-base text-[#fff]"
                  >
                    Back
                  </Typography>
                </Grid2>
                <Typography
                  variant="h3"
                  className="description text-start text-xl sm:text-3xl text-[#fff]"
                >
                  Enter OTP
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="header text-sm sm:text-base text-[#fff]"
                >
                  One time password
                </Typography>
                <TextField
                  required
                  name="otp"
                  value={signUpOtp}
                  onChange={(e) =>
                    regex.test(e.target.value) && setSignupOtp(e.target.value)
                  }
                  className="tw-text-sm sm:tw-text-base"
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
                    style: { color: "white" }, // This ensures input text color is white
                  }}
                />
                <Button
                  onClick={signupOtp}
                  variant="contained"
                  type="submit"
                  size="small"
                  className="bg-[#fff] text-[#000000] rounded-3xl py-3 text-xs header sm:text-sm  p-2"
                >
                  Submit
                </Button>
              </Grid2>
            </Grid2>
          </Grid2>
        )
      ) : !avtar ? (
        <Grid2 xs={12} py={5} container className="flex justify-center">
          <Grid2
            xs={11}
            sm={10}
            container
            className="flex flex-col text-[#fff] justify-center gap-10"
          >
            <Grid2
              xs={12}
              sm={7}
              md={5.7}
              lg={5}
              container
              className="flex flex-col text-[#fff] justify-center gap-5"
            >
              <Grid2
                xs={12}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <ArrowBackIosNewOutlinedIcon fontSize="normal" />
                <Typography
                  variant="subtitle2"
                  className="description text-sm sm:text-base text-[#fff]"
                >
                  Back
                </Typography>
              </Grid2>
              <Typography
                variant="h3"
                className="description text-start text-xl sm:text-3xl text-[#fff]"
              >
                ACCOUNT DETAILS
              </Typography>
              <Typography
                variant="subtitle2"
                className="description text-start text-sm sm:text-base text-[#fff]"
              >
                You'll need this to play in the<b> VYUG </b>
              </Typography>
              <form
                className="flex flex-col text-[#fff] justify-center gap-5"
                onSubmit={submitSignUp}
              >
                <TextField
                  required
                  name="email"
                  placeholder="User-Id"
                  className="tw-text-sm sm:tw-text-base"
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
                    style: { color: "white" }, // This ensures input text color is white
                    classes: {
                      input: "description text-xs sm:text-sm text-[#fff]", // Tailwind classes for additional styling
                    },
                  }}
                />
                <TextField
                  name="password"
                  placeholder="password"
                  type={signupPasswordVisible ? "text" : "password"}
                  required
                  className="tw-text-sm sm:tw-text-base"
                  size="small"
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
                      input: "description text-xs sm:text-sm text-[#fff]",
                    },
                    endAdornment: (
                      <InputAdornment className="tw-me-4" position="end">
                        <IconButton
                          onClick={() => {
                            setSignupPasswordVisible((prevState) => !prevState);
                          }}
                          edge="end"
                        >
                          {!signupPasswordVisible ? (
                            <VisibilityOff sx={{ color: "white" }} />
                          ) : (
                            <Visibility sx={{ color: "white" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography
                  variant="subtitle2"
                  className="description text-xs text-center text-[#fff]"
                >
                  Use 8 or more character mixing letters & numbers{" "}
                </Typography>
                <Button
                  variant="contained"
                  type="submit"
                  size="small"
                  className="bg-[#fff] text-[#000000] rounded-3xl text-xs header sm:text-sm  p-2"
                >
                  Create Account
                </Button>
                <Typography
                  variant="subtitle2"
                  className="header text-xs sm:text-sm text-center mt-0 pt-0 cursor-pointer text-[#fff]"
                >
                  By creating an account , I agree to the Term of use and
                  acknowledge that i have read the Privacy Policy
                </Typography>
              </form>
            </Grid2>
          </Grid2>
        </Grid2>
      ) : (
        <Grid2 xs={12} py={5} container className="flex justify-center">
          <Grid2
            xs={11}
            sm={10}
            container
            className="flex flex-col text-[#fff] justify-center gap-10"
          >
            <Grid2
              xs={12}
              sm={7}
              md={5.7}
              lg={5}
              container
              className="flex flex-col text-[#fff] justify-center gap-5"
            >
              <Grid2
                xs={12}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setForgotPassword(false)}
              >
                <ArrowBackIosNewOutlinedIcon fontSize="normal" />
                <Typography
                  variant="subtitle2"
                  className="description text-sm sm:text-base text-[#fff]"
                >
                  Back
                </Typography>
              </Grid2>
              <Typography
                variant="h3"
                className="description text-start text-xl sm:text-3xl text-[#fff]"
              >
                CREATE YOUR <b>AVATAR</b>
              </Typography>
              <Typography
                variant="subtitle2"
                className="header text-sm sm:text-base text-[#fff]"
              >
                Ready to meet yourself?
              </Typography>
              <Button
                onClick={() => navigate("/avatar")}
                variant="contained"
                type="submit"
                size="small"
                className="bg-[#fff] text-[#000000] rounded-3xl py-3 text-xs header sm:text-sm"
              >
                Create Account
              </Button>
              <VisibilityIcon />
            </Grid2>
          </Grid2>
        </Grid2>
      )}
    </div>
  );
}

export default Login;
