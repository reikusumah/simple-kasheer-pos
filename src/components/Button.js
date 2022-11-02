import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  height: 1.7rem;
  width: 6rem;
  border: none;
  padding: 0.2rem 0.5rem;
  color: #fff;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const PrimaryButton = styled(MyButton)`
  background: ${(props) => props.theme.primary};
  &:hover {
    opacity: 0.8;
  }
`;

const WarningButton = styled(MyButton)`
  background: ${(props) => props.theme.tertiary};
  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ primary, action, text }) => {
  if (primary) {
    return <PrimaryButton onClick={action}>{text}</PrimaryButton>;
  } else {
    return <WarningButton onClick={action}>{text}</WarningButton>;
  }
};

export default Button;
