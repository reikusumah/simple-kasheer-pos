import React from "react";
import styled from "styled-components";

const CounterStyle = styled.button`
  width: 1.25rem;
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.light};
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  text-align: center;
  cursor: pointer;
`;

const Counter = ({ inc, dec }) => {
  if (inc) {
    return <CounterStyle onClick={inc}>+</CounterStyle>;
  } else if (dec) {
    return <CounterStyle onClick={dec}>-</CounterStyle>;
  }
};

export default Counter;
