import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin-right: 1rem;
  text-align: center;
`;

const Image = styled.img`
  object-fit: cover;
  height: 150px;
  width: 150px;
`;

const ProductCard = () => {
  const foodsData = useSelector((state) => state.foods.foods.foods);

  return (
    <CardList>
      {foodsData.map((food) => {
        return (
          <Card key={food.id}>
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
