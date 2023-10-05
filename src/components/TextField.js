import React from "react";
import styled from "styled-components";

export const TextField = ({ value, onChange, placeholder, id, type }) => {
  return (
    <Container>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {placeholder != null && !value && (
        <Placeholder>{placeholder}</Placeholder>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  border-radius: 6px;
  background: #e2e5e7;
  color: #445053;
`;

const Input = styled.input`
  display: block;

  width: 100%;
  padding: 0.5rem 0.75rem;

  &:focus {
    background: #fff;
  }
  &:disabled,
  &:read-only {
    color: #727f8b;
  }
  ::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  pointer-events: none;

  color: #727f8b;
`;
