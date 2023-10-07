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

export const Root: FC = () => {
  const [matchId, setMatchId] = useState<string>("");
  const [shouldShowBoard, setShouldShowBoard] = useState(false);
  const { matchState, isLoading, refetchMatch } = useMatchState(matchId);
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
              取得
            </FilledButton>
            {/* <FilledButton onClick={() => setShouldMoveRamdom(false)}>
              送信したからランダムだめ
            </FilledButton> */}
          </ButtonWrapper>
        </div>
        {!isLoading &&
          matchState &&
          checkYourTurn(myFirst, matchState.turn) && (
            <div>
              ランダム=
              {JSON.stringify(
                moveRamdom(
                  matchId,
                  matchState.board.mason,
                  matchState.turn,
                  myFirst
                )
              )}
            </div>
          )}
        {/* {!isLoading && matchState && shouldShowBoard && (
          <div>{JSON.stringify(matchState)}</div>
        )} */}
        {!isLoading && matchState && shouldShowBoard && (
          <BoardBlock matchState={matchState} />
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
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
