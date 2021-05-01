import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaMedium, FaLinkedin, FaCodepen } from "react-icons/fa";
import Chris from "../Images/ProjectLogos/IMG_1076.jpeg";
const LandingPage = () => {
  return (
    <Wrapper>
      {/* <ImageContainer> */}
      <IntroWrapper>
        <h3>Hi there, I’m Chris. Software Engineer</h3>
        <img src={Chris} alt="Chris Sanchez"></img>
      </IntroWrapper>
      {/* </ImageContainer> */}
      {/* <MainText>Chris V Sanchez</MainText> */}
      <SocialLinks>
        <Link to="/">
          <FaGithub className="icons" />
        </Link>
        <Link to="/">
          <FaLinkedin className="icons" />
        </Link>
        <Link to="/">
          <FaMedium className="icons" />
        </Link>
        <Link to="/">
          <FaCodepen className="icons" />
        </Link>
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
  flex: 1;
  /* flex-direction: row;
  justify-content: space-between; */
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  background-color: lightslategray;
  /* height: 100%; */
  img {
    width: 464px;
    height: auto;
    border-radius: 50%;
    padding: 14px;
  }
  h3 {
    font-weight: 600;
    font-size: 3rem;
    width: 500px;
    overflow: wrap;
  }
`;
// const MainText = styled.h3`
//   /* flex: 0, 1, 100%; */
//   font-weight: 600;
//   font-size: 3rem;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
// `;
const SocialLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 12px;
  background-color: lightseagreen;
  width: 100%;
  .icons {
    height: 48px;
    width: 48px;
    &:hover {
      color: deeppink;
    }
  }
`;

export default LandingPage;
