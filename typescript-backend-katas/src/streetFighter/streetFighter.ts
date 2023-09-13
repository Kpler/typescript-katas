import { parseCsvFile } from "./helpers/helpers";

export class PlayerResult {
  constructor(
    public name: string,
    public points: number,
    public ranking: number
  ) {}
}

interface Match {
  timeslot: number;
  home: string;
  roundsWon1: number;
  roundsWon2: number;
  away: string;
}

export async function computeMatchResults(fileName: string) {
  const matches = await parseCsvFile<Match>(fileName, ",");

  return buildPlayersFromMatches(matches)
    .sort(comparePlayerResults)
    .map((player, index) => {
      player.ranking = index + 1;
      return player;
    });
}

function attributePlayerPoints(
  match: Match,
  player1Results: PlayerResult,
  player2Results: PlayerResult
) {
  if (match.roundsWon1 > match.roundsWon2) {
    player1Results.points += 3;
  } else if (match.roundsWon1 === match.roundsWon2) {
    player2Results.points += 1;
    player1Results.points += 1;
  } else {
    player2Results.points += 3;
  }
}

function buildPlayersFromMatches(matches: Match[]): PlayerResult[] {
  const players: Record<string, PlayerResult> = {};

  return Object.values(
    matches.reduce((playerResults, match) => {
      const player1Results =
        players[match.home] ?? new PlayerResult(match.home, 0, 0);
      const player2Results =
        players[match.away] ?? new PlayerResult(match.away, 0, 0);

      attributePlayerPoints(match, player1Results, player2Results);

      playerResults[match.home] = player1Results;
      playerResults[match.away] = player2Results;

      return playerResults;
    }, players)
  );
}

function comparePlayerResults(
  playerResults1: PlayerResult,
  playerResults2: PlayerResult
): number {
  if (playerResults2.points === playerResults1.points) {
    return playerResults2.name.localeCompare(playerResults1.name);
  } else {
    return playerResults2.points - playerResults1.points;
  }
}
