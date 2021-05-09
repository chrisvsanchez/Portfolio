import { React } from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import AnimatedEnvelope from "./AnimatedEnvelope";

const Contact = () => {
  return (
    <Wrapper>
      {/* <EnvelopeAndFormWrapper> */}
      <ContactFormWrapper>
        <h3>Contact Form</h3>
        <ContactForm />
      </ContactFormWrapper>

      {/* <AnimatedEnvelopeWrapper>
        <h3>Let's work Together</h3>
        <AnimatedEnvelope />
      </AnimatedEnvelopeWrapper> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 98%;
  padding: 100px;
  background-color: pink;
  h3 {
    padding: 18px;
    font-size: 2rem;
    height: auto;
  }
`;

const ContactFormWrapper = styled.div`
  flex: 1 1 250px;
  background: cornflowerblue;
  padding: 40px 40px 40px 40px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// const AnimatedEnvelopeWrapper = styled.div`
//   flex: 1;
//   background: pink;
// `;
export default Contact;
