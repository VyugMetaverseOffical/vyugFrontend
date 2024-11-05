import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { API_URL } from "../apis/url";
import { useAuth } from "../redux/counterSlice";
import { protectedApiGet } from "../apis/api";
import { NoAttempt } from "../components/NoAttempt";
import { NoLogin } from "../components/NoLogin";
import toast from "react-hot-toast";
import { ErrorStyling, ToastError } from "../components/toast";
import { Modal, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { NoStream } from "../components/NoStream";
import { event } from "jquery";

const useInactivityTimer = (timeoutDuration = 300000) => {
  // 5 minutes
  const navigate = useNavigate();
  const [timeoutId, setTimeoutId] = useState(null);

  const resetTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      navigate("/"); // Redirect to home page
    }, timeoutDuration);
    setTimeoutId(id);
  };

  useEffect(() => {
    resetTimer();

    const events = ["mousemove", "keydown", "scroll", "click"];

    const handleActivity = () => {
      console.log("Inside handleActivity...");
      resetTimer();
    };

    events.forEach((event) => window.addEventListener(event, handleActivity));

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
      clearTimeout(timeoutId);
    };
  }, [timeoutDuration]);

  return resetTimer; // Optional: Return the function if needed
};

const PopUp = ({ status, setStatus }) => {
  const isMobile = useMediaQuery("(max-width:500px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "300px",
    bgcolor: "#242424",
    borderRadius: "2rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: 24,
    p: 0,
  };

  return (
    <div>
      <Modal
        open={status == 0}
        onClose={() => setStatus(1)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            onClick={() => setStatus(1)}
            style={{
              width: "fit-content",
              marginLeft: "auto",
              padding: "1.25rem",
            }}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.5" cy="10.5" r="10.5" fill="white" />
              <path
                d="M15.0039 6L6.00232 15.0016"
                stroke="#242424"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M6 6L15.0016 15.0016"
                stroke="#242424"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {/* <Typography
            style={{
              color: "#fff",
              textAlign: "center",
              paddingBottom: "2.5rem",
              paddingInline: isMobile ? "3rem" : "4.5rem",
              fontSize: isMobile ? "18px" : "20px",
            }}
            className="header"
          >
            Attention!
          </Typography> */}
          <Typography
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: isMobile ? "14px" : "18px",
              paddingInline: "1.5rem",
              paddingBottom: "3rem",
            }}
            className="description"
          >
            This is a beta version. You may experience some latency. Please
            ensure you have a strong internet connection for optimal streaming.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const ComingSoon = ({ status, setStatus, time }) => {
  const isMobile = useMediaQuery("(max-width:500px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "300px",
    bgcolor: "#242424",
    borderRadius: "2rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: 24,
    p: 0,
  };

  return (
    <div>
      <Modal
        open={status == 0}
        onClose={() => setStatus(1)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            onClick={() => setStatus(1)}
            style={{
              width: "fit-content",
              marginLeft: "auto",
              padding: "1.25rem",
            }}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.5" cy="10.5" r="10.5" fill="white" />
              <path
                d="M15.0039 6L6.00232 15.0016"
                stroke="#242424"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M6 6L15.0016 15.0016"
                stroke="#242424"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <Typography
            style={{
              color: "#fff",
              textAlign: "center",
              paddingBottom: "2.5rem",
              paddingInline: isMobile ? "3rem" : "4.5rem",
              fontSize: isMobile ? "18px" : "20px",
            }}
            className="header"
          >
            Attention!
          </Typography>
          <Typography
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: isMobile ? "14px" : "18px",
              paddingInline: "1.5rem",
              paddingBottom: "3rem",
            }}
            className="description"
          >
            {`You'll be redirected to home page after ${time} minute${
              time > 1 ? "s" : ""
            }`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const Stream = () => {
  // const [modalStatus1, setModalStatus1] = useState(1); // State to manage modal visibility
  const [modalStatus2, setModalStatus2] = useState(1); // State to manage modal visibility
  const [streamPopup, setStreamPopup] = useState(1); // State to manage modal visibility
  const [popup, setPopup] = useState(0); // State to manage modal visibility
  const navigate = useNavigate(); // Hook to programmatically navigate
  const socketRef = useRef(null);
  const [isOnline, setOnlineStatus] = useState(false);
  const { user, isLoggedIn } = useAuth();
  const [attempt, setAttempt] = useState(false);
  const [link, setLink] = useState("");
  const [hasModal1BeenShown, setHasModal1BeenShown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [inactivityTimer, setInactivityTimer] = useState(300000);
  // useInactivityTimer();

  const linkMapping = {
    3001: "https://play1.vyugmetaverse.com/?UseMic=true&HoveringMouse=true", // Rick Astley - Never Gonna Give You Up
    3002: "https://play2.vyugmetaverse.com/?UseMic=true&HoveringMouse=true", // Katy Perry - Roar
    3003: "https://play3.vyugmetaverse.com/?UseMic=true&HoveringMouse=true", // Another video, add your own link
    3004: "https://play4.vyugmetaverse.com/?UseMic=true&HoveringMouse=true", // Rick Astley - Never Gonna Give You Up
    3005: "https://play5.vyugmetaverse.com/?UseMic=true&HoveringMouse=true", // Katy Perry - Roar
    3006: "https://play6.vyugmetaverse.com/?UseMic=true&HoveringMouse=true", // Another video, add your own link
    3007: "https://play7.vyugmetaverse.com/?UseMic=true&HoveringMouse=true", // Rick Astley - Never Gonna Give You Up
    3008: "https://play8.vyugmetaverse.com/?UseMic=true&HoveringMouse=true", // Katy Perry - Roar
  };
  console.log("abhi");

  // const resetTimer = (modalTimerId) => {
  //   if (timeoutId) {
  //     clearTimeout(timeoutId);
  //   }
  //   if (modalTimerId) {
  //     clearTimeout(modalTimerId);
  //   }
  //   const id = setTimeout(() => {
  //     navigate("/"); // Redirect to home page
  //   }, 300000);
  //   setTimeoutId(id);
  //   const modalTimeout1 = setTimeout(() => {
  //     if (!hasModal1BeenShown) {
  //       setModalStatus1(0); // Open the modal after 4 mins
  //       setHasModal1BeenShown(true); // Mark modal as shown
  //     }
  //   }, 240000);
  //   console.log("Timer Reset complete...", id);
  //   return modalTimeout1
  // };

  // useEffect(() => {
  //   let modalTimeoutId = resetTimer();

  //   const events = ["mousemove", "keydown", "scroll", "click"];

  //   const handleActivity = () => {
  //     console.log("Inside handleActivity...");
  //     resetTimer(modalTimeoutId);
  //   };

  //   events.forEach((event) => window.addEventListener(event, handleActivity));

  //   return () => {
  //     events.forEach((event) =>
  //       window.removeEventListener(event, handleActivity)
  //     );
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (inactivityTimer === 60000) {
  //     setModalStatus1(0); //Open when only 1 minute is left
  //     setHasModal1BeenShown(true);
  //   }
  //   if (inactivityTimer > 0) {
  //     setInactivityTimer((prev) => prev - 1000);
  //   }

  //   const handleActivity = () => {
  //     setInactivityTimer(300000);
  //     setHasModal1BeenShown(false);
  //   };

  //   const events = ["mousemove", "keydown", "scroll", "click"];

  //   events.forEach((event) => window.addEventListener(event, handleActivity));

  //   return () => {
  //     events.forEach((event) =>
  //       window.removeEventListener(event, handleActivity)
  //     );
  //   };
  // }, [inactivityTimer]);

  useEffect(() => {
    const fetchData = async () => {
      if (user && user._id) {
        setOnlineStatus(true);
        try {
          const response = await protectedApiGet(`userdata/user-streams`);
          if (response.status !== 200) {
            setAttempt(false);
          } else {
            setAttempt(true);
            socketRef.current = io("https://api.vyug.io", {
              extraHeaders: {
                "Access-Control-Allow-Origin": "*", // Allow all origins
              },
            });

            socketRef.current.on("hello", (arg) => {
              console.log(arg);
            });

            socketRef.current.emit("addUsers", user._id);
            socketRef.current.emit("join chat", { userId: user._id });

            socketRef.current.on("message", (arg) => {
              console.log(arg);
              if (arg?.success === false) {
                setStreamPopup(0);
                return;
              }
              setLink(arg.link);
            });
          }
        } catch (error) {
          console.error("Error in fetching data:", error);
        }
      } else {
        toast.error(
          <ToastError data={"Failed to export avatar. Please try again"} />,
          ErrorStyling
        );
      }
    };

    fetchData();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [user]);
  console.log(link);
  useEffect(() => {
    if (attempt) {
      // const modalTimeout1 = setTimeout(() => {
      //   if (!hasModal1BeenShown) {
      //     setModalStatus1(0); // Open the modal after 4 mins
      //     setHasModal1BeenShown(true); // Mark modal as shown
      //   }
      // }, 240000);
      const modalTimeout2 = setTimeout(() => {
        setModalStatus2(0); // Open the modal after 44 mins
      }, 2640000);
      const redirectTimeout = setTimeout(() => {
        navigate("/"); // Redirect to homepage
      }, 2700000); // 45 mins
      return () => {
        // clearTimeout(modalTimeout1);
        clearTimeout(modalTimeout2);
        clearTimeout(redirectTimeout);
      };
    }
  }, [attempt, navigate]);

  useEffect(() => {
    const id = setTimeout(() => {
      // navigate(-1);
      window.history.go(-2)
    }, 180000);

    return () => clearTimeout(id);
  });

  if (!isOnline && !attempt) {
    return <NoLogin />;
  } 
  // else if (isOnline && !attempt) {
  //   return <NoAttempt />;
  // } 
  else if (streamPopup === 0) {
    return <NoStream />;
  } else {
    return (
      <>
        <iframe
          className="h-screen w-screen"
          src={linkMapping[link] || "about:blank"}
          // src={"https://matchmaker.vyugmetaverse.com"}
          title="YouTube video"
          frameBorder="0"
          style={{ cursor: "auto" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <ComingSoon
          status={modalStatus1}
          setStatus={setModalStatus1}
          time={1}
        /> */}
        {/* <ComingSoon
          status={modalStatus2}
          setStatus={setModalStatus2}
          time={1}
        /> */}
        {/* <PopUp status={popup} setStatus={setPopup} /> */}
      </>
    );
  }
};

export default Stream;
