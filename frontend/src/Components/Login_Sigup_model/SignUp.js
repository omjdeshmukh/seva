import React from "react";
import styled from "styled-components";
import { Modal } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";

function SignupModal({ open, handleClose }) {
  const LoginForm = (
    <FormContainer>
      <h3>Sign Up ({})</h3>
      <form action="" onSubmit="">
        <Username>
          <TextField
            id="outlined-text-input"
            label="Username"
            type="text"
            autoComplete="off"
            variant="outlined"
          />
        </Username>
        <Password>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </Password>
        <Email>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="off"
            variant="outlined"
          />
        </Email>
        <Location>
          <FormLabel>Location</FormLabel>
          <State>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                State
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                //   value={age}
                //   onChange={handleChange} //Add event
                label="Age"
              >
                <MenuItem value="">
                  <em>States</em>
                </MenuItem>
                {/* rerender state list */}
                <MenuItem value={10}>Mp</MenuItem>
                <MenuItem value={20}>Up</MenuItem>
                <MenuItem value={30}>Tg</MenuItem>
                <MenuItem value={30}>Mh</MenuItem>
              </Select>
            </FormControl>
          </State>
          <City>
            <TextField
              id="outlined-text-input"
              label="City"
              type="text"
              autoComplete="off"
              variant="outlined"
            />
          </City>
          <Pincode>
            <TextField
              id="outlined-number-input"
              label="Pincode"
              type="number"
              autoComplete="off"
              variant="outlined"
            />
          </Pincode>
        </Location>
        <Button onSubmit="">Sign Up</Button>
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

export default SignupModal;

const FormContainer = styled.div`
  padding: 2rem 0;
  width: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  align-self: center;
  position: absolute;
  top: 5%;
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
const Email = styled.div`
  margin: 0.7rem 0;
`;
const Location = styled.div`
  padding: 0.7rem 0;
`;
const State = styled.div`
  margin: 1rem 0;
`;
const City = styled.div`
  margin: 1rem 0;
`;
const Pincode = styled.div`
  margin: 1rem 0;
`;
