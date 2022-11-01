import React from "react";
import styled from "styled-components";
import Button from "./Button";

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
  return (
    <Box>
      <Total>
        <h4>Total</h4>
        <p>23000</p>
      </Total>
      <Pay>
        <p>Jumlah Bayar</p>
        <input type="number" />
      </Pay>
      <Change>
        <p>Kembalian</p>
        <p>10000</p>
      </Change>
      <BtnBox>
        <Button primary></Button>
        <Button></Button>
      </BtnBox>
    </Box>
  );
};

export default CalculateBox;
