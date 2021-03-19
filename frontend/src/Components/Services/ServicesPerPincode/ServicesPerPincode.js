import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ServicesPerPincodeCards from "./ServicePerPincodeCards/ServicePerPincodeCards";

function ServicesPerPincode(props) {
  const { category, pincode } = props.match.params;
  const [services, setService] = useState();

  useEffect(() => {
    fetch(`https://seva-backend1.herokuapp.com/serviceByPin/${pincode}`)
      .then((response) => response.json())
      .then((response) => setService(response))
      .catch((err) => console.log(err.message));
  }, []);

  const requiredService =
    services && services.filter((item) => item.category.category === category);

  return (
    <>
      <ServicePerPincodeContainer>
        <h1>Hello services as per pincode</h1>
        <ServicePerPincodeInnerContainer>
          {/* {requiredService.length !== 0 ? (
            <> */}
          {requiredService &&
            requiredService.map((item, index) => {
              return (
                <>
                  <ServicesPerPincodeCards {...item} />
                </>
              );
            })}
          {/* </>
          ) : (
            <>
              <div>
                <h6>
                  Sorry! No service available yet, But you can login and Suggest
                  Us
                </h6>
              </div>
            </>
          )} */}
        </ServicePerPincodeInnerContainer>
      </ServicePerPincodeContainer>
    </>
  );
}
export default ServicesPerPincode;

const ServicePerPincodeContainer = styled.div``;
const ServicePerPincodeInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
