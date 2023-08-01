describe("testGetWinner", () => {
  it('should not raise any error', async () => {
    // GIVEN
    const sampleMatch: Match = {
        homeFighterId: 1,
        roundsWonHome: 2,
        roundsWonAway: 1,
        awayFighterId: 2,
    }
    // WHEN
    getWinner(sampleMatch)

    // THEN
  })
});