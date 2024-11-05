// import React, { useState, useEffect } from "react";
// import Logo from "../images/logo.webp";
// import { Box, Divider, Tooltip, Button } from "@mui/material";
// import { IoIosSearch } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// import Presence from './presence';
// import Core from './core';
// import DigitalReality from './digitalReality';
// import Trade from './trade';
// import Invest from './invest';
// import { useAuth } from '../redux/counterSlice';
// // import profile from "../images/user.svg"
// import Buzz from './buzz';


// const Header2 = ({ isTransparent, position, color }) => {
//   useEffect(() => {
//     console.log(position);
//   }, [position]);

//   const [login, setLogin] = useState(false);
//   const navigate = useNavigate();


//   const { user, isLoggedIn } = useAuth();

//   useEffect(() => {
//     if (isLoggedIn) {
//       setLogin(true);
//     }
//   }, [isLoggedIn]);

//   const [isPresenceOpen, setIsPresenceOpen] = useState(false)
//   const [isCoreOpen, setIsCoreOpen] = useState(false)
//   const [isDigitalRealityOpen, setIsDigitalRealityOpen] = useState(false)
//   const [isInvestOpen, setIsInvestOpen] = useState(false)
//   const [isTradeOpen, setIsTradeOpen] = useState(false)
//   const [isBuzzOpen, setIsBuzzOpen] = useState(false)

//   const handlePresenceHover = () => {
//     setIsPresenceOpen(true);
//     setIsCoreOpen(false);
//     setIsDigitalRealityOpen(false);
//     setIsInvestOpen(false);
//     setIsTradeOpen(false);
//   };
//   const handleCoreHover = () => {
//     setIsCoreOpen(true);
//     setIsPresenceOpen(false);
//     setIsDigitalRealityOpen(false);
//     setIsInvestOpen(false);
//     setIsTradeOpen(false);
//   };
//   const handlePresenceClose = () => {
//     setIsPresenceOpen(false); // Set isPresenceOpen to false when Presence component is closed
//   };
//   const handleCoreClose = () => {
//     setIsCoreOpen(false); // Set isCoreOpen to false when Core component is closed
//   };
//   const handleDigitalRealityHover = () => {
//     setIsCoreOpen(false);
//     setIsPresenceOpen(false);
//     setIsDigitalRealityOpen(true);
//     setIsInvestOpen(false);
//     setIsTradeOpen(false);
//   };
//   const handleDigitalRealityClose = () => {
//     setIsDigitalRealityOpen(false);
//   };
//   const handleTradeHover = () => {
//     setIsCoreOpen(false);
//     setIsPresenceOpen(false);
//     setIsDigitalRealityOpen(false);
//     setIsInvestOpen(false);
//     setIsTradeOpen(true);
//   };
//   const handleTradeClose = () => {
//     setIsTradeOpen(false);
//   };
//   const handleInvestHover = () => {
//     setIsCoreOpen(false);
//     setIsPresenceOpen(false);
//     setIsDigitalRealityOpen(false);
//     setIsInvestOpen(true);
//     setIsTradeOpen(false);
//   };
//   const handleInvestClose = () => {
//     setIsInvestOpen(false);
//   };

//   const handleBuzzHover = () => {
//     setIsCoreOpen(false);
//     setIsPresenceOpen(false)
//     setIsDigitalRealityOpen(false)
//     setIsInvestOpen(false)
//     setIsTradeOpen(false)
//     setIsBuzzOpen(true);
//   };

//   const handleBuzzClose = () => {
//     setIsBuzzOpen(false);
//   }

//   return (
//     <div className="fixed w-screen" style={{ zIndex: "1000" }}>
//       <div
//         className="h-36  flex"
//         style={{
//           backgroundColor:
//             color ||
//             isCoreOpen ||
//             isDigitalRealityOpen ||
//             isInvestOpen ||
//             isTradeOpen ||
//             isPresenceOpen||isBuzzOpen
//               ? "black"
//               : "transparent",
//         }}
//       >
//         <div className="flex items-center h-full">
//           <img
//             src={Logo}
//             className="ml-10 w-20 cursor-pointer"
//             onClick={() => {
//               navigate("/");
//             }}
//           />
//         </div>
//         <Box
//           className=" ml-16 flex "
//           style={{
//             color:
//               !position ||
//               color ||
//               isCoreOpen ||
//               isDigitalRealityOpen ||
//               isInvestOpen ||
//               isTradeOpen ||
//               isPresenceOpen
//                 ? "white"
//                 : "transparent",
//           }}
//         >
//           <div
            
//             className="h-full flex cursor-pointer"
//           >
//             <Box
//               className="flex h-full items-center text-sm mr-2"
//               sx={{ ":hover": { fontWeight: "bold" } }} onMouseOver={handlePresenceHover}
//             >
              
//               PRESENCE
//             </Box>
//             <Box className="flex h-full items-center text-sm"> +</Box>
//             <Box className="flex items-center h-full w-full">
//               <Divider
//                 sx={{
//                   height: 24,
//                   m: 2,
//                   backgroundColor:
//                     !position ||
//                     color ||
//                     isCoreOpen ||
//                     isDigitalRealityOpen ||
//                     isInvestOpen ||
//                     isTradeOpen ||
//                     isPresenceOpen
//                       ? "white"
//                       : "transparent",
//                 }}
//                 orientation="vertical"
//               />
//             </Box>
//           </div>
//           <div
            
//             className="h-full flex cursor-pointer"
//           >
//             <Box
//               className="flex h-full items-center text-sm mr-2"
//               sx={{ ":hover": { fontWeight: "bold" } }}
//               onMouseOver={handleCoreHover}
//             >
//               CORE
//             </Box>
//             <Box className="flex h-full items-center text-sm">+</Box>
//             <Box className="flex items-center h-full w-full">
//               <Divider
//                 sx={{
//                   height: 24,
//                   m: 2,
//                   backgroundColor:
//                     !position ||
//                     color ||
//                     isCoreOpen ||
//                     isDigitalRealityOpen ||
//                     isInvestOpen ||
//                     isTradeOpen ||
//                     isPresenceOpen
//                       ? "white"
//                       : "transparent",
//                 }}
//                 orientation="vertical"
//               />
//             </Box>
//           </div>
//           <Box
           
//             className="h-full flex cursor-pointer"
//           >
//             <Box
//               className="flex h-full items-center text-sm w-32 gap-1"
//               sx={{ ":hover": { fontWeight: "bold" } }}
//               onMouseOver={handleDigitalRealityHover}
//             >
//               DIGITAL REALITY{" "}
//             </Box>
//             <Box className="flex h-full items-center text-sm">+</Box>
//             <Box className="flex items-center h-full ">
//               <Divider
//                 sx={{
//                   height: 24,
//                   m: 2,
//                   backgroundColor:
//                     !position ||
//                     color ||
//                     isCoreOpen ||
//                     isDigitalRealityOpen ||
//                     isInvestOpen ||
//                     isTradeOpen ||
//                     isPresenceOpen
//                       ? "white"
//                       : "transparent",
//                 }}
//                 orientation="vertical"
//               />
//             </Box>
//           </Box>
//           <Box
           
//             className="h-full flex cursor-pointer"
//           >
//             <Box
//               className="flex h-full items-center text-sm mr-2"
//               sx={{ ":hover": { fontWeight: "bold" } }}
//               onMouseOver={handleInvestHover}
//             >
//               INVEST
//             </Box>
//             <Box className="flex h-full items-center text-sm">+</Box>
//             <Box className="flex items-center h-full w-full">
//               <Divider
//                 sx={{
//                   height: 24,
//                   m: 2,
//                   backgroundColor:
//                     !position ||
//                     color ||
//                     isCoreOpen ||
//                     isDigitalRealityOpen ||
//                     isInvestOpen ||
//                     isTradeOpen ||
//                     isPresenceOpen
//                       ? "white"
//                       : "transparent",
//                 }}
//                 orientation="vertical"
//               />
//             </Box>
//           </Box>

//           <Box className="h-full "><Box className="flex h-full items-center text-sm" sx={{ ':hover': { fontWeight: 'bold' } }}>MAP</Box></Box>
//           <Box className="flex items-center"><Divider sx={{ height: 24, m: 2, backgroundColor: (!position || color || isCoreOpen || isDigitalRealityOpen || isInvestOpen || isTradeOpen || isPresenceOpen) ? "white" : "transparent" }} orientation="vertical" /></Box>
//           <Box  className="h-full flex cursor-pointer">
//             <Box className="flex h-full items-center text-sm mr-2" sx={{ ':hover': { fontWeight: 'bold' } }} onMouseEnter={handleBuzzHover}>
//               BUZZ
//             </Box>
//             <Box className="flex h-full items-center text-sm"> +</Box>
//           </Box>
//           <Box className="flex items-center h-full w-full">
//             <Divider
//               sx={{
//                 height: 24,
//                 m: 2,
//                 backgroundColor:
//                   !position ||
//                   color ||
//                   isCoreOpen ||
//                   isDigitalRealityOpen ||
//                   isInvestOpen ||
//                   isTradeOpen ||
//                   isPresenceOpen
//                     ? "white"
//                     : "transparent",
//               }}
//               orientation="vertical"
//             />
//           </Box>
//           <Box
        
//             className="h-full flex cursor-pointer"
//           >
//             <Box
//               className="flex h-full items-center text-sm mr-2"
//               sx={{ ":hover": { fontWeight: "bold" } }}     onMouseOver={handleTradeHover}
//             >
//               TRADE
//             </Box>
//             <Box className="flex h-full items-center text-sm"> +</Box>
//           </Box>
//           <Box className="flex items-center">
//             <Divider
//               sx={{
//                 height: 24,
//                 m: 2,
//                 backgroundColor:
//                   !position ||
//                   color ||
//                   isCoreOpen ||
//                   isDigitalRealityOpen ||
//                   isInvestOpen ||
//                   isTradeOpen ||
//                   isPresenceOpen
//                     ? "white"
//                     : "transparent",
//               }}
//               orientation="vertical"
//             />
//           </Box>
//           <Box className="h-full ">
//             <Box
//               className="flex h-full items-center text-sm "
//               sx={{ ":hover": { fontWeight: "bold" } }}
//             >
//               TOKEN
//             </Box>
//           </Box>
//         </Box>

//         <Box sx={{ width: "100%" }}>
//           <Box
//             className="w-full flex items-center h-full gap-1 "
//             sx={{ justifyContent: "flex-end" }}
//           >
//             <IoIosSearch
//               style={{ fontSize: "26px", color: "white", cursor: "pointer" }}
//             />
//             <Button
//               onClick={
//                 !login
//                   ? () => {
//                       navigate("/login");
//                     }
//                   : () => navigate("/profile")
//               }
//               sx={{
//                 p: 1,
//                 my: 2,
//                 color: "rgba(241, 241, 241, 1)",
//                 display: "block",
//                 fontWeight: "700",
//                 border: "1px solid rgba(241, 241, 241, 1)",
//                 borderRadius: "30px",
//               }}
//               className="w-28"
//             >
//               {!login ?"Login":user.userId?user.userId:user.firstName}
//             </Button>
//             <Button
//               sx={{
//                 p: 1,
//                 my: 2,
//                 backgroundColor: "white",
//                 color: "black",
//                 display: "block",
//                 fontWeight: "400",
//                 border: "1px solid rgba(241, 241, 241, 1)",
//                 borderRadius: "30px",
//                 "&:hover": {
//                   backgroundColor: "white",
//                   color: "black",
//                 },
//               }}
//               className="w-28 mr-24"
//             >
//               VYUG
//             </Button>
//           </Box>
//         </Box>
//       </div>
//       {isPresenceOpen && (
//         <Presence
//           isPresenceOpen={isPresenceOpen}
//           isTransparent={isTransparent}
//           onClose={handlePresenceClose}
//         />
//       )}
//       {isCoreOpen && (
//         <Core
//           isCoreOpen={isCoreOpen}
//           isTransparent={isTransparent}
//           onClose={handleCoreClose}
//         />
//       )}
//       {isDigitalRealityOpen && (
//         <DigitalReality
//           isDigitalRealityOpen={isDigitalRealityOpen}
//           isTransparent={isTransparent}
//           onClose={handleDigitalRealityClose}
//         />
//       )}
//       {isTradeOpen && (
//         <Trade
//           isTradeOpen={isTradeOpen}
//           isTransparent={isTransparent}
//           onClose={handleTradeClose}
//         />
//       )}
//       {isInvestOpen && (
//         <Invest
//           isInvestOpen={isInvestOpen}
//           isTransparent={isTransparent}
//           onClose={handleInvestClose}
//         />
//       )}
//        {isBuzzOpen && (
//         <Buzz isBuzzOpen={isBuzzOpen} isTransparent={isTransparent} onClose={handleBuzzClose} />
//       )}
//     </div>
//   );
// };
// export default Header2;
