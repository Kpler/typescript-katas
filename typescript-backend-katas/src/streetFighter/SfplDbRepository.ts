import fs from "fs";
import {Match as InternalMatch} from "./model";

const FigherIdToFigherName = {
    1: "e honda",
    2: "blanka",
}

export interface Match {
    homeFighterId: number;
    roundsWonHome: number;
    roundsWonAway: number;
    awayFighterId: number;
}

export class SfplRepository {
  getWinner(match: Match): number {
    if (match.roundsWonHome===2) {
      return match.homeFighterId;
    } else if (match.roundsWonAway===2) {
      return match.awayFighterId;
    } else {
      throw new Error("No fighter has won two rounds")
    }
  }

  getMatches(filePath: string): InternalMatch[] {
      const headers= ['timeslot','home','roundsWon1','roundsWon2','away'];
      const records = [];
      const parser = fs
          .createReadStream(filePath)
          .pipe(parse({
              delimiter: ',',
              columns: headers,
          }));
      for await (const record of parser) {
          console.log(record)
          records.push();
      }
      return records;
  }

}
