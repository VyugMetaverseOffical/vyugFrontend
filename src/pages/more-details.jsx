// import React, { useState, useRef,useEffect } from 'react';
// import { ReactSVG } from 'react-svg';
// import image from "../images/testing.svg"
// import Slider from "@mui/material/Slider";
// import { styled } from "@mui/material/styles";

// const StyledSlider = styled(Slider)`
// color: #20b2aa;

// :hover {
//   color: #2e8b57;
// }

// & .MuiSlider-thumb {
//   border-radius: 4px;
// }
// `; 


// const data = [
//   {
//     id: 1,
//     x1: "64.16",
//     x2: "157.7",
//     y1: "86.3",
//     y2: "179.3",
//     owner: "mai hu",
//     price: "10"
//   },
//   {
//     id: 2,
//     x1: "64.16",
//     x2: "157.7",
//     y1: "182",
//     y2: "275",
//     owner: "tum ho",
//     price: "20"
//   },
//   {
//     id: 3,
//     x1: "64.16",
//     x2: "157.7",
//     y1: "277.75",
//     y2: "370.75",
//     owner: "hm dono h",
//     price: "30",
//   },
//   {
//     id: 4,
//     x1: "351.88",
//     x2: "445",
//     y1: "39.4",
//     y2: "132.40",
//     owner: "ap dono h",
//     price: "40"
//   },
//   {
//     id: 5,
//     x1: "291.28",
//     x2: "384.1",
//     y1: "135.2",
//     y2: "228.1",
//     owner: "hm sb h",
//     price: "50"
//   },
//   {
//     id: 6,
//     x1: "380.39",
//     x2: "473.23",
//     y1: "374.62",
//     y2: "467.50",
//     owner: "wo dono h",
//     price: "60"
//   },
// ]


// function SVGMap() {
//   const [hoveredPoint, setHoveredPoint] = useState(null);
//   const [imageZoomState, setImageZoomState] = useState(false);
//   const [zoomLevel, setZoomLevel] = useState(1);



//   const handleZoomChange = (event, newValue) => {
//     setZoomLevel(newValue);
//   };




//   function searchRecord(x, y) {
//     for (const record of data) {
//       if (x >= record.x1 && x <= record.x2 && y >= record.y1 && y <= record.y2) {
//         return record.owner;
//       }
//     }
//     return null; // Point not found in any record
//   }

//   function searchPrice(x, y) {
//     for (const record of data) {
//       if (x >= record.x1 && x <= record.x2 && y >= record.y1 && y <= record.y2) {
//         return record.price;
//       }
//     }
//     return null; // Point not found in any record
//   }

//   const handleMouseMove = (event) => {
//     const svgElement = event.target.ownerSVGElement;
//     if (svgElement) {
//       const point = svgElement.createSVGPoint();
//       point.x = event.clientX;
//       point.y = event.clientY;

//       const svgPoint = point.matrixTransform(svgElement.getScreenCTM().inverse());
//       setHoveredPoint({ x: svgPoint.x, y: svgPoint.y });
//     } else {
//       setHoveredPoint(null); // Set x and y to null if no SVG element
//     }
//   };

//   const handleMouseEnter = () => {
//     setImageZoomState(true);
//   };

//   const handleMouseLeave = () => {
//     setImageZoomState(false);
//   };
//   const calculateViewBox = () => {
//     const baseWidth = 800; // Base width of the SVG
//     const baseHeight = 600; // Base height of the SVG
//     const newWidth = baseWidth * zoomLevel;
//     const newHeight = baseHeight * zoomLevel;
//     const xOffset = (baseWidth - newWidth) / 2;
//     const yOffset = (baseHeight - newHeight) / 2;
//     return `${xOffset} ${yOffset} ${newWidth} ${newHeight}`;
//   };
 
 
// console.log(zoomLevel)

//   return (
//     <div style={{ backgroundColor: "red",height:"100vh" }}>
//       <h2>Hovered Point: {hoveredPoint ? hoveredPoint.x : null} {hoveredPoint ? hoveredPoint.y : null}</h2>

//       <p>Owner: {hoveredPoint ? searchRecord(hoveredPoint.x, hoveredPoint.y) : '-'}</p>
//       <p>Price: {hoveredPoint ? searchPrice(hoveredPoint.x, hoveredPoint.y) : '-'}</p>
//       <p>state: {imageZoomState === true ? "true" : "false"}</p>
//       <StyledSlider
//           id="range-slider"
//           value={zoomLevel}
//           onChange={handleZoomChange}
       
//           aria-labelledby="range-slider"
//           step={0.01}
//           min={1}
//           max={10}  
//           style={{width:"30%",marginLeft:"10px"}}
//           marks={[{ value: 1, label: 'Min' }, { value: 10, label: 'Max' }]}
//         />
   
//       <div style={{ backgroundColor: "white", overflow: "scroll", scrollbarWidth: "none", marginLeft: "5vw",width:"50%",height:"50%",marginTop:"50px", }} >
    
        
//             <ReactSVG
//               src={image}
//               onMouseMove={handleMouseMove}
//               style={{ width: "100%", height: "auto" }}
//             /> 
  
//       </div>  
//     </div>
//   );
// }

// export default SVGMap;
