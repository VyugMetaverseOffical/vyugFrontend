import { createSlice } from '@reduxjs/toolkit';
import { loginUser,loginUserWithGoogle } from './userAuthActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { protectedApiGet } from '../apis/api';
import toast from 'react-hot-toast';
import { ErrorStyling, ToastError } from '../components/toast';
import React from 'react';


const initialState = {
  loading: false,
  authToken: null,
  error: null,
};

try {
  initialState.authToken = localStorage.getItem("token");
} catch (error) {
  console.log("Could not access localStorage:", error);
}

export const counterSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action)
      state.user = action.payload; // Set the bearer token
    },
    logout: (state) => {
      state.authToken = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Google login fulfilled payload:", action.payload);
        state.user = action.payload.user;
        state.authToken = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(loginUserWithGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Google login fulfilled payload:", action.payload); // Add t
        state.user = action.payload.user;
        state.authToken = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.error = null;
      })
      .addCase(loginUserWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default counterSlice.reducer;


const { setUser, logout } = counterSlice.actions;
export const useAuth = () => {
  const { authToken, user, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const setLogin = (payload) => {
    dispatch(loginUser(payload));
  };
  const setGoogleLogin = (payload) => {
    dispatch(loginUserWithGoogle(payload));
  };
  const logoutUser = () => {
    dispatch(logout());
  };

  const setLoginUser = (payload) => {
    dispatch(setUser(payload));
  };

  const fetchUser = async () => {
    try {
      const response = await protectedApiGet('users/me');
      const { user } = response;
      console.log(user)
      dispatch(setUser(user));
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
    setLogin,
    setGoogleLogin,
    setLoginUser,
    logoutUser,
    fetchUser,
    authToken,
    user,
    isLoggedIn: !!authToken && !!user,
  };
};
