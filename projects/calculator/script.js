function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let lhs = 0
let operator = ''
let rhs = 0

function operate(_operator, _lhs, _rhs) {
    switch (_operator) {
        case '+':
            return add(_lhs, _rhs)
        case '-':
            return subtract(_lhs, _rhs)
        case '*':
            return multiply(_lhs, _rhs)
        case '/':
            return divide(_lhs, _rhs)
        default:
            console.error(`${_operator} is not a valid operator.`)

    }
}