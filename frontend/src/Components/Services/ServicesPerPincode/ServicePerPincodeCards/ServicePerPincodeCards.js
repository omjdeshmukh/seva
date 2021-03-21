import React from "react";
import styled from "styled-components";
import { FcOk } from "react-icons/fc";

function ServicesPerPincodeCards({
  category,
  contactNo,
  description,
  image,
  isVerify,
  map_location,
  serviceEmail,
  serviceNames,
  user,
}) {
  return (
    <>
      <ServiceCardContainer key="">
        <ServiceImage>
          <img src="" alt="" />
        </ServiceImage>
        <ServiceInfo>
          <ServiceTitle>
            <h5>{serviceNames}</h5>
            {isVerify ? <FcOk /> : ""}
          </ServiceTitle>
          <small>{category.category}</small>
          <small>{serviceEmail}</small>
          <ContactDetails>
            <button>{map_location}</button>
            <button>{contactNo}</button>
          </ContactDetails>
        </ServiceInfo>
      </ServiceCardContainer>
    </>
  );
}

export default ServicesPerPincodeCards;

const ServiceCardContainer = styled.div`
  width: 30%;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 414px) {
    width: 90%;
  }
`;
const ServiceImage = styled.div`
  min-width: 90%;
  margin: 0.5rem auto;
  > img {
    width: 85%;
  }
`;
const ServiceInfo = styled.div``;
const ServiceTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  > svg {
    margin: 0 0.5rem;
  }
`;
const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;

  > button {
    margin: 0.5rem;
    width: 120px;
    height: 35px;
    font-family: hindLight;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #5ab9ea;
    color: #ffffff;
  }

  > button:hover {
    background-color: #ffffff;
    color: #393232;
  }
`;
