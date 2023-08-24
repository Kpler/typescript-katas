enum Operators {
    Addition = '+',
    Subtraction = '-',
    Multiplication = '*',
    Division = '/',
}

const priorityOperation = (operandsAndOperators: Array<string>, operator: Operators.Division | Operators.Multiplication) => {
    while (operandsAndOperators.indexOf(operator) !== -1) {
        const operatorIndex = operandsAndOperators.indexOf(operator);
        let operatorResult = 0;
        if (operator === Operators.Multiplication) {
            operatorResult = Number(operandsAndOperators[operatorIndex - 1]) * Number(operandsAndOperators[operatorIndex + 1]);
        } else {

            let divisor = Number(operandsAndOperators[operatorIndex + 1]);
            if (divisor === 0) {
                throw new DivisionError("Division by 0 is forbidden");
            }
            operatorResult = Number(operandsAndOperators[operatorIndex - 1]) / divisor;
        }
        operandsAndOperators[operatorIndex + 1] = operatorResult.toString()
        operandsAndOperators.splice(operatorIndex - 1, 2)
    }
}

export const calculate = (expression: string): number => {
    let result = 0;
    let nextOperation = Operators.Addition;
    const operandsAndOperators: Array<string> = expression.split(" ")

    priorityOperation(operandsAndOperators, Operators.Multiplication);

    priorityOperation(operandsAndOperators, Operators.Division);

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


export class DivisionError extends Error{
    constructor(message: string) {
        super(message);
        this.name = "DivisionError";
    }
}