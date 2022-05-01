import styled from "styled-components/macro";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;
  white-space: nowrap;
  text-align: center;
  font-size: 18px;
  line-height: 18px;
  color: #000;
  background-color: #fff;
  transition: all 0.2 ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: red;
    transition: all 0.2 ease-in-out;
  }
`;

export const SmallButton = styled(Button)`
  white-space: normal;
  color: #fff;
  background-color: transparent;
  padding: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  border-radius: 50%;

  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  transition-delay: 0s;

  &:hover {
    color: #fff;
    background-color: #101010;
  }
`;
