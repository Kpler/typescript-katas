import {getRanking, Match} from "./ranking";

describe("get ranking", () => {

    it("should return empty ranking when there are no match", () => {
        // GIVEN
        const matches: any[] = [];

        //WHEN
        const result = getRanking(matches);

        //THEN
        expect(result).toStrictEqual([]);
    });

    it("should return a ranking with the winner being first and the loser being second when there is 1 match", () => {
        // GIVEN
        const matches: Match[] = [
            {
                homeFighter: "player1",
                awayFighter: "player2",
                roundsHome: 2,
                roundsAway:1,
            }
        ];

        //WHEN
        const result = getRanking(matches);

        //THEN
        expect(result).toStrictEqual([
            {
                fighter: "player1",
                rank: 1,
                points: 3,
            },
            {
                fighter: "player2",
                rank: 2,
                points: 0,
            },
        ]);
    });

    it("should return a ranking with the winner being first and the loser being second when there is 1 match", () => {
        // GIVEN
        const matches: Match[] = [
            {
                homeFighter: "player1",
                awayFighter: "player2",
                roundsHome: 1,
                roundsAway:2,
            }
        ];

        //WHEN
        const result = getRanking(matches);

        //THEN
        expect(result).toStrictEqual([
            {
                fighter: "player2",
                rank: 1,
                points: 3,
            },
            {
                fighter: "player1",
                rank: 2,
                points: 0,
            },
        ]);
    });

    it("should return a ranking with the two fighter ranked 1 when there is a tie", () => {
        // GIVEN
        const matches: Match[] = [
            {
                homeFighter: "player1",
                awayFighter: "player2",
                roundsHome: 1,
                roundsAway:1,
            }
        ];

        //WHEN
        const result = getRanking(matches);

        //THEN
        expect(result).toStrictEqual([
            {
                fighter: "player1",
                rank: 1,
                points: 1,
            },
            {
                fighter: "player2",
                rank: 2,
                points: 1,
            },
        ]);
    });

    it("should return a ranking when there are more than two 2 fighters and 1 match", () => {
        // GIVEN
        const matches: Match[] = [
            {
                homeFighter: "chun-li",
                awayFighter: "sagat",
                roundsHome: 2,
                roundsAway:1,
            },
            {
                homeFighter: "blanka",
                awayFighter: "chun-li",
                roundsHome: 1,
                roundsAway:1,
            }
        ];

        //WHEN
        const result = getRanking(matches);

        //THEN
        expect(result).toStrictEqual([
            {
                fighter: "chun-li",
                rank: 1,
                points: 4,
            },
            {
                fighter: "blanka",
                rank: 2,
                points: 1,
            },
            {
                fighter: "sagat",
                rank: 3,
                points: 0,
            }
        ]);
    });
});
