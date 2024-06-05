export type Match = {
    timeslot: number, 
    home: string, 
    roundsWon1: number, 
    roundsWon2: number,
    away: string
}

export const calculateMatches = (fighters: string[], matches: Match[] ) => {
    if (matches.length == 0) {
        return []
    }

    return ['blanka', 'zangief'];
}