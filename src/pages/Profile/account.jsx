import React, { useState } from "react";
import {
  FormHelperText,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Layout from "./Layout";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Layout header={"Account"} desc={"Master your Account Detail"} />
      <Grid2
        xs={12}
        container
        className="flex bg-[#222020] pb-10 text-[#fff] flex-col justify-center"
      >
        <Typography
          variant="subtitle2"
          className="header text-[#fff] text-sm sm:text-lg w-[90%] pb-2 sm:pb-5 sm:w-[80%] mx-auto"
        >
          Security
        </Typography>
        <Typography
          variant="subtitle2"
          className="description text-[#fff] text-xs sm:text-sm md:text-base pb-10 w-[90%] sm:w-[80%] mx-auto"
        >
          To enhance your security we strongly advise selecting a strong
          password that is distinct from any other online account you use.
        </Typography>
        <Grid2
          xs={12}
          container
          className="flex text-[#fff] gap-2 items-center w-[90%] pb-5 sm:w-[80%] mx-auto"
        >
          <TextField
            type={"text"}
            id={"searchText"}
            size="small"
            placeholder="E-mail/ User Name"
            className="w-60"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
            InputProps={{
              className: "description text-[#fff] text-xs sm:text-sm",
              style: {
                color: "#fff",
                borderRadius: "20px",
                border: "1px solid #fff",
              },
            }}
          />
          <svg
            width="12"
            height="12"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.11439 16.5833C5.11439 16.1406 5.10918 15.7396 5.11439 15.3385C5.11439 14.75 5.56231 14.2969 6.13002 14.2969C6.69773 14.2917 7.15606 14.75 7.15606 15.3333C7.16127 16.6875 7.16127 18.0417 7.15606 19.3958C7.15606 19.9792 6.70814 20.4219 6.12481 20.4219C4.77064 20.4271 3.41647 20.4271 2.06231 20.4219C1.47897 20.4219 1.01543 19.9635 1.02064 19.401C1.02064 18.8385 1.48418 18.3802 2.06752 18.3802C2.71856 18.375 3.36439 18.375 4.01543 18.3698C4.02064 18.3698 4.02585 18.3646 4.09877 18.3281C4.04147 18.3073 3.99981 18.3021 3.97377 18.276C1.88522 16.6458 0.567515 14.5313 0.145641 11.9115C-0.369985 8.65625 0.484181 5.76563 2.69772 3.3125C4.33835 1.51042 6.39564 0.447917 8.8071 0.09375C9.26022 0.03125 9.72377 0.0156243 10.1873 0.00520833C10.7811 -0.010417 11.229 0.437499 11.2394 1.01042C11.2498 1.58333 10.7915 2.04167 10.1925 2.04688C9.26543 2.05729 8.36439 2.19271 7.49981 2.52083C4.72897 3.57292 2.91647 5.52083 2.27064 8.41146C1.57793 11.5521 2.49981 14.2396 4.89043 16.4062C4.94772 16.4583 5.01543 16.5052 5.11439 16.5833ZM15.3227 3.84896V5.0625C15.3227 5.66667 14.8852 6.125 14.3071 6.13021C13.7238 6.13542 13.2758 5.67188 13.2758 5.05208V1.07292C13.2758 0.437499 13.7081 0.00520933 14.3488 0H18.3488C18.9477 0.00520933 19.4113 0.447917 19.4165 1.02083C19.4165 1.59375 18.9529 2.04688 18.354 2.04688C17.7133 2.05208 17.0779 2.05208 16.4425 2.05208C16.4269 2.05208 16.4165 2.05729 16.3488 2.11458C16.3852 2.125 16.4321 2.125 16.4633 2.15104C18.5467 3.78125 19.8644 5.89583 20.2863 8.51562C20.8071 11.7969 19.9373 14.6979 17.6925 17.1562C16.1352 18.8594 14.1873 19.8958 11.9061 20.2812C11.3592 20.375 10.7915 20.401 10.229 20.4219C9.65085 20.4375 9.20293 19.9844 9.19252 19.4219C9.1821 18.8542 9.63522 18.3854 10.2186 18.3802C11.3331 18.375 12.4113 18.1823 13.4165 17.7188C16.0831 16.5052 17.7654 14.4688 18.2498 11.5677C18.7498 8.57292 17.7915 6.04167 15.5311 4.01042C15.4998 3.97917 15.4633 3.94792 15.4217 3.92188C15.4061 3.90625 15.38 3.89062 15.3227 3.84896Z"
              fill="white"
            />
          </svg>
          <FormHelperText className="text-[#fff] description text-[#fff] text-xs cursor-pointer">
            reset
          </FormHelperText>
        </Grid2>
        <Grid2
          xs={12}
          container
          className="flex text-[#fff] gap-2 items-center w-[90%] pb-7 sm:pb-10 sm:w-[80%] mx-auto"
        >
          <TextField
            type={showPassword ? "text" : "password"}
            id={"searchText"}
            size="small"
            placeholder="Password"
            className="w-60"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
            InputProps={{
              className: "description text-[#fff] text-xs sm:text-sm",
              style: {
                color: "#fff",
                borderRadius: "20px",
                border: "1px solid #fff",
              },
              endAdornment: (
                <InputAdornment
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                  position="end"
                >
                  {showPassword ? (
                    <VisibilityIcon sx={{ color: "#fff" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ color: "#fff" }} />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <svg
            width="12"
            height="12"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.11439 16.5833C5.11439 16.1406 5.10918 15.7396 5.11439 15.3385C5.11439 14.75 5.56231 14.2969 6.13002 14.2969C6.69773 14.2917 7.15606 14.75 7.15606 15.3333C7.16127 16.6875 7.16127 18.0417 7.15606 19.3958C7.15606 19.9792 6.70814 20.4219 6.12481 20.4219C4.77064 20.4271 3.41647 20.4271 2.06231 20.4219C1.47897 20.4219 1.01543 19.9635 1.02064 19.401C1.02064 18.8385 1.48418 18.3802 2.06752 18.3802C2.71856 18.375 3.36439 18.375 4.01543 18.3698C4.02064 18.3698 4.02585 18.3646 4.09877 18.3281C4.04147 18.3073 3.99981 18.3021 3.97377 18.276C1.88522 16.6458 0.567515 14.5313 0.145641 11.9115C-0.369985 8.65625 0.484181 5.76563 2.69772 3.3125C4.33835 1.51042 6.39564 0.447917 8.8071 0.09375C9.26022 0.03125 9.72377 0.0156243 10.1873 0.00520833C10.7811 -0.010417 11.229 0.437499 11.2394 1.01042C11.2498 1.58333 10.7915 2.04167 10.1925 2.04688C9.26543 2.05729 8.36439 2.19271 7.49981 2.52083C4.72897 3.57292 2.91647 5.52083 2.27064 8.41146C1.57793 11.5521 2.49981 14.2396 4.89043 16.4062C4.94772 16.4583 5.01543 16.5052 5.11439 16.5833ZM15.3227 3.84896V5.0625C15.3227 5.66667 14.8852 6.125 14.3071 6.13021C13.7238 6.13542 13.2758 5.67188 13.2758 5.05208V1.07292C13.2758 0.437499 13.7081 0.00520933 14.3488 0H18.3488C18.9477 0.00520933 19.4113 0.447917 19.4165 1.02083C19.4165 1.59375 18.9529 2.04688 18.354 2.04688C17.7133 2.05208 17.0779 2.05208 16.4425 2.05208C16.4269 2.05208 16.4165 2.05729 16.3488 2.11458C16.3852 2.125 16.4321 2.125 16.4633 2.15104C18.5467 3.78125 19.8644 5.89583 20.2863 8.51562C20.8071 11.7969 19.9373 14.6979 17.6925 17.1562C16.1352 18.8594 14.1873 19.8958 11.9061 20.2812C11.3592 20.375 10.7915 20.401 10.229 20.4219C9.65085 20.4375 9.20293 19.9844 9.19252 19.4219C9.1821 18.8542 9.63522 18.3854 10.2186 18.3802C11.3331 18.375 12.4113 18.1823 13.4165 17.7188C16.0831 16.5052 17.7654 14.4688 18.2498 11.5677C18.7498 8.57292 17.7915 6.04167 15.5311 4.01042C15.4998 3.97917 15.4633 3.94792 15.4217 3.92188C15.4061 3.90625 15.38 3.89062 15.3227 3.84896Z"
              fill="white"
            />
          </svg>
          <FormHelperText className="text-[#fff] description text-[#fff] text-xs cursor-pointer">
            reset
          </FormHelperText>
        </Grid2>
        <Typography
          variant="h2"
          className="header text-[#fff] text-sm sm:text-lg w-[90%] sm:w-[80%] mx-auto"
        >
          Validation
        </Typography>
        <FormHelperText className="text-[#FF474C] w-[90%] pb-5 sm:pb-10 sm:w-[80%] mx-auto">
          Not Verified
        </FormHelperText>
        <Typography
          variant="subtitle2"
          className="description text-[#fff] text-xs sm:text-sm md:text-base w-[90%] sm:w-[80%] mx-auto"
        >
          As much as we love robots, we want the MetaVerse to be full of humans
          . Your account nneds to be verfied to join some activities such as the
          LAND sale Raffle or Claiming seasons rewards . This is one of the many
          measures we are taking to prevent bots, cheaters and bad actors
          exploiting our systems. <br /> After Completing this process account
          verification might take upto 48 hrs. Make sure you verify on time so
          you don't miss any activity
        </Typography>
      </Grid2>
    </>
  );
};

export default Account;
