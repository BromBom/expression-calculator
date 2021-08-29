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

  

}

module.exports = {
    expressionCalculator
}