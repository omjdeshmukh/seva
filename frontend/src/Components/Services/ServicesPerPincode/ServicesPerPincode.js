import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ServicesPerPincode() {
  const [services, setService] = useState();
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData) {
      setPincode(userData.pincode);
      console.log(pincode);
    }

    fetch(`http://localhost:5000/service/${pincode}`)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <ServicePerPincodeContainer>
        <h1>Hello services pincode</h1>
      </ServicePerPincodeContainer>
    </>
  );
}
export default ServicesPerPincode;

const ServicePerPincodeContainer = styled.div``;
