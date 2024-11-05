import React, { useEffect, useState } from "react";
import Vyug_LOGO from "../images/vyugMobile.webp";
import Vyug from "../images/VYUGText.svg";
import navBar from "../images/navBar.svg";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { MobileHeader } from "./MobileHeader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../redux/counterSlice";
import { ComingSoon } from "./ComingSoon";
import { SuccessStyling, ToastSuccess } from "./toast";
import toast from "react-hot-toast";

const NavbarMobile = ({ isTransparent, isHeaderText }) => {
  const [isRotate, setIsRotate] = useState(false);
  const [isDropDown, setIsDropDown] = useState(-1);
  const [status, setStatus] = useState(1);
  const [logoutStatus, setLogoutStatus] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClicked = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const { user, isLoggedIn, logoutUser } = useAuth();
  useEffect(() => {
    if (isLoggedIn) {
      setLogin(true);
    }
  }, [isLoggedIn]);

  const handleClick = () => {
    setIsRotate(!isRotate);
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

  const handleLogout = () => {
    logoutUser();
    toast.success(
      <ToastSuccess data={"Logout Successfully"} />,
      SuccessStyling
    );
    setLogoutStatus(true);
  };

  return (
    <div>
      <div
        className={`flex flex-col py-5 px-6 overflow-scroll max-h-screen ${
          (isTransparent || isRotate) && "bg-[#000000cc]"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3 justify-center items-center">
            <div
              onClick={() => navigate("/")}
              className="flex justify-center items-center"
            >
              <img
                width={"100%"}
                height={"100%"}
                src={Vyug_LOGO}
                alt="VYUG logo"
                aria-hidden="true"
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
                alt="VYUG"
                aria-hidden="true"
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
              alt="Tab bar"
              aria-hidden="true"
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
                              <img
                                src={item?.img}
                                alt={item?.name}
                                aria-hidden="true"
                              />
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
                            <img
                              src={item?.img}
                              alt={item?.name}
                              aria-hidden="true"
                            />
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

            <div className="flex items-center justify-end pt-5 w-full gap-2">
              <button
                style={{
                  color: "white",
                  display: "block",
                  fontWeight: "700",
                  border: "1px solid rgba(241, 241, 241, 1)",
                  borderRadius: "30px",
                }}
                className="px-10 description my-2 py-2 xl:px-10"
                onClick={
                  !login || logoutStatus
                    ? () => {
                        navigate("/auth/login");
                      }
                    : handleClicked
                }
              >
                {!login || logoutStatus
                  ? "LOG IN"
                  : user.userId
                  ? user.userId
                  : user.firstName}
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "black",
                    width: "fit-content",
                    color: "#fff",
                    padding: "0px 16px",
                    marginTop: "5px",
                    borderRadius: "3rem",
                    fontFamily: '"Montserrat", sans-serif',
                  },
                }}
              >
                <MenuItem
                  className="description1"
                  onClick={() => {
                    handleClose();
                    handleLogout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
              <Button
                sx={{
                  p: 0.5,
                  my: 2,
                  // backgroundColor: "white",
                  // color: "black",
                  display: "block",
                  fontWeight: "400",
                  border: "1px solid rgba(241, 241, 241, 1)",
                  borderRadius: "30px",
                }}
                className="px-8 py-2 xl:px-10 description font-semibold bg-[#FF5733] hover:bg-[#FFD580] active:bg-[#CC5500]"
                onClick={() => {
                  navigate("/stream-announcement");
                }}
              >
                Diwali
              </Button>
            </div>
          </div>
        )}
      </div>
      {status == 0 && <ComingSoon status={status} setStatus={setStatus} />}
    </div>
  );
};

export default NavbarMobile;
