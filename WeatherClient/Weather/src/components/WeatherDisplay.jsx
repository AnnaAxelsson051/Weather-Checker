//libraries
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const WeatherDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
  font-family: sans-serif;
  max-width: 330px;
  height: 450px;
  padding: 18px 0;
  width: 95%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  margin: 2rem 1rem; 
  background: #fff;
  transition: transform 0.3s ease-in-out;


  @media screen and (max-width: 768px) {
    min-width: 200px;
  }
`;

const WeatherDisplayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  width: 90%;

  h2 {
    font-weight: 400;
    font-size: 24px;
    padding: 0;
    margin: 18px 0 14px 0;
    color: #080808;


    @media screen and (max-width: 768px) {
      font-size: 21px;
    }
  }
`;

const StyledImg = styled.img`
  width: 125px;
  height: 125px;
  object-position: center;
  object-fit: cover;

`;

const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  p {
    font-weight: 500;
    font-size: 13px;
    margin-top: 18px;
    padding: 0;
    margin: 0;
  }
`;

const MainData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 14px 34px;
  padding: 0px 18px;
  font-weight: 300;
  font-size: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  color: #0a0a0a;
 
`;

const LoadContainer = styled.div`
  align-items: center;
  height: 95%;
  padding: 2rem;
  margin: 0 auto;
 
`;


const TempIconUrl = "//cdn.weatherapi.com/weather/128x128/day/113.png";


function WeatherDisplay(props) {
  const Url = "http://localhost:7260/weather/" + props.city;
  const [Data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(Url);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {Data && Data.location && (
        <WeatherDisplayContainer>
          <WeatherDisplayHeader>
            <h2>{Data.location?.name}</h2>
          </WeatherDisplayHeader>
          <MainData>
            <p>
              {Data.current?.temp_c}°C / {Data.current?.temp_f}°F
            </p>
            <StyledImg src={Data.current?.condition.icon} alt="Weather Icon" />
            <p>Currently {Data.current?.condition.text}</p>
          </MainData>
          <WeatherInfoContainer>
            <p>
              Wind Speed: {Data.current?.wind_kph} Kilometers per hour - {Data.current?.wind_mph} Miles per hour
            </p>
            <p>Wind Direction Degree: {Data.current?.wind_degree}</p>
            <p>Humidity: {Data.current?.humidity}</p>
          </WeatherInfoContainer>
        </WeatherDisplayContainer>
      )}
    </>
  );
}

export default WeatherDisplay;
