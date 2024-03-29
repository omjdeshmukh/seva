import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

function Footer() {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterAboutUs>
          <h3>SEVA</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, animi
            fuga? Commodi magnam nam nostrum soluta laudantium quas impedit eum
            placeat error?
          </p>
          <SocialLinks>
            <Link to="#">
              <li>
                <img src="/Assets/Icons/Facebookicon.png" alt="Facebook icon" />
              </li>
            </Link>
            <Link to="#">
              <li>
                <img
                  src="/Assets/Icons/Intagramicon.png"
                  alt="Instagram icon"
                />
              </li>
            </Link>
            <Link to="#">
              <li>
                <img src="/Assets/Icons/Googleicon.png" alt="Linkden icon" />
              </li>
            </Link>
            <Link to="#">
              <li>
                <img src="/Assets/Icons/Githubicon.png" alt="Linkden icon" />
              </li>
            </Link>
          </SocialLinks>
        </FooterAboutUs>
        <FooterServices>
          <FooterServiceDiv>
            <ServiceIcon>
              <img src="/Assets/Icons/Caresupporticon.png" />
            </ServiceIcon>
            <ServiceInfo>
              <h4>24/7 Support:</h4>
              <p>1234 123 123</p>
            </ServiceInfo>
          </FooterServiceDiv>
          <FooterServiceDiv>
            <ServiceIcon>
              <img src="/Assets/Icons/Messageicon.png" />
            </ServiceIcon>
            <ServiceInfo>
              <h4>Say Hello To Us</h4>
              <p>Click Here to Contact Us</p>
            </ServiceInfo>
          </FooterServiceDiv>
          <FooterServiceDiv>
            <ServiceIcon>
              <img src="/Assets/Icons/Locationicon.png" />
            </ServiceIcon>
            <ServiceInfo>
              <h4>Our Active Location</h4>
              <p>167 Airline Suite, 456GA3, UK</p>
            </ServiceInfo>
          </FooterServiceDiv>
        </FooterServices>
        <FooterFormSection>
          <h4>Signup NewsLetter</h4>
          <form action="/action_page.php" id="form1">
            <input
              placeholder="Enter Your Email"
              type="text"
              id="fname"
              name="fname"
              autocomplete="off"
            />
            <button type="">
              <BsArrowRightShort />
            </button>
          </form>
          <h4>Download Mobile</h4>
        </FooterFormSection>
      </FooterInnerContainer>
      <FooterCopyright>
        <FooterCopyrightInnerContainer>
          <p>
            Copyrights © 2021. All Rights Reserved by <span>SEVA</span>
          </p>
        </FooterCopyrightInnerContainer>
      </FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #393232;
  font-family: hindLight;
  font-size: 0.9rem;
`;

const FooterInnerContainer = styled.div`
  padding: 3rem 0;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 414px) {
    flex-direction: column;
  }
`;

const FooterAboutUs = styled.div`
  flex: 2;
  padding: 0 0.5rem 0 0;

  @media screen and (max-width: 414px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  > h3 {
    padding: 0.5rem 0;
    font-family: hindMedium;
    color: #5ab9ea;

    @media screen and (max-width: 414px) {
      font-family: hindRegular;
      padding: 0;
    }
  }
  > p {
    width: 95%;
    font-size: 0.9rem;
    padding: 0.5rem 0;
    color: #ffffff;

    @media screen and (max-width: 414px) {
      padding: 0.4rem 0;
      font-size: 0.7rem;
    }
  }
`;

const SocialLinks = styled.ul`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  > a > li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    width: 15px;
    height: 15px;
  }

  > a > li > img {
    width: 100%;
  }
`;

const FooterServices = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 414px) {
    align-items: center;
    text-align: center;
    border-top: 1px solid #5ab9ea;
    border-bottom: 1px solid #5ab9ea;
    margin: 1rem 0;
  }
`;

const FooterServiceDiv = styled.div`
  margin: 0.8rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ServiceIcon = styled.div`
  width: 15px;
  height: 15px;

  @media screen and (max-width: 414px) {
    width: 25px;
    height: 25px;
    margin: 0.4rem 0;
  }

  > img {
    width: 100%;

    @media screen and (max-width: 414px) {
      width: 100%;
    }
  }
`;
const ServiceInfo = styled.div`
  padding: 0 0.7rem;
  color: #ffffff;

  > h4 {
    font-weight: 500;
    font-size: 12px;
  }

  > p {
    font-size: 11px;
    font-weight: 200;
  }
`;

const FooterFormSection = styled.div`
  flex: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 414px) {
    justify-content: space-between;
    align-items: center;
  }

  > h4 {
    font-weight: 300;
    font-size: 1.2rem;
  }
  > form {
    padding: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  > form > input {
    border: none;
    padding: 10px;
    border-radius: 5px 0px 0px 5px;
  }
  > form > button {
    background-color: #5ab9ea;
    padding: 10px;
    border: none;
    border-radius: 0px 5px 5px 0px;
  }
`;

const FooterCopyright = styled.div`
  border-top: 0.5px solid #5ab9ea;
  padding: 1rem 0;
`;

const FooterCopyrightInnerContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  > p {
    font-family: hindLight;
    font-weight: 300;
    color: #ffffff;
    font-size: 0.8rem;

    @media screen and (max-width: 414px) {
      text-align: center;
    }

    > span {
      color: #5ab9ea;
    }
  }
`;
