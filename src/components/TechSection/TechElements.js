import styled, { css } from "styled-components/macro";
import { FaReact, FaBootstrap, FaFigma, FaHtml5 } from "react-icons/fa";
import { SiRedux, SiTypescript, SiWebpack } from "react-icons/si";
import { DiJavascript1, DiCss3 } from "react-icons/di";

export const TechContainer = styled.div`
  /* height: 800px; */
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const techWrapperStyle = css`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 50px;
`;

export const TechWrapperUp = styled.div`
  ${techWrapperStyle}
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 50px;
`;

export const TechWrapperDown = styled.div`
  ${techWrapperStyle}
  grid-template-columns: repeat(4, 1fr);
`;

export const TechH2 = styled.h2`
  margin-bottom: 64px;
  color: #000;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const IconWrap = styled.div`
  perspective: 50em;
  position: relative;
  overflow: hidden;
`;

export const Overlay = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(-90deg);
  background-color: #fff;
  transform-origin: 50% 50%;
  transition: all 0.4s ease-out;

  ${IconWrap}:hover & {
    transform: translate(-50%, -50%) rotateY(0);
  }
`;
export const OverlayP = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  color: #000;
  z-index: 1;
  font-size: 10px;
  text-transform: uppercase;
  opacity: 0;
  transition: all 0.2s ease-in-out;

  ${IconWrap}:hover & {
    transform: translate(-50%, -50%);
    opacity: 1;
    transition-delay: 0.2s;
  }
`;

const iconStyle = css`
  padding: 5px;
  font-size: 55px;
`;

export const ReactIcon = styled(FaReact)`
  ${iconStyle}
`;

export const ReduxIcon = styled(SiRedux)`
  ${iconStyle}
`;

export const TsIcon = styled(SiTypescript)`
  ${iconStyle}
`;

export const JsIcon = styled(DiJavascript1)`
  ${iconStyle}
`;

export const HtmlIcon = styled(FaHtml5)`
  ${iconStyle}
`;

export const CssIcon = styled(DiCss3)`
  ${iconStyle}
`;

export const BootstrapIcon = styled(FaBootstrap)`
  ${iconStyle}
`;

export const FigmaIcon = styled(FaFigma)`
  ${iconStyle}
`;

export const WebpackIcon = styled(SiWebpack)`
  ${iconStyle}
`;
