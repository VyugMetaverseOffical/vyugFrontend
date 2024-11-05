import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";

export const ComingSoon = ({ status, setStatus }) => {
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
              padding: "1.25rem"
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
            We're Almost There!
          </Typography>
          <Typography
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: isMobile ? "14px" : "18px",
              paddingInline: "1.5rem",
              paddingBottom: "3rem"
            }}
            className="description"
          >
            The page you're trying to access is currently under construction.
            Please check back soon for exciting updates and new content
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
