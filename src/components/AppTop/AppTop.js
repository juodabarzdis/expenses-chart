import React from "react";
import "./AppTop.css";

const AppTop = () => {
  return (
    <div className="app-top">
      <div className="app-top__left">
        <div>
          <h1>
            <span>My balance</span>
            <br />
            $921.48
          </h1>
        </div>
      </div>
      <div className="app-top__right">
        <button className="app-top__button"></button>
      </div>
    </div>
  );
};

export default AppTop;
