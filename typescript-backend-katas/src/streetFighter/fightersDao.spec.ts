import { getFighters } from "./fighterDao";

describe("get fighters from the datasource", () => {
    it("should get fighters", () => {
        // GIVEN the original data source
        const filename = "testResources/emptyFighters.json";
        // WHEN we call a getFighters method
        const result = getFighters(filename);
        // THEN we should have normalized fighters in an array
        expect(result).toStrictEqual([]);
    });
});
