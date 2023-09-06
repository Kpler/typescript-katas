import { Match } from "../models/models";
import { getMatch } from "./db";

describe("getMatch", () => {
    it('should parse the CSV and single Match', async () => {
      const input: string = "1,chun-li,2,1,sagat";
      const match: Match = getMatch(input);
      
      const expected: Match = {
        fighter1: "chun-li",
        fighter2: "sagat",
        winner: "chun-li"
      } 
      expect(match).toEqual(expected);
    })
  it('should parse the CSV and single Match', async () => {
    const input: string = "2,chun-li,1,2,ryu";
    const match: Match = getMatch(input);

    const expected: Match = {
      fighter1: "chun-li",
      fighter2: "ryu",
      winner: "ryu"
    }
    expect(match).toEqual(expected);
  })
  });

