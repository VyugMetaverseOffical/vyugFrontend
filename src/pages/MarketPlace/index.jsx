import React, { lazy, Suspense } from "react";
import Starter from "../../components/Starter";
import { Navigate, Route, Routes } from "react-router-dom";

const NFT_marketPlace = lazy(() => import("./NFT_marketPlace"));


const MarketPlace = () => {
  return (
    <Suspense fallback={<Starter />}>
      <Routes>
        <Route path="/*" element={<Navigate to="/trade-center/market-place" replace={true} />} />
        <Route path="market-place" element={<NFT_marketPlace />} />
      </Routes>
    </Suspense>
  );
};

export default MarketPlace;
