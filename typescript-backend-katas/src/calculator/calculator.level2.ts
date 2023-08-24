export const calculate = (expression: string): number => {
    let result = 0;
    let nextOperation= '+';
    expression.split(" ").forEach(
        (curStr) => {
            if (!isNaN(Number(curStr))) {
                result += Number(curStr);
            }
            if (curStr === '-') {
              nextOperation = '-';
            }
            if (curStr === '+') {
              nextOperation = '+';
            }
        }
    )
    return result;
}
