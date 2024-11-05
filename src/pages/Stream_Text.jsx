import { useEffect, useState } from "react";
import Header from "../components/Head";
import SideIcon from "../components/side-icon";
import {
  Box,
  CircularProgress,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../redux/counterSlice";
import { protectedApiPost } from "../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../components/toast";
import { Helmet } from "react-helmet-async";
import video from "../videos/dussehra_video.mp4";
import diwaliBanner from "../images/Diwali_Banner.jpg";
import diwaliMobile from "../images/diwali_mobile.png"
import video_mobile from "../videos/dussehra_video_mobile.mp4";

const initialTimings = [
  { timeSlot: "04:30 - 04:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "05:00 - 05:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "05:30 - 05:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "06:00 - 06:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "06:30 - 06:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "07:00 - 07:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "07:30 - 07:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "08:00 - 08:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "08:30 - 08:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "09:00 - 09:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "09:30 - 09:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "10:00 - 10:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "10:30 - 10:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "11:00 - 11:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "11:30 - 11:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "12:00 - 12:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "12:30 - 12:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "13:00 - 13:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "13:30 - 13:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "14:00 - 14:15", portsRow: [false, false, false, false, false] },
  { timeSlot: "14:30 - 14:45", portsRow: [false, false, false, false, false] },
  { timeSlot: "15:00 - 15:15", portsRow: [false, false, false, false, false] },
];

function convertUTCtoIST(startUTC, endUTC) {
  // Define the time difference between UTC and IST
  const timeDiffInMinutes = 5 * 60 + 30; // 5 hours and 30 minutes

  // Helper function to format time as HH:MM
  function formatTime(date) {
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // Helper function to convert a time string to a Date object
  function parseTimeToDate(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    const date = new Date(Date.UTC(1970, 0, 1, hours, minutes));
    return date;
  }

  // Convert UTC time strings to Date objects
  const startUTCDate = parseTimeToDate(startUTC);
  const endUTCDate = parseTimeToDate(endUTC);

  // Add IST time difference
  startUTCDate.setUTCMinutes(startUTCDate.getUTCMinutes() + timeDiffInMinutes);
  endUTCDate.setUTCMinutes(endUTCDate.getUTCMinutes() + timeDiffInMinutes);

  // Format the adjusted Date objects to time strings
  const startIST = formatTime(startUTCDate);
  const endIST = formatTime(endUTCDate);

  return `${startIST} - ${endIST}`;
}

const ComingSoon = ({ showPopup, setShowPopup }) => {
  const isMobile = useMediaQuery("(max-width:500px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "480px",
    bgcolor: "#242424",
    borderRadius: "2rem",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: 24,
    p: 0,
  };

  return (
    <div>
      <Modal
        open={showPopup == true}
        onClose={() => setShowPopup(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            onClick={() => setShowPopup(false)}
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
            We're Almost There!
          </Typography> */}
          <Typography
            style={{
              color: "#fff",
              textAlign: "start",
              fontSize: isMobile ? "14px" : "16px",
              paddingInline: "1.5rem",
              paddingBottom: "0.5rem",
              marginBlock: "0.5rem",
            }}
            className="description text-start"
          >
            {/* Our stream will be inactive for a few days. We’ll resume the stream
            after 26th September 2024. */}
            Dear community,
          </Typography>
          <Typography
            style={{
              color: "#fff",
              textAlign: "start",
              fontSize: isMobile ? "14px" : "16px",
              paddingInline: "1.5rem",
              paddingBottom: "0.5rem",
              marginBlock: "0.5rem",
            }}
            className="description"
          >
            The stream has been removed as our platform is under construction.
            We’ve taken down the beta version of our metaverse, which was live
            for public access.
          </Typography>
          <Typography
            style={{
              color: "#fff",
              textAlign: "start",
              fontSize: isMobile ? "14px" : "16px",
              paddingInline: "1.5rem",
              paddingBottom: "1rem",
              marginBlock: "0.5rem",
            }}
            className="description"
          >
            Thank you for being part of this journey! Development is in full
            swing, and we’ll share updates soon.
          </Typography>
          <Typography
            style={{
              color: "#fff",
              textAlign: "start",
              fontSize: isMobile ? "14px" : "16px",
              paddingInline: "1.5rem",
              // paddingBottom: "3rem",
              marginBlock: "0.5rem",
            }}
            className="description"
          >
            Best Regards,
          </Typography>
          <Typography
            style={{
              color: "#fff",
              textAlign: "start",
              fontSize: isMobile ? "14px" : "16px",
              paddingInline: "1.5rem",
              paddingBottom: "3rem",
              marginBlock: "0.5rem",
            }}
            className="description"
          >
            VYUG Team
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

function StreamText() {
  const [position, setPosition] = useState(false);
  const [showTT, setShowTT] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [bookingID, setBookingID] = useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [timings, setTimings] = useState(initialTimings);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPort, setSelectedPort] = useState({
    port: 1,
    timeSlot: null,
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { user, isLoggedIn, fetchUser } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const myBookedSlot = new Date(user?.timing);

  const getNextThreeDates = () => {
    const todaysDate = new Date();
    todaysDate.setHours(0);
    todaysDate.setMinutes(0);
    todaysDate.setSeconds(0);
    todaysDate.setMilliseconds(0);
    const nextDate1 = new Date();
    nextDate1.setDate(nextDate1.getDate() + 1);
    nextDate1.setHours(0);
    nextDate1.setMinutes(0);
    nextDate1.setSeconds(0);
    nextDate1.setMilliseconds(0);
    const nextDate2 = new Date();
    nextDate2.setDate(nextDate2.getDate() + 2);
    nextDate1.setHours(0);
    nextDate1.setMinutes(0);
    nextDate1.setSeconds(0);
    nextDate1.setMilliseconds(0);
    const nextDate3 = new Date();
    nextDate3.setDate(nextDate3.getDate() + 3);
    nextDate1.setHours(0);
    nextDate1.setMinutes(0);
    nextDate1.setSeconds(0);
    nextDate1.setMilliseconds(0);

    return [todaysDate, nextDate1, nextDate2, nextDate3];
  };

  const fetchSlots = (dateToSend) => {
    setLoadingSlots(true);
    protectedApiPost("/userdata/total-slots", {
      timing: dateToSend.toLocaleString("en-IN"),
    })
      .then((response) => {
        console.log("Ftechi", response?.filteredSlots);
        const responseArray = response?.filteredSlots || [];
        const newTimings = initialTimings.map((item) => ({
          ...item,
          portsRow: [...item.portsRow],
        }));
        if (responseArray.length === 0) {
          setTimings(newTimings);
          setLoadingSlots(false);
        } else {
          responseArray.map((bookedSlot) => {
            const bookedDateObj = new Date(bookedSlot.timing);
            const bookedTimeslot = `${bookedDateObj
              .getUTCHours()
              .toString()
              .padStart(2, "0")}:${bookedDateObj
                .getUTCMinutes()
                .toString()
                .padStart(2, "0")}`;
            const indexToUpdate = newTimings.findIndex((item) => {
              return item.timeSlot.split(" - ")[0] === bookedTimeslot;
            });
            // console.log("indexToUpdate", indexToUpdate, bookedTimeslot);
            if (indexToUpdate >= 0) {
              if (bookedSlot.slots.length === 5) {
                newTimings[indexToUpdate].portsRow = bookedSlot.slots;
              } else if (
                bookedSlot.slots.length > 0 &&
                bookedSlot.slots.length !== 5
              ) {
                newTimings[indexToUpdate].portsRow = bookedSlot.slots.concat(
                  Array(5 - bookedSlot.slots.length).fill(false)
                );
              } else if (bookedSlot.slots.length === 0) {
                newTimings[indexToUpdate].portsRow = Array(5).fill(false);
              }
            }
          });
          setTimings(newTimings);
          setSelectedPort({ port: 1, timeSlot: null });
          setLoadingSlots(false);
        }
      })
      .catch((error) => {
        console.log("Fetcng", error);
        setLoadingSlots(false);
      });
  };

  const handleCheckboxChange = (timeSlot, index) => {
    console.log("Inside handleCheckboxChange", timeSlot, index);
    setSelectedPort((preState) => ({
      ...preState,
      port: index + 1,
      timeSlot: timeSlot,
    }));
  };

  const bookSlot = (id, timeSlot) => {
    if (
      !selectedPort.port ||
      !selectedPort.timeSlot ||
      selectedPort.timeSlot !== timeSlot
    ) {
      return;
    }
    const startTimeString = selectedPort.timeSlot.split(" - ")[0];
    console.log("startTimeString", startTimeString);
    const dateToSend = new Date(selectedDate);
    dateToSend.setHours(Number(startTimeString.split(":")[0]));
    dateToSend.setMinutes(Number(startTimeString.split(":")[1]));
    dateToSend.setSeconds(0);
    dateToSend.setMilliseconds(0);

    console.log("Book Slot", {
      slot: selectedPort.port,
      date: dateToSend,
    });
    setBookingID(id);

    protectedApiPost("/userdata/create-slot", {
      port: selectedPort.port,
      timing: dateToSend.toLocaleString("en-IN"),
    })
      .then((response) => {
        setBookingID(null);
        if (response.status === 200 && response.success) {
          toast.success(
            <ToastSuccess data={"Slot Booked Successfully"} />,
            SuccessStyling
          );
          fetchUser();

          const dateToSend = new Date(selectedDate);
          dateToSend.setHours(0);
          dateToSend.setMinutes(0);
          dateToSend.setSeconds(0);
          dateToSend.setMilliseconds(0);
          if (showTT && selectedDate) {
            fetchSlots(dateToSend);
          }
        }
        console.log("Book Slot API Hit Success", response);
      })
      .catch((error) => {
        setBookingID(-1);
        const errorMessage =
          error.response?.data?.message || "Some error occurred";
        toast.error(<ToastError data={errorMessage} />, ErrorStyling);

        console.log("Book Slot API Hit Failed", error);
      });
  };

  const cancelSlot = (id, timeSlot) => {
    const startTimeString = timeSlot.split(" - ")[0];
    console.log("startTimeString", startTimeString);
    const dateToSend = new Date(selectedDate);
    dateToSend.setHours(Number(startTimeString.split(":")[0]));
    dateToSend.setMinutes(Number(startTimeString.split(":")[1]));
    dateToSend.setSeconds(0);
    dateToSend.setMilliseconds(0);

    console.log("Book Slot", {
      slot: Number(user?.port),
      date: dateToSend,
    });
    setBookingID(id);

    protectedApiPost("/userdata/cancel-slot", {
      port: Number(user?.port),
      timing: dateToSend.toLocaleString("en-IN"),
    })
      .then((response) => {
        setBookingID(null);
        if (response.status === 200 && response.success) {
          toast.success(
            <ToastSuccess data={"Slot Cancelled Successfully"} />,
            SuccessStyling
          );
          fetchUser();
          const dateToSend = new Date(selectedDate);
          dateToSend.setHours(0);
          dateToSend.setMinutes(0);
          dateToSend.setSeconds(0);
          dateToSend.setMilliseconds(0);
          if (showTT && selectedDate) {
            fetchSlots(dateToSend);
          }
        }
        console.log("Cancel Slot API Hit Success", response);
      })
      .catch((error) => {
        setBookingID(-1);
        const errorMessage =
          error.response?.data?.message || "Some error occurred";
        toast.error(<ToastError data={errorMessage} />, ErrorStyling);
        console.log("Book Slot API Hit Failed", error);
      });
  };

  window.addEventListener("scroll", function (event) {
    let scroll_y = this.scrollY;
    if (scroll_y > 0) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setHours(0);
      newDate.setMinutes(0);
      newDate.setSeconds(0);
      newDate.setMilliseconds(0);
      return newDate;
    });
  }, []);

  useEffect(() => {
    const datePicker = document.getElementById("datePicker");
    const calendarIcon = document.getElementById("calendarIcon");
    const handleClickAway = (event) => {
      if (
        datePicker &&
        calendarIcon &&
        !datePicker.contains(event.target) &&
        !calendarIcon.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("click", handleClickAway);

    return () => document.removeEventListener("click", handleClickAway);
  }, [showTT, showDatePicker]);

  useEffect(() => {
    const dateToSend = new Date(selectedDate);
    dateToSend.setHours(0);
    dateToSend.setMinutes(0);
    dateToSend.setSeconds(0);
    dateToSend.setMilliseconds(0);
    if (showTT && selectedDate) {
      fetchSlots(dateToSend);
      fetchUser();
    }
  }, [showTT, selectedDate]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Stream - VYUG Metaverse</title>
        <meta name="description" content="Stream" />
        <meta name="keywords" content="Stream" />
        <meta property="og:title" content="Stream" />
        <meta property="og:description" content="Stream" />
        <link
          rel="canonical"
          href="https://www.vyugmetaverse.com/stream-announcement"
        />
      </Helmet>
      <Header isTransparent={position} isHeaderText={true} />
      <SideIcon />
      {/* <div className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto flex flex-col mt-40 justify-center gap-2 sm:gap-4 items-center">
      <Typography
          variant="h2"
          component={"h1"}
          className="header text-[20px] text-center md:text-[26px]"
        >
         Thank You for the Advanced Support Yuggers!
        </Typography>
        <Typography
          variant="subtitle1"
          component={"p"}
          className="header text-[20px] text-center md:text-[26px]"
        >
          With your enthusiastic participation and exclusive support, we have successfully accomplished the beta streaming phase,. 
        </Typography>
        <Typography
          variant="subtitle1"
          component={"p"}
          className="header text-[12px] md:text-[16px] pb-10 font-normal"
        >
          Our beta stream phase has ended, and our platform is undergoing further development and we would appreciate your patience till further advancements. 
        </Typography>
        <Typography
          variant="subtitle1"
          component={"p"}
          className="description text-sm md:text-base text-[#303030] text-center pb-4"
        >
          Till the time being, we bring you an exciting chance to craft your ultimate digital avatars. Click on the Craft Yourself Button and create or customize your digital metaverse avatar, in the perfect way that you admire!
        </Typography>
        <div className="flex justify-center text-center items-start gap-3">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-sm md:text-base text-center"
          >
            Here’s how you can create/ customize your avatar:
          </Typography>
        </div>
        <div className="flex justify-center text-center items-start gap-3">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-sm md:text-base text-center"
          >
            <b>Log in/Sign up to the Ultimate Metaverse:</b>  Login/Sign up on our platform with your credentials.

          </Typography>
        </div>
        <div className="flex justify-center text-center items-start gap-3">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-sm md:text-base text-center"
          >
            <b>Scan the QR:</b> There’s a QR code given in the Craft section. You are requested to scan this code from your smartphones and get redirected to the Avatar Creation Page on your phones.
          </Typography>
        </div>
        <div className="flex justify-center text-center items-start gap-3">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-sm md:text-base text-center"
          >
            <b>Click Photos for Authentication:</b> Click 3 photos of yourself from the Centre, Right, and Left angles.
          </Typography>
        </div>
        <div className="flex justify-center text-center items-start gap-3">
          <Typography
            variant="subtitle2"
            component={"p"}
            className="description text-sm md:text-base text-center"
          >
            <b>Customize Your Digital Being:</b> Once, done with the photo authentication, you can come back to our craft page.
          </Typography>
        </div>
        <Typography
          variant="subtitle2"
          component={"p"}
          className="description text-sm md:text-base text-center"
        >
          Now, you can customize your avatar fully according to your favourite tastes and preferences. Customize your avatar with available wearables, accessories, footwear, eyewear, body shape, skin type, face modulation, and much more.
        </Typography>
        <Typography
          variant="subtitle2"
          component={"p"}
          className="description text-sm md:text-base text-center mt-2"
        >
         So enjoy the mesmerizing experience of the metaverse with VYUG and transform your futuristic avatars into the immersive journey of the next-era!
        </Typography>
      </div> */}
      <div className="relative">
        {isMobile ? <img src={diwaliMobile} alt="" /> : <img src={diwaliBanner} alt="" />}
        {/* {isMobile ? (
          <video
            autoPlay
            loop
            playsInline
            webkit-playsinline="true"
            className="w-full"
          >
            <source src={video_mobile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <video
            autoPlay
            loop
            playsInline
            webkit-playsinline="true"
            className="w-full"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )} */}
        {/* <Typography
          variant="subtitle2"
          component={"p"}
          className="description text-sm md:text-base text-center mt-2 font-bold"
        >
          ~~~Craft Yourself!~~~
        </Typography> */}
        <div className="absolute w-full bottom-[10%]">
          <div className="flex justify-center items-center gap-10">

            <button
              onClick={() => {
                if (isLoggedIn) {
                  // Navigate to the "Craft Yourself" page (replace with the correct route if needed)
                  navigate("/avatar");
                } else {
                  toast.error(
                    <ToastError data={"Please login first"} />,
                    ErrorStyling
                  );
                }
              }}
              className="py-3 px-6 lg:px-10 rounded-[5rem] description text-[18px] md:text-[26px]  text-[#fff] text-center font-black ease-in-out bg-[#FF5733] hover:bg-[#FFD580] active:bg-[#CC5500]"
            >
              Craft Yourself
            </button>
            <Link target="_blank" to={"https://play1.vyugmetaverse.com"} className="py-3 px-6 lg:px-10 rounded-[5rem] description text-[18px] md:text-[26px] bg-[#FF5733] text-[#fff] text-center font-black ease-in-out hover:bg-[#FFD580] active:bg-[#CC5500]"> VR Diwali</Link>
          </div>
          {/* <h6 className="header text-center text-[#fff] text-xs md:text-2xl uppercase mb-4 md:mb-6">Celebrate Dussehra!</h6> */}
          {/* <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8"> */}
          {/*<button
            onClick={() => {
              // if (isLoggedIn) {
              //   setShowTT(!showTT);
              // } else {
              //   toast.error("Please login first", {
              //     duration: 4000,
              //     position: "top-center",
              //     style: {
              //       backgroundImage:
              //         "linear-gradient(186.68deg, #ECC8C5 -33.31%, #B63937 294.12%)",
              //       color: "#fff",
              //       border: "1px solid #B53533",
              //     },
              //   });
              // }
              if (isLoggedIn) {
                // navigate("/stream");
                setShowPopup(true);
              } else {
                toast.error("Please login first", {
                  duration: 4000,
                  position: "top-center",
                  style: {
                    backgroundImage:
                      "linear-gradient(186.68deg, #ECC8C5 -33.31%, #B63937 294.12%)",
                    color: "#fff",
                    border: "1px solid #B53533",
                  },
                });
              }
              // setShowPopup(true);
            }}
            className="py-3 px-6 lg:px-10 rounded-[5rem] description text-[#fff] text-[16px] md:text-[26px] bg-[#242424] text-[#fff] text-center font-black ease-in-out hover:bg-[#6d6a6a] active:bg-[#242424] w-[200px] md:w-[300px]"
          >
            Join Stream
          </button>*/}
          {/* <a
            href="https://play19.vyugmetaverse.com/"
            target="_blank"
            className="py-3 px-6 lg:px-10 rounded-[5rem] description text-[#fff] text-[16px] md:text-[26px] bg-[#242424] text-[#fff] text-center font-black ease-in-out hover:bg-[#6d6a6a] active:bg-[#242424] w-[200px] md:w-[300px]"
          >
            For VR
          </a> */}
          {/* </div> */}
        </div>
      </div>
      {showPopup && (
        <ComingSoon showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
      {showTT && (
        <>
          {/* UTC Clock */}
          <div className="flex flex-col justify-center items-center gap-1 mb-8 md:mb-12">
            <p className="description font-bold text-xl md:text-2xl">
              {`${(currentTime.getUTCHours() % 12 || 12)
                .toString()
                .padStart(2, "0")}:${currentTime
                  .getUTCMinutes()
                  .toString()
                  .padStart(2, "0")} ${currentTime.getUTCHours() >= 12 ? "PM" : "AM"
                }`}
            </p>
            <p className="description text-sm md:text-base">
              {`${selectedDate.toLocaleDateString("en-in", {
                weekday: "long",
              })}, ${selectedDate.toLocaleDateString("en-in", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })} (UTC)`}
            </p>
          </div>
          {/* Slot Table */}
          <div className="relative overflow-x-scroll">
            <div className="w-[850px] md:w-[950px] mx-auto mb-20 overflow-x-scroll px-3">
              {/* Header */}
              <div className="bg-[#D7D7D7] flex justify-between items-center py-3 px-10 rounded-[5rem] mb-6">
                <h6 className="relative header text-sm sm:text-base text-[#242424] w-[25%] text-center flex justify-center items-center gap-2">
                  <span>Date</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="calendarIcon"
                    className="cursor-pointer"
                    onClick={() => {
                      console.log("Icon Click...", !showDatePicker);
                      setShowDatePicker(!showDatePicker);
                    }}
                  >
                    <path
                      d="M15.5569 18.8681H3.31767C3.28326 18.857 3.24977 18.8402 3.21536 18.8365C1.66674 18.6412 0.437147 17.5334 0.0883596 16.0174C0.0548759 15.8741 0.0288331 15.7309 0 15.5877C0 11.963 0 8.33938 0 4.71477C0.0111612 4.68129 0.0288331 4.64781 0.0334836 4.61339C0.260428 2.9048 1.66023 1.58219 3.37534 1.46686C3.69157 1.44547 4.01059 1.46407 4.34915 1.46407C4.34915 1.21574 4.34822 1.00274 4.34915 0.788819C4.35194 0.33586 4.65515 0.00660403 5.0737 9.33273e-05C5.49876 -0.00641738 5.81871 0.328419 5.82243 0.786029C5.82429 0.999022 5.82243 1.21294 5.82243 1.43524H13.0512C13.0512 1.21667 13.0512 1.00925 13.0512 0.80091C13.054 0.33679 13.36 0.00288363 13.7841 9.33273e-05C14.2101 -0.00269698 14.5217 0.329349 14.5245 0.792539C14.5254 1.00553 14.5245 1.21853 14.5245 1.44733C14.7486 1.44733 14.9504 1.44826 15.1523 1.44733C17.312 1.43338 18.8634 3.1429 18.8699 5.03938C18.882 8.45471 18.8801 11.8691 18.8699 15.2844C18.8652 16.9354 17.6849 18.3835 16.0749 18.7621C15.9029 18.8021 15.7289 18.8337 15.5559 18.869L15.5569 18.8681ZM1.47421 7.27255C1.47421 7.34975 1.47421 7.40928 1.47421 7.46973C1.47421 10.0368 1.47421 12.6048 1.47421 15.1719C1.47421 16.434 2.42105 17.3893 3.68692 17.3911C7.51987 17.3958 11.3537 17.3958 15.1867 17.3911C16.4526 17.3893 17.3985 16.435 17.3994 15.1719C17.4013 12.6048 17.3994 10.0368 17.3994 7.46973C17.3994 7.40556 17.3938 7.34138 17.3901 7.27255H1.47421ZM4.34915 2.93735C2.11691 2.69181 1.2482 4.22647 1.5049 5.78346H17.3827C17.6347 3.68236 16.2284 2.69832 14.5245 2.94851C14.5245 3.41914 14.5291 3.89163 14.5235 4.36413C14.5189 4.77616 14.2026 5.08868 13.799 5.0924C13.3869 5.09705 13.0614 4.78546 13.053 4.36506C13.0456 3.98465 13.0512 3.6033 13.0512 3.22289C13.0512 3.12709 13.0512 3.03129 13.0512 2.93549H5.82336C5.82336 3.41728 5.82801 3.88419 5.82243 4.35017C5.81778 4.76035 5.51922 5.07286 5.12765 5.09054C4.69701 5.11007 4.35659 4.79476 4.35194 4.35948C4.34636 3.88791 4.35101 3.41542 4.35101 2.93642L4.34915 2.93735Z"
                      fill="#242424"
                    />
                    <path
                      d="M5.09081 13.7805C5.32985 13.7805 5.56888 13.7767 5.80885 13.7805C6.22646 13.7888 6.54735 14.1125 6.54642 14.5171C6.54456 14.9142 6.23019 15.2426 5.8228 15.25C5.33264 15.2593 4.84154 15.2584 4.35045 15.25C3.93749 15.2426 3.61288 14.9022 3.62125 14.5031C3.62962 14.1041 3.94679 13.7888 4.3551 13.7805C4.60065 13.7749 4.8462 13.7795 5.09081 13.7795V13.7805Z"
                      fill="#242424"
                    />
                    <path
                      d="M13.8005 13.7815C14.0395 13.7815 14.2786 13.7768 14.5185 13.7815C14.9333 13.7908 15.258 14.12 15.2533 14.5218C15.2486 14.9181 14.9315 15.2445 14.5241 15.251C14.0339 15.2594 13.5428 15.2594 13.0518 15.251C12.6434 15.2436 12.33 14.9162 12.3281 14.5191C12.3263 14.1145 12.6472 13.7899 13.0648 13.7815C13.3103 13.7768 13.5559 13.7815 13.8005 13.7815Z"
                      fill="#242424"
                    />
                    <path
                      d="M13.7951 9.43319C14.0341 9.43319 14.2731 9.42947 14.5131 9.43319C14.9288 9.44156 15.2534 9.76709 15.2525 10.1698C15.2516 10.5726 14.9288 10.899 14.5103 10.9046C14.0322 10.9111 13.5532 10.9102 13.0752 10.9046C12.6482 10.9 12.3199 10.567 12.3283 10.1577C12.3357 9.75128 12.6566 9.43877 13.0779 9.43226C13.317 9.42854 13.556 9.43226 13.796 9.43226L13.7951 9.43319Z"
                      fill="#242424"
                    />
                    <path
                      d="M5.07579 10.9064C4.83675 10.9064 4.59679 10.9111 4.35775 10.9055C3.942 10.8953 3.61832 10.567 3.62111 10.1652C3.6239 9.76242 3.94944 9.43874 4.36612 9.43409C4.84419 9.42944 5.3232 9.42944 5.80127 9.43409C6.22074 9.43874 6.54163 9.7587 6.54535 10.1642C6.54907 10.5679 6.22818 10.8953 5.8115 10.9055C5.56595 10.9111 5.32041 10.9064 5.07579 10.9064Z"
                      fill="#242424"
                    />
                    <path
                      d="M9.44296 9.43322C9.682 9.43322 9.92196 9.4295 10.161 9.43415C10.5702 9.44252 10.8846 9.75689 10.8921 10.1578C10.8995 10.5633 10.5823 10.8972 10.1656 10.9037C9.67549 10.9121 9.18439 10.9121 8.6933 10.9037C8.28685 10.8963 7.97061 10.567 7.96875 10.1708C7.96782 9.76713 8.29057 9.44159 8.70725 9.43322C8.9528 9.42857 9.19835 9.43322 9.44296 9.43322Z"
                      fill="#242424"
                    />
                    <path
                      d="M9.43276 15.2537C9.19372 15.2537 8.95469 15.2574 8.71472 15.2537C8.29618 15.2453 7.9725 14.9245 7.96878 14.5227C7.96506 14.1125 8.29246 13.786 8.72216 13.7823C9.19465 13.7776 9.66715 13.7776 10.1387 13.7823C10.5703 13.786 10.8939 14.1069 10.8912 14.5208C10.8893 14.9273 10.5703 15.2453 10.1499 15.2537C9.91083 15.2593 9.6718 15.2546 9.43183 15.2537H9.43276Z"
                      fill="#242424"
                    />
                  </svg>
                  {showDatePicker && (
                    <div
                      id="datePicker"
                      className="absolute top-[100%] left-[50%] -translate-x-1/2 bg-[#D7D7D7] w-full p-4 flex flex-col justify-start items-center gap-2 rounded-[10px] shadow-xl"
                    >
                      {getNextThreeDates().map((nextDate, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedDate(nextDate);
                            setShowDatePicker(false);
                          }}
                          className="description text-[12px] text-center border-[1px] border-solid border-[#242424] rounded-[10px] py-0.5 px-3"
                          style={{
                            fontWeight:
                              selectedDate.toLocaleDateString("en-in") ===
                                nextDate.toLocaleDateString("en-in")
                                ? 700
                                : 400,
                          }}
                        >
                          {nextDate.toLocaleDateString("en-in", {
                            month: "long",
                            day: "2-digit",
                            year: "numeric",
                          })}
                        </button>
                      ))}
                    </div>
                  )}
                </h6>
                <h6 className="header text-sm sm:text-base text-[#242424] w-[25%] text-center">
                  Time
                </h6>
                <h6 className="relative header text-sm sm:text-base text-[#242424] w-[25%] text-center flex justify-center items-center gap-1">
                  <span>Slots</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onMouseEnter={() => setShowInfo(true)}
                    onMouseLeave={() => setShowInfo(false)}
                    className="cursor-pointer"
                  >
                    <path
                      d="M5.3125 10H4.6875C4.66589 9.99479 4.64427 9.9862 4.6224 9.98464C3.76172 9.92005 2.96641 9.65625 2.25078 9.17448C1.06771 8.37786 0.339062 7.2763 0.0778646 5.87135C0.0434896 5.68672 0.0255208 5.49896 0 5.3125C0 5.10417 0 4.89583 0 4.6875C0.00572917 4.65911 0.0125 4.63099 0.0166667 4.6026C0.0505208 4.37448 0.0723958 4.14401 0.11901 3.91875C0.521354 1.97839 2.175 0.395833 4.12891 0.0773437C4.31432 0.0471354 4.5013 0.0255208 4.6875 0C4.89583 0 5.10417 0 5.3125 0C5.3375 0.00546875 5.3625 0.0119792 5.38776 0.0161458C5.70104 0.0700521 6.02474 0.0901042 6.3263 0.182812C8.3013 0.790625 9.50417 2.11146 9.92318 4.13828C9.96042 4.31901 9.975 4.50417 10.0003 4.6875V5.3125C9.99479 5.33776 9.9862 5.3625 9.98411 5.38802C9.89635 6.48359 9.49505 7.45026 8.7737 8.2776C7.99844 9.16719 7.025 9.71719 5.86146 9.92422C5.67969 9.95651 5.49557 9.97526 5.31276 10H5.3125ZM0.69974 4.99922C0.698958 7.37318 2.62865 9.30234 5.00182 9.30026C7.37422 9.29818 9.29401 7.37995 9.30026 5.00547C9.30651 2.63333 7.37995 0.703125 5.00312 0.69974C2.63021 0.696354 0.700521 2.62396 0.69974 4.99922Z"
                      fill="#242424"
                    />
                    <path
                      d="M5.51108 5.73149C5.51108 6.12811 5.50717 6.52498 5.51316 6.9216C5.51524 7.05623 5.46029 7.14686 5.34962 7.2078C5.12566 7.33123 4.89571 7.3354 4.66837 7.2203C4.54988 7.1604 4.48946 7.06483 4.49024 6.92186C4.49441 6.12524 4.49441 5.32837 4.49024 4.53176C4.48946 4.37524 4.55899 4.27681 4.69571 4.22368C4.90092 4.14399 5.10951 4.14582 5.31342 4.22993C5.44493 4.2841 5.51524 4.37785 5.5129 4.53123C5.50691 4.93123 5.51081 5.33123 5.51081 5.73123L5.51108 5.73149Z"
                      fill="#242424"
                    />
                    <path
                      d="M5.00653 3.56039C4.82789 3.55883 4.68492 3.49945 4.57294 3.37289C4.42112 3.20127 4.42424 2.96716 4.57867 2.79815C4.78857 2.56872 5.18544 2.56169 5.40185 2.78539C5.52242 2.90987 5.56695 3.05856 5.50653 3.22419C5.43544 3.4195 5.28336 3.52028 5.08336 3.55466C5.05471 3.55961 5.02502 3.55909 5.00653 3.56039Z"
                      fill="#242424"
                    />
                  </svg>
                  {showInfo && (
                    <div
                      className={`absolute top-[100%] left-[50%] -translate-x-1/2 bg-[#D7D7D7] w-[75%] p-4 ps-8 py-6 flex flex-col justify-center items-start gap-3 rounded-[10px] shadow-xl ${showInfo
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                        }`}
                    >
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-[0.875rem] sm:w-[1.125rem] aspect-square bg-[#ffffff] rounded-[0.25rem] border-[1px] border-solid border-[#6D6A6A]"></div>
                        <span className="description text-xs md:text-sm">
                          Available
                        </span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-[0.875rem] sm:w-[1.125rem] aspect-square bg-[#6D6A6A] rounded-[0.25rem] border-[1px] border-solid border-[#6D6A6A]"></div>
                        <span className="description text-xs md:text-sm">
                          Disabled
                        </span>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-[0.875rem] sm:w-[1.125rem] aspect-square bg-[#259F19] rounded-[0.25rem] border-[1px] border-solid border-[#6D6A6A]"></div>
                        <span className="description text-xs md:text-sm">
                          Booked
                        </span>
                      </div>
                    </div>
                  )}
                </h6>
                <h6 className="header text-sm sm:text-base text-[#242424] w-[25%] text-center">
                  Book
                </h6>
              </div>
              {/* Slots */}
              <div className="flex justify-between items-stretch gap-0">
                <div className="w-[25%] bg-[#D7D7D790] rounded-[1rem] flex flex-col justify-between items-center gap-5 py-16">
                  <p className="description text-xs sm:text-sm text-[#242424] text-center">
                    {selectedDate.toLocaleDateString("en-in", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    })}
                    <br />
                    {selectedDate.toLocaleDateString("en-in", {
                      weekday: "long",
                    })}
                  </p>
                  <div className="w-0 flex-1 border-s-[1px] border-solid border-[#000]"></div>
                  <p className="description text-xs sm:text-sm text-[#242424] text-center">
                    {selectedDate.toLocaleDateString("en-in", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    })}
                    <br />
                    {selectedDate.toLocaleDateString("en-in", {
                      weekday: "long",
                    })}
                  </p>
                  <div className="w-0 flex-1 border-s-[1px] border-solid border-[#000]"></div>
                  <p className="description text-xs sm:text-sm text-[#242424] text-center">
                    {selectedDate.toLocaleDateString("en-in", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    })}
                    <br />
                    {selectedDate.toLocaleDateString("en-in", {
                      weekday: "long",
                    })}
                  </p>
                </div>
                <div className="w-[75%]">
                  {timings.map((timeSlot, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-1.5 px-10"
                    >
                      <h6
                        className="description text-xs sm:text-sm text-[#242424] w-1/3 text-center rounded-s-[5rem] py-[2px]"
                        style={{
                          backgroundColor:
                            index % 2 !== 0 ? "#D7D7D790" : "#ffffff",
                        }}
                      >
                        {timeSlot.timeSlot}
                        <br />(
                        {convertUTCtoIST(
                          timeSlot.timeSlot.split(" - ")[0],
                          timeSlot.timeSlot.split(" - ")[1]
                        )}{" "}
                        IST)
                      </h6>
                      <h6
                        className="description text-xs sm:text-sm text-[#242424] w-1/3 text-center rounded-e-[5rem] py-[11px] md:py-[13px]"
                        style={{
                          backgroundColor:
                            index % 2 !== 0 ? "#D7D7D790" : "#ffffff",
                        }}
                      >
                        <Box
                          sx={{
                            "& input + div": {
                              cursor: "pointer",
                            },
                            "& input:checked + div": {
                              backgroundColor: "#242424",
                              color: "#fff",
                            },
                            "& input:disabled + div": {
                              backgroundColor: "#6D6A6A",
                              color: "#fff",
                              cursor: "default",
                            },
                            "& input[dataBooked='true'] + div": {
                              backgroundColor: "#259F19 !important",
                              color: "#fff",
                              cursor: "default",
                            },
                          }}
                          className="flex justify-center items-center gap-2"
                        >
                          {timeSlot.portsRow.map((item, index) => (
                            <label
                              htmlFor={`port-${index + 1}-${timeSlot.timeSlot}`}
                              key={index}
                            >
                              <input
                                type="checkbox"
                                name={`port-${index + 1}-${timeSlot.timeSlot}`}
                                id={`port-${index + 1}-${timeSlot.timeSlot}`}
                                disabled={
                                  // item ||
                                  index > 0
                                  // (user?.port &&
                                  //   Number(user?.port) === index + 1 &&
                                  //   myBookedSlot.getDate() ===
                                  //     selectedDate.getDate() &&
                                  //   myBookedSlot
                                  //     .getUTCHours()
                                  //     .toString()
                                  //     .padStart(2, "0") +
                                  //     ":" +
                                  //     myBookedSlot
                                  //       .getUTCMinutes()
                                  //       .toString()
                                  //       .padStart(2, "0") ===
                                  //     timeSlot.timeSlot.split(" - ")[0])
                                }
                                dataBooked={`${item}`}
                                checked={
                                  selectedPort.port === index + 1 &&
                                  selectedPort.timeSlot === timeSlot.timeSlot
                                }
                                hidden={true}
                                onChange={() => {
                                  if (!item) {
                                    handleCheckboxChange(
                                      timeSlot.timeSlot,
                                      index
                                    );
                                  }
                                }}
                              />
                              <Box
                                sx={{
                                  aspectRatio: 1,
                                  backgroundColor: "#fff",
                                  border: "1px solid #6D6A6A",
                                  borderRadius: "0.25rem",
                                }}
                                className="flex w-[0.875rem] sm:w-[1.125rem] justify-center items-center description text-[0.55rem] sm:text-[0.65rem]"
                              >
                                {index + 1}
                              </Box>
                            </label>
                          ))}
                        </Box>
                        {/* <FormControl>
                          <RadioGroup
                            defaultValue="female"
                            aria-labelledby="demo-customized-radios"
                            name="customized-radios"
                            className="flex flex-row justify-center items-center"
                          >
                            {[1, 2, 3, 4, 5].map((item) => (
                              <FormControlLabel
                                key={item}
                                value={item.toString()}
                                control={
                                  <Radio
                                    checked={
                                      (selectedPort.port === item &&
                                        timeSlot.timeSlot ===
                                          selectedPort.timeSlot) ||
                                      (user?.port &&
                                        Number(user?.port) === item &&
                                        myBookedSlot.getDate() ===
                                          selectedDate.getDate() &&
                                        myBookedSlot
                                          .getUTCHours()
                                          .toString()
                                          .padStart(2, "0") +
                                          ":" +
                                          myBookedSlot
                                            .getUTCMinutes()
                                            .toString()
                                            .padStart(2, "0") ===
                                          timeSlot.timeSlot.split(" - ")[0])
                                    }
                                    onChange={() => {
                                      setSelectedPort((prevState) => ({
                                        ...prevState,
                                        port: item,
                                        timeSlot: timeSlot.timeSlot,
                                      }));
                                    }}
                                    disabled={
                                      user?.port &&
                                      myBookedSlot.getDate() ===
                                        selectedDate.getDate() &&
                                      myBookedSlot
                                        .getUTCHours()
                                        .toString()
                                        .padStart(2, "0") +
                                        ":" +
                                        myBookedSlot
                                          .getUTCMinutes()
                                          .toString()
                                          .padStart(2, "0") ===
                                        timeSlot.timeSlot.split(" - ")[0]
                                    }
                                  />
                                }
                                label={item.toString()}
                                disabled={item !== 1}
                                className="flex flex-col-reverse justify-center items-center gap-0"
                                sx={{
                                  "& .MuiRadio-root": {
                                    padding: 0,
                                    "& .MuiSvgIcon-root": {
                                      fontSize: {
                                        xs: "1.375rem",
                                        sm: "1.5rem",
                                      },
                                    },
                                    "&.Mui-checked": {
                                      color: "#242424",
                                    },
                                  },
                                  "& .MuiTypography-root": {
                                    fontSize: {
                                      xs: "0.55rem",
                                      sm: "0.65rem",
                                    },
                                  },
                                }}
                              />
                            ))}
                          </RadioGroup>
                        </FormControl> */}
                      </h6>
                      <div className="w-1/3 flex justify-center items-center">
                        <button
                          disabled={bookingID === index}
                          onClick={() => {
                            if (
                              user?.port &&
                              myBookedSlot.getDate() ===
                              selectedDate.getDate() &&
                              myBookedSlot
                                .getUTCHours()
                                .toString()
                                .padStart(2, "0") +
                              ":" +
                              myBookedSlot
                                .getUTCMinutes()
                                .toString()
                                .padStart(2, "0") ===
                              timeSlot.timeSlot.split(" - ")[0]
                            ) {
                              cancelSlot(index, timeSlot.timeSlot);
                            } else {
                              console.log("Inside else");
                              bookSlot(index, timeSlot.timeSlot);
                            }
                          }}
                          className="description text-xs sm:text-sm text-[#242424] text-center border-[1px] border-solid border-[#D7D7D7] py-0.5 px-8 rounded-[5rem] mx-auto flex justify-center items-center"
                        >
                          {bookingID === index ? (
                            <CircularProgress
                              size={"1rem"}
                              sx={{
                                color: "#242424",
                                mx: "1.7rem",
                                my: "0.125rem",
                              }}
                            />
                          ) : user?.port &&
                            myBookedSlot.getDate() === selectedDate.getDate() &&
                            myBookedSlot
                              .getUTCHours()
                              .toString()
                              .padStart(2, "0") +
                            ":" +
                            myBookedSlot
                              .getUTCMinutes()
                              .toString()
                              .padStart(2, "0") ===
                            timeSlot.timeSlot.split(" - ")[0] ? (
                            "Cancel Slot"
                          ) : (
                            "Book Slot"
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {loadingSlots && (
              <div className="absolute w-full h-full top-0 left-0 bg-[#ffffff80] flex justify-center items-start pt-20">
                <CircularProgress size={"4rem"} />
              </div>
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default StreamText;
