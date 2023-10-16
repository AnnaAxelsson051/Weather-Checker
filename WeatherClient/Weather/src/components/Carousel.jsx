import { useState, useRef, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import styled from "styled-components";
import ArrowButtons from "./ArrowButtons";


const Carousel = ({ weatherData }) => {
  const carousel = useRef(null);

  console.log(weatherData);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    console.log(carousel.current.scrollLeft);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    console.log(carousel.current.scrollLeft);
  };

  return (
    <>
      <CarouselContainer id="bookmarks" className="carousel" ref={carousel}>
        {weatherData.map((item, index) => {
          return (
            <CarouselItem key={index}>
   
            </CarouselItem>
          );
        })}
      </CarouselContainer>
       <ArrowButtons
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    </>
  );
};
export default Carousel;

const CarouselContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  scroll-behavior: smooth;
  margin: 0 auto;
  width: 50%;
  gap: 1rem;

  > div {
    display: flex;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1150px) {
    width: 95%;
  }
`;

const CarouselItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  justify-content: center;

  @media screen and (max-width: 600px) {
    align-items: left;
  }
`;

