import React from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <LoginContainer>
        <LoginInnerContainer>
          <h3>Welcome!</h3>
          <FormContainer>
            <small>Log in with</small>
            <AuthLinks>
              <button>
                <img src="/Assets/Icons/github.svg" alt="github icon" />
                Github
              </button>
              <button>
                <img src="/Assets/Icons/search.svg" alt="google icon" />
                Google
              </button>
            </AuthLinks>
            <CredentialSection>
              <small>Or Log in with Credentials</small>
              <Form>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    autoComplete="off"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </FormGroup>
                <button type="submit">Login</button>
              </Form>
            </CredentialSection>
          </FormContainer>
        </LoginInnerContainer>
        <OtherOptions>
          <Link to="#">
            <small>Forgot Password?</small>
          </Link>
          <Link to="/signup">
            <small>Create new account</small>
          </Link>
        </OtherOptions>
      </LoginContainer>
    </>
  );
}

export default Login;

const LoginContainer = styled.div`
  font-family: hindLight;
  width: 100%;
  padding: 1rem 0;
`;

const LoginInnerContainer = styled.div`
  width: 40%;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  > h3 {
    font-family: hindRegular;
    font-weight: 400;
  }
`;

const FormContainer = styled.div``;
const AuthLinks = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
  > button {
    margin: 2rem 0.5rem;
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

  > button > img {
    width: 15px;
    height: 15px;
    margin: 0 0.5rem;
  }
`;

const CredentialSection = styled.div`
  padding: 1rem 0;

  > form {
    width: 70%;
    margin: 0 auto;
    padding: 0.5rem 0;

    .form-group {
      > input {
        border: none;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      }
    }

    > button {
      margin: 0.5rem;
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
      background-color: #5ab9ea;
      color: #ffffff;
    }

    > button:hover {
      background-color: #ffffff;
      color: #393232;
    }
  }
`;

const OtherOptions = styled.div`
  width: 40%;
  margin: 0 auto;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #393232;
  }

  > small {
    text-decoration: none;
  }
`;