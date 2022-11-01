import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addCart } from "../app/reducers/foodSlice";

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin-right: 1rem;
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: cover;
  height: 150px;
  width: 150px;
`;

const ProductCard = () => {
  const foodsData = useSelector((state) => state.foods.foods.foods);
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(addCart(id));
  };

  return (
    <CardList>
      {foodsData.map((food) => {
        return (
          <Card key={food.id} onClick={() => addToCart(food.id)}>
            <Image
              src={require(`../assets/foods/${food.image}`)}
              alt={food.name}
              loading="lazy"
            />
            <p>{food.name}</p>
          </Card>
        );
      })}
    </CardList>
  );
};

export default ProductCard;
