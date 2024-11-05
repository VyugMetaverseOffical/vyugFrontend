import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Starter from "../../components/Starter";

// Lazy load components
const Education = lazy(() => import("./education"));
const Entertainment = lazy(() => import("./entertainment"));
const Game = lazy(() => import("./game"));
const Corporate = lazy(() => import("./corporate"));
const Commercial = lazy(() => import("./commercial"));
const Event = lazy(() => import("./event"));
const Tourism = lazy(() => import("./tourism"));
const Trading = lazy(() => import("./trading"));
const Hospitality = lazy(() => import("./hospitality"));
const Sectors = lazy(() => import("./Sectors"));


const DigitalReality = () => {
  return (
    <Suspense fallback={<Starter />}>
      <Routes>
        <Route path="/*" element={<Navigate to="/sectors" replace={true} />} />
        <Route path="/" element={<Sectors />} />
        <Route path="virtual-reality-in-education" element={<Education />} />
        <Route path="virtual-reality-in-entertainment" element={<Entertainment />} />
        <Route path="virtual-reality-in-sports" element={<Game />} />
        <Route path="virtual-reality-in-corporate" element={<Corporate />} />
        <Route path="virtual-reality-in-commercial" element={<Commercial />} />
        <Route path="virtual-reality-in-event" element={<Event />} />
        <Route path="virtual-reality-in-tourism" element={<Tourism />} />
        <Route path="virtual-reality-in-sustainability" element={<Trading />} />
        <Route path="virtual-reality-in-hospitality" element={<Hospitality />} />
      </Routes>
    </Suspense>
  );
};

export default DigitalReality;
