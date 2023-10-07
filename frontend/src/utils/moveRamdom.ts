import { Action } from "../types/action";
import { ActionPlan } from "../types/actionPlan";
import { postActionPlan } from "./apis/matches/postActionPlan";

export const moveRamdom = (
  id: string,
  masons: number,
  nowTurn: number,
  myFirst: Boolean
) => {
  const type = [1, 1, 1, 1, 2, 2, 2, 2, 2, 3];
  const dir = [1, 2, 3, 4, 5, 6, 7, 8];
  let actions: Action[] = [];

  for (let i = 0; masons > i; i++) {
    const typeNum = Math.floor(Math.random() * type.length);
    const dirNum = Math.floor(Math.random() * dir.length);

    actions.push({ type: type[typeNum], dir: dir[dirNum] });
  }

  const plan: ActionPlan = {
    turn: myFirst && nowTurn === 0 ? 1 : nowTurn + 2,
    actions: actions,
  };

  postActionPlan(id, plan);
  return plan;
};
