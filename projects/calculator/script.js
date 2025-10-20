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

let lhs = null
let operator = null
let rhs = null

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

function integerSelect(numer) {
    if (operator == null) {
        if (lhs == null) {
            lhs = number
        } else {
            lhs = (lhs * 10) + number
        }
    } else {
        if (rhs == null) {
            rhs = number
        } else {
            rhs = (lhs * 10) + number
        }
    }
}

const _1 = document.querySelector('#1')
_1.addEventListener('click', (event) => integerSelect(1))
const _2 = document.querySelector('#2')
_2.addEventListener('click', (event) => integerSelect(2))
const _3 = document.querySelector('#3')
_3.addEventListener('click', (event) => integerSelect(3))

const _4 = document.querySelector('#4')
_4.addEventListener('click', (event) => integerSelect(4))
const _5 = document.querySelector('#5')
_5.addEventListener('click', (event) => integerSelect(5))
const _6 = document.querySelector('#6')
_6.addEventListener('click', (event) => integerSelect(6))

const _7 = document.querySelector('#7')
_7.addEventListener('click', (event) => integerSelect(7))
const _8 = document.querySelector('#8')
_8.addEventListener('click', (event) => integerSelect(8))
const _9 = document.querySelector('#9')
_9.addEventListener('click', (event) => integerSelect(9))

const _add = document.querySelector('#add')
const _subtract = document.querySelector('#subtract')
const _multiply = document.querySelector('#multiply')
const _divide = document.querySelector('#divide')

const _equal = document.querySelector('#equal')
const _clear = document.querySelector('#clear')

