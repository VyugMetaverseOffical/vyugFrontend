import { useEffect, useState } from "react";
import { protectedApiGet, protectedApiPost } from "../apis/api";
import { toast } from "react-hot-toast";
import { CircularProgress } from "@mui/material";
import Header from "../components/Head";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../components/toast";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function WhitePaper() {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const navigate = useNavigate();

  const fetchViewCount = () => {
    protectedApiGet("/userdata/whitepaper-count")
      .then((response) => {
        console.log("/userdata/whitepaper-count", response);
        setViewCount(response.count);
      })
      .catch((error) => {
        console.loh("/userdata/whitepaper-count", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error(
        <ToastError data={"Please enter your email"} />,
        ErrorStyling
      );
      return;
    }
    setLoading(true);
    protectedApiPost("/userdata/whitepaper", {
      email: email,
    })
      .then((response) => {
        console.log("whitepaper Api response", response);
        toast.success(
          <ToastSuccess data={"View Access Granted Successfully"} />,
          SuccessStyling
        );
        setLoading(false);
        fetchViewCount();
        setShow(false);
      })
      .catch((error) => {
        console.log(
          "whitepaper error",
          error?.response?.data?.message?.message
        );
        toast.error(
          <ToastError data={error?.response?.data?.message?.message} />,
          ErrorStyling
        );
        setLoading(false);
        setShow(true);
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
    fetchViewCount();
  }, []);

  return (
    <div className="relative">
      <Helmet>
        <title>Whitepaper - VYUG Metaverse</title>
        <meta name="description" content="Whitepaper" />
        <meta name="keywords" content="Whitepaper" />
        <meta property="og:title" content="Whitepaper" />
        <meta property="og:description" content="Whitepaper" />
        <link rel="canonical" href="https://www.vyugmetaverse.com/whitepaper" />
      </Helmet>
      <Header isTransparent={position} isHeaderText={true} />
      <div className="py-28">
        <div className="relative py-12 md:py-10">
          <h1 className="header text-center text-[30px] pb-6">Whitepaper</h1>
          <p className="absolute top-[80%] md:top-1/2 right-[5%] -translate-y-1/2 header text-[14px] md:text-[18px]">
            View Count: {viewCount}
          </p>
        </div>
        <iframe
          allowFullScreen="allowfullscreen"
          scrolling="no"
          className="fp-iframe"
          src="https://heyzine.com/flip-book/96f2985221.html"
          style={{
            border: "1px solid lightgray",
            width: "100%",
            height: "650px",
          }}
        ></iframe>
        {/* <iframe
          src="https://drive.google.com/file/d/1fwmCGagy4dA604q-t_5J_Su_G3abzx95/preview"
          width={"100%"}
          height={"640px"}
          style={{ border: "none" }}
        ></iframe> */}
      </div>
      {show && (
        <div className="fixed top-0 left-0 z-[1000] h-screen w-screen bg-[#00000099] flex justify-center items-center">
          <div className="bg-white w-[95%] md:w-[600px] rounded-[1rem]">
            <form className="flex flex-col items-stretch justify-start gap-2 py-16 md:py-20 px-8 md:px-16">
              <p className="header text-[14px] text-center pb-4">
                View Count: {viewCount}
              </p>
              <label
                htmlFor="email"
                className="header text-base text-[#242424]"
              >
                Email
              </label>
              <input
                type="email"
                className="description text-base px-4 py-2 border-[1px] border-solid border-[#242424] outline-none rounded-[4rem]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {loading ? (
                <CircularProgress
                  size={"1.5rem"}
                  sx={{
                    color: "#242424",
                    marginInline: "auto",
                    marginBlock: "0.875rem",
                    fontSize: "0.25rem",
                  }}
                />
              ) : (
                <button
                  onClick={handleSubmit}
                  className="header text-base text-[#fff] text-center rounded-[4rem] py-2 my-1.5 bg-[#242424]"
                >
                  Submit
                </button>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
                className="header text-base text-[#fff] text-center rounded-[4rem] py-2 my-1.5 bg-[#242424]"
              >
                Go Back
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default WhitePaper;
