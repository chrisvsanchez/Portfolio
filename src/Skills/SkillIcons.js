import React from "react";
import styled from "styled-components/macro";
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
  gap: 8px;
  align-items: center;
  background-color: white;
  height: 100%;
  max-width: 100px;
  min-width: 70px;
  padding: 12px;

  .icon {
    width: 50px;
    height: auto;
    /* padding: 5px; */
  }
`;
