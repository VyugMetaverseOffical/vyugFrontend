// import React from "react";
// import { useNavigate } from "react-router-dom";
// import airDrop from "../images/airDrop.svg";
// import styled, { keyframes } from "styled-components";
// import { useMediaQuery } from "@mui/material";

// // Function to generate random values
// const getRandom = (min, max) => Math.random() * (max - min) + min;

// const createLeftFloatAnimation = () => keyframes`
//   0% { transform: translate(${getRandom(-10, 10)}vw, ${getRandom(-10, 10)}vh); }
//   10% { transform: translate(${getRandom(10, 20)}vw, ${getRandom(10, 20)}vh); }
//   20% { transform: translate(${getRandom(10, 20)}vw, ${getRandom(20, 30)}vh); }
//   30% { transform: translate(${getRandom(10, 20)}vw, ${getRandom(30, 40)}vh); }
//   40% { transform: translate(${getRandom(10, 20)}vw, ${getRandom(40, 50)}vh); }
//   50% { transform: translate(${getRandom(10, 20)}vw, ${getRandom(50, 60)}vh); }
//   60% { transform: translate(${getRandom(10, 20)}vw, ${getRandom(60, 70)}vh); }
//   70% { transform: translate(${getRandom(10, 20)}vw, ${getRandom(70, 80)}vh); }
//   80% { transform: translate(${getRandom(10, 20)}vw, ${getRandom(80, 90)}vh); }
//   90% { transform: translate(${getRandom(10, 20)}vw, ${getRandom(90, 100)}vh); }
//   100% { transform: translate(${getRandom(10, 20)}vw, ${
//   window.innerHeight
// }px); }
// `;

// const createRightFloatAnimation = () => keyframes`
//   0% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   -10,
//   10
// )}vh); }
//   10% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   10,
//   20
// )}vh); }
//   20% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   20,
//   30
// )}vh); }
//   30% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   30,
//   40
// )}vh); }
//   40% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   40,
//   50
// )}vh); }
//   50% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   50,
//   60
// )}vh); }
//   60% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   60,
//   70
// )}vh); }
//   70% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   70,
//   80
// )}vh); }
//   80% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   80,
//   90
// )}vh); }
//   90% { transform: translate(${getRandom(-20, -10)}vw, ${getRandom(
//   90,
//   100
// )}vh); }
//   100% { transform: translate(${getRandom(-20, -10)}vw, ${
//   window.innerHeight
// }px); }
// `;

// const FloatingRightSvg = styled.div`
//   position: fixed;
//   top: -15vh;
//   right: ${(props) => props.left}vh;
//   width: 50px;
//   height: 50px;
//   animation: ${createRightFloatAnimation()} ${getRandom(7, 13)}s linear infinite;
//   animation-delay: ${(props) => props.delay}s;
//   cursor: pointer;
//   z-index: 99999;
// `;

// const FloatingLeftSvg = styled.div`
//   position: fixed;
//   top: -15vh;
//   left: ${(props) => props.left}vh;
//   width: 50px;
//   height: 50px;
//   animation: ${createLeftFloatAnimation()} ${getRandom(7, 13)}s linear infinite;
//   animation-delay: ${(props) => props.delay}s;
//   cursor: pointer;
//   z-index: 99999;
// `;

// const FloatingIcon = () => {
//   const navigate = useNavigate();

//   const isMobile = useMediaQuery("(max-width: 600px)");
//   const handleClick = () => {
//     navigate("/vyug-airdrop");
//   };

//   const Righticons = Array.from({ length: isMobile ? 1 : 2 }).map((_, index) => (
//     <FloatingRightSvg
//       key={index}
//       onClick={handleClick}
//       left={index * 20}
//       delay={index * 2}
//     >
//       <img src={airDrop} alt="Airdrop icon" aria-hidden="true" />
//     </FloatingRightSvg>
//   ));

//   const Lefticons = Array.from({ length: isMobile ? 1 : 2 }).map((_, index) => (
//     <FloatingLeftSvg
//       key={index}
//       onClick={handleClick}
//       left={index * 20}
//       delay={index * 2}
//     >
//       <img src={airDrop} alt="Airdrop icon" aria-hidden="true" />
//     </FloatingLeftSvg>
//   ));

//   return (
//     <>
//       {Lefticons}
//       {Righticons}
//     </>
//   );
// };

// export default FloatingIcon;


import React from 'react'

const FloatingIcon = () => {
  return (
    <div></div>
  )
}

export default FloatingIcon
