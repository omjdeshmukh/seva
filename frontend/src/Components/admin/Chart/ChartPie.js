import React from "react";
import Chart from "react-google-charts";

function PieChart() {
  const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
      {
        color: "#2BB673",
      },
      {
        color: "#d91e48",
      },
      {
        color: "#007fad",
      },
      {
        color: "#e9a227",
      },
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%",
    },
    fontName: "Roboto",
  };
  return (
    <>
      <Chart
        chartType="PieChart"
        data={[
          ["cateory", "number"],
          ["Education", 10],
          ["Rental", 5.5],
          ["Local", 1],
          ["food", 1],
          ["Health Care", 4],
        ]}
        options={pieOptions}
        graph_id="PieChart"
        width={"100%"}
        height={"400px"}
        legend_toggle
      />
    </>
  );
}

export default PieChart;
