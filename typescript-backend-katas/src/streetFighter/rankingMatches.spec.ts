import { Fighter } from "./fighter";
import { Match } from "./match";
import { RankedFighter } from "./rankedFighter";
import {computeRanking, computeRankingFromDatasource} from "./rankingMatches";

const david = new Fighter(0, "David", undefined, "USA")
const nico = new Fighter(1, "Nico", "Honda", "JPN")
const simon = new Fighter(2, "Simon", undefined, null)

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
                new RankedFighter(david, 3),
                new RankedFighter(nico, 0)
            ]
        },
        {
            testTitle:"With a list with one match with the away fighter who wins",
            matches: [new Match("David", 1, "Nico", 2 )],
            expectedRanking: [
                new RankedFighter(nico, 3),
                new RankedFighter(david, 0)
            ]
        },
        {
            testTitle:"With a list with one match with a tie",
            matches: [new Match("David", 2, "Nico", 2 )],
            expectedRanking: [
                new RankedFighter(david, 1),
                new RankedFighter(nico, 1)
            ]
        },
        {
            testTitle:"With a list with one match with a tie",
            matches: [new Match("David", 2, "Nico", 2 )],
            expectedRanking: [
                new RankedFighter(david, 1),
                new RankedFighter(nico, 1)
            ]
        },
        {
            testTitle:"With a list with two match with 3 participants",
            matches: [new Match("David", 2, "Nico", 1 ), new Match("Simon", 2, "Nico", 1 ) ],
            expectedRanking: [
                new RankedFighter(david, 3),
                new RankedFighter(simon, 3),
                new RankedFighter(nico, 0)
            ]
        },
    ])("$testTitle", ({matches, expectedRanking}) => {
        const result = computeRankingFromDatasource("src/streetFighter/sources/getFcaApiTestData.json", matches);

        expect(result).toEqual(expectedRanking);
    })
})

