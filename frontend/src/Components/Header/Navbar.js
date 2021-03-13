import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        {/* Brand Container */}
        <BrandContainer>
          <Link to="#">
            <h3>SEVA</h3>
          </Link>
        </BrandContainer>
      </NavbarContainer>
    </>
  );
}

export default Navbar;

const NavbarContainer = styled.nav`
  background-color: var(--font-color);
`;

const BrandContainer = styled.div`
  background-color: var(--main-color);
  > a > h3 {
    font-family: hindLight;
    color: #fff;
  }
`;
