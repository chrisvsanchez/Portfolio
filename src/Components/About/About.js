import styled from "styled-components/macro";
import React from "react";

const About = () => {
  return (
    <Wrapper>
      <AboutImagesContainer></AboutImagesContainer>
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
  flex: 1 1 0;
`;
const AboutTextContainer = styled.div`
  flex: 1 1 0;
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
// const IconsContainer = styled.div`
//   flex: 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   gap: 8px;
//   align-items: center;
//   background-color: white;
//   height: 100%;
//   max-width: 100px;
//   min-width: 70px;
//   padding: 12px;

//   .icon {
//     width: 50px;
//     height: auto;
//     /* padding: 5px; */
//   }
// `;
// const SkillsListUL = styled.ul`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 8px;
//   padding-left: 50px;

//   li {
//     font-weight: 400;
//     width: auto;
//     height: auto;
//     font-size: 1rem;
//   }
//   h3 {
//     height: auto;
//     font-weight: 600;
//     font-size: 1.5rem;
//   }
//   h2 {
//     align-self: center;
//     font-weight: 800;
//     font-size: 2rem;
//     height: auto;
//     padding: 26px;
//   }
// `;
