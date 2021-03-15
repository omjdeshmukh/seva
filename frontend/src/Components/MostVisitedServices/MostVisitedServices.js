import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MostVisitedServicesCard from "./MostVisitedServicesCards/MostVisitedServicesCards";
import axios from "axios";

function MostVisitedServices() {
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/service")
      .then((response) => setCategory(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MostVisitedServicesContainer>
        <h3>Most Visited Services</h3>
        <MostVisitedServicesSection>
          {category &&
            category.map((item, index) => {
              const { category } = item;
              console.log(category);
              return (
                <>
                  <MostVisitedServicesCard category={category} />
                </>
              );
            })}
        </MostVisitedServicesSection>
      </MostVisitedServicesContainer>
    </>
  );
}

export default MostVisitedServices;

const MostVisitedServicesContainer = styled.div``;
const MostVisitedServicesSection = styled.div`
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
