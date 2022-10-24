import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.amount / props.max) * 100) + "%";
  }

  return (
    <>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div
            className={
              props.highest
                ? "chart-bar__fill chart-bar__fill-max"
                : "chart-bar__fill"
            }
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className="chart-day">{props.day}</div>
      </div>
    </>
  );
};

export default ChartBar;
