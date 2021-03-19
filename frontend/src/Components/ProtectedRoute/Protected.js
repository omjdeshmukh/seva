import { func } from "prop-types";
import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import HomePage from "../HomePage/Homepage";
import ServicesPerPincodeCards from "../Services/ServicesPerPincode/ServicePerPincodeCards/ServicePerPincodeCards";
import { getCookieData } from "../userData";

function Protected({
  component: Component,
  computedMatch: computedMatch,
  ...rest
}) {
  const cookieData = getCookieData();

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return (cookieData || cookieData.userId) &&
            computedMatch.params.id === cookieData.userId ? (
            <Component {...rest} {...props} />
          ) : (
            <Redirect to="/" />
            // ""
          );
        }}
      />
    </>
  );
}

export default Protected;
