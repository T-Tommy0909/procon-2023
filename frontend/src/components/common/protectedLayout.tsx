import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { Header, HEADER_HEIGHT } from "./Header/Header";

interface Props {
  pageTitle: string;
  children?: ReactNode;
}
export const ProtectedLayout: FC<Props> = ({ pageTitle, children }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle} - Temere</title>
      </Helmet>
      <SafeArea>
        <Header />
        <MainContainer>{children}</MainContainer>
      </SafeArea>
    </>
  );
};

const SafeArea = styled.div`
  height: 100%;
  padding-top: ${HEADER_HEIGHT};
`;

const MainContainer = styled.main`
  height: 100%;
`;
