import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getCookieData } from "../userData";
import SuggestionCard from "./SuggestionCards/SuggestionCard";
import Vector from "./vector";
import { Link } from "react-router-dom";

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
      {pincode ? (
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
      ) : (
        <>
          <NoServiceDiv>
            <h6>
              Sorry! No Suggustions available yet, But you can{" "}
              <Link to={"/login"}>login</Link> and <span>Suggest Us.</span>
            </h6>
            <VectorContainer>
              <Vector />
            </VectorContainer>
          </NoServiceDiv>
        </>
      )}
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

const NoServiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const VectorContainer = styled.div`
  width: 150px;
  height: 150px;

  > svg {
    width: 100%;
    height: 15rem;
  }
`;
