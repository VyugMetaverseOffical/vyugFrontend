import { createSlice } from "@reduxjs/toolkit";
import { loginAirdropUser, registerAirdropUser } from "./airdropAuthActions";
import { useDispatch, useSelector } from "react-redux";
import { protectedApiGet } from "../apis/api";
import axios from "axios";
import { API_URL } from "../apis/url";
import toast from "react-hot-toast";
import { ErrorStyling, ToastError } from "../components/toast";
import React from "react";

const initialState = {
  loading: false,
  authToken: localStorage.getItem("airdrop_token"),
  airdropUser: null,
  error: null,
};

export const airdropAuthSlice = createSlice({
  name: "airdrop",
  initialState,
  reducers: {
    setAirdropUser: (state, action) => {
      console.log(action);
      state.airdropUser = action.payload.user; // Set the bearer token
      if (action.payload.token) {
        state.authToken = action.payload.token;
        localStorage.setItem("airdrop_token", action.payload.token);
      }
    },
    logout: (state) => {
      state.authToken = null;
      state.airdropUser = null;
      localStorage.removeItem("airdrop_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAirdropUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAirdropUser.fulfilled, (state, action) => {
        state.loading = false;
        state.airdropUser = action.payload.user;
        state.authToken = action.payload.token;
        localStorage.setItem("airdrop_token", action.payload.token);
        state.error = null;
      })
      .addCase(loginAirdropUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.airdropUser = null;
        state.authToken = null;
      })
      .addCase(registerAirdropUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAirdropUser.fulfilled, (state, action) => {
        state.loading = false;
        state.airdropUser = action.payload.user;
        state.authToken = action.payload.authToken;
        localStorage.setItem("airdrop_token", action.payload.authToken);
        state.error = null;
      })
      .addCase(registerAirdropUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.airdropUser = null;
        state.authToken = null;
      });
  },
});

export default airdropAuthSlice.reducer;

const { setAirdropUser, logout } = airdropAuthSlice.actions;

export const useAirdropAuth = () => {
  const { authToken, airdropUser, loading } = useSelector(
    (state) => state.airdrop
  );
  const dispatch = useDispatch();

  const setLoginAirdrop = (payload) => {
    dispatch(loginAirdropUser(payload));
  };
  const logoutUser = () => {
    dispatch(logout());
  };

  const setLoginUser = (payload) => {
    dispatch(setAirdropUser(payload));
  };

  const registerUser = (payload) => {
    dispatch(registerAirdropUser(payload));
  };

  const fetchAirdropUser = async () => {
    try {
      const Api = axios.create({
        baseURL: API_URL + "api/",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("airdrop_token"),
        },
      });
      const response = await Api.get("airdrop/me");
      console.log(response.data);
      const { user } = response.data;
      dispatch(setAirdropUser(response.data));
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
    setLoginAirdrop,
    setLoginUser,
    logoutUser,
    fetchAirdropUser,
    registerUser,
    authToken,
    airdropUser,
    isLoggedIn: !!authToken && !!airdropUser,
  };
};
