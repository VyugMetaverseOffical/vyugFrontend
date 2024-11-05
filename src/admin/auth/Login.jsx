import vyugLogo from "../assets/Vyug_LOGO.webp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useState } from "react";
import { baseURL } from "../../apis/api";
import { useAdminAuth } from "./adminAuthSlice";
import { Navigate } from "react-router-dom";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { admin, adminAuthToken, loginAdmin, loading } = useAdminAuth();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(baseURL + "admin/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("login success", response);
        toast.success(
          <ToastSuccess data={"Login successful"} />,
          SuccessStyling
        );
        loginAdmin(response.data);
      })
      .catch((error) => {
        toast.error(
          <ToastError
            data={
              error?.response.data?.message?.message || "some error occurred!"
            }
          />,
          ErrorStyling
        );
        console.log("Login Failed", error?.response.data?.message);
      });
  };

  if (admin && adminAuthToken) {
    return <Navigate to={"/admin"} />;
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-stretch gap-2 max-w-[500px] mx-auto">
      <img src={vyugLogo} alt="" className="w-[5rem] mx-auto" />
      <h1 className="header text-2xl text-center">Access the Heart of VYUG</h1>
      <p className="description text-base text-center">
        Log in to manage, create, and shape the virtual world.
      </p>
      <form className="flex flex-col justify-start items-stretch gap-4 px-16 my-3">
        <div className="w-full flex flex-col">
          <label
            htmlFor="email"
            className="header text-base text-[#242424] px-4"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="description text-base text-[#242424] border-[1px] border-solid border-[#242424] rounded-[5rem] outline-none px-5 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col justify-start items-stretch">
          <label
            htmlFor="password"
            className="header text-base text-[#242424] px-4"
          >
            Password
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="description text-base text-[#242424] border-[1px] border-solid border-[#242424] rounded-[5rem] outline-none px-5 py-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-[50%] right-[3%] -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <VisibilityIcon sx={{ color: "#242424" }} />
              ) : (
                <VisibilityOffIcon sx={{ color: "#242424" }} />
              )}
            </button>
          </div>
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-[#242424] text-[#fff] description font-bold text-base text-center rounded-[5rem] py-2.5 my-3"
        >
          {loading ? <CircularProgress size={"small"} /> : "Login"}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
