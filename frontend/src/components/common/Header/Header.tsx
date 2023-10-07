import { FC } from "react";
import styled from "styled-components";

import { NavigationList } from "./NavigationList";

export const HEADER_HEIGHT = "72px";

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <NavigationList />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  height: ${HEADER_HEIGHT};

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 2px 2px #bbb;

  background: #fafafa;
`;
