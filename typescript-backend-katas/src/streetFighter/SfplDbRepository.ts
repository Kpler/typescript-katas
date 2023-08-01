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
}

// Two repo layers; two sources, fighters and users
// One service layer
// One controller layer
// Start with business logic; from list of matches, get list of winners
// Mock return from repository layer
//