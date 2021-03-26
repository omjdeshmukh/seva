import React from "react";
import styled from "styled-components";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";

function SuggestionCard({
  voteCount,
  isValid,
  _id,
  user,
  category,
  ServiceDescription,
  ServicePinCode,
  ServiceType,
}) {
  return (
    <>
      <SuggestionCardContainer>
        <SuggestionCardInnerContainer>
          <UserDetais>
            <Avatar>{user.userName.charAt(0).toUpperCase()}</Avatar>
          </UserDetais>
          <SuggestionSection>
            <Suggestion>
              <p>{ServiceDescription}</p>
            </Suggestion>
            <VoteCounts>
              <button type="button">
                <FiThumbsUp />
              </button>
              {voteCount}
              <button type="button">
                <FiThumbsDown />
              </button>
            </VoteCounts>
          </SuggestionSection>
        </SuggestionCardInnerContainer>
      </SuggestionCardContainer>
    </>
  );
}

export default SuggestionCard;

const SuggestionCardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  font-family: hindRegular;
  color: #393232;
  margin: 0.5rem 0;
  border: 1px solid #5ab9ea;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;
const SuggestionCardInnerContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 414px) {
    flex-direction: column;
  }
`;
const UserDetais = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 414px) {
    width: 40%;
    margin: 0.5rem auto;
  }
`;
const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const SuggestionSection = styled.div`
  display: flex;
  width: 85%;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
const Suggestion = styled.div`
  width: 85%;

  @media screen and (max-width: 414px) {
    margin: 0.5rem 0;
  }
`;
const VoteCounts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 15%;

  @media screen and (max-width: 414px) {
    width: 25%;
  }

  > button {
    margin: 0 0.3rem;
    width: 120px;
    height: 35px;
    font-family: hindLight;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #ffffff;
    color: #393232;
  }

  > button:hover {
    background-color: #5ab9ea;
    color: #ffffff;
  }
`;
