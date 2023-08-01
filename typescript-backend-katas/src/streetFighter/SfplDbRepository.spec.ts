import { Match, SfplRepository } from "./SfplDbRepository";
import * as path from "path";
import { MatchResult } from "./model";

describe("SfplRepository", () => {
  describe("getWinner", () => {
    it('should not raise any error', async () => {
      // GIVEN
      const repository = new SfplRepository();
      const sampleMatch: Match = {
          homeFighterId: 1,
          roundsWonHome: 2,
          roundsWonAway: 1,
          awayFighterId: 2,
      }
      // WHEN
      const winner = repository.getWinner(sampleMatch);
  
      // THEN
      expect(winner).toEqual(1)
    })
  });
  describe('getMatches', () => {
      it('return one match from a csv file with one match', async () => {
          // given
          const csvFile = path.resolve('src/streetFighter/sources/tests/testMatches.csv')
          // when
          const repository = new SfplRepository();
          const result = repository.getMatches(csvFile);
          // then
          expect(result).toEqual([
            {
              fighter1: 2,
              fighter2: 1,
              result: MatchResult.PLAYER_1_WON
            }
          ]);
      });
    });
});