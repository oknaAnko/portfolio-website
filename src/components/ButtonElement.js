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
  flex-direction: column;
  white-space: normal;
  border: none;
  font-size: 14px;
  color: #fff;
  background-color: transparent;

  &:hover {
    border: none;
    background-color: transparent;
    box-shadow: 0px 0px 10px -1px white;
  }
`;
