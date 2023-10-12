import { FC, useState } from "react";
import styled from "styled-components";

import { ProtectedLayout } from "../components/common/protectedLayout";
import { TextField } from "../components/common/form/TextField";
import { FilledButton } from "../components/common/FilledButton";
import { useMatchState } from "../utils/apis/matches/getMatchState";
import { refetchInterval } from "../utils/refetchInterval";
import { moveRamdom } from "../utils/moveRamdom";
import { checkYourTurn } from "../utils/checkYourTurn";
import { BoardBlock } from "../components/BoardBlock";
import { Action } from "../types/action";
import { ActionPlansBlock } from "../components/ActionPlansBlock";
import { postActionPlan } from "../utils/apis/matches/postActionPlan";
import { shouldSendTurn } from "../utils/shouldSendTurn";

const initialActions: Action[] = [
  { type: 0, dir: 0 },
  { type: 0, dir: 0 },
];

export const Root: FC = () => {
  const [matchId, setMatchId] = useState<string>("");
  const [shouldShowBoard, setShouldShowBoard] = useState(false);
  const { matchState, isLoading, refetchMatch } = useMatchState(matchId);
  const [actions, setActions] = useState<Action[]>(initialActions);
  const myFirst = true;

  return (
    <ProtectedLayout pageTitle="ホーム画面">
      <PageContainer>
        <div>
          <TextField
            id="match_id"
            type="number"
            value={matchId}
            onChange={setMatchId}
            placeholder="試合IDを入力してください"
          />
          <ButtonWrapper>
            <FilledButton
              onClick={() => {
                refetchMatch();
                setShouldShowBoard(true);
                refetchInterval(refetchMatch);
              }}
            >
              試合開始
            </FilledButton>
            {matchState && (
              <FilledButton
                onClick={() =>
                  postActionPlan(matchId, {
                    turn: shouldSendTurn(myFirst, matchState.turn),
                    actions: actions,
                  })
                }
              >
                計画送信
              </FilledButton>
            )}
          </ButtonWrapper>
        </div>
        {!isLoading && matchState && (
          <ActionPlansBlock actions={actions}></ActionPlansBlock>
        )}
        {!isLoading &&
          matchState &&
          checkYourTurn(myFirst, matchState.turn) && (
            <div>
              {"[ランダム]"}
              {
                <ActionPlansBlock
                  actions={moveRamdom(
                    matchId,
                    matchState.board.mason,
                    matchState.turn,
                    myFirst
                  )}
                />
              }
            </div>
          )}
        {!isLoading && matchState && shouldShowBoard && (
          <BoardBlock
            matchState={matchState}
            actions={actions}
            onChange={setActions}
          />
        )}
      </PageContainer>
    </ProtectedLayout>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 24rem;
`;
const TopWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 34px;
  min-width: 24rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
