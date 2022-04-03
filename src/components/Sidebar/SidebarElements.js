import styled from "styled-components/macro";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  left: 0;
  /* top: 0; */
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  background: #0d0d0d;
  transition: 0.3s ease-in-out;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1 fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: felx;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: red;
    transition: 0.2s ease-in-out;
  }
`;
