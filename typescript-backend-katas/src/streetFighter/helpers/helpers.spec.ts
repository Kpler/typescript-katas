import {parseCsvFile, parseJsonFile} from "./helpers";
import {Fighter} from "../Fighter";

describe("parseCsvFile", () => {
    it('should not raise any error', async () => {
        const result = await parseCsvFile();
        expect(result.length).toEqual(67);
    })
});

describe("parseJsonFile", () => {
    it('should not raise any error', async () => {
        const result = await parseJsonFile();
        expect(result.length).toEqual(12);
        expect(result[0]).toEqual(new Fighter(0, "Ryu", undefined, "JPN"))
    })
});
