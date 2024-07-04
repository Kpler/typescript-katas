import path from "path";
import {calculateFighterRanking, Match, Rank} from "./calculateFighterRanking";



describe("calculateFighterRanking", () => {
    it.each([
        {
            title: 'Given 1 match where away wins, should return away in first position and home in second',
            matches: [new Match(1, "manolis", 1, 2, "simon")],
            expectedRanking: [new Rank("simon", 3), new Rank("manolis", 0)],
        },
        {
            title: 'Given 1 match where home wins, should return home in first position and a in second',
            matches: [new Match(1, "manolis", 2, 1, "simon")],
            expectedRanking: [new Rank("manolis", 3), new Rank("simon", 0)]
        },
        {
            title: 'Given 1 match where it is a draw, should return both with 1 point',
            matches: [new Match(1, "manolis", 1, 1, "simon")],
            expectedRanking: [new Rank("manolis", 1), new Rank("simon", 1)]
        },
        {
            title: 'Given 2 matches where home wins the first and away the second, both should have 3 points',
            matches: [
                new Match(1, "manolis", 2, 1, "simon"),
                new Match(1, "manolis", 1, 2, "simon")
            ],
            expectedRanking: [
                new Rank("manolis", 3),
                new Rank("simon", 3)
            ]
        },
        {
            title: 'Given 0 matches should return an empty list',
            matches: [],
            expectedRanking: []
        },
        {
            title: 'Given 4 matches with 3 different players',
            matches: [
                new Match(1, "manolis", 2, 1, "simon"),
                new Match(1, "despoina", 1, 2, "simon"),
                new Match(1, "manolis", 1, 2, "despoina"),
                new Match(1, "manolis", 1, 1, "simon"),
            ],
            expectedRanking: [
                new Rank("manolis", 4),
                new Rank("simon", 4),
                new Rank("despoina", 3)
            ]
        }
    ])("$title", ({matches, expectedRanking}) => {
        // Given

        // When
        const result = calculateFighterRanking(matches)

        // Then
        expect(result).toEqual(expectedRanking);
    })

});
