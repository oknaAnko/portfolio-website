import styled from "styled-components/macro";
import windowImg from "../../images/window.jpg";
import { BsCodeSlash } from "react-icons/bs";

export const ProjectContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ccc;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectH2 = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  border-radius: 5px;
  height: 340px;
  width: 320px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease-in-out;
  background-image: url(${windowImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.05);
    transition: all 0.25s ease-in-out;
    /* cursor: pointer; */
  }
`;

export const ProjectBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  /* opacity: 1; */
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    opacity: 1;
    transition: all 0.25s ease-in-out;
  }
`;

export const ProjectP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 4px #000;
  transition: all 0.25s ease-in-out;
  margin-bottom: 30px;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const IconCode = styled(BsCodeSlash)`
  font-size: 25px;
  margin-top: 8px;
  fill: #fff;
`;
