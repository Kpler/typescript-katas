import {parseCsvFile} from "./helpers/helpers";

interface Ranking {
    fighterId: string;
    rank: number;
    points: number;
}

interface Match {
    timeslot: number;
    home: string;
    roundsWon1: number;
    roundsWon2: number
    away: string;
}

function calculateRanking(matches: Match[]): Array<Ranking> {
    const arr: {
        [name: string]: number
    } = {};
    matches.forEach((match: Match) =>{
        arr[match.home] += match.roundsWon1 > match.roundsWon2 ? 3 : (match.roundsWon1 === match.roundsWon2 ? 1 : 0);
        arr[match.away] += match.roundsWon2 > match.roundsWon1 ? 3 : (match.roundsWon1 === match.roundsWon2 ? 1 : 0);
    });

    const result: Array<Ranking> = [];
    for (let name in arr) {
        result.push({
            fighterId: name,
            rank: 0,
            points: arr[name]
        });
    }

    return result;
}

describe("Street Fighter", () => {
    it("should return a ranking", async () => {
        // GIVEN
        const expectedRanking: Array<Ranking> = [{
            fighterId: 1,
            rank: 1,
            points: 2
        }];

        // WHEN
        //const matches: Match[] = await parseCsvFile('./sources/sfplDb.csv', ',');
        const matches: Match[] = [{
            timeslot:1,
            home: 'chun-li',
            roundsWon1: 2,
            roundsWon2: 1,
            away: 'sagat',
        },
        {
            timeslot:2,
            home: 'dhalsim',
            roundsWon1: 2,
            roundsWon2: 2,
            away: 'zangief',
        },{
            timeslot:3,
            home: 'blanka',
            roundsWon1: 0,
            roundsWon2: 2,
            away: 'sagat',
        }];
        const result = calculateRanking(matches);

        // THEN
        expect(result).toEqual(expectedRanking);

    })
})