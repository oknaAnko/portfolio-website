import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    // <div>Navbar</div>
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">aa</NavLogo>
          <MobileIcon>
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
          <NavBtn>
            <NavBtnLink to="/signin">SignIn</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
