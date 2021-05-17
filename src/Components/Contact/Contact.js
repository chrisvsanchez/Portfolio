import { React } from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import AnimatedEnvelope from "./AnimatedEnvelope";
import QUERIES from "../Constants";

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
  font-family: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 98%;
  padding: 10px;
  /* background-color: pink; */
  h3 {
    padding: 18px;
    font-size: 2rem;
    height: auto;
  }
`;

const ContactFormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  /* background: cornflowerblue; */
  /* padding: 40px 40px 40px 40px; */
  height: auto;
  max-width: 100%;
  font-family: inherit;
  @media ${QUERIES.laptopAndDown} {
  }
  @media ${QUERIES.tabletAndDown} {
  }
  @media ${QUERIES.mobileAndDown} {
    padding: 16px;
  }
`;
// const AnimatedEnvelopeWrapper = styled.div`
//   flex: 1;
//   background: pink;
// `;
export default Contact;
