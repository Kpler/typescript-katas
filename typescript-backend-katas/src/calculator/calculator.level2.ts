enum Operation {
  ADDITION = '+',
  SUBTRACTION = '-',
}

export const calculate = (expression: string): number => {
  const expressionElements: string[] = expression.split(' ');

  let result = 0;
  let nextOperation: Operation = Operation.ADDITION;

  expressionElements.forEach(element => {
    if (isOperand(element)) {
      if (nextOperation===Operation.ADDITION) {
        result += Number(element);
      }
      else {
        result -= Number(element);
      }
    }
    else {
      if (element === Operation.ADDITION) {
        nextOperation = Operation.ADDITION;
      } else {
        nextOperation = Operation.SUBTRACTION;
      }
    }
  });

  return result;
}
const isOperand = (element: string): boolean => {
  return element !== Operation.ADDITION && element !== Operation.SUBTRACTION;
}
