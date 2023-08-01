import { parseCsvFile, parseJsonFile } from "./helpers";

describe("parseCsvFile", () => {
  it('should not raise any error', async () => {
    const result = await parseCsvFile("2021-2022");
    expect(result.length).toEqual(67);
  })
});

describe("parseJsonFile", () => {
  it('should not raise any error', async () => {
    const result = await parseJsonFile();
    expect(result.length).toEqual(12);
  })
});
