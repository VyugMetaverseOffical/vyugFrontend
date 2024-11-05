import React, { useEffect, useState } from "react";
import Header from "../../components/Head";
import wallet1 from "../../images/Wallet/wallet1.svg";
import wallet2 from "../../images/Wallet/wallet2.svg";
import wallet3 from "../../images/Wallet/wallet3.svg";
import wallet4 from "../../images/Wallet/wallet4.svg";
import wallet5 from "../../images/Wallet/wallet5.svg";
import wallet6 from "../../images/Wallet/wallet6.svg";
import wallet7 from "../../images/Wallet/wallet7.svg";
import wallet8 from "../../images/Wallet/wallet8.svg";
import wallet9 from "../../images/Wallet/wallet9.svg";
import wallet_GIF from "../../videos/Wallet_GIF.gif";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Mock from "./Mock";
import QRCode from "react-qr-code";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Wallet = () => {
  const [position, setPosition] = useState(false);

  const WalletData = [
    {
      img: wallet1,
      data: "No Gas Fees for Internal Transactions",
      desc: "Enjoy the freedom of cost-effective transactions with no gas fees for internal transfers. Focus on your crypto experience without worrying about additional costs.",
    },
    {
      img: wallet2,
      data: "Single QR Code Payment",
      desc: "Make transactions easier with our single QR code payment system. Send and receive various tokens effortlessly with just one scan.",
    },
    {
      img: wallet3,
      data: "All Tokens in One Place",
      desc: "Simplify your crypto management with all your tokens conveniently located in one user-friendly interface. Easily access and navigate your digital assets without hassle.",
    },
    {
      img: wallet4,
      data: "Fast Transactions with an Easy Interface",
      desc: "Experience lightning-fast transactions complemented by an intuitive interface. The UCE Wallet is designed for users of all experience levels, ensuring seamless operations.",
    },
    {
      img: wallet5,
      data: "Unique User ID",
      desc: "Each user is assigned a unique ID, enhancing security and simplifying account management. Your identity is protected while enjoying hassle-free transactions.",
    },
    {
      img: wallet6,
      data: "One-Click Token Swapping",
      desc: "Swap any tokens within the ecosystem with just one click. Experience the ease of managing your assets without complicated processes.",
    },
    {
      img: wallet7,
      data: "Transaction Fees for Outer Transactions Only",
      desc: "Swap any tokens within the ecosystem with just one click. Experience the ease of managing your assets without complicated processes.",
    },
  ];

  const settings = {
    fade: true,
    dots: true,
    pauseOnHover: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "center",
    centerMode: true,
  };

  window.addEventListener("scroll", function (e) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Wallet - VYUG Metaverse</title>
        <meta name="description" content="Wallet" />
        <meta name="keywords" content="Wallet" />
        <meta property="og:title" content="Wallet" />
        <meta property="og:description" content="Wallet" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/wallet" />
      </Helmet>
      <Header isTransparent={position} isHeaderText={true} />
      <div className="pt-40 flex flex-col justify-center items-center gap-5 w-[90%] sm:w-[85%] mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
          <h1 className="w-full pb-10 md:pb-0 md:w-[50%] lg:w-[45%] flex flex-col justify-start gap-1">
            <span className="header text-3xl text-left sm:text-4xl md:text-[45px] text-[#242424]">
              Your All-in-One
            </span>
            <span className="header text-3xl md:pt-4 text-left sm:text-4xl md:text-[45px] text-[#242424]">
              Crypto Hub with
            </span>
            <span className="header text-3xl md:pt-4 text-left sm:text-4xl md:text-[45px] text-[#242424]">
              <span className="text-[#695FE3]">UCE </span> Connectivity
            </span>
          </h1>
          <div className="w-full md:w-[50%] lg:w-[55%] flex justify-center items-center">
            <img src={wallet_GIF} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 py-20">
          <h2 className="header text-xl sm:text-2xl md:text-3xl text-center text-[#242424]">
            Unified Crypto Engine (UCE): Powering the VYUG Wallet
          </h2>
          <p className="description text-sm md:text-base text-center md:px-20 text-[#242424]">
            The VYUG Wallet is empowered by the Unified Crypto Engine (UCE), a
            revolutionary technology designed to streamline and secure the
            management of your digital assets. UCE is the technological backbone
            that drives the VYUG Wallet, ensuring a seamless, secure, and
            efficient experience as you navigate the VYUG metaverse and beyond.
          </p>
          <div className="flex justify-center gap-5 md:gap-10 items-stretch flex-wrap pt-10 md:pt-20">
            {WalletData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2 hover:py-4 hover:px-2 p-5 rounded-xl shadow-lg w-[47%] sm:w-[30%] md:w-[29%] lg:w-[20%] hover:bg-[#FBFBF9] bg-[#9785F1] transition duration-400 ease-in-out group cursor-pointer border-[1px] border-[#9785F1]"
              >
                <div className="flex flex-col justify-center items-center"></div>
                <div className="sm:w-[50%] group-hover:hidden w-[60%] h-[60%] sm:h-[50%] flex justify-center items-center">
                  <img className="w-[100%] h-[100%]" src={item.img} alt="" />
                </div>
                <h6 className="header text-sm sm:text-base text-center text-[#fff] group-hover:hidden">
                  {item.data}
                </h6>
                <p className="description text-[#242424] text-[13px] md:text-sm hidden group-hover:inline-block text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="description text-sm md:text-base text-center py-10 md:py-20 md:px-24 text-[#242424]">
            The UCE is a crucial component of the digital landscape, enhancing
            the overall experience across B2B, B2C, and C2C interactions. With
            its seamless integration and user-centric design, the UCE
            exemplifies our commitment to delivering a cost-effective and
            efficient crypto experience.
          </p>
        </div>
      </div>
      <Box
        className="mb-10 sm:mb-20 w-[100%]"
        sx={{
          "& button": {
            zIndex: 100,
          },
          "& button::before, & button::after": {
            opacity: 1,
            color: "black",
          },
        }}
      >
        <Slider {...settings}>
          {Mock.map((item, index) => (
            <div
              key={index}
              className="w-full bg-[#F1EEFD] py-10 md:pb-32 flex flex-col justify-center items-center gap-5 rounded-lg"
            >
              <div className="w-[100%]">
                <h3 className="text-2xl sm:text-2xl text-center pb-10 md:pb-20 md:text-3xl header">
                  Power-Packed Highlights
                </h3>
                <div className="w-full flex-col-reverse md:flex-row flex gap-10 items-center justify-center">
                  <div className="flex w-full md:w-[50%] justify-center items-center">
                    <div className="flex flex-col gap-4 items-left w-[80%] justify-center ">
                      <h5 className="text-xl sm:text-2xl text-center md:text-left lg:text-3xl header">
                        {item?.header}
                      </h5>
                      <p className="text-center md:text-left text-sm md:text-base description">
                        {item?.desc}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-[45%] flex justify-center items-center gap-2">
                    <img className="w-[40%]" src={item?.img1} alt="" />
                    <img
                      className="w-[30%] opacity-50"
                      src={item?.img2}
                      alt=""
                    />
                    <img
                      className="w-[20%] opacity-25"
                      src={item?.img3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Box>
      <div className="flex flex-col justify-center items-center gap-5 w-[90%] sm:w-[85%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-5 py-20">
          <h4 className="header text-2xl md:text-3xl text-center text-[#242424]">
            The VYUG Wallet Supports 550+ Cryptocurrencies
          </h4>
          <p className="description text-sm md:text-base text-center md:px-20 text-[#242424]">
            Explore a vast array of digital assets with the VYUG Wallet, which
            supports over 550 cryptocurrencies. From major coins like Bitcoin
            and Ethereum to rare and exotic options such as AGA and SHIB, our
            platform offers an extensive selection to suit all your investment
            needs. Enjoy the convenience of managing and investing in a diverse{" "}
            <br />
            range of assets—all within a single, unified platform.
          </p>
        </div>

        <div className="flex w-full flex-col justify-center items-center gap-6 pb-20">
          <h5 className="header text-2xl md:text-3xl text-center text-[#242424]">
            Download Now
          </h5>
          <p className="description text-sm md:text-base text-center md:px-24 text-[#242424]">
            Ready to experience seamless management of over 550
            cryptocurrencies? Simply <b>scan the QR code</b> below to download
            the VYUG Wallet and start exploring a world of digital assets.
          </p>
          <div className="flex w-full justify-center items-stretch gap-5 md:py-5">
            <div className="w-[45%] sm:w-[40%] lg:w-[25%] flex flex-col justify-center items-center gap-5 bg-[#9785F1] px-4 sm:px-10 py-4 rounded-lg">
              <Link
                className="w-[40%] sm:w-[25%] md:w-[30%] h-[40%] sm:h-[25%] md:h-[30%] cursor-pointer"
                to="https://play.google.com/store/apps/details?id=com.vyugwallet.android"
              >
                <img
                  className="w-[100%] h-[100%] cursor-pointer"
                  src={wallet8}
                  alt=""
                />
              </Link>
              <p className="header text-sm md:text-base text-center text-[#fff]">
                For Android
              </p>
              <QRCode
                className="w-[5rem] sm:w-[10rem] h-[100%]"
                bgColor="#fff"
                fgColor="#9785F1"
                title="Download VYUG APP from Play Store"
                value="https://play.google.com/store/apps/details?id=com.vyugwallet.android"
              />
              <p className="header text-sm md:text-base text-center text-[#fff]">
                Download Now
              </p>
            </div>
            <div className="w-[45%] sm:w-[40%] lg:w-[25%] flex flex-col justify-center items-center gap-5 bg-[#9785F1] px-4 sm:px-10 py-4 rounded-lg">
              <Link
                className="w-[40%] sm:w-[25%] md:w-[30%] h-[40%] sm:h-[25%] md:h-[30%] cursor-pointer"
                to="https://apps.apple.com/app"
              >
                <img
                  className="w-[100%] h-[100%] cursor-pointer"
                  src={wallet9}
                  alt=""
                />
              </Link>
              <p className="header text-sm md:text-base text-center text-[#fff]">
                For IOS
              </p>
              <QRCode
                className="w-[5rem] sm:w-[10rem] h-[100%]"
                bgColor="#fff"
                fgColor="#9785F1"
                title="Download VYUG APP from Apple Store"
                value="https://apps.apple.com/app"
              />
              <p className="header text-sm md:text-base text-center text-[#fff]">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wallet;




// import React, { useEffect, useState } from "react";
// import Header from "../../components/Head";
// import wallet1 from "../../images/Wallet/wallet1.svg";
// import wallet2 from "../../images/Wallet/wallet2.svg";
// import wallet3 from "../../images/Wallet/wallet3.svg";
// import wallet4 from "../../images/Wallet/wallet4.svg";
// import wallet5 from "../../images/Wallet/wallet5.svg";
// import wallet6 from "../../images/Wallet/wallet6.svg";
// import wallet7 from "../../images/Wallet/wallet7.svg";
// import wallet8 from "../../images/Wallet/wallet8.svg";
// import wallet9 from "../../images/Wallet/wallet9.svg";
// import wallet_GIF from "../../videos/Wallet_GIF.gif";
// import Footer from "../../components/Footer";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Box } from "@mui/material";
// import Mock from "./Mock";
// import QRCode from "react-qr-code";
// import { Link, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const Wallet = () => {
//   const [position, setPosition] = useState(false);
//   const [walletIndex, setWalletIndex] = useState(0);

//   const WalletData1 = [
//     {
//       img: wallet1,
//       data: "No Gas Fees \n for Internal \n Transactions",
//       desc: "Enjoy the freedom of cost-effective transactions with no gas fees for internal transfers. Focus on your crypto experience without worrying about additional costs",
//       top: 0,
//       left: 50,
//     },
//     {
//       img: wallet2,
//       data: "Single QR Code \n Payment",
//       desc: "Make transactions easier with our single QR code payment system. Send and receive various tokens effortlessly with just one scan",
//       top: 20,
//       left: 80,
//     },
//     {
//       img: wallet3,
//       data: "All Tokens in \n One Place",
//       desc: "Simplify your crypto management with all your tokens conveniently located in one user-friendly interface. Easily access and navigate your digital assets without hassle",
//       top: 60,
//       left: 85,
//     },
//     {
//       img: wallet4,
//       data: "Fast \n Transactions \n with an Easy \n Interface",
//       desc: "Experience lightning-fast transactions complemented by an intuitive interface. The UCE Wallet is designed for users of all experience levels, ensuring seamless operations",
//       top: 100,
//       left: 75,
//     },
//     {
//       img: wallet5,
//       data: "Unique \n User ID",
//       desc: "Each user is assigned a unique ID, enhancing security and simplifying account management. Your identity is protected while enjoying hassle-free transactions",
//       top: 110,
//       left: 35,
//     },
//     {
//       img: wallet6,
//       data: "One-Click \n Token \n Swapping",
//       desc: "Swap any tokens within the ecosystem with just one click. Experience the ease of managing your assets without complicated processes",
//       top: 65,
//       left: 15,
//     },
//     {
//       img: wallet7,
//       data: "Transaction \n Fees for Outer \n Transactions \n Only",
//       desc: "Transaction fees apply only to external transfers, allowing you to save more on internal transactions and maximize your digital asset management",
//       top: 20,
//       left: 20,
//     },
//   ];

//   const settings = {
//     fade: true,
//     dots: true,
//     pauseOnHover: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     className: "center",
//     centerMode: true,
//   };

//   window.addEventListener("scroll", function (e) {
//     let scroll_y = this.scrollY;
//     if (scroll_y > 0) {
//       setPosition(true);
//     } else {
//       setPosition(false);
//     }
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="overflow-hidden">
//       <Helmet>
//         <title>Wallet - VYUG Metaverse</title>
//         <meta name="description" content="Wallet" />
//         <meta name="keywords" content="Wallet" />
//         <meta property="og:title" content="Wallet" />
//         <meta property="og:description" content="Wallet" />
//         <link rel="canonical" href="https://www.vyugmetaverse.com/wallet" />
//       </Helmet>
//       <Header isTransparent={position} isHeaderText={true} />
//       <div className="pt-40 flex flex-col justify-center items-center gap-5 w-[90%] sm:w-[85%] mx-auto">
//         <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
//           <h1 className="w-full pb-10 md:pb-0 md:w-[50%] lg:w-[45%] flex flex-col justify-start gap-1">
//             <span className="header text-3xl text-left sm:text-4xl md:text-[45px] text-[#242424]">
//               Your All-in-One
//             </span>
//             <span className="header text-3xl md:pt-4 text-left sm:text-4xl md:text-[45px] text-[#242424]">
//               Crypto Hub with
//             </span>
//             <span className="header text-3xl md:pt-4 text-left sm:text-4xl md:text-[45px] text-[#242424]">
//               <span className="text-[#695FE3]">UCE </span> Connectivity
//             </span>
//           </h1>
//           <div className="w-full md:w-[50%] lg:w-[55%] flex justify-center items-center">
//             <img src={wallet_GIF} alt="" />
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-center gap-5 py-20">
//           <h2 className="header text-xl sm:text-2xl md:text-3xl text-center text-[#242424]">
//             Unified Crypto Engine (UCE): Powering the VYUG Wallet
//           </h2>
//           <p className="description text-sm md:text-base text-center mb-20 md:px-20 text-[#6D6A6A]">
//             The VYUG Wallet is empowered by the Unified Crypto Engine (UCE), a
//             revolutionary technology designed to streamline and secure the
//             management of your digital assets. UCE is the technological backbone
//             that drives the VYUG Wallet, ensuring a seamless, secure, and
//             efficient experience as you navigate the VYUG metaverse and beyond.
//           </p>
//           <div className="relative h-[850px] w-[55%] rounded-[50%]">
//             <div
//               onClick={() => setWalletIndex(0)}
//               className="absolute top-0 left-[50%] -translate-x-[50%] flex max-[890px]:w-[10rem] max-[890px]:h-[10rem] w-[12rem] h-[15rem] gap-3 flex-col justify-center items-center rounded-xl bg-[#242424]"
//             >
//               <img
//                 className="max-[890px]:w-[30%] w-[50%] h-[50%]"
//                 src={wallet1}
//                 alt=""
//               />
//               <p className="header whitespace-pre-line text-center max-[890px]:text-sm text-base text-[#fff]">
//                 {`No Gas Fees \n for Internal \n Transactions`}
//               </p>
//             </div>
//             <div
//               onClick={() => setWalletIndex(1)}
//               className="absolute top-[15%] left-[95%] -translate-[50%] flex max-[890px]:w-[10rem] max-[890px]:h-[10rem] w-[12rem] h-[15rem] gap-3 flex-col justify-center items-center rounded-xl bg-[#242424]"
//             >
//               <img
//                 className="max-[890px]:w-[30%] w-[50%] h-[50%]"
//                 src={wallet2}
//                 alt=""
//               />
//               <p className="header whitespace-pre-line text-center max-[890px]:text-sm text-base text-[#fff]">
//                 {`Single QR Code \n Payment`}
//               </p>
//             </div>
//             <div
//               onClick={() => setWalletIndex(2)}
//               className="absolute top-[50%] left-[100%] -translate-[50%] flex max-[890px]:w-[10rem] max-[890px]:h-[10rem] w-[12rem] h-[15rem] gap-3 flex-col justify-center items-center rounded-xl bg-[#242424]"
//             >
//               <img
//                 className="max-[890px]:w-[30%] w-[50%] h-[50%]"
//                 src={wallet3}
//                 alt=""
//               />
//               <p className="header whitespace-pre-line text-center max-[890px]:text-sm text-base text-[#fff]">
//                 {`All Tokens in \n One Place`}
//               </p>
//             </div>
//             <div
//               onClick={() => setWalletIndex(3)}
//               className="absolute bottom-0 left-[90%] -translate-x-[50%] translate-y-[50%] flex max-[890px]:w-[10rem] max-[890px]:h-[10rem] w-[12rem] h-[15rem] gap-3 flex-col justify-center items-center rounded-xl bg-[#242424]"
//             >
//               <img
//                 className="max-[890px]:w-[30%] w-[50%] h-[50%]"
//                 src={wallet4}
//                 alt=""
//               />
//               <p className="header whitespace-pre-line text-center max-[890px]:text-sm text-base text-[#fff]">
//                 {`Fast \nTransactions\n with an Easy\n Interface`}
//               </p>
//             </div>
//             <div
//               onClick={() => setWalletIndex(4)}
//               className="absolute bottom-0 left-[20%] -translate-x-[50%] translate-y-[50%] flex max-[890px]:w-[10rem] max-[890px]:h-[10rem] w-[12rem] h-[15rem] gap-3 flex-col justify-center items-center rounded-xl bg-[#242424]"
//             >
//               <img
//                 className="max-[890px]:w-[30%] w-[50%] h-[50%]"
//                 src={wallet5}
//                 alt=""
//               />
//               <p className="header whitespace-pre-line text-center max-[890px]:text-sm text-base text-[#fff]">
//                 {`Unique \nUser ID`}
//               </p>
//             </div>
//             <div
//               onClick={() => setWalletIndex(5)}
//               className="absolute bottom-[20%] right-[95%] translate-[50%] flex max-[890px]:w-[10rem] max-[890px]:h-[10rem] w-[12rem] h-[15rem] gap-3 flex-col justify-center items-center rounded-xl bg-[#242424]"
//             >
//               <img
//                 className="max-[890px]:w-[30%] w-[50%] h-[50%]"
//                 src={wallet6}
//                 alt=""
//               />
//               <p className="header whitespace-pre-line text-center max-[890px]:text-sm text-base text-[#fff]">
//                 {`One-Click\n Token\n Swapping`}
//               </p>
//             </div>
//             <div
//               onClick={() => setWalletIndex(6)}
//               className="absolute top-[15%] right-[95%] translate-[50%] flex max-[890px]:w-[10rem] max-[890px]:h-[10rem] w-[12rem] h-[15rem] gap-3 flex-col justify-center items-center rounded-xl bg-[#242424]"
//             >
//               <img
//                 className="max-[890px]:w-[30%] w-[50%] h-[50%]"
//                 src={wallet7}
//                 alt=""
//               />
//               <p className="header whitespace-pre-line text-center max-[890px]:text-sm text-base text-[#fff]">
//                 {`Transaction\n Fees for Outer\n Transactions \n Only`}
//               </p>
//             </div>
//             <div className="absolute top-1/2 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center max-[890px]:w-[200px] w-[230px] border-solid border-2 border-[#9785F1]">
//               <div className="max-[890px]:w-[200px] w-[230px] border-solid border-2 border-[#9785F1] origin-center rotate-[3deg]">
//                 <div className="max-[890px]:w-[200px] w-[230px] border-solid border-2 border-[#9785F1] origin-center rotate-[3deg]">
//                   <div className="max-[890px]:w-[200px] w-[230px] border-solid border-2 border-[#9785F1] origin-center rotate-[3deg]">
//                     <p className="origin-center description max-[890px]:text-sm text-base text-center text-[#6D6A6A] p-6 -rotate-[9deg]">
//                       {WalletData1[walletIndex]?.desc || "---"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <p className="description text-sm md:text-base text-center pt-40 md:pt-60 md:px-24 text-[#6D6A6A]">
//             The UCE is a crucial component of the digital landscape, enhancing
//             the overall experience across B2B, B2C, and C2C interactions. With
//             its seamless integration and user-centric design, the UCE
//             exemplifies our commitment to delivering a cost-effective and
//             efficient crypto experience.
//           </p>
//         </div>
//       </div>
//       <Box
//         className="mb-10 sm:mb-20 w-[100%]"
//         sx={{
//           "& button": {
//             zIndex: 100,
//           },
//           "& button::before, & button::after": {
//             opacity: 1,
//             color: "black",
//           },
//         }}
//       >
//         <Slider {...settings}>
//           {Mock.map((item, index) => (
//             <div
//               key={index}
//               className="w-full bg-[#F1EEFD] py-10 md:pb-32 flex flex-col justify-center items-center gap-5 rounded-lg"
//             >
//               <div className="w-[100%]">
//                 <h3 className="text-2xl sm:text-2xl text-center pb-10 md:pb-20 md:text-3xl header">
//                   Power-Packed Highlights
//                 </h3>
//                 <div className="w-full flex-col-reverse md:flex-row flex gap-10 items-center justify-center">
//                   <div className="flex w-full md:w-[50%] justify-center items-center">
//                     <div className="flex flex-col gap-4 items-left w-[80%] justify-center ">
//                       <h5 className="text-xl sm:text-2xl text-center md:text-left lg:text-3xl header">
//                         {item?.header}
//                       </h5>
//                       <p className="text-center md:text-left text-sm md:text-base description text-[#6D6A6A]">
//                         {item?.desc}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="w-full md:w-[45%] flex justify-center items-center gap-2">
//                     <img className="w-[40%]" src={item?.img1} alt="" />
//                     <img
//                       className="w-[30%] opacity-50"
//                       src={item?.img2}
//                       alt=""
//                     />
//                     <img
//                       className="w-[20%] opacity-25"
//                       src={item?.img3}
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </Box>
//       <div className="flex flex-col justify-center items-center gap-5 w-[90%] sm:w-[85%] mx-auto">
//         <div className="flex flex-col justify-center items-center gap-5 py-20">
//           <h4 className="header text-2xl md:text-3xl text-center text-[#242424]">
//             The VYUG Wallet Supports 550+ Cryptocurrencies
//           </h4>
//           <p className="description text-sm md:text-base text-center md:px-20 text-[#6D6A6A]">
//             Explore a vast array of digital assets with the VYUG Wallet, which
//             supports over 550 cryptocurrencies. From major coins like Bitcoin
//             and Ethereum to rare and exotic options such as AGA and SHIB, our
//             platform offers an extensive selection to suit all your investment
//             needs. Enjoy the convenience of managing and investing in a diverse{" "}
//             <br />
//             range of assets—all within a single, unified platform.
//           </p>
//         </div>

//         <div className="flex w-full flex-col justify-center items-center gap-6 pb-20">
//           <h5 className="header text-2xl md:text-3xl text-center text-[#242424]">
//             Download Now
//           </h5>
//           <p className="description text-sm md:text-base text-center md:px-24 text-[#6D6A6A]">
//             Ready to experience seamless management of over 550
//             cryptocurrencies? Simply <b>scan the QR code</b> below to download
//             the VYUG Wallet and start exploring a world of digital assets.
//           </p>
//           <div className="flex w-full justify-center items-stretch gap-5 md:py-5">
//             <div className="w-[45%] sm:w-[40%] lg:w-[25%] flex flex-col justify-center items-center gap-5 bg-[#9785F1] px-4 sm:px-10 py-4 rounded-lg">
//               <Link
//                 className="w-[40%] sm:w-[25%] md:w-[30%] h-[40%] sm:h-[25%] md:h-[30%] cursor-pointer"
//                 to="https://play.google.com/store/apps/details?id=com.vyugwallet.android"
//               >
//                 <img
//                   className="w-[100%] h-[100%] cursor-pointer"
//                   src={wallet8}
//                   alt=""
//                 />
//               </Link>
//               <p className="header text-sm md:text-base text-center text-[#fff]">
//                 For Android
//               </p>
//               <QRCode
//                 className="w-[5rem] sm:w-[10rem] h-[100%]"
//                 bgColor="#fff"
//                 fgColor="#9785F1"
//                 title="Download VYUG APP from Play Store"
//                 value="https://play.google.com/store/apps/details?id=com.vyugwallet.android"
//               />
//               <p className="header text-sm md:text-base text-center text-[#fff]">
//                 Download Now
//               </p>
//             </div>
//             <div className="w-[45%] sm:w-[40%] lg:w-[25%] flex flex-col justify-center items-center gap-5 bg-[#9785F1] px-4 sm:px-10 py-4 rounded-lg">
//               <Link
//                 className="w-[40%] sm:w-[25%] md:w-[30%] h-[40%] sm:h-[25%] md:h-[30%] cursor-pointer"
//                 to="https://apps.apple.com/app"
//               >
//                 <img
//                   className="w-[100%] h-[100%] cursor-pointer"
//                   src={wallet9}
//                   alt=""
//                 />
//               </Link>
//               <p className="header text-sm md:text-base text-center text-[#fff]">
//                 For IOS
//               </p>
//               <QRCode
//                 className="w-[5rem] sm:w-[10rem] h-[100%]"
//                 bgColor="#fff"
//                 fgColor="#9785F1"
//                 title="Download VYUG APP from Apple Store"
//                 value="https://apps.apple.com/app"
//               />
//               <p className="header text-sm md:text-base text-center text-[#fff]">
//                 Coming Soon
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Wallet;

