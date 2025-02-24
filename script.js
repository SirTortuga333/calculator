// Basic Calculator Functions
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    
    if(b === 0 ) return 'Nope'

    return (a/b).toFixed(3);
}

function operate(operator, a, b){
    switch (operator) {
        case '+':
            return add(a,b)            
            break;

        case '-':
            return subtract(a,b)            
            break;
    
        case '*':
            return multiply(a,b)            
            break;

        case '/':
            return divide(a,b)            
            break;

        default:
            console.log('Not a valid operator!')
            return 'ERROR'
            break;
    }
}

// Eval Function
function evalString(string){
    
    const operation = [...string];

    operatorIndex = operation.findIndex(item => operators.includes(item))

    // Check for multiple operators or none
    if(operation.filter(item => operators.includes(item)).length !== 1){
        return 'ERROR'
    }

    num1 = operation.slice(0, operatorIndex).join('')
    num2 = operation.slice(operatorIndex+1).join('')
    operator = operation.slice(operatorIndex, operatorIndex+1).toString()

    

    return operate(operator, parseInt(num1), parseInt(num2));
}


const numbers = '0123456789';
const operators = '+-*/';
let num1, num2, operator;

// Add event listeners for buttons
    // the function needs to write the button.textContent to .result secuentially
    // and save the numbers and operator to respective variable for reading
        // maybe save everything as string and ... the string to read it

const buttons = [...document.querySelectorAll('button')];
const result = document.querySelector('.result');

buttons.forEach(element => {

    if(element.classList.contains('equal')){
        element.addEventListener('click', (Element) => {
            if(result.textContent !== ''){
                result.textContent = evalString(result.textContent);
            }
        })
    }else if(element.classList.contains('clear')){
        element.addEventListener('click', (Element) => {
            result.textContent = '0'
        })

    }else {
        element.addEventListener('click', (Element) => {
            if(result.textContent === 'ERROR' || result.textContent === 'Nope'){
                result.textContent = '0';
            }
            if(result.textContent === '' && Element.target.classList.contains('operator')){
                result.textContent = '0' + Element.target.textContent
            }else{
                if(result.textContent === '0')
                    result.textContent = Element.target.textContent
                else
                    result.textContent += Element.target.textContent
            }
            return
        })
    }
});