import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getCookieData } from "../userData";
import SuggestionCard from "./SuggestionCards/SuggestionCard";

function Suggestions() {
  const [suggestion, setSuggestion] = useState();
  const cookieData = getCookieData();

  const { pincode } = cookieData;

  useEffect(() => {
    fetch(`https://seva-backend1.herokuapp.com/suggestionByPincode/${pincode}`)
      .then((response) => response.json())
      .then((response) => setSuggestion(response))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <SuggestionContainer>
        <SuggestionInnerContainer>
          {suggestion &&
            suggestion.map((item, index) => {
              console.log(item);
              return (
                <>
                  <SuggestionCard key={index} {...item} />
                </>
              );
            })}
        </SuggestionInnerContainer>
      </SuggestionContainer>
    </>
  );
}

export default Suggestions;

const SuggestionContainer = styled.div``;
const SuggestionInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
