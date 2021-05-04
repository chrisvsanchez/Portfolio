import { React, useState } from "react";
import styled from "styled-components/macro";
import { FaGithub, FaMedium, FaLinkedin, FaCodepen } from "react-icons/fa";
import Chris from "../Images/ProjectLogos/IMG_1076.jpeg";
import { useSpring, animated } from "react-spring";
// import { useTrail, animated } from "react-spring";
const LandingPage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });
  return (
    <Wrapper>
      {/* <ImageContainer> */}
      <IntroWrapper>
        <AnimatedHeader style={props}>
          <h1>
            {" "}
            I’m Chris <h1>Software Engineer</h1>
          </h1>
        </AnimatedHeader>
        <img src={Chris} alt="Chris Sanchez"></img>
      </IntroWrapper>
      {/* </ImageContainer> */}
      {/* <MainText>Chris V Sanchez</MainText> */}
      <SocialLinks>
        <a href="https://github.com/chrisvsanchez">
          <FaGithub className="icons" />
        </a>

        <a href="/https://www.linkedin.com/in/chrisvsanchez/">
          <FaLinkedin className="icons" />
        </a>
        <a href="/https://chrisvsanchez.medium.com/">
          <FaMedium className="icons" />
        </a>
        <a href="/https://codepen.io/Chrisvsanchez">
          <FaCodepen className="icons" />
        </a>
      </SocialLinks>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  align-items: center;
  background-color: lightslategray;
  height: 92%;
`;
const IntroWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;

  gap: 8px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  background-color: none;
  h1 {
    height: auto;
    align-self: center;
  }
  img {
    width: 480px;
    height: auto;
    border-radius: 50%;
    padding: 64px;
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
    height: 48px;
    width: 48px;
    &:hover {
      color: deeppink;
    }
  }
`;

const AnimatedHeader = styled(animated.h1)`
  font-weight: 600;
  font-size: 3rem;
  width: 500px;
  overflow: wrap;
`;

export default LandingPage;
