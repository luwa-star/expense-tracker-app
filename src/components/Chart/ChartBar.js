import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight ='0%';

    if(props.max> 0){// To calculate the fill height
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
  return (
    <div className="chartbar">
      <div className="chartbar--inner">
        <div className="chartbar--fill" style={{height: barFillHeight}} ></div>{/*filling data*/}
      </div>
      <div className="chartbar--label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
