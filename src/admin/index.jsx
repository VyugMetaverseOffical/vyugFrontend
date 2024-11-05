import { Routes, Route } from "react-router-dom";
import AdminLogin from "./auth/Login";
import Layout from "./Layout";


function AdminPanel() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default AdminPanel;
