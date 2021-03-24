import React, { useState } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { getCookieData, setCookieData } from "../../userData";

function Prompt(props) {
  const [pincode, setPincode] = useState();

  const handleClose = () => {
    props.setClose(true);
  };

  const handlePincodeChange = (event) => {
    if (event.target.value == undefined || event.target.value == null) {
      //Do Noting
    } else {
      setPincode(event.target.value);
    }
  };

  const handlePincodeSubmit = (event) => {
    event.preventDefault();
    if (pincode == undefined || pincode == null) {
      //Do Noting
    } else {
      let cookieData = getCookieData();
      cookieData.pincode = pincode;
      setCookieData(cookieData);
      props.setPincodeExist(true);
    }
  };

  return (
    <>
      <PromptFullScreen>
        <PromptContainer>
          <Form onSubmit={handlePincodeSubmit}>
            <FormGroup>
              <Label check for="radio1-option1">
                Please Enter your Pincode
              </Label>
              <Input
                type="text"
                name="pincode"
                id="exampleEmail"
                autoComplete="off"
                placeholder="Pincode"
                onChange={handlePincodeChange}
              />
              <Button type="submit">Submit</Button>
            </FormGroup>
          </Form>
        </PromptContainer>
        <button type="button" onClick={handleClose}>
          <FiX />
        </button>
      </PromptFullScreen>
    </>
  );
}

export default Prompt;

const PromptFullScreen = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin: 0.5rem;
    width: 50px;
    height: 35px;
    position: absolute;
    top: 0;
    right: 0;
    font-family: hindLight;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 100;
    border: none;
    background-color: transparent;
    border-radius: 1px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    border: none;
    color: #5ab9ea;
  }

  > button:hover {
    font-size: 2rem;
  }
`;
const PromptContainer = styled.div`
  /* position: absolute; */
  border: 1px solid #5ab9ea;
  max-width: 400px;
  max-height: 150px;
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5rem;
  > form > .form-group > label {
    font-size: 10px;
    padding: 10px 0;
  }

  > form > .form-group > button {
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
    color: #fff;
  }

  > form > .form-group > button:hover {
    background-color: #fff;
    color: #393232;
  }
`;
