export type Match = {
    timeslot: number,
    home: string,
    roundsWon1: number,
    roundsWon2: number,
    away: string,
}

export type RankingEntry = {
    fighter: string,
    points: number
}

export type Ranking = Record<string, number>

export function sortRanking(ranking: Ranking): RankingEntry[] {
    const sortedRanking = Object.entries(ranking).sort((a, b) => a[1] < b[1] ? 1 : -1);
    return sortedRanking.map(e => ({fighter: e[0], points: e[1]}))
}

export function calculateMatches(matches: Match[]): RankingEntry[] {
    if(matches.length === 0) {
        return []
    }

    const ranking = matches.reduce(
        (acc: Ranking, cur: Match) => {
            acc[cur.home] = 0
            acc[cur.away] = 0
            return acc;
        },
        {}
    )

    matches.reduce(
        (acc: Ranking, cur: Match) => {

            if (cur.roundsWon1 > cur.roundsWon2) {
                acc[cur.home] += 3
            } else if (cur.roundsWon1 === cur.roundsWon2) {
                acc[cur.home] += 1
                acc[cur.away] += 1
            } else {
                acc[cur.away] += 3
            }

            return acc
        },
        ranking
    )


    return sortRanking(ranking)
}
