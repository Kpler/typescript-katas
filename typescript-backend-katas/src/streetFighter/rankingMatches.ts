import { Fighter } from "./fighter"
import {Match} from "./match"
import {RankedFighter} from "./rankedFighter"
import {parseJsonFile} from "./helpers/helpers";

const WINNER_SCORE = 3
const LOSER_SCORE = 0
const TIE_SCORE = 1

export const computeRankingFromDatasource = (fightersJSONDataSource: string, matches: []) => {
  const fighters = parseJsonFile<Fighter>(fightersJSONDataSource);
  return computeRanking(matches, fighters);
}

export const computeRanking = (match: Match[], fighters: Fighter[]): RankedFighter[] => {
  if (match.length === 0) {
    return []
  }

  const rankedFighters: Record<string, RankedFighter> = {}
  match.forEach(match => {
    if (match.scoreHome > match.scoreAway) {
      rankedFighters[match.fighterHome] = new RankedFighter(getFighterFromName(match.fighterHome, fighters), (rankedFighters[match.fighterHome]?.score ?? 0) + WINNER_SCORE)
      rankedFighters[match.fighterAway] = new RankedFighter(getFighterFromName(match.fighterAway, fighters), (rankedFighters[match.fighterAway]?.score ?? 0) + LOSER_SCORE)
    }
    if (match.scoreHome < match.scoreAway) {
      rankedFighters[match.fighterAway] = new RankedFighter(getFighterFromName(match.fighterAway, fighters), (rankedFighters[match.fighterAway]?.score ?? 0) + WINNER_SCORE)
      rankedFighters[match.fighterHome] = new RankedFighter(getFighterFromName(match.fighterHome, fighters), (rankedFighters[match.fighterHome]?.score ?? 0) + LOSER_SCORE)
    }
    if (match.scoreHome === match.scoreAway) {
      rankedFighters[match.fighterHome] = new RankedFighter(getFighterFromName(match.fighterHome, fighters), (rankedFighters[match.fighterHome]?.score ?? 0) + TIE_SCORE)
      rankedFighters[match.fighterAway] = new RankedFighter(getFighterFromName(match.fighterAway, fighters), (rankedFighters[match.fighterAway]?.score ?? 0) + TIE_SCORE)
    }
  })

  return Object.values(rankedFighters).sort((a, b) => b.score - a.score)
}

const getFighterFromName = (name:string, fighters: Fighter[]) => {
  const fighter = fighters.find(f => f.firstName === name);
  if(!fighter) {
    throw new Error("Fighter not found: " + name);
  }
  return fighter;
}
