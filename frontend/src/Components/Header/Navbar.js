import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import userData, { getCookieData } from "../userData";

function Navbar() {
  const [tokenExist, setTokenExist] = useState(false);
  const cookieData = getCookieData();

  const handleLogOut = () => {
    document.cookie = JSON.stringify(userData);
    window.location.reload();
  };
  useEffect(() => {
    if (cookieData.userId != null && cookieData.role != null) {
      setTokenExist(true);
    }
  }, []);

  return (
    <>
      <NavbarContainer>
        {/* Brand Container */}
        <BrandContainer>
          <Link to="/">
            <h3>SEVA</h3>
          </Link>
        </BrandContainer>
        {/* Navigation Options */}
        <NavContainer>
          <Link to="/services">Services</Link>
          <Link to="#" type="button">
            Suggestions
          </Link>
          {cookieData.userId != null && cookieData.role != null ? (
            <>
              <Link
                to={
                  cookieData.role == "provider"
                    ? `/provider/${cookieData.userId}`
                    : `/user/${cookieData.userId}`
                }
                type="button"
              >
                DashBoard
              </Link>
              <Link to="#" type="button" onClick={handleLogOut}>
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" type="button">
                Log In
              </Link>
              <Link to="/signup" type="button">
                Sign Up
              </Link>
            </>
          )}
        </NavContainer>
        <MobileViewNav>
          <div className="Burger"></div>
          <div className="Burger"></div>
          <div className="Burger"></div>
        </MobileViewNav>
      </NavbarContainer>
    </>
  );
}

export default Navbar;

const MobileViewNav = styled.nav`
  display: none;

  @media screen and (max-width: 414px) {
    display: block;
  }

  > .Burger {
    background-color: #5ab9ea;
    width: 30px;
    height: 3px;
  }

  > .Burger:nth-child(2) {
    margin: 1.3px 0;
  }
`;
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--font-color);

  @media screen and (max-width: 414px) {
    padding: 1rem 0;
    align-items: baseline;
  }
`;

const BrandContainer = styled.div`
  > a {
    text-decoration: none;
  }
  > a > h3 {
    color: var(--main-color);

    @media screen and (max-width: 414px) {
      font-size: 1rem;
    }
  }
`;
const NavContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 414px) {
    display: none;
  }

  > a {
    color: #393232;
    font-size: 15px;
    padding: 0.5rem 1rem;
    font-weight: 200;
    border-bottom: 0.5px solid transparent;
  }

  > a:hover {
    border: none;
    border-bottom: 0.5px solid var(--main-color);
    font-weight: 400;
    text-decoration: none;
  }
`;
