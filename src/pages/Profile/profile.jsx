import React, { useState } from "react";
import banner1 from "../../images/profile-banner.webp";
import profile from "../../images/profile.webp";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import profileIcon from "../../images/profile-icon.webp";
import walletIcon from "../../images/wallet.webp";
import assetsIcon from "../../images/assets.webp";
import accountsIcon from "../../images/account.webp";
import settingIcon from "../../images/setting.webp";
import shareIcon from "../../images/share_icon.webp";
import flagIcon from "../../images/profile_flag.webp";
import editIcon from "../../images/edit_icon.webp";
import { useAuth } from '../../redux/counterSlice';
import Header from "../../components/Head";
const Profile = () => {
  const [position, setPosition] = useState(false);

  const { user, isLoggedIn } = useAuth()
  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });

  return (
    <>
      <Header isTransparent={position} isHeaderText={false} />
      <Grid2 xs={12} container className="flex justify-center">
        <Grid2 xs={12} className="relative flex justify-center">
          <img
            className="h-[50vh] w-[100%] md:h-[100%] md:w-[100%]"
            src={banner1}
          />
          <img className="absolute w-1/4 md:w-1/6 left-5 -bottom-7 xl:top-2/3 xl:left-40" src={profile} />
        </Grid2>
        <Grid2
          xs={12}
          container
          className="flex bg-[#222020] pt-5 text-[#fff] flex-col justify-center sm:flex-row sm:pb-20 items-center sm:items-start gap-10"
        >
          <Grid2
            xs={11}
            // sm={7}
            md={7}
            lg={7}
            container
            className="flex flex-col pt-5 xl:pt-0 pr-10 justify-center xl:items-end text-[#fff]"
          >
            <div>
              <Typography
                variant="h2"
                className="header text-[#fff] text-2xl sm:text-4xl pb-2 font-bold"
              >
                Welcome Home,{" "}
                <span className="font-normal description text-[#fff]">Gaurav!</span>
              </Typography>
              <Typography
                variant="subtitle2"
                className="description text-[#fff] text-xs sm:text-sm pb-8 sm:pb-10"
              >
               {!isLoggedIn ?"":user.userId}
              </Typography>
            </div>
            <Grid2
              xs={12}
              container
              className="flex bg-[#222020] md:pl-16 text-[#fff] xl:pb-10 gap-5 xl:gap-10"
            >
              <Link to={"/profile"} className="no-underline">
                <div className="flex gap-2">
                  <img width={30} height={30} src={profileIcon} />
                  <Typography
                    variant="subtitle2"
                    className="description text-[#fff] text-sm sm:text-base md:text-lg w-[90%] sm:w-[80%] mx-auto font-bold"
                  >
                    About
                  </Typography>
                </div>
              </Link>
              <Link to={"/wallet"} className="no-underline">
                <div className="flex gap-2">
                  <img width={30} height={30} src={walletIcon} />
                  <Typography
                    variant="subtitle2"
                    className="description text-[#fff] text-sm sm:text-base md:text-lg w-[90%] sm:w-[80%] mx-auto"
                  >
                    Wallet
                  </Typography>
                </div>
              </Link>
              <Link to={"/assets"} className="no-underline">
                <div className="flex gap-2">
                  <img width={30} height={30} src={assetsIcon} />
                  <Typography
                    variant="subtitle2"
                    className="description text-[#fff] text-sm sm:text-base md:text-lg w-[90%] sm:w-[80%] mx-auto"
                  >
                    Assets
                  </Typography>
                </div>
              </Link>
              <Link to={"/account"} className="no-underline">
                <div className="flex gap-2">
                  <img width={30} height={30} src={accountsIcon} />
                  <Typography
                    variant="subtitle2"
                    className="description text-[#fff] text-sm sm:text-base md:text-lg w-[90%] sm:w-[80%] mx-auto"
                  >
                    Account
                  </Typography>
                </div>
              </Link>
              <Link to={"/main-profile"} className="no-underline">
                <div className="flex gap-2">
                  <img width={30} height={30} src={settingIcon} />
                  <Typography
                    variant="subtitle2"
                    className="description text-[#fff] text-sm sm:text-base md:text-lg w-[90%] sm:w-[80%] mx-auto"
                  >
                    Settings
                  </Typography>
                </div>
              </Link>
            </Grid2>
          </Grid2>
          <Grid2
            xs={11}
            // sm={3.4}
            md={4}
            lg={4}
            className="flex flex-col pb-10 justify-center text-[#fff]"
          >
            <Grid2
              xs={12}
              container
              className="flex bg-[#222020] gap-3 justify-center text-[#fff]"
            >
              <img className="h-8 w-8 cursor-pointer" src={walletIcon} alt="" />
              <img className="h-8 w-8 cursor-pointer" src={shareIcon} alt="" />
              <img className="h-8 w-8 cursor-pointer" src={flagIcon} alt="" />
              <Typography
                variant="h2"
                className="description cursor-pointer text-xs sm:text-sm bg-[#fff] px-5 rounded-3xl gap-2 shadow-xl flex items-center text-[#000000]"
              >
                <span>
                  <img className="h-6 w-6" src={editIcon} alt="" />
                </span>
                <span>Edit Profile</span>
              </Typography>
            </Grid2>
            <Typography
              variant="h2"
              className="header text-[#fff] cursor-pointer text-xs sm:text-sm mx-20 lg:mx-20 py-2 mt-10 text-center rounded-3xl"
              sx={{ border: "1px solid #fff" }}
            >
              Craft Yourself
            </Typography>
            <Typography
              variant="h2"
              className="header text-[#fff] text-xs sm:text-sm xl:mx-20 py-5 text-center"
            >
              Complete your profile to share who you are in the metaverse!
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Profile;
