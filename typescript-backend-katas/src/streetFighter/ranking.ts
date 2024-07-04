export interface Match {
    homeFighter: string;
    awayFighter: string;
    roundsHome: number,
    roundsAway: number,
}

export interface RankingRow {
    fighter: string,
    rank: number,
    points: number,
}
interface MatchResult {
    match: Match,
    result: Result
}

enum Result {
    HomeWin,
    AwayWin,
    Tie
}

function computeResult(match: Match): MatchResult {
    let result = Result.Tie;
    if (match.roundsHome > match.roundsAway) {
        result = Result.HomeWin;
    } else if (match.roundsAway > match.roundsHome) {
        result = Result.AwayWin;
    };
    return {
        match,
        result,
    }
}

export function getRanking(matches: Match[]): RankingRow[] {
    if (matches.length === 0) return [];


    const matchesResult = [computeResult(matches[0])];

    const pointsPerFighter: Record<string, number> = {};

    matchesResult.forEach(matchResult => {
        if (matchResult.result === Result.HomeWin) {
            pointsPerFighter[matchResult.match.homeFighter] =  (pointsPerFighter[matchResult.match.homeFighter] ?? 0) + 3
            pointsPerFighter[matchResult.match.awayFighter] =  (pointsPerFighter[matchResult.match.awayFighter] ?? 0)
        } else  if (matchResult.result === Result.AwayWin) {
            pointsPerFighter[matchResult.match.awayFighter] =  (pointsPerFighter[matchResult.match.awayFighter] ?? 0) + 3
            pointsPerFighter[matchResult.match.homeFighter] =  (pointsPerFighter[matchResult.match.homeFighter] ?? 0)
        } else {
            pointsPerFighter[matchResult.match.awayFighter] =  (pointsPerFighter[matchResult.match.awayFighter] ?? 0) + 1
            pointsPerFighter[matchResult.match.homeFighter] =  (pointsPerFighter[matchResult.match.homeFighter] ?? 0) + 1
        }
    });
    return Object.entries(pointsPerFighter)
      .sort(([_, aPoints], [__, bPoints]) =>  bPoints - aPoints)
      .map((row, index) => {
            return{
                fighter: row[0],
                rank: index + 1,
                points: row[1],
            }
    });
    return [];
}