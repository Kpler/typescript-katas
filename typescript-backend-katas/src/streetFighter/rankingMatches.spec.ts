import { Match } from "./match";
import { RankedFighter } from "./rankedFighter";
import {computeRanking} from "./rankingMatches";

describe("When we receive an empty list of matches", () => {
    it("should return an empty array", () => {
        const result = computeRanking([]);
        expect(result).toEqual([]);
    });
});

describe("When a list with one match with a winner", () => {
    it("should return the ranking with the correct number of points for the winner and the loser", () => {
        const matches = [new Match("David", 2, "Nico", 1)]

        const result = computeRanking(matches);

        expect(result).toEqual(
            [
                new RankedFighter("David", 3),
                new RankedFighter("Nico", 0)
            ]
        );
    });
});
