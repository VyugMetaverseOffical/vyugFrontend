import React from "react";
import "./authe.css";
import globe from "./authe.svg";

const Authe = () => {
  return (
    <div className="bg-[#242424] h-[100vh] w-full">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        <div className="w-[60%] flex justify-center items-center h-full ml-auto">
          <img
            className="w-[60%] h-[80%] z-[999]"
            src={globe}
            alt="globe desc"
          />
        </div>
      </div>
    </div>
  );
};

export default Authe;
