
import * as path from "path";
import { parseCsvFile, parseJsonFile } from "./helpers";

interface Cities {
  name: string;
  country: string;
  surface: number;
}

const expectedResult: Cities[] = [
  { name: 'Paris', country: 'France', surface: 105.4 },
  { name: 'London', country: 'United Kingdom', surface: 1572 },
  { name: 'Madrid', country: 'Spain', surface: 604.3 }
]

describe("parseCsvFile", () => {
  it('should parse the CSV and return the correct objects', async () => {
    const csvFilePath = path.resolve("src/streetFighter/helpers/testResources/cities.csv");
    const result = await parseCsvFile<Cities>(csvFilePath, ";");
    expect(result).toEqual(expectedResult);
  })
});

describe("parseJsonFile", () => {
  it('should parse the JSON and return the correct objects', () => {
    const jsonFilePath = path.resolve("src/streetFighter/helpers/testResources/cities.json");
    const result = parseJsonFile(jsonFilePath);
    expect(result).toEqual(expectedResult);
  })
});
