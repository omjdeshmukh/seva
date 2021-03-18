import React, { useState, useEffect } from "react";

const api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGQ4Njk1NzExY2EzMDViNDk0MTEwMiIsImlhdCI6MTYxNTk5NzM1OH0.B0GgYG3lphhYaqm3nSWuecxMoU2DV4M_EDywDGybVNo";

function Experiment() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://seva-backend1.herokuapp.com/provider/my/service/60524ad1d4043f0022c86384",
      {
        method: "GET",
        headers: {
          "auth-token": `${api}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => setData([...response]))
      .catch((err) => console.log(err.message));

    console.log(data);
  }, []);

  return <>{data && data.map((item) => console.log(item))}</>;
}

export default Experiment;
