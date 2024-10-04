import { Match } from "./match";
import { RankedFighter } from "./rankedFighter";
import {computeRanking} from "./rankingMatches";

describe("computeRanking", () => {
    it.each([
        {
            testTitle:"With an empty list of matches",
            matches: [],
            expectedRanking: []
        },
        {
            testTitle:"With a list with one match with the home fighter who wins",
            matches: [new Match("David", 2, "Nico", 1)],
            expectedRanking: [
                new RankedFighter("David", 3),
                new RankedFighter("Nico", 0)
            ]
        },
        {
            testTitle:"With a list with one match with the away fighter who wins",
            matches: [new Match("David", 1, "Nico", 2 )],
            expectedRanking: [
                new RankedFighter("Nico", 3),
                new RankedFighter("David", 0)
            ]
        },
        {
            testTitle:"With a list with one match with a tie",
            matches: [new Match("David", 2, "Nico", 2 )],
            expectedRanking: [
                new RankedFighter("David", 1),
                new RankedFighter("Nico", 1)
            ]
        },
        {
            testTitle:"With a list with one match with a tie",
            matches: [new Match("David", 2, "Nico", 2 )],
            expectedRanking: [
                new RankedFighter("David", 1),
                new RankedFighter("Nico", 1)
            ]
        },
        {
            testTitle:"With a list with two match with 3 participants",
            matches: [new Match("David", 2, "Nico", 1 ), new Match("Simon", 2, "Nico", 1 ) ],
            expectedRanking: [
                new RankedFighter("David", 3),
                new RankedFighter("Simon", 3),
                new RankedFighter("Nico", 0)
            ]
        },
    ])("$testTitle", ({matches, expectedRanking}) => {
        const result = computeRanking(matches);

        expect(result).toEqual(expectedRanking);
    })
})

