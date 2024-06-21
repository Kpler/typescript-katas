import {calculateMatches} from "./calculateMatches";
import {Match} from "./calculateMatches";

describe("calculateMatches", () => {
    it("for no matches, return empty ranking", () => {
        const ranking = calculateMatches([]);
        expect(ranking).toStrictEqual([]);
    });

    it("for 1 match, return the winner in the first place in the ranking", () => {

        const matches: Match[] = [
            {timeslot: 1, home: 'Jan', roundsWon1: 2, roundsWon2: 1, away: 'Manolis'}
        ]
        const ranking = calculateMatches(matches);
        expect(ranking).toStrictEqual([{fighter: 'Jan', points: 3}, {fighter: 'Manolis', points: 0}]);
    });

    it("for 4 matches, return the winner in the first place in the ranking", () => {

        const matches: Match[] = [
            {timeslot: 1, home: 'Jan', roundsWon1: 1, roundsWon2: 1, away: 'Manolis'},
            {timeslot: 2, home: 'Jan', roundsWon1: 2, roundsWon2: 1, away: 'Manolis'},
            {timeslot: 3, home: 'Jan', roundsWon1: 1, roundsWon2: 2, away: 'Manolis'},
            {timeslot: 4, home: 'Jan', roundsWon1: 1, roundsWon2: 3, away: 'Manolis'},
        ]
        const ranking = calculateMatches(matches);
        expect(ranking).toStrictEqual([{fighter: 'Manolis', points: 7}, {fighter: 'Jan', points: 4}]);
    });
});
