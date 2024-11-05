import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const NoStream = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:500px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? 350 : 400,
    bgcolor: "#242424",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: 24,
    p: 4,
    cursor: "auto",
  };

  React.useEffect(() => {
    const id = setTimeout(() => {
      window.location.reload()
    }, 180000)

    return () => clearTimeout(id)
  }, [])

  return (
    <div>
      <Modal
        style={{ cursor: "auto" }}
        open={status == 0}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            onClick={() => navigate(-1)}
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
          {/* <div
         
            style={{
              width: "fit-content",
              marginLeft: "auto",
              paddingBottom: 20,
            }}
          >
           
          </div> */}
          <Typography
            style={{
              color: "#fff",
              textAlign: "center",
              paddingBottom: 40,
              fontSize: isMobile ? "18px" : "24px",
            }}
            className="header"
          >
            All streams are occupied. Please wait for 3 minutes.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
