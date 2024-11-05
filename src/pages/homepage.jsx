import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import ScrambleText from '../components/deScramble';
import GoogleLoginComponent from '../components/GoogleLoginComponent';
import MetaMaskConnect from '../components/metamask';
import Header from '../components/header';

const HomePage = () => {
  const navigate = useNavigate();
  const [isSignup, setSignup] = useState(false);
  const [isRegister, setRegister] = useState(true);
  const [isVerified, setVerified] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isOtp, setOtp] = useState(false);
  const [newOtp, setNewOtp] = useState("");

  const [username, setUsername] = useState("");

  const handleAlertClose = () => {
    setShowAlert(false);
  };
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
    
      // alert("Please enter a username");
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/validate-username",
        { username }
      );
      if (response.status === 200) {
        setSignup(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
     
        setShowAlert(true);
        setUsername(""); // Clear the input field
      } else {
        
        setShowAlert(true);
      }
    }
  };
  const handleGoogleLoginSuccess = async (response) => {
    if (response.credential) {
      const token = response.credential;
      try {
        const userInfo = await handleGoogleResponse(token);

        // Now you can use the user information as needed
      } catch (error) {
        console.error("Error:", error.message);
        // Handle error appropriately
      }
    }
  };

  const handleGoogleResponse = async (token) => {
    try {
      const response = await axios.get(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
      );
      if (response.data.email_verified) {
        let email = response.data.email;
        const response1 = await axios.post(
          "http://localhost:5000/api/users/google-login",
          { email }
        );
        if (response1.status === 200) {
          return response1.data.token;
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
      throw error; // Rethrow the error for handling in the caller function
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  const signupHandler = () => {
    setSignup(true);
  };

  const signinHandler = () => {
    setSignup(false);
  };

  const submitSignIn = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    const formData = new FormData(e.target);
    const userIdOrEmail = formData.get("email");
    const password = formData.get("password");
    const signinobject = {
      email: userIdOrEmail,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        signinobject
      );
      console.log(response.status);

      if (response.status === 200) {
        console.log(response)
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error); // Display the error message in an alert
      } else {
        alert("An error occurred. Please try again."); // Default error message
      }
      e.target.reset();
    }
  };

  const submitSignUp = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const password1 = formData.get("confirm-password");
    if (!email || !password || !password1) {
      alert("Please fill all the fields");
      setShowAlert(true);
    } else if (password !== password1) {
      setAlertMessage("Confirm Password does not match");
      setShowAlert(true);
    } else {
      const signupobject = {
        email: email,
        password: password,
      };
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/register",
          signupobject
        );
        console.log(response.status);

        if (response.status === 200) {
          setEmail(response.data.email);
          setRegister(true);
          if (response.data.gmailStatus) {
            setVerified(true);
          }
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          alert(error.response.data.error); // Display the error message in an alert
        } else {
          alert("An error occurred. Please try again."); // Default error message
        }
        e.target.reset();
      }
    }
  };

  useEffect(() => {}, [isSignup, isRegister, isVerified]);
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const handleSend = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/user-otp", {
        newOtp,
      });
      if (response.status === 200) {
        setVerified(true);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Handle error appropriately
    }
  };

  return (
    <div className="">
      {!isSignup ? (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <form onSubmit={submitSignIn}>
            <div>
              <div className="mb-2">UserId or Email</div>
              <input
                type="text"
                name="email"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <div className="mb-2">Password</div>
              <input
                type="password"
                name="password"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Sign in
              </button>
              <div className="mt-4">
                Do not have a user account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={signupHandler}
                >
                  Sign up
                </span>
              </div>
              <GoogleLoginComponent
                onGoogleLoginSuccess={handleGoogleLoginSuccess}
                onGoogleLoginFailure={handleGoogleLoginFailure}
              />
            </div>
          </form>
        </div>
      ) : !isRegister && !isVerified ? (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <form onSubmit={submitSignUp}>
            <div>
              <div className="mb-2">Email</div>
              <input
                type="text"
                name="email"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <div className="mb-2">Password</div>
              <input
                type="password"
                name="password"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <div className="mb-2">Confirm Password</div>
              <input
                type="password"
                name="confirm-password"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />

              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Register
              </button>
              <div className="mt-4">
                Already Signed-In{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={signinHandler}
                >
                  Sign in
                </span>
              </div>
            </div>
          </form>
        </div>
      ) : isRegister && !isVerified ? (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <form>
            <div>
              <div className="mb-2">Gmail Verification</div>
              <div>{email}</div>
              {!isVerified ? (
                !isOtp ? (
                  <button
                    onClick={() => {
                      alert("otp sent to your gmail");
                      setOtp(true);
                    }}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Verify
                  </button>
                ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={newOtp}
                      onChange={(e) => setNewOtp(e.target.value)}
                      style={{
                        border: "2px solid black",
                        padding: "8px",
                        borderRadius: "5px",
                      }}
                    />
                    <button
                      onClick={handleSend}
                      style={{
                        marginLeft: "8px",
                        backgroundColor: "blue",
                        color: "white",
                        padding: "8px",
                        borderRadius: "5px",
                      }}
                    >
                      Send
                    </button>
                  </div>
                )
              ) : (
                <div style={{ color: "green" }}>Verified</div>
              )}
              {isRegister && isVerified && (
                <button
                  onClick={() => setVerified(true)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Next
                </button>
              )}
            </div>
            <div className="mt-4">
              Already Signed-In{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={signinHandler}
              >
                Sign in
              </span>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="min-h-screen flex justify-center items-center max-w-xl w-full p-8 bg-white rounded-lg shadow-lg">
            <form className="w-full">
              <div>Create user name</div>
              <div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />

                <button
                  onClick={handleSubmit()}
                  type="submit"
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Create
                </button>
              </div>
              <div className="mt-4">
                Already Signed-In{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={signinHandler}
                >
                  Sign in
                </span>
              </div>
            </form>
          </div>
          <GoogleLoginComponent
            onGoogleLoginSuccess={handleGoogleLoginSuccess}
            onGoogleLoginFailure={handleGoogleLoginFailure}
          />
        </div>
      )}
      <div>
        <button
          onClick={() => navigate("/free-dashboard")}
          className="mt-4 mr-2  bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/market-place")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Marketplace
        </button>
      </div>
      {/* <CustomAlert show={showAlert} handleClose={handleAlertClose} message={alertMessage} /> */}
    </div>
  );
};

export default HomePage;
