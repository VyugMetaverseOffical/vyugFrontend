// import { useState } from "react";
// import Footer from "../../components/Footer";
// import Header from "../../components/header";
// import SideIcon from "../../components/side-icon";
// import image from "../../images/map_img.png";
// import map_bg from "../../images/map_bg.png";
// import play from "../../images/playIcon.svg";
// import {
//   Box,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   IconButton,
// } from "@mui/material";

// function Map() {
//   const [position, setPosition] = useState(false);
//   const isAppBarTransparent = true;
//   const [infoFilter, setInfoFilter] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [facingFilter, setFacingFilter] = useState("");
//   const [nearbyFilter, setNearbyFilter] = useState("");
//   const [openFilterMenu, setOpenFilterMenu] = useState(false);

//   window.addEventListener("scroll", function (event) {
//     let scroll_y = this.scrollY;
//     if (scroll_y > 0) {
//       setPosition(true);
//     } else {
//       setPosition(false);
//     }
//   });

//   const filters = [
//     {
//       type: "INFORMATION",
//       options: ["asdasd", "Asdf", "Qwqw"],
//       value: infoFilter,
//       setValue: setInfoFilter,
//     },
//     {
//       type: "CATEGORY",
//       options: ["asdasd", "Asdf", "Qwqw"],
//       value: categoryFilter,
//       setValue: setCategoryFilter,
//     },
//     {
//       type: "FACING",
//       options: ["asdasd", "Asdf", "Qwqw"],
//       value: facingFilter,
//       setValue: setFacingFilter,
//     },
//     {
//       type: "NEARBY",
//       options: ["asdasd", "Asdf", "Qwqw"],
//       value: nearbyFilter,
//       setValue: setNearbyFilter,
//     },
//   ];

//   return (
//     <div>
//       <Header isTransparent={isAppBarTransparent} position={position} />
//       <SideIcon />
//       <div
//         style={{
//           overflowX: "hidden",
//           backgroundImage: `url(${image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           marginTop: "0px",
//           height: "calc(100vh)",
//           width: "100%",
//         }}
//       >
//         <img src={play} className="absolute top-3/4 left-[10%] h-12 md:h-16" />
//       </div>
//       <Box
//         className="h-[120vh] relative"
//         sx={{
//           backgroundImage: `url(${map_bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute left-[30%] md:left-[10%] top-[7%] flex flex-col justify-start items-stretch gap-4">
//           <div className="bg-[#222020] rounded-lg py-0 px-2 flex justify-between items-center">
//             <IconButton onClick={() => setOpenFilterMenu(!openFilterMenu)}>
//               <svg
//                 width="44"
//                 height="44"
//                 viewBox="0 0 44 44"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-4"
//               >
//                 <path
//                   d="M28.4375 41.0907C30.4323 41.0907 32.0573 39.4865 32.0833 37.4969C32.1042 35.5126 30.4479 33.8459 28.4531 33.8407C26.4531 33.8355 24.8125 35.4813 24.8177 37.4865C24.8177 39.4657 26.4479 41.0907 28.4375 41.0907ZM0 37.0647C0.369792 36.3094 0.984374 36.0803 1.80729 36.0855C8.4375 36.1063 15.0677 36.0959 21.6979 36.1063C22.099 36.1115 22.2448 35.9969 22.3542 35.6063C23.125 32.9449 25.6823 31.0751 28.474 31.0855C31.2656 31.0959 33.8021 33.0022 34.5677 35.6636C34.6042 35.799 34.6458 35.9344 34.6927 36.0959H35.4688C37.75 36.0959 40.0312 36.0959 42.3125 36.1011C43.1875 36.1011 43.7865 36.6324 43.8125 37.398C43.8438 38.2469 43.2344 38.8511 42.3229 38.8511C39.9583 38.8563 37.5938 38.8511 35.224 38.8511H34.7135L34.8073 38.924C34.375 39.7313 34.0208 40.5907 33.4896 41.3303C32.5312 42.674 31.1823 43.4553 29.5521 43.7469C29.4844 43.7574 29.4219 43.799 29.3542 43.8251H27.4688C26.7188 43.5386 25.9219 43.3407 25.2292 42.9501C23.6354 42.0594 22.6615 40.6584 22.2083 38.8511H21.6562C15.0312 38.8511 8.40104 38.8459 1.77604 38.8615C0.942708 38.8667 0.343749 38.6115 0 37.8355V37.0647ZM28.4479 2.74695C26.4375 2.74695 24.8125 4.37716 24.8177 6.38757C24.8177 8.36674 26.4583 9.99695 28.4427 10.0022C30.4323 10.0074 32.099 8.33549 32.0833 6.35632C32.0625 4.36674 30.4375 2.74695 28.4479 2.74695ZM0 6.00737C0.338541 5.22091 0.942708 4.97611 1.77604 4.97611C8.40625 4.99695 15.0365 4.98653 21.6667 4.98653H22.2031C22.6406 3.26257 23.5833 1.90841 25.0833 0.955281C26.2969 0.189656 27.6302 -0.086385 29.0469 0.0229897C31.3021 0.205282 33.875 1.79903 34.6927 4.98653H35.1406C37.5521 4.98653 39.9635 4.98653 42.3698 4.99174C43.0677 4.99174 43.6042 5.39278 43.7812 6.01778C43.9427 6.60112 43.6823 7.27299 43.125 7.54903C42.8438 7.68445 42.5 7.73132 42.1823 7.73653C39.8698 7.75216 37.5625 7.74174 35.25 7.74174H34.724C34.5573 8.18966 34.4167 8.63237 34.224 9.05424C33.1198 11.4501 30.5781 12.9553 28.0052 12.7417C25.3073 12.523 23.0677 10.7209 22.3333 8.1532C22.2344 7.80424 22.0677 7.73653 21.7396 7.73653C15.099 7.74695 8.45312 7.73132 1.80729 7.75737C0.984374 7.75737 0.375 7.52299 0 6.7782V6.00737ZM15.3646 25.5334C17.3854 25.5386 19.0052 23.9188 19 21.9032C19 19.9136 17.3802 18.3094 15.3802 18.3042C13.3594 18.3042 11.7188 19.9344 11.7344 21.9344C11.75 23.924 13.3698 25.5334 15.3646 25.5334ZM0 21.5803C0.317708 20.8042 0.890626 20.5282 1.71875 20.5386C4.03125 20.5751 6.33854 20.5542 8.65104 20.5542H9.10938C10.0052 17.1115 12.8698 15.4917 15.4583 15.5386C18.474 15.5959 20.901 17.6376 21.6198 20.5542H42.3385C43.4271 20.5542 44.1302 21.5178 43.7083 22.4553C43.4427 23.049 42.9583 23.2938 42.3021 23.2938C36.2396 23.2834 30.1771 23.2886 24.1198 23.2886H21.6146C21.1927 24.9761 20.2865 26.3094 18.849 27.2626C17.7708 27.9761 16.5729 28.3251 15.2917 28.3042C12.5729 28.2522 9.94271 26.5022 9.10938 23.2886H7.10938C5.31771 23.2886 3.52083 23.2626 1.72396 23.299C0.890625 23.3199 0.322917 23.0282 0 22.2626V21.5803Z"
//                   fill="#686262"
//                 />
//               </svg>
//             </IconButton>
//             <h6 className="text-white font-semibold flex-1 text-center">Explore</h6>
//             <IconButton
//               sx={{
//                 backgroundColor: "#DAD9D8",
//                 "&:hover": {
//                   backgroundColor: "#DAD9D8",
//                 },
//               }}
//             >
//               <svg
//                 width="18"
//                 height="18"
//                 viewBox="0 0 18 18"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-3 h-3"
//               >
//                 <path
//                   d="M13.4215 7.43159C13.4082 5.83852 13.0288 4.60934 12.1879 3.56431C10.5416 1.52527 8.40491 0.790867 5.84891 1.33224C4.52654 1.61181 3.42825 2.31737 2.56738 3.35796C1.57782 4.55165 1.11632 5.93171 1.19175 7.48928C1.23613 8.40562 1.47132 9.27093 1.92838 10.0608C2.96453 11.8558 4.52875 12.8964 6.5811 13.1537C7.96782 13.329 9.28354 13.0539 10.4772 12.3151C12.3809 11.1391 13.3438 9.41071 13.4215 7.43159ZM7.82138 0.0498047C8.11425 0.0941797 8.40713 0.127461 8.69779 0.185148C10.1866 0.469149 11.4601 1.16362 12.5207 2.24415C13.4748 3.21596 14.1049 4.37193 14.3867 5.70984C14.6951 7.16534 14.5464 8.57868 13.9651 9.94543C13.6722 10.6332 13.2728 11.2589 12.7758 11.8203C12.7426 11.858 12.7159 11.9002 12.676 11.949C12.7159 11.9933 12.7514 12.0333 12.7892 12.071C14.1559 13.4156 15.5204 14.7579 16.8828 16.1047C17.0225 16.2422 17.1423 16.4042 17.2688 16.5551V16.8591C17.1645 17.0654 17.027 17.2318 16.7763 17.2584C16.5633 17.2806 16.4013 17.1874 16.2548 17.0432C14.8593 15.6676 13.4614 14.292 12.0636 12.9163C12.0015 12.8542 11.946 12.781 11.8773 12.7033C11.8018 12.7588 11.7419 12.7987 11.6864 12.8409C10.2731 13.8926 8.6756 14.3874 6.925 14.292C4.70182 14.1699 2.89354 13.2092 1.51347 11.4564C0.767973 10.5068 0.306473 9.42846 0.135629 8.23921C-0.146152 6.25565 0.304254 4.44737 1.54232 2.86096C2.70272 1.3744 4.22479 0.471367 6.08632 0.149648C6.31485 0.109711 6.54782 0.0830861 6.78079 0.0498047H7.82138Z"
//                   fill="#222020"
//                 />
//               </svg>
//             </IconButton>
//           </div>
//           <div className={`bg-[#222020] rounded-lg py-7 px-6 flex flex-col justify-start items-start gap-5 ${openFilterMenu ? "visible" : "invisible"} transition-[height] ease-in-out delay-150`}>
//             {filters?.map((filter, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col justify-start items-start"
//               >
//                 <h6 className="text-white text-lg md:text-2xl font-semibold mb-1.5">
//                   {filter.type}
//                 </h6>
//                 <RadioGroup
//                   aria-labelledby="demo-row-radio-buttons-group-label"
//                   name="row-radio-buttons-group"
//                   value={filter.value}
//                   onChange={(e) => filter.setValue(e.target.value)}
//                   className="ps-4"
//                 >
//                   {filter.options.map((option, index) => (
//                     <FormControlLabel
//                       key={index}
//                       value={option}
//                       control={
//                         <Radio
//                           size="small"
//                           sx={{
//                             color: "#fff",
//                             "&.Mui-checked": {
//                               color: "#fff",
//                             },
//                           }}
//                         />
//                       }
//                       label={option}
//                       sx={{
//                         ".MuiFormControlLabel-label": {
//                           color: "#fff",
//                           fontSize: {
//                             xs: "0.875rem",
//                             md: "1rem"
//                           }
//                         },
//                       }}
//                     />
//                   ))}
//                 </RadioGroup>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Box>
//       <Footer />
//     </div>
//   );
// }

// export default Map;
