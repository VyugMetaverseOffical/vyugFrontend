import React from "react";
import vyug_starter from "../videos/vyugStarter.mp4";

const Starter = () => {
  return (
    <div
      style={{
        zIndex: 99999,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#222222",
        overflow: 'hidden',
      }}
      className="cursor-default"
    >
      <video autoPlay loop muted style={{ height: "100vh", width: "100%" }}>
        <source src={vyug_starter} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Starter;
