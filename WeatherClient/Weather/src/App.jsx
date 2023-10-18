import IntroSection from "./components/IntroSection";
import Navigation from "./components/Navigation";
import styled from "styled-components";
import { useState } from "react";
import AddCity from "./components/AddCity";
import APIStatus from "./components/APIStatus";
import Carousel from "./components/Carousel";
import backgroundImage from './images/background4.png';

function App() {
  const [cities, setCities] = useState(["Stockholm"]);

  const handleCitySubmit = (city) => {
    setCities((prevCities) => [...prevCities, city]);
  };

  return (
    <>
        <div>
        <Navigation />
        <IntroSection/>
        <WrapperContainer>
          <InnerContainer>
            <AddCity onCitySubmit={handleCitySubmit} />
          </InnerContainer>
          <Carousel weatherData={cities} />
          <APIStatus />
        </WrapperContainer>
     
      </div>
    </>
  )
}

export default App

export const InnerContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const WrapperContainer = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background: url(${backgroundImage}); 
  height: 500px;

`;


