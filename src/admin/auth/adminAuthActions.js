import { createAsyncThunk } from "@reduxjs/toolkit";
import { protectedApiPost } from "../../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (userData) => {
    try {
      const resp = await protectedApiPost("admin/login", userData);
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
