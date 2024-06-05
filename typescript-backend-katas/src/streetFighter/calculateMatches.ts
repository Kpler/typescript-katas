export type Match = {
    timeslot: number,
    home: string,
    roundsWonHome: number,
    roundsWonAway: number,
    away: string
}

export const calculateMatches = (fighters: string[], matches: Match[]) => {
    if (matches.length == 0) {
        return {}
    }

    const initialPointLeaderboard = fighters.reduce((acc: Record<string, number>, fighter: string, _) => {
        acc[fighter] = 0
        return acc
    }, {});

    const pointsLeaderboard = matches.reduce((acc: Record<string, number>, currentMatch, _) => {
        if (currentMatch.roundsWonHome >= currentMatch.roundsWonAway) {
            acc[currentMatch.home] += 3
        } else {
            acc[currentMatch.away] += 3
        }

        return acc
    }, initialPointLeaderboard)

    return pointsLeaderboard;

}