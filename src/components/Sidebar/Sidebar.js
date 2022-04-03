import React from "react";
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SidebarMenu } from "./SidebarElements";

const SideBar = ({ isOpen, toggleIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="info" onClick={toggleIsOpen}>
            O mnie
          </SidebarLink>
          <SidebarLink to="projekty" onClick={toggleIsOpen}>
            Projekty
          </SidebarLink>
          <SidebarLink to="technologie" onClick={toggleIsOpen}>
            Technologie
          </SidebarLink>
          <SidebarLink to="kontakt" onClick={toggleIsOpen}>
            Kontakt
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
