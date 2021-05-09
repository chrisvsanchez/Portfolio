import React from "react";
import styled from "styled-components/macro";
import HomeBaristaLogo from "../Images/ProjectLogos/Home_barista_logo_white copy.png";
import VincereLogo from "../Images/ProjectLogos/Vincerecyclingclublogofinal black.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { DiHeroku } from "react-icons/di";
import { IconContext } from "react-icons";
const allProjects = [
  {
    name: "HomeBarista",
    logo: `${HomeBaristaLogo}`,
    description:
      "A social media platform for people who create coffee at home and want to interact with other coffee enthusiasts",
    color: "purple",
    features: [
      "Added Cloudinary API so users can upload images rather than copy and paste URL links",
      "Implemented RESTful routes for Rails backend according to MVC conventions",
      "Built with React, Rails, PostgreSQL, Material UI, CSS, React Router, B-Crypt, and JWT",
    ],
  },
  {
    name: "Vincere Cycling Club",
    logo: `${VincereLogo}`,
    description:
      "An e-commerce and event website that contributes to fostering an online cycling community",
    color: "green",
    features: [
      "Utilized JSON Web Tokens and localStorage to store encrypted user information client-side",
      "Implemented Mapbox API to show event locations so users can register for an event",
      "Built with React, Rails, PostgreSQL, React Router, CSS, Semantic UI, Moment.js, and Toastify.js",
    ],
  },
];
const Projects = () => {
  return (
    <>
      {allProjects.map((p) => {
        return (
          <>
            <Wrapper>
              <AppLogo style={{ backgroundColor: p.color }}>
                <img src={p.logo} alt={`${p.name}` + "logo"} />
              </AppLogo>

              <AppDetails style={{ backgroundColor: p.color }}>
                <h3>{p.name}</h3>
                <p>{p.description}</p>

                <ul>
                  {p.features.map((feat) => {
                    return <li>{feat}</li>;
                  })}
                </ul>
                <ButtonsWrapper>
                  <IconContext.Provider
                    value={{ color: "black", size: "40px" }}
                  >
                    <Button>
                      <FaGithub />
                      GitHub
                    </Button>
                    <Button>
                      <DiHeroku />
                      Deployed
                    </Button>
                  </IconContext.Provider>
                </ButtonsWrapper>
              </AppDetails>
            </Wrapper>
          </>
        );
      })}
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-family: "Montserrat", sans-serif;
  height: 100%;
  background-color: lightsteelblue;
`;
const AppLogo = styled.div`
  /* flex: 1;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  } */
  flex: 1 0 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0%;
  @media (max-width: 1000px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;
const AppDetails = styled.div`
  flex: 2 1 0;
  display: flex;
  flex-direction: column;
  padding: 16px;
  /* gap: 4px; */
  h3 {
    font-size: 3rem;
    height: auto;
  }
  p {
    padding-left: 16px;
    font-size: 1rem;
    height: auto;
  }

  li {
    padding-left: 32px;
    height: auto;
    margin: 20px 0;
    font-size: 1rem;
  }
`;
const Button = styled.div`
  flex: 1 1 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 120px;
  height: auto;
  border-radius: 20px;
  background-color: blanchedalmond;

  &:hover {
    color: deeppink;
    background-color: deepskyblue;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* gap: 4px; */
  justify-content: space-evenly;
  /* align-self:baseline; */
  @media (max-width: 700px) {
    justify-content: space-around;
`;
export default Projects;
