import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";;

export const NoLogin = () => {

  const isMobile = useMediaQuery('(max-width:500px)');

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
  }

  return (
    <div >
      <Modal
        open={status == 0}
        style={{cursor:"auto"}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
         
            style={{
              width: "fit-content",
              marginLeft: "auto",
              paddingBottom: 20,
            }}
          >
            
          </div>
          <Typography
            style={{ color: "#fff", textAlign: "center", paddingBottom: 40, fontSize: isMobile ? "18px" : "24px" }}
            className="header"
          >
           Please Login first to enter into the game
          </Typography>
       
        </Box>
      </Modal>
    </div>
  );
};
