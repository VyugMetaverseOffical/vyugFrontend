import React, { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Starter from "../../components/Starter";
import { useYoutubeAdminAuth } from "../../redux/youtubeAdminAuthSlice";
const Login = lazy(() => import("./Login"));

const Dashboar = lazy(() => import("./Dashboar"));

const Index = () => {
 const { youtubeAdminUser, authToken, fetchYoutubeAdminUser } = useYoutubeAdminAuth();
   const navigate = useNavigate();

   useEffect(() => {
     if (!youtubeAdminUser && authToken) {
      fetchYoutubeAdminUser();
    } else if (!youtubeAdminUser && !authToken) {
       navigate("/youtube-admin/login");
     }
   }, []);
  return (
    <Suspense fallback={<Starter />}>
      <Routes>
        <Route
          path="/*"
          element={<Navigate to="/youtube-admin/login" replace={true} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboar />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
