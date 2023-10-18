import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const APIHealthcheck = () => {
  const [requestCount, setRequestCount] = useState(0);
  const [healthCheck, setHealthCheck] = useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
         const result = await axios("http://localhost:7260/healthcheck");
        setHealthCheck("Online");
      } catch (error) {
        console.error("Error fetching data:", error);
        setHealthCheck("Offline");
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:7260/counter");
        
        setRequestCount(result.data.count);
      } catch (error) {
        console.error("There was an error while fetching data: ", error);
        setRequestCount(0);
      }
    };
    fetchData();
  }, []);

  if (healthCheck === "Online") {
    return (
      <Container>
        <div className="InnerContainer">
          <h3>
            API Status - <span className="statusOnline">{healthCheck} </span>
          </h3>
          <h3>
            API Request Count: <span>{requestCount}</span>
          </h3>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="InnerContainer">
          <h3>
            API Status - <span className="statusOffline">{healthCheck} </span>
          </h3>
          <h3>
            API Request Count: <span>{requestCount}</span>
          </h3>
        </div>
      </Container>
    );
  }
};

export default APIHealthcheck;

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #0a0a0a;

  & .InnerContainer {
    width: 20%;
    padding: 1rem;
    border:1.5px solid white;
    background-color: #ddf1f878;
    margin-bottom: 2rem;
  }

  & h3 {
    font-family: 'Titillium Web';
    font-weight: 400;
    font-size: 18px;
  }

  & .statusOnline {
    font-family:'Pinyon script';
  }

  & .statusOffline {
    font-family:'Pinyon script';
  }

  @media screen and (max-width: 768px) {
    font-size: 1;
    
  }
`;
