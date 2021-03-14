import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignupModal from "../Login_Sigup_model/SignUp";
import LoginModal from "../Login_Sigup_model/Login";

function Navbar({ setToken }) {
  // For Login and Signup section
  // State to open and close modal
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  // Open modal handler
  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  // Close modal handler
  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignupOpen = () => {
    setSignupOpen(true);
  };

  // Close modal handler
  const handleSignupClose = () => {
    setSignupOpen(false);
  };

  const handleLogOut = () => {
    console.log("Hello");
    sessionStorage.removeItem("token");
    setToken();
  };

  return (
    <>
      <NavbarContainer>
        {/* Brand Container */}
        <BrandContainer>
          <Link to="#">
            <h3>SEVA</h3>
          </Link>
        </BrandContainer>
        {/* Navigation Options */}
        <NavContainer>
          <Link to="#">Services</Link>
          <Link to="/" type="button" onClick={handleLogOut}>
            Suggestions
          </Link>
          <Link to="/" type="button" onClick={handleLoginOpen}>
            Log in
          </Link>
          <Link to="#" type="button" onClick={handleSignupOpen}>
            Sign up
          </Link>
          <SignupModal open={signupOpen} handleClose={handleSignupClose} />
          <LoginModal
            setToken={setToken}
            open={loginOpen}
            handleClose={handleLoginClose}
          />
        </NavContainer>
      </NavbarContainer>
    </>
  );
}

export default Navbar;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--font-color);
`;

const BrandContainer = styled.div`
  > a > h3 {
    color: var(--main-color);
  }
`;
const NavContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  > a {
    padding: 0.5rem 1rem;
    font-weight: 200;
    border: 0.5px solid transparent;
  }

  > a:hover {
    border: none;
    border-bottom: 0.5px solid var(--main-color);
    font-weight: 400;
  }
`;
