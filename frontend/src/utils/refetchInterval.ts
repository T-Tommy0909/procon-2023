import { MatchState } from "../types/match";
import { useMatchState } from "./apis/matches/getMatchState";

export const refetchInterval = (refetchFunc: () => void) => {
  setInterval(() => {
    refetchFunc();
  }, 500);
};
