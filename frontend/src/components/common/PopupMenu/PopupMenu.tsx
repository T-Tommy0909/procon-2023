import React, { ComponentProps } from "react";
import { Menu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import styled, { keyframes } from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactNode;
}
export const PopupMenu: React.FC<Props & ComponentProps<typeof Menu>> = ({
  className,
  children,
  ...rest
}) => {
  return <StyledMenu {...rest}>{children}</StyledMenu>;
};

const PopupAnimation = () => keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

const StyledMenu = styled(Menu)`
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background: #fff;

  animation: ${PopupAnimation} 0.15s cubic-bezier(0, 0, 0.2, 1);
`;
