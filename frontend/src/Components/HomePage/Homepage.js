import React, { useState, useEffect } from "react";
import Main from "./Tagline/Main";
import MostVisitedServices from "./MostVisitedServices/MostVisitedServices";
import Feedback from "./Testimonial/Feedback";
import Prompt from "./Prompt/Prompt";
import userData, { getCookieData } from "../userData";

function Homepage() {
  const [close, setClose] = useState(false);
  const [checkPincode, setCheckPincode] = useState();
  const [pincodeExist, setPincodeExist] = useState(false);

  useEffect(() => {
    let cookieData = getCookieData();

    if (pincodeExist) {
      setCheckPincode(cookieData.pincode);
    }

    if (cookieData.pincode) {
      setCheckPincode(cookieData.pincode);
    }
  });

  return (
    <>
      <Main />
      <MostVisitedServices />
      <Feedback />
      {checkPincode != null || close ? (
        ""
      ) : (
        <Prompt setClose={setClose} setPincodeExist={setPincodeExist} />
      )}
    </>
  );
}

export default Homepage;
