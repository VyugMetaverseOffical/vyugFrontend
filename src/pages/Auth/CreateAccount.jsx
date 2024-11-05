import React, { useEffect, useState } from "react";
import image1 from "../../images/login_image.webp";
import { useAuth } from "../../redux/counterSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [cvisible, setCvisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const { state } = useLocation();

  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

  const navigate = useNavigate();

  const handleUserid = (e) => {
    const { value } = e.target;

    if (value.length <= 12) {
      setEmail(e.target.value);
    }
  };

  useEffect(() => {
    if (!state) {
      navigate("/auth/signup");
    }
  }, [state, navigate]);

  const handleCreate = async () => {
    setLoading(true);
    if (!email || !password || !cpassword) {
      toast.error(<ToastError data={"Please fill all fields"} />, ErrorStyling);
      setLoading(false);
      return;
    }
    if (!regex.test(email.toLowerCase())) {
      toast.error(
        <ToastError
          data={"userID must contain at least 8 alphanumeric characters"}
        />,
        ErrorStyling
      );
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

    const signupobject = {
      userId: email,
      password: password,
      email: state,
    };
    try {
      const response = await protectedApiPost("users/register", signupobject);
      console.log("users/register", response);

      if (response) {
        toast.success(
          <ToastSuccess data={"Registered Successfully!"} />,
          SuccessStyling
        );
        navigate("/auth/login");
      }
    } catch (error) {      
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(
          <ToastError data={error?.response.data?.message?.error} />,
          ErrorStyling
        );
      } else {
        toast.error(
          <ToastError data={"An error ocurred. Please try again"} />,
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
        <title>Create Account - VYUG Metaverse</title>
        <meta name="description" content="Create a new account on your VYUG Metaverse. Sign up to access exclusive feature and content" />
        <meta name="keywords" content="Create account, new account" />
        <meta property="og:title" content="Create Account - VYUG Metaverse" />
        <meta property="og:description" content="Create a new account on your VYUG Metaverse. Sign up to access exclusive feature and content" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/auth/create-account" />
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
              ACCOUNT DETAILS
            </Typography>
            <div className="flex w-full flex-col gap-4">
              <Typography
                variant="subtitle2"
                className="description font-semibold text-sm sm:text-base text-[#fff]"
              >
                You'll need this to play in the<b> VYUG </b>
              </Typography>
              <TextField
                name="text"
                className="text-sm sm:text-base"
                variant="outlined"
                value={email}
                onChange={handleUserid}
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
                placeholder="User-Id"
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
              <Typography
                variant="subtitle2"
                className="description text-xs text-center text-[#fff]"
              >
                Use 8 or more character mixing letters & numbers{" "}
              </Typography>
              <button
                disabled={loading && true}
                onClick={handleCreate}
                className="bg-[#fff] text-center uppercase text-[#000000] rounded-3xl text-sm sm:text-base header p-2"
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Create Account"
                )}
              </button>
              <Typography
                variant="subtitle2"
                className="description font-semibold text-xs sm:text-sm text-center mt-0 pt-0 text-[#fff]"
              >
                By creating an account , I agree to the
                <Link className="hover:underline" to={"/terms-of-use"}>
                  {" "}
                  Term of use
                </Link>{" "}
                and acknowledge that i have read the{" "}
                <Link className="hover:underline" to={"/privacy-policy"}>
                  {" "}
                  Privacy Policy
                </Link>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
