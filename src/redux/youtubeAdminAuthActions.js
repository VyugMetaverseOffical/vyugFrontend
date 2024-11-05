import { createAsyncThunk } from "@reduxjs/toolkit";
import { protectedApiPostYoutubeAdmin } from "../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../components/toast";
import React from "react";

export const loginYoutubeAdminUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      const resp = await protectedApiPostYoutubeAdmin("admin/auth/login", userData);
      console.log(resp)
      toast.success(
        React.createElement(ToastSuccess, { data: "Login successful" }),
        SuccessStyling
      );
      return resp;
    } catch (error) {
      toast.error(
        React.createElement(ToastError, {
          data: error.response?.data?.message?.message,
        }),
        ErrorStyling
      );
      throw error.response?.data.message;
    }
  }
);

export const registerYoutubeAdminUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    try {
      const resp = await protectedApiPostYoutubeAdmin("youtubeAdmin/register", userData);
      toast.success(
        React.createElement(ToastSuccess, { data: "Register successful" }),
        SuccessStyling
      );
      return resp.data;
    } catch (error) {
      toast.error(
        React.createElement(ToastError, {
          data: error.response?.data.error
            ? error.response?.data.error
            : error.response?.data.message,
        }),
        ErrorStyling
      );
      throw error.response?.data.message;
    }
  }
);
