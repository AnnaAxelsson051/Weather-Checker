import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  margin: 2rem;
  width: 63%;
  display: flex;
  justify-content: center;
  transition: all 0.4s ease-in-out;


  @media (max-width: 900px) {
    width: 100%;
  }

  & .Container {
    display: flex;
    flex-direction: column;

    & .inputContainer {
      display: flex;
      & input:nth-child(1) {
        width: 100%;
        height: 1.7rem;
        margin-right: 1rem;
      }
      & input:nth-child(2) {
        height: 2.6rem;
        width: 8rem;
   
      }
    }
  }

  & h1,
  p,
  label,
  input {
    font-family: 'Titillium Web';
    //Lora, Monsterrat, Nanum Myeongjo, 
    //Pinyon Script, Pixelify Sans, Roboto, 
    //Space Grotesk, Titillium Web, Cinzel

  }

  & h1 {
    text-align: center;
    padding: 0.7rem;
    margin-bottom: 0.7rem;
    color: #fff;
    color: #e120e8;
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 77%;
    
  }

    & label {
      color: #fff;
      
    }

    & .error {
      color: #b60000;
    }

    & input {
      border-radius: 50px;
      border: none;
      margin-bottom:1rem;
      background-color: #ffffffc3;
      border:1.5px solid white;
      margin-top:1rem;
      padding:0.5rem;
     
    }

    & input[type="submit"] {
      font-size: 1rem;
      background: linear-gradient(to bottom, #a69064, #b9a273, #d1ba8d);
      color: #fff;
      border:1.5px solid white;
      transition: 0.3s linear;
      font-family: 'Titillium Web'; 
  }
`;

const AddCity = ({ onCitySubmit }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.city.value.trim() === "") {
      setError(true);
    } else {
      setError(false);
      const response = await fetch(`http://localhost:7260/weather/${city}`);
      const data = await response.json();
      if (data.error) {
        setError(true);
      } else {
        onCitySubmit(city);
        setCity("");
      }
    }
  };

  return (
    <Container id="add-city-component">
      <form onSubmit={handleSubmit}>
        <div className="Container">
          <label htmlFor="city" className={error ? "error" : ""}>
            {error ? "No matching city found" : "City name"}
          </label>

          <div className="inputContainer">
            <input
              type="text"
              id="city"
              placeholder="London"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <input type="submit" value="Submit"></input>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default AddCity;
