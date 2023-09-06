import { Match } from "../models/models";

export function getMatch(input: string): Match {
    const splitString = input.split(",");

    const timeslot = splitString[0]
    const fighter1 = splitString[1];
    const roundsWon1 = splitString[2];
    const roundsWon2 = splitString[3];
    const fighter2 = splitString[4];

    if (roundsWon1 > roundsWon2) {
        const winner = fighter1;
    } else {
        const winner = fighter2;
    }

    const result = {
        fighter1: splitString[0],
        fighter2: splitString[1],
        winner: winner;
    }
    return result;
  }