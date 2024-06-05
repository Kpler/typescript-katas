export type Match = {
    timeslot: number, 
    home: string, 
    roundsWonHome: number, 
    roundsWonAway: number,
    away: string
}

export const calculateMatches = (fighters: string[], matches: Match[] ) => {
    if (matches.length == 0) {
        return []
    }

    if (matches[0].roundsWonHome > matches[0].roundsWonAway )
        return [matches[0].home, matches[0].away]
    else
        return [matches[0].away, matches[0].home]
}