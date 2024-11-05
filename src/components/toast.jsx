import React from "react";

export const SuccessStyling = {
  style: {
    backgroundImage:
      "linear-gradient(174.55deg, #DEF2D6 -37.9%, #5A7052 180.17%)",
    border: "1px solid #5A7052",
  },
};

export const ErrorStyling = {
  style: {
    backgroundImage:
      "linear-gradient(186.68deg, #ECC8C5 -33.31%, #B63937 294.12%)",
    border: "1px solid #B53533",
  },
};

export const ToastSuccess = ({ data }) => {
  return (
    <div>
      <span className="font-semibold text-sm md:text-base">Successful</span>
      <br />
      <span className="text-xs md:text-sm">{data}</span>
    </div>
  );
};

export const ToastError = ({ data }) => {
  return (
    <div>
      <span className="font-semibold text-sm md:text-base">Error Occurred</span>
      <br />
      <span className="text-xs md:text-sm">{data}</span>
    </div>
  );
};
