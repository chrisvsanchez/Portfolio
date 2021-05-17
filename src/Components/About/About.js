import styled from "styled-components/macro";
import React from "react";
import QUERIES from "../Constants";
const About = () => {
  return (
    <Wrapper>
      <AboutImagesContainer>
        <h2>Hello there</h2>
      </AboutImagesContainer>
      <AboutTextWrapper>
        <h2>About</h2>
        <AboutContentContainer>
          <p>
            Hi there! My name is Chris. My interest in tech took a serious turn
            while completing my undergrad. My HR professor asked me what my
            plans would be post grad. I expressed my interest in tech and he
            encouraged me to start attending{" "}
            <a
              href="https://www.nytech.org/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              NYT meetups
            </a>{" "}
            for potential HR/tech roles and networking. I fell in love with what
            you can do with code. Watching presentations of real world projects
            that impacted people, created out of nothing more than a mere idea,
            was amazing to me.
          </p>
          <p>
            {" "}
            I worked in Healthcare for the past 5 years, and while working
            full-time, I started learning and practicing as much as I could. In
            early 2020, I received a full scholarship for one of the top coding
            bootcamps in NYC, Flatiron School, through the Tech Talent Pipeline.
            I was thrilled! During my time in FI I crossed the line from
            tutorial hell to building full stack applications. My experience
            collaborating with other developers and challenging one another to
            surpass our imaginations with what we could build has shaped me.
            Since then, I have worked with other teams on Chingu and developers
            around the world, and am always working on a side project to
            continue learning.
          </p>
          <p>
            In my spare time, I love cycling, making coffee(home latte art
            skills are strong), film photography and trying to find a 30 series
            GPU for MRSP to build a computer.
          </p>
        </AboutContentContainer>
      </AboutTextWrapper>
    </Wrapper>
  );
};
export default About;
const Wrapper = styled.div`
  display: flex;
  font-family: "Montserrat", sans-serif;
  flex-direction: row;
  background-color: none;
  min-width: 100%;
`;
const AboutImagesContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  /* gap: 4px; */
  justify-content: flex-start;
  align-items: center;
  background-color: yellow;
  display: none;
  @media ${QUERIES.mobileAndDown} {
    display: none;
  }
`;
const AboutContentContainer = styled.div``;
const AboutTextWrapper = styled.div`
  flex: 2 2 1;
  flex-wrap: wrap;
  display: flex;
  flex-flow: column;
  /* justify-content: flex-end; */
  width: 100%;
  height: 100%;
  background-color: none;
  padding: 16px;
  p {
    /* flex: 1; */
    padding: 32px;
    height: auto;
    min-width: 100%;
    line-height: 3.3rem;
    font-weight: 500;
    /* font-size: 2.2rem; */
    font-size: clamp(2rem, -0.775rem + 6.33vw, 2.5rem);
    word-wrap: break-word;
    margin: 0;
    text-indent: 1rem;

    a {
      text-decoration: none;
      border-bottom: #ea215a 0.125em solid;
      color: inherit;

      &:hover {
        color: #ea215a;
      }
    }
  }
  h2 {
    align-self: center;
    font-weight: 800;
    font-size: 4rem;
    height: auto;
    padding: 26px;
  }
  @media ${QUERIES.laptopAndDown} {
    padding: 4px;
    h2 {
      font-size: 3rem;
    }
    p {
      /* font-size: 1.2rem; */
      font-size: clamp(2rem, -0.875rem + 6.33vw, 1.5rem);
      line-height: 3rem;
      padding: 32px;
    }
  }
  @media ${QUERIES.tabletAndDown} {
    padding: 2px;
    h2 {
      font-size: 2rem;
      padding: 16px 16px 0 16px;
    }
    p {
      padding: 16px 16px 0 16px;
      font-size: clamp(1rem, -0.875rem + 6.33vw, 1.5rem);
      line-height: 2rem;
      flex-grow: 2;
    }
  }
  @media ${QUERIES.mobileAndDown} {
    /* flex: 1 1 0; */

    h2 {
      align-self: center;
      padding: 16px;
      font-size: 1rem;
      font-weight: 700;
      height: auto;
    }
    p {
      /* font-size: 0.8rem; */
      flex: 1 1 100%;
      font-size: clamp(0.9rem, -0.875rem + 6vw, 2.5rem);
      /* font-size: 0.9rem; */

      padding: 0px 16px;
      line-height: 1.2rem;
      text-indent: 1.5rem;
      margin: 0 0 15px 0;
      height: auto;
    }
  }
`;
