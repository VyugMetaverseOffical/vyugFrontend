import { useMediaQuery } from "@mui/material";
import React from "react";
import Presale from "./Presale";
import PresaleMobile from "./PresaleMobile";
import Presale2 from "./Presale2";

const CryptoPresale = () => {
  const isMobile = useMediaQuery("(min-width: 750px)");
  return <>{isMobile ? <Presale2 /> : <PresaleMobile />}</>;
};

export default CryptoPresale;
