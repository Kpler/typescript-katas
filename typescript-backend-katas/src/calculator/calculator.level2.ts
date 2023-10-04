enum Operation {
    ADDITION = '+',
    SUBTRACTION = '-',
}

export const calculate = (expression: string): number => {
    const expressionElements: string[] = expression.split(' ');

    let result = 0;
    let nextOperation: (x: number, y: number) => number = (x, y) => add(x,  y);

    expressionElements.forEach(element => {
        if (isOperand(element)) {
            result = nextOperation(result, Number(element));
        } else {
            nextOperation = getNextOperation(element);
        }
    });

    return result;
}

const getNextOperation = (element: string) => {
    if (element === Operation.ADDITION) {
        return add;
    } else {
        return subtract;
    }
}

const isOperand = (element: string): boolean => {
    return element !== Operation.ADDITION && element !== Operation.SUBTRACTION;
}

const add: (x: number, y: number) => number = (x, y) => x + y;
const subtract: (x: number, y: number) => number = (x, y) => x - y;