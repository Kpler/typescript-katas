enum Operators {
    Addition = '+',
    Subtraction = '-',
    Multiplication = '*',
    Division = '/',
}

export const calculate = (expression: string): number => {
    let result = 0;
    let nextOperation = Operators.Addition;
    const operandsAndOperators: Array<string> = expression.split(" ")

    while (operandsAndOperators.indexOf(Operators.Multiplication) !== -1) {
      const multiplicationIndex = operandsAndOperators.indexOf(Operators.Multiplication);
      const multiplicationResult = Number(operandsAndOperators[multiplicationIndex-1]) * Number(operandsAndOperators[multiplicationIndex+1]);
      operandsAndOperators[multiplicationIndex + 1] = multiplicationResult.toString()
      operandsAndOperators.splice(multiplicationIndex - 1, 2)
    }

    while (operandsAndOperators.indexOf(Operators.Division) !== -1) {
        const divisionIndex = operandsAndOperators.indexOf(Operators.Division);
        const divisionResult = Number(operandsAndOperators[divisionIndex-1]) * Number(operandsAndOperators[divisionIndex+1]);
        operandsAndOperators[divisionIndex + 1] = divisionResult.toString()
        operandsAndOperators.splice(divisionIndex - 1, 2)
    }

    operandsAndOperators.forEach((curStr) => {

        if (!isNaN(Number(curStr)) && nextOperation === Operators.Addition) {
            result += Number(curStr);
        } else if (!isNaN(Number(curStr)) && nextOperation === Operators.Subtraction) {
            result -= Number(curStr);
        } else if (curStr === Operators.Subtraction) {
            nextOperation = Operators.Subtraction;
        } else if (curStr === Operators.Addition) {
            nextOperation = Operators.Addition;
        }
    })
    return result;
}
