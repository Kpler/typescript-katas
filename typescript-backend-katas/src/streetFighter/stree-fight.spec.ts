interface Ranking {
    fighterId: number;
    rank: number;
    points: number;
}

function calculateRanking(): Array<Ranking> {
    return []
}

describe("Street Fighter", () => {
    it("should return a ranking", () => {
        // GIVEN
        const expectedRanking: Array<Ranking> = [{
            fighterId: 1,
            rank: 1,
            points: 2
        }];

        // WHEN
        const result = calculateRanking();

        // THEN
        expect(result).toEqual(expectedRanking);

    })
})