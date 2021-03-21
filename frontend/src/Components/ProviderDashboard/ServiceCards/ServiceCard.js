import React from "react";
import { Button, CardBody, CardTitle, CardText } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
// import UpdateService from "../service/UpdateService";

const api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNlZjI0MWQwN2I5MGE5Y2FlZDA0MiIsImlhdCI6MTYxNjMyMDEwMX0.32Jfk5cKTwHMDJsdrW1fttG-Ye17ZDeZhrackm4gBuk";

function ServiceCard(props) {
  // console.log(props);
  const {
    _id,
    serviceNames,
    category,
    description,
    img,
    map_location,
  } = props.data;
  // console.log(category);
  // console.log(serviceNames);
  // console.log(_id);
  // console.log(description);

  function ActionDelete() {
    axios({
      method: "DELETE",
      url: "https://seva-backend1.herokuapp.com/provider/service/" + _id,
      headers: {
        "auth-token": `${api}`,
      },
    })
      .then(function (response) {
        //handle success
        // console.log(response);
        alert("woohh! Cateory Deleted..");
        refreshPage();
        // window.location.reload();
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    //alert("I'm an alert" + _id);
  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <CardContainer key={_id}>
        <ServiceImage>
          <CardTitle> {img} </CardTitle>
        </ServiceImage>
        <CardInnerContainer>
          <InfoContainer>
            <Block>
              <ItemInfo tag="h5"> {serviceNames} </ItemInfo>
              <hr />
              <ItemInfo tag="h5"> {category.category} </ItemInfo>
              <hr />
              <ItemInfo>{description}</ItemInfo>
              <hr />
              <ItemInfo>
                <a href={map_location}>
                  <h5> Map Location </h5>
                </a>
              </ItemInfo>
            </Block>
          </InfoContainer>
        </CardInnerContainer>
        <ButtonContainer>
          <Action>
            <Button color="danger" onClick={ActionDelete}>
              Delete
            </Button>
          </Action>
          <Action>
            <Button color="warning">
              Update 
            </Button>
          </Action>
        </ButtonContainer>
      </CardContainer>
    </>
  );
}

export default ServiceCard;

const CardContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 0.1rem 0.1rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: hindLight;
  /* float: left; */
`;

const CardInnerContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
`;

const InfoContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* align-items: center; */
  > img {
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 10%;
  }
`;

const ServiceImage = styled.div`
  display: flex;
  padding: 0 1rem;
  text-align: left;
  width: 85%;
  color: black;
  > h4 {
    padding: 0;
  }
`;

const Action = styled.div`
  padding: 0 1rem;
  margin-top: 20px;
  align-items: left;
  > button {
    padding: 12;
  }
`;

const Block = styled.div`
  align-items: right;
`;

const ItemInfo = styled.div`
  display: flex;
  font-weight: bold;
  font-family: hindRegular;
`;

const ButtonContainer = styled.div``;
