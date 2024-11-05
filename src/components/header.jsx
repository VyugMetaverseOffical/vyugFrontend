import React, { useState, useEffect } from "react";
import Logo from "../images/logo.webp";
import { Box, Divider, Tooltip, Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Presence from './presence';
import Core from './core';
import DigitalReality from './digitalReality';
import Trade from './trade';
import Invest from './invest';
import { useAuth } from '../redux/counterSlice';
import Buzz from './buzz';



const Header = ({ isTransparent, position }) => {
  useEffect(() => {
    console.log(position);
  }, [position]);

  const [login, setLogin] = useState(false);
  const navigate = useNavigate();




  const [isPresenceOpen, setIsPresenceOpen] = useState(false)
  const [isCoreOpen, setIsCoreOpen] = useState(false)
  const [isDigitalRealityOpen, setIsDigitalRealityOpen] = useState(false)
  const [isInvestOpen, setIsInvestOpen] = useState(false)
  const [isTradeOpen, setIsTradeOpen] = useState(false)
  const [isBuzzOpen, setIsBuzzOpen] = useState(false)
  const handlePresenceHover = () => {
    setIsPresenceOpen(true);
    setIsCoreOpen(false)
    setIsDigitalRealityOpen(false)
    setIsInvestOpen(false)
    setIsTradeOpen(false)
    setIsBuzzOpen(false)
  };
  const handleCoreHover = () => {
    setIsCoreOpen(true);
    setIsPresenceOpen(false)
    setIsDigitalRealityOpen(false)
    setIsInvestOpen(false)
    setIsTradeOpen(false)
    setIsBuzzOpen(false)
  };

  const handleBuzzHover = () => {
    setIsCoreOpen(false);
    setIsPresenceOpen(false)
    setIsDigitalRealityOpen(false)
    setIsInvestOpen(false)
    setIsTradeOpen(false)
    setIsBuzzOpen(true);

  };
  const handlePresenceClose = () => {
    setIsPresenceOpen(false); // Set isPresenceOpen to false when Presence component is closed
  };
  const handleCoreClose = () => {
    setIsCoreOpen(false); // Set isCoreOpen to false when Core component is closed
  };
  const handleDigitalRealityHover = () => {
    setIsCoreOpen(false);
    setIsPresenceOpen(false)
    setIsDigitalRealityOpen(true)
    setIsInvestOpen(false)
    setIsTradeOpen(false)
    setIsBuzzOpen(false)

  };
  const handleDigitalRealityClose = () => {
    setIsDigitalRealityOpen(false);
  };
  const handleTradeHover = () => {
    setIsCoreOpen(false);
    setIsPresenceOpen(false)
    setIsDigitalRealityOpen(false)
    setIsInvestOpen(false)
    setIsTradeOpen(true)
    setIsBuzzOpen(false)

  };
  const handleTradeClose = () => {
    setIsTradeOpen(false);
  };
  const handleInvestHover = () => {
    setIsCoreOpen(false);
    setIsPresenceOpen(false)
    setIsDigitalRealityOpen(false)
    setIsInvestOpen(true)
    setIsTradeOpen(false)
    setIsBuzzOpen(false)

  };
  const handleInvestClose = () => {
    setIsInvestOpen(false);
  };

  const handleBuzzClose = () => {
    setIsBuzzOpen(false);
  }
  const { user, isLoggedIn } = useAuth()
  useEffect(() => {
    if (isLoggedIn) {
      setLogin(true);
    }
  }, [isLoggedIn])

  return (
    <div className="fixed w-screen" style={{ zIndex: "1000" }}>
      <div
        className="h-36 flex"
        style={{
          backgroundColor:
            position ||
            isCoreOpen ||
            isDigitalRealityOpen ||
            isInvestOpen ||
            isTradeOpen ||
            isPresenceOpen
              ? "black"
              : "transparent",
        }}
      >
        <div className="flex items-center h-full cursor-pointer">
          <img
            src={Logo}
            className="ml-10 w-20"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <Box className=" ml-16 text-white flex ">

          <div  className="h-full flex cursor-pointer">
            <div onMouseOver={handlePresenceHover} className='flex'>
            <Box className="flex h-full items-center text-sm mr-2" sx={{':hover': { fontWeight: 'bold'}}}>
              PRESENCE 
            </Box>
            <Box className="flex h-full items-center text-sm" >
             {" "}+
            </Box>
            </div>

            <Box className="flex items-center h-full w-full">
              <Divider
                sx={{ height: 24, m: 2, backgroundColor: "white" }}
                orientation="vertical"
              />
            </Box>
          </div>

          <div  className="h-full flex cursor-pointer">
          <div onMouseOver={handleCoreHover} className='flex'>
            <Box className="flex h-full items-center text-sm mr-2" sx={{':hover': { fontWeight: 'bold'}}}>
            CORE
            </Box>
            <Box className="flex h-full items-center text-sm">
             +
            </Box>
            </div>

            <Box className="flex items-center h-full w-full">
              <Divider
                sx={{ height: 24, m: 2, backgroundColor: "white" }}
                orientation="vertical"
              />
            </Box>
          </div>

          <Box className="h-full flex cursor-pointer">
          <div onMouseOver={handleDigitalRealityHover} className='flex'>
            <Box className="flex h-full items-center text-sm w-32 gap-1" sx={{':hover': { fontWeight: 'bold'}}}>
              DIGITAL REALITY {" "} 
            </Box>
            <Box className="flex h-full items-center text-sm">
             +
            </Box>
            </div>


            <Box className="flex items-center h-full ">
              <Divider
                sx={{ height: 24, m: 2, backgroundColor: "white" }}
                orientation="vertical"
              />
            </Box>
          </Box>
          <Box
            onMouseOver={handleInvestHover}
            className="h-full flex cursor-pointer"
          >
            <Box
              className="flex h-full items-center text-sm mr-2"
              sx={{ ":hover": { fontWeight: "bold" } }}
            >
              INVEST
            </Box>
            <Box className="flex h-full items-center text-sm">+</Box>
            <Box className="flex items-center h-full w-full">
              <Divider
                sx={{ height: 24, m: 2, backgroundColor: "white" }}
                orientation="vertical"
              />
            </Box>
          </Box>

          <Box className="h-full ">
            <Box
              className="flex h-full items-center text-sm"
              sx={{ ":hover": { fontWeight: "bold" } }}
            >
              MAP
            </Box>
          </Box>
          <Box className="flex items-center">
            <Divider
              sx={{ height: 24, m: 2, backgroundColor: "white" }}
              orientation="vertical"
            />
          </Box>
          <Box onMouseOver={handleBuzzHover} className="h-full flex cursor-pointer">
            <Box className="flex h-full items-center text-sm mr-2" sx={{':hover': { fontWeight: 'bold'}}}>
             BUZZ
            </Box>
            <Box className="flex h-full items-center text-sm">
             {" "}+
            </Box>
          </Box>{" "}
          <Box className="flex items-center h-full w-full">
            <Divider
              sx={{ height: 24, m: 2, backgroundColor: "white" }}
              orientation="vertical"
            />
          </Box>
          <Box
            onMouseOver={handleTradeHover}
            className="h-full flex cursor-pointer"
          >
            <Box
              className="flex h-full items-center text-sm mr-2"
              sx={{ ":hover": { fontWeight: "bold" } }}
            >
              TRADE
            </Box>
            <Box className="flex h-full items-center text-sm"> +</Box>
          </Box>
          <Box className="flex items-center">
            <Divider
              sx={{ height: 24, m: 2, backgroundColor: "white" }}
              orientation="vertical"
            />
          </Box>
          <Box className="h-full ">
            <Box
              className="flex h-full items-center text-sm "
              sx={{ ":hover": { fontWeight: "bold" } }}
            >

            </Box>
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Box
            className="w-full flex items-center h-full gap-1 "
            sx={{ justifyContent: "flex-end" }}
          >
            <IoIosSearch
              style={{ fontSize: "26px", color: "white", cursor: "pointer" }}
            />
            <Button
              onClick={
                !login
                  ? () => {
                      navigate("/login");
                    }
                  : () => navigate("/profile")
              }
              sx={{
                p: 1,
                my: 2,
                color: "rgba(241, 241, 241, 1)",
                display: "block",
                fontWeight: "700",
                border: "1px solid rgba(241, 241, 241, 1)",
                borderRadius: "30px",
              }}
              className="px-10"
            >
             {!login ?"Login":user.userId?user.userId:user.firstName}

            </Button>
            <Button
              sx={{
                p: 1,
                my: 2,
                backgroundColor: "white",
                color: "black",
                display: "block",
                fontWeight: "400",
                border: "1px solid rgba(241, 241, 241, 1)",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "white", // Maintain the background color on hover
                  color: "black",
                },

              }}
              className="px-10 mr-24"

            >
              VYUG
            </Button>
          </Box>
        </Box>
      </div>
      {isPresenceOpen && (
        <Presence
          isPresenceOpen={isPresenceOpen}
          isTransparent={isTransparent}
          onClose={handlePresenceClose}
        />
      )}
      {isCoreOpen && (
        <Core
          isCoreOpen={isCoreOpen}
          isTransparent={isTransparent}
          onClose={handleCoreClose}
        />
      )}
      {isDigitalRealityOpen && (
        <DigitalReality
          isDigitalRealityOpen={isDigitalRealityOpen}
          isTransparent={isTransparent}
          onClose={handleDigitalRealityClose}
        />
      )}
      {isTradeOpen && (
        <Trade
          isTradeOpen={isTradeOpen}
          isTransparent={isTransparent}
          onClose={handleTradeClose}
        />
      )}
      {isInvestOpen && (
        <Invest
          isInvestOpen={isInvestOpen}
          isTransparent={isTransparent}
          onClose={handleInvestClose}
        />
      )}
       {isBuzzOpen && (
        <Buzz isBuzzOpen={isBuzzOpen} isTransparent={isTransparent} onClose={handleBuzzClose} />
      )}
    </div>
  );
};
export default Header;
