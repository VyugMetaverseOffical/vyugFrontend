// import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import React, { useState } from "react";
// import Markethome from "../../images/Market-home.png";
// import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { Button, Divider, Typography } from "@mui/material";
// import CreatorImage from "../../images/creator_image.png";
// import { Link } from "react-router-dom";

// const Market = () => {
//   const [heartColor, setHeartColor] = useState(false);

//   return (
//     // <Grid2
//     //   xs={12}
//     //   mt={28}
//     //   container
//     //   className="flex justify-center bg-black"
//     // >
//     <Grid2 container xs={12}  className="flex justify-center pt-32">
//       <Grid2 xs={12} container className="flex justify-center gap-4">
//         <Grid2 xs={11} sm={5}>
//           <div className="relative">
//             <img
//               width="100%"
//               height="100%"
//               src={Markethome}
//               alt="market-place image"
//             />
//             {!heartColor ? (
//               <FavoriteBorderRoundedIcon
//                 className="absolute text-4xl top-10 right-10 logoheader cursor-pointer"
//                 onClick={() => setHeartColor(true)}
//               />
//             ) : (
//               <FavoriteIcon
//                 className="absolute top-10 text-4xl right-10 logoheader text-[#ef4444] cursor-pointer"
//                 onClick={() => setHeartColor(false)}
//               />
//             )}
//           </div>
//         </Grid2>
//         <Grid2 container xs={11} sm={6}>
//           <Grid2 container xs={12} className="flex flex-col">
//             <Typography variant="h4" className="header my-5">
//               ABCc asndn 3
//             </Typography>
//             <div className="flex gap-5">
//               <Button className="bg-btn">Land</Button>
//               <Button className="bg-btn">Network - ashdjas</Button>
//             </div>
//             <Typography
//               variant="h6"
//               className="header text-sm sm:text-base my-5"
//             >
//               Description
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               className="description text-xs sm:text-sm"
//             >
//               asjdk asdj a amsd masdm m adsm m admssnanasdn amsdkl madm mad masd
//               mads adns mnasdm camsd masd a d adn adk adsnmkda kndn adnkad dasd
//               asjdk asdj a amsd masdm m adsm m admssnanasdn amsdkl madm mad masd
//               mads adns mnasdm camsd masd a d adn adk adsnmkda kndn adnkad dasd
//               asjdk asdj a amsd masdm m adsm m admssnanasdn amsdkl madm mad masd
//               mads adns mnasdm camsd masd a d adn adk adsnmkda kndn adnkad dasd
//             </Typography>
//             <Typography
//               variant="h6"
//               className="header text-sm sm:text-base my-5"
//             >
//               Creator
//             </Typography>
//             <Grid2 container xs={12} className="flex justify-center items-center my-5">
//               <Grid2 container xs={11} sm={5} md={2.99} lg={3.3} className="relative w-36 px-2 bg-box text-center">
//                 <img className="relative left-4 -top-[40px]"
//                   width={"70%"}
//                   height={"70%"}
//                   src={CreatorImage}
//                   alt="Creator Image"
//                 />
//                 <div className="relative top-9 -left-16">
//                   <svg
//                     width="19"
//                     height="25"
//                     viewBox="0 0 34 33"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M34 16.5L30.2291 12.1157L30.7545 6.31714L25.1755 5.02857L22.2545 0L17 2.29429L11.7455 0L8.82454 5.01286L3.24545 6.28571L3.77091 12.1L0 16.5L3.77091 20.8843L3.24545 26.6986L8.82454 27.9871L11.7455 33L17 30.69L22.2545 32.9843L25.1755 27.9714L30.7545 26.6829L30.2291 20.8843L34 16.5ZM14.0482 23.9171L8.17545 17.93L10.4627 15.6043L14.0482 19.2657L23.0891 10.0414L25.3764 12.3671L14.0482 23.9171Z"
//                       fill="#323232"
//                     />
//                   </svg>
//                 </div>
//                 <div className="relative -right-2 -top-[10px]">
//                   <Typography
//                     variant="subtitle2"
//                     className="header text-xs sm:text-sm text-center"
//                   >
//                     Mr. Owner
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     className="description text-xs sm:text-sm text-center"
//                   >
//                     Land Owner | 3
//                   </Typography>
//                 </div>
//               </Grid2>
//               <Grid2 xs={1} className="flex justify-center">
//                 <Divider
//                   className="hidden xl:block"
//                   sx={{ height: 70, m: 1 }}
//                   orientation="vertical"
//                   style={{ width: 1, backgroundColor: "#686262" }}
//                 />
//               </Grid2>
//               <Grid2 container xs={11} sm={5} md={2.98} lg={3.3} className="flex flex-col mt-10 sm:mt-0 items-center">
//                 <Typography
//                   variant="subtitle1"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Price-- 77684954
//                 </Typography>
//                 <Button className="bg-btn mt-2 px-24">Buy</Button>
//               </Grid2>
//               <Grid2 xs={1} className="flex justify-center">
//                 <Divider
//                   className="hidden xl:block"
//                   sx={{ height: 70, m: 1 }}
//                   orientation="vertical"
//                   style={{ width: 1, backgroundColor: "#686262" }}
//                 />
//               </Grid2>
//               <Grid2 container xs={11} sm={11} md={6} lg={4.3} className="bg-box flex gap-2 flex-col mt-10 xl:mt-0 p-5 text-center">
//                 <Typography
//                   variant="subtitle1"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Token Id - 77684954
//                 </Typography>
//                 <Typography
//                   variant="subtitle1"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Token Standard - ERC721
//                 </Typography>
//                 <Typography
//                   variant="subtitle1"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Contact address - 776954
//                 </Typography>
//                 <Typography
//                   variant="subtitle1"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Chain - 77684954
//                 </Typography>
//               </Grid2>
//             </Grid2>
//           </Grid2>
//         </Grid2>
//       </Grid2>
//       <Typography variant="h6" className="header my-10">
//         View More
//       </Typography>
//       <Grid2 xs={11} container gap={4} className="flex justify-center">
//         <Grid2
//           my={1}
//           xs={9}
//           sm={5.67}
//           md={5}
//           lg={2.5}
//           xl={2}
//           className="bg-box"
//           sx={{ borderRadius: "43px !important" }}
//         >
//           <div className="relative">
//             <img width="100%" height="70%" src={Markethome} alt="Marketplace" />
//             {!heartColor ? (
//               <FavoriteBorderRoundedIcon
//                 className="absolute top-3 right-5 logoheader cursor-pointer"
//                 onClick={() => setHeartColor(true)}
//               />
//             ) : (
//               <FavoriteIcon
//                 className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                 onClick={() => setHeartColor(false)}
//               />
//             )}
//           </div>
//           <Link
//             to={"/market-place/id"}
//             className="no-underline w-full text-black"
//           >
//             <div className="flex p-5 justify-between items-center">
//               <div className="flex flex-col">
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdas
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdasdsdsd
//                 </Typography>
//               </div>
//               <div>
//                 <Typography
//                   variant="subtitle2"
//                   className="bg-btn p-1 radius-[14px] text-xs"
//                 >
//                   300 GYR
//                 </Typography>
//               </div>
//             </div>
//           </Link>
//         </Grid2>
//         <Grid2
//           my={1}
//           xs={9}
//           sm={5.67}
//           md={5}
//           lg={2.5}
//           xl={2}
//           className="bg-box"
//           sx={{ borderRadius: "43px !important" }}
//         >
//           <div className="relative">
//             <img width="100%" height="70%" src={Markethome} alt="Marketplace" />
//             {!heartColor ? (
//               <FavoriteBorderRoundedIcon
//                 className="absolute top-3 right-5 logoheader cursor-pointer"
//                 onClick={() => setHeartColor(true)}
//               />
//             ) : (
//               <FavoriteIcon
//                 className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                 onClick={() => setHeartColor(false)}
//               />
//             )}
//           </div>
//           <Link
//             to={"/market-place/id"}
//             className="no-underline w-full text-black"
//           >
//             <div className="flex p-5 justify-between items-center">
//               <div className="flex flex-col">
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdas
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdasdsdsd
//                 </Typography>
//               </div>
//               <div>
//                 <Typography
//                   variant="subtitle2"
//                   className="bg-btn p-1 radius-[14px] text-xs"
//                 >
//                   300 GYR
//                 </Typography>
//               </div>
//             </div>
//           </Link>
//         </Grid2>
//         <Grid2
//           my={1}
//           xs={9}
//           sm={5.67}
//           md={5}
//           lg={2.5}
//           xl={2}
//           className="bg-box"
//           sx={{ borderRadius: "43px !important" }}
//         >
//           <div className="relative">
//             <img width="100%" height="70%" src={Markethome} alt="Marketplace" />
//             {!heartColor ? (
//               <FavoriteBorderRoundedIcon
//                 className="absolute top-3 right-5 logoheader cursor-pointer"
//                 onClick={() => setHeartColor(true)}
//               />
//             ) : (
//               <FavoriteIcon
//                 className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                 onClick={() => setHeartColor(false)}
//               />
//             )}
//           </div>
//           <Link
//             to={"/market-place/id"}
//             className="no-underline w-full text-black"
//           >
//             <div className="flex p-5 justify-between items-center">
//               <div className="flex flex-col">
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdas
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdasdsdsd
//                 </Typography>
//               </div>
//               <div>
//                 <Typography
//                   variant="subtitle2"
//                   className="bg-btn p-1 radius-[14px] text-xs"
//                 >
//                   300 GYR
//                 </Typography>
//               </div>
//             </div>
//           </Link>
//         </Grid2>
//         <Grid2
//           my={1}
//           xs={9}
//           sm={5.67}
//           md={5}
//           lg={2.5}
//           xl={2}
//           className="bg-box"
//           sx={{ borderRadius: "43px !important" }}
//         >
//           <div className="relative">
//             <img width="100%" height="70%" src={Markethome} alt="Marketplace" />
//             {!heartColor ? (
//               <FavoriteBorderRoundedIcon
//                 className="absolute top-3 right-5 logoheader cursor-pointer"
//                 onClick={() => setHeartColor(true)}
//               />
//             ) : (
//               <FavoriteIcon
//                 className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                 onClick={() => setHeartColor(false)}
//               />
//             )}
//           </div>
//           <Link
//             to={"/market-place/id"}
//             className="no-underline w-full text-black"
//           >
//             <div className="flex p-5 justify-between items-center">
//               <div className="flex flex-col">
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdas
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdasdsdsd
//                 </Typography>
//               </div>
//               <div>
//                 <Typography
//                   variant="subtitle2"
//                   className="bg-btn p-1 radius-[14px] text-xs"
//                 >
//                   300 GYR
//                 </Typography>
//               </div>
//             </div>
//           </Link>
//         </Grid2>
//         <Grid2
//           my={1}
//           xs={9}
//           sm={5.67}
//           md={5}
//           lg={2.5}
//           xl={2}
//           className="bg-box"
//           sx={{ borderRadius: "43px !important" }}
//         >
//           <div className="relative">
//             <img width="100%" height="70%" src={Markethome} alt="Marketplace" />
//             {!heartColor ? (
//               <FavoriteBorderRoundedIcon
//                 className="absolute top-3 right-5 logoheader cursor-pointer"
//                 onClick={() => setHeartColor(true)}
//               />
//             ) : (
//               <FavoriteIcon
//                 className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                 onClick={() => setHeartColor(false)}
//               />
//             )}
//           </div>
//           <Link
//             to={"/market-place/id"}
//             className="no-underline w-full text-black"
//           >
//             <div className="flex p-5 justify-between items-center">
//               <div className="flex flex-col">
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdas
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdasdsdsd
//                 </Typography>
//               </div>
//               <div>
//                 <Typography
//                   variant="subtitle2"
//                   className="bg-btn p-1 radius-[14px] text-xs"
//                 >
//                   300 GYR
//                 </Typography>
//               </div>
//             </div>
//           </Link>
//         </Grid2>
//         <Grid2
//           my={1}
//           xs={9}
//           sm={5.67}
//           md={5}
//           lg={2.5}
//           xl={2}
//           className="bg-box"
//           sx={{ borderRadius: "43px !important" }}
//         >
//           <div className="relative">
//             <img width="100%" height="70%" src={Markethome} alt="Marketplace" />
//             {!heartColor ? (
//               <FavoriteBorderRoundedIcon
//                 className="absolute top-3 right-5 logoheader cursor-pointer"
//                 onClick={() => setHeartColor(true)}
//               />
//             ) : (
//               <FavoriteIcon
//                 className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                 onClick={() => setHeartColor(false)}
//               />
//             )}
//           </div>
//           <Link
//             to={"/market-place/id"}
//             className="no-underline w-full text-black"
//           >
//             <div className="flex p-5 justify-between items-center">
//               <div className="flex flex-col">
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdas
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdasdsdsd
//                 </Typography>
//               </div>
//               <div>
//                 <Typography
//                   variant="subtitle2"
//                   className="bg-btn p-1 radius-[14px] text-xs"
//                 >
//                   300 GYR
//                 </Typography>
//               </div>
//             </div>
//           </Link>
//         </Grid2>
//         <Grid2
//           my={1}
//           xs={9}
//           sm={5.67}
//           md={5}
//           lg={2.5}
//           xl={2}
//           className="bg-box"
//           sx={{ borderRadius: "43px !important" }}
//         >
//           <div className="relative">
//             <img width="100%" height="70%" src={Markethome} alt="Marketplace" />
//             {!heartColor ? (
//               <FavoriteBorderRoundedIcon
//                 className="absolute top-3 right-5 logoheader cursor-pointer"
//                 onClick={() => setHeartColor(true)}
//               />
//             ) : (
//               <FavoriteIcon
//                 className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                 onClick={() => setHeartColor(false)}
//               />
//             )}
//           </div>
//           <Link
//             to={"/market-place/id"}
//             className="no-underline w-full text-black"
//           >
//             <div className="flex p-5 justify-between items-center">
//               <div className="flex flex-col">
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdas
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdasdsdsd
//                 </Typography>
//               </div>
//               <div>
//                 <Typography
//                   variant="subtitle2"
//                   className="bg-btn p-1 radius-[14px] text-xs"
//                 >
//                   300 GYR
//                 </Typography>
//               </div>
//             </div>
//           </Link>
//         </Grid2>
//         <Grid2
//           my={1}
//           xs={9}
//           sm={5.67}
//           md={5}
//           lg={2.5}
//           xl={2}
//           className="bg-box"
//           sx={{ borderRadius: "43px !important" }}
//         >
//           <div className="relative">
//             <img width="100%" height="70%" src={Markethome} alt="Marketplace" />
//             {!heartColor ? (
//               <FavoriteBorderRoundedIcon
//                 className="absolute top-3 right-5 logoheader cursor-pointer"
//                 onClick={() => setHeartColor(true)}
//               />
//             ) : (
//               <FavoriteIcon
//                 className="absolute top-3 right-5 logoheader text-[#ef4444] cursor-pointer"
//                 onClick={() => setHeartColor(false)}
//               />
//             )}
//           </div>
//           <Link
//             to={"/market-place/id"}
//             className="no-underline w-full text-black"
//           >
//             <div className="flex p-5 justify-between items-center">
//               <div className="flex flex-col">
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdas
//                 </Typography>
//                 <Typography
//                   variant="subtitle2"
//                   className="description text-xs sm:text-sm"
//                 >
//                   Asdasdasdsdsd
//                 </Typography>
//               </div>
//               <div>
//                 <Typography
//                   variant="subtitle2"
//                   className="bg-btn p-1 radius-[14px] text-xs"
//                 >
//                   300 GYR
//                 </Typography>
//               </div>
//             </div>
//           </Link>
//         </Grid2>
//       </Grid2>
//       <Typography variant="h6" className="header sm:my-15 my-20">
//         Popular Creators
//       </Typography>
//       <Grid2
//         my={1}
//         xs={11}
//         container
//         gap={5}
//         className="flex items-center sm:flex-row mb-20 justify-center"
//       >
//         <Grid2 xs={5} sm={2} md={2} lg={1.2}>
//           <div className="relative px-2 bg-box text-center my-5 xl:my-0">
//             <img
//               className="relative -top-[40px] left-5 sm:left-4"
//               width={"70%"}
//               height={"70%"}
//               src={CreatorImage}
//               alt="Creator Image"
//             />
//             <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
//               <svg
//                 width="19"
//                 height="25"
//                 viewBox="0 0 34 33"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M34 16.5L30.2291 12.1157L30.7545 6.31714L25.1755 5.02857L22.2545 0L17 2.29429L11.7455 0L8.82454 5.01286L3.24545 6.28571L3.77091 12.1L0 16.5L3.77091 20.8843L3.24545 26.6986L8.82454 27.9871L11.7455 33L17 30.69L22.2545 32.9843L25.1755 27.9714L30.7545 26.6829L30.2291 20.8843L34 16.5ZM14.0482 23.9171L8.17545 17.93L10.4627 15.6043L14.0482 19.2657L23.0891 10.0414L25.3764 12.3671L14.0482 23.9171Z"
//                   fill="#323232"
//                 />
//               </svg>
//             </div>
//             <div style={{ position: "relative", top: "-40px" }}>
//               <Typography
//                 variant="subtitle2"
//                 className="header text-xs sm:text-sm text-center"
//               >
//                 Mr. Owner
//               </Typography>
//               <Typography
//                 variant="subtitle2"
//                 className="description text-xs sm:text-sm text-center"
//               >
//                 Land Owner | 3
//               </Typography>
//             </div>
//           </div>
//         </Grid2>
//         <Grid2 xs={5} sm={2} md={2} lg={1.2}>
//           <div className="relative px-2 bg-box text-center my-5 xl:my-0">
//             <img
//               className="relative -top-[40px] left-5 sm:left-4"
//               width={"70%"}
//               height={"70%"}
//               src={CreatorImage}
//               alt="Creator Image"
//             />
//             <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
//               <svg
//                 width="19"
//                 height="25"
//                 viewBox="0 0 34 33"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M34 16.5L30.2291 12.1157L30.7545 6.31714L25.1755 5.02857L22.2545 0L17 2.29429L11.7455 0L8.82454 5.01286L3.24545 6.28571L3.77091 12.1L0 16.5L3.77091 20.8843L3.24545 26.6986L8.82454 27.9871L11.7455 33L17 30.69L22.2545 32.9843L25.1755 27.9714L30.7545 26.6829L30.2291 20.8843L34 16.5ZM14.0482 23.9171L8.17545 17.93L10.4627 15.6043L14.0482 19.2657L23.0891 10.0414L25.3764 12.3671L14.0482 23.9171Z"
//                   fill="#323232"
//                 />
//               </svg>
//             </div>
//             <div style={{ position: "relative", top: "-40px" }}>
//               <Typography
//                 variant="subtitle2"
//                 className="header text-xs sm:text-sm text-center"
//               >
//                 Mr. Owner
//               </Typography>
//               <Typography
//                 variant="subtitle2"
//                 className="description text-xs sm:text-sm text-center"
//               >
//                 Land Owner | 3
//               </Typography>
//             </div>
//           </div>
//         </Grid2>
//         <Grid2 xs={5} sm={2} md={2} lg={1.2}>
//           <div className="relative px-2 bg-box text-center my-5 xl:my-0">
//             <img
//               className="relative -top-[40px] left-5 sm:left-4"
//               width={"70%"}
//               height={"70%"}
//               src={CreatorImage}
//               alt="Creator Image"
//             />
//             <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
//               <svg
//                 width="19"
//                 height="25"
//                 viewBox="0 0 34 33"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M34 16.5L30.2291 12.1157L30.7545 6.31714L25.1755 5.02857L22.2545 0L17 2.29429L11.7455 0L8.82454 5.01286L3.24545 6.28571L3.77091 12.1L0 16.5L3.77091 20.8843L3.24545 26.6986L8.82454 27.9871L11.7455 33L17 30.69L22.2545 32.9843L25.1755 27.9714L30.7545 26.6829L30.2291 20.8843L34 16.5ZM14.0482 23.9171L8.17545 17.93L10.4627 15.6043L14.0482 19.2657L23.0891 10.0414L25.3764 12.3671L14.0482 23.9171Z"
//                   fill="#323232"
//                 />
//               </svg>
//             </div>
//             <div style={{ position: "relative", top: "-40px" }}>
//               <Typography
//                 variant="subtitle2"
//                 className="header text-xs sm:text-sm text-center"
//               >
//                 Mr. Owner
//               </Typography>
//               <Typography
//                 variant="subtitle2"
//                 className="description text-xs sm:text-sm text-center"
//               >
//                 Land Owner | 3
//               </Typography>
//             </div>
//           </div>
//         </Grid2>
//         <Grid2 xs={5} sm={2} md={2} lg={1.2}>
//           <div className="relative px-2 bg-box text-center my-5 xl:my-0">
//             <img
//               className="relative -top-[40px] left-5 sm:left-4"
//               width={"70%"}
//               height={"70%"}
//               src={CreatorImage}
//               alt="Creator Image"
//             />
//             <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
//               <svg
//                 width="19"
//                 height="25"
//                 viewBox="0 0 34 33"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M34 16.5L30.2291 12.1157L30.7545 6.31714L25.1755 5.02857L22.2545 0L17 2.29429L11.7455 0L8.82454 5.01286L3.24545 6.28571L3.77091 12.1L0 16.5L3.77091 20.8843L3.24545 26.6986L8.82454 27.9871L11.7455 33L17 30.69L22.2545 32.9843L25.1755 27.9714L30.7545 26.6829L30.2291 20.8843L34 16.5ZM14.0482 23.9171L8.17545 17.93L10.4627 15.6043L14.0482 19.2657L23.0891 10.0414L25.3764 12.3671L14.0482 23.9171Z"
//                   fill="#323232"
//                 />
//               </svg>
//             </div>
//             <div style={{ position: "relative", top: "-40px" }}>
//               <Typography
//                 variant="subtitle2"
//                 className="header text-xs sm:text-sm text-center"
//               >
//                 Mr. Owner
//               </Typography>
//               <Typography
//                 variant="subtitle2"
//                 className="description text-xs sm:text-sm text-center"
//               >
//                 Land Owner | 3
//               </Typography>
//             </div>
//           </div>
//         </Grid2>
//         <Grid2 xs={5} sm={2} md={2} lg={1.2}>
//           <div className="relative px-2 bg-box text-center my-5 xl:my-0">
//             <img
//               className="relative -top-[40px] left-5 sm:left-4"
//               width={"70%"}
//               height={"70%"}
//               src={CreatorImage}
//               alt="Creator Image"
//             />
//             <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
//               <svg
//                 width="19"
//                 height="25"
//                 viewBox="0 0 34 33"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M34 16.5L30.2291 12.1157L30.7545 6.31714L25.1755 5.02857L22.2545 0L17 2.29429L11.7455 0L8.82454 5.01286L3.24545 6.28571L3.77091 12.1L0 16.5L3.77091 20.8843L3.24545 26.6986L8.82454 27.9871L11.7455 33L17 30.69L22.2545 32.9843L25.1755 27.9714L30.7545 26.6829L30.2291 20.8843L34 16.5ZM14.0482 23.9171L8.17545 17.93L10.4627 15.6043L14.0482 19.2657L23.0891 10.0414L25.3764 12.3671L14.0482 23.9171Z"
//                   fill="#323232"
//                 />
//               </svg>
//             </div>
//             <div style={{ position: "relative", top: "-40px" }}>
//               <Typography
//                 variant="subtitle2"
//                 className="header text-xs sm:text-sm text-center"
//               >
//                 Mr. Owner
//               </Typography>
//               <Typography
//                 variant="subtitle2"
//                 className="description text-xs sm:text-sm text-center"
//               >
//                 Land Owner | 3
//               </Typography>
//             </div>
//           </div>
//         </Grid2>
//         <Grid2 xs={5} sm={2} md={2} lg={1.2}>
//           <div className="relative px-2 bg-box text-center my-5 xl:my-0">
//             <img
//               className="relative -top-[40px] left-5 sm:left-4"
//               width={"70%"}
//               height={"70%"}
//               src={CreatorImage}
//               alt="Creator Image"
//             />
//             <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
//               <svg
//                 width="19"
//                 height="25"
//                 viewBox="0 0 34 33"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M34 16.5L30.2291 12.1157L30.7545 6.31714L25.1755 5.02857L22.2545 0L17 2.29429L11.7455 0L8.82454 5.01286L3.24545 6.28571L3.77091 12.1L0 16.5L3.77091 20.8843L3.24545 26.6986L8.82454 27.9871L11.7455 33L17 30.69L22.2545 32.9843L25.1755 27.9714L30.7545 26.6829L30.2291 20.8843L34 16.5ZM14.0482 23.9171L8.17545 17.93L10.4627 15.6043L14.0482 19.2657L23.0891 10.0414L25.3764 12.3671L14.0482 23.9171Z"
//                   fill="#323232"
//                 />
//               </svg>
//             </div>
//             <div style={{ position: "relative", top: "-40px" }}>
//               <Typography
//                 variant="subtitle2"
//                 className="header text-xs sm:text-sm text-center"
//               >
//                 Mr. Owner
//               </Typography>
//               <Typography
//                 variant="subtitle2"
//                 className="description text-xs sm:text-sm text-center"
//               >
//                 Land Owner | 3
//               </Typography>
//             </div>
//           </div>
//         </Grid2>
//         <Grid2 xs={5} sm={2} md={2} lg={1.2}>
//           <div className="relative px-2 bg-box text-center my-5 xl:my-0">
//             <img
//               className="relative -top-[40px] left-5 sm:left-4"
//               width={"70%"}
//               height={"70%"}
//               src={CreatorImage}
//               alt="Creator Image"
//             />
//             <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
//               <svg
//                 width="19"
//                 height="25"
//                 viewBox="0 0 34 33"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M34 16.5L30.2291 12.1157L30.7545 6.31714L25.1755 5.02857L22.2545 0L17 2.29429L11.7455 0L8.82454 5.01286L3.24545 6.28571L3.77091 12.1L0 16.5L3.77091 20.8843L3.24545 26.6986L8.82454 27.9871L11.7455 33L17 30.69L22.2545 32.9843L25.1755 27.9714L30.7545 26.6829L30.2291 20.8843L34 16.5ZM14.0482 23.9171L8.17545 17.93L10.4627 15.6043L14.0482 19.2657L23.0891 10.0414L25.3764 12.3671L14.0482 23.9171Z"
//                   fill="#323232"
//                 />
//               </svg>
//             </div>
//             <div style={{ position: "relative", top: "-40px" }}>
//               <Typography
//                 variant="subtitle2"
//                 className="header text-xs sm:text-sm text-center"
//               >
//                 Mr. Owner
//               </Typography>
//               <Typography
//                 variant="subtitle2"
//                 className="description text-xs sm:text-sm text-center"
//               >
//                 Land Owner | 3
//               </Typography>
//             </div>
//           </div>
//         </Grid2>
//       </Grid2>
//     </Grid2>
//   );
// };

// export default Market;
