import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
import data from "../../data.json";

const Chart = () => {
  const totalMax = Math.max(...data.map((item) => item.amount));

  return (
    <div className="chart">
      {data.map((item) => (
        <ChartBar
          key={item.day}
          day={item.day}
          amount={item.amount}
          max={totalMax}
          highest={item.amount === totalMax ? "max" : ""}
        />
      ))}
    </div>
  );
};

export default Chart;
