import { Match, SfplRepository } from "./SfplDbRepository";

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
});