import {
    christmasTree,
    getNeedlesCount,
    getWhiteSpaceCount,
    printChristmasTreeRow,
    printTrunkRow
} from "./christmasTree";

describe("christmas tree", () => {
    describe("getWhiteSpaceCount", () =>  {
        it.each([[1, 1, 0], [2, 1, 1]])(`height %i and row %i we should get %i`, (height, row, expected) => {
            const res = getWhiteSpaceCount(height, row);
            expect(res).toBe(expected);
        });
    });

    describe("getNeedlesCount", () =>  {
        it.each([[1, 1], [2, 3]])(`row %i we should get %i`, (row, expected) => {
            const res = getNeedlesCount(row);
            expect(res).toBe(expected);
        });
    });

    describe("printChristmasTreeRow", () => {
        it.each([
            [1, 1, "X"],
            [2, 2, "XXX"],
            [2, 1, " X"]
        ])(`row %i for height %i should print %s`, (height, row, expected) => {
            const res = printChristmasTreeRow(height, row);
            expect(res).toBe(expected);
        })
    })

    describe("printTrunkRow", () => {
        it.each([
            [1, "|"],
            [2, " |"]
        ])(`for height %i should print %s`, (height, expected) => {
            const res = printTrunkRow(height);
            expect(res).toBe(expected);
        })
    })

    describe("christmasTree", () => {
        it.each([
            [1, "X\n|"],
            [2, " X\nXXX\n |"],
            [3, "  X\n XXX\nXXXXX\n  |"]
        ])(`for height %i should print %s`, (height, expected) => {
            const res = christmasTree(height);
            expect(res).toBe(expected);
        })
    })
});


// 1   X
// 2  XXX
// 3 XXXXX
// 4   |