enum Operation {
    ADDITION = '+',
    SUBTRACTION = '-',
    MULTIPLICATION = '*',
}

export const calculate = (expression: string): number => {
    const expressionElements: string[] = expression.split(' ');

    let result = 0;
    let nextOperation: (x: number, y: number) => number = (x, y) => add(x,  y);

    expressionElements.forEach(element => {
        if (!isOperation(element)) {
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
    } if (element === Operation.SUBTRACTION ) {
      return subtract;
    } else {
      return multiply;
    }
}

function isOperation(element: string): element is Operation {
  return [Operation.ADDITION, Operation.SUBTRACTION, Operation.MULTIPLICATION].includes(element as Operation)
}

const add: (x: number, y: number) => number = (x, y) => x + y;
const subtract: (x: number, y: number) => number = (x, y) => x - y;
const multiply: (x: number, y: number) => number = (x, y) => x * y;