import React, { useState ,useDeferredValue,useEffect} from "react";
import Header from "../components/header";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { handleScrollAnimation ,handleTypeAnimation,handleTextAnimation } from "../lib/animations";

const Investor = () => {
  const [position, setPosition] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const regexAlpha = /^[a-zA-Z]*$/;
  const regexNumeric = /^\d*$/;
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [animation2Triggered, setAnimation2Triggered] = useState(false);

  const isAppBarTransparent = true;
  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });

  const sectors = [
    {
      id: 1,
      name: "Education",
    },
    {
      id: 2,
      name: "Entertainment",
    },
    {
      id: 3,
      name: "Games",
    },
    {
      id: 4,
      name: "Events",
    },
    {
      id: 5,
      name: "Corporate",
    },
    {
      id: 6,
      name: "Ecommerce",
    },
    {
      id: 7,
      name: "Tourism",
    },
    {
      id: 8,
      name: "Fun Parks",
    },
    {
      id: 9,
      name: "Hospitality",
    },
    {
      id: 10,
      name: "Politics",
    },
  ];
  useEffect(() => {
    handleScrollAnimation("rw2", null, "rwt2");
    const handleScroll = () => {
      handleScrollAnimation("rw1", null, "rwt1");
      handleTypeAnimation("rw1", setAnimationTriggered);
      handleTypeAnimation("rw3", setAnimation2Triggered);
      sectors.forEach((_, index) => {
        const id1 = `an${index}`;
        const id2 = `ant${index}`;
        handleTextAnimation(id1, id2);
      });
    };


    console.log("Loading metadata");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Grid2 xs={12} container className="flex justify-center">
      <Header isTransparent={isAppBarTransparent} position={true} />
      <Grid2
        xs={12}
        container
        className="flex flex-col items-center justify-center pt-32" id="rw1"
      >
        <Typography
          variant="h2"
          className="header text-[#00000091] text-xl sm:text-3xl pt-10"
        >
          
          {animationTriggered && (
            <TypeAnimation
              sequence={[' Be an Investor', 2000]}
              wrapper="span"
              speed={30}
              repeat={0}
              cursor={false}
            />
          )}
         
        </Typography>
        <Grid2 xs={11} sm={10} container className="flex justify-center pt-10">
          <Typography
            variant="subtitle2"
            className="description text-xs sm:text-sm text-center" id="rwt1"
          >
            Join hands to shape the future of virtual reality in the VYUG
            Metaverse. Don't miss this ground-floor opportunity in the booming
            metaverse sphere. VYUG is a game changer that is leading to create a
            next-generation platform with enticing experiences, and vibrant
            communities that unlock glittering opportunities for monetization.
            Your investment is not just backing the platform but developing a
            pathway for human connection and digital interaction. <br /> Solidly
            built technical structure and scalable architecture will give a real
            lifelike experience to users, and guarantee a huge customer base in
            VYUG Metaverse. An exceptional virtual ecosystem and potential
            return on investments. This is your chance to be at the forefront of
            the metaverse revolution - join us in shaping the future of virtual
            interaction.
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        xs={12}
        container
        className="flex flex-col items-center text-[#00000091] justify-center my-5 sm:my-10 py-5 sm:py-10 bg-[#FDE8D657]"
      >
        <Grid2 xs={11} sm={10}>
          <Typography variant="h2" className="description text-xl sm:text-3xl">
            GET IN TOUCH
          </Typography>
        </Grid2>
        <Grid2
          xs={11}
          md={10}
          container
          className="flex justify-center gap-4 sm:gap-4 md:gap-6 lg:gap-10 pt-10 sm:pt-16"
        >
          <Grid2
            xs={5.7}
            sm={3.7}
            md={3.3}
            lg={3.6}
            className="flex justify-center"
          >
            <TextField
              name="firstName"
              value={firstName}
              onChange={(e) =>
                regexAlpha.test(e.target.value) && setFirstName(e.target.value)
              }
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
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
                border: "2px solid #00000091",
                borderRadius: "30px",
                backgroundColor: "transparent",
              }}
              placeholder="First Name"
              size="small"
              fullWidth
              InputProps={{
                style: { color: "#00000091" },
                classes: {
                  input: "header text-xs sm:text-sm",
                },
              }}
            />
          </Grid2>
          <Grid2
            xs={5.7}
            sm={3.7}
            md={3.3}
            lg={3.6}
            className="flex justify-center"
          >
            <TextField
              name="lastName"
              value={lastName}
              onChange={(e) =>
                regexAlpha.test(e.target.value) && setLastName(e.target.value)
              }
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
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
                border: "2px solid #00000091",
                borderRadius: "30px",
                backgroundColor: "transparent",
              }}
              placeholder="Last Name"
              size="small"
              fullWidth
              InputProps={{
                style: { color: "#00000091" },
                classes: {
                  input: "header text-xs sm:text-sm",
                },
              }}
            />
          </Grid2>
          <Grid2
            xs={5.7}
            sm={3.7}
            md={3.3}
            lg={3.6}
            className="flex justify-center"
          >
            <TextField
              name="companyName"
              value={company}
              onChange={(e) => setCompany(e.target.value)
              }
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
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
                border: "2px solid #00000091",
                borderRadius: "30px",
                backgroundColor: "transparent",
              }}
              placeholder="Company Name"
              size="small"
              fullWidth
              InputProps={{
                style: { color: "#00000091" },
                classes: {
                  input: "header text-xs sm:text-sm",
                },
              }}
            />
          </Grid2>
          <Grid2
            xs={5.7}
            sm={3.7}
            md={3.3}
            lg={3.6}
            className="flex justify-center"
          >
            <TextField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)
              }
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
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
                border: "2px solid #00000091",
                borderRadius: "30px",
                backgroundColor: "transparent",
              }}
              placeholder="E-Mail"
              size="small"
              fullWidth
              InputProps={{
                style: { color: "#00000091" },
                classes: {
                  input: "header text-xs sm:text-sm",
                },
              }}
            />
          </Grid2>
          <Grid2
            xs={5.7}
            sm={3.7}
            md={3.3}
            lg={3.6}
            className="flex justify-center"
          >
            <TextField
              name="contactNo"
              value={phone}
              onChange={(e) =>
                regexNumeric.test(e.target.value) && setPhone(e.target.value)
              }
              sx={{
                "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
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
                border: "2px solid #00000091",
                borderRadius: "30px",
                backgroundColor: "transparent",
              }}
              placeholder="Contact Number"
              size="small"
              fullWidth
              InputProps={{
                style: { color: "#00000091" },
                classes: {
                  input: "header text-xs sm:text-sm",
                },
              }}
            />
          </Grid2>
          <Grid2
            xs={5.7}
            sm={3.7}
            md={3.3}
            lg={3.6}
            className="flex justify-center"
          >
            <Select
              fullWidth
              label="Country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              displayEmpty
              className="header text-xs sm:text-sm"
              renderValue={(value) => value || "Country"}
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
                border: "2px solid #00000091",
                borderRadius: "30px",
                backgroundColor: "transparent",
                color: "#00000091",
                "& .MuiSvgIcon-root": { color: "#00000091" },
              }}
            >
              <MenuItem className="description text-xs sm:text-sm" value="">
                Country
              </MenuItem>
              <MenuItem className="description text-xs sm:text-sm" value="A">
                A
              </MenuItem>
              <MenuItem
                className="description text-xs sm:text-sm"
                value="B"
              >
                B
              </MenuItem>
              <MenuItem
                className="description text-xs sm:text-sm"
                value="C"
              >
                C
              </MenuItem>
              <MenuItem
                className="description text-xs sm:text-sm"
                value="D"
              >
                D
              </MenuItem>
              <MenuItem
                className="description text-xs sm:text-sm"
                value="E"
              >
                E
              </MenuItem>
            </Select>
          </Grid2>
        </Grid2>
        <Grid2 xs={11} sm={10}>
          <Typography
            variant="h2"
            className="header text-lg sm:text-2xl pt-10 sm:pt-16"
          >
            Sectors of interest
          </Typography>
        </Grid2>
        <Grid2
          xs={11}
          md={10}
          container
          className="flex justify-center gap-4 sm:gap-6 lg:gap-10 pt-5"
        >
          {sectors.map((item) => (
            <Grid2 xs={5.7} md={2.7} lg={2} sm={3.6}>
              <FormControlLabel
                className="header text-xs sm:text-sm"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: "#0000091",
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: "500",
                    fontSize: "0.875rem",
                  },
                }}
                control={
                  <Checkbox
                    className="header"
                    // checked={item.checked}
                    // onChange={(e) => handleCheck(e, item)}
                    name={item.name}
                    color="primary"
                    inputProps={{
                      classes: {
                        input: "header text-xs sm:text-sm",
                      },
                    }}
                  />
                }
                label={item.name}
              />
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
      <Grid2
        xs={11}
        sm={10}
        container
        className="flex flex-col justify-center py-10"
      >
        <div className="text-sm sm:text-base description">
          TELL US ABOUT YOUR INTEREST IN INVESTING IN VYUG
        </div>
        <div className="w-full pt-5">
          <TextField
            name="about"
            required
            multiline
            rows={10}
            sx={{
              "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
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
              border: "2px solid #00000091",
              borderRadius: "30px",
              backgroundColor: "transparent",
            }}
            size="small"
            fullWidth
            InputProps={{
              style: { color: "#00000091" },
              classes: {
                input: "header text-xs sm:text-sm",
              },
            }}
          />
        </div>
        <Button
          variant="contained"
          size="small"
          className="bg-[#000000] text-[#fff] rounded-3xl mx-auto py-2 px-10 mt-5 text-xs description sm:text-sm"
          id="control"
          // onClick={buttonHandler}
        >
          SUBMIT
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default Investor;
