
describe("computeRanking", () => {
  it('should compute the simplest ranking possible when there are no matches', async () => {
    const ranking = computeRanking([])
    expect(ranking).toEqual([])
  })
})
