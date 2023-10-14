import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Nav>
        <Brand onClick={closeMobileMenu}>Weather Checker</Brand>
        <NavigationMenu className={click ? "nav-menu active" : "nav-menu"}>
        <MenuLink>
            <Link
          >
            Home
            </Link>
          </MenuLink>
          <MenuLink>
            <Link
            >
              About
            </Link>
          </MenuLink>
          <MenuLink>
            <Link
            >
              Contact
            </Link>
          </MenuLink>
        </NavigationMenu>
        <Bars onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</Bars>
      </Nav>
    </>
  );
};


export default Navigation;

const Bars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #c5e0ee;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Brand = styled.h2`
  color:#fff;
  font-size: 42px;
  letter-spacing: 1px;
  font-family: 'Pinyon Script';

  @media screen and (max-width: 768px) {
    font-size: 30px;
    position: absolute;
    top:0.1%;
  }
`;

const NavigationMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  font-family: 'Titillium Web';

  

    @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 13%;
    position: absolute;
    top: 61px;
    left: -30%;
    padding-top: 2.5rem;
    transition: all 0.5s ease;

    &.active {
      background: #0b2447;
      background: linear-gradient(to bottom, #0096c7, #0077b6, #48cae4);
      left: 0;
      opacity: 1;
      transition: all 0.7s ease;
    }
  }
`;

const Nav = styled.nav`
  background: linear-gradient(to bottom, #0096c7, #0077b6, #48cae4);
  height: 80px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  .NavbarItems {
    position: fixed;
  }

  @media screen and (min-width: 1920px) {
    padding: 0.5rem calc((100vw - 1700px) / 2);
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin: 0;
  }
`;

const MenuLink = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  padding: 0 1.1rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 1rem;
    &:hover {
      border: none;
    }
  }
`;

