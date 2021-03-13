import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import CardData from "../Services/CardData";

function CarouselBar() {
  return (
    <Carousel autoPlay className="carousel-bar">
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 7</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 8</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 9</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 10</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 11</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 12</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 13</p>
      </div>
      <div>
        <img alt="" src="https://picsum.photos/200/300" />
        <p className="legend">Legend 14</p>
      </div>
    </Carousel>
  );
}

export default CarouselBar;

// function Data(props) {
//   return (
//     <div>
//       <img src={props.imagesrc} />
//       <h4> {props.title} </h4>
//     </div>
//   );
// }

 {
  //  CardData.map((val) => {
  //    return <Data imagesrc={val.imagesrc} title={val.title} />;
  //  });
 }