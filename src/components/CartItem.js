import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Counter from "./Counter";
import { addStockBuy, reduceStockBuy } from "../app/reducers/foodSlice";

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

const CartItem = (props) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const item = props.item;

  const increment = (id) => {
    setCount(count + 1);
    dispatch(addStockBuy(id));
  };

  const decrement = (id) => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(reduceStockBuy(id));
    }
  };

  console.log(count);
  return (
    <Cart>
      <ItemName>{item.name}</ItemName>
      <CounterContainer>
        <Counter dec={() => decrement(item.id)} />
        <CounterTotal>{count}</CounterTotal>
        <Counter inc={() => increment(item.id)} />
      </CounterContainer>
      <Price>{item.price}</Price>
    </Cart>
  );
};

export default CartItem;
