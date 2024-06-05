import {calculateMatches, Match} from "./calculateMatches";

describe("calculateMatches", () => {
    it('given a list of fighters and list of matches, should return the fighters ranking', () => {

        const fighters = ['zangief', 'blanka']
        const matches = [{timeslot: 1, home: 'zangief', roundsWonHome: 1, roundsWonAway: 2, away: 'blanka'}]

        const ranking = calculateMatches(fighters, matches)

        expect(ranking).toEqual(['blanka', 'zangief']);
    })


    it('given a list of fighters and empty list of matches, should return empty list', () => {

        const fighters = ['zangief', 'blanka']
        const matches: Match[] = []

        const ranking = calculateMatches(fighters, matches)

        expect(ranking).toEqual([]);
    })

    it('given a list of fighters and list of matches, should return the fighters ranking', () => {

        const fighters = ['zangief', 'blanka']
        const matches = [{timeslot: 1, home: 'zangief', roundsWonHome: 2, roundsWonAway: 1, away: 'blanka'}]

        const ranking = calculateMatches(fighters, matches)

        expect(ranking).toEqual(['zangief', 'blanka']);
    })

    it('given a list of fighters and list of matches, should return the fighters ranking', () => {

        const fighters = ['zangief', 'blanka']
        const matches = [{timeslot: 1, home: 'zangief', roundsWonHome: 1, roundsWonAway: 2, away: 'blanka'}]

        const ranking = calculateMatches(fighters, matches)

        expect(ranking).toEqual(['blanka', 'zangief']);
    })

    it('given a list of fighters and list of multiple matches, should return the fighters ranking', () => {

        const fighters = ['zangief', 'blanka']
        const matches = [
            {timeslot: 1, home: 'zangief', roundsWonHome: 2, roundsWonAway: 1, away: 'blanka'},
            {timeslot: 2, home: 'zangief', roundsWonHome: 1, roundsWonAway: 2, away: 'blanka'},
            {timeslot: 2, home: 'zangief', roundsWonHome: 1, roundsWonAway: 2, away: 'blanka'},
        ]

        const ranking = calculateMatches(fighters, matches)

        expect(ranking).toEqual(['blanka', 'zangief']);
    })
});