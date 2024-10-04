import { Match } from "./match"
import { RankedFighter } from "./rankedFighter"

const WINNER_SCORE = 3
const LOSER_SCORE = 0
const TIE_SCORE = 1

export const computeRanking = (match: Match[]): RankedFighter[] => {
  if (match.length === 0) {
    return []
  }

  const rankedFighters : Record<string, RankedFighter> = {}
  match.forEach(match => {
  if (match.scoreHome > match.scoreAway) {
    rankedFighters[match.fighterHome] = new RankedFighter(match.fighterHome, (rankedFighters[match.fighterHome].score ?? 0) + WINNER_SCORE)  
  }
  if (match.scoreHome < match.scoreAway) {
    return [
      new RankedFighter(match.fighterAway, WINNER_SCORE),
      new RankedFighter(match.fighterHome, LOSER_SCORE)
    ];
  }
  return [
    new RankedFighter(match.fighterAway, TIE_SCORE),
    new RankedFighter(match.fighterHome, TIE_SCORE),
  ];
  })
}
