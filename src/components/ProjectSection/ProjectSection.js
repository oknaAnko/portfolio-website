import React from "react";
import { SmallButton } from "../ButtonElement";
import {
  ProjectContainer,
  ProjectH2,
  ProjectWrapper,
  ProjectCard,
  ProjectBackground,
  ProjectP,
  BtnContainer,
  BtnWrap,
  IconCode,
  IconSearch,
} from "./ProjectElements";

const ProjectSection = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectH2>Portfolio</ProjectH2>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <BtnContainer>
              <BtnWrap>
                <SmallButton to="#" primary="false">
                  <IconCode />
                </SmallButton>
              </BtnWrap>
              <BtnWrap>
                <SmallButton to="#" primary="false">
                  <IconSearch />
                </SmallButton>
              </BtnWrap>
            </BtnContainer>
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <BtnContainer>
              <BtnWrap>
                <SmallButton to="#" primary="false">
                  <IconCode />
                </SmallButton>
              </BtnWrap>
              <BtnWrap>
                <SmallButton to="#" primary="false">
                  <IconSearch />
                </SmallButton>
              </BtnWrap>
            </BtnContainer>
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <BtnContainer>
              <BtnWrap>
                <SmallButton to="#" primary="false">
                  <IconCode />
                </SmallButton>
              </BtnWrap>
              <BtnWrap>
                <SmallButton to="#" primary="false">
                  <IconSearch />
                </SmallButton>
              </BtnWrap>
            </BtnContainer>
          </ProjectBackground>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default ProjectSection;
