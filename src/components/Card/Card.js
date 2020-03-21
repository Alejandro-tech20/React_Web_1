import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import uno from "../../img/property1.jpg";
import dos from "../../img/property3.jpg";
import tres from "../../img/property4.jpg";
import cama from "../../iconos/cama.svg";
import banos from "../../iconos/bano.png";
import area from "../../iconos/area.png";
import Arrow from "../Carousel/Arrow";
import Slide from "../Carousel/Slide";
import SliderContent from "../Carousel/SliderContent";
import images from '../Carousel/images';
import Slider from '../Carousel/Slider';

// var slideIndex = 1;
// function plusSides(n) {
//   showSlides(slideIndex +=n);
// }
// function currentSlide(n){
//   showSlides(slideIndex = n);
// }
// function showSlides(n){
//   let i;
//   let slides =
// }

const Card = () => (
  <div className="container-card">
    <div>
      {/* ================= */}
      <div>
        <div className="title">Miami, FL Homes For Sale & Real Estate</div>
        <div className="subTitle">18,127 homes available on Trulia</div>
        <div></div>
      </div>
      {/* ============== */}
      <div className="listImg">
        <Slider slides={images}>

        </Slider>
        {/* <SliderContent
        translate={230}
        transition={0.45}
        width={230}
        >
          <Slide content={dos} />
          <Slide content={uno} />
          <Slide content={tres} />
        </SliderContent> */}

        {/* <figure className="slides fade">
          <img src={uno} alt="" />
        </figure>
        <figure className="slides fade">
          <img src={dos} alt="" />
        </figure>
        <figure className="slides fade">
          <img src={tres} alt="" />
        </figure> */}
        {/* <Arrow direction="left" />
        <Arrow direction="right" /> */}
      </div>
      {/* ==================== */}
      <div className="detail-card">
        <div className="precio">$1400000</div>
        <div className="caracteristicas">
          {/*  */}
          <div className="habitaciones">
            <div className="iconoHabitaciones">
              <img className="svg" src={cama} alt="" />
            </div>
            <div className="cantHbitaciones">3bd</div>
          </div>
          {/*  */}
          <div className="habitaciones banos">
            <div className="iconoBanos">
              <img src={banos} alt="" />
            </div>
            <div className="cantBanos">2ba</div>
          </div>
          {/*  */}
          <div className="habitaciones metros">
            <div className="iconoMetros">
              <img src={area} alt="" />
            </div>
            <div className="cantMetros">7,500m</div>
          </div>
        </div>
      </div>
      {/* ====================== */}
      <div className="direccion">
        <div className="numeroAddress">4721 Lake Rd</div>
        <div className="estadoAddress">Upper Eastside, Miami, FL</div>
      </div>
    </div>
    {/* ================ */}
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
