import {calculateRanking, Match, Ranking} from "./street-fight";

describe("Street Fighter", () => {
    it("should return a ranking", async () => {
        // GIVEN
        const expectedRanking: Array<Ranking> = [{
                fighterId: 'chun-li',
                rank: 1,
                points: 3
            },
            {
                fighterId: 'blanka',
                rank: 2,
                points: 3
            },
            {
                fighterId: 'dhalsim',
                rank: 3,
                points: 1
            },
            {
                fighterId: 'zangief',
                rank: 4,
                points: 1
            },
            {
                fighterId: 'sagat',
                rank: 5,
                points: 0
            }];

        // WHEN
        //const matches: Match[] = await parseCsvFile('./sources/sfplDb.csv', ',');
        const matches: Match[] = [{
                timeslot: 1,
                home: 'chun-li',
                roundsWon1: 2,
                roundsWon2: 1,
                away: 'sagat',
            },
            {
                timeslot: 2,
                home: 'dhalsim',
                roundsWon1: 2,
                roundsWon2: 2,
                away: 'zangief',
            }, {
                timeslot: 3,
                home: 'blanka',
                roundsWon1: 2,
                roundsWon2: 0,
                away: 'sagat',
            }];
        const result = calculateRanking(matches);

        // THEN
        expect(result).toEqual(expectedRanking);

    })
})