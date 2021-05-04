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

      <AnimatedEnvelopeWrapper>
        <h3>Let's work Together</h3>
        <AnimatedEnvelope />
      </AnimatedEnvelopeWrapper>
      {/* </EnvelopeAndFormWrapper> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  /* align-items: center; */
  height: 98%;
  background-color: skyblue;
  padding: 100px;
  h3 {
    padding: 18px;
    font-size: 2rem;
    height: auto;
  }
`;

const ContactFormWrapper = styled.div`
  flex: 1 0 120px;
  background: cornflowerblue;
  padding: 20px;
  width: 500px;
  height: 100%;
`;
const AnimatedEnvelopeWrapper = styled.div`
  flex: 1;
  background: pink;
`;
export default Contact;
