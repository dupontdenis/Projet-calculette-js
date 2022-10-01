import Calculator from "./calculator.js"

function display(calculette) {
    console.log(`
    previousOperand = ${calculette.previousOperand}
    operation = ${calculette.operation}
    currentOperand = ${calculette.currentOperand}
  `)
}


function test() {
    let cal = new Calculator("2", "4")
    cal.appendNumber(0);
    cal.appendNumber(0);
    cal.appendNumber(1);
    cal.chooseOperation('+');
    cal.appendNumber(2);
    display(cal);
    cal.compute();
    display(cal);
    cal.clear();
    display(cal);
}

test();