/*
timeslot,home,roundsWon1,roundsWon2,away
1,chun-li,2,1,sagat
*/

export class Match {
    constructor(
        public readonly homeFighter: string,
        public readonly awayFighter: string,
        public readonly homeRounds: number,
        public readonly awayRounds: number,
    ) {
    }
}

export function computeRanking(matches: Match[]): string[] {
    return [];
}
