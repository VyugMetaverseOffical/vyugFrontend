import { useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Marquee from "react-fast-marquee";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ isTransparent, isHeaderText }) => {
  const isMobile = useMediaQuery("(max-width:1275px)");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div>
      {pathname != "/presale" && pathname != "/crypto-presale" && (
        <section className="w-full fixed top-0 py-3 z-[999] bg-[#000000ee]">
          <Marquee pauseOnHover>
            <div
              onClick={() => navigate("/crypto-presale")}
              className="flex cursor-pointer justify-start items-center flex-wrap gap-[1rem]"
            >
              <p className="flex justify-start items-center gap-3 description font-transyl text-[#fff] text-xs sm:text-sm md:text-base font-semibold uppercase ps-5">
                <span className="w-[5px] h-[5px] bg-[#fff] rounded-[50%]"></span>
                Unlock global opportunities with VYUG – NFTs, land,
                collectibles, and more in the largest decentralized metaverse
              </p>
              <p className="flex justify-start items-center gap-3 description font-transyl text-[#fff] text-xs sm:text-sm md:text-base font-semibold uppercase ps-5">
                <span className="w-[5px] h-[5px] bg-[#fff] rounded-[50%]"></span>
                Presale Price $ 0.033
              </p>
              <p className="flex justify-start items-center gap-2 description font-transyl text-[#fff] text-xs sm:text-sm md:text-base font-semibold uppercase ps-5">
                <span className="w-[5px] h-[5px] bg-[#fff] rounded-[50%]"></span>
                Listing Price $ 0.088
              </p>
            </div>
          </Marquee>
        </section>
      )}
      <div
        style={{
          position: "fixed",
          top: pathname != "/presale" && pathname != "/crypto-presale" ? 45 : 0,
          right: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        {isMobile ? (
          <NavbarMobile
            isTransparent={isTransparent}
            isHeaderText={isHeaderText}
          />
        ) : (
          <Navbar isTransparent={isTransparent} isHeaderText={isHeaderText} />
        )}
      </div>
    </div>
  );
};

export default Header;
