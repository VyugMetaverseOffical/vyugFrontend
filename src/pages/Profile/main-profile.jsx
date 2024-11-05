import React, { useState, useRef } from "react";
import banner1 from "../../images/profile-banner.webp";
import profile from "../../images/profile.webp";
import { useAuth } from "../../redux/counterSlice";
import { protectedApiPost } from "../../apis/api";
import {
  Box,
  Button,
  Input,
  Select,
  MenuItem,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Header from "../../components/Head";
import { ErrorStyling, ToastError } from "../../components/toast";
import toast from "react-hot-toast";

const MainProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");

  const regexAlpha = /^[a-zA-Z]*$/;
  const regexNumeric = /^\d*$/;
  const { user, isLoggedIn } = useAuth();
  const [position, setPosition] = useState(false);
  const isAppBarTransparent = true;
  const [file, setFile] = useState(null);
  const [id, setId] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    let selectedFile = e.target.files[0];
    e.preventDefault();
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(selectedFile?.type)) {
      toast.error(
        <ToastError data={"Only JPEG, PNG, and JPG images are allowed"} />,
        ErrorStyling
      );
      return;
    } else {
      if (selectedFile !== null) {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("id", e.target.id);
        const response = await protectedApiPost("users/profile-pic", formData);
      } else {
        console.log("No file selected");
        return;
      }
    }
  };

  const handleClick = async () => {
    try {
      if (file !== null) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("id", id);
        const response = await postImageApi("/p2p/chat/image-upload", formData);
      } else {
        console.log("No file selected");
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(<ToastError data={"Failed to send message"} />, ErrorStyling);
    }
  };

  const handleUpload = async () => {
    console.log("adewdwew");
    console.log(file);
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", id);

    try {
      const response = await protectedApiPost(`users/picture`, formData);
      console.log("File uploaded successfully", response);
    } catch (error) {
      toast.error(<ToastError data={"Failed to upload file"} />, ErrorStyling);
    }
  };
  const dateHandler = () => {
    const date = document.getElementById("dob");
    date.showPicker();
  };

  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });
  const handleFormSubmit = async () => {
    try {
      const object = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        code: code,
        state: state,
        country: country,
        dob: dob,
        gender: gender,
        avatar: "",
      };
      const response = await protectedApiPost(`users/full-profile`, object);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <Header isTransparent={position} isHeaderText={false} />
      <Grid2
        xs={12}
        container
        sx={{ backgroundColor: "rgba(34, 32, 32, 1)" }}
        className="flex pb-10 justify-center"
      >
        <Grid2 xs={12} container className="flex justify-center">
          <div className="relative group" onClick={handleClick}>
            <img
              src={banner1}
              className="h-[50vh] w-[100%] md:h-[100%] md:w-[100%] transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-white text-lg font-semibold">
                Add Background
              </span>
            </div>
          </div>
        </Grid2>
        <Grid2
          xs={11}
          container
          className="flex flex-col justify-center text-[#fff]"
        >
          <Typography className="text-xl sm:text-3xl pt-5 description text-[#fff]">
            <b>Welcome Home, </b>Gaurav !
          </Typography>
          <Typography className="text-xs sm:text-sm pb-10 description text-[#fff]">
            {!isLoggedIn ? "User" : user.userId}
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <Grid2 xs={12} container className="flex justify-center gap-5">
              <Grid2
                xs={12}
                md={9}
                container
                className="flex flex-col justify-center"
              >
                <Grid2 xs={12} container className="flex justify-center gap-8">
                  <Grid2 xs={11} sm={2.8} container className="flex">
                    <div className="relative group">
                      <img
                        src={profile}
                        className="lg:h-[30vh] sm:w-[100%] h-[25vh] xs:w-[100%] transition-opacity duration-300 group-hover:opacity-50"
                      />
                      <input
                        id="attachPic"
                        type="file"
                        hidden={true}
                        onChange={handleFileChange}
                      />
                      <label htmlFor="attachPic" className="tw-cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="text-white text-lg font-semibold">
                            Add Picture
                          </span>
                        </div>
                      </label>
                    </div>
                  </Grid2>

                  <Grid2
                    xs={12}
                    sm={8.5}
                    container
                    className="flex justify-center"
                  >
                    <Grid2
                      xs={12}
                      container
                      className="flex flex-col justify-center"
                    >
                      <Typography className="text-sm sm:text-base header text-[#fff] pt-5">
                        Personal Details
                      </Typography>
                      <Typography className="text-sm sm:text-base header text-[#fff]">
                        Share a little about yourself!
                      </Typography>
                      <Grid2
                        xs={12}
                        container
                        className="flex pt-5 justify-center flex-wrap gap-3"
                      >
                        <Grid2 xs={5.7} className="flex justify-center">
                          <TextField
                            name="firstName"
                            value={firstName}
                            onChange={(e) =>
                              regexAlpha.test(e.target.value) &&
                              setFirstName(e.target.value)
                            }
                            sx={{
                              "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: "10px 14px",
                                },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "transparent", // Initial border color
                                },
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
                            }}
                            placeholder="First Name"
                            size="small"
                            fullWidth
                            InputProps={{
                              style: { color: "white" },
                              classes: {
                                input:
                                  "description text-[#fff] text-xs sm:text-sm",
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 xs={5.7} className="flex justify-center">
                          <TextField
                            name="lastName"
                            value={lastName}
                            onChange={(e) =>
                              regexAlpha.test(e.target.value) &&
                              setLastName(e.target.value)
                            }
                            sx={{
                              "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: "10px 14px",
                                },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "transparent", // Initial border color
                                },
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
                            }}
                            placeholder="Last Name"
                            size="small"
                            fullWidth
                            InputProps={{
                              style: { color: "white" },
                              classes: {
                                input:
                                  "description text-[#fff] text-xs sm:text-sm",
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2
                          xs={5.7}
                          sm={4.4}
                          md={4}
                          lg={3.2}
                          className="flex justify-center"
                        >
                          <TextField
                            type={"date"}
                            id={"dob"}
                            onClick={dateHandler}
                            fullWidth
                            sx={{
                              "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: "10px 14px",
                                },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "transparent",
                                },
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
                              color: "white",
                              colorScheme: "dark",
                              "& input::-webkit-calendar-picker-indicator": {
                                cursor: "pointer",
                              },
                            }}
                            InputProps={{
                              style: { color: "white" },
                              classes: {
                                input:
                                  "description text-[#fff] text-xs sm:text-sm",
                              },
                            }}
                            inputProps={{
                              max: new Date().toISOString().split("T")[0],
                            }}
                          />
                        </Grid2>
                        <Grid2
                          xs={5.7}
                          sm={3.2}
                          md={4}
                          lg={2.4}
                          className="flex justify-center"
                        >
                          <Select
                            fullWidth
                            label="Gender"
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                            displayEmpty
                            className="description text-[#fff] text-xs sm:text-sm"
                            renderValue={(value) => value || "Gender"}
                            sx={{
                              "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: "10px 14px",
                                },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "transparent", // Initial border color
                                },
                                "&:hover fieldset": {
                                  borderColor: "transparent", // Hover border color
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "transparent", // Focused border color
                                },
                              },
                              border: "2px solid white",
                              borderRadius: "30px",
                              backgroundColor: "transparent",
                              color: "white",
                              "& .MuiSvgIcon-root": { color: "white" },
                              colorScheme: "dark",
                            }}
                          >
                            <MenuItem
                              className="description text-[#fff] text-xs sm:text-sm"
                              value=""
                            >
                              Gender
                            </MenuItem>
                            <MenuItem
                              className="description text-[#fff] text-xs sm:text-sm"
                              value="Male"
                            >
                              Male
                            </MenuItem>
                            <MenuItem
                              className="description text-[#fff] text-xs sm:text-sm"
                              value="Female"
                            >
                              Female
                            </MenuItem>
                          </Select>
                        </Grid2>
                        <Grid2
                          xs={5.5}
                          sm={3.5}
                          md={3.2}
                          lg={2.4}
                          className="flex justify-center"
                        >
                          <TextField
                            name="code"
                            value={code}
                            onChange={(e) =>
                              regexNumeric.test(e.target.value) &&
                              setCode(e.target.value)
                            }
                            sx={{
                              "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: "10px 14px",
                                },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "transparent", // Initial border color
                                },
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
                            }}
                            placeholder="Code"
                            size="small"
                            fullWidth
                            InputProps={{
                              style: { color: "white" },
                              classes: {
                                input:
                                  "description text-[#fff] text-xs sm:text-sm",
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2
                          xs={5.5}
                          // sm={3}
                          md={3.5}
                          lg={3.2}
                          className="flex justify-center"
                        >
                          <TextField
                            name="contactNo"
                            value={phone}
                            onChange={(e) =>
                              regexNumeric.test(e.target.value) &&
                              setPhone(e.target.value)
                            }
                            sx={{
                              "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: "10px 14px",
                                },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "transparent", // Initial border color
                                },
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
                            }}
                            placeholder="Contact Number"
                            size="small"
                            fullWidth
                            InputProps={{
                              style: { color: "white" },
                              classes: {
                                input:
                                  "description text-[#fff] text-xs sm:text-sm",
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2
                          xs={5.7}
                          md={3.8}
                          lg={5.7}
                          className="flex justify-center"
                        >
                          <TextField
                            name="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            sx={{
                              "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: "10px 14px",
                                },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "transparent", // Initial border color
                                },
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
                            }}
                            placeholder="State"
                            size="small"
                            fullWidth
                            InputProps={{
                              style: { color: "white" },
                              classes: {
                                input:
                                  "description text-[#fff] text-xs sm:text-sm",
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2
                          xs={5.7}
                          md={4}
                          lg={5.7}
                          className="flex justify-center"
                        >
                          <TextField
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            sx={{
                              "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  padding: "10px 14px",
                                },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "transparent", // Initial border color
                                },
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
                            }}
                            placeholder="Country"
                            size="small"
                            fullWidth
                            InputProps={{
                              style: { color: "white" },
                              classes: {
                                input:
                                  "description text-[#fff] text-xs sm:text-sm",
                              },
                            }}
                          />
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                </Grid2>
                <div className="pt-10 text-sm sm:text-base header text-[#fff]">
                  About Me
                </div>
                <div className="w-full pt-1">
                  <TextField
                    name="about"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    multiline
                    rows={10}
                    sx={{
                      "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          padding: "10px 14px",
                        },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "transparent", // Initial border color
                        },
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
                    }}
                    size="small"
                    fullWidth
                    InputProps={{
                      style: { color: "white" },
                      classes: {
                        input: "description text-[#fff] text-xs sm:text-sm",
                      },
                    }}
                  />
                </div>
              </Grid2>

              <Grid2 xs={12} sm={8} md={2.7} className="flex flex-col gap-5">
                <Typography
                  variant="subtitle2"
                  className="header mx-auto md:w-full text-sm rounded-3xl text-center sm:text-base px-20 md:px-10 py-2 text-[#000000] bg-[#fff] cursor-pointer uppercase"
                >
                  Avatar
                </Typography>
                <div className="w-full">
                  <TextField
                    name="avatar"
                    multiline
                    rows={22}
                    sx={{
                      "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          padding: "10px 14px",
                        },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "transparent", // Initial border color
                        },
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
                    }}
                    size="small"
                    fullWidth
                    InputProps={{
                      style: { color: "white" },
                      classes: {
                        input: "description text-[#fff] text-xs sm:text-sm",
                      },
                    }}
                  />
                </div>
              </Grid2>
            </Grid2>
          </form>
        </Grid2>
      </Grid2>
    </>
  );
};

export default MainProfile;
