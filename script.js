// Initialize variables
let firstOperand = '';
let secondOperand = '';
let operator = null;
let screenContent = document.getElementById('screen');
let equalButton = document.getElementById('equals');

// Set up click listeners for all number buttons
let buttons = Array.from(document.getElementsByClassName('number'));
buttons.forEach(button => {
    button.addEventListener('click', () => setOperand(button.textContent));
});

// User clicks button, adds numbers to first operand until operator is selected
//   if (operator) is switch to decide whether first or second
// Operator is selected
// Additional numbers are added to second operand
// Either = or another operator is clicked, causing the operation to be evaluated and the results returned
//      If =, results are returned to screen
//      If another operator, results are returned to first operand and displayed
// Convert operands to numbers from strings, calculate using operator using series of if statements

function setOperand(num) {
    if (!operator) {
        // Add digit to firstOperand
        firstOperand += num;
    } else {
        // Add digit to secondOperand
        secondOperand += num;
    }
    refreshScreen();
}

// Set the operator as a string
function setOperator(str) {
    // if second operand exists, run calculation before changing operator
    if (secondOperand) {
        //calculate();
        // secondOperand = null;
    }
    operator = str;
    refreshScreen();
}

// Add event listeners to set operator to respective operator
let operatorButtons = Array.from(document.getElementsByClassName('operator'));
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => setOperator(operatorButton.textContent));
})

// Add event listener for equal button
equalButton.addEventListener('click', () => {
    calculate(firstOperand, operator, secondOperand);
    operator = null;
    secondOperand = null;
    refreshScreen();
    firstOperand = null;
});

// Refresh screen with updated values, to be called at the end of every button press
function refreshScreen() {
    // Only display truthy elements
    if (operator && secondOperand) {
        screenContent.textContent = `${firstOperand} ${operator} ${secondOperand}`; 
    } else if (operator && !secondOperand) {
        screenContent.textContent = `${firstOperand} ${operator}`;
    } else if (!operator && !secondOperand) {
        screenContent.textContent = `${firstOperand}`;
    }
}

// Calculate results -
//    Return results to firstOperand
function calculate(firstOp, operator, secondOp) {
    firstOp = parseFloat(firstOperand);
    secondOp = parseFloat(secondOperand);
    // If statements to determine operator
    if (operator === '+'){
        firstOperand = firstOp + secondOp;
    } else if (operator === '-') {
        firstOperand = firstOp - secondOp;
    } else if (operator === '*') {
        firstOperand = firstOp * secondOp;
    } else if (operator = '/') {
        firstOperand = firstOp / secondOp;
    } else {
        console.error('How the shit did you manage to get this error?');
    }
}

// = button - run calculate() and clear operator and secondOperand
