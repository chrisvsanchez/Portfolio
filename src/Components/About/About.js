import styled from "styled-components/macro";

const About = () => {
  return (
    <Wrapper>
      <AboutImagesContainer></AboutImagesContainer>
      <AboutTextContainer>
        {/* <TextWrapper> */}
        <p>
          Hell hello there! My name is Cassidy and I'm a Principal Developer
          Experience Engineer at Netlify. Before now, I worked at React
          Training, CodePen, Amazon, L4 Digital, Clarifai, and Venmo, and
          graduated from Iowa State University. I run a weekly newsletter and
          love teaching and helping people become better coders!
        </p>
        <p>
          Hell hello there! My name is Cassidy and I'm a Principal Developer
          Experience Engineer at Netlify. Before now, I worked at React
          Training, CodePen, Amazon, L4 Digital, Clarifai, and Venmo, and
          graduated from Iowa State University. I run a weekly newsletter and
          love teaching and helping people become better coders!
        </p>
        <p>
          In my spare time, I love playing music, building mechanical keyboards
          and LEGO sets, and hanging out with my sister Cami. I also have a
          Patreon if you'd like to chat with me regularly (our Discord group is
          so active I can hardly keep up!), get resume reviews, schedule mock
          interviews with me, or just play video games. No pressure to join in,
          and I appreciate your support a ton no matter what!
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
  background-color: lightskyblue;
  height: 100%;
  flex: 1;
`;
const AboutTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  /* align-items: flex-start; */
  justify-content: center;
  background-color: lightsalmon;
  p {
    padding: 16px;
    height: auto;
    width: auto;
  }
`;
