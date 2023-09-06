import { Match } from "../models/models";
import * as path from "path";
import * as fs from "fs";


export function getMatch(input: string): Match {
    const splitString = input.split(",");

    const fighter1 = splitString[1];
    const roundsWon1 = splitString[2];
    const roundsWon2 = splitString[3];
    const fighter2 = splitString[4];
    const winner = roundsWon1 > roundsWon2 ? fighter1 : fighter2;

    return{
        fighter1: fighter1,
        fighter2: fighter2,
        winner: winner,
    }
}

export function getMatches(filePath: string): Match[] {
    const allMatches: Match[] = [];
    const allContents = fs.readFileSync(filePath, 'utf-8');
    allContents.split(/\r?\n/).slice(1).forEach((line) => {
       allMatches.push(getMatch(line));
    });
    return allMatches;
}

