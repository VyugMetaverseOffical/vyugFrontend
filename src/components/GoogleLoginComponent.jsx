import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginComponent = ({ onGoogleLoginSuccess, onGoogleLoginFailure }) => {
  const token = "509166711885-iershoj904od9nu8a3am1h1k3phsrc8g.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={token}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          onGoogleLoginSuccess(credentialResponse);
        }}
        onFailure={onGoogleLoginFailure}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      /> 
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
