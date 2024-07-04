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
    result: string
}
export function getRanking(matches: Match[]) {
    if (matches.length === 0) return [];

    const matchResult = computeResult(matches[0])
    return
}
