// import { Button, Typography } from "@mui/material";
// import first_image from "../../images/market_title.png";
// import Paper from "@mui/material/Paper";
// import Divider from "@mui/material/Divider";
// import SearchIcon from "@mui/icons-material/Search";
// import Header from "../../components/header";
// import "react-slideshow-image/dist/styles.css";
// import ellipse2 from "../../images/ellipse2.png";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { styled } from "@mui/material/styles";
// import InputAdornment from "@mui/material/InputAdornment";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import { Link, useNavigate } from "react-router-dom";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import { useState } from "react";
// import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// import Searchbar from "../../components/Searchbar";
// import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
// import CreatorImage from "../../images/creator_image.png";
// import Markethome from "../../images/Market-home.png";
// import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
// import FavoriteIcon from "@mui/icons-material/Favorite";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "black",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   borderRadius: "20px",
// }));

// const fadeImages = [
//   {
//     url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "First Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     caption: "Second Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Third Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Third Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Third Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Third Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Third Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Third Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Third Slide",
//   },
// ];

// const data = [
//   {
//     image: ellipse2,
//     d1: "ggg",
//     d2: "dd",
//     seller: "ff",
//     buyer: "fffgf",
//     type: "listing",
//     time: "ABOUT 2HR AGO",
//     price: "100gyr",
//   },
//   {
//     image: ellipse2,
//     d1: "gefd",
//     d2: "ddddd",
//     seller: "ffrfre",
//     buyer: "f",
//     type: "listing",
//     time: "ABOUT 2HR AGO",
//     price: "400gyr",
//   },
// ];

// const faqs = [
//   {
//     question: "What is VYUG?",
//     answer:
//       "VYUG, the next YUG or Era, is a pathway from your imagination into reality.",
//   },
//   {
//     question: "How does VYUG work?",
//     answer:
//       "VYUG works by harnessing the power of imagination and transforming it into reality through innovative technologies.",
//   },
//   {
//     question: "What is VYUG?",
//     answer:
//       "VYUG, the next YUG or Era, is a pathway from your imagination into reality.",
//   },
//   {
//     question: "How does VYUG work?",
//     answer:
//       "VYUG works by harnessing the power of imagination and transforming it into reality through innovative technologies.",
//   },
//   {
//     question: "What is VYUG?",
//     answer:
//       "VYUG, the next YUG or Era, is a pathway from your imagination into reality.",
//   },
//   {
//     question: "How does VYUG work?",
//     answer:
//       "VYUG works by harnessing the power of imagination and transforming it into reality through innovative technologies.",
//   },
// ];

// const Markets = () => {
//   const [heartColor, setHeartColor] = useState(false);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const handleToggle = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div>

      

//       <Grid2 container xs={12} className="flex justify-center pt-32">
//         <Grid2
//           container
//           className="flex justify-center h-[50vh] items-center"
//           xs={12}
//           sx={{
//             background: `url(${first_image}) no-repeat center`,
//             backgroundSize: "130vh 65vh",
//           }}
//         >
//           <Grid2
//             className="flex justify-center items-center h-fit"
//             xs={11.5}
//             sm={6}
//             md={5}
//           >
//             <Searchbar
//               InputProps={{
//                 style: {
//                   color: "#fff",
//                   borderRadius: "20px",
//                   height: "fit-content",
//                 },
//                 placeholder: "EXPLORE VIRTUAL REALM",
//                 endAdornment: (
//                   <InputAdornment className="me-4" position="end">
//                     <SearchIcon
//                       sx={{
//                         borderRadius: "50%",
//                         padding: "5px",
//                         fontSize: "34px",
//                         background: "#ffffff",
//                       }}
//                     />
//                     <TuneRoundedIcon className="logoheader ml-3" />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid2>
//         </Grid2>
//         <Grid2
//           xs={12}
//           container
//           className="flex flex-col items-center justify-center my-10 sm:my-20"
//         >
//           <Typography
//             variant="h2"
//             className="header text-2xl lg:text-4xl pb-10 text-center"
//           >
//             TRENDING
//           </Typography>
//           <Grid2 xs={11} className="flex justify-center">
//             <Swiper
//               effect={"coverflow"}
//               grabCursor={true}
//               centeredSlides={true}
//               loop={true}
//               slidesPerView={3}
//               breakpoints={{
//                 320: {
//                   slidesPerView: 2,
//                 },
//                 480: {
//                   slidesPerView: 3,
//                 },
//                 640: {
//                   slidesPerView: 4,
//                 },
//               }}
//               // breakpoints={{
//               //   640: { slidesPerView: 1 },
//               //   768: { slidesPerView: 2 },
//               //   1024: { slidesPerView: 3 }
//               // }}
//               coverflowEffect={{
//                 rotate: 0,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 3,
//               }}
//               pagination={{ el: ".swiper-pagination", clickable: true }}
//               modules={[EffectCoverflow, Pagination, Navigation]}
//               className="swiper_container"
//             >
//               {fadeImages.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <img src={image.url} alt={`slide_image_${index}`} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </Grid2>
//           <Typography
//             variant="h2"
//             className="header text-base -mt-20 sm:mt-10 sm:text-xl text-center"
//           >
//             dffdff
//           </Typography>
//           <Typography
//             variant="h2"
//             className="description text-base mt-2 sm:text-xl text-center"
//           >
//             PRICE: 200 GYR
//           </Typography>
//           <Button className="bg-btn text-sm sm:text-base mt-5">BUY NOW</Button>
//         </Grid2>
//         <Grid2
//           xs={12}
//           container
//           className="bg-[#000000] flex flex-col py-20 items-center justify-center"
//         >
//           <Typography
//             variant="h2"
//             className="description text-2xl text-[#fff] mb-20 sm:text-4xl"
//           >
//             POPULAR <b>CREATORS</b>
//           </Typography>
//           <Grid2
//             my={1}
//             xs={11}
//             container
//             gap={5}
//             className="flex justify-center gap-10 flex-wrap"
//           >
//             <Grid2 lg={1.3}>
//               <div className="relative px-2 bg-box text-center my-5 sm:my-0">
//                 <img
//                   className="relative -top-[40px] left-5 sm:left-4"
//                   width={"70%"}
//                   height={"70%"}
//                   src={CreatorImage}
//                   alt="Creator Image"
//                 />
//                 <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
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
//                 <div style={{ position: "relative", top: "-40px" }}>
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
//               </div>
//             </Grid2>
//             <Grid2 lg={1.3}>
//               <div className="relative px-2 bg-box text-center my-5 sm:my-0">
//                 <img
//                   className="relative -top-[40px] left-5 sm:left-4"
//                   width={"70%"}
//                   height={"70%"}
//                   src={CreatorImage}
//                   alt="Creator Image"
//                 />
//                 <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
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
//                 <div style={{ position: "relative", top: "-40px" }}>
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
//               </div>
//             </Grid2>
//             <Grid2 lg={1.3}>
//               <div className="relative px-2 bg-box text-center my-5 sm:my-0">
//                 <img
//                   className="relative -top-[40px] left-5 sm:left-4"
//                   width={"70%"}
//                   height={"70%"}
//                   src={CreatorImage}
//                   alt="Creator Image"
//                 />
//                 <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
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
//                 <div style={{ position: "relative", top: "-40px" }}>
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
//               </div>
//             </Grid2>
//             <Grid2 lg={1.3}>
//               <div className="relative px-2 bg-box text-center my-5 sm:my-0">
//                 <img
//                   className="relative -top-[40px] left-5 sm:left-4"
//                   width={"70%"}
//                   height={"70%"}
//                   src={CreatorImage}
//                   alt="Creator Image"
//                 />
//                 <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
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
//                 <div style={{ position: "relative", top: "-40px" }}>
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
//               </div>
//             </Grid2>
//             <Grid2 lg={1.3}>
//               <div className="relative px-2 bg-box text-center my-5 sm:my-0">
//                 <img
//                   className="relative -top-[40px] left-5 sm:left-4"
//                   width={"70%"}
//                   height={"70%"}
//                   src={CreatorImage}
//                   alt="Creator Image"
//                 />
//                 <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
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
//                 <div style={{ position: "relative", top: "-40px" }}>
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
//               </div>
//             </Grid2>
//             <Grid2 lg={1.3}>
//               <div className="relative px-2 bg-box text-center my-5 sm:my-0">
//                 <img
//                   className="relative -top-[40px] left-5 sm:left-4"
//                   width={"70%"}
//                   height={"70%"}
//                   src={CreatorImage}
//                   alt="Creator Image"
//                 />
//                 <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
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
//                 <div style={{ position: "relative", top: "-40px" }}>
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
//               </div>
//             </Grid2>
//             <Grid2 lg={1.3}>
//               <div className="relative px-2 bg-box text-center my-5 sm:my-0">
//                 <img
//                   className="relative -top-[40px] left-5 sm:left-4"
//                   width={"70%"}
//                   height={"70%"}
//                   src={CreatorImage}
//                   alt="Creator Image"
//                 />
//                 <div className="relative -top-[60px] sm:-top-[60px] -right-[30px]">
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
//                 <div style={{ position: "relative", top: "-40px" }}>
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
//               </div>
//             </Grid2>
//           </Grid2>
//         </Grid2>
//         <Grid2
//           xs={12}
//           container
//           className="flex flex-col items-center justify-center my-20"
//         >
//           <Typography variant="h2" className="header text-2xl sm:text-4xl">
//             LATEST
//           </Typography>
//           <Typography
//             variant="h2"
//             className="header text-base my-2 sm:my-3 sm:text-xl"
//           >
//             LISTING
//           </Typography>
//           <Grid2
//             xs={12}
//             container
//             className="flex gap-1 sm:gap-3 items-center justify-center pb-10"
//           >
//             <Typography variant="h2" className="description text-xs sm:text-lg">
//               LANDS
//             </Typography>
//             <Divider
//               sx={{ height: 28, m: 1 }}
//               orientation="vertical"
//               style={{ width: 1, backgroundColor: "#686262" }}
//             />
//             <Typography variant="h2" className="description text-xs sm:text-lg">
//               WEARABLES
//             </Typography>
//             <Divider
//               sx={{ height: 28, m: 1 }}
//               orientation="vertical"
//               style={{ width: 1, backgroundColor: "#686262" }}
//             />
//             <Typography variant="h2" className="description text-xs sm:text-lg">
//               EMOTES
//             </Typography>
//           </Grid2>
//           <Grid2 xs={12} container gap={4} className="flex justify-center">
//             <Grid2
//               my={1}
//               xs={9}
//               sm={5.67}
//               md={5}
//               lg={2.5}
//               xl={2}
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
//               <Link
//                 to={"/market-place/id"}
//                 className="no-underline w-full text-black"
//               >
//                 <div className="flex p-5 justify-between items-center">
//                   <div className="flex flex-col">
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdas
//                     </Typography>
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdasdsdsd
//                     </Typography>
//                   </div>
//                   <div>
//                     <Typography
//                       variant="subtitle2"
//                       className="bg-btn p-1 radius-[14px] text-xs"
//                     >
//                       300 GYR
//                     </Typography>
//                   </div>
//                 </div>
//               </Link>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={9}
//               sm={5.67}
//               md={5}
//               lg={2.5}
//               xl={2}
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
//               <Link
//                 to={"/market-place/id"}
//                 className="no-underline w-full text-black"
//               >
//                 <div className="flex p-5 justify-between items-center">
//                   <div className="flex flex-col">
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdas
//                     </Typography>
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdasdsdsd
//                     </Typography>
//                   </div>
//                   <div>
//                     <Typography
//                       variant="subtitle2"
//                       className="bg-btn p-1 radius-[14px] text-xs"
//                     >
//                       300 GYR
//                     </Typography>
//                   </div>
//                 </div>
//               </Link>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={9}
//               sm={5.67}
//               md={5}
//               lg={2.5}
//               xl={2}
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
//               <Link
//                 to={"/market-place/id"}
//                 className="no-underline w-full text-black"
//               >
//                 <div className="flex p-5 justify-between items-center">
//                   <div className="flex flex-col">
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdas
//                     </Typography>
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdasdsdsd
//                     </Typography>
//                   </div>
//                   <div>
//                     <Typography
//                       variant="subtitle2"
//                       className="bg-btn p-1 radius-[14px] text-xs"
//                     >
//                       300 GYR
//                     </Typography>
//                   </div>
//                 </div>
//               </Link>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={9}
//               sm={5.67}
//               md={5}
//               lg={2.5}
//               xl={2}
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
//               <Link
//                 to={"/market-place/id"}
//                 className="no-underline w-full text-black"
//               >
//                 <div className="flex p-5 justify-between items-center">
//                   <div className="flex flex-col">
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdas
//                     </Typography>
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdasdsdsd
//                     </Typography>
//                   </div>
//                   <div>
//                     <Typography
//                       variant="subtitle2"
//                       className="bg-btn p-1 radius-[14px] text-xs"
//                     >
//                       300 GYR
//                     </Typography>
//                   </div>
//                 </div>
//               </Link>
//             </Grid2>
//             <Grid2
//               my={1}
//               xs={9}
//               sm={5.67}
//               md={5}
//               lg={2.5}
//               xl={2}
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
//               <Link
//                 to={"/market-place/id"}
//                 className="no-underline w-full text-black"
//               >
//                 <div className="flex p-5 justify-between items-center">
//                   <div className="flex flex-col">
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdas
//                     </Typography>
//                     <Typography
//                       variant="subtitle2"
//                       className="description text-xs sm:text-sm"
//                     >
//                       Asdasdasdsdsd
//                     </Typography>
//                   </div>
//                   <div>
//                     <Typography
//                       variant="subtitle2"
//                       className="bg-btn p-1 radius-[14px] text-xs"
//                     >
//                       300 GYR
//                     </Typography>
//                   </div>
//                 </div>
//               </Link>
//             </Grid2>
//           </Grid2>
//           <Link to={"/market-place/view-all"} className="no-underline">
//             <Button className="bg-btn text-sm sm:text-lg rounded-xl my-10">
//               VIEW ALL
//             </Button>
//           </Link>
//         </Grid2>
//         <Grid2
//           xs={12}
//           container
//           className="flex justify-center py-10 sm:py-20 text-[#fff] bg-[#222020]"
//         >
//           <Typography
//             variant="h2"
//             className="description text-2xl text-[#fff] mb-2 sm:mb-5 sm:text-4xl"
//           >
//             RECENTLY SOLD
//           </Typography>
//           <Grid2
//             xs={12}
//             container
//             className="flex gap-1 sm:gap-3 items-center justify-center"
//           >
//             <Typography variant="h2" className="description text-xs sm:text-lg">
//               LANDS
//             </Typography>
//             <Divider
//               sx={{ height: 28, m: 1 }}
//               orientation="vertical"
//               style={{ width: 1, backgroundColor: "#686262" }}
//             />
//             <Typography variant="h2" className="description text-xs sm:text-lg">
//               WEARABLES
//             </Typography>
//             <Divider
//               sx={{ height: 28, m: 1 }}
//               orientation="vertical"
//               style={{ width: 1, backgroundColor: "#686262" }}
//             />
//             <Typography variant="h2" className="description text-xs sm:text-lg">
//               EMOTES
//             </Typography>
//           </Grid2>
//           <TableContainer align="center" className="p-5">
//             <Table align="center" className="muiTable">
//               <TableHead
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(to right, black, gray, black)",
//                 }}
//               >
//                 <TableRow>
//                   <TableCell align="center">
//                     <Typography
//                       variant="subtitle2"
//                       className="header text-[#fff] text-xs sm:text-sm text-center w-[100px] sm:w-[100%]"
//                     >
//                       ITEM
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography
//                       variant="subtitle2"
//                       className="header text-[#fff] text-xs sm:text-sm text-center w-[100px] sm:w-[100%]"
//                     >
//                       SELLER
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography
//                       variant="subtitle2"
//                       className="header text-[#fff] text-xs sm:text-sm text-center w-[100px] sm:w-[100%]"
//                     >
//                       BUYER
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography
//                       variant="subtitle2"
//                       className="header text-[#fff] text-xs sm:text-sm text-center w-[100px] sm:w-[100%]"
//                     >
//                       TYPE
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography
//                       variant="subtitle2"
//                       className="header text-[#fff] text-xs sm:text-sm text-center w-[100px] sm:w-[100%]"
//                     >
//                       TIME
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography
//                       variant="subtitle2"
//                       className="header text-[#fff] text-xs sm:text-sm text-center w-[100px] sm:w-[100%]"
//                     >
//                       PRICE
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody className="muiBody">
//                 {data.map((row) => (
//                   <TableRow key={row.seller}>
//                     <TableCell>
//                       <div className="flex justify-center gap-4">
//                         <img src={row.image} className="h-12" />
//                         <div>
//                           <div className="text-sm text-[#fff]">{row.d1}</div>
//                           <div className="text-[#fff]">BY {row.d1}</div>
//                         </div>
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       <Typography
//                         variant="subtitle2"
//                         className="description text-[#fff] text-xs sm:text-sm text-center"
//                       >
//                         {row.seller}
//                       </Typography>
//                     </TableCell>
//                     <TableCell>
//                       <Typography
//                         variant="subtitle2"
//                         className="description text-[#fff] text-xs sm:text-sm text-center"
//                       >
//                         {row.buyer}
//                       </Typography>
//                     </TableCell>
//                     <TableCell>
//                       <Typography
//                         variant="subtitle2"
//                         className="description text-[#fff] text-xs sm:text-sm text-center"
//                       >
//                         {row.type}
//                       </Typography>
//                     </TableCell>
//                     <TableCell>
//                       <Typography
//                         variant="subtitle2"
//                         className="description text-[#fff] text-xs sm:text-sm text-center"
//                       >
//                         {row.time}
//                       </Typography>
//                     </TableCell>
//                     <TableCell>
//                       <Typography
//                         variant="subtitle2"
//                         className="description text-[#fff] text-xs sm:text-sm text-center"
//                       >
//                         {row.price}
//                       </Typography>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Grid2>
//         <Grid2 xs={10}>
//           <Typography
//             variant="h2"
//             className="header text-2xl my-16 sm:text-4xl"
//           >
//             FAQ's
//           </Typography>
//         </Grid2>
//         <Grid2 xs={11} container className="flex justify-center gap-10 pb-20">
//           {faqs.map((faq, index) => (
//             <Grid2 xs={12} sm={5} md={3.2}>
//               <Item className="flex justify-between text-white items-center">
//                 {faq.question}{" "}
//                 <span
//                   className="cursor-pointer"
//                   onClick={() => handleToggle(index)}
//                 >
//                   {expandedIndex === index ? (
//                     <ArrowDropUpIcon />
//                   ) : (
//                     <ArrowDropDownIcon />
//                   )}
//                 </span>
//               </Item>
//               {expandedIndex === index && (
//                 <Typography
//                   variant="subtitle2"
//                   className="description font-semibold bg-white rounded-xl p-5 mt-2 text-xs sm:text-sm"
//                 >
//                   {faq.answer}
//                 </Typography>
//               )}
//             </Grid2>
//           ))}
//         </Grid2>
//         <Grid2 container xs={12} className="flex justify-center bg-[#000000]">
//           <Grid2
//             container
//             xs={11}
//             sm={6}
//             md={5}
//             lg={4}
//             className="flex justify-center items-center py-20 text-[#fff] flex-col gap-5"
//           >
//             <Typography
//               variant="h2"
//               className="header text-xl lg:text-4xl md:text-2xl text-center"
//             >
//               GET NEWS AND UPDATES
//             </Typography>
//             <Typography
//               variant="h2"
//               className="description text-xs sm:text-sm md:text-base lg:text-lg text-center"
//             >
//               SIGN UP FOR THE <b>LATEST NEWS</b> ON HOW WE ARE SHAPING A{" "}
//               <b>NEW FUTURE</b>
//             </Typography>
//             <Searchbar
//               fullWidth
//               InputProps={{
//                 style: {
//                   color: "#fff",
//                   border: "1px solid #fff",
//                   borderRadius: "20px",
//                 },
//                 endAdornment: (
//                   <InputAdornment className="me-4" position="end">
//                     <Button className="bg-white text-xs sm:text-sm rounded-3xl text-[#000000] my-4">
//                       {" "}
//                       Sign up
//                     </Button>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid2>
//         </Grid2>
//       </Grid2>
//     </div>
//   );
// };

// export default Markets;
