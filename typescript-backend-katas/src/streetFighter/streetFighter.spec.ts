import { computeMatchResults, PlayerResult } from "./streetFighter";

describe("Given a match between chun-li and sagat won 2 rounds to 1", () => {
  it("should return the 2 players in a list with chun-li having 3 points and sagat having 0 pts", async () => {
    const expectedResult = [
      new PlayerResult("chun-li", 3, 1),
      new PlayerResult("sagat", 0, 2),
    ];
    const result = await computeMatchResults('src/streetFighter/helpers/testResources/one-match.csv');
    expect(result).toStrictEqual(expectedResult);
  });
});

describe("Given of list of two matches between chun-li and sagat and chun-li and zangief", () => {
  it("should return the 2 players in a list with chun-li having 3 points and sagat and zangief having 0 pts", async () => {
    const expectedResult = [
      new PlayerResult("chun-li", 3, 1),
      new PlayerResult("sagat", 0, 2),
      new PlayerResult("zangief", 0, 2),
    ];

    const result = await computeMatchResults('src/streetFighter/helpers/testResources/two-matches.csv');
    expect(result).toStrictEqual(expectedResult);
  });
});
