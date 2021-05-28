import { React, useState } from "react";
import styled from "styled-components/macro";
import { FaGithub, FaMedium, FaLinkedin, FaCodepen } from "react-icons/fa";
import QUERIES from "../Constants";
import Chris from "../Images/ProjectLogos/IMG_1076.jpeg";
import { useSpring, animated } from "react-spring";
import chrisHS1 from "../Images/ProjectLogos/Headshots/CVS_smile.png";
// import { useTrail, animated } from "react-spring";
const LandingPage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });
  return (
    <Wrapper>
      <IntroWrapper>
        <IntroHeaderWrapper>
          <AnimatedHeader style={props}>
            <h1>
              {" "}
              I’m Chris <h1>Software Engineer</h1>
            </h1>
          </AnimatedHeader>
        </IntroHeaderWrapper>
        <IntroImageWrapper>
          <img src={chrisHS1} alt="Chris Sanchez"></img>
        </IntroImageWrapper>
      </IntroWrapper>

      <SocialLinks>
        <a href="https://github.com/chrisvsanchez">
          <FaGithub className="icons" />
        </a>

        <a href="https://www.linkedin.com/in/chrisvsanchez/">
          <FaLinkedin className="icons" />
        </a>
        <a href="https://chrisvsanchez.medium.com/">
          <FaMedium className="icons" />
        </a>
        <a href="https://codepen.io/Chrisvsanchez">
          <FaCodepen className="icons" />
        </a>
      </SocialLinks>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* flex: 1 1 0; */
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  align-items: center;
  width: 100%;
  /* background-color: background-color: #0093E9; */
  background-color: none;
  /* background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%); */
  height: 92%;
  /* @media (max-width: 1000px) {
    flex-direction: row;
  } */
`;
const IntroWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  align-content: center;
  /* justify-content: center; */
  /* gap: 8px; */
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  background-color: none;
  max-width: 100%;
  /* padding: 12px; */
  /* h1 {
    /* flex: 1; */
    font-size: 3rem;
    height: auto;
    width: 100%;
    /* align-self: center; */
    padding: 16px 16px 16px 16px;
    line-height: 2rem;
  } */
  /* img {
    flex: 1;
    border: black 3px solid;
    border: black 3px solid;
    width: 10%;
    height: auto;
    border: solid 3px green;
    border-radius: 20%;
    padding: 64px;
    align-self: flex-start;
  } */

  @media ${QUERIES.laptopAndDown} {
    /* flex: 1; */
    h1 {
      font-size: 3rem;
      height: auto;
      width: 100%;
      /* align-self: center; */
    }
    img {
      width: 100%;
      height: auto;
      /* border-radius: 50%;
      border: 3px solid green; */
    }
    /* h1 {
      font-size: 3rem;
    } */
    p {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
  @media ${QUERIES.tabletAndDown} {
    flex-direction: column-reverse;
    img {
      width: 400px;
    }
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
  @media ${QUERIES.mobileAndDown} {
    /* flex-flow: row-wrap; */
    flex-direction: column-reverse;
    img {
      width: 350px;
    }
    h1 {
      width: auto;
      align-self: center;
      /* padding: 16px; */
      font-size: 1.7rem;
    }
  }
`;
const IntroHeaderWrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  h1 {
    /* flex: 1; */
    font-size: 3rem;
    height: auto;
    width: 100%;
    align-self: center;
    padding: 16px 16px 16px 16px;
    line-height: 2rem;
  }
`;
const IntroImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  flex: 1;
  img {
    /* flex: 1; */
    /* border: black 3px solid;
    border: black 3px solid; */
    width: 100%;
    height: auto;
    /* border: solid 3px green; */
    border-radius: 50%;
    /* padding: 64px; */
    /* align-self: flex-start; */
  }
`;
const SocialLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 12px;
  background-color: none;
  width: 100%;
  a {
    height: 48px;
    color: purple;
  }
  .icons {
    height: 70px;
    width: 70px;
    /* box-shadow: 0px 2px 26px hsl(0deg 0% 0%/0.35); */
    /* background-color: inherit; */
    &:hover {
      color: deeppink;
    }
  }
`;

const AnimatedHeader = styled(animated.h1)`
  font-weight: 600;
  font-size: 3rem;
  /* width: 500px; */
  overflow: wrap;
  /* border: 3px purple solid; */
`;

export default LandingPage;
