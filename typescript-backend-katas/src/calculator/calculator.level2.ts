enum Operators{
  Addition = '+',
  Subtraction = '-'
}

export const calculate = (expression: string): number => {
    let result = 0;
    let nextOperation = Operators.Addition;
    expression.split(" ").forEach(
        (curStr) => {
            if (!isNaN(Number(curStr)) && nextOperation === Operators.Addition) {
                result += Number(curStr);
            } else if (!isNaN(Number(curStr)) && nextOperation === Operators.Subtraction) {
                result -= Number(curStr);
            } else if (curStr === Operators.Subtraction) {
                nextOperation = Operators.Subtraction;
            } else if (curStr === Operators.Addition) {
                nextOperation = Operators.Addition;
            }
        }
    )
    return result;
}
