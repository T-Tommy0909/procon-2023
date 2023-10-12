import { FC } from "react";
import { MatchState } from "../types/match";
import styled from "styled-components";
import { PopupMenu } from "./common/PopupMenu/PopupMenu";
import { Action } from "../types/action";
import { ActionMenu } from "./ActionMenuItems";

interface Props {
  matchState: MatchState;
  actions: Action[];
  onChange: (value: Action[]) => void;
}

export const BoardBlock: FC<Props> = ({ matchState, actions, onChange }) => {
  const boardView = matchState.board.masons.map((items, y) =>
    items.map((item, x) => {
      //職人がいない
      if (item === 0) {
        //池
        if (matchState.board.structures[y][x] === 1) {
          return (
            <ItemField background="#ffffff">
              <img src="/ike.png" width="50" height="50" />
            </ItemField>
          );
        }
        //城
        else if (matchState.board.structures[y][x] === 2) {
          return (
            <ItemField background="#ffffff">
              <img src="/oshiro.png" width="50" height="50" />
            </ItemField>
          );
        }
        // 自分の城壁
        else if (matchState.board.walls[y][x] === 1) {
          return (
            <ItemField background="#98fb98">
              <img src="/block_mine.png" width="40" height="40" />
            </ItemField>
          );
        }
        // 相手の城壁
        else if (matchState.board.walls[y][x] === 2) {
          return (
            <ItemField background="#ff6347">
              <img src="/block_enemy.png" width="40" height="40" />
            </ItemField>
          );
        }
        // 自陣
        else if (matchState.board.territories[y][x] === 1) {
          return <ItemField background="#98fb98"></ItemField>;
        }
        // 敵陣
        else if (matchState.board.territories[y][x] === 2) {
          return <ItemField background="#ff6347"></ItemField>;
        } else {
          return <ItemField background="#ffffff"></ItemField>;
        }
      }
      // 自分の職人
      else if (item > 0) {
        // 自陣
        if (matchState.board.territories[y][x] === 1) {
          return (
            <ItemField background="#98fb98">
              <ActionMenu
                masonNum={matchState.board.mason}
                masonId={item}
                imgPath="/mine_icon.png"
                actions={actions}
                onChange={onChange}
              ></ActionMenu>
              <MasonIdField>{item}</MasonIdField>
            </ItemField>
          );
        }
        // 敵陣
        else if (matchState.board.territories[y][x] === 2) {
          return (
            <ItemField background="#ff6347">
              <ActionMenu
                masonNum={matchState.board.mason}
                masonId={item}
                imgPath="/mine_icon.png"
                actions={actions}
                onChange={onChange}
              ></ActionMenu>
              <MasonIdField>{item}</MasonIdField>
            </ItemField>
          );
        } else {
          return (
            <ItemField background="#ffffff">
              <ActionMenu
                masonNum={matchState.board.mason}
                masonId={item}
                imgPath="/mine_icon.png"
                actions={actions}
                onChange={onChange}
              ></ActionMenu>
              <MasonIdField>{item}</MasonIdField>
            </ItemField>
          );
        }
      }
      // 敵の職人
      else {
        // 自陣
        if (matchState.board.territories[y][x] === 1) {
          return (
            <ItemField background="#98fb98">
              <img src="/enemy_icon.png" width="40" height="40" />
            </ItemField>
          );
        }
        // 敵陣
        else if (matchState.board.territories[y][x] === 2) {
          return (
            <ItemField background="#ff6347">
              <img src="/enemy_icon.png" width="40" height="40" />
            </ItemField>
          );
        } else {
          return (
            <ItemField background="#ffffff">
              <img src="/enemy_icon.png" width="40" height="40" />
            </ItemField>
          );
        }
      }
    })
  );
  return (
    <BoardField width={matchState.board.width} height={matchState.board.height}>
      {boardView}
    </BoardField>
  );
};

const BoardField = styled.div<{ width: number; height: number }>`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => props.width * 50}px;
  height: ${(props) => props.height * 50}px;
  background-image: linear-gradient(0deg, transparent 49px, #333 50px),
    linear-gradient(90deg, transparent 49px, #333 50px);
  background-size: 50px 50px;
  border-left: 1px solid #333;
`;
const ItemField = styled.div<{ background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 1px;
  background: ${(prop) => prop.background};
  background-clip: content-box;
`;
const MasonIdField = styled.div`
  position: absolute;
`;
