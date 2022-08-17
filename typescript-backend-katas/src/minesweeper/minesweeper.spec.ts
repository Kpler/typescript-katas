function generateGrid(rows: number,
                      columns: number,
                      mines: number[][]
): string[][] {

    if (rows <= 0 || columns <= 0) {
        throw new Error("This is not good")
    }
    let result: string[][] = []
    for (let r = 0; r < rows; r++) {
        let temp_row: string[] = []
        for (let c = 0; c < columns; c++) {
            if (columns == c && rows == r) {
                temp_row.push("*")
            } else {
                temp_row.push(".")
            }
        }
        result.push(temp_row)
    }
    return result;
}


describe("Example test", () => {

    it("should generate an empty grid", () => {
        expect(generateGrid(1, 1, [])).toEqual([['.']]);
    });

    it("should generate an 3x3 grid", () => {
        expect(generateGrid(3, 3, [])).toEqual([['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']]);
    });

    it("row should be positive", () => {
        expect(() => {
            generateGrid(0, 3, []);
        }).toThrow("This is not good");
        expect(() => {
            generateGrid(-1, 3, []);
        }).toThrow("This is not good");
    });

    it("column should be positive", () => {
        expect(() => {
            generateGrid(3, 0, [])
        }).toThrow(Error("This is not good"));
        expect(() => {
            generateGrid(3, -1, [])
        }).toThrow(Error("This is not good"));
    });

    it("should generate 3x3 with 1 mine", () => {
        expect(generateGrid(3, 3, [[2, 2]])).toEqual([['.', '.', '.'], ['.', '.', '.'], ['.', '.', '*']]);
    });


});
