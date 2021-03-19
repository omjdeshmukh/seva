import { func } from "prop-types";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import HomePage from "../HomePage/Homepage";
import ServicesPerPincodeCards from "../Services/ServicesPerPincode/ServicePerPincodeCards/ServicePerPincodeCards";

function Protected({
  component: Component,
  computedMatch: computedMatch,
  ...rest
}) {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return computedMatch.params.id === userData.userId ? (
            <Component {...rest} {...props} />
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    </>
  );
}

export default Protected;
