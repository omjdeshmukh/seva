import React, { useState } from "react";
import styled from "styled-components";
import CardData from "./CardData";
import axios from "axios";
import './style.css';


function MostVisited() {
//   const [service, setService] = useState("");

//   const fetchData = async () => {
//     const responce = await axios.get("");
//     setService(responce.data);
//   };

  return (
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

    <div class="sl-category sl-row">
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-01.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>Accounts &amp; Audit</h5>
            <span>12,568 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-02.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>IT Services</h5>
            <span>11,756 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-03.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>Networking</h5>
            <span>11,125 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-04.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>Plumbing</h5>
            <span>10,045 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-05.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>Learning &amp; Driver</h5>
            <span>10,575 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-06.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>Law &amp; Finance</h5>
            <span>9,245 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-07.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>Medical</h5>
            <span>9,421 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-08.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>Handyman Services</h5>
            <span>7,123 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-09.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>Print &amp; Publishing</h5>
            <span>5,058 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="sl-col sl-col-sm-1-of-2 sl-col-md-1-of-3 sl-col-lg-1-of-4 sl-col-xl-1-of-5">
        <div class="sl-category__service">
          <img src="images/index/category/img-10.jpg" alt="image Description" />
          <div class="sl-category__description">
            <h5>House Cleaning</h5>
            <span>4,982 Providers</span>
          </div>
          <a href="javascript:void(0);" class="sl-category__icon">
            <i class="ti-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MostVisited;

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

// function Cards(props) {
//   return (
//     <>
//       <Card>
//         <Image>
//           <img src={props.imagesrc} />
//         </Image>

//         <Title>
//           <h3> {props.title} </h3>
//         </Title>
//       </Card>
//     </>
//   );
// }
