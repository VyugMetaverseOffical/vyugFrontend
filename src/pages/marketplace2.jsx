// import React, { useState } from 'react';
// import PriceController from "../components/price-controller";
// import image from "../images/1.png";

// const MarketPlace = () => {
//     const handleBuyButtonClick = (id) => {
//         console.log(`Buy button clicked for ${id}`);
//         // Perform further actions based on the ID
//     };

//     return (
//         <div className="text-center">
//             <div className="text-2xl mb-6">Header Text</div>
            
//             <div className="mt-14">
//                 <div className="mb-4">Lands</div>
//                 <div className="w-80 mx-auto">
//                     <PriceController />
//                 </div>
//                 <div id="land1">
//                     <img src={image} className="w-96 mx-auto" alt="Lands Image" />
//                     <button 
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//                         onClick={() => handleBuyButtonClick('land1')}
//                     >
//                         10 ETH
//                     </button>
//                 </div>
//             </div>
            
//             <div className="mt-8">
//                 <div className="mb-4">Assets</div>
//                 <div className="w-80 mx-auto">
//                     <PriceController />
//                 </div>
//                 <div id="land2">
//                     <img src={image} className="w-96 mx-auto" alt="Assets Image" />
//                     <button 
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//                         onClick={() => handleBuyButtonClick('land2')}
//                     >
//                         04 ETH
//                     </button>
//                 </div>
//             </div>
            
//             <div className="mt-8">
//                 <div className="mb-4">Wearables</div>
//                 <div className="w-80 mx-auto">
//                     <PriceController />
//                 </div>
//                 <div id="land3">
//                     <img src={image} className="w-96 mx-auto" alt="Wearables Image" />
//                     <button 
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//                         onClick={() => handleBuyButtonClick('land3')}
//                     >
//                         O6 ETH
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MarketPlace;
