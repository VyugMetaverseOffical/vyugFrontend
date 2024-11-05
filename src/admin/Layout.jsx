import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import Buzz from "./Buzz";
import LandingLayout from "./LandingLayout";
import Key from "./Key";
import NewReferral from "./presale/new_referral";
import CommissionTargetForm from "./presale/new-commission";
import Overview from "./presale/Overview";
import Referral from "./presale/referral";
import YoutuberDetails from "./presale/youtuber_details";
import YoutuberInfo from "./presale/youtuber_info";
import UserDetails from "./presale/user_details";
import { useAdminAuth } from "./auth/adminAuthSlice";
import { Navigate,useNavigate } from "react-router-dom";
import { useEffect   } from "react";


function Layout() {
  const { admin, adminAuthToken,fetchAdmin } = useAdminAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if(!admin && adminAuthToken){
      fetchAdmin()
    } else if(!admin && !adminAuthToken){
      navigate("/admin/login")
    }
  }, [])
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div className="w-[80%] px-7">
          <Searchbar />
          <Routes>
            <Route path="/*" element={<LandingLayout />} />
            <Route path="buzz/*" element={<Buzz />} />
            <Route path="addKey" element={<Key />} />
            <Route path="overview" element={<Overview />} />
            <Route path="user-details" element={<UserDetails />} />
            <Route path="youtuber-info" element={<YoutuberInfo />} />
            <Route path="youtuber-details" element={<YoutuberDetails />} />
            <Route path="new-referral" element={<NewReferral/>} />
            <Route path="referral" element={<Referral />} />
            <Route path="new-commission" element={<CommissionTargetForm />} />
        
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
