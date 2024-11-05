import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { CircularProgress } from "@mui/material";
import OTPInput from "../components/OTPInput";
import { protectedApiPostAdmin } from "../../apis/api";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../../components/toast";

function Key() {
  const [key, setKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOTP, setVerifyingOTP] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);

  const resetForm = () => {
    setKey("");
    setShowKey(false);
    setSendingOtp(false);
    setShowOtpForm(false);
    setVerifyingOTP(false);
  };

  const encryptKey = () => {
    protectedApiPostAdmin("admin/presale/Sencrypt", {
      privateKey: key,
      email: "ubaidchand@gmail.com",
    })
      .then((response) => {
        console.log("admin/presale/Sencrypt", response);
        toast.success(
          <ToastSuccess data={"Encrypted Successfully !"} />,
          SuccessStyling
        );
        setShowOtpForm(false);
      })
      .catch((error) => {
        console.log("admin/presale/Sencrypt", error);
      });
  };

  const sendOTP = () => {
    setSendingOtp(true);
    protectedApiPostAdmin("users/verify-email", {
      email: "ubaidchand@gmail.com",
    })
      .then((response) => {
        if (response.data.substring(0, 3) == "250") {
          toast.success(
            <ToastSuccess data={"OTP has been sent to your email"} />,
            SuccessStyling
          );
          setSendingOtp(false);
          setShowOtpForm(true);
        } else if (response && response.result.responseCode === 535) {
          toast.error(<ToastError data={"Some error occured"} />, ErrorStyling);
          setSendingOtp(false);
          setShowOtpForm(false);
        }
      })
      .catch((error) => {
        console.log("users/verify-email", error);
      });
  };

  const onFinish = (value) => {
    setVerifyingOTP(true);
    protectedApiPostAdmin("users/verify-otp", {
      email: "ubaidchand@gmail.com",
      otp: value,
    })
      .then((response) => {
        toast.success(
          <ToastSuccess data={"OTP verified successfully"} />,
          SuccessStyling
        );
        setVerifyingOTP(false);
        encryptKey();
      })
      .catch((error) => {
        console.log("users/verify-otp", error);
        setVerifyingOTP(false);
      });
  };

  return (
    <div className="flex flex-col justify-start items-stretch gap-6 my-16">
      <h1 className="header">Private Key</h1>
      <div className="flex justify-start items-stretch gap-4 w-[75%] mx-auto mb-8 py-4">
        <div className="bg-[#E8E8E8] rounded-[5rem] flex justify-between items-stretch gap-3 flex-1 px-5">
          <input
            type={showKey ? "text" : "password"}
            name="privateKey"
            id="privateKey"
            className="bg-[#ffffff00] description border-none outline-none py-3 flex-1 text-base flex-1"
            placeholder="Search"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            disabled={sendingOtp || showOtpForm}
          />
          <button onClick={() => setShowKey((prev) => !prev)}>
            {showKey ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
        <button
          disabled={sendingOtp || showOtpForm}
          className="description font-bold text-xs rounded-[5rem] bg-[#242424] text-[#fff] w-[7rem] px-5 flex justify-center items-center"
          onClick={sendOTP}
          // onClick={encryptKey}
        >
          {sendingOtp ? (
            <CircularProgress size={"0.875rem"} sx={{ color: "white" }} />
          ) : (
            "Send OTP"
            // "Encrypt"
          )}
        </button>
        <button
          disabled={sendingOtp || verifyingOTP}
          onClick={resetForm}
          className="description font-bold text-xs rounded-[5rem] bg-[#242424] text-[#fff] w-[7rem] px-5 flex justify-center items-center"
        >
          Reset
        </button>
      </div>
      {showOtpForm && (
        <div className="flex flex-col justify-center items-center gap-4 w-[60%] mx-auto mb-8">
          {!verifyingOTP ? (
            <>
              <OTPInput length={5} onFinish={onFinish} />
              <button
                onClick={sendOTP}
                className="description font-bold text-xs rounded-[5rem] text-[#242424] w-[10rem] py-3 px-5 flex justify-center items-center"
              >
                Resend OTP
              </button>
            </>
          ) : (
            <CircularProgress size={"2.5rem"} sx={{ color: "#242424" }} />
          )}
        </div>
      )}
    </div>
  );
}

export default Key;
