import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

async function userRegistration(Credentials) {
  return fetch("https://seva-backend1.herokuapp.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Credentials),
  })
    .then((data) => data.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));
}

const getAddress = (Pincode) => {
  return fetch(`https://api.postalpincode.in/pincode/${Pincode}`)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => console.log(error.message));
};

function Signup() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();
  const [password, setPassword] = useState();
  const [pincode, setPincode] = useState();

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleRadioChange = (event) => {
    setRole(event.target.value);
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem("userData"));

    const address = await getAddress(userData ? userData.pincode : pincode);
    const { District, State, Name, Pincode, Block } = address[0].PostOffice[0];
    const Credentials = {
      userName: username,
      fullName: username,
      email: email,
      password: password,
      role: role,
      state: State,
      city: Name,
      village: Block,
      pincode: Pincode,
    };
    try {
      const response = await userRegistration(Credentials);
      console.log(response.data);
      userData.userId = response.data.userId;
      userData.role = role;
      sessionStorage.setItem("userData", JSON.stringify(userData));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <SignContainer>
        <SignupInnerContainer>
          <small>Sign up with</small>
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
            <Form onSubmit={handleRegisterSubmit}>
              <Role>
                <FormGroup check>
                  <Input
                    id="radio1-option1"
                    type="radio"
                    value="User"
                    name="role"
                    onChange={handleRadioChange}
                  />
                  <Label check for="radio1-option1">
                    User
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    type="radio"
                    name="role"
                    value="Provider"
                    id="radio1-option2"
                    onChange={handleRadioChange}
                  />
                  <Label check for="radio1-option2">
                    Provider
                  </Label>
                </FormGroup>
              </Role>
              <FormGroup>
                <Input
                  type="text"
                  name="username"
                  id="exampleEmail"
                  autoComplete="off"
                  placeholder="User Name"
                  onChange={handleUserNameChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  autoComplete="off"
                  placeholder="Email"
                  onChange={handleEmailChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  autoComplete="off"
                  onChange={handlePasswordChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="pincode"
                  id="examplePassword"
                  placeholder="Pincode"
                  autoComplete="off"
                  value={
                    sessionStorage.getItem("pincode")
                      ? sessionStorage.getItem("pincode")
                      : pincode
                  }
                  onChange={handlePincodeChange}
                />
              </FormGroup>
              <button type="submit">Sign Up</button>
            </Form>
          </CredentialSection>
        </SignupInnerContainer>
      </SignContainer>
    </>
  );
}

export default Signup;

const SignContainer = styled.div`
  font-family: hindLight;
  width: 100%;
  padding: 1rem 0;
`;

const SignupInnerContainer = styled.div`
  width: 40%;
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

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

const Role = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
