import React from "react";
import { Line } from "react-chartjs-2";

function Chart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "April", "May"],
    datasets: [
      {
        label: "Number of users (100) }",
        data: [1, 5, 8, 6, 9],
        fill: false,
      },
    ],
  };
  return (
    <>
      <Line data={data} />
    </>
  );
}

export default Chart;
