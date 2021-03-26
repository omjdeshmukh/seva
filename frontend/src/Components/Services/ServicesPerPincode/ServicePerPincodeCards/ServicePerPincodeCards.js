import React from "react";
import styled from "styled-components";
import { FcOk } from "react-icons/fc";
import { BiMap } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";

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
          <img src={image} alt="" />
        </ServiceImage>
        <ServiceInfo>
          <ServiceTitle>
            <h5>{serviceNames}</h5>
            {isVerify ? <FcOk /> : ""}
          </ServiceTitle>
          <OtherDetails>
            <small>{category.category}</small>
            <small>{serviceEmail}</small>
          </OtherDetails>
          <ContactDetails>
            <button>
              <BiMap />
              {map_location}
            </button>
            <button>
              <BiPhone />
              {contactNo}
            </button>
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
  border-radius: 10px;
  flex-direction: column;
  min-height: 15rem;

  @media screen and (max-width: 414px) {
    width: 90%;
  }
`;
const OtherDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;
const ServiceImage = styled.div`
  min-width: 90%;
  margin: 0.5rem auto;
  border: 1px solid #000;
  min-height: 11rem;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
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
