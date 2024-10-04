import { Match } from "./match";
import { RankedFighter } from "./rankedFighter";
import {computeRanking} from "./rankingMatches";

describe("When we receive an empty list of matches", () => {
    it("should return an empty array", () => {
        const result = computeRanking([]);
        expect(result).toEqual([]);
    });
});

describe("When a list with one match with the home fighter who wins", () => {
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

describe("When a list with one match with the away fighter who wins", () => {
    it("should return the ranking with the correct number of points for the winner and the loser", () => {
        const matches = [new Match("David", 1, "Nico", 2 )]

        const result = computeRanking(matches);

        expect(result).toEqual(
          [
              new RankedFighter("Nico", 3),
              new RankedFighter("David", 0)
          ]
        );
    });
});
