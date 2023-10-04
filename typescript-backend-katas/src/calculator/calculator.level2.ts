export const calculate = (expression: string): number => {
  const expressionElements: string[] = expression.split(' ');

  let result = 0;
  let nextOperation: '+' | '-';

  expressionElements.forEach(element => {
    if (isOperand(element)) {
      result += Number(element);
    }
  });

  return result;
}
const isOperand = (element: string): boolean => {
  return element !== '+';
}