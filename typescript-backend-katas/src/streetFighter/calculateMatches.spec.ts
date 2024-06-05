import { calculateMatches } from "./calculateMatches";

describe("calculateMatches", () => {
    it('given a list of fighters and list of matches, should return the fighters ranking', () => {

        const fighters = ['zangief', 'blanka']
        const matches = [{timeslot: 1, home: 'zangief', roundsWon1: 1, roundsWon2: 2, away: 'blanka'}]

        const ranking = calculateMatches(fighters, matches)

        expect(ranking).toEqual(['blanka', 'zangief']);
    })

    it('given a list of fighters and list of matches, should return the fighters ranking', () => {

        const fighters = ['zangief', 'blanka']
        const matches = [{timeslot: 1, home: 'zangief', roundsWon1: 2, roundsWon2: 1, away: 'blanka'}]

        const ranking = calculateMatches(fighters, matches)

        expect(ranking).toEqual(['zangief', 'blanka']);
    })
});