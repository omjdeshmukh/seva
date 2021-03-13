import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Vector from "./vector";
import SignupModal from "../Login_Sigup_model/SignUp";

function Main() {
  return (
    <>
      <TaglineContainer>
        {/* Tagline Section */}
        <TaglineSection>
          <h3>We Provide a Bridge</h3>
          <h1>
            If you can't find any Service just <span>Suggest Us</span>.
          </h1>
          <Link to="#">
            <Button>Suggest Us</Button>
          </Link>
          <SignupModal />
        </TaglineSection>
        {/* Vector Section */}
        <VectorSection>
          <Vector />
        </VectorSection>
      </TaglineContainer>
    </>
  );
}

export default Main;

const TaglineContainer = styled.main`
  heignt: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TaglineSection = styled.main`
  text-align: left;
  padding: 20vh 0;

  > h3 {
    font-family: hindLight;
    font-weight: 200;
  }

  > h1 {
    line-height: 4rem;
    font-family: hindMedium;
    font-weight: 300;
    font-size: 55px;
    width: 80%;
    > span {
      color: var(--main-color);
    }
  }

  > a {
  }

  > a > button {
    margin-top: 2rem;
    width: 140px;
    height: 45px;
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
    background-color: var(--main-color);
    color: #ffffff;
  }

  > a > button:hover {
    color: var(--font-color);
    font-weight: 400;
  }
`;

const VectorSection = styled.div`
  > svg {
    width: 95%;
  }
`;
