export const calculate = (expression: string): number => {
    let result = 0;
    expression.split(" ").forEach(
        (curChar, i) => {
            if (!isNaN(Number(curChar))) {
                result += Number(curChar);
            }
        }
    )
    return result;
}
