import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin } from "./adminAuthActions";
import { useDispatch, useSelector } from "react-redux";
import { protectedApiGet } from "../../apis/api";
import axios from "axios";
import { API_URL } from "../../apis/url";
import { ErrorStyling, ToastError } from "../../components/toast";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  adminAuthToken: localStorage.getItem("admin_token"),
  admin: null,
  error: null,
};

export const airdropAuthSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      console.log(action);
      state.admin = action.payload.user;
      if (action.payload.token) {
        state.adminAuthToken = action.payload.token;
        localStorage.setItem("admin_token", action.payload.token);
      }
    },
    logout: (state) => {
      state.adminAuthToken = null;
      state.admin = null;
      localStorage.removeItem("admin_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.user;
        state.adminAuthToken = action.payload.token;
        localStorage.setItem("admin_token", action.payload.token);
        state.error = null;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.admin = null;
        state.adminAuthToken = null;
      });
  },
});

export default airdropAuthSlice.reducer;

const { setAdmin, logout } = airdropAuthSlice.actions;

export const useAdminAuth = () => {
  const { adminAuthToken, admin, loading } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();

  const logoutAdmin = () => {
    dispatch(logout());
  };

  const loginAdmin = (payload) => {
    dispatch(setAdmin(payload));
  };

  const fetchAdmin = async () => {
    try {
      const Api = axios.create({
        baseURL: API_URL + "api/",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("admin_token"),
        },
      });
      const response = await Api.get("admin/auth/me");
      console.log(response);
      console.log(response.data);
      const { user } = response.data;
      dispatch(setAdmin(response.data));
    } catch (error) {
      if (error.response?.status === 401) {
        console.log("Session Error", error);
        toast.error(
          React.createElement(ToastError, {
            data: "Session expired!",
          }),
          ErrorStyling
        );
        // logoutUser();
      } else {
        toast.error(
          React.createElement(ToastError, {
            data: error?.response?.data?.message || error?.message,
          }),
          ErrorStyling
        );
      }
    }
  };

  return {
    loading,
    loginAdmin,
    logoutAdmin,
    fetchAdmin,
    adminAuthToken,
    admin,
    isAdminLoggedIn: !!adminAuthToken && !!admin,
  };
};
