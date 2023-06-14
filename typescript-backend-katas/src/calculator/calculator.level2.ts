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

export const calculate = (expression: string): number => {
  console.log("Expression eval: ", expression);
  const expression_as_list = expression.split(" ");

  const betweenParenthesis: string[] = [];
  let weAreBetweenParenthesis = false;
  for (let element of expression_as_list) {
    if (element === "(") {
      weAreBetweenParenthesis = true;
      continue;
    }
    if (element === ")") {
      weAreBetweenParenthesis = false;
      break;
    }
    if (weAreBetweenParenthesis) {
      betweenParenthesis.push(element)
    }
  }

  if (betweenParenthesis.length > 0) {
    const stringBtwnParen = betweenParenthesis.join(' ');
    const computedBetweenParenthesis = calculate(stringBtwnParen);
    const newExpression = expression.replace(`( ${stringBtwnParen} )`, computedBetweenParenthesis.toString());
    return calculate(newExpression);
  }

  for (let operator of operators_by_reversed_priority) {
    if (!expression_as_list.includes(operator)) {
      continue;
    }
    const [left, ...right] = expression.split(` ${operator} `);
    return operators_to_method[operator](calculate(left), calculate(right.join(` ${operator} `)))
  }

  return Number(expression);
}
