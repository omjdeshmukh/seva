import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Button } from "reactstrap";
import { getCookieData } from "../../userData";

function FeedbackCard(props) {
  const cookieData = getCookieData();
  const token = cookieData.token;

  function ActionDelete() {
    axios("https://seva-backend1.herokuapp.com/user/feedback/" + `${props.feedbackid}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then((data) => {
        alert("user suggestion deleted succesfully");
      })
      .catch((err) => {
        alert("someting went wrong !!!" + err.message);
      });
  }

  return (
    <>
      <CardContainer>
        <CardInnerContainer>
          <InfoContainer>
            <Info>
              <small>{props.feedbackinfo}</small>
            </Info>
            <Action>
              <Button color="danger" onClick={ActionDelete}>
                Delete
              </Button>
            </Action>
          </InfoContainer>
        </CardInnerContainer>
      </CardContainer>
    </>
  );
}
export default FeedbackCard;

const CardContainer = styled.div`
  margin: 1rem 0;
  padding: 0.5rem 0;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: hindLight;
`;
const CardInnerContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  // align-items: center;
  > img {
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 10%;
  }
`;
const Info = styled.div`
  padding: 0 1rem;
  text-align: left;
  width: 85%;
  color: black;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h4 {
    padding: 0;
  }
`;

const Action = styled.div`
  padding: 0 1rem;
  /* align-items: right; */
  justify-content:center > button {
    padding: 12;
  }
`;
