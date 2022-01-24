import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map( dataPoint => dataPoint.value);//to return an array of  number
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map(
        (
          dataPoint //The chartbar is an array.
        ) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        )
      )}
    </div>
  );
};
export default Chart;
