import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

function Responsive(props) {
  const { feedback } = props;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CarousalContainer>
      <h2> Feedbacks </h2>
      <CarousalInnerContainer>
        <Slider {...settings}>
          {feedback &&
            feedback.map((item, index) => {
              console.log(item);
              const { user, feedback } = item;
              return (
                <>
                  <FeedbackCardContainer>
                    <FeedbackCardInnerContainer>
                      <UserInfoContainer>
                        <img src={user.img} alt="User Avatar" />
                      </UserInfoContainer>
                      <FeedbackSection>
                        <p>{feedback}</p>
                      </FeedbackSection>
                      <UserInfo>
                        <h4>
                          {user.userName.charAt(0).toUpperCase() +
                            user.userName.slice(1)}
                        </h4>
                        <small>{user.city.toUpperCase()}</small>
                      </UserInfo>
                    </FeedbackCardInnerContainer>
                  </FeedbackCardContainer>
                </>
              );
            })}
        </Slider>
      </CarousalInnerContainer>
    </CarousalContainer>
  );
}

export default Responsive;

const CarousalContainer = styled.div``;
const CarousalInnerContainer = styled.div`
  padding: 3rem;
`;
const FeedbackCardContainer = styled.div`
  color: #fff;
  border-radius: 5px;
  font-family: hindLight;
  background-color: #39afec;
  margin: 0 0.5rem;
  padding: 1rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const FeedbackCardInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
const UserInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h4 {
    padding: 0;
    font-size: 1rem;
    font-weight: 500;
  }
`;
const FeedbackSection = styled.div`
  padding: 0.5rem 0;

  > p {
    text-align: center;
    font-weight: 100;
  }
`;
