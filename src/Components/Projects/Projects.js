import React from "react";
import styled from "styled-components/macro";
import HomeBaristaLogo from "../Images/ProjectLogos/Home_barista_logo_white copy.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const PROJS = [
  {
    name: "Vincere Cycling Club",
    Github: "https://github.com/chrisvsanchez/VincereFrontend-",
    Demo: "",
    logo: HomeBaristaLogo,
  },
  {
    name: "HomeBarista",
    Github: "https://github.com/chrisvsanchez/homeBarista-Frontend",
    Demo: "",
    logo: HomeBaristaLogo,
  },
];
const turnToSection = () => {
  PROJS.map((p) => {
    return (
      <div>
        <img src={p.logo} alt={`${p.name} + "logo"`} />
        <h3>{p.name}</h3>
        <div>
          <Link to={p.Github}>
            <FaGithub className="icons" />
          </Link>
          <Link to="/">
            <FaGithub className="icons" />
          </Link>
        </div>
      </div>
    );
  });
};
const Projects = () => {
  return <Wrapper>{turnToSection}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  background-color: lightpink;
  height: 100%;
`;

export default Projects;
