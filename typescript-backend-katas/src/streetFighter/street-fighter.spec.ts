import {FighterMatches} from "./fighter.matches";
import {FighterStats} from "./fighter.stats";
import {calculateRankings} from "./street-fighter";
import {parseCsvFile} from "./helpers/helpers";

describe("List of fighters", () => {
    it("should parse the CSV and return the correct ranking", async () => {
        //Given
        const listOfMatches: Array<FighterMatches> = parseCsvFile('./sources/sfplDb.csv', ',');
        const listOfFighters = ["ryuu"]
        const expectedResult: Array<FighterStats> = [
            {
                name: "e honda",
                ranking: 1,
                points: 3
            },
            {
                name: "blanka",
                ranking: 2,
                points: 1
            },
            {
                name: "major guile",
                ranking: 3,
                points: 1
            },
            {
                name: "ryuu",
                ranking: 4,
                points: 0
            },
        ]

        //When
        const result = calculateRankings(listOfFighters, listOfMatches)

        //Then
        expect(result).toEqual(expectedResult)
    })
})


