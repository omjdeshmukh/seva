import { func } from "prop-types";
import React from "react";
import styled from "styled-components";

function ServicesCard(props) {
  let {
    image,
    isVerify,
    map_location,
    serviceEmail,
    serviceName,
    contactNo,
    category,
  } = props;

  return (
    <>
      <ServiceCardContainer>
        <ServiceImage>
          <img src="" alt="" />
        </ServiceImage>
        <SrviceInfo>
          <h5></h5>
        </SrviceInfo>
      </ServiceCardContainer>
    </>
  );
}

export default ServicesCard;

const ServiceCardContainer = styled.div``;
const ServiceImage = styled.div``;
const SrviceInfo = styled.div``;
