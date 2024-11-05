import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useAdminAuth } from "../auth/adminAuthSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SuccessStyling, ToastSuccess } from "../../components/toast";
import Sidebar from "./Sidebar";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [adminName,setAdminName] =useState("")
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const {admin, logoutAdmin}= useAdminAuth()

  const handleClose = () => {
    setAnchorEl(null);
    logoutAdmin();
    toast.success(
      <ToastSuccess data={"Logout successful"} />,
      SuccessStyling
    );
    navigate('/admin/login')
  };
  console.log(admin)
  useEffect(() => {
    const fetchData = async () => {
    
      try {
        if (admin) { 
      setAdminName(admin.email)
   
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [admin]);
 


  return (
    <div className="flex justify-between items-center py-4">
      {/* <h4 className="header">VYUG</h4> */}
      <Sidebar />
      <div className="mr-10 mt-10">
        <Button
          id="admin-profile-btn"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="flex justify-center items-center gap-3"
        >
          <div className="rounded-full w-9 h-9 bg-[#BFBFBF]"></div>
          <div className="flex flex-col justify-center items-start">
            <p className="description font-bold text-sm">{adminName}</p>
            <p className="description font-normal text-xs">Admin</p>
          </div>
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.47787 0.300296L6.07263 4.88554L10.6579 0.29078L12.0693 1.70932L6.07556 7.71553L0.0693431 1.72176L1.47787 0.300296Z"
              fill="black"
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
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose} className="description text-xs">Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
