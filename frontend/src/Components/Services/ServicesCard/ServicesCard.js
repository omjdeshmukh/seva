import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getCookieData, setCookieData } from "../../userData";

function ServicesCard(props) {
  const [categoryNo, setCategoryNo] = useState();
  const cookieData = getCookieData();
  const { _id, icon, category, description } = props.data;

  useEffect(() => {
    fetch(
      `https://seva-backend1.herokuapp.com/seriveBycategoryAndPin/${_id}/${cookieData.pincode}`
    )
      .then((response) => response.json())
      .then((response) => setCategoryNo(response))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <ServiceCardContainer key={_id}>
        <Link to={`/services/${_id}/${cookieData.pincode}`}>
          <ServiceImage>
            <img src={icon} alt={description} />
          </ServiceImage>
          <SrviceInfo>
            <h5>
              {category}
              <CategoryNo>{categoryNo && categoryNo.length}</CategoryNo>
            </h5>
          </SrviceInfo>
        </Link>
      </ServiceCardContainer>
    </>
  );
}

export default ServicesCard;

const ServiceCardContainer = styled.div`
  min-width: 25%;
  max-width: 100%;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 414px) {
    width: 90%;
  }

  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #393232;
  }
`;
const ServiceImage = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #5ab9ea;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 50%;

  > img {
    width: 85%;
  }
`;
const SrviceInfo = styled.div`
  > h5 {
    font-family: hindRegular;
    font-size: 15px;
  }
`;

const CategoryNo = styled.span`
  background-color: #5ab9ea;
  color: #fff;
  border-radius: 5px;
  padding: 0 0.5rem;
  margin: 0 0.3rem;
`;
