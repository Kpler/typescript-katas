import { parseCsvFile } from "./helpers";

describe("parseCsvFile", () => {
  it('should not raise any error', async () => {
    const result = await parseCsvFile();
    expect(result.length).toEqual(67);
  })
});