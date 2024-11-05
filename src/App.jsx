import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Backdrop, CssBaseline, Stack } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./redux/counterSlice";
// import FloatingIcon from "./components/FloatingIcon";
import ScreenshotDetector from "./components/ScreenshotDetector";
import Starter from "./components/Starter";
import CustomCursor from "./components/CustomCursor";
import Sitemap from "./pages/Sitemap";
import Banner from "./images/Banner.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import { Buffer } from "buffer";
import process from "process";
import Presale_TxnComplete from "./pages/Presale_TxnComplete";
// import Overview from "./pages/Overview";
// import global from 'global';

if (typeof window !== "undefined") {
  window.Buffer = Buffer;
}
window.process = process;
if (typeof global === "undefined") {
  window.global = window;
}

// Lazy load components
const PrivacyPolicy = lazy(() => import("./pages/Extras/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/Extras/TermsOfUse"));
const AvatarOauth = lazy(() => import("./pages/avatar-dashboard"));
const Home = lazy(() => import("./pages/Home"));
const MarketPlace = lazy(() => import("./pages/MarketPlace"));
const MoreDetails = lazy(() => import("./pages/more-details"));
const MoreDetails2 = lazy(() => import("./pages/more-details2"));
const Profile = lazy(() => import("./pages/Profile/profile"));
const Assets = lazy(() => import("./pages/Profile/assets"));
const Account = lazy(() => import("./pages/Profile/account"));
const About = lazy(() => import("./pages/Presence/about"));
const Mission = lazy(() => import("./pages/Presence/Mission"));
const Error = lazy(() => import("./components/Error"));
const Investment = lazy(() => import("./pages/invest"));
const AvaturnComponent = lazy(() => import("./pages/avaturn"));
const MainProfile = lazy(() => import("./pages/Profile/main-profile"));
const Map3 = lazy(() => import("./pages/map/map3"));
const Friend = lazy(() => import("./pages/friend"));
const Innovators = lazy(() => import("./pages/Innovators"));
const BeAnInvestor = lazy(() => import("./pages/BeAnInvestor"));
const InvestInVyug = lazy(() => import("./pages/InvestInVyug"));
const Token = lazy(() => import("./pages/Token"));
const PlaySpace = lazy(() => import("./pages/PlaySpace"));
const TurboTrack = lazy(() => import("./pages/PlaySpace/TurboTrack"));
const MarketMap = lazy(() => import("./pages/map/MarketMap"));
const Partners = lazy(() => import("./pages/Partners"));
const Wallet = lazy(() => import("./pages/Wallet/index"));
const AirdropRegister = lazy(() => import("./pages/Airdrop/Register"));
const Airdrop = lazy(() => import("./pages/Airdrop"));
const OTPVerification = lazy(() => import("./pages/Airdrop/OTPVerification"));
const Stream = lazy(() => import("./pages/stream"));
const AirdropLogin = lazy(() => import("./pages/Airdrop/Login"));
const StreamText = lazy(() => import("./pages/Stream_Text"));
const DigitalReality = lazy(() => import("./pages/DigitalReality"));
const Demo = lazy(() => import("./pages/Demo"));
const Auth = lazy(() => import("./pages/Auth"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const Core = lazy(() => import("./pages/Core"));
const Extras = lazy(() => import("./pages/Extras"));
const Buzz = lazy(() => import("./pages/Buzz"));
const YoutubeAdmin = lazy(() => import("./pages/YoutubeAdmin"));
const Admin = lazy(() => import("./admin"));
const Extras1 = lazy(() => import("./pages/Extras1"));
const WhitePaper = lazy(() => import("./pages/WhitePaper"));
const PreSale = lazy(() => import("./pages/PreSale"));
const PreSaleGuide = lazy(() => import("./pages/PresaleGuide"));
const JoinTelegram = lazy(() => import("./pages/JoinTelegram"));
// const Dashboard = lazy(() => import("./pages/Dashboar"));

function App() {
  const { user, authToken, fetchUser } = useAuth();
  const [isClicked, setIsClicked] = useState(false);
  // const [showBanner, setShowBanner] = useState(true);

  const location = useLocation();
  const [showStarter, setShowStarter] = useState(true);
  const pathname = location.pathname;

  const closeBanner = () => {
    setShowBanner(false);
    // sessionStorage.setItem("#@94509345@#isBannerShown", "true");
  };

  // useEffect(() => {
  //   if (
  //     [
  //       "/join-telegram",
  //       "/",
  //       "/stream",
  //       "/stream-announcement",
  //       "/vyug-airdrop",
  //       "/landing-page",
  //       "/landing-page/login",
  //       "/landing-page/register",
  //       "/landing-page/register/verify-otp",
  //       "/crypto-presale",
  //     ].includes(pathname)
  //   ) {
  //     setShowBanner(false);
  //   } else {
  //     setShowBanner(true);
  //   }
  // }, [pathname]);

  useEffect(() => {
    if (!user && authToken) {
      console.log(authToken);
      fetchUser();
    }

    setTimeout(() => {
      setShowStarter(false);
    }, 1000);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* {showBanner && (
        <div className="banner-css">
          <div onClick={closeBanner} className="fixed top-5 right-5">
            <ClearIcon fontSize="large" className="text-[#fff]" />
          </div>
          <a href="https://telegram.me/vyugofficial" target="_blank">
            <img
              className="rounded-[0] w-[100vw] h-[100%]"
              src={Banner}
              alt=""
            />
          </a>
        </div>
      )} */}
      <ScreenshotDetector />
      {/* {location.pathname !== "/landing-page" &&
        location.pathname !== "/stream" &&
        location.pathname !== "/avatar" &&
        location.pathname !== "/landing-page/login" &&
        location.pathname !== "/landing-page/register" &&
        location.pathname !== "/" &&
        location.pathname !== "/whitepaper" && <FloatingIcon />} */}
      {location.pathname !== "/" &&
        // location.pathname !== "/stream" &&
        location.pathname !== "/avatar" && <CustomCursor />}
      {showStarter ? (
        <Starter />
      ) : (
        <div>
          <CssBaseline />
          <Toaster
            toastOptions={{
              style: {
                duration: 4000,
                position: "top-center",
                fontFamily: '"Montserrat", sans-serif',
                color: "#fff",
                padding: "7px 40px",
                borderRadius: "100px",
              },
            }}
          />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocussell={false}
            draggable={false}
            pauseOnHover
            theme="colored"
          />
          <Suspense
            fallback={
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Backdrop open={true}>
                  <Starter />
                  {/* <CircularProgress className="tw-text-blue-700" /> */}
                </Backdrop>
              </Stack>
            }
          >
            <Routes>
              <Route path="/about-us" element={<About />} />
              {/* <Route path="/layout" element={<Dashboard />} /> */}
              {/* <Route path="/layou" element={<Overview />} /> */}
              <Route path="/mission-vision" element={<Mission />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/free-dashboard" element={<AvatarOauth />} />
              <Route path="/more-details" element={<MoreDetails />} />
              <Route path="/more-details2" element={<MoreDetails2 />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/account" element={<Account />} />
              {/* <Route path="/pre-sale" element={<CryptoPresale />} /> */}
              {/* <Route path="/home" element={<HomePage />} /> */}
              {/* <Route path="/" element={<Home />} /> */}
              <Route
                path="/"
                element={
                  <Home isClicked={isClicked} setIsClicked={setIsClicked} />
                }
              />
              <Route path="/regions/*" element={<Core />} />
              <Route path="/sectors/*" element={<DigitalReality />} />
              <Route path="/buzz/*" element={<Buzz />} />
              <Route path="/youtube-admin/*" element={<YoutubeAdmin />} />
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/trade/*" element={<Extras />} />
              <Route path="/auth/*" element={<Auth />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/trade-center/*" element={<MarketPlace />} />
              <Route path="/invest" element={<Investment />} />
              <Route path="/*" element={<Error />} />
              <Route path="/avatar" element={<AvaturnComponent />} />
              <Route path="/main-profile" element={<MainProfile />} />
              <Route path="/map" element={<MarketMap />} />
              <Route path="/map3" element={<Map3 />} />
              <Route path="/friend" element={<Friend />} />
              <Route path="/innovators" element={<Innovators />} />
              <Route path="/be-an-investor" element={<BeAnInvestor />} />
              <Route path="/invest-in-vyug" element={<InvestInVyug />} />
              <Route path="/vyug-token" element={<Token />} />
              {/* <Route path="/crypto-presale" element={<PreSale />} /> */}
              <Route path="/crypto-presale" element={<PreSale />} />
              <Route path="/presale" element={<PreSale />} />
              <Route path="/presale/how-to-buy" element={<PreSaleGuide />} />
              {/* <Route
                path="/presale/transaction-complete"
                element={<Presale_TxnComplete />}
              /> */}
              <Route
                path="/presale/transaction-complete"
                element={<Presale_TxnComplete />}
              />
              <Route path="/play-space" element={<PlaySpace />} />
              <Route path="/play-space/id" element={<TurboTrack />} />
              {/* <Route path="/create-blog" element={<CreateBlog />} /> */}
              <Route path="/stream" element={<Stream />} />
              <Route path="/stream-announcement" element={<StreamText />} />
              {/* <Route path="/vyug-airdrop" element={<Airdrop />} /> */}
              <Route path="/join-telegram" element={<JoinTelegram />} />
              {/* <Route path="/landing-page">
                <Route path="login" element={<AirdropLogin />} />
                <Route path="register" element={<AirdropRegister />} />
                <Route
                  path="register/verify-otp"
                  element={<OTPVerification />}
                />
              </Route> */}

              <Route path="/whitepaper" element={<WhitePaper />} />
              {/* <Route path="/extras" element={<Extras1 />} /> */}
              {/* <Route path="/sitemap-generator" element={<Sitemap />} /> */}
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
}

export default React.memo(App);
