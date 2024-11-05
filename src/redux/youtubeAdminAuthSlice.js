import { createSlice } from "@reduxjs/toolkit";
import { loginYoutubeAdminUser, registerYoutubeAdminUser } from "./youtubeAdminAuthActions";
import { useDispatch, useSelector } from "react-redux";
import { protectedApiGet } from "../apis/api";
import axios from "axios";
import { API_URL } from "../apis/url";
import toast from "react-hot-toast";
import { ErrorStyling, ToastError } from "../components/toast";
import React from "react";

const initialState = {
  loading: false,
  authToken: localStorage.getItem("youtubeAdmin_token"),
  youtubeAdminUser: null,
  error: null,
};

export const youtubeAdminAuthSlice = createSlice({
  name: "youtubeAdmin",
  initialState,
  reducers: {
    setYoutubeAdminUser: (state, action) => {
      console.log(action);
      state.youtubeAdminUser = action.payload.user; // Set the bearer token
      if (action.payload.token) {
        state.authToken = action.payload.token;
        localStorage.setItem("youtubeAdmin_token", action.payload.token);
      }
    },
    logout: (state) => {
      state.authToken = null;
      state.youtubeAdminUser = null;
      localStorage.removeItem("youtubeAdmin_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginYoutubeAdminUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginYoutubeAdminUser.fulfilled, (state, action) => {
        state.loading = false;
        state.youtubeAdminUser = action.payload.user;
        state.authToken = action.payload.token;
        localStorage.setItem("youtubeAdmin_token", action.payload.token);
        state.error = null;
      })
      .addCase(loginYoutubeAdminUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.youtubeAdminUser = null;
        state.authToken = null;
      })
      .addCase(registerYoutubeAdminUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerYoutubeAdminUser.fulfilled, (state, action) => {
        state.loading = false;
        state.youtubeAdminUser = action.payload.user;
        state.authToken = action.payload.authToken;
        localStorage.setItem("youtubeAdmin_token", action.payload.authToken);
        state.error = null;
      })
      .addCase(registerYoutubeAdminUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.youtubeAdminUser = null;
        state.authToken = null;
      });
  },
});

export default youtubeAdminAuthSlice.reducer;

const { setYoutubeAdminUser, logout } = youtubeAdminAuthSlice.actions;

export const useYoutubeAdminAuth = () => {
  const { authToken, youtubeAdminUser, loading } = useSelector(
    (state) => state.youtubeAdmin
  );
  const dispatch = useDispatch();

  const setLoginYoutubeAdmin = (payload) => {
    dispatch(loginYoutubeAdminUser(payload));
  };
  const logoutYoutubeAdmin = () => {
    dispatch(logout());
  };

  const setLoginUser = (payload) => {
    dispatch(setYoutubeAdminUser(payload));
  };

  const registerUser = (payload) => {
    dispatch(registerYoutubeAdminUser(payload));
  };

  const fetchYoutubeAdminUser = async () => {
    try {
      const Api = axios.create({
        baseURL: API_URL + "api/",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("youtubeAdmin_token"),
        },
      });
      const response = await Api.get("admin/auth/me");
      console.log(response.data);
      const { user } = response.data;
      dispatch(setYoutubeAdminUser(response.data));
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error(
          React.createElement(ToastError, {
            data: "Session expired!",
          }),
          ErrorStyling
        );
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
    setLoginYoutubeAdmin,
    setLoginUser,
    logoutYoutubeAdmin,
    fetchYoutubeAdminUser,
    registerUser,
    authToken,
    youtubeAdminUser,
    isLoggedIn: !!authToken && !!youtubeAdminUser,
  };
};
