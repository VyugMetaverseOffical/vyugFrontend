import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Starter from "../../components/Starter";

// Lazy load components
const Desert = lazy(() => import("./desert"));
const Forest = lazy(() => import("./forest"));
const Water = lazy(() => import("./water"));
const Island = lazy(() => import("./island"));
const Mountain = lazy(() => import("./mountain"));
const Land = lazy(() => import("./land"));
const Regions = lazy(() => import("./Regions"));

const Core = () => {
  return (
    <Suspense fallback={<Starter />}>
      <Routes>
        <Route path="/*" element={<Navigate to="/regions" replace={true} />} />
        <Route path="/" element={<Regions />} />
        <Route path="virtual-reality-in-desert" element={<Desert />} />
        <Route path="virtual-reality-in-forest" element={<Forest />} />
        <Route path="virtual-reality-in-water-body" element={<Water />} />
        <Route path="virtual-reality-in-island" element={<Island />} />
        <Route path="virtual-reality-in-mountain" element={<Mountain />} />
        <Route path="virtual-reality-in-plains" element={<Land />} />
      </Routes>
    </Suspense>
  );
};

export default Core;
