export const calculate = (expression: string): number => {
  let result = 0;
  for (let i = 0; i < expression.length; i++) {
    if (!isNaN(Number(expression.charAt(i)))) {
      let temp = expression.charAt(i);
      result += Number(expression.charAt(i));
    }
  }
  return result;
}
