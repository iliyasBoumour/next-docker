import styled from "styled-components";
import { Container } from "@mui/material";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  overflow: hidden;
  position: fixed;
  z-index: 10;
  transition: 0.3s ease-in;
  background: ${(props) => props.bgcolor && "var(--white)"};
`;
export const MyContainer = styled(Container)`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1536px) {
    max-width: 1600px;
  }
`;

export const Logo = styled.div`
  z-index: 10;
`;
export const Menu = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
  @media (max-width: 900px) {
    position: fixed;
    background-color: var(--white);
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    transform: ${(props) =>
      props.open ? "translateX(0px)" : "translateX(100%)"};
  }
`;
export const Burger = styled.div`
  z-index: 10;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  border-radius: 50px;
  div {
    width: 32px;
    height: 2.4px;
    background: ${(props) =>
      props.open ? "transparent" : "var(--dark-black)"};
    transform: ${(props) =>
      props.open ? "translateX(-50px)" : "translateX(0px)"};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 32px;
      height: 2.4px;
      background-color: var(--dark-black);
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
    }
    &::after {
      transform: ${(props) =>
        props.open
          ? "rotate(-45deg) translate(35px,35px)"
          : "translate(0px,10px)"};
    }
    &::before {
      transform: ${(props) =>
        props.open
          ? "rotate(45deg) translate(35px,-35px)"
          : "translate(0px,-10px)"};
    }
  }
  @media (min-width: 900.02px) {
    display: none;
  }
`;
export const NavItems = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  @media only screen and (max-width: 900px) {
    flex: 0;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
export const NavItem = styled.li`
  text-align: center;
  font-size: 1.1rem;
  padding: 3px 0;
  min-width: 4.5rem;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background: rgb(96, 96, 96);
    background: linear-gradient(
      270deg,
      rgba(96, 96, 96, 0.8) 0%,
      rgba(96, 96, 96, 0.1) 100%
    );
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;
export const Navlink = styled.a`
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  &.active {
    color: var(--white);
  }
`;
