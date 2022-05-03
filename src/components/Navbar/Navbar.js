import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" scrollNav={scrollNav} onClick={toggleHome}>
            a_A
          </NavLogo>
          <MobileIcon onClick={toggleIsOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                O mnie
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Projekty
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="technologies" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Technologie
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                Kontakt
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
