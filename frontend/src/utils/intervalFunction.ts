import { Action } from "../types/action";
import { ActionPlan } from "../types/actionPlan";
import { postActionPlan } from "./apis/matches/postActionPlan";

export const ramdomInterval = (
  func: (masons: number) => Action[],
  id: string,
  turns: number,
  nowTurn: number,
  masons: number,
  turnSeconds: number,
  shouldMoveRamdom: boolean
) => {
  setInterval(() => {
    if (shouldMoveRamdom && turns > nowTurn) {
      const actions = func(masons);
      const plan: ActionPlan = {
        turn: nowTurn,
        actions: actions,
      };

      postActionPlan(id, plan);
    }
  }, turnSeconds * 1000);
};
