import React, { useEffect, useState } from "react";
import investorVideo from "../../images/playSpaceImg.webp";
import Footer from "../../components/Footer";
import Header from "../../components/Head";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const TurboTrack = () => {
  const [position, setPosition] = useState(false);
  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatibus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatibus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatibus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatibus!",
  ];

  return (
    <div className="min-h-screen">
      <Header isTransparent={position} isHeaderText={false} />
      <div className="w-full relative">
        <img src={investorVideo} alt="Be an Investor" className="w-full" />
        <Typography
          variant="h2"
          className="header absolute top-[20vh] left-[10vh] text-[#fff] font-extrabold leading-tight text-4xl sm:text-[6rem]"
        >
          V1 Turbo <br />
          Track
        </Typography>
      </div>
      <div className="flex justify-center items-center flex-col gap-10 my-10 sm:my-20 w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        <Typography variant="h2" className="header text-3xl sm:text-4xl">
          V1 Turbo Track
        </Typography>
        <Typography
          variant="subtitle2"
          className="description text-xs text-center sm:text-sm"
        >
          VYUG visions to take virtual reality beyond the sphere of
          entertainment. It is the largest open-world Metaverse platform. When
          you invest in VYUG, you are committing to showing the world the true
          unmatched potential of the Metaverse. When you buy land in VYUG, you
          hold the key to unlocking the boundless opportunities within its
          ecosystem. Here, under the umbrella of augmented reality (AR), virtual
          reality (VR), and extended reality (XR), lies a planet for exploration
          and development that you decide. A land of infinite potential that
          promises borderless education, business growth, and a sound political
          environment.
        </Typography>
      </div>
      <div className="w-[95%] sm:w-[90%] mx-auto flex justify-center gap-7 items-center flex-col md:flex-row">
        <div className="w-full md:w-[50%] flex flex-col">
          <div className="w-full mb-10 flex-col flex">
            <img
              src={investorVideo}
              className="w-[40%] md:w-[50%] h-[35vh] md:h-[40vh] rounded-xl ml-12 md:ml-0 -mb-80"
              alt=""
            />
            <img
              src={investorVideo}
              className="w-[40%] md:w-[50%] h-[35vh] md:h-[40vh] rounded-xl ml-40 md:ml-32 lg:ml-54 mt-40 z-10"
              alt=""
            />
            <img
              src={investorVideo}
              className="w-[40%] md:w-[50%] h-[35vh] md:h-[40vh] rounded-xl ml-20 -mt-10 -z-10"
              alt=""
            />
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center">
          <Typography variant="h2" className="header text-3xl py-5 sm:text-4xl">
            Highlights
          </Typography>
          <List>
            {highlights?.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <FiberManualRecordIcon fontSize="5px" />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="subtitle2"
                    className="description text-xs sm:text-sm"
                  >
                    {item}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex justify-center items-center flex-col gap-8 sm:w-[85%]">
        <Typography variant="h2" className="header text-3xl sm:text-4xl py-5">
          Coming Soon
        </Typography>
        <div className="flex gap-5 md:gap-8 flex-wrap justify-center items-center">
          <div className="w-[28%] md:w-[30%] flex justify-center items-center">
            <img
              src={investorVideo}
              className="w-[100%] h-[30vh] md:h-[40vh] rounded-xl"
              alt=""
            />
          </div>
          <div className="w-[28%] md:w-[30%] flex justify-center items-center">
            <img
              src={investorVideo}
              className="w-[100%] h-[30vh] md:h-[40vh] rounded-xl"
              alt=""
            />
          </div>
          <div className="w-[28%] md:w-[30%] flex justify-center items-center">
            <img
              src={investorVideo}
              className="w-[100%] h-[30vh] md:h-[40vh] rounded-xl"
              alt=""
            />
          </div>
        </div>
        <Typography variant="h2" className="header text-3xl sm:text-4xl py-5">
          Available on
        </Typography>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate("/play-space/id")}
          className="bg-btn py-2 mb-10 sm:mb-20 px-4 w-fit lg:px-10"
        >
          <Typography
            variant="subtitle1"
            className="description text-[#fff] text-xs sm:text-sm"
          >
            Meta Marketplace
          </Typography>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default TurboTrack;
