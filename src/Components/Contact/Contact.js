import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <h3>Let's Work Together</h3>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  height: 100%;
  h3 {
    padding: 18px;
    font-size: 2rem;
  }
`;
export default Contact;
