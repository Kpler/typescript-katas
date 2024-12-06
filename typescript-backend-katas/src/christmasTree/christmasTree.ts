export const christmasTree = (height: number): string => {
    return ""
}

export const getWhiteSpaceCount = (height: number, row: number ): number => {
    return height - row;
}

export const getNeedlesCount = (row: number ): number => {
    return 2 * row - 1;
}

export const printChristmasTreeRow = (height: number, row: number) => {
    return ' '.repeat(getWhiteSpaceCount(height, row)) + NEEDLE_CHAR.repeat(getNeedlesCount(row));
}

export const printTrunkRow = (height: number) => {
    const TRUNK_CHAR = "|";
    return " ".repeat(getWhiteSpaceCount(height, 1)) + TRUNK_CHAR;
}