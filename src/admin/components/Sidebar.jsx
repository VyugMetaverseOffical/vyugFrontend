import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import vyugLogo from "../../images/vyugMobile.webp";
import toast from "react-hot-toast";
import { SuccessStyling, ToastSuccess } from "../../components/toast";
import { useAdminAuth } from "../auth/adminAuthSlice";

const AdminMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { logoutAdmin }= useAdminAuth()

  const { pathname } = useLocation();

  const handleLogout = () => {
    setOpen(false);
    logoutAdmin();
    toast.success(
      <ToastSuccess data={"Logout successful"} />,
      SuccessStyling
    );
    navigate('/admin/login')
  };

  const adminMenu = [
    {
      param: "dashboard",
      name: "Dashboard",
    },
    {
      param: "referral",
      name: "Referral Details",
    },
    {
      param: "overview",
      name: "Overview",
    },
    {
      param: "youtuber-details",
      name: "YouTuber Details",
    },
    {
      param: "user-details",
      name: "User Details",
    },
    {
      param: "new-referral",
      name: "New Refer Code",
    },
    {
      param: "new-commission",
      name: "New Commission Target",
    },
    {
      param: "logout",
      name: "LOG OUT",
    },
  ];

  return (
      <div>
        <IconButton
          className="bg-[#fff] mt-5 ml-5 p-3 shadow-md"
          size="large"
          onClick={() => setOpen(true)}
          color="black"
        >
          <MenuIcon className="logoSubHeading" />
        </IconButton>
        <Drawer
          anchor="left"
          variant="temporary"
          transitionDuration={200}
          sx={{
            "& .MuiDrawer-paper": {
              width: "250px",
            },
          }}
          // PaperProps={{
          //   className: "container",
          // }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              height: "100%",
              paddingBlock: "10px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                paddingInlineEnd: "10px",
              }}
            >
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
                paddingTop: "10px",
                paddingBottom: "50px",
              }}
            >
              <img style={{ width: "16%" }} src={vyugLogo} alt="" />
              <p style={{ color: "#202224" }} className="header">
                <span style={{ color: "#4880FF" }}>Dash</span>Stack
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                width: "100%",
              }}
            >
              {adminMenu
                .filter((item) => {
                  if (item?.param !== "logout") {
                    return item;
                  }
                })
                .map((item, index) => {
                  return (
                    <ListItem key={index}>
                      <Link
                        to={`/admin/${item.param}`}
                        style={{ textDecoration: "none", width: "100%" }}
                      >
                        <p
                        onClick={() => setOpen(false)}
                          style={{
                            fontSize: "18px",
                            textAlign: "left",
                            ...(pathname === `/admin/${item.param}`
                              ? {
                                  backgroundColor: "#979797",
                                  padding: "10px",
                                  borderRadius: "7px",
                                }
                              : {}),
                          }}
                          className="description"
                        >
                          {item?.name}
                        </p>
                      </Link>
                    </ListItem>
                  );
                })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "60px",
                paddingBottom: "40px",
                width: "100%",
              }}
            >
              <p onClick={() => handleLogout()} style={{ color: "#202224" }} className="header cursor-pointer">
                Logout
              </p>
            </div>
          </div>
        </Drawer>
      </div>
  );
};

export default AdminMenu;
