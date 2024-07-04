import { getFighters } from "./fighterDao";

describe("get fighters from the datasource", () => {
    it("should get an empty array of fighters when source is empty", () => {
        // GIVEN the original data source
        const filename = "src/streetFighter/helpers/testResources/emptyFighters.json";
        // WHEN we call a getFighters method
        const result = getFighters(filename);
        // THEN we should have normalized fighters in an array
        expect(result).toStrictEqual([]);
    });
    it("should get fighters", () => {
        // GIVEN the original data source
        const filename = "src/streetFighter/helpers/testResources/getFcaApiFightersSkimmed.json";
        // WHEN we call a getFighters method
        const result = getFighters(filename);
        // THEN we should have normalized fighters in an array
        expect(result).toStrictEqual([
            {
                id: 0,
                firstname: "Ryu",
                country: "JPN"
            },
            {
                id: 1,
                firstname: "Edmond",
                lastname: "Honda",
                country: "JPN"
            },
            {
                id: 11,
                firstname: "Mister",
                lastname: "Bison",
                country: null
            }
        ]);
    });
});
