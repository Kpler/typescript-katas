export enum MatchResult {
  PLAYER_1_WON,
  PLAYER_2_WON,
  DRAW
}

export interface Match {
  fighter1: number;
  fighter2: number;
  result: MatchResult;
}
