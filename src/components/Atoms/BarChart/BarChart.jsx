import React from "react";

const BarChart = ({percent, content}) => {
  return (
    <div className="bar-chart">
      <div className="bar-chart__main">
        <div className="bar-chart__behind chart-bg"></div>
        <div
          style={{
            background: `repeating-conic-gradient(from 0deg, #da9900 0deg calc(3.6deg * ${percent}), transparent  calc(3.6deg * ${percent}) 360deg)`,
          }}
          className="bar-chart__fill"
        ></div>
        <div className="bar-chart__over chart-over-bg"></div>
        <span className="bar-chart__per text">{percent}%</span>
      </div>
      <div className="bar-chart__content text">{content}</div>
    </div>
  );
};

export default BarChart;
