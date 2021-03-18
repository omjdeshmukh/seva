import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ServicesCard from "./ServicesCard/ServicesCard";

function Services() {
  const [services, setService] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/service")
      .then((response) => setService(response.data))
      .catch((err) => console.log(err.message));

    console.log(services);
  }, []);
  return (
    <>
      <ServicesContainer>
        <ServicesInnerContainer>
          <h3>Services</h3>
          {services &&
            services.map((item, index) => {
              return (
                <>
                  <ServicesCard key={index} data={item} />
                </>
              );
            })}
        </ServicesInnerContainer>
      </ServicesContainer>
    </>
  );
}

export default Services;

const ServicesContainer = styled.div`
  font-family: hindLight;
`;
const ServicesInnerContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;
