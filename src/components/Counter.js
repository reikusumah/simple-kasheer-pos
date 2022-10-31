import React from "react";
import styled from "styled-components";

const CounterStyle = styled.div`
  width: 1.25rem;
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.light};
  height: 1.25rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 100px;
  text-align: center;
  cursor: pointer;
`;

const Counter = ({ inc, dec }) => {
  if (inc) {
    return <CounterStyle>+</CounterStyle>;
  } else {
    return <CounterStyle>-</CounterStyle>;
  }
};

export default Counter;
