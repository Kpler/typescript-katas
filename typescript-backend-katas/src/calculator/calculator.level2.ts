enum Operators {
  ADD = "+",
  SUBSTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "/",
}

const operators_to_method: { [key: string]: (a: number, b: number) => number} = {
  [Operators.MULTIPLY]: (a: number, b: number) => a*b,
  [Operators.DIVIDE]: (a: number, b: number) => a/b,
  [Operators.ADD]: (a: number, b: number) => a+b,
  [Operators.SUBSTRACT]: (a: number, b: number) => a-b,
}

const operators_by_reversed_priority = ["+", "-", "/", "*"]

export const calculate_with = ()


export const calculate = (expression: string): number => {
  const expression_as_list = expression.split(" ");

  for (let operator of operators_by_reversed_priority) {
    if (!expression_as_list.includes(operator)) {
      continue;
    }
    const [left, ...right] = expression.split(` ${operator} `);
    return operators_to_method[operator](calculate(left), calculate(right.join(` ${operator} `)))
  }

  return Number(expression);
}
