import styled from "styled-components/macro";
import { colors } from "../../styles/variables";

export const FooterContainer = styled.div`
  background-color: ${colors.dark};
  color: ${colors.light};
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 640px) {
    padding: 70px 0;
  }
`;

export const FooterH2 = styled.h2`
  margin-bottom: 64px;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

export const FooterP = styled.p`
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LogoRightsContainer = styled.div`
  background-color: ${colors.dark1};
  /* background-color: #000; */
  color: gray;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 640px) {
    height: 60px;
    font-size: 24px;
  }
`;

export const WebsiteRights = styled.div`
  margin: 16px auto;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;
