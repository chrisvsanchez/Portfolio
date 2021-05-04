import React from "react";
import styled from "styled-components/macro";
const AnimatedEnvelope = () => {
  return (
    <Wrapper>
      <Triangle />
      <Rectangle />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: greenyellow;
`;
const Rectangle = styled.div`
  width: 150px;
  height: 100px;
  background-color: none;
  border: 2px solid red;
`;
const Triangle = styled.div``;
export default AnimatedEnvelope;
