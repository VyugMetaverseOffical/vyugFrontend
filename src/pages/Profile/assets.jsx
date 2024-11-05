import React, { useState } from "react";
// import banner1 from "../images/profile-banner.webp";
// import profileIcon from "../images/profile-icon.webp";
// import walletIcon from "../images/wallet-icon.webp";
// import addIcon from "../images/add-icon.svg";
// import cartIcon from "../images/cart-icon.svg";
// import Header from "../../components/header";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "./Layout";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SearchIcon from "@mui/icons-material/Search";

const Assets = () => {
  return (
    <>
      <Layout header={"Assets"} desc={"Build your repository"} />
      <Grid2
        xs={12}
        container
        className="flex flex-col-reverse sm:flex-row bg-[#222020] pb-20 text-[#fff] items-center sm:items-start justify-center gap-10"
      >
        <Grid2
          xs={11}
          sm={7.4}
          md={8}
          lg={7}
          container
          className="flex flex-col justify-center text-[#fff]"
        >
          <Typography
            variant="subtitle2"
            className="header text-[#fff] text-sm sm:text-base"
          >
            No Asset Found
          </Typography>
          <Grid2 xs={12} container className="flex justify-center gap-5 pt-10">
            <Grid2
            xs={9}
              sm={5.5}
              className="p-5 pb-10 flex flex-col justify-center text-[#000000] items-center gap-2 rounded-3xl shadow-xl bg-[#fff]"
            >
              <input type="file" id="createAssets" hidden={true} />
              <label htmlFor="createAssets" className="cursor-pointer">
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 158 158"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.6419 74.3177H87.2617C90.6002 74.3177 93.944 74.3021 97.2825 74.323C99.8398 74.3334 101.803 76.3125 101.809 78.8438C101.819 81.375 99.8867 83.4219 97.345 83.448C93.2565 83.4896 89.1731 83.4584 85.0846 83.4584H83.6471V84.625C83.6419 88.7813 83.6679 92.9375 83.6315 97.0938C83.6159 99.4011 81.8815 101.349 79.7304 101.594C77.2877 101.87 75.2513 100.536 74.6419 98.2188C74.5169 97.7448 74.5065 97.2396 74.5065 96.7448C74.4961 92.375 74.5013 88.0105 74.5013 83.4584H73.3554C69.0898 83.4584 64.8242 83.4792 60.5638 83.4532C58.1679 83.4375 56.2877 81.6459 56.0221 79.2136C55.7929 77.0886 57.3711 74.9323 59.5794 74.4167C59.9856 74.323 60.4231 74.323 60.845 74.3177C64.97 74.3125 69.0898 74.3177 73.2096 74.3177H74.5013V73.1094C74.5013 68.9896 74.4961 64.8698 74.5013 60.75C74.5065 58.0365 76.4544 56.0052 79.0429 56C81.6159 55.9896 83.6263 58.0365 83.6367 60.7292C83.6575 65.2032 83.6419 69.6771 83.6419 74.3177Z"
                    fill="black"
                  />
                  <circle
                    cx="79"
                    cy="79"
                    r="74.5"
                    stroke="black"
                    stroke-width="9"
                  />
                </svg>
              </label>
              <Typography
                variant="subtitle2"
                className="header text-xs sm:text-sm lg:text-base text-center"
              >
                Create Assets
              </Typography>
              <Typography
                variant="subtitle2"
                className="header text-xs lg:text-sm text-center"
              >
                Equipment, wereables, props, building and more
              </Typography>
            </Grid2>
            <Grid2
            xs={9}
              sm={5.5}
              className="p-5 pb-10 flex flex-col justify-center text-[#000000] items-center gap-2 rounded-3xl shadow-xl bg-[#fff]"
            >
              <input type="file" id="trade" hidden={true} />
              <label htmlFor="trade" className="cursor-pointer">
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 158 158"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.9992 51.6298C47.9227 51.6298 47 50.5749 47 49.2856C47 48.0549 47.9227 47 48.9992 47H54.2278C54.2791 47 54.3816 47 54.4329 47C56.2783 47.0586 57.9186 47.4688 59.3027 48.4651C60.8405 49.5786 61.9683 51.2781 62.5834 53.7981C62.5834 53.8567 62.5834 53.9153 62.6347 53.974L63.1473 56.3181H108.001C109.129 56.3181 110 57.373 110 58.6037C110 58.8381 109.949 59.0726 109.897 59.307L104.669 83.3935C104.464 84.4484 103.644 85.1516 102.721 85.1516H69.9138C70.6314 88.1991 71.3491 89.84 72.323 90.6019C73.502 91.4809 75.5525 91.5395 78.987 91.4809H79.0382H102.208C103.336 91.4809 104.207 92.5358 104.207 93.7665C104.207 95.0558 103.285 96.0521 102.208 96.0521H79.0382C74.7836 96.1107 72.1692 95.9935 70.0675 94.4112C67.9146 92.7702 66.7868 89.9572 65.6591 84.8586L58.7901 55.146C58.7901 55.0874 58.7901 55.0874 58.7388 55.0288C58.4312 53.7395 57.9186 52.8605 57.201 52.3916C56.4833 51.8642 55.5094 51.6298 54.3816 51.6298C54.3303 51.6298 54.2791 51.6298 54.2278 51.6298H48.9992ZM96.2107 98.7479C98.9276 98.7479 101.132 101.268 101.132 104.374C101.132 107.48 98.9276 110 96.2107 110C93.4939 110 91.2897 107.48 91.2897 104.374C91.2897 101.268 93.4939 98.7479 96.2107 98.7479ZM74.6298 98.7479C77.3466 98.7479 79.5509 101.268 79.5509 104.374C79.5509 107.48 77.3466 110 74.6298 110C71.9129 110 69.7087 107.48 69.7087 104.374C69.7087 101.268 71.9129 98.7479 74.6298 98.7479ZM64.275 60.8893L68.8373 80.5219H101.183L105.438 60.8893H64.275Z"
                    fill="black"
                  />
                  <circle
                    cx="79"
                    cy="79"
                    r="74.5"
                    stroke="black"
                    stroke-width="9"
                  />
                </svg>
              </label>
              <Typography
                variant="subtitle2"
                className="header text-xs sm:text-sm lg:text-base text-center"
              >
                Visit Trade Center
              </Typography>
              <Typography
                variant="subtitle2"
                className="header text-xs lg:text-sm text-center"
              >
                Equipment, wereables, props, building and more
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2
          xs={7}
          sm={3.6}
          md={3}
          lg={2.4}
          className="flex flex-col justify-center text-[#fff]"
        >
          <TextField
            type={"text"}
            size="small"
            placeholder="Search by name"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
            InputProps={{
              className: "description text-xs sm:text-sm",
              style: {
                color: "#fff",
                borderRadius: "20px",
                border: "1px solid #fff",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#fff" }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Assets;
