import { parseCsvFile } from './helpers/helpers';

export class PlayerResult {
    constructor(public name: string, public points: number, public roundsWon: number) { }
}

export async function computeMatchResults(fileName: string) {
    const matches = await parseCsvFile<{
      timeslot: number,
      home: string,
      roundsWon1: number,
      roundsWon2: number,
      away: string
    }>(fileName, ',');
    const players: Record<string, PlayerResult> = {};
    return matches.reduce((playerResults, match) => {
        const player1 = match.home;
        const player2 = match.away; 
        return playerResults
    }, players);

    // return [new PlayerResult("chun-li", 3, 1), new PlayerResult("sagat", 0, 2)];
}
