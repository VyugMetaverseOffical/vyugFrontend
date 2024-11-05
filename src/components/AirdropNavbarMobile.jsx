import React, { useEffect, useState } from "react";
import Vyug_LOGO from "../images/vyugMobile.webp";
import Vyug from "../images/VYUGText.svg";
import navBar from "../images/navBar.svg";
import { Button, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import { MobileHeader } from "./MobileHeader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../redux/counterSlice";
import { ComingSoon } from "./ComingSoon";
import { useAirdropAuth } from "../redux/airdropAuthSlice";
import toast from "react-hot-toast";
import { SuccessStyling, ToastSuccess } from "./toast";

const AirdropNavbarMobile = ({ isTransparent, isHeaderText }) => {
  const [isRotate, setIsRotate] = useState(false);
  const [isDropDown, setIsDropDown] = useState(-1);
  const [status, setStatus] = useState(1);
  const { airdropUser, logoutUser } = useAirdropAuth();
  const [login, setLogin] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const { user, isLoggedIn } = useAuth();
  useEffect(() => {
    if (isLoggedIn) {
      setLogin(true);
    }
  }, [isLoggedIn]);

  const handleClick = () => {
    setIsRotate(!isRotate);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isRotate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isRotate]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <div
        className={`flex flex-col py-5 px-6 overflow-scroll max-h-screen ${
          (isTransparent || isRotate) && "bg-[#000000cc]"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3 justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                width={"100%"}
                height={"100%"}
                src={Vyug_LOGO}
                alt="Vyug logo"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                className={`${
                  isHeaderText &&
                  !isTransparent &&
                  !isRotate &&
                  "contrast-[80%] brightness-0"
                }`}
                width={"100%"}
                height={"100%"}
                src={Vyug}
                alt="Vyug logo"
              />
            </div>
          </div>
          <div
            className="flex justify-center items-center"
            onClick={handleClick}
          >
            <img
              className={`${
                isRotate && "rotate-180 transition duration-500 ease-in-out"
              }
            ${!isRotate && "rotate-360 transition duration-500 ease-in-out"}
            ${
              isHeaderText &&
              !isTransparent &&
              !isRotate &&
              "contrast-[80%] brightness-0"
            }`}
              width={"100%"}
              height={"100%"}
              src={navBar}
              alt="Vyug logo"
            />
          </div>
        </div>
        {isRotate && (
          <div
            className={`opacity-0 ${
              isRotate && "ease-in-out transition duration-500 opacity-100"
            } ease-in-out transition duration-500 flex flex-col items-end pr-10 pt-7 text-[#fff] gap-5 overflow-scroll`}
          >
            {MobileHeader.map((menu, i) => {
              if (menu.to)
                return (
                  <div
                    onClick={() => navigate(menu.to)}
                    key={i}
                    className="flex gap-3 items-center justify-center"
                  >
                    <Typography className="description font-semibold text-base text-[#fff]">
                      {menu.name}
                    </Typography>
                  </div>
                );
              return (
                <div
                  key={i}
                  className="flex flex-col items-end justify-center"
                  onClick={() => setIsDropDown(isDropDown === i ? -1 : i)}
                >
                  <div className="flex gap-3 items-center justify-center">
                    <Typography className="description font-semibold text-base text-[#fff]">
                      {menu.name}
                    </Typography>
                    <Typography
                      className={`${
                        isDropDown === i && "rotate-45"
                      } header text-[#fff] text-[20px]`}
                    >
                      +
                    </Typography>
                  </div>
                  <div className="flex gap-4 pt-2 justify-end flex-wrap items-center">
                    {isDropDown === i &&
                      menu?.child.map((item, index) => {
                        if (item?.to) {
                          return (
                            <div
                              className="flex gap-2"
                              key={index}
                              onClick={() => navigate(item?.to)}
                            >
                              <img src={item?.img} alt="" />
                              <Typography className="description text-[13px] sm:text-sm text-[#fff]">
                                {item?.name}
                              </Typography>
                            </div>
                          );
                        }
                        return (
                          <div
                            className="flex gap-2"
                            key={index}
                            onClick={() => setStatus(0)}
                          >
                            <img src={item?.img} alt="" />
                            <Typography className="description text-[13px] sm:text-sm text-[#fff]">
                              {item?.name}
                            </Typography>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}

            <div className="flex flex-row items-center justify-end gap-3">
              <Button
                sx={{
                  p: 1,
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "700",
                  borderRadius: "30px",
                }}
                className="px-0 py-0 w-full text-end cursor-default"
                disableRipple
                disableFocusRipple
                disableTouchRipple
              >
                {airdropUser?.name || ""}
              </Button>
              <IconButton
                sx={{
                  p: 0,
                  my: 0,
                  color: !isTransparent ? "white" : "black",
                  display: "block",
                  fontWeight: "400",
                  borderRadius: "30px",
                }}
                disableRipple
                className="flex justify-end items-center"
                onClick={handleMenuClick}
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[28px]"
                >
                  <path
                    d="M22.5374 24.5566C21.2746 24.5566 20.0119 24.5566 18.7601 24.5566C15.4329 24.5896 12.7317 26.7747 12.1058 29.9591C11.9082 30.9583 11.8313 31.9905 12.5341 32.825C12.9733 33.3521 13.5333 33.8133 14.1043 34.2086C17.2557 36.3718 20.7256 37.2282 24.5249 36.7231C27.3579 36.3498 29.8395 35.1968 32.0246 33.3741C32.7164 32.8031 33.0348 32.0344 33.0348 31.145C33.0348 27.8618 30.4764 24.941 27.2151 24.6555C25.6669 24.5127 22.5484 24.5896 22.5484 24.5676L22.5374 24.5566Z"
                    stroke={"white"}
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M15.9026 14.7503C15.9246 18.4069 18.9223 21.3826 22.5459 21.3387C26.1805 21.2948 29.1562 18.2861 29.1123 14.6954C29.0574 11.0279 26.1036 8.10707 22.48 8.12903C18.8235 8.15099 15.8697 11.1267 15.9026 14.7393V14.7503Z"
                    stroke={"white"}
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M22.5 44C34.3741 44 44 34.3741 44 22.5C44 10.6259 34.3741 1 22.5 1C10.6259 1 1 10.6259 1 22.5C1 34.3741 10.6259 44 22.5 44Z"
                    stroke={"white"}
                    stroke-miterlimit="10"
                  />
                </svg>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    logoutUser();
                    toast.success(
                      <ToastSuccess data={"Logout Successfully"} />,
                      SuccessStyling
                    );
                    navigate("/landing-page/login");
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        )}
      </div>
      {status == 0 && <ComingSoon status={status} setStatus={setStatus} />}
    </div>
  );
};

export default AirdropNavbarMobile;
