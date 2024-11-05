import { Button, Divider, Typography, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown";
import Logo from "../images/logo.webp";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { HeaderData } from "./HeaderData";
import { useAuth } from "../redux/counterSlice";
import { useAirdropAuth } from "../redux/airdropAuthSlice";
import toast from "react-hot-toast";
import { SuccessStyling, ToastSuccess } from "./toast";

const AirdropNavbar = ({ isTransparent, isHeaderText }) => {
  const [isExpand, setIsExpand] = useState("");
  const [login, setLogin] = useState(false);
  const { user, isLoggedIn } = useAuth();
  const { logoutUser, airdropUser } = useAirdropAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  console.log(airdropUser);
  useEffect(() => {
    if (isLoggedIn) {
      setLogin(true);
    }
  }, [isLoggedIn]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: "fixed", top: 0, right: 0, left: 0, zIndex: 999 }}>
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
              <img src={Logo} alt="Vyug" className="w-14" />
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
              <Button
                sx={{
                  p: 1,
                  my: 2,
                  color:
                    isHeaderText && !isTransparent && isExpand == ""
                      ? "black"
                      : "white",
                  display: "block",
                  fontWeight: "500",
                }}
                className="cursor-default"
                disableRipple
              >
                {/* {!login
                  ? "FullName"
                  : user.userId
                  ? user.userId
                  : user.firstName} */}
                {airdropUser?.name || ""}
              </Button>
              <Button
                sx={{
                  p: 1,
                  my: 2,
                  color: !isTransparent && isExpand == "" ? "white" : "black",
                  display: "block",
                  fontWeight: "400",
                  borderRadius: "30px",
                }}
                disableRipple
                onClick={handleClick}
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[40px]"
                >
                  <path
                    d="M22.5374 24.5566C21.2746 24.5566 20.0119 24.5566 18.7601 24.5566C15.4329 24.5896 12.7317 26.7747 12.1058 29.9591C11.9082 30.9583 11.8313 31.9905 12.5341 32.825C12.9733 33.3521 13.5333 33.8133 14.1043 34.2086C17.2557 36.3718 20.7256 37.2282 24.5249 36.7231C27.3579 36.3498 29.8395 35.1968 32.0246 33.3741C32.7164 32.8031 33.0348 32.0344 33.0348 31.145C33.0348 27.8618 30.4764 24.941 27.2151 24.6555C25.6669 24.5127 22.5484 24.5896 22.5484 24.5676L22.5374 24.5566Z"
                    stroke={
                      !isTransparent && isExpand == "" ? "black" : "white"
                    }
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M15.9026 14.7503C15.9246 18.4069 18.9223 21.3826 22.5459 21.3387C26.1805 21.2948 29.1562 18.2861 29.1123 14.6954C29.0574 11.0279 26.1036 8.10707 22.48 8.12903C18.8235 8.15099 15.8697 11.1267 15.9026 14.7393V14.7503Z"
                    stroke={
                      !isTransparent && isExpand == "" ? "black" : "white"
                    }
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M22.5 44C34.3741 44 44 34.3741 44 22.5C44 10.6259 34.3741 1 22.5 1C10.6259 1 1 10.6259 1 22.5C1 34.3741 10.6259 44 22.5 44Z"
                    stroke={
                      !isTransparent && isExpand == "" ? "black" : "white"
                    }
                    stroke-miterlimit="10"
                  />
                </svg>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    logoutUser();
                    toast.success(
                      <ToastSuccess data={"Logout Success"} />,
                      SuccessStyling
                    );
                    navigate("/landing-page/login");
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Grid2>
        </Grid2>
        {isExpand !== "" && <HeaderDropdown isExpand={isExpand} />}
      </div>
    </div>
  );
};

export default AirdropNavbar;
