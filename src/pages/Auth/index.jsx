import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Starter from '../../components/Starter';
// import Authe from './Authe';

// Lazy load the components
const Login = lazy(() => import('./Login'));
const Signup = lazy(() => import('./Signup'));
const SignupOTPVerification = lazy(() => import('./SignupOTPVerification'));
const CreateAccount = lazy(() => import('./CreateAccount'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const ForgotPasswordOTPVerification = lazy(() => import('./ForgotPasswordOTPVerification'));
const ResetPassword = lazy(() => import('./ResetPassword'));

const Auth = () => {
  return (
    <Suspense fallback={<Starter />}>
      <Routes>
        <Route path="/*" element={<Navigate to="login" replace={true} />} />
        {/* <Route path="log" element={<Authe />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/signup/verify-otp" element={<SignupOTPVerification />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="forgot/verify-otp" element={<ForgotPasswordOTPVerification />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </Suspense>
  );
};

export default Auth;
