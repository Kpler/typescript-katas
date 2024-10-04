import { Match } from "./match"
import { RankedFighter } from "./rankedFighter"

export const computeRanking = (matches: Match[]): Array<RankedFighter> => {
  return [new RankedFighter()]
}
