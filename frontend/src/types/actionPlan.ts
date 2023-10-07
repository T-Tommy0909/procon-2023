import { Action } from "./action";

export interface ActionPlan {
  turn: number;
  actions: Action[];
}
