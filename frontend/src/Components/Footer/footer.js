<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import LanguageIcon from "@material-ui/icons/Language";
import HeadsetIcon from "@material-ui/icons/Headset";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Appstore from "./images/appstore.png";
import Playstore from "./images/appstore.png";
=======
import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import LanguageIcon from '@material-ui/icons/Language';
import HeadsetIcon from '@material-ui/icons/Headset';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Appstore from './images/appstore.png'
import Playstore from './images/playstore.png'
>>>>>>> c660e695547959fe505f2b7ba581d2dd8fe10819

function Footer() {
  return (
    <div>
      <Container>
        <First>
          <h1>Seva</h1>
          <p>
            Consectetur adipisicing elit sed do eiusmod tempor incididunt labore
            etolore magna aliqua enim adena minim veniam quistane nostrud catate
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <FirstContainer>
            <FacebookIcon style={{ width: 50 }} />
            <InsertCommentIcon style={{ width: 50 }} />
            <LanguageIcon style={{ width: 50 }} />
            <GitHubIcon style={{ width: 50 }} />
          </FirstContainer>
        </First>
        <Second>
          <SecondContainer>
            <Image>
              <HeadsetIcon style={{ color: "yellow" }} />
            </Image>
            <Column>
              <span>24/7 Support:</span>
              <span>0800 12345 678</span>
            </Column>
          </SecondContainer>
          <SecondContainer>
            <Image>
              {" "}
              <EmailIcon style={{ color: "yellow" }} />
            </Image>
            <Column>
              <span>Say Hello To Us</span>
              <span>Click Here to Contact Us</span>
            </Column>
          </SecondContainer>
          <SecondContainer>
            <Image>
              <LocationOnIcon style={{ color: "yellow" }} />
            </Image>
            <Column>
              <span>Our Active Location</span>
              <span>167 Airline Suite, 456GA3, UK</span>
            </Column>
          </SecondContainer>
        </Second>
        <Third>
          <h4>Download Mobile App</h4>
          <App>
            <img src={Appstore} alt="Appstore" />
            <img src={Playstore} alt="playstore" />
          </App>
        </Third>
      </Container>
      <Copyrights>
        <p>Copyrights © 2021. All Rights Reserved by Seva.</p>
      </Copyrights>
    </div>
  );
}
export default Footer;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #363636;
  color: white;
  display: flex;
  border-bottom: 1px solid grey;
  padding-top: 50px;
`;

const First = styled.div`
  width: 40%;
  margin-left: 100px;
  margin-right: 20px;
  padding: 15px;
`;
const FirstContainer = styled.div`
  padding-top: 15px;
`;

const Second = styled.div`
  width: 30%;
  margin-left: 20px;
`;
const SecondContainer = styled.div`
  display: flex;
  padding: 10px;
`;
const Image = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Third = styled.div`
  width: 30%;
  h4 {
    padding: 15px;
  }
`;
const App = styled.div`
  img {
    width: 130px;
    border-radius: 6px;
    padding: 15px;
  }
`;
const Copyrights = styled.div`
  background-color: #363636;
  color: white;
  padding: 15px;
  p {
    text-align: center;
  }
`;
<<<<<<< HEAD
=======
const Copyrights=styled.div`
background-color:#363636;
color:white;
padding:15px;
p{
   text-align:center;
}
`;
>>>>>>> c660e695547959fe505f2b7ba581d2dd8fe10819
