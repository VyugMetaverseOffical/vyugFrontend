// import React, { useRef, useEffect, useState } from "react";
// import videoSrc from "../../videos/nature.mp4";
// import imgSrc from "../../images/tokens_bundle.png";
// import imgBalls from "../../images/moving_balls.png";
// import cart_Token from "../../images/cart_Token.png";
// import { useMediaQuery } from "@mui/material";

// const Token = () => {
//   const container = useRef(null);
//   const stickyMask = useRef(null);
//   const isMobile = useMediaQuery('(max-width: 330px');
//   const isTablet = useMediaQuery('(min-width: 330px) and (max-width: 600px)');
//   const targetMaskSize = isMobile ? 115 : isTablet ? 105 : 35;
//   const initialMaskSize = 0.8;
//   const easing = 0.15;
//   let easedScrollProgress = 0;

//   useEffect(() => {
//     requestAnimationFrame(animate);
//   }, []);

//   const animate = () => {
//     const maskSizeProgress = targetMaskSize * getScrollProgress();
//     stickyMask.current.style.webkitMaskSize =
//       (initialMaskSize + maskSizeProgress) * 100 + "%";
//     requestAnimationFrame(animate);
//   };

//   const getScrollProgress = () => {
//     const scrollProgress =
//       stickyMask.current.offsetTop /
//       (container.current.getBoundingClientRect().height - window.innerHeight);
//     const delta = scrollProgress - easedScrollProgress;
//     easedScrollProgress += delta * easing;
//     return easedScrollProgress;
//   };

//   return (
//     <div>
//       <div className="main">
//         <div ref={container} className="container-1">
//           <div ref={stickyMask} className="stickyMask">
//             <video autoPlay muted loop>
//               <source src={videoSrc} type="video/mp4" />
//             </video>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#242424] text-[#fff] py-20 flex flex-col sm:flex-row justify-center items-center gap-10">
//         <div className="flex justify-center mx-10 sm:ml-20 items-center rounded-xl border-2 border-white">
//           <p className="description text-xs sm:text-sm p-10 lg:p-20 text-center">
//             VYUG token is the prime currency used in the ecosystem of the VYUG
//             metaverse for its functioning which consists of transactions and
//             interactions built on the Polygon blockchain
//           </p>
//         </div>
//         <div className="flex justify-center items-center">
//           <img
//             src={imgSrc}
//             className="w-[55%] h-[55%] sm:w-[35%] sm:h-[35%]"
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="bg-[#FFFFFF] text-[#000000] py-20 flex justify-evenly items-center gap-10">
//         <div className="flex flex-col justify-center gap-3 items-center">
//           <p className="description sm:text-6xl text-2xl text-center">
//             <b>VYUG</b> TOKEN
//           </p>
//           <p className="description text-xs sm:text-base text-center">
//             A token to watch
//           </p>
//         </div>
//         <img src={imgBalls} className="w-[35%] h-[35%]" alt="" />
//       </div>
//       <div className="bg-[#242424] text-[#fff] py-20">
//         <div className="w-[80%] mx-auto flex flex-col gap-5">
//           <p className="description text-xs sm:text-sm">
//             VYUG: More than Just a Token VYUG token, the in-house currency of
//             VYUG, is used for transferring values, governance, and staking by
//             the users in the VYUG Metaverse. Based on, Ethereum, and Polygon
//             Blockchain, the VYUG token has a supply of 3.5 Billion.
//           </p>
//           <p className="description text-xs sm:text-sm">
//             Ethereum: A block that highly secures every step of yours.
//           </p>
//           <p className="description text-xs sm:text-sm">
//             Polygon: A cost-effective blockchain that carries every step with
//             smoothness in less time
//           </p>
//         </div>
//       </div>
//       <div className="bg-[#FFFFFF] w-[80%]  mx-auto text-[#000000] py-20 flex flex-col sm:flex-row items-center gap-10">
//         <img
//           src={cart_Token}
//           className="w-[45%] h-[45%] sm:w-[25%] sm:h-[25%]"
//           alt=""
//         />
//         <div className="flex flex-col justify-center gap-3 items-center">
//           <p className="description text-xs sm:text-base text-center">
//             VYUG token accessibility is through MarketPlace where users can
//             <b> buy /sell </b> assets and create them as their NFTs or any other
//             collectibles. By owning a property, the user rents or sells once the
//             value increases depending on the factor of content and usage.
//             <br />
//             <br />
//             The token comes as an in-house gaming utility where they can build,
//             create, and monetise games on their lands.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Token;
