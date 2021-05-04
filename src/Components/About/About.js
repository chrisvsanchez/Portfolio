import styled from "styled-components/macro";
import React from "react";
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
const About = () => {
  return (
    <Wrapper>
      <AboutImagesContainer>
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
        <SkillsListUL>
          <h2>Skills</h2>

          <h3> Architecture & Design Patterns</h3>
          <li className="list">
            MVC, Active Record, Active Storage, REST-ful API, JWT
          </li>
          <h3>Programming Languages</h3>
          <li className="list">Javascript, Ruby, HTML, CSS</li>
          <h3> Design Software</h3>
          <li className="list">Adobe XD, Figma, LucidChart</li>
          <h3> Version Control</h3>
          <li className="list">Git, Github</li>
          <h3> Relational Database Management Systems</h3>
          <li className="list">PostgreSQL, SQLite3, SQL</li>
          <h3> Frameworks & Libraries</h3>
          <li className="list">React.js, Gatsby.js, Styled Components</li>
          <h3> Project Management Software</h3>
          <li className="list">Jira, Notion </li>
          <h3> Testing</h3>
          <li className="list">React Testing, Jest</li>
        </SkillsListUL>
      </AboutImagesContainer>
      <AboutTextContainer>
        <h2>About</h2>
        <p>
          Hi there! My name is Chris. Before now, I worked in Healthcare for
          over 5 years. My interest in tech started while completing my
          undergrad. My HR professor, asked me about what was my plans post
          grad? I expressed about my interest in diving into tech, to which he
          pointed me to start attending NYT meetups. Watching presentations of
          real world projects that impact people created out of nothing more
          than a mere idea was amazing to me. Today, it still is.
        </p>
        <p>
          In my spare time, I love cycling, making coffee and flexing my home
          latte art skills, and LEGO sets, and hanging out with my sister Cami.
          I also have a
        </p>
        {/* </TextWrapper> */}
      </AboutTextContainer>
    </Wrapper>
  );
};
export default About;
const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  background-color: lightgoldenrodyellow;
`;
const AboutImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 4px;
  align-items: center;
  background-color: lightskyblue;
  flex: 1;
`;
const AboutTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;

  justify-content: flex-start;
  background-color: lightsalmon;
  p {
    padding: 16px;
    height: auto;
    width: auto;
  }
  h2 {
    align-self: center;
    font-weight: 800;
    font-size: 2rem;
    height: auto;
    padding: 26px;
  }
`;
const IconsContainer = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px;
  align-items: center;
  background-color: white;
  height: 100%;
  padding: 12px;

  .icon {
    width: 50px;
    height: auto;
    /* padding: 5px; */
  }
`;
const SkillsListUL = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-left: 50px;

  li {
    font-weight: 400;
    width: auto;
    height: auto;
    font-size: 1em;
  }
  h3 {
    height: auto;
    font-weight: 600;
    font-size: 1.5em;
  }
  h2 {
    align-self: center;
    font-weight: 800;
    font-size: 2rem;
    height: auto;
    padding: 26px;
  }
`;
