enum Operators {
    Addition = '+',
    Subtraction = '-',
    Multiplication = '*',
}

export const calculate = (expression: string): number => {
    let result = 0;
    let nextOperation = Operators.Addition;
    const tempExpressionList: Array<string> = expression.split(" ")

    if (tempExpressionList.indexOf(Operators.Multiplication) !== -1) {
      const indexMultiplcation = tempExpressionList.indexOf(Operators.Multiplication);
      result = Number(tempExpressionList[indexMultiplcation-1]) * Number(tempExpressionList[indexMultiplcation+1]);
    }

    tempExpressionList.forEach((curStr) => {

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
