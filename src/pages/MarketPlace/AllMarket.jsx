// import React, { useState } from "react";
// import Searchbar from "../../components/Searchbar";
// import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import { InputAdornment, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
// import Markethome from "../../images/Market-home.png";
// import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { Link } from "react-router-dom";

// const AllMarket = () => {
//   const [heartColor, setHeartColor] = useState(false);

//   return (
//     <>
//       <Grid2 container xs={12} pt={20} className="flex justify-center">
//         <Grid2 xs={11} md={6} my={10} className="flex justify-center">
//           <Searchbar
//             fullWidth
//             InputProps={{
//               style: { color: "#fff" },
//               endAdornment: (
//                 <InputAdornment className="me-4" position="end">
//                   <SearchIcon
//                     sx={{
//                       borderRadius: "50%",
//                       padding: "5px",
//                       fontSize: "34px",
//                       background: "#ffffff",
//                     }}
//                   />
//                   <TuneRoundedIcon className="logoheader ml-3" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Grid2>
//         <Grid2 xs={12} my={5} container className="flex justify-center gap-10">
//           <Grid2
//             xs={11}
//             sm={8}
//             md={3.02}
//             lg={3}
//             className="flex flex-col gap-4"
//           >
//             <Grid2 xs={12} className="bg-box">
//               <Typography variant="subtitle2" className="bg-btn text-sm md:text-base">
//                 Categories
//               </Typography>
//               <Typography variant="subtitle2" className="description text-xs md:text-sm text-center py-10">
//                 LANDS | WEARABLES | EMOTES
//               </Typography>
//             </Grid2>
//             <Grid2 xs={12} className="bg-box">
//               <Typography variant="subtitle2" className="bg-btn text-sm md:text-base">
//                 Price
//               </Typography>
//               <Typography variant="subtitle2" className="description text-xs md:text-sm text-center py-10">
//                 Min | Max
//               </Typography>
//             </Grid2>
//             <Grid2 xs={12} className="bg-box">
//               <Typography variant="subtitle2" className="bg-btn text-sm sm:text-base">
//                 Location
//               </Typography>
//               <Typography variant="subtitle2" className="description px-10 pt-10 text-xs sm:text-sm">
//                 fjkll
//               </Typography>
//               <Typography variant="subtitle2" className="description px-10 pb-10 text-xs sm:text-sm">
//                 hgfkkgd
//               </Typography>
//             </Grid2>
//           </Grid2>
//           <Grid2
//             xs={11}
//             md={8}
//             container
//             gap={2}
//             className="flex justify-center sm:px-5"
//           >
//             <Grid2
//               my={1}
//               xs={5.766}
//               sm={5.67}
//               md={5}
//               lg={3.76}
//               xl={2.8}
//               className="bg-box"
//               sx={{ borderRadius: "43px !important" }}
//             >
//               <div className="relative">
//                 <img
//                   width="100%"
//                   height="70%"
//                   src={Markethome}
//                   alt="Marketplace"
//                 />
//                 {!heartColor ? (
//                   <FavoriteBorderRoundedIcon
//                     className="absolute top-3 right-5 logoheader cursor-pointer"
//                     onClick={() => setHeartColor(true)}
//                   />
//                 ) : (
//                   <FavoriteIcon
//                     className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                     onClick={() => setHeartColor(false)}
//                   />
//                 )}
//               </div>
//               <Link to={"/market-place/id"} className="no-underline w-full text-black">
//                 <div className="flex p-5 justify-between items-center">
//                   <div className="flex flex-col">
//                     <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                       Asdasdas
//                     </Typography>
//                     <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                       Asdasdasdsdsd
//                     </Typography>
//                   </div>
//                   <div>
//                     <Typography variant="subtitle2" className="bg-btn p-1 radius-[14px] text-xs">
//                       300 GYR
//                     </Typography>
//                   </div>
//                 </div>
//               </Link>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={5.766}
//               sm={5.67}
//               md={5}
//               lg={3.76}
//               xl={2.8}
//               className="bg-box"
//               sx={{ borderRadius: "43px !important" }}
//             >
//               <div className="relative">
//                 <img
//                   width="100%"
//                   height="70%"
//                   src={Markethome}
//                   alt="Marketplace"
//                 />
//                 {!heartColor ? (
//                   <FavoriteBorderRoundedIcon
//                     className="absolute top-3 right-5 logoheader cursor-pointer"
//                     onClick={() => setHeartColor(true)}
//                   />
//                 ) : (
//                   <FavoriteIcon
//                     className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                     onClick={() => setHeartColor(false)}
//                   />
//                 )}
//               </div>
//               <div className="flex p-5 justify-between items-center">
//                 <div className="flex flex-col">
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdas
//                   </Typography>
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdasdsdsd
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography variant="subtitle2" className="bg-btn p-1 radius-[14px] text-xs">
//                     300 GYR
//                   </Typography>
//                 </div>
//               </div>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={5.766}
//               sm={5.67}
//               md={5}
//               lg={3.76}
//               xl={2.8}
//               className="bg-box"
//               sx={{ borderRadius: "43px !important" }}
//             >
//               <div className="relative">
//                 <img
//                   width="100%"
//                   height="70%"
//                   src={Markethome}
//                   alt="Marketplace"
//                 />
//                 {!heartColor ? (
//                   <FavoriteBorderRoundedIcon
//                     className="absolute top-3 right-5 logoheader cursor-pointer"
//                     onClick={() => setHeartColor(true)}
//                   />
//                 ) : (
//                   <FavoriteIcon
//                     className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                     onClick={() => setHeartColor(false)}
//                   />
//                 )}
//               </div>
//               <div className="flex p-5 justify-between items-center">
//                 <div className="flex flex-col">
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdas
//                   </Typography>
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdasdsdsd
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography variant="subtitle2" className="bg-btn p-1 radius-[14px] text-xs">
//                     300 GYR
//                   </Typography>
//                 </div>
//               </div>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={5.766}
//               sm={5.67}
//               md={5}
//               lg={3.76}
//               xl={2.8}
//               className="bg-box"
//               sx={{ borderRadius: "43px !important" }}
//             >
//               <div className="relative">
//                 <img
//                   width="100%"
//                   height="70%"
//                   src={Markethome}
//                   alt="Marketplace"
//                 />
//                 {!heartColor ? (
//                   <FavoriteBorderRoundedIcon
//                     className="absolute top-3 right-5 logoheader cursor-pointer"
//                     onClick={() => setHeartColor(true)}
//                   />
//                 ) : (
//                   <FavoriteIcon
//                     className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                     onClick={() => setHeartColor(false)}
//                   />
//                 )}
//               </div>
//               <div className="flex p-5 justify-between items-center">
//                 <div className="flex flex-col">
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdas
//                   </Typography>
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdasdsdsd
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography variant="subtitle2" className="bg-btn p-1 radius-[14px] text-xs">
//                     300 GYR
//                   </Typography>
//                 </div>
//               </div>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={5.766}
//               sm={5.67}
//               md={5}
//               lg={3.76}
//               xl={2.8}
//               className="bg-box"
//               sx={{ borderRadius: "43px !important" }}
//             >
//               <div className="relative">
//                 <img
//                   width="100%"
//                   height="70%"
//                   src={Markethome}
//                   alt="Marketplace"
//                 />
//                 {!heartColor ? (
//                   <FavoriteBorderRoundedIcon
//                     className="absolute top-3 right-5 logoheader cursor-pointer"
//                     onClick={() => setHeartColor(true)}
//                   />
//                 ) : (
//                   <FavoriteIcon
//                     className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                     onClick={() => setHeartColor(false)}
//                   />
//                 )}
//               </div>
//               <div className="flex p-5 justify-between items-center">
//                 <div className="flex flex-col">
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdas
//                   </Typography>
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdasdsdsd
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography variant="subtitle2" className="bg-btn p-1 radius-[14px] text-xs">
//                     300 GYR
//                   </Typography>
//                 </div>
//               </div>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={5.766}
//               sm={5.67}
//               md={5}
//               lg={3.76}
//               xl={2.8}
//               className="bg-box"
//               sx={{ borderRadius: "43px !important" }}
//             >
//               <div className="relative">
//                 <img
//                   width="100%"
//                   height="70%"
//                   src={Markethome}
//                   alt="Marketplace"
//                 />
//                 {!heartColor ? (
//                   <FavoriteBorderRoundedIcon
//                     className="absolute top-3 right-5 logoheader cursor-pointer"
//                     onClick={() => setHeartColor(true)}
//                   />
//                 ) : (
//                   <FavoriteIcon
//                     className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                     onClick={() => setHeartColor(false)}
//                   />
//                 )}
//               </div>
//               <div className="flex p-5 justify-between items-center">
//                 <div className="flex flex-col">
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdas
//                   </Typography>
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdasdsdsd
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography variant="subtitle2" className="bg-btn p-1 radius-[14px] text-xs">
//                     300 GYR
//                   </Typography>
//                 </div>
//               </div>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={5.766}
//               sm={5.67}
//               md={5}
//               lg={3.76}
//               xl={2.8}
//               className="bg-box"
//               sx={{ borderRadius: "43px !important" }}
//             >
//               <div className="relative">
//                 <img
//                   width="100%"
//                   height="70%"
//                   src={Markethome}
//                   alt="Marketplace"
//                 />
//                 {!heartColor ? (
//                   <FavoriteBorderRoundedIcon
//                     className="absolute top-3 right-5 logoheader cursor-pointer"
//                     onClick={() => setHeartColor(true)}
//                   />
//                 ) : (
//                   <FavoriteIcon
//                     className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                     onClick={() => setHeartColor(false)}
//                   />
//                 )}
//               </div>
//               <div className="flex p-5 justify-between items-center">
//                 <div className="flex flex-col">
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdas
//                   </Typography>
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdasdsdsd
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography variant="subtitle2" className="bg-btn p-1 radius-[14px] text-xs">
//                     300 GYR
//                   </Typography>
//                 </div>
//               </div>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={5.766}
//               sm={5.67}
//               md={5}
//               lg={3.76}
//               xl={2.8}
//               className="bg-box"
//               sx={{ borderRadius: "43px !important" }}
//             >
//               <div className="relative">
//                 <img
//                   width="100%"
//                   height="70%"
//                   src={Markethome}
//                   alt="Marketplace"
//                 />
//                 {!heartColor ? (
//                   <FavoriteBorderRoundedIcon
//                     className="absolute top-3 right-5 logoheader cursor-pointer"
//                     onClick={() => setHeartColor(true)}
//                   />
//                 ) : (
//                   <FavoriteIcon
//                     className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                     onClick={() => setHeartColor(false)}
//                   />
//                 )}
//               </div>
//               <div className="flex p-5 justify-between items-center">
//                 <div className="flex flex-col">
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdas
//                   </Typography>
//                   <Typography variant="subtitle2" className="description text-xs sm:text-sm">
//                     Asdasdasdsdsd
//                   </Typography>
//                 </div>
//                 <div>
//                   <Typography variant="subtitle2" className="bg-btn p-1 radius-[14px] text-xs">
//                     300 GYR
//                   </Typography>
//                 </div>
//               </div>
//             </Grid2>
//           </Grid2>
//         </Grid2>
//       </Grid2>
//     </>
//   );
// };

// export default AllMarket;
