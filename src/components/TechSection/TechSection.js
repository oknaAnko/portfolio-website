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
    <TechContainer id="technologies">
      <TechH2>Technologie</TechH2>
      <TechWrapperUp>
        <IconWrap>
          <ReactIcon />
          <Overlay>
            <OverlayP>React</OverlayP>
          </Overlay>
        </IconWrap>
        <IconWrap>
          <ReduxIcon />
          <Overlay>
            <OverlayP>Redux</OverlayP>
          </Overlay>
        </IconWrap>
        <IconWrap>
          <TsIcon />
          <Overlay>
            <OverlayP>Typescript</OverlayP>
          </Overlay>
        </IconWrap>
        <IconWrap>
          <JsIcon />
          <Overlay>
            <OverlayP>Javascript</OverlayP>
          </Overlay>
        </IconWrap>
        <IconWrap>
          <WebpackIcon />
          <Overlay>
            <OverlayP>Webpack</OverlayP>
          </Overlay>
        </IconWrap>
      </TechWrapperUp>
      <TechWrapperDown>
        <IconWrap>
          <HtmlIcon />
          <Overlay>
            <OverlayP>Html</OverlayP>
          </Overlay>
        </IconWrap>
        <IconWrap>
          <CssIcon />
          <Overlay>
            <OverlayP>CSS</OverlayP>
          </Overlay>
        </IconWrap>
        <IconWrap>
          <BootstrapIcon />
          <Overlay>
            <OverlayP>Bootstrap</OverlayP>
          </Overlay>
        </IconWrap>
        <IconWrap>
          <FigmaIcon />
          <Overlay>
            <OverlayP>Figma</OverlayP>
          </Overlay>
        </IconWrap>
      </TechWrapperDown>
    </TechContainer>
  );
};

export default TechSection;
