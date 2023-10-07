import { useCallback } from "react";
import useSWR from "swr";

import { requestGet } from "../../axios";
import { MatchInfo } from "../../../types/match";

export const getMatchInfo = async (): Promise<MatchInfo> => {
  const { data } = await requestGet<MatchInfo>(
    `http://localhost:8000/matches/?token=${process.env.REACT_APP_AUTH_TOKEN}`
  );
  return data;
};

export const useMatchInfo = () => {
  const { data, error, mutate } = useSWR(
    ["/matches"],
    async () => await getMatchInfo()
  );
  const refetchMatch = useCallback(() => {
    mutate();
  }, [mutate]);
  return {
    matchInfo: data,
    error,
    isLoading: !data && !error,
    refetchMatch,
  };
};
