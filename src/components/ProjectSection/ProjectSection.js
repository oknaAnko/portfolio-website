import React from "react";
import ProjectButtons from "./ProjectButtons";
import {
  ProjectContainer,
  ProjectH2,
  ProjectWrapper,
  ProjectCard,
  ProjectBackground,
  ProjectP,
} from "./ProjectElements";

const ProjectSection = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectH2>Portfolio</ProjectH2>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <ProjectButtons />
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <ProjectButtons />
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <ProjectButtons />
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <ProjectButtons />
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <ProjectButtons />
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
            <ProjectButtons />
          </ProjectBackground>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default ProjectSection;
