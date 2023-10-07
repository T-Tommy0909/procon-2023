import { FC } from "react";
import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const FilledButton: FC<Props> = ({
  type,
  onClick,
  disabled,
  children,
}) => {
  return (
    <StyledButton type={type || "button"} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: #f2f1f1;

  color: #696969;
  font-weight: bold;
  text-decoration: none;

  &:not([disabled]):hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.1);
  }

  &[disabled] {
    box-shadow: none;
    opacity: 0.5;
    cursor: default;
  }
`;
