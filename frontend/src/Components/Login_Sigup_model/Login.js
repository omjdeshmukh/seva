import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

//Connecting to backend login api
async function LoginUser(Credentials) {
  console.log(Credentials);
  return fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Credentials),
  })
    .then((data) => data.json())
    .catch((err) => err.message);
}

function LoginModal({ open, handleClose, setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    //  getting the Username or Email value
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    //  getting the Password value
    setPassword(event.target.value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    // getting back token session key on submit
    const token = await LoginUser({
      email,
      password,
    });
    setToken(token);
  };

  const LoginForm = (
    <FormContainer>
      <form action="" onSubmit={handleLoginSubmit}>
        {/* Username  */}
        <Username>
          <TextField
            id="outlined-text-input"
            label="Email"
            type="email"
            autoComplete="off"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
        </Username>
        {/* Password */}
        <Password>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
          />
        </Password>
        <Button type="submit">Log In</Button>
      </form>
    </FormContainer>
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {LoginForm}
      </Modal>
    </>
  );
}

LoginUser.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginModal;

const FormContainer = styled.div`
  min-height: 80vh;
  min-width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  align-self: center;
  position: absolute;
  top: 10%;
  left: 40%;
  background-color: #fff;

  > form > button {
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
    background-color: #5ab9ea;
    color: #ffffff;
  }

  > form > button:hover {
    color: #000;
  }
`;
const Username = styled.div`
  margin: 0.7rem 0;
`;
const Password = styled.div`
  margin: 0.7rem 0;
`;
