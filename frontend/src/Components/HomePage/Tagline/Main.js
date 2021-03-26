import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import Vector from "./vector";
import { getCookieData } from "../../userData";

function Main() {
  const [path, setPath] = useState("/");
  const checkAuth = () => {
    const cookieData = getCookieData();
    if (cookieData.token == null && cookieData.userId == null) {
      setPath(`/login`);
    } else {
      setPath(`/${cookieData.role}/${cookieData.userId}`);
    }
  };

  return (
    <>
      <TaglineContainer>
        {/* Tagline Section */}
        <TaglineSection>
          <h3>We Provide a Bridge</h3>
          <h1>
            If you can't find any Service just <span>Suggest Us</span>.
          </h1>
          <Link to={path}>
            <Button type="button" onClick={checkAuth}>
              Suggest Us
            </Button>
          </Link>
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
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
`;
const TaglineSection = styled.main`
  flex: 2;
  text-align: left;
  padding: 20vh 0;

  @media screen and (max-width: 414px) {
    padding: 10vh 0;
    text-align: center;
    flex: 1;
  }

  > h3 {
    font-size: 25px;
    font-family: hindLight;
    font-weight: 200;

    @media screen and (max-width: 414px) {
      font-size: 20px;
    }
  }

  > h1 {
    line-height: 4rem;
    font-family: hindMedium;
    font-weight: 300;
    font-size: 50px;
    width: 80%;

    @media screen and (max-width: 414px) {
      line-height: 3rem;
      font-size: 40px;
      margin: 0 auto;
    }

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
  flex: 1;

  @media screen and (max-width: 414px) {
    display: none;
  }

  > svg {
    width: 100%;
  }
`;
