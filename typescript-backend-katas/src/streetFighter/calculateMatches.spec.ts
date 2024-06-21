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
        expect(ranking).toStrictEqual(['Jan', 'Manolis']);
    });
});
