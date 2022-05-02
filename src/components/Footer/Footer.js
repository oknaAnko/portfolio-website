import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterWrapper,
  FooterP,
  LogoRightsContainer,
  Logo,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterH2>Pogadajmy!</FooterH2>
        <FooterWrapper>
          <FooterP>email.email@gmail.com</FooterP>
        </FooterWrapper>
      </FooterContainer>
      <LogoRightsContainer>
        <Logo>a_A</Logo>
        <WebsiteRights>okna_Anko &copy; {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
      </LogoRightsContainer>
    </>
  );
};

export default Footer;
