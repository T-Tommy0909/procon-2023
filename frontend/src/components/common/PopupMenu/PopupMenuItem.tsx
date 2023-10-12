import React from "react";
import { MenuItem } from "@szhsin/react-menu";
import styled from "styled-components";

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}
export const PopupMenuItem: React.FC<Props> = ({ onClick, children }) => {
  return <Item onClick={onClick}>{children}</Item>;
};

const Item = styled(MenuItem)`
  display: flex;
  align-items: center;

  min-height: 2.5rem;
  padding: 0 1rem;

  color: #445053;
  user-select: none;

  &:hover {
    background: #f0f1f3;
  }
`;
