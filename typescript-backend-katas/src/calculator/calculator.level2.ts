export const calculate = (expression: string): number => {
    let result = 0;
    let nextOperation= '+';
    expression.split(" ").forEach(
        (curStr) => {
            if (!isNaN(Number(curStr)) && nextOperation === '+') {
                result += Number(curStr);
            } else if (!isNaN(Number(curStr)) && nextOperation === '-') {
                result -= Number(curStr);
            } else if (curStr === '-') {
                nextOperation = '-';
            } else if (curStr === '+') {
                nextOperation = '+';
            }
        }
    )
    return result;
}
