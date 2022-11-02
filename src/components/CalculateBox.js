import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./Button";
import { resetAllCart } from "../app/reducers/foodSlice";

const Box = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 23%;
  height: 8rem;
  margin-left: 0.5rem;
  box-shadow: 1px 1px 10px 1px ${(props) => props.theme.grey};
  padding: 0.4rem;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const Pay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  input[type="number"] {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.dark};
    font-weight: bold;
    text-align: right;
    &:focus {
      outline: none;
      &::-moz-focus-inner,
      &::-moz-focus-outer,
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        appearance: none;
        -webkit-appearance: none;
      }
    }
  }
`;
const Change = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalculateBox = () => {
  const [pay, setPay] = useState("");
  const [change, setChange] = useState("");
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.foods.cart);

  const total = carts.reduce(
    (totalPrice, currentPrice) => totalPrice + currentPrice.price,
    0
  );

  const calculateChange = () => {
    if (pay > total) {
      setChange(pay - total);
    }
  };

  const handleChange = (e) => {
    setPay(e.target.value);
  };

  const resetCart = () => {
    dispatch(resetAllCart());
    setChange("");
    setPay("");
  };

  return (
    <Box>
      <Total>
        <h4>Total</h4>
        <p>{total}</p>
      </Total>
      <Pay>
        <p>Jumlah Bayar</p>
        <input type="number" value={pay} onChange={handleChange} />
      </Pay>
      <Change>
        <p>Kembalian</p>
        <p>{change}</p>
      </Change>
      <BtnBox>
        <Button primary action={calculateChange} text="Selesai" />
        <Button action={resetCart} text="Reset" />
      </BtnBox>
    </Box>
  );
};

export default CalculateBox;
