function add(a, b) {
    return a + b;
}

function subtract(a, b) {

    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let operator = "", currentValue = "", previousValue = "";

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '/':
            if (b === 0) {
                clear();
                alert("Invalid")
                break;
            }
            else return divide(a, b);
            break;
        default: return currentValue;
    }
}

const display = document.querySelector('#display')
display.value = ""
const digits = document.querySelectorAll('.digits')
const operators = document.querySelectorAll(".operators");
const equals = document.querySelector("#equal");
const decimal = document.querySelector(".decimal");
const cleared = document.querySelector('#clear')
const remove = document.querySelector("#remove");
cleared.addEventListener('click', clear);

function clear() {
    display.value = ""
    currentValue = "";
    operator = "";
    previousValue = "";
}

digits.forEach(button => {
    button.addEventListener('click', (e) => {
        handleValue(e.target.textContent)
        if (!operator) display.value = `${currentValue}`;
        display.value = `${previousValue} ${operator} ${currentValue}`;
    })
}
)
operators.forEach(oper => {
    oper.addEventListener('click', (e) => {
        if (currentValue != "" && previousValue === "") {
            handleOperator(e.target.textContent)
            display.value += ` ${operator}`;
        }
    }
    )
})
function handleValue(number) {
    currentValue += number;
}

function handleOperator(opera) {
    operator = opera;
    previousValue = currentValue;
    currentValue = ""
}
function handleEqual() {
    let result = operate(operator, Number(previousValue), Number(currentValue),)
    if (result != undefined) {
        display.value = result;
        currentValue = result
        previousValue = ""
    }
}

equals.addEventListener("click", () => {
    if (currentValue != "" && previousValue != "")
        handleEqual();
})

decimal.addEventListener("click", () => { addDecimal();
     });

function addDecimal() {
    if (!currentValue.includes(".")){
        currentValue += "."
        display.value = display.value.concat(".") }
}

remove.addEventListener("click", () => {
    if (currentValue != "") {
        currentValue = currentValue.toString().slice(0, -1)
        display.value = display.value.slice(0, -1)
    }
}
)