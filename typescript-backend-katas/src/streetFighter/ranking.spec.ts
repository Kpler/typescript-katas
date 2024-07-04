import {getRanking} from "./ranking";

describe("get ranking", () => {


    it("should return empty ranking when there are no matches", () => {
        // GIVEN
        const matches: any[] = [];

        //WHEN
        const result = getRanking(matches);

        //THEN
        expect(result).toStrictEqual([]);
    });
});