import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ServicesPerPincodeCards from "./ServicePerPincodeCards/ServicePerPincodeCards";

function ServicesPerPincode(props) {
  const { _id, pincode } = props.match.params;
  const [services, setService] = useState();

  useEffect(() => {
    fetch(`https://seva-backend1.herokuapp.com/serviceByPin/${pincode}`)
      .then((response) => response.json())
      .then((response) => setService(response))
      .catch((err) => console.log(err.message));
  }, []);

  const requiredService =
    services && services.filter((item) => item.category._id === _id);

  console.log(Array.isArray(requiredService));

  return (
    <>
      <ServicePerPincodeContainer>
        <h1>Hello services as per pincode</h1>
        <ServicePerPincodeInnerContainer>
          {requiredService && requiredService.length != 0 ? (
            <>
              {requiredService &&
                requiredService.map((item, index) => {
                  return (
                    <>
                      <ServicesPerPincodeCards {...item} />
                    </>
                  );
                })}
            </>
          ) : (
            <>
              <NoServiceDiv>
                <h6>
                  Sorry! No service available yet, But you can{" "}
                  <Link to={"/login"}>login</Link> and <span>Suggest Us.</span>
                </h6>
              </NoServiceDiv>
            </>
          )}
        </ServicePerPincodeInnerContainer>
      </ServicePerPincodeContainer>
    </>
  );
}
export default ServicesPerPincode;

const ServicePerPincodeContainer = styled.div`
  font-family: hindLight;

  > h1 {
    @media screen and (max-width: 414px) {
      font-size: 1.5rem;
    }
  }
`;
const ServicePerPincodeInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 414px) {
    flex-direction: column;
  }
`;

const NoServiceDiv = styled.div`
  > h6 > a {
    font-family: hindMedium;
    text-decoration: none;
    color: #393232;
    font-weight: 300;
  }

  h6 > span {
    font-family: hindMedium;
    text-decoration: none;
    color: #5ab9ea;
    font-weight: 300;
  }
`;
