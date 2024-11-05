import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import bgImg from "../images/presale_bg.png";
import thanksImg from "../images/presale_thankyou_bg.png";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../components/toast";

function Presale_TxnComplete() {
  const [position, setPosition] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(state)
      .then(() => {
        toast.success(
          <ToastSuccess data={"Copied to clipboard!"} />,
          SuccessStyling
        );
      })
      .catch((err) => {
        toast.error(<ToastError data={"Failed to copy"} />, ErrorStyling);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header isTransparent={position} isHeaderText={false} />
      <div
        className="fixed z-[-3] w-[100vw] h-[100vh] flex justify-center items-center"
        style={{
          background: `url(${bgImg}), linear-gradient(to right, #000000 15%, #00000050 100%), rgba(0, 0, 0, 0.75)`,
        }}
      ></div>
      <div
        className="fixed z-[-2] w-[70vw] h-[70vw] top-0 right-0 rounded-[100%] flex justify-center items-center"
        style={{
          background:
            "linear-gradient(to right bottom, #049a99, #00998c, #00977c, #00956a50, #159255)",
          filter: "blur(200rem)",
          transform: "translate(35%, -20%)",
          top: 0,
          right: 0,
        }}
      ></div>
      {/* <div className="absolute z-[-1] top-0 right-0 bottom-0 left-0" style={{
        background: `url(${thanksImg})`,
        backgroundPosition: "center right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}></div> */}
      <div className="min-h-screen flex flex-col justify-start md:justify-center items-stretch gap-3 md:gap-4 pt-48 md:pt-32 px-5">
        <h1 className="font-transyl text-[#fff] text-4xl md:text-7xl font-bold text-center">
          Thank You !
        </h1>
        <h2 className="header text-[#fff] text-sm md:text-xl text-center mt-2">
          Your Transaction is completed
        </h2>
        <p className="header text-[#fff] text-base md:text-lg text-center mt-10 md:mt-16">
          Transaction Hash
        </p>
        <div className="flex justify-center items-start gap-2 md:gap-4">
          <p className="description text-[#fff] text-base md:text-lg text-center max-w-[400px] overflow-x-scroll pb-3 md:pb-4">
            {state}
          </p>
          <button
            onClick={handleCopy}
            className="flex justify-center items-start rounded-[50%] p-2 pt-1 w-[2.5rem] h-[2.5rem]"
          >
            <svg
              width="16"
              height="20"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8676 28.0031H2.4381C2.41717 27.9889 2.39834 27.9668 2.37532 27.9611C1.02852 27.6285 0.296875 26.692 0.296875 25.2919C0.296875 19.1339 0.296875 12.9765 0.296875 6.81917C0.296875 5.20399 1.36679 4.11794 2.95492 4.11723C4.1992 4.11652 5.44418 4.11723 6.68846 4.11723C6.78052 4.11723 6.87259 4.11723 6.98139 4.11723C6.98139 3.83522 6.98069 3.5881 6.98139 3.34026C6.98976 1.81268 8.07293 0.708116 9.57457 0.705979C11.7855 0.70313 13.9958 0.708116 16.2068 0.70313C16.9796 0.701706 17.6268 0.978025 18.1715 1.53636C19.7311 3.13587 21.2962 4.72969 22.8599 6.32493C23.4158 6.89253 23.6976 7.56765 23.6969 8.37809C23.6913 12.8832 23.6948 17.3876 23.6934 21.8928C23.6934 23.4966 22.6249 24.5883 21.057 24.5897C19.8036 24.5912 18.5503 24.5897 17.2969 24.5897C17.2056 24.5897 17.1135 24.5897 17.0068 24.5897C17.0068 24.9202 17.0124 25.2129 17.0061 25.5049C16.9817 26.5574 16.3274 27.4847 15.3573 27.8436C15.1962 27.9034 15.0309 27.9497 14.8676 28.0024V28.0031ZM9.48878 5.82286H9.20631C7.1174 5.82286 5.02918 5.82286 2.94027 5.82286C2.28884 5.82286 1.9687 6.15259 1.9687 6.82416C1.9687 12.9815 1.9687 19.1389 1.9687 25.2962C1.9687 25.9671 2.28884 26.2961 2.94236 26.2961C6.74565 26.2961 10.5489 26.2961 14.3522 26.2961C15.026 26.2961 15.3384 25.9749 15.3384 25.282C15.3384 20.8836 15.3384 16.4861 15.3384 12.0877V11.7936C14.249 11.7936 13.1965 11.7936 12.1447 11.7936C10.5573 11.7922 9.49088 10.7054 9.48948 9.08812C9.48878 8.01347 9.48948 6.93882 9.48948 5.82215L9.48878 5.82286ZM8.66019 4.11723C8.91965 4.11723 9.16098 4.12578 9.4023 4.11581C10.2644 4.07878 10.966 4.40281 11.57 5.02951C13.0598 6.57348 14.5594 8.10818 16.0743 9.62651C16.7159 10.2696 17.0186 11.0124 17.0144 11.9318C16.9991 15.4762 17.0082 19.0206 17.0082 22.5651V22.8855C18.3766 22.8855 19.7067 22.8855 21.0374 22.8855C21.7098 22.8855 22.0223 22.5636 22.0223 21.8707C22.0223 17.4738 22.0223 13.0762 22.0223 8.67934C22.0223 8.58533 22.0223 8.49204 22.0223 8.38379C20.9168 8.38379 19.8476 8.38593 18.7783 8.38379C17.26 8.38023 16.1782 7.27994 16.1733 5.73526C16.1705 4.82014 16.1733 3.90501 16.1733 2.99059C16.1733 2.80614 16.1733 2.62241 16.1733 2.41303H15.8685C14.8851 2.41303 13.9024 2.41303 12.9189 2.41303C11.7876 2.41303 10.6563 2.41089 9.52575 2.41445C9.0717 2.41588 8.70762 2.71285 8.66647 3.14371C8.63648 3.45777 8.66089 3.77753 8.66089 4.11937L8.66019 4.11723ZM20.7333 6.67175C19.7708 5.68826 18.8048 4.70192 17.8486 3.72412C17.8486 4.43272 17.834 5.17622 17.8549 5.919C17.8661 6.30784 18.2036 6.65395 18.5851 6.66535C19.3126 6.68742 20.0408 6.67175 20.7333 6.67175ZM11.169 7.12184C11.169 7.8575 11.146 8.61809 11.178 9.37583C11.1955 9.7839 11.5777 10.0787 11.9962 10.0866C12.3784 10.0944 12.7613 10.0887 13.1442 10.0887C13.4602 10.0887 13.7768 10.0887 14.0767 10.0887C13.0996 9.09168 12.1329 8.10534 11.169 7.12184Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-8 md:mt-10">
          <button
            onClick={() => navigate("/")}
            className="header text-[#fff] text-sm md:text-base py-1.5 px-4 rounded-[0.5rem] border-[2px] border-solid border-[#fff]"
          >
            Explore VYUG
          </button>
          <button
            onClick={() => navigate(-1)}
            className="header text-[#fff] text-sm md:text-base py-1.5 px-4 rounded-[0.5rem] border-[2px] border-solid border-[#fff]"
          >
            Make Another Purchase
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Presale_TxnComplete;
