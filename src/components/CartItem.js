import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";

const Cart = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 0.3rem;
  margin: 0.5rem auto;
  background: ${(props) => props.theme.light};
  box-shadow: 1px 1px 10px 1px #ccc;
`;

const CounterContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
`;

const CounterTotal = styled.p`
  margin: 0 0.3rem;
`;

const ItemName = styled.div`
  width: 40%;
  padding-left: 0.5rem;
`;

const Price = styled.div`
  width: 35%;
  text-align: center;
`;

const CartItem = () => {
  const [count] = useState(1);
  return (
    <Cart>
      <ItemName>Item</ItemName>
      <CounterContainer>
        <Counter dec />
        <CounterTotal>{count}</CounterTotal>
        <Counter inc />
      </CounterContainer>
      <Price>27000</Price>
    </Cart>
  );
};

export default CartItem;
