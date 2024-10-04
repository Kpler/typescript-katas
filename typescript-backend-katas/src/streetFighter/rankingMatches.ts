import { Match } from "./match"
import { RankedFighter } from "./rankedFighter"

const WINNER_SCORE = 3
const LOSER_SCORE = 0
const TIE_SCORE = 1

export const computeRanking = (matches: Match[]): RankedFighter[] => {
  if (matches.length === 0) {
    return []
  }

  if (matches[0].scoreHome > matches[0].scoreAway) {
    return [
      new RankedFighter(matches[0].fighterHome, WINNER_SCORE),
      new RankedFighter(matches[0].fighterAway, LOSER_SCORE)
    ];
  }
  if (matches[0].scoreHome < matches[0].scoreAway) {
    return [
      new RankedFighter(matches[0].fighterAway, WINNER_SCORE),
      new RankedFighter(matches[0].fighterHome, LOSER_SCORE)
    ];
  }
  return [
    new RankedFighter(matches[0].fighterAway, TIE_SCORE),
    new RankedFighter(matches[0].fighterHome, TIE_SCORE),
  ];
}
