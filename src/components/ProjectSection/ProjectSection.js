import React from "react";
import { SmallButton } from "../ButtonElement";
import {
  ProjectContainer,
  ProjectH2,
  ProjectWrapper,
  ProjectCard,
  ProjectBackground,
  ProjectP,
  BtnWrap,
  IconCode,
} from "./ProjectElements";

const ProjectSection = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectH2>Portfolio</ProjectH2>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <BtnWrap>
              <SmallButton to="#" primary="false">
                demo
              </SmallButton>
              <SmallButton to="#" primary="false">
                <span>code</span>
                <IconCode />
              </SmallButton>
            </BtnWrap>
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <BtnWrap>
              <SmallButton to="#" primary="false">
                demo
              </SmallButton>
              <SmallButton to="#" primary="false">
                <span>code</span>
                <IconCode />
              </SmallButton>
            </BtnWrap>
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <BtnWrap>
              <SmallButton to="#" primary="false">
                demo
              </SmallButton>
              <SmallButton to="#" primary="false">
                <span>code</span>
                <IconCode />
              </SmallButton>
            </BtnWrap>
          </ProjectBackground>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default ProjectSection;
