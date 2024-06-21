export interface Ranking {
  fighterId: string;
  rank: number;
  points: number;
}

export interface Match {
  timeslot: number;
  home: string;
  roundsWon1: number;
  roundsWon2: number
  away: string;
}

export function calculateRanking(matches: Match[]): Array<Ranking> {
  const arr: {
    [name: string]: number
  } = {};
  matches.forEach((match: Match) => {
    arr[match.home] = arr[match.home] || 0
    arr[match.away] = arr[match.away] || 0

    arr[match.home] += match.roundsWon1 > match.roundsWon2 ? 3 : (match.roundsWon1 === match.roundsWon2 ? 1 : 0);
    arr[match.away] += match.roundsWon2 > match.roundsWon1 ? 3 : (match.roundsWon1 === match.roundsWon2 ? 1 : 0);
  });

  const result: Array<Ranking> = [];
  for (let name in arr) {
    result.push({
      fighterId: name,
      rank: 0,
      points: arr[name]
    });
  }

  return result.sort((a, b) => b.points - a.points).map((ranking, index) => {
    return {
      ...ranking,
      rank: index + 1
    }
  });
}