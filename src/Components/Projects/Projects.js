import React from "react";
import styled from "styled-components/macro";
import HomeBaristaLogo from "../Images/ProjectLogos/Home_barista_logo_white copy.png";
import VincereLogo from "../Images/ProjectLogos/vincerenycyclingwheel_white.png";
import { Link } from "react-router-dom";
import SkillIcons from "../Skills/SkillIcons";
import QUERIES from "../Constants";
import { FaGithub } from "react-icons/fa";
import { DiHeroku } from "react-icons/di";
import { IconContext } from "react-icons";
import { BsCircleHalf } from "react-icons/bs";
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
      "Built with React, Rails, PostgreSQL, CSS, React Router, B-Crypt, and JWT",
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
              {/* <AppLogo style={{ backgroundColor: p.color }}>
                <img src={p.logo} alt={`${p.name}` + "logo"} />
              </AppLogo> */}

              <AppDetails style={{ backgroundColor: p.color }}>
                <h3>{p.name}</h3>
                <p>{p.description}</p>

                <ul>
                  {p.features.map((feat) => {
                    return <li>{feat}</li>;
                  })}
                </ul>
                <AppLogo style={{ backgroundColor: p.color }}>
                  <img src={p.logo} alt={`${p.name}` + "logo"} />
                </AppLogo>
                <ButtonsWrapper>
                  <IconContext.Provider
                    value={{ color: "green", size: "30px" }}
                  >
                    <Button>
                      <FaGithub className="icon" />
                      GitHub
                    </Button>
                    <Button>
                      <DiHeroku className="icon" />
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
  /* padding: 4px; */
  display: flex;
  flex: 2;
  flex-direction: row-reverse;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 100%;
  background-color: lightsteelblue;
`;
const AppLogo = styled.div`
  flex: 1;
  width: 100%;

  /* padding: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 0%; */

  img {
    max-width: 100%;
    max-height: 75%;
    flex-wrap: wrap;
  }
  @media ${QUERIES.laptopAndDown} {
    flex: 1 1 300px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  @media ${QUERIES.tabletAndDown} {
    flex: 1 0 200px;
    img {
      max-width: 100%;
      max-height: 50%;
      padding: 4%;
    }
  }
  @media ${QUERIES.mobileAndDown} {
    flex: 1;
    flex-direction: column-reverse;
    max-width: 100%;
    max-height: auto;
    img {
      /* display: none; */
      /* width: auto;
      height: auto; */
      max-width: 50%;
      max-height: 100%;
    }
  }
`;
const AppDetails = styled.div`
  flex: 2 1 0;
  display: flex;
  flex-direction: column;
  /* padding-left: 32px; */
  /* align-content: center; */
  /* background-color: yellow !important; */
  /* padding: 0 16px; */
  /* gap: 4px; */
  h3 {
    font-size: 5rem;
    height: auto;
  }
  p {
    padding-left: 16px;
    font-size: 2rem;
    height: auto;
  }

  li {
    padding-left: 32px;
    height: auto;
    margin: 20px 0;
    font-size: 2rem;
    font-weight: 600;
  }
  @media ${QUERIES.laptopAndDown} {
    /* padding-left: 16px; */
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
  }
  @media ${QUERIES.tabletAndDown} {
  }
  @media ${QUERIES.mobileAndDown} {
    max-width: 100%;
    /* padding-left: 16px; */
    h3 {
      font-size: 2rem;
      padding: 12px 0 0 12px;
    }
    p {
      padding: 0 24px 0 24px;

      font-size: 1rem;
      height: auto;
    }

    li {
      padding-left: 16px;
      height: auto;
      margin: 12px 0;
      font-size: 1rem;
      list-style: inside;
    }
  }
`;
const Button = styled.div`
  flex: 1 1 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
  padding: 6px;
  height: auto;
  border-radius: 20px;
  background-color: blanchedalmond;

  &:hover {
    color: deeppink;
    /* background-color: deepskyblue; */
  }
  .icon {
    /* padding: 4px; */
  }
`;
const ButtonsWrapper = styled.div`
  flex: 1 1 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: skyblue; */

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-around;
  }
`;
export default Projects;
