import React, { useState, useEffect } from "react";
import { Button, CardTitle } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import { getCookieData } from "../../userData";
import UpdateService from "./UpdateService";

const cookieData = getCookieData();
// const __id = cookieData.userId;

function ServiceCard(props) {
  // console.log(props);

  const {
    _id,
    serviceNames,
    category,
    description,
    image,
    map_location,
  } = props.data;

  // console.log(category);
  // console.log(image);
  // console.log(serviceNames);
  // console.log(_id);
  // console.log(description);

  function ActionDelete() {
    axios({
      method: "DELETE",
      url: "https://seva-backend1.herokuapp.com/provider/service/" + _id,
      headers: {
        "auth-token": `${cookieData.token}`,
      },
    })
      .then(function (response) {
        // console.log(response);
        alert("Service Deleted Successfully...");
        // window.location.reload();
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  //+++++++++++++++++++++++++++++ Update Service Data  ++++++++++++++++++++++++++++++++//

  return (
    <>
      <CardContainer key={_id}>
        <TwoCol>
          <ServiceImage>
            <img src={image} key={image} />
          </ServiceImage>
          <CardInnerContainer>
            {/* <InfoContainer> */}
            <Block>
              <ItemInfo
                tag="h5"
                style={{
                  color: "#0066ff",
                  fontWeight: "bold",
                  textTransform: " uppercase",
                }}
              >
                {serviceNames}
              </ItemInfo>
              <hr />
              <ItemInfo
                tag="h5"
                style={{ color: "#800000", fontWeight: "bold" }}
              >
                {category.category}
              </ItemInfo>
              <hr />
              <ItemInfo style={{ color: "#595959" }}>{description}</ItemInfo>
              <hr />
              <ItemInfo>
                <Button
                  outline
                  color="primary"
                  style={{ paddingTop: "10px", paddingBottom: "0" }}
                >
                  <a href={map_location} style={{ textDecoration: "none" }}>
                    <h5> Map Location </h5>
                  </a>
                </Button>
              </ItemInfo>
            </Block>
            {/* </InfoContainer> */}
          </CardInnerContainer>
        </TwoCol>

        <ButtonContainer>
          <Action>
            <Button color="danger" onClick={ActionDelete}>
              Delete
            </Button>
          </Action>
          <Action>
            <UpdateService data={props.data} />
          </Action>
        </ButtonContainer>
      </CardContainer>
    </>
  );
}

export default ServiceCard;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  margin: 1rem 0;
  padding: 0.1rem 0.1rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: hindLight;
  /* float: left; */
  /* @media (max-width: 786px) {
    display: grid;
  } */
  @media (max-width: 800px) {
    padding-bottom: 40px;
    transition: 0.3s;
  }
`;

const CardInnerContainer = styled.div`
  line-height: 1;
  min-width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  @media (max-width: 786px) {
    min-width: 100%;
  }
`;

// const InfoContainer = styled.div`
//   margin-left: 20px;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   /* align-items: center; */
//   > img {
//     width: 4rem;
//     height: 4rem;
//     border: none;
//     border-radius: 10%;
//   }
// `;

const ServiceImage = styled.div`
  display: flex;
  padding: 0 1rem;
  text-align: left;
  align-items: center;
  width: 250px;
  color: black;
  > img {
    border-radius: 10px;
    height: 200px;
    width: 200px;
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

const TwoCol = styled.div`
  display: flex;
  @media (max-width: 450px) {
    display: grid;
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

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 10px;
  @media (max-width: 786px) {
    display: flex;
  }
`;
