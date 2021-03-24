import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCookieData, clearCookie } from "../userData";
import { FiX } from "react-icons/fi";

function MobieNavBar(props) {
  const [tokenExist, setTokenExist] = useState(false);
  const cookieData = getCookieData();

  const handleClose = () => {
    props.setSideNavData(false);
  };

  const handleLogOut = () => {
    clearCookie();
    setTokenExist(false);
    handleClose();
  };
  useEffect(() => {
    if (cookieData.userId != null && cookieData.role != null) {
      setTokenExist(true);
    }
  });

  return (
    <>
      <MobieNavContainer {...props}>
        <NavContainer>
          <Link to="/services" type="button" onClick={handleClose}>
            Services
          </Link>
          <Link to="/suggestions" type="button" onClick={handleClose}>
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
                onClick={handleClose}
              >
                DashBoard
              </Link>
              <Link to="#" type="button" onClick={handleLogOut}>
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" type="button" onClick={handleClose}>
                Log In
              </Link>
              <Link to="/signup" type="button" onClick={handleClose}>
                Sign Up
              </Link>
            </>
          )}
        </NavContainer>
        <button type="button" onClick={handleClose}>
          <FiX />
        </button>
      </MobieNavContainer>
    </>
  );
}

export default MobieNavBar;

const MobieNavContainer = styled.div`
  font-family: hindRegular;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  transition: all 1s ease-in-out;
  left: ${(props) => (props.sideNavData ? "0" : "-6000px")};
  overflow-x: ${(props) => (props.sideNavData ? "hidden" : "visible")};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 20;
  background-color: ${(props) =>
    props.sideNavData ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,1)"};
  > button {
    position: absolute;
    top: 5px;
    right: 10px;
    border: none;
    background-color: transparent;
    > svg {
      color: #fff;
    }

    &:hover {
      > svg {
        color: #5ab9ea;
      }
    }
  }
`;

const NavContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  > a {
    color: #5ab9ea;
  }

  > a:hover {
    text-decoration: none;
    color: #fff;
  }
`;
