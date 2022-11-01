import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import * as theme from "./styled/theme";
import CartItem from "./components/CartItem";
import ListMenu from "./components/ListMenu";
import CalculateBox from "./components/CalculateBox";

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
  border-left: 1px solid ${(props) => props.theme.grey};
  border-right: 1px solid ${(props) => props.theme.grey};
  padding: 0.5rem 1rem;
`;

const ProductTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.primary};
`;

const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0;
`;

function App() {
  const carts = useSelector((state) => state.foods.cart);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu />
        </MenuContainer>
        <ProductContainer>
          <ProductTitle>Makanan</ProductTitle>
          <ProductCard />
        </ProductContainer>
        <CartContainer>
          <p style={{ marginLeft: "0.5rem" }}>
            {carts ? `${carts.length} item in cart` : `0 item in cart`}
          </p>
          {carts.map((item) => {
            return (
              <div key={item.id}>
                <CartItem item={item}></CartItem>
              </div>
            );
          })}
          <CalculateBox />
        </CartContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
