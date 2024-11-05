import React, { useState } from "react";
import banner1 from "../../images/profile-banner.webp";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
import profileIcon from "../../images/profile-icon.webp";
import walletIcon from "../../images/wallet.webp";
import assetsIcon from "../../images/assets.webp";
import accountsIcon from "../../images/account.webp";
import settingIcon from "../../images/setting.webp";
import { Link } from "react-router-dom";
import Header from "../../components/Head";

const Layout = ({ header, desc }) => {
  const [position, setPosition] = useState(false);

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
    <Header isTransparent={position} isheaderText={false} />
      <Grid2 xs={12} container className="flex justify-center">
        <Grid2 xs={12} className="flex justify-center">
          <img
            className="h-[50vh] w-[100%] md:h-[100%] md:w-[100%]"
            src={banner1}
          />
        </Grid2>
        <Grid2
          xs={12}
          container
          className="flex bg-[#222020] pt-10 text-[#fff] flex-col justify-center"
        >
          <Typography
            variant="h2"
            className="header text-[#fff] text-2xl sm:text-4xl pb-2 sm:pb-5 w-[90%] sm:w-[80%] mx-auto"
          >
            {header}
          </Typography>
          <Typography
            variant="subtitle2"
            className="description text-[#fff] text-sm sm:text-lg w-[90%] pb-8 sm:pb-10 sm:w-[80%] mx-auto"
          >
            {desc}
          </Typography>
          <Grid2
            xs={12}
            container
            className="flex bg-[#222020] text-[#fff] pb-10 gap-5 sm:gap-10 w-[90%] sm:w-[80%] mx-auto"
          >
            <Link to={"/profile"} className="no-underline">
              <div className="flex gap-2">
                <img width={30} height={30} src={profileIcon} />
                <Typography
                  variant="subtitle2"
                  className="description text-[#fff] text-sm sm:text-lg w-[90%] sm:w-[80%] mx-auto"
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
                className={`description text-[#fff] text-sm sm:text-lg w-[90%] sm:w-[80%] mx-auto ${
                  header == "Wallet" && "font-bold"
                }`}
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
                className={`description text-[#fff] text-sm sm:text-lg w-[90%] sm:w-[80%] mx-auto ${
                  header == "Assets" && "font-bold"
                }`}
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
                className={`description text-[#fff] text-sm sm:text-lg w-[90%] sm:w-[80%] mx-auto ${
                  header == "Account" && "font-bold"
                }`}
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
                className={`description text-[#fff] text-sm sm:text-lg w-[90%] sm:w-[80%] mx-auto ${
                  header == "Settings" && "font-bold"
                }`}
              >
                Settings
              </Typography>
            </div>
            </Link>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Layout;
