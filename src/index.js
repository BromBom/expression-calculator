function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let stack = [];
    const openBr = "(";
    const closedBr = ")";
    let str;

//---------------------------------Brackets-------------------------------------
    for (let i = 0; i < expr.length; i++) {
      let currentSymbol = expr[i];
    
      if (openBr === currentSymbol) {
          stack.push(currentSymbol);
      }
      else {
          if ((stack.length === 0) && (currentSymbol === closedBr)) {
            throw ("ExpressionError: Brackets must be paired");
          }
  
          let topElements = stack[stack.length - 1];
          if ((topElements === openBr) && (currentSymbol === closedBr)) {
              stack.pop();
          }
      }
    }
    if (stack.length !== 0) throw ("ExpressionError: Brackets must be paired");
  //-----------------------------------------------------------------------------
  

  str = expr.split(' ').join('')
  
  //let start = str.indexOf('(');
 // let end = str.lastIndexOf(')');
  
  let n = [],
    op = [],
    index = 0;
  
  n[index] = '';
  
  for (let i = 0; i < str.length; i++) {
  
    if (isNaN(parseInt(str[i])) && !opLast) {
        op[index] = str[i];
        index++;
        n[index] = '';
        opLast = true;
    } else {
        n[index] += str[i];
        opLast = false;
    }
  }
  
   
    acc = parseFloat(n[0]);
    for (var i = 0; i < op.length; i++) {
        var num = parseFloat(n[i + 1]);
        switch (op[i]) {
            case "+":
                acc = acc + num;
                break;
            case "-":
                acc = acc - num;
                break;
            case "*":
                acc = acc * num;
                break;
            case "/":
                acc = acc / num;
                if (acc === Infinity) throw ("TypeError: Division by zero.");
                break;
          }
      }

  return acc
}

module.exports = {
    expressionCalculator
}