import React from "react";
import "./AppBot.css";
import Chart from "./Chart";

const AppBot = () => {
  return (
    <div className="bot-container">
      <div className="bot-title">
        <h2>Spending - Last 7 days</h2>
      </div>
      <div className="bot-chart">
        <Chart />
      </div>
      <div className="bot-bot">
        <div className="bot-bot__left">
          <h3 className="total-h3">
            <span>Total this month</span>
            <br />
            $478.33
          </h3>
        </div>
        <div className="bot-bot__right">
          <p>
            +2.4% <span>from last month</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppBot;
