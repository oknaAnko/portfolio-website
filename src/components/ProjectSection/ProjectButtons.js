import React from "react";
import { SmallButton } from "../ButtonElement";
import { BtnContainer, BtnWrap, IconCode, IconSearch } from "./ProjectElements";

const ProjectButtons = () => {
  return (
    <BtnContainer>
      <BtnWrap>
        <SmallButton to="#" primary="false">
          <IconSearch />
        </SmallButton>
      </BtnWrap>
      <BtnWrap>
        <SmallButton to="#" primary="false">
          <IconCode />
        </SmallButton>
      </BtnWrap>
    </BtnContainer>
  );
};

export default ProjectButtons;
