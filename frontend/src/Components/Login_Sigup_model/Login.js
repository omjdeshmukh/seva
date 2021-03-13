import React from "react";
import styled from "styled-components";
import { Modal } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";

function LoginModal({ open, handleClose }) {
  const LoginForm = (
    <FormContainer>
      <form action="" onSubmit="">
        {/* Choose User Or Proider */}
        <Choose>
          <FormControlLabel
            label="User"
            value="User"
            control={<Checkbox color="primary" />}
            inputProps={{ "aria-label": "User" }}
            labelPlacement="end"
          />
          <FormControlLabel
            label="Provider"
            value="Provider"
            control={<Checkbox color="primary" />}
            inputProps={{ "aria-label": "Provider" }}
            labelPlacement="end"
          />
        </Choose>
        {/* Username  */}
        <Username>
          <TextField
            id="outlined-text-input"
            label="Username"
            type="text"
            autoComplete="off"
            variant="outlined"
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
          />
        </Password>
        <Button onSubmit="">Log In</Button>
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

export default LoginModal;

const FormContainer = styled.div`
  height: 80vh;
  width: 50vh;
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
const Choose = styled.div``;
