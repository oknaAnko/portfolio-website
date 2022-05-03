import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from "./NavbarElements";

const Navbar = ({ toggleIsOpen }) => {
  const [scrollNav, setScrollnav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" scrollNav={scrollNav}>
            a_A
          </NavLogo>
          <MobileIcon onClick={toggleIsOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="info">O mnie</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projekty">Projekty</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="technologie">Technologie</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="kontakt">Kontakt</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
