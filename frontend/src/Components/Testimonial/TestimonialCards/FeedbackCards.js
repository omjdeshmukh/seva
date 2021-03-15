import React from "react";
import styled from "styled-components";

function FeedbackCard(props) {
  const { user, feedback } = props.feedback;
  console.log(user);
  return (
    <>
      <FeedbackCardContainer>
        <FeedbackCardInnerContainer>
          <UserInfoContainer>
            <img src={user.img} alt="" />
            <UserInfo>
              <h4>
                {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}
              </h4>
              <small>{user.city.toUpperCase()}</small>
            </UserInfo>
          </UserInfoContainer>
          <p>{feedback}</p>
        </FeedbackCardInnerContainer>
      </FeedbackCardContainer>
    </>
  );
}

export default FeedbackCard;

const FeedbackCardContainer = styled.div`
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-radius: 10px;
  background-color: #39afec;
  font-family: hindLight;
`;
const FeedbackCardInnerContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  > p {
    text-align: left;
    padding: 1rem 0;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  > img {
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 50%;
  }
`;
const UserInfo = styled.div`
  padding: 0 1rem;
  text-align: left;

  > h4 {
    padding: 0;
  }
`;
