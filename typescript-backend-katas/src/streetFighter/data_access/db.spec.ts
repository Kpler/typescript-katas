import { Match } from "../models/models";
import { getMatch, getMatches } from "./db";
import * as path from "path";

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

describe("getMatches", () => {
  it('should parse the CSV and get two Matches', async () => {
    const input_path = path.resolve("src/streetFighter/data_access/test.csv");
    const matches: Match[] = getMatches(input_path);
    
    const expected_matches: Match[] = [
        {
            fighter1: "chun-li",
            fighter2: "sagat",
            winner: "chun-li"
        },
        {
            fighter1: "chun-li",
            fighter2: "ryu",
            winner: "ryu"
        } 
    ]
    expect(matches).toEqual(expected_matches);
  })
});


