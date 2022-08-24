import { Minesweeper } from "./Minesweeper";

describe("Minesweeper", () => {
  describe('toString()', ()=>{
    it("should generate minefield with the right dimensions", () => {
      const expectedResult = "..\n..\n..";
  
      const game = new Minesweeper(3, 2, []);
      const actual = game.toString();
  
      expect(actual).toBe(expectedResult);
    });
  
    it("should generate a minefield with bombs", () => {
      const expectedResult = ".*.\n.*.\n...";
  
      const game = new Minesweeper(3, 3, [
        {col:1, row:0},
        {col:1, row:1},
      ]);
      const actual = game.toString();
  
      expect(actual).toBe(expectedResult);
    });
  })

  describe('revealGrid', ()=> {
    it("should display adjacent mines", () => {
      const expectedResult = '*100\n2210\n1*10\n1110'
      const game = new Minesweeper(4, 4, [
        {col:0, row:0},
        {col:1, row:2},
  
      ]);
  
      const actual = game.revealGrid()
  
      expect(actual).toBe(expectedResult)
    });
  })

  describe('getNeighbors()', ()=> {
    it("should find neighboor in corner", () => {
      const expectedOutput = [{col:0, row:1}, {col:1, row:0}, {col:1, row:1}]
      const game = new Minesweeper(4, 4, [
        {col:0, row:0},
      ]);
      // getNeighbors(position: [number, number]): [number, number][] {
      const output = game.getNeighbors({col:0, row:0})
  
      expect(output).toBe(expectedOutput)
    });
  
    it("should find neighboor in upper line", () => {
      const expectedOutput = [{col:1, row:0}, {col:3, row:0}, {col:1, row:1}, {col:2, row:1}, {col:3, row:1}]
      const game = new Minesweeper(5, 5, [
        {col:3, row:0},
      ]);
      // getNeighbors(position: [number, number]): [number, number][] {
      const output = game.getNeighbors({col:2, row:0})
  
      expect(output).toBe(expectedOutput)
    });
  })
});
