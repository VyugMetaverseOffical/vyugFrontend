import { useMediaQuery } from "@mui/material";
import React from "react";
import AirdropNavbar from "./AirdropNavbar";
import AirdropNavbarMobile from "./AirdropNavbarMobile";

const AirdropHeader = ({ isTransparent, isHeaderText }) => {
  const isMobile = useMediaQuery("(max-width:1225px)");

  return (
    <div>
      {isMobile ? (
        <AirdropNavbarMobile
          isTransparent={isTransparent}
          isHeaderText={isHeaderText}
        />
      ) : (
        <AirdropNavbar isTransparent={isTransparent} isHeaderText={isHeaderText} />
      )}
    </div>
  );
};

export default AirdropHeader;