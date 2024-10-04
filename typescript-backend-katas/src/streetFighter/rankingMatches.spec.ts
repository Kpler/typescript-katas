import {computeRanking} from "./rankingMatches";

describe("When we receive an empty list of matches", () => {
  it("should return an empty array", () => {
    const result = computeRanking([]);
    expect(result).toEqual([]);
  });
});

describe("When a list with one match with a winner", () => {
  it("should return the ", () => {
    const result = computeRanking([]);
    expect(result).toEqual([]);
  });
});
