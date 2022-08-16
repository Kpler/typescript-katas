import { generateGame } from "./minesweeper"

describe("Minesweeper when started ", () => {
  it("should generate an empty grid of 3*3 ", () => {
    // Given
    const expectedResult = `...
...
...`

    // When
    const game = generateGame(3, 3, [])

    // Then
    expect(game).toBe(expectedResult);
  });
  it("should generate a grid of 3*3 with some mines ", () => {
    // Given
    const expectedResult = `**.
...
...`

    // When
    const game = generateGame(3, 3, [[0, 0], [0, 1]])

    // Then
    expect(game).toBe(expectedResult);
  });
});
