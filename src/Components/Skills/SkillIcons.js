import React from "react";
import styled from "styled-components/macro";
import QUERIES from "../Constants";
import {
  SiRails,
  SiJavascript,
  SiRuby,
  SiCss3,
  SiStyledComponents,
  SiPostgresql,
  SiHtml5,
  SiReact,
  SiFigma,
  SiAdobexd,
  SiGithub,
  SiJira,
  SiNotion,
  SiGatsby,
} from "react-icons/si";
const SkillIcons = () => {
  return (
    <IconsContainer>
      <SiRuby className="icon" />
      <SiRails className="icon" />
      <SiJavascript className="icon" />
      <SiCss3 className="icon" />
      <SiStyledComponents className="icon" />
      <SiPostgresql className="icon" />
      <SiHtml5 className="icon" />
      <SiReact className="icon" />
      <SiGatsby className="icon" />
      <SiFigma className="icon" />
      <SiAdobexd className="icon" />
      <SiGithub className="icon" />
      <SiJira className="icon" />
      <SiNotion className="icon" />
    </IconsContainer>
  );
};
export default SkillIcons;

const IconsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* gap: 8px; */
  align-items: center;
  width: 100%;

  /* max-width: 100px; */
  /* min-width: 70px; */
  /* padding: 12px; */

  .icon {
    width: 50px;
    height: auto;
    /* color: ; */
    /* padding: 5px; */
  }
  @media ${QUERIES.laptopAndDown} {
    max-width: 200px;
  }
  @media ${QUERIES.tabletAndDown} {
    flex: 1;
    max-width: 100px;
  }
  @media ${QUERIES.mobileAndDown} {
    /* flex: 1 1 100px; */
    max-width: 60px;

    .icon {
      width: 40px;
      height: auto;
      padding: 4px;
    }
  }
`;
