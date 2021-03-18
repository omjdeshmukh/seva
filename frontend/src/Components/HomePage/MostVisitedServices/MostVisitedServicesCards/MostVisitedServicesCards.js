import React, { useState, useEffect } from "react";
import styled from "styled-components";

function MostVisitedServicesCard(props) {
  const { category, description, icon } = props.category;
  return (
    <>
      <ServicesCardContainer>
        <ServiceImage>
          <img src={icon} alt={description} />
        </ServiceImage>
        <h4>{category}</h4>
        <small>{description}</small>
      </ServicesCardContainer>
    </>
  );
}

export default MostVisitedServicesCard;

const ServicesCardContainer = styled.div`
  width: 24%;
  padding: 1rem;
  display: flex;
  margin: 0.5rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  > h4 {
    font-size: 1rem;
    font-weight: 200;
  }
`;

const ServiceImage = styled.div`
  width: 65px;
  height: 65px;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #5ab9ea;
  border-radius: 50%;

  > img {
    width: 100%;
  }
`;
