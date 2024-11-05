import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { protectedApiPost } from "../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../components/toast";
import React from "react";

export const loginUser = createAsyncThunk("./", async (userData) => {
  try {
    const response = await protectedApiPost("users/login", userData);
    toast.success(
      React.createElement(ToastSuccess, { data: "Login successful" }),
      SuccessStyling
    );

    return response;
  } catch (error) {
    console.log(error, error.response?.data);
    if(error.message === "Network Error") {
      toast.error(
        React.createElement(ToastError, {
          data: "Network error occurred. Please try again later.",
        }),
        ErrorStyling
      );
      throw error;
    }
    toast.error(
      React.createElement(ToastError, {
        data: error.response?.data?.message?.message,
      }),
      ErrorStyling
    );
    throw error;
  }
});
export const loginUserWithGoogle = createAsyncThunk(
  "users/googleLogin",
  async (object) => {
    try {
      const response = await protectedApiPost("users/google-login", object);
      console.log(response);
      toast.success(
        React.createElement(ToastSuccess, { data: "Login successful" }),
        SuccessStyling
      );
      return response;
    } catch (error) {
      toast.error(
        React.createElement(ToastError, {
          data: error.response?.data?.message || error.message,
        }),
        ErrorStyling
      );
      throw error;
    }
  }
);
