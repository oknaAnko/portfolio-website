import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HelloContainer,
  HelloBackground,
  HelloContent,
  HelloH1,
  HelloP,
  HelloBtnWrapper,
  ArrowDoubleDown,
  ArrowDown,
} from "./HelloElements";

const HelloSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);

  return (
    <HelloContainer>
      <HelloBackground></HelloBackground>
      <HelloContent>
        <HelloH1>Cześć</HelloH1>
        <HelloP>Od urban planera do front-end developera</HelloP>
        <HelloBtnWrapper>
          <Button to="kontakt" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Pogadajmy {hover ? <ArrowDoubleDown /> : <ArrowDown />}
          </Button>
        </HelloBtnWrapper>
      </HelloContent>
    </HelloContainer>
  );
};

export default HelloSection;
