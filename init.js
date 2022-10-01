// init with currentOperand = '0'

let currentOperand = '0',
  previousOperand = '',
  operation = undefined;


function clear() {
  console.log(`----- Clear -----`)
  currentOperand = '0',
  previousOperand = '',
  operation = undefined;
}

/**
 * 
 * @param {String} number Number to append to currentOperand
 */
function appendNumber(number) {
  if (currentOperand.startsWith("0")) {
    currentOperand = currentOperand.slice(1)
  }
  currentOperand = currentOperand.toString() + number.toString()
}

/**
 * 
 * @param {Sring} operation The operator to be used by the cacul
 * @returns 
 */
  function chooseOperation(op) {

    if (currentOperand === '' || previousOperand !== '') return
  
    operation = op
    previousOperand = currentOperand + op
    currentOperand = ''
  }


function compute() {
  console.log(`Calcul de  ${previousOperand}${currentOperand} `);
  let computation
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return
  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
    default:
      return
  }
  currentOperand = computation
  operation = undefined
  previousOperand = ''
}

function display() {
  console.log(`
  previousOperand = ${previousOperand}
  operation = ${operation}
  currentOperand = ${currentOperand}
`)
}

function test(){
  appendNumber(1);
  appendNumber(0);
  chooseOperation('*');
  appendNumber(2);
  display();
  compute()
  display()
  clear();
  display()
}

test()