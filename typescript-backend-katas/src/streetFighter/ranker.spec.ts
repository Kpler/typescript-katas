import {computeRanking, Match} from "./ranker";

describe("computeRanking", () => {
  it('should compute the simplest ranking possible when there are no matches', () => {
    const ranking = computeRanking([])
    expect(ranking).toEqual([])
  });

  it('should return first the winner, then the loser when there is one match', () => {
    // Given
    const matches = [
      new Match("chun-li", "sagat", 2, 1)
    ];

    // When
    const ranking = computeRanking(matches)

    // Then
    expect(ranking).toStrictEqual([
      {name: "chun-li", points: 3, rank: 1},
      {name: "sagat", points: 0, rank: 2}
    ]);
  })
})
