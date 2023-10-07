import { FC } from "react";
import { Link } from "@tanstack/react-location";
import styled from "styled-components";

export const NavigationList: FC = () => {
  return (
    <List>
      <ListItem>
        <StyledLink to="/">
          <TextWrapper>ホーム</TextWrapper>
        </StyledLink>
        <StyledLink to="/myDoc">
          <TextWrapper>My単語帳</TextWrapper>
        </StyledLink>
      </ListItem>
    </List>
  );
};

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const ListItem = styled.li`
  margin-left: 0.5rem;
  &:first-child {
    margin-left: 0;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: gray;
  text-decoration: none;
`;

const TextWrapper = styled.span`
  margin-left: 0.5rem;
  font-size: 1.25rem;
  color: gray;
`;
