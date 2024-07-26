/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

const size = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

// const variation = {
//   primary: css``,
// };

const Button = styled.button`
  border: none;
  border-radius: 10px;
  width: 30%;
  align-self: center;
  color: #fff;
  background-color: #20c997;

  &:hover {
    background-color: #38d9a9;
  }

  ${(props) => size[props.size]}

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;

Button.defaultProps = {
  // variation: "primary",
  size: "medium",
};

export default Button;
