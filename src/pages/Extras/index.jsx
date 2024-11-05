// import React, { Suspense, lazy } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Starter from "../../components/Starter";

// // Lazy load components
// const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
// const TermsOfUse = lazy(() => import("./TermsOfUse"));

// const Extras = () => {
//   return (
//     <Suspense fallback={<Starter />}>
//       <Routes>
//         <Route path="/*" element={<Navigate to="privacy-policy" replace={true} />} />
//         <Route path="privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="terms-of-use" element={<TermsOfUse />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default Extras;
