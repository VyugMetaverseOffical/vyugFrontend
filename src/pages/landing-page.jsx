// import { useEffect, useState, useRef } from "react";
// import { Box, CircularProgress } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Marquee from "react-fast-marquee";

// import SideIcon from "../components/side-icon";
// import Footer from "../components/Footer";
// import CustomCursor from "../components/CustomCursor";
// import FrontCursor from "../components/FrontCursor";
// import Header from "../components/Head";

// import image from "../images/home-page.png";
// import image3 from "../images/land_home.svg";
// import image4 from "../images/emote_home.svg";
// import image5 from "../images/wearable_home.svg";
// import myVideo from "../videos/galaxy.mp4";
// import video from "/homepage.mp4";

// import "../../src/index.css";

// const sliderImages = [
//   {
//     image: image3,
//     text: "Land",
//   },
//   {
//     image: image4,
//     text: "Emotes",
//   },
//   {
//     image: image5,
//     text: "Wearables",
//   },
// ];

// const LandingPage = () => {
//   const [position, setPosition] = useState(false);
//   const [color, setColor] = useState(false);
//   const [isClicked, setClicked] = useState(false);
//   const [hasLoaded, setLoaded] = useState(false);
//   const [loader, setLoader] = useState(false);

//   const videoRef = useRef(null);
//   const scrollSectionRef = useRef(null);
//   const navigate = useNavigate();

//   /*useEffect(() => {
//     setLoaded(true);

//     const playbackConst = 100; // Adjust the constant as needed

//     const scrollPlay = () => {
//       if (videoRef.current) {
//         const frameNumber = window.pageYOffset / playbackConst;
//         videoRef.current.currentTime = frameNumber;
//       }
//       window.requestAnimationFrame(scrollPlay);
//     };

//     window.requestAnimationFrame(scrollPlay);
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (video) {
//       const handleLoadedMetadata = () => {
//         const { duration } = video;
//         const playbackConst = 500;
//         const scrollSection = scrollSectionRef.current;

//         if (videoRef?.current) {
//           scrollSection.style.height =
//             Math.floor(duration) * playbackConst + "px";
//         }
//       };

//       video.addEventListener("loadedmetadata", handleLoadedMetadata);

//       return () => {
//         video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//       };
//     }

//     return () => {}; // No video to clean up
//   }, []);*/

//   useEffect(() => {
//     console.log("Loading metadata")
  
//     const handleScroll = () => {
//       const boxElement = document.getElementById("b1");
//       console.log("boxElement", boxElement); // Debugging output
  
//       if (boxElement) {
//         const bounding = boxElement.getBoundingClientRect();
//         const boxTop = bounding.top;
  
//         console.log("boxTop", boxTop); // Debugging output
  
//         if (boxTop <= (3 / 4) * window.innerHeight) {
//           const imgElement = document.getElementById("img1");
//           console.log("imgElement", imgElement); // Debugging output
//           if (imgElement) {
//             imgElement.classList.add("animate-slide-from-left");
//           }
//           const textElement = document.getElementById("text1");
//           console.log("textElement", textElement); // Debugging output
//           if (textElement) {
//             textElement.classList.add("animate-slide-from-right");
//           }
//         }
  
//         if (boxTop <= 0) {
//           setPosition(false);
//           setColor(true);
//         } else {
//           setPosition(true);
//           setColor(false);
//         }
//       }
//     };
  
//     window.addEventListener("scroll", handleScroll);
  
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
  

//   const handleClickVideo = () => {
//     setClicked(false);
//     setLoader(true);
//     const boxElement = document.getElementById("b1");
//     console.log("boxElement", boxElement); // Debugging output
//   };

//   return (
//     <div style={{ cursor: "none" }}>
//       {isClicked && (
//         <Header isTransparent={position} isHeaderText={false} />
//       )}
//       {isClicked ? <CustomCursor /> : <FrontCursor />}
//       <SideIcon />
//       {!isClicked ? (
//         <div>
//           <div className="bg-[#000000] text-[#fff] description fixed top-0 z-10 py-3">
//             <Marquee pauseOnHover={true}>
//               <b>Website Under Construction : </b> We are crafting a
//               revolutionary experience. The Vyug Metaverse website will unveil
//               its wonders by the end of July 2024
//             </Marquee>
//           </div>
//           <video
//             autoPlay
//             loop
//             muted
//             style={{ objectFit: "cover", height: "100vh", width: "100%" }}
//             onClick={() => handleClickVideo()}
//           >
//             <source src={myVideo} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       ) : (
//         <div>
//           {/*<div>
//             {loader && (
//               <div className="h-[100vh] w-[100vw] bg-[#FBFBF9] flex justify-center items-center">
//                 <CircularProgress />
//               </div>
//             )}

//             <video
//               ref={videoRef}
//               id="v0"
//               preload="metadata"
//               onLoadedData={() => setLoader(false)}
//               playsInline
//               loop
//             >
//               <source type="video/mp4" src={video} />
//             </video>

//             <div ref={scrollSectionRef} id="scrollSection"></div>
//           </div>*/}

//           <Box className="h-screen w-full bg-black" id="b1">
//             <Box className="flex flex-col md:flex-row justify-center items-center gap-16 h-full px-2 max-w-6xl mx-auto">
//               <img
//                 id="img1"
//                 src={image}
//                 className="rounded-2xl w-full max-w-lg"
//               />
//               <Box
//                 className="flex flex-col justify-center items-center md:items-start gap-10 md:gap-8"
//                 id="text1"
//               >
//                 <h3 className="text-4xl text-white font-bold">INVESTMENT</h3>
//                 <p className="text-center md:text-start text-white">
//                   VYUG is a new Metaverse platform that aims to be more than
//                   just a game. It is building a virtual world with educational
//                   and business opportunities. Invest in VYUG to help shape the
//                   future of virtual interaction.
//                 </p>
//               </Box>
//             </Box>
//           </Box>

//           <div className="py-24 w-full h-screen flex flex-col justify-center items-center">
//             <Box className="flex flex-col justify-center items-center gap-8 md:gap-10">
//               <h3 className="text-4xl lg:text-5xl text-center font-medium">
//                 TRADE <span className="font-bold">CENTER</span>
//               </h3>
//               <p className="text-center text-base lg:text-lg max-w-3xl">
//                 VYUG, the largest open-world Metaverse platform, extends VR
//                 beyond entertainment. Invest in VYUG to unlock endless
//                 opportunities in AR, VR, and XR. This virtual land promises
//                 limitless potential for education, business, and immersive
//                 experiences. Join us in shaping the future with VYUG.
//               </p>
//               <div className="my-4 md:mt-10 py-4 md:py-0 w-full overflow-x-scroll md:overflow-x-auto">
//                 <div className="flex justify-start md:justify-center items-center gap-8">
//                   {sliderImages.map((sliderImg, index) => (
//                     <div
//                       key={index}
//                       className="flex justify-center items-center gap-4 min-w-56"
//                     >
//                       <img src={sliderImg.image} alt={sliderImg.text} />
//                       <h6 className="text-center font-bold text-3xl uppercase">
//                         {sliderImg.text}
//                       </h6>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <button className="bg-black py-2 px-5 rounded-3xl font-bold text-white text-base lg:text-lg border-0 outline-0">
//                 Discover Now
//               </button>
//             </Box>
//           </div>

//           <div className="bg-black flex flex-col md:flex-row items-center justify-center py-24 px-2 h-screen">
//             <Box className="text-white flex flex-col items-center justify-center max-w-3xl gap-6 lg:gap-8">
//               <h3 className="text-3xl md:text-4xl lg:text-5xl text-center">
//                 WHAT'S <span className="font-semibold">NEW</span>?
//               </h3>
//               <p className="text-base lg:text-lg text-center">
//                 Vyug is thrilled to unveil groundbreaking news that will reshape
//                 how you engage with the metaverse. Step into a world of
//                 limitless possibilities where creativity knows no bounds.
//               </p>
//               <p
//                 className="text-base text-white text-center text-base lg:text-lg mt-6"
//                 style={{ color: "rgba(255, 71, 76, 1)" }}
//               >
//                 Click below to explore the buzz
//               </p>
//               <p className="text-xl lg:text-2xl font-bold text-white text-center">
//                 DIVE IN NOW
//               </p>
//               <button className="bg-white py-1.5 px-16 rounded-xl font-bold text-black text-base lg:text-lg border-0 outline-0">
//                 View All
//               </button>
//             </Box>
//           </div>
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;
