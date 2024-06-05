export type Match = {
    timeslot: number, 
    home: string, 
    roundsWon1: number, 
    roundsWon2: number,
    away: string
}

export const calculateMatches = (fighters: string [], matches: Match [] ) => {
    return ['blanka', 'zangief'];
}