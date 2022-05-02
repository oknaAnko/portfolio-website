import styled, { css } from "styled-components/macro";
import windowImg from "../../images/window.jpg";
import { BsCodeSlash, BsSearch } from "react-icons/bs";

// @mixin transition-mix($property: all, $duration: 0.2s, $timing: linear, $delay: 0s) {
//   transition-property: $property;
//   transition-duration: $duration;
//   transition-timing-function: $timing;
//   transition-delay: $delay;
// }

export const ProjectContainer = styled.div`
  /* height: 800px; */
  padding: 100px 0;
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
  /* position: relative; */

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
  /* transition: all 0.25s ease-in-out; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
    transition: all 0.4s ease-in-out;
    /* transition: all 0.25s ease-in-out; */
  }
`;

export const ProjectP = styled.p`
  position: relative;
  top: -10px;
  opacity: 1;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 4px #000;
  /* transition: all 0.25s ease-in-out; */
  margin-bottom: 20px;
  padding: 15px 0;
  text-transform: uppercase;
  letter-spacing: 2px;

  ${ProjectCard}:hover & {
    transition: all 0.4s ease-in-out;
    /* transition-delay: 0.45s; */
    top: 0;
    opacity: 1;
  }

  &:after {
    /* @include position-absolute($bottom: 0, $left: 0); */
    position: absolute;
    top: null;
    left: 0;
    right: null;
    bottom: 0;
    display: block;
    height: 2px;
    width: 100%;
    content: "";
    background-color: #8d909b;
    transform: scaleX(0);

    ${ProjectCard}:hover & {
      /* @include transition-mix($duration: .3s, $timing: cubic-bezier(0.63, 0.01, 0, 1.39), $delay: .65s); */
      transition-property: all;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.63, 0.01, 0, 1.39);
      transition-delay: 0.65s;
      transform: scaleX(1);
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BtnWrap = styled.div`
  position: relative;
  top: 20px;
  left: 0;
  width: 35px;
  height: 35px;
  /* opacity: 1; */
  margin-right: 10px;
  opacity: 0;

  &:nth-child(2) {
    margin-right: 0;
  }

  ${ProjectCard}:hover & {
    top: 0;
    opacity: 1;

    &:first-child {
      /* @include transition-mix($delay: .85s); */
      transition-property: all;
      transition-duration: 0.4s;
      transition-timing-function: linear;
      transition-delay: 0.85s;
    }

    &:nth-child(2) {
      /* @include transition-mix($delay: .95s); */
      transition-property: all;
      transition-duration: 0.4s;
      transition-timing-function: linear;
      transition-delay: 0.95s;
    }
  }
`;

const iconStyle = css`
  font-size: 16px;
  fill: #fff;
`;

export const IconCode = styled(BsCodeSlash)`
  ${iconStyle}
`;

export const IconSearch = styled(BsSearch)`
  ${iconStyle}
`;
