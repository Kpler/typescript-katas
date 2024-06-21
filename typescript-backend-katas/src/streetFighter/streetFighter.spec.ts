import {parseCsvFile} from "./helpers/helpers";
import {calculateRanking} from "./streetFighter";


describe("iteration1", () => {
    it('should return a list of fighters ranking based on matches', async () => {
        //GIVEN
        const fightersList = await parseCsvFile<String>('./sources/sfplDbSlice.csv', ',');
        const expectedResult = [{'name': 'chun-li', 'rank': 1, 'points': 3}, {'name': 'zangief', 'rank': 2, 'points': 3}, {'name': 'sagat', 'rank': 3, 'points': 0}, {'name': 'dhalsim', 'rank': 4, 'points': 0}];

        //WHEN
        const result = calculateRanking(fightersList);

        //THEN
        expect(result).toEqual(expectedResult);
    })
});