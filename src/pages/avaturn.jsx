import React, { useEffect } from "react";
import { AvaturnSDK } from "https://cdn.jsdelivr.net/npm/@avaturn/sdk/dist/index.js";
import { protectedApiGet, protectedApiPost } from "../apis/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ErrorStyling,
  SuccessStyling,
  ToastError,
  ToastSuccess,
} from "../components/toast";

const AvaturnComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {    
    const loadAvaturnSession = async () => {
      try {
        const response = await protectedApiGet("users/create-avatar-session");

        console.log(response);   
        const sdk = new AvaturnSDK();
        await sdk.init(document.getElementById("avaturn-sdk-container"), {
          url: response.sessionUrl,
          urlType: "httpURL",
        });
        await sdk.on("export", async (data) => {
          console.log(data);
          try {
            // Call the API before redirecting
            const response = await protectedApiPost(`users/avatar`, {
              // Include any required data in the request
              url: data.url,
              avatarSupportsFaceAnimations: data.avatarSupportsFaceAnim,
              bodyId: data.bodyId,
              gender: data.gender,
              avatarId: data.avatarId,
            });
            toast.success(
              <ToastSuccess data={response.data} />,
              SuccessStyling
            );
            navigate("/stream-announcement");
          } catch (error) {
            console.error("Error during export process:", error);
            toast.error(
              <ToastError data={"Failed to export avatar. Please try again"} />,
              ErrorStyling
            );
          }
        });
      } catch (error) {
        console.error("Failed to load Avaturn session:", error);
      }
    };

    loadAvaturnSession();
  }, []);

  return (
    <div
      id="avaturn-sdk-container"
      style={{ width: "100%", height: "100vh", border: "none" }}
    ></div>   
  );
};

export default React.memo(AvaturnComponent);
                  