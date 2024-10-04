import {Match} from "./match"
import {RankedFighter} from "./rankedFighter"

const WINNER_SCORE = 3
const LOSER_SCORE = 0
const TIE_SCORE = 1

export const computeRanking = (match: Match[]): RankedFighter[] => {
  if (match.length === 0) {
    return []
  }

  const rankedFighters: Record<string, RankedFighter> = {}
  match.forEach(match => {
    if (match.scoreHome > match.scoreAway) {
      rankedFighters[match.fighterHome] = new RankedFighter(match.fighterHome, (rankedFighters[match.fighterHome]?.score ?? 0) + WINNER_SCORE)
      rankedFighters[match.fighterAway] = new RankedFighter(match.fighterAway, (rankedFighters[match.fighterAway]?.score ?? 0) + LOSER_SCORE)
    }
    if (match.scoreHome < match.scoreAway) {
      rankedFighters[match.fighterAway] = new RankedFighter(match.fighterAway, (rankedFighters[match.fighterAway]?.score ?? 0) + WINNER_SCORE)
      rankedFighters[match.fighterHome] = new RankedFighter(match.fighterHome, (rankedFighters[match.fighterHome]?.score ?? 0) + LOSER_SCORE)
    }
    if (match.scoreHome === match.scoreAway) {
      rankedFighters[match.fighterHome] = new RankedFighter(match.fighterHome, (rankedFighters[match.fighterHome]?.score ?? 0) + TIE_SCORE)
      rankedFighters[match.fighterAway] = new RankedFighter(match.fighterAway, (rankedFighters[match.fighterAway]?.score ?? 0) + TIE_SCORE)
    }
  })

  return Object.values(rankedFighters).sort((a, b) => b.score - a.score)
}
