import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Head";
import Footer from "../components/Footer";
import pre_1 from "../images/PresaleGuide/pre_1.png";
import pre_2 from "../images/PresaleGuide/pre_2.png";
import pre_3 from "../images/PresaleGuide/pre_3.png";
import pre_4 from "../images/PresaleGuide/pre_4.png";
import pre_5 from "../images/PresaleGuide/pre_5.png";
import pre_6 from "../images/PresaleGuide/pre_6.png";
import pre_7 from "../images/PresaleGuide/pre_7.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const PresaleGuide = () => {
  const [position, setPosition] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header isTransparent={position} isHeaderText={true} />
      <div className="min-h-screen w-[80%] mx-auto flex flex-col gap-10 md:gap-10 pt-40">
        <div className="description font-normal cursor-pointer text-base md:text-xl text-[#333333]" onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon className="text-[#333333]" />
          Back
        </div>
        <h2 className="header font-transyl text-[#242424] text-center text-[25px] md:text-[30px] lg:text-[35px]">
          Steps to Invest in the VYUG Presale
        </h2>
        <div>
          <ul
            className={
              "text-[#6D6A6A] description pb-10 md:pb-20 font-semibold text-base md:text-lg list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgMTEgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjUuNSIgY3k9IjUuNSIgcj0iNS41IiBmaWxsPSIjMjQyNDI0Ii8+Cjwvc3ZnPgo=)]"
            }
          >
            <li className="pt-10 md:pt-16 pb-3 md:pb-6">
              Scroll down on the Banner and click on Explore Now to go to the
              Presale Page
            </li>
            <img className="w-full md:w-[80%]" src={pre_1} alt="" />
            <li className="pt-10 md:pt-16 pb-3 md:pb-6">
              To Join the Presale, you need to log in first. Click on the Login
              button in the top Right corner
            </li>
            <img className="w-full md:w-[80%]" src={pre_2} alt="" />
            <li className="pt-10 md:pt-16 pb-3 md:pb-6">
              To Join the Presale, Log In/Sign up to the VYUG Metaverse with
              your credentials
            </li>
            <img className="w-full md:w-[80%]" src={pre_3} alt="" />
            <li className="pt-10 md:pt-16 pb-3 md:pb-6">
              Select the Wallet you want to connect from the Available Wallet
              list
            </li>
            <img className="w-full md:w-[80%]" src={pre_4} alt="" />
            <li className="pt-10 md:pt-16 pb-3 md:pb-6">
              Enter the Amount of USDTs that you want to add
            </li>
            <img className="w-full md:w-[80%]" src={pre_5} alt="" />
            <li className="pt-10 md:pt-16 pb-3 md:pb-6">
              Click on BUY VYUG Token
            </li>
            <img className="w-full md:w-[80%]" src={pre_6} alt="" />
            <li className="pt-10 md:pt-16 pb-3 md:pb-6">
              You will receive a confirmation notification, to confirm the
              transaction.
            </li>
            <img className="w-full md:w-[80%]" src={pre_7} alt="" />
            <li className="pt-10 md:pt-16 pb-3 md:pb-6">
              That’s It! You will receive VYUG Tokens against the USDTs you have
              invested.
            </li>
            {/* <img className="w-full md:w-[80%]" src={pre_7} alt="" /> */}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PresaleGuide;
