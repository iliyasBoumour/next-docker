import { useState, useEffect } from "react";
import {
  Nav,
  MyContainer,
  Logo,
  NavItems,
  NavItem,
  Navlink,
  Menu,
  Icons,
  Burger,
} from "./style";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

const Index = () => {
  const [bgcolor, setBgcolor] = useState(false);
  const [open, setOpen] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setBgcolor(true);
    } else {
      setBgcolor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const handleNavClick = () => {
    setOpen(!open);
  };
  return (
    <Nav bgcolor={bgcolor}>
      <MyContainer maxWidth="xl">
        <Logo>
          <h1>Marque</h1>
        </Logo>
        <Burger open={open} onClick={handleNavClick}>
          <div></div>
        </Burger>
        <Menu open={open}>
          <NavItems>
            <Link href={"/"}>
              <NavItem>
                <Navlink>Home</Navlink>
              </NavItem>
            </Link>
            <Link href={"/about"}>
              <NavItem>
                <Navlink>About</Navlink>
              </NavItem>
            </Link>
            <NavItem>
              <Navlink href={"/shop"}>Shop</Navlink>
            </NavItem>
            <NavItem>
              <Navlink href={"/blog"}>Blog</Navlink>
            </NavItem>
            <NavItem>
              <Navlink href={"/contact"}>Contact</Navlink>
            </NavItem>
          </NavItems>
          <Icons>
            <NavItem>
              <Navlink href={"/login"}>
                <span>Login</span> <AiOutlineUser />
              </Navlink>
            </NavItem>
            <NavItem>
              <Navlink href={"/cart"}>
                <span>Cart</span> <BsBag />
              </Navlink>
            </NavItem>
          </Icons>
        </Menu>
      </MyContainer>
    </Nav>
  );
};

export default Index;
