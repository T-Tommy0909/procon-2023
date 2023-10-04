import React from "react";
import styled from "styled-components";

export const TextField => {
    return(

    )
}

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: white;
  color: black;
  &:focus {
    background: #fff;
  }
  &:disabled,
  &:read-only {
    color: gray;
  }
`;