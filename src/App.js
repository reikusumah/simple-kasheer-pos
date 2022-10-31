import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "./styled/theme";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 92vh;
`;

const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0 0.5rem 0.5rem;
`;

const ProductContainer = styled.div`
  width: 60%;
  height: 100%;
  background: ${(props) => props.theme.light};
  border-left: ${(props) => props.theme.grey};
  border-right: ${(props) => props.theme.grey};
  padding: 0.5rem 0;
`;

const ProductTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>Menu</MenuContainer>
        <ProductContainer>
          <ProductTitle>Products</ProductTitle>
          <ProductCard />
        </ProductContainer>
        <CartContainer>Cart</CartContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
