import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import Chris from "../Images/ProjectLogos/IMG_1076.jpeg";
const LandingPage = () => {
  return (
    <Wrapper>
      {/* <ImageContainer> */}
      <img src={Chris} alt="Chris Sanchez"></img>
      {/* </ImageContainer> */}
      <MainText>Chris V Sanchez</MainText>
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
      </SocialLinks>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightslategray;
  height: 94%;
  img {
    width: 250px;
    height: auto;
    border-radius: 50%;
    align-self: center;
  }
`;
// const ImageContainer = styled.div`
//   border: solid 3px black;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   img {
//     display: block;
//     width: 250px;
//     height: auto;
//     align-self: center;
//   }
// `;
const MainText = styled.h3`
  /* flex: 0, 1, 100%; */
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  background-color: lightseagreen;

  .icons {
    height: 48px;
    width: 48px;
    &:hover {
      color: deeppink;
    }
  }
`;

export default LandingPage;
