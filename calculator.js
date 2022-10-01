class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText

        this.clear()
    }

    /**
     * 
     */
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    /**
     * 
     * @param {String} number Number to append to currentOperand
     */
    appendNumber(number) {
        if (this.currentOperand.startsWith("0")) {
            this.currentOperand = this.currentOperand.slice(1)
        }
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    /**
     * 
     * @param {Sring} operation The operator to be used by the cacul
     * @returns 
     */
    chooseOperation(operation) {

        if (this.currentOperand === '' || this.previousOperand !== '') return

        this.operation = operation
        this.previousOperand = this.currentOperand + this.operation
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
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
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay() {
        this.currentOperandText = this.currentOperand
        if (this.operation != null) {
            this.previousOperandText = this.previousOperand
        } else {
            this.previousOperandText = ''
        }
    }
}
// 

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