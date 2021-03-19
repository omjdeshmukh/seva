import { func } from "prop-types";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ServicesCard(props) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const pincode = userData.pincode;
  const { _id, icon, category, description } = props.data;

  return (
    <>
      <ServiceCardContainer key={_id}>
        <Link to={`/services/${_id}/${pincode}`}>
          <ServiceImage>
            <img src={icon} alt={description} />
          </ServiceImage>
          <SrviceInfo>
            <h5>{category}</h5>
          </SrviceInfo>
        </Link>
      </ServiceCardContainer>
    </>
  );
}

export default ServicesCard;

const ServiceCardContainer = styled.div`
  min-width: 25%;
  max-width: 100%;
  border-radius: 10px;

  padding: 0.5rem;
  margin: 0.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #393232;
  }
`;
const ServiceImage = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #5ab9ea;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 50%;

  > img {
    width: 85%;
  }
`;
const SrviceInfo = styled.div`
  > h5 {
    font-family: hindRegular;
    font-size: 15px;
  }
`;
