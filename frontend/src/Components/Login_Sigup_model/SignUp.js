import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";

//Connecting to backend login api

function Register(Credentials) {
  return fetch("http://localhost:5000/register", {
    method: "POST",
    header: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(Credentials),
  })
    .then((data) => data.json())
    .catch((err) => err.message);
}

function SignupModal({ open, handleClose }) {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [stateValue, setStateValue] = useState("");

  const handleEmailChange = (event) => {
    //  getting the Email
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    //  getting the Username
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    //  getting the Password value
    setPassword(event.target.value);
  };

  const handleRadioChange = (event) => {
    //  getting the radio value
    setRole(event.target.value);
  };

  const handleCityChange = (event) => {
    //  getting the radio value
    setCity(event.target.value);
  };

  const handlePincodeChange = (event) => {
    //  getting the radio value
    setPincode(event.target.value);
  };

  const handleStateChange = (event) => {
    //Getting state value
    setStateValue(event.target.value);
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    // Data send back to server
    // getting back UserId on submit
    const userId = await Register({
      userName: username,
      fullName: username,
      email: email,
      role: role,
      state: stateValue,
      city: city,
      village: city,
      pincode: pincode,
      password: password,
    });
    console.log(userId);
  };

  const LoginForm = (
    <FormContainer>
      <h3>Sign Up ({})</h3>
      <form action="" onSubmit={handleSignupSubmit}>
        {/* Choose User Or Proider */}
        <Choose>
          <FormControl component="fieldset">
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              aria-label="Role"
              name="Role"
              value={role}
              onChange={handleRadioChange}
            >
              {/* User */}
              <RadioContainer>
                <FormControlLabel
                  value="User"
                  control={<Radio color="primary" />}
                  label="User"
                />
                {/* Provider */}
                <FormControlLabel
                  value="Provider"
                  control={<Radio color="primary" />}
                  label="Provider"
                />
              </RadioContainer>
            </RadioGroup>
          </FormControl>
        </Choose>
        {/* Username */}
        <Username>
          <TextField
            id="outlined-text-input"
            label="Username"
            type="text"
            autoComplete="off"
            variant="outlined"
            onChange={handleUsernameChange}
          />
        </Username>
        {/* password */}
        <Password>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={handlePasswordChange}
          />
        </Password>
        {/* Email */}
        <Email>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="off"
            variant="outlined"
            onChange={handleEmailChange}
          />
        </Email>
        {/* Location Section */}
        <Location>
          <FormLabel>Location</FormLabel>
          {/* Pincode */}
          <Pincode>
            <TextField
              id="outlined-number-input"
              label="Pincode"
              type="number"
              autoComplete="off"
              variant="outlined"
              value={pincode}
              onChange={handlePincodeChange}
            />
          </Pincode>
          {/* State */}
          <State>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                State
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={stateValue}
                onChange={handleStateChange} //Add event
                label="Age"
              >
                <MenuItem value="">
                  <em>States</em>
                </MenuItem>
                {/* rerender state list */}
                <MenuItem value={"Madhya Pradesh"}>Mp</MenuItem>
                <MenuItem value={"Utter Pradesh"}>Up</MenuItem>
                <MenuItem value={"Telangana"}>Tg</MenuItem>
                <MenuItem value={"Maharashtra"}>Mh</MenuItem>
              </Select>
            </FormControl>
          </State>
          {/* City */}
          <City>
            <TextField
              id="outlined-text-input"
              label="City"
              type="text"
              autoComplete="off"
              variant="outlined"
              onChange={handleCityChange}
            />
          </City>
        </Location>
        <Button type="submit">Sign Up</Button>
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
  /* max-height: 100vh; */
  padding: 2rem 0;
  width: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  align-self: center;
  position: absolute;
  top: 0%;
  left: 40%;
  background-color: #fff;

  > form > button {
    margin-top: 1rem;
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
const Choose = styled.div``;
const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
