import { calculate } from "./calculator.level2";

describe("Calculator should manage additions", () => {
  it("should compute 1 + 1 = 2", () => {
    // Given
    const expression = '1 + 1';

    // When
    const result = calculate(expression);
    
    // Then
    expect(result).toBe(2);
  });
  it("should compute 1 + 2 = 3", () => {
    // Given
    const expression = '1 + 2';

    // When
    const result = calculate(expression);
    
    // Then
    expect(result).toBe(3);
  });
});
