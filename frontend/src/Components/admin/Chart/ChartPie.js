import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

function PieChart() {
  const [data, setData] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch(" https://seva-backend1.herokuapp.com/admin/category", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => setCategory(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(" https://seva-backend1.herokuapp.com/service", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);

  const categories = category && category.map((item) => item.category);
  console.log(categories);

  const statistic =
    categories &&
    categories.map(
      (_category) =>
        data && data.filter((item) => item.category.category === _category)
    );

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
      {
        color: "#fdd723",
      },
      {
        color: "#764abc",
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
          ["Education", statistic && statistic[0].length],
          ["Rental", statistic && statistic[1].length],
          ["Health Care", statistic && statistic[2].length],
          ["Local", statistic && statistic[3].length],
          ["Other", statistic && statistic[4].length],
          ["food", statistic && statistic[5].length],
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
