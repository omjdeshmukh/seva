import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ServicesCard from "./ServicesCard/ServicesCard";

function Services() {
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get(" https://seva-backend1.herokuapp.com/admin/category")
      .then((response) => setCategory(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ServicesContainer>
        <ServicesInnerContainer>
          <h3>category</h3>
          <CategorySection>
            {category &&
              category.map((item, index) => {
                return (
                  <>
                    <ServicesCard key={index} data={item} />
                  </>
                );
              })}
          </CategorySection>
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

const CategorySection = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 414px) {
    flex-direction: column;
  }
`;
