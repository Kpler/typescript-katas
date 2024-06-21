
export class Match {
    constructor(
        public readonly homeFighter: string,
        public readonly awayFighter: string,
        public readonly homeRounds: number,
        public readonly awayRounds: number,
    ) {
    }
}

enum MatchResult {
    HOME_WIN,
    AWAY_WIN,
    DRAW,
}

interface SimplifiedMatch {
    home: string;
    away: string;
    result: MatchResult;
}
interface RankRow {
    name: string;
    points: number;
    rank: number;
}
function computeMatchResult(match: Match): SimplifiedMatch {
    if (match.homeRounds > match.awayRounds) {
        return { home: match.homeFighter, away: match.awayFighter, result: MatchResult.HOME_WIN };
    } else if (match.homeRounds < match.awayRounds) {
        return { home: match.homeFighter, away: match.awayFighter, result: MatchResult.AWAY_WIN };
    } else {
        return { home: match.homeFighter, away: match.awayFighter, result: MatchResult.DRAW };
    }
}


function incrementFightersScore(pointsPerFighter: Map<string, number>, match: SimplifiedMatch): void {
    if (match.result === MatchResult.HOME_WIN) {
        pointsPerFighter.set(match.home, (pointsPerFighter.get(match.home) || 0) + 3);
        pointsPerFighter.set(match.away, (pointsPerFighter.get(match.away) || 0) + 0);
    } else if (match.result === MatchResult.AWAY_WIN) {
        pointsPerFighter.set(match.home, (pointsPerFighter.get(match.home) || 0) + 0);
        pointsPerFighter.set(match.away, (pointsPerFighter.get(match.away) || 0) + 3);
    } else {
        pointsPerFighter.set(match.home, (pointsPerFighter.get(match.home) || 0) + 1);
        pointsPerFighter.set(match.away, (pointsPerFighter.get(match.away) || 0) + 1);
    }
}

export function computeRanking(matches: Match[]): RankRow[] {
    const simplifiedMatches: SimplifiedMatch[] = matches.map(computeMatchResult);

    const pointsPerFighter: Map<string, number> = new Map();
    simplifiedMatches.forEach(match => incrementFightersScore(pointsPerFighter, match));

    const ranking: RankRow[] = Array.from(pointsPerFighter.entries())
        .sort((a, b) => b[1] - a[1])
        .map((entry, index) => ({ name: entry[0], points: entry[1], rank: index + 1}));

    return ranking;
}
