import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  border: none;
  border-radius: 50px;
  outline: none;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  color: ${({ dark }) => (dark ? "#010606" : "#ddd")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  white-space: nowrap;
  transition: all 0.2 ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? "#307035" : "#01BF71")};
    transition: all 0.2 ease-in-out;
  }
`;
