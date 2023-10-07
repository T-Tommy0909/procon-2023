import { useCallback } from "react";
import useSWR from "swr";

import { requestGet } from "../../axios";
import { MatchState } from "../../../types/match";

export const getMatchState = async (id: string): Promise<MatchState> => {
  const { data } = await requestGet<MatchState>(
    `http://localhost:8000/matches/${id}?token=${process.env.REACT_APP_AUTH_TOKEN}`
  );
  return data;
};

export const useMatchState = (id: string) => {
  const { data, error, mutate } = useSWR(
    ["/matches"],
    async () => await getMatchState(id)
  );
  const refetchMatch = useCallback(() => {
    mutate();
  }, [mutate]);
  return {
    matchState: data,
    error,
    isLoading: !data && !error,
    refetchMatch,
  };
};
