import { FC } from "react";
import { MatchState } from "../types/match";
import styled from "styled-components";

interface Props {
  matchState: MatchState;
}

export const BoardBlock: FC<Props> = ({ matchState }) => {
  const masonBoard = matchState.board.masons.map((items) =>
    items.map((item) => {
      if (item === 0) {
        return <ItemField></ItemField>;
      } else if (item > 0) {
        return <ItemField>{item}</ItemField>;
      } else {
        return <ItemField>{item}</ItemField>;
      }
    })
  );
  return (
    <BoardField width={matchState.board.width} height={matchState.board.height}>
      {masonBoard}
    </BoardField>
  );
};

const BoardField = styled.div<{ width: number; height: number }>`
  display: flex;
  width: ${(props) => props.width * 50}px;
  height: ${(props) => props.height * 50}px;
  background-image: linear-gradient(0deg, transparent 49px, #333 50px),
    linear-gradient(90deg, transparent 49px, #333 50px);
  background-size: 50px 50px;
  flex-wrap: wrap;
  border-left: 1px solid #333;
`;
const ItemField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;
