import React from "react";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Layout from "./Layout";

const Wallet = () => {
  return (
    <>
      <Layout header={"Wallet"} desc={"Build your repository"} />
      <Grid2
        xs={12}
        container
        className="flex flex-col-reverse sm:flex-row bg-[#222020] pb-20 text-[#fff] items-center sm:items-start justify-center gap-10"
      >
        <Grid2
          xs={10}
          sm={6}
          md={7}
          lg={7}
          className="flex flex-col justify-center text-[#fff]"
        >
          <Typography
            variant="subtitle2"
            className="header text-[#fff] text-sm sm:text-lg pb-2 sm:pb-5"
          >
            Connect or Create your wallet to unlock full vyug potential .
          </Typography>
          <ul>
            <li className="list-disc">
              <Typography
                variant="subtitle2"
                className="description text-[#fff] text-xs sm:text-sm md:text-base"
              >
                Earn more GYRE by staking
              </Typography>
            </li>
            <li className="list-disc">
              <Typography
                variant="subtitle2"
                className="description text-[#fff] text-xs sm:text-sm md:text-base"
              >
                Customize your Avatar
              </Typography>
            </li>
            <li className="list-disc">
              <Typography
                variant="subtitle2"
                className="description text-[#fff] text-xs sm:text-sm md:text-base"
              >
                Buy and sell NFT in the Market Place
              </Typography>
            </li>
            <li className="list-disc">
              <Typography
                variant="subtitle2"
                className="description text-[#fff] text-xs sm:text-sm md:text-base"
              >
                Claim Rewards
              </Typography>
            </li>
          </ul>
          <Typography
            variant="subtitle2"
            className="header text-[#fff] text-sm sm:text-lg pb-2 sm:pb-5 pt-5 sm:pt-10"
          >
            Last disconnected wallets
          </Typography>
          <ul>
            <li className="list-disc">
              <Typography
                variant="subtitle2"
                className="description text-[#fff] text-xs sm:text-sm md:text-base"
              >
                dbasndna snd23212212k3k12k212k34dkd123n3k April 2nd 2024 12:12:
                22 AM
              </Typography>
            </li>
            <li className="list-disc">
              <Typography
                variant="subtitle2"
                className="description text-[#fff] text-xs sm:text-sm md:text-base"
              >
                dbasndna snd23212212k3k12k212k34dkd123n3k April 2nd 2024 12:12:
                22 AM
              </Typography>
            </li>
          </ul>
        </Grid2>
        <Grid2
          xs={7}
          sm={4}
          md={3}
          lg={2.4}
          className="flex flex-col justify-center text-[#fff]"
        >
          <Typography
            variant="subtitle2"
            className="description text-[#fff] text-sm sm:text-base cursor-pointer text-center rounded-3xl my-2 py-2"
            style={{ border: "1px solid #fff" }}
          >
            Create New Wallet
          </Typography>
          <Typography
            variant="subtitle2"
            className="description text-[#fff] text-sm sm:text-base cursor-pointer text-center rounded-3xl mt-2 py-2"
            style={{ border: "1px solid #fff" }}
          >
            Connect Existing Wallet
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Wallet;
