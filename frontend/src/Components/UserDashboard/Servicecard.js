import React from "react";
import styled from "styled-components";
function Servicecard(props) {
  const { serviceNames, servicePincode } = props.service;
  return (
    <>
      <CardContainer>
        <CardInnerContainer>
          <InfoContainer>
            {/* <img src={icon} alt="" /> */}
            <Info>
              <h4>{serviceNames}</h4>
              <small>{servicePincode}</small>
            </Info>
          </InfoContainer>
          {/* <Button variant="primary">Edit</Button> */}
        </CardInnerContainer>
      </CardContainer>
    </>
  );
}

export default Servicecard;

const CardContainer = styled.div`
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-radius: 10px;
  background-color: #39afec;
  font-family: hindLight;
`;
const CardInnerContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 2rem 0;
  > p {
    text-align: left;
    padding: 4rem 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  > img {
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 10%;
  }
`;
const Info = styled.div`
  padding: 0 1rem;
  text-align: left;
  color: white;
  > h4 {
    padding: 0;
  }
`;
