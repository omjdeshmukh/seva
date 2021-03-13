import React, { useState } from "react";
import styled from "styled-components";
import CardData from "./CardData";
import axios from "axios";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Services() {
  //   const [service, setService] = useState("");

  //   const fetchData = async () => {
  //     const responce = await axios.get("");
  //     setService(responce.data);
  //   };

  return (
    <>
      <section id="team" class="pb-5">
        <div class="container">
          <h5 class="section-title h1">Services</h5>
          <div class="row">
            {CardData.map((e) => {
              return (
                <Cards imagesrc={e.imagesrc} title={e.title} info={e.info} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

//  {CardData.map((e) => {
//       return <Cards imagesrc={e.imagesrc} title={e.title} info={e.info} />;
//     })}

export default Services;

function Cards(props) {
  return (
    <>
      <div class="col-xs-12 col-sm-6 col-md-3 mb-4">
        <div class="card">
          <div class="card-body text-center">
            <p>
              <img className=" img-fluid" src={props.imagesrc} alt="card image" />
            </p>
            <h4 class="card-title"> {props.title} </h4>
            <p class="card-text">{props.info}</p>
          </div>
        </div>
      </div>
    </>
  );
}

// const TopServiceContainer = styled.div`
// height: 550px;
// width: 100vw;
// background-color: green;
// align-content: center;
// align-items: center;
// `;

// const TopHeading = styled.div`

// `;

// const ServiceCardsContainer = styled.div`
//   flex-wrap: wrap;
//   display: flex;
//   align-items: center;
//   padding: 2% 8% 3% 8%;
// `;

// const Card = styled.div`
// text-align: center;
// height: 200px;
// width: 200px;
// background-color: yellow;
// background-image: '' ;
// align-content: center;
// margin: 20px;
// padding: 40px 60px 60px 60px ;
// float: left;
// `;

// const Image = styled.div`
// height: 80px;
// width: 80px;
// background-color: blue;
// margin-bottom: 20px;
// `;

// const Title = styled.div`
// color: gray;
// `;

// const Info = styled.div``;

// <TopServiceContainer>
//   <TopHeading>
//     <h1>Most Visited Services</h1>
//   </TopHeading>
//   <ServiceCardsContainer >
//     {CardData.map((e) => {
//       return <Cards imagesrc={e.imagesrc} title={e.title} />;
//     })}
//   </ServiceCardsContainer>
// </TopServiceContainer>
