import React, { useEffect, useState } from "react";
import { getCookieData } from "../../userData";
import SuggestionCard from "./SuggestionsCard";
import Vector from "./vector";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ShowSuggestion({ pincode, token, userId, role }) {
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    fetch(`https://seva-backend1.herokuapp.com/user/my/suggestion/${userId}`, {
      method: "GET",
      headers: {
        "auth-token": `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      
      {suggestions && suggestions.length != 0 ? (
        <>
        <ScrollContainer>
          {suggestions &&
            suggestions.map((item, i) => {
              return (
                <SuggestionCard
                  key={item._id}
                  suggestionid={suggestions[i]._id}
                  servicetype={suggestions[i].ServiceType}
                  categoryName={suggestions[i].category.category}
                  servicedescription={suggestions[i].ServiceDescription}
                />
              );
            })}
            </ScrollContainer>
        </>
        
      ) : (
        <>
          <NoServiceDiv>
            <h6>Sorry! No Suggestions available yet.</h6>
            <VectorContainer>
              <Vector />
            </VectorContainer>
          </NoServiceDiv>
        </>
      )}
    </div>
  );
}
export default ShowSuggestion;

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

const ScrollContainer =styled.div`
height:500px;
overflow-y:scroll;
overflow-x:hidden;
white-space:wrap;
`;