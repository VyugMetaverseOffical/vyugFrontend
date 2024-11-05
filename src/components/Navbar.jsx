import { Button, Divider, Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";
import Logo from "../images/logo.webp";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { HeaderData } from "./HeaderData";
import { useAuth } from "../redux/counterSlice";
import toast from "react-hot-toast";
import { SuccessStyling, ToastSuccess } from "./toast";

const Navbar = ({ isTransparent, isHeaderText }) => {
  const [isExpand, setIsExpand] = useState("");
  const [login, setLogin] = useState(false);
  const [logoutStatus, setLogoutStatus] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:1330px)");

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, isLoggedIn, logoutUser } = useAuth();
  useEffect(() => {
    if (isLoggedIn) {
      setLogin(true);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    logoutUser();
    toast.success(
      <ToastSuccess data={"Logout Successfully"} />,
      SuccessStyling
    );
    setLogoutStatus(true);
  };

  return (
    <div >
      <div
        onMouseLeave={() => setIsExpand("")}
        className={`flex flex-col items-center justify-center ${
          (isTransparent || isExpand !== "") && "bg-[#000000cc]"
        } py-5`}
      >
        <Grid2
          xs={12}
          xl={11}
          lg={11.8}
          container
          className="description mx-auto flex justify-center gap-5"
        >
          <Grid2
            xl={9}
            lg={9.7}
            md={9.3}
            className="flex gap-5 justify-start items-center"
          >
            <Link to={"/"} className="flex no-underline mb-1">
              <img
                src={Logo}
                alt="VYUG logo"
                aria-hidden="true"
                className="w-14"
              />
            </Link>
            <div className="flex justify-center items-center">
              {HeaderData.map((menu, i) => {
                if (menu.to)
                  return (
                    <div
                      key={i}
                      className="flex gap-2 items-center justify-center"
                    >
                      <Typography
                        onMouseOver={() => setIsExpand("")}
                        key={i}
                        onClick={() => {
                          navigate(menu.to);
                        }}
                        className={`description ${
                          isHeaderText && !isTransparent && isExpand == ""
                            ? "text-[#00000]"
                            : "text-[#fff]"
                        } text-[13px] hover:font-semibold cursor-pointer uppercase`}
                      >
                        {menu.name}
                      </Typography>
                      <Divider
                        sx={{
                          height: 24,
                          my: 2,
                          mr: 2,
                          backgroundColor: "white",
                        }}
                        orientation="vertical"
                      />
                    </div>
                  );
                return (
                  <div
                    key={i}
                    className="flex gap-2 items-center justify-center"
                  >
                    <Typography
                      key={i}
                      onMouseOver={() => setIsExpand(menu.name)}
                      className={`description ${
                        isHeaderText && !isTransparent && isExpand == ""
                          ? "text-[#00000]"
                          : "text-[#fff]"
                      } text-[13px] hover:font-semibold cursor-pointer uppercase transform-transition duration-200`}
                    >
                      {menu.name} +
                    </Typography>
                    <Divider
                      sx={{
                        height: 24,
                        my: 2,
                        mr: 2,
                        backgroundColor: "white",
                      }}
                      orientation="vertical"
                    />
                  </div>
                );
              })}
            </div>
          </Grid2>

          <Grid2
            xl={2.8}
            lg={2.0}
            md={1.8}
            className="flex justify-end items-center"
          >
            <div className="flex items-center gap-1">
              <button
                style={{
                  color:
                    isHeaderText && !isTransparent && isExpand == ""
                      ? "black"
                      : "white",
                  display: "block",
                  border:
                    isHeaderText && !isTransparent && isExpand == ""
                      ? "1px solid black"
                      : "1px solid rgba(241, 241, 241, 1)",
                  borderRadius: "30px",
                }}
                className={`font-semibold ${isMobile && "text-[13px]"} my-2 py-2 ${
                  !login || logoutStatus ? "px-10" : "px-5"
                }`}
                onClick={
                  !login || logoutStatus
                    ? () => {
                        navigate("/auth/login");
                      }
                    : handleClick
                }
              >
                {!login || logoutStatus
                  ? "LOGIN"
                  : user?.userId
                  ? user?.userId
                  : user?.firstName}
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                className="mx-auto"
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "black",
                    width: "fit-content",
                    color: "#fff",
                    padding: "0px 22px",
                    marginTop: "5px",
                    borderRadius: "30px",
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
                  p: 1,
                  my: 2,
                  // backgroundColor:
                  //   !isTransparent && isExpand == "" ? "black" : "white",
                  // color:
                  //   !isTransparent && isExpand == ""
                  //     ? "white !important"
                  //     : "black !important",
                  // display: "block",
                  // border: "1px solid rgba(241, 241, 241, 1)",
                  // borderRadius: "30px",
                  // "&:hover": {
                  //   backgroundColor:
                  //     !isTransparent && isExpand == ""
                  //       ? "white !important"
                  //       : "black !important",
                  //   color:
                  //     !isTransparent && isExpand == ""
                  //       ? "black !important"
                  //       : "white !important",
                  // },
                }}
                className={`${isMobile && "text-[13px]"} px-7 xl:px-10 description rounded-[30px] font-semibold bg-[#FF5733] hover:bg-[#FFD580] active:bg-[#CC5500]`}
                onClick={() => {
                  navigate("/stream-announcement");
                }}
              >
                Diwali
              </Button>
            </div>
          </Grid2>
        </Grid2>
        {isExpand !== "" && <HeaderDropdown isExpand={isExpand} />}
      </div>
    </div>
  );
};

export default Navbar;
