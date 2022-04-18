import React from "react";

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
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
          </ProjectBackground>
        </ProjectCard>
        <ProjectCard>
          <ProjectBackground>
            <ProjectP>Lorem lorem</ProjectP>
          </ProjectBackground>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default ProjectSection;
