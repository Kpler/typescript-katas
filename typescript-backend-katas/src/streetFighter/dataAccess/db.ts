import { Match } from "../models/models";
import * as fs from "fs";


export function getMatch(input: string): Match {
    const splitString = input.split(",");

    const fighter1 = splitString[1];
    const roundsWon1 = Number(splitString[2]);
    const roundsWon2 = Number(splitString[3]);
    const fighter2 = splitString[4];
    
    let winner = null;
    if (roundsWon1 > roundsWon2) {
        winner = fighter1;
    } else if (roundsWon1 < roundsWon2) {
        winner = fighter2;
    }

    return{
        fighter1: fighter1,
        fighter2: fighter2,
        winner: winner,
    }
}

export function getMatches(filePath: string): Match[] {
    const allContents = fs.readFileSync(filePath, 'utf-8');
    return allContents.split(/\r?\n/).slice(1).filter(line => line).map(getMatch);
}

