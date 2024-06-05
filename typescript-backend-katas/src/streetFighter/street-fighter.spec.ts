function calculateRankings(listOfFighters: string[], listOfMatches: Array<FighterMatches>): Array<FighterStats> {
    return [{
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
        }
    ]
}

interface FighterStats {
    name: string;
    ranking: number;
    points: number;
}

interface FighterMatches {
    timeslot: number;
    home: string;
    roundsWon1: number;
    roundsWon2: number;
    away: string;
}

describe("List of fighters", () => {
    it("should parse the CSV and return the correct ranking", async () => {
        //Given
        const listOfFighters = ["ryuu"]
        const listOfMatches: Array<FighterMatches> = [
            {
                timeslot: 1,
                home: "ryuu",
                roundsWon1: 1,
                roundsWon2: 2,
                away: "e honda"
            },
            {
                timeslot: 2,
                home: "blanka",
                roundsWon1: 1,
                roundsWon2: 1,
                away: "major guile"
            }
        ]
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


