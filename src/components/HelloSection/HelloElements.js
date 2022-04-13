import styled from "styled-components/macro";
import { FaAngleDoubleDown, FaAngleDown } from "react-icons/fa";

export const HelloContainer = styled.div`
  /* background-color: #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HelloBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
`;

export const HelloContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HelloH1 = styled.h1`
  color: #000;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HelloP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HelloBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowDown = styled(FaAngleDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowDoubleDown = styled(FaAngleDoubleDown)`
  margin-left: 8px;
  font-size: 20px;
`;
