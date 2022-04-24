import React from "react";
import {
  TechContainer,
  TechH2,
  TechWrapperUp,
  TechWrapperDown,
  IconWrap,
  Overlay,
  OverlayP,
  HtmlIcon,
  JsIcon,
  ReactIcon,
  ReduxIcon,
  CssIcon,
  BootstrapIcon,
  FigmaIcon,
  TsIcon,
  WebpackIcon,
} from "./TechElements";

const TechSection = () => {
  return (
    <TechContainer>
      <TechH2>Technologie</TechH2>
      <TechWrapperUp>
        <IconWrap>
          <ReactIcon />
          <Overlay>
            <OverlayP>REACT</OverlayP>
          </Overlay>
        </IconWrap>

        <ReduxIcon />
        <TsIcon />
        <JsIcon />
        <WebpackIcon />
      </TechWrapperUp>
      <TechWrapperDown>
        <HtmlIcon />
        <CssIcon />
        <BootstrapIcon />
        <FigmaIcon />
      </TechWrapperDown>
    </TechContainer>
  );
};

export default TechSection;
