import styled from "styled-components";

const IntroSection = () => {
  return (
    <>
      <StyledIntroSection>
        <StyledContainer>
          <p>
          Check out the forecast for your desired city. This service displays Temperature, wind speed and direction as well as humidity.
          </p>
        </StyledContainer>
      </StyledIntroSection>
    </>
  );
};
export default IntroSection;

const StyledIntroSection = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
 background-size: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 200px;
    margin: 0;
  }
`;

const StyledContainer = styled.div`
  background: linear-gradient(to bottom, #a69064, #b9a273, #d1ba8d);
  border: 1.5px solid white;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 600px;
  font-family: 'Titillium Web';
  color: #fcfcfb;;
  text-align: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width:400px;
    margin: 0 auto;
    font-size: 16px;
  }
`;
const StyledWeatherText = styled.span`

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
