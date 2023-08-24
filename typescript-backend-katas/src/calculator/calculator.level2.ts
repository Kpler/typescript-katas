enum Operators {
    Addition = '+',
    Subtraction = '-',
    Multiplication = '*',
}

export const calculate = (expression: string): number => {
    let result = 0;
    let nextOperation = Operators.Addition;
    const operandsAndOperators: Array<string> = expression.split(" ")

    if (operandsAndOperators.indexOf(Operators.Multiplication) !== -1) {
      const indexMultiplcation = operandsAndOperators.indexOf(Operators.Multiplication);
      const tempResult = Number(operandsAndOperators[indexMultiplcation-1]) * Number(operandsAndOperators[indexMultiplcation+1]);
      operandsAndOperators[indexMultiplcation + 1] = tempResult.toString()
      operandsAndOperators.splice(indexMultiplcation - 1, 2)
    }

    operandsAndOperators.forEach((curStr) => {

        // !isNaaN
        //          do operation
        // else or isOperator
        //          set nextOperation

        if (!isNaN(Number(curStr)) && nextOperation === Operators.Addition) {
            result += Number(curStr);
        } else if (!isNaN(Number(curStr)) && nextOperation === Operators.Subtraction) {
            result -= Number(curStr);
        } else if (!isNaN(Number(curStr)) && nextOperation === Operators.Multiplication) {
            result *= Number(curStr);
        } else if (curStr === Operators.Subtraction) {
            nextOperation = Operators.Subtraction;
        } else if (curStr === Operators.Addition) {
            nextOperation = Operators.Addition;
        } else if (curStr === Operators.Multiplication) {
            nextOperation = Operators.Multiplication;
        }
    })
    return result;
}
