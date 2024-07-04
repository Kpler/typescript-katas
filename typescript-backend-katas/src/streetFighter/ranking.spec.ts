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
});