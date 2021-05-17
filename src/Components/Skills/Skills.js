import React from "react";
import styled from "styled-components/macro";
import SkillIcons from "./SkillIcons";
import QUERIES from "../Constants";
const Skills = () => {
  return (
    <Wrapper>
      <SkillIcons />

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
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: navajowhite;
  max-width: 100%;
`;
const SkillsListUL = styled.ul`
  /* align-self: center; */
  flex: 2;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* gap: 8px; */
  /* padding-left: 50px; */
  background-color: gainsboro;
  padding: 28px;
  width: 100%;
  li {
    align-self: center;
    font-weight: 400;
    text-align: center;
    height: auto;
    font-size: 1rem;
    padding-bottom: 16px;
  }
  h3 {
    align-self: center;
    height: auto;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
  }
  h2 {
    align-self: center;
    font-weight: 800;
    font-size: 2rem;
    height: auto;
    padding: 0 16px 16px 16px;
  }

  @media ${QUERIES.laptopAndDown} {
  }
  @media ${QUERIES.tabletAndDown} {
  }
  @media ${QUERIES.mobileAndDown} {
    h3 {
      font-size: 1.4rem;
    }
  }
`;
export default Skills;
