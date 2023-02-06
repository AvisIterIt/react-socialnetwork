import React from "react";
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        width: "60px",
        height: "60px",
      }}
    >
      <img src={preloader} />
    </div>
  );
};
export default Preloader;
