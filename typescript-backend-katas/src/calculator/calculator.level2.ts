export const calculate = (expression: string): number => {
  let result = 0;
  for (let i = 0; i < expression.length; i++) {
    let temp = expression.charAt(i);
    if (!isNaN(Number(expression.charAt(i)))) {
      while (!isNaN(Number(expression.charAt(i + 1))) && i < expression.length) {
        temp += expression.charAt(i + 1);
        i++;
      }
      result += Number(temp);
    }
  }
  return result;
}
