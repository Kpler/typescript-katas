export class Rank {
    constructor(
        public readonly name: string,
        public readonly totalPoints: number,
    ){
    }
}

enum Result {
    HOME,
    AWAY,
    DRAW
}

export class Match {

    constructor(
        public readonly timeslot: number,
        public readonly home: string,
        public readonly roundsWon1: number,
        public readonly roundsWon2: number,
        public readonly away: string,
    ){
    }

    getResult(): Result {
        if (this.roundsWon1 > this.roundsWon2) {
            return Result.HOME;
        } else if (this.roundsWon2 > this.roundsWon1) {
            return Result.AWAY;
        } else {
            return Result.DRAW;
        }
    }
}

function getMatchPoints(match: Match): Array<{fighterName: string, points: number}> {
    const result = match.getResult();
    if (result === Result.HOME) {
        return [{fighterName: match.home, points: 3}, {fighterName: match.away, points: 0}];
    } else if (result === Result.AWAY) {
        return [{fighterName: match.away, points: 3}, {fighterName: match.home, points: 0}];
    }

    return [{fighterName: match.home, points: 1}, {fighterName: match.away, points: 1}];
}

export function calculateFighterRanking(matches: Match[]): Rank[] {
    const fighterPoints = matches.flatMap((match) => getMatchPoints(match));
    const rankings =  fighterPoints.reduce((ranking, fighterPoints) => {
        const existingPoints = ranking.get(fighterPoints.fighterName)?.totalPoints ?? 0;
        ranking.set(
            fighterPoints.fighterName,
            new Rank(fighterPoints.fighterName, existingPoints + fighterPoints.points)
        )
        return ranking;
    }, new Map<string, Rank>()).values();
    return Array.from(rankings).sort((a, b) => {
        return b.totalPoints - a.totalPoints;
    });
}


