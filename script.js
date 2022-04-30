// Initialize variables for operands
let firstOperand = '';
let secondOperand = '';
let operator = null;

// Set up click listeners for all number buttons
let buttons = Array.from(document.getElementsByClassName('number'));
buttons.forEach(button => {
    button.addEventListener('click', setOperand(button.textContent));
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
}

// Refresh screen with updated values, to be called at the end of every button press
let screenContent = document.getElementById('screen');
function refreshScreen() {
    screenContent.textContent = firstOperand + operator + secondOperand; 
}