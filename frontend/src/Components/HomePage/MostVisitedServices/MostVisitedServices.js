import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MostVisitedServicesCard from "./MostVisitedServicesCards/MostVisitedServicesCards";
import axios from "axios";

function MostVisitedServices() {
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get(" https://seva-backend1.herokuapp.com/admin/category")
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
              return (
                <>
                  <MostVisitedServicesCard category={item} />
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
