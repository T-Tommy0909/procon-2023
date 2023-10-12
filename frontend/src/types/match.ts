export interface MatchState {
  id: number;
  turn: number;
  board: {
    walls: number[][];
    territories: number[][];
    width: number;
    height: number;
    mason: number;
    structures: number[][];
    masons: number[][];
  };
  logs: any;
}

export interface MatchInfo {
  matches: {
    id: number;
    turn: number;
    turnSeconds: number;
    bonus: any;
    board: {
      width: number;
      height: number;
      mason: number;
      structures: any;
      masons: any;
    };
    opponent: string;
    first: boolean;
  }[];
}
