import React from "react";
import { Warper } from "./Loader.styles";

const Loader = () => {
  return (
    <>
      <Warper>
        <div className="loading-overlay" id="loading">
          <div className="reverse-spinner"></div>
        </div>
      </Warper>
    </>
  );
};

export default Loader;
