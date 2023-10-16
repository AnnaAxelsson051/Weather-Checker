import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";


const ArrowButtons = ({ handleLeftClick, handleRightClick }) => {
  return (
    <ButtonContainer>
      <Button onClick={handleLeftClick}>
        <AiFillCaretLeft/>
      </Button>
      <Button onClick={handleRightClick}>
        <AiFillCaretRight/>
      </Button>
    </ButtonContainer>
  );
};

export default ArrowButtons;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  color: #ffffffd9;
  border:white;
  padding: 1rem;
  margin: 0 3em;
  margin-bottom: 2rem;
  font-size: 1.9em;
  cursor: pointer;

  :hover {

    color:#e8d9bc;
  }

  @media screen and (max-width: 768px) {
    margin: 0 2rem;
    margin-bottom: 2rem;
  }
`;
